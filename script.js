```javascript
const menuData = [
    { name: "아메리카노", price: 4000, desc: "커피와 물을 섞었어요. 달지 않고 써요.", img: "https://via.placeholder.com/200?text=Americano" },

    { name: "카페라떼", price: 4500, desc: "커피와 우유를 섞어 부드러워요.", img: "https://via.placeholder.com/200?text=Latte" }
];

document.getElementById('view-menu').addEventListener('click', function() {
    document.getElementById('main-page').classList.add('hidden');
    document.getElementById('menu').classList.remove('hidden');
    showMenu();
});

function showMenu() {
    const list = document.getElementById('menu-list');
    menuData.forEach(item => {
        const div = document.createElement('div');
        div.className = 'menu-item';
        div.innerHTML = `
            <img src="${item.img}" alt="${item.name}">
            <h3>${item.name} (${item.price}원)</h3>
            <p>${item.desc}</p>
            <button class="audio-btn" onclick="playAudio('${item.name}. ${item.desc}')">🔊 설명 듣기</button>
        `;
        list.appendChild(div);
    });
}

function playAudio(text) {
    // 브라우저 내장 음성 합성(SpeechSynthesis) 사용
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ko-KR';
    window.speechSynthesis.speak(utterance);
