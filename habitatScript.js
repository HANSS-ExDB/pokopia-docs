window.onload = () => { 
    if (typeof habitatDb !== 'undefined') {
        renderHabitats(habitatDb); 
    }
};

function renderHabitats(data) {
    const list = document.getElementById('habitatList');
    list.innerHTML = '';

    data.forEach(h => {
        const card = document.createElement('div');
        card.className = 'pokemon-card';
        // 상세 페이지 연결 기능은 추후 구현을 위해 비워둠
        
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

function searchHabitats() {
    const query = document.getElementById('searchHabitatName').value.trim().toLowerCase();
    const filtered = habitatDb.filter(h => h.name.toLowerCase().includes(query));
    renderHabitats(filtered);
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
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
