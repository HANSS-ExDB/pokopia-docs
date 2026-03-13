let selectedEnv = 'all', selectedFlavor = 'all';
let selectedSpecs = new Set(), selectedTags = new Set();
let isHeaderCollapsed = false;

window.onload = () => { if (typeof pokemonDb !== 'undefined') initUI(); };

function initUI() {
    const names = [...new Set(pokemonDb.map(p => p.name))];
    const envs = [...new Set(pokemonDb.map(p => p.env))].filter(v => v && v !== 'nan');
    const flavors = [...new Set(pokemonDb.map(p => p.flavor))].filter(v => v && v !== 'nan');
    const specs = [...new Set(pokemonDb.flatMap(p => p.specialties))].filter(v => v && v !== 'nan');
    const tags = [...new Set(pokemonDb.flatMap(p => p.likes))].filter(v => v && v !== 'nan');

    fillDatalist('listNames', names);
    fillDatalist('listSpecs', specs);
    fillDatalist('listLikes', tags);
    fillDatalist('listFlavors', flavors);

    createButtons('envOptions', ['전체', ...envs], (v) => { selectedEnv = v; applyFilters(); }, 'env');
    
    const specGroup = document.getElementById('specOptions');
    const allSpecBtn = document.createElement('button');
    allSpecBtn.className = 'opt-btn active'; allSpecBtn.textContent = '전체';
    allSpecBtn.onclick = () => { clearHighlight(); selectedSpecs.clear(); updateActiveUI(); applyFilters(); };
    specGroup.appendChild(allSpecBtn);
    specs.forEach(s => {
        const btn = document.createElement('button'); btn.className = 'opt-btn'; btn.textContent = s;
        btn.onclick = () => { clearHighlight(); selectedSpecs.has(s) ? selectedSpecs.delete(s) : selectedSpecs.add(s); updateActiveUI(); applyFilters(); };
        btn.onmouseenter = () => highlightByTag('specialties', s);
        btn.onmouseleave = clearHighlight;
        specGroup.appendChild(btn);
    });

    tags.forEach(t => {
        const el = document.createElement('div'); el.className = 'tag'; el.textContent = t;
        el.onclick = () => { clearHighlight(); selectedTags.has(t) ? selectedTags.delete(t) : selectedTags.add(t); updateActiveUI(); applyFilters(); };
        el.onmouseenter = () => highlightByTag('likes', t);
        el.onmouseleave = clearHighlight;
        document.getElementById('tagBox').appendChild(el);
    });

    createButtons('flavorOptions', ['전체', ...flavors], (v) => { selectedFlavor = v; applyFilters(); }, 'flavor');
    applyFilters();

    // 🛠️ [추가] 모바일(화면 너비 768px 이하)로 접속 시 기본으로 필터 접어두기
    if (window.innerWidth <= 768) {
        toggleHeader();
    }
} // <-- initUI() 함수가 끝나는 중괄호

function fillDatalist(id, data) {
    const list = document.getElementById(id);
    list.innerHTML = '';
    data.sort().forEach(item => {
        const option = document.createElement('option');
        option.value = item;
        list.appendChild(option);
    });
}

function applyFilters() {
    const qNo = document.getElementById('searchNo').value.trim();
    const qName = document.getElementById('searchName').value.trim();
    const qSpec = document.getElementById('searchSpec').value.trim();
    const qLike = document.getElementById('searchLike').value.trim();
    const qFlavor = document.getElementById('searchFlavor').value.trim();

    const list = document.getElementById('mainList');
    const filtered = pokemonDb.filter(p => {
        const envOk = (selectedEnv === 'all' || p.env === selectedEnv);
        const flavorBtnOk = (selectedFlavor === 'all' || p.flavor === selectedFlavor);
        const specBtnOk = selectedSpecs.size === 0 || [...selectedSpecs].some(s => p.specialties.includes(s));
        const tagsBtnOk = selectedTags.size === 0 || [...selectedTags].every(t => p.likes.includes(t));

        const formattedPokedexNo = String(p.pokedex_no).padStart(3, '0');
        const noOk = !qNo || formattedPokedexNo.includes(qNo) || String(p.pokedex_no).includes(qNo);
        const nameOk = !qName || p.name.includes(qName);
        const specOk = !qSpec || p.specialties.some(s => s.includes(qSpec));
        const flavorOk = !qFlavor || p.flavor.includes(qFlavor);

        let likeOk = true;
        if (qLike) {
            const keywords = qLike.split(',').map(k => k.trim()).filter(k => k !== "");
            likeOk = keywords.every(kw => p.likes.some(l => l.includes(kw)));
        }

        return envOk && flavorBtnOk && specBtnOk && tagsBtnOk && noOk && nameOk && specOk && likeOk && flavorOk;
    });

    list.innerHTML = '';
    filtered.forEach(p => {
        const card = document.createElement('div');
        card.className = 'pokemon-card'; card.dataset.id = p.id;
        const imageId = String(p.id).padStart(3, '0');
        const displayId = String(p.pokedex_no).padStart(3, '0');
        card.innerHTML = `<img src="./images/docs_${imageId}.png" onerror="this.src='https://via.placeholder.com/100?text=?';"><div class="name-box"><span class="id-number">${displayId}</span><br><span class="p-name">${p.name}</span></div>`;
        card.onmouseenter = () => previewPokemon(p, true);
        card.onmouseleave = () => previewPokemon(p, false);
        card.onclick = () => openModal(p);
        list.appendChild(card);
    });
    updateActiveUI();
}

function openModal(p) {
    const imageId = String(p.id).padStart(3, '0');
    const displayId = String(p.pokedex_no).padStart(3, '0');
    document.getElementById('mId').textContent = displayId;
    document.getElementById('mName').textContent = p.name;
    document.getElementById('mImg').src = `./images/docs_${imageId}.png`;
    document.getElementById('mEnv').textContent = p.env;
    document.getElementById('mSpec1').textContent = p.specialties[0] || "-";
    document.getElementById('mSpec2').textContent = p.specialties[1] || "-";
    document.getElementById('mFlavor').textContent = p.flavor;
    
    const pBox = document.getElementById('mProduceBox');
    if(p.produce) { pBox.style.display = 'flex'; document.getElementById('mProduce').textContent = p.produce; }
    else { pBox.style.display = 'none'; }

    const tagContainer = document.getElementById('mTags');
    tagContainer.innerHTML = '';
    p.likes.forEach(like => {
        const span = document.createElement('span');
        span.className = 'tag';
        span.textContent = like;
        tagContainer.appendChild(span);
    });

    document.getElementById('detailModal').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeModal() { document.getElementById('detailModal').style.display = 'none'; document.body.style.overflow = 'auto'; }
function toggleHeader() { const header = document.getElementById('mainHeader'); isHeaderCollapsed = !isHeaderCollapsed; header.classList.toggle('collapsed', isHeaderCollapsed); document.querySelector('.toggle-text').textContent = isHeaderCollapsed ? "필터 펼치기" : "필터 접기"; }
function highlightByTag(type, value) {
    if (value === 'all' || isHeaderCollapsed) return;
    const grid = document.getElementById('mainList');
    grid.classList.add('dimmed');
    document.querySelectorAll('.pokemon-card').forEach(card => {
        const p = pokemonDb.find(item => item.id === parseInt(card.dataset.id));
        if(!p) return;
        let match = false;
        if (type === 'env') match = p.env === value;
        else if (type === 'flavor') match = p.flavor === value;
        else if (type === 'specialties') match = p.specialties.includes(value);
        else if (type === 'likes') match = p.likes.includes(value);
        card.classList.toggle('highlight', match);
    });
}
function clearHighlight() { const grid = document.getElementById('mainList'); if(grid) grid.classList.remove('dimmed'); document.querySelectorAll('.pokemon-card').forEach(c => c.classList.remove('highlight')); }
function previewPokemon(p, isEnter) {
    if (isHeaderCollapsed) return;
    if (isEnter) {
        document.querySelectorAll('#envOptions .opt-btn').forEach(b => b.classList.toggle('preview', b.textContent === p.env));
        document.querySelectorAll('#flavorOptions .opt-btn').forEach(b => b.classList.toggle('preview', b.textContent === p.flavor));
        document.querySelectorAll('#specOptions .opt-btn').forEach(b => b.classList.toggle('preview', p.specialties.includes(b.textContent)));
        document.querySelectorAll('#tagBox .tag').forEach(t => t.classList.toggle('preview', p.likes.includes(t.textContent)));
    } else {
        document.querySelectorAll('.opt-btn, .tag').forEach(el => el.classList.remove('preview'));
    }
}
function updateActiveUI() {
    document.querySelectorAll('#envOptions .opt-btn').forEach(b => b.classList.toggle('active', selectedEnv === (b.textContent === '전체' ? 'all' : b.textContent)));
    document.querySelectorAll('#flavorOptions .opt-btn').forEach(b => b.classList.toggle('active', selectedFlavor === (b.textContent === '전체' ? 'all' : b.textContent)));
    document.querySelectorAll('#specOptions .opt-btn').forEach(b => b.textContent === '전체' ? b.classList.toggle('active', selectedSpecs.size === 0) : b.classList.toggle('active', selectedSpecs.has(b.textContent)));
    document.querySelectorAll('#tagBox .tag').forEach(t => t.classList.toggle('active', selectedTags.has(t.textContent)));
}
function createButtons(id, list, callback, type) {
    const container = document.getElementById(id);
    list.forEach((item, idx) => {
        const btn = document.createElement('button');
        btn.className = 'opt-btn' + (idx === 0 ? ' active' : '');
        btn.textContent = item;
        btn.onclick = () => { clearHighlight(); callback(item === '전체' ? 'all' : item); };
        btn.onmouseenter = () => highlightByTag(type, item === '전체' ? 'all' : item);
        btn.onmouseleave = clearHighlight;
        container.appendChild(btn);
    });
}
function resetAllFilters() {
    document.querySelectorAll('.search-input').forEach(i => i.value = '');
    clearHighlight(); selectedEnv = 'all'; selectedFlavor = 'all'; selectedSpecs.clear(); selectedTags.clear();
    applyFilters(); window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.onscroll = function() {
    toggleTopButton();
};

function toggleTopButton() {
    const topBtn = document.getElementById("scrollTopBtn");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// 다크 모드 토글 로직
const themeToggleBtn = document.getElementById('themeToggle');
const htmlElement = document.documentElement;

// 사용자가 이전에 선택한 테마가 있는지 확인 (없으면 라이트)
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    htmlElement.setAttribute('data-theme', savedTheme);
    themeToggleBtn.innerText = savedTheme === 'dark' ? '☀️' : '🌙';
}

themeToggleBtn.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    
    if (currentTheme === 'dark') {
        htmlElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        themeToggleBtn.innerText = '🌙';
    } else {
        htmlElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        themeToggleBtn.innerText = '☀️';
    }
});
