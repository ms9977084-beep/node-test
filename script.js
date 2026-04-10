// script.js 전체 교체
const menuData = [
    { 
        name: "따뜻한 아메리카노", 
        img: "americano.jpg",
        description: "커피 원두 추출액과 물을 섞은 기본적인 커피입니다. 달지 않고 쓴맛이 납니다.",
        priceImg: "money_4000.jpg" // 미리 만드신 아메리카노용 이미지 파일명
    },
    { 
        name: "카페라떼", 
        img: "latte.jpg",
        description: "커피 원두 추출액과 우유를 섞은 부드러운 맛의 커피입니다.",
        priceImg: "money_4500.jpg" // 미리 만드신 라떼용 이미지 파일명
    },
    { 
        name: "초코라떼", 
        img: "choco.jpg",
        description: "초코분말과 우유를 섞어서 달콤하고 초코맛이 나는 우유 음료입니다.",
        priceImg: "money_4800.jpg" // image_5.png 파일을 money_4800.jpg로 이름 바꿔 올리세요
    }
];

const viewMenuBtn = document.getElementById('view-menu');
const menuDiv = document.getElementById('menu');
const menuList = document.getElementById('menu-list');
const detailView = document.getElementById('detail-view');
const detailDesc = document.getElementById('detail-desc');
const detailPriceImg = document.getElementById('detail-price-img');
const closeDetailBtn = document.getElementById('close-detail');

// 메뉴판 보기 버튼
viewMenuBtn.addEventListener('click', () => {
    document.getElementById('main-page').classList.add('hidden');
    menuDiv.classList.remove('hidden');
    renderMenuList();
});

// 메뉴 목록 렌더링
function renderMenuList() {
    menuList.innerHTML = ''; 
    menuData.forEach(item => {
        const menuCard = document.createElement('div');
        menuCard.className = 'menu-card';
        menuCard.innerHTML = `
            <img src="${item.img}" alt="${item.name}" style="width:120px; height:120px; border-radius:10px; object-fit:cover;">
            <h3>${item.name}</h3>
        `;
        menuCard.onclick = () => showDetail(item);
        menuList.appendChild(menuCard);
    });
}

// 상세 정보 보기
function showDetail(item) {
    detailDesc.innerText = item.description;
    detailPriceImg.src = item.priceImg;
    detailView.classList.remove('hidden');
    menuDiv.classList.add('hidden'); // 메뉴 목록 잠시 숨김
}

// 상세 정보 닫기
closeDetailBtn.onclick = () => {
    detailView.classList.add('hidden');
    menuDiv.classList.remove('hidden');
};
