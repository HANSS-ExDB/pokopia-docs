let selectedMaterials = new Set();
let isHeaderCollapsed = false;

window.onload = () => { 
    if (typeof habitatDb !== 'undefined') {
        initUI();
        applyFilters(); 
    }
};

// 분류를 위한 키워드 사전
const categoryKeywords = {
    nature: ['풀', '꽃', '나무', '바위', '돌', '물', '밭', '곳', '폭포', '온천', '수풀', '식물', '그루터기'],
    furniture: ['의자', '테이블', '벤치', '걸상', '침대', '소파', '옷장', '서랍장', '수납장', '화장대', '책꽂이', '계산대', '자판기', '가로등', '램프', '조명', '라이트', '스포트라이트', '화톳불', '모닥불', '캠프파이어', '머신', '제어장치', '발전기', '잔교', '전봇대', '간판', '표지판', '스테이지', '샌드백', '파라솔', '체어', '거울', '칸막이', '창고', '샤워기']
};

function getCategory(matName) {
    for (let k of categoryKeywords.nature) {
        if (matName.includes(k)) return 'matGroupNature';
    }
    for (let k of categoryKeywords.furniture) {
        if (matName.includes(k)) return 'matGroupFurniture';
    }
    return 'matGroupProps';
}

function initUI() {
    const allMaterialsRaw = habitatDb.flatMap(h => h.materials);
    const baseMaterials = allMaterialsRaw.map(m => m.split(' × ')[0].trim());
    const uniqueMaterials = [...new Set(baseMaterials)].sort();

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
        
        const targetGroupId = getCategory(mat);
        const targetGroup = document.getElementById(targetGroupId);
        if (targetGroup) {
            targetGroup.appendChild(btn);
        }
    });

    if (window.innerWidth <= 768) {
        toggleHeader();
    }
}

function updateActiveUI() {
    document.querySelectorAll('.filter-container .opt-btn').forEach(b => {
        b.classList.toggle('active', selectedMaterials.has(b.textContent));
    });
}

function applyFilters() {
    const queryName = document.getElementById('searchHabitatName').value.trim().toLowerCase();
    const queryMat = document.getElementById('searchMaterial').value.trim().toLowerCase();

    const filtered = habitatDb.filter(h => {
        const nameOk = !queryName || h.name.toLowerCase().includes(queryName);
        const matTextOk = !queryMat || h.materials.some(m => m.toLowerCase().includes(queryMat));
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
