let selectedMaterials = new Set();
let isHeaderCollapsed = false;

window.onload = () => { 
    if (typeof habitatDb !== 'undefined') {
        initUI();
        applyFilters(); 
    }
};

function initUI() {
    // 1. 전체 데이터에서 재료 이름만 추출 (수량 부분 ' × N' 제거 및 중복 제거)
    const allMaterialsRaw = habitatDb.flatMap(h => h.materials);
    const baseMaterials = allMaterialsRaw.map(m => m.split(' × ')[0].trim());
    const uniqueMaterials = [...new Set(baseMaterials)].sort();

    // 2. 재료 필터 버튼 생성
    const matGroup = document.getElementById('materialOptions');
    const allMatBtn = document.createElement('button');
    allMatBtn.className = 'opt-btn active';
    allMatBtn.textContent = '전체';
    allMatBtn.onclick = () => { selectedMaterials.clear(); updateActiveUI(); applyFilters(); };
    matGroup.appendChild(allMatBtn);

    uniqueMaterials.forEach(mat => {
        const btn = document.createElement('button');
        btn.className = 'opt-btn';
        btn.textContent = mat;
        btn.onclick = () => {
            if (selectedMaterials.has(mat)) selectedMaterials.delete(mat);
            else selectedMaterials.add(mat);
            updateActiveUI();
            applyFilters();
        };
        matGroup.appendChild(btn);
    });

    // 3. 모바일 접속 시 기본으로 필터 접기
    if (window.innerWidth <= 768) {
        toggleHeader();
    }
}

function updateActiveUI() {
    document.querySelectorAll('#materialOptions .opt-btn').forEach(b => {
        if (b.textContent === '전체') {
            b.classList.toggle('active', selectedMaterials.size === 0);
        } else {
            b.classList.toggle('active', selectedMaterials.has(b.textContent));
        }
    });
}

function applyFilters() {
    const queryName = document.getElementById('searchHabitatName').value.trim().toLowerCase();
    const queryMat = document.getElementById('searchMaterial').value.trim().toLowerCase();

    const filtered = habitatDb.filter(h => {
        // 이름 검색 일치 여부
        const nameOk = !queryName || h.name.toLowerCase().includes(queryName);
        
        // 재료 텍스트 검색 일치 여부
        const matTextOk = !queryMat || h.materials.some(m => m.toLowerCase().includes(queryMat));
        
        // 버튼으로 선택된 재료 포함 여부 (선택한 재료를 '모두' 포함해야 출력)
        const matBtnOk = selectedMaterials.size === 0 || [...selectedMaterials].every(selected => 
            h.materials.some(m => m.includes(selected))
        );

        return nameOk && matTextOk && matBtnOk;
    });

    renderHabitats(filtered);
}

function renderHabitats(data) {
    const list = document.getElementById('habitatList');
    list.innerHTML = '';

    data.forEach(h => {
        const card = document.createElement('div');
        card.className = 'pokemon-card';
        
        card.innerHTML = `
            <img src="${h.imageUrl}" onerror="this.src='https://via.placeholder.com/100?text=?';">
            <div class="name-box">
                <span class="id-number">${h.displayId}</span><br>
                <span class="p-name">${h.name}</span>
            </div>
        `;
        list.appendChild(card);
    });
}

function toggleHeader() { 
    const header = document.getElementById('mainHeader'); 
    isHeaderCollapsed = !isHeaderCollapsed; 
    header.classList.toggle('collapsed', isHeaderCollapsed); 
    const toggleText = document.querySelector('.toggle-text');
    if (toggleText) toggleText.textContent = isHeaderCollapsed ? "필터 펼치기" : "필터 접기"; 
}

function resetAllFilters() {
    document.querySelectorAll('.search-input').forEach(i => i.value = '');
    selectedMaterials.clear();
    updateActiveUI();
    applyFilters();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 맨 위로 가기 버튼 로직
window.onscroll = function() {
    toggleTopButton();
};

function toggleTopButton() {
    const topBtn = document.getElementById("scrollTopBtn");
    if (!topBtn) return;
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
