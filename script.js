
const menuData = [
    {
        name: "따뜻한 아메리카노",
        img: "americano.jpg", // 아메리카노 사진 파일명
        description: "커피 원두 추출액과 물을 섞은 기본적인 커피입니다. 달지 않고 쓴맛이 납니다.",
        priceImg: "money_4000.jpg", // 천원 4장 이미지 파일명
        priceText: "4,000원 (천원 지폐 4장이 필요해요)"
    },
    {
        name: "카페라떼",
        img: "latte.jpg", // 카페라떼 사진 파일명
        description: "커피 원두 추출액과 우유를 섞은 부드러운 맛의 커피입니다.",
        priceImg: "money_4500.jpg", // 천원 4장 + 500원 1개 이미지 파일명
        priceText: "4,500원 (천원 4장과 500원 동전 1개가 필요해요)"
    },
    {
        name: "초코라떼",
        img: "choco.jpg", // 초코라떼 사진 파일명
        description: "초코분말과 우유를 섞어서 달콤하고 초코맛이 나는 우유 음료입니다.",
        priceImg: "money_4800.jpg", // 천원 4장 + 500원 1개 + 100원 3개 이미지 파일명
        priceText: "4,800원 (천원 4장, 500원 1개, 100원 3개가 필요해요)"
    }
];

const viewMenuBtn = document.getElementById('view-menu');
const menuDiv = document.getElementById('menu');
const menuList = document.getElementById('menu-list');

viewMenuBtn.addEventListener('click', () => {
    // 메인 페이지 숨기고 메뉴판 표시
    document.getElementById('main-page').classList.add('hidden');
    menuDiv.classList.remove('hidden');

    menuList.innerHTML = '';
    menuData.forEach(item => {
        // 메뉴 카드 생성
        const menuCard = document.createElement('div');
        menuCard.className = 'menu-card';
       
        menuCard.innerHTML = `
            <img src="${item.img}" alt="${item.name}" style="width:150px; height:150px; border-radius:10px;">
            <h3>${item.name}</h3>
        `;

        // 클릭 이벤트: 상세 설명과 돈 이미지 보여주기
        menuCard.onclick = () => {
            const detailMessage = `
                [설명]
                ${item.description}
               
                [가격 확인]
                ${item.priceText}
            `;
           
            // 알림창 대신 화면에 상세 정보를 띄우는 것이 AAC 목적에 더 부합하므로
            // 여기서는 이해를 돕기 위해 간단한 confirm창을 활용하거나 전용 모달을 쓸 수 있습니다.
            // 일단 요청하신 대로 메시지를 띄우고, 이미지는 추후 레이아웃에 배치 가능합니다.
            alert(detailMessage);
        };

        menuList.appendChild(menuCard);
    });
});