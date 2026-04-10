
const menuData = [
    { name: "아메리카노", price: 4000, desc: "커피 원두 추출액과 물을 섞은 기본적인 커피입니다. 달지않고 쓴맛이 납니다.", img: "americano.jpg" },
    { name: "카페라떼", price: 4500, desc: "커피 원두 추출액과 우유를 섞은 부드러운 맛의 커피입니다.", img: "latte.jpg" },
    { name: "바닐라라떼", price: 4500, desc: "커피 원두 추출액과 우유, 바닐라 시럽을 섞은 달콤하고 바닐라 맛이 나는 커피입니다.", img: "vanilla-latte.jpg" },
    // ... 나머지 메뉴
];

document.getElementById('view-menu').addEventListener('click', function() {
    document.querySelector('main').classList.add('hidden');
    document.getElementById('menu').classList.remove('hidden');
    showMenu();
});

function playAudio(text) {
    const audioElement = new Audio(); // TTS 서버 기반 활용 고려
    audioElement.src = `https://text-to-speech-server.example?id=encodeURIComponent(${text}`;
    audioElement.play();
}