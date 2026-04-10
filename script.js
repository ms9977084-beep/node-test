
const menuData = [
    { name: "따뜻한 아메리카노", img: "☕" },
    { name: "시원한 라떼", img: "🥛" },
    { name: "달콤한 초코", img: "🍫" }
];

const viewMenuBtn = document.getElementById('view-menu');
const menuDiv = document.getElementById('menu');
const menuList = document.getElementById('menu-list');

viewMenuBtn.addEventListener('click', () => {
    // 메인 페이지 숨기고 메뉴 보여주기
    document.getElementById('main-page').classList.add('hidden');
    menuDiv.classList.remove('hidden');

    // 메뉴 목록 생성
    menuList.innerHTML = ''; 
    menuData.forEach(item => {
        const btn = document.createElement('button');
        btn.innerHTML = `${item.img}<br>${item.name}`;
        btn.onclick = () => alert(`${item.name}를 선택하셨습니다!`);
        menuList.appendChild(btn);
    });
});
