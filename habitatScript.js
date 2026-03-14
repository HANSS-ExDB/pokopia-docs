let selectedMaterials = new Set();
let isHeaderCollapsed = false;

window.onload = () => { 
    if (typeof habitatDb !== 'undefined') {
        initUI();
        applyFilters(); 
    }
};

// 정확한 재료 이름으로 명시적 분류 (Exact Match)
const categoryExactMatch = {
    nature: [
        '초록 풀', '큰 나무(아무거나)', '큰 바위', '물', '바닷물', '높은 곳', '풀(아무거나)',
        '들판의 꽃', '나무열매 나무(아무거나)', '수풀(아무거나)', '채소밭(아무거나)', '폭포',
        '나무 길', '그루터기', '럭키 식물', '수풀', '식충식물 화분', '마른 초록 풀', '보송보송바위',
        '노란 풀', '진흙물', '해안의 꽃', '큰 야자나무', '키가 큰 식물', '빨간 풀', '세모난 나무',
        '큰 돌', '평화로운 꽃'
    ],
    furniture: [
        '건초 테이블', '건초 걸상', '의자(아무거나)', '테이블(아무거나)', '의자(긴 것)',
        '가로등(아무거나)[발전]', '화살표 표지판', '통나무 의자', '통나무 테이블', '침대(아무거나)',
        '기다란 나무 의자', '버섯 램프', '비치파라솔', '제어장치', '드럼통', '전선', '캠프파이어',
        '교수님의 보물창고', '통나무 침대', '나무열매 의자', '나무열매 침대', '나무열매 테이블',
        '나무열매 램프', '가든 체어', '가든 라이트', '가든 테이블', '낮잠용 침대', '앤티크 옷장',
        '앤티크 침대', '앤티크 서랍장', '앤티크 의자', '포켓볼 소파', '포켓볼 침대', '포켓볼 테이블',
        '포켓볼 램프', '자판기', '풍력 발전 머신', '비치 체어', '큰 쓰레기통(아무거나)', '간판(아무거나)',
        '쓰레기통', '전봇대', '메뉴 입간판', '시크한 의자', '시크한 테이블', '트롤리', '카운터 테이블',
        '사이드 테이블', '스테이지', '스포트라이트', '라이츄 표지판', '옷장(아무거나)', '거울(큰 것)',
        '칸막이(아무거나)', '화장대(아무거나)', '샤워기', '온천', '모닥불', '모닥불[점화]', '내추럴 수납장',
        '아케이드 게임 머신', '펀칭 머신', '수력 발전기', '화력 발전기', '잔교', '책꽂이', '시크한 소파',
        '내추럴 테이블', '계산대', '피카츄 소파', '깜찍한 소파', '깜찍한 램프', '깜찍한 테이블',
        '깜찍한 침대', '깜찍한 옷장', '리조트 소파', '리조트 해먹', '리조트 테이블', '리조트 라이트',
        '내추럴 침대', '내추럴 소파', '내추럴 램프', '화톳불', '대좌/전시대'
    ]
};

function getCategory(matName) {
    if (categoryExactMatch.nature.includes(matName)) return 'matGroupNature';
    if (categoryExactMatch.furniture.includes(matName)) return 'matGroupFurniture';
    return 'matGroupProps'; // 위 두 배열에 없으면 모두 소품/기타로 자동 분류
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
