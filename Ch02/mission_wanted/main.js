// 메인 패널 반복
const container = document.getElementById('careerContentList');
const wrapper = document.getElementById('carrerContentList_content');

for(let i=0; i<7; i++){
    const newItem = wrapper.cloneNode(true);
    container.appendChild(newItem);
}

// 더보기 버튼
const moreContent_btn = document.getElementById('moreContent_btn');
moreContent_btn.addEventListener("click", function(){
    // alert('버튼 클릭됨');
    for(let i=0; i<8; i++){
        const newItem = wrapper.cloneNode(true);
        container.appendChild(newItem);
    }
})