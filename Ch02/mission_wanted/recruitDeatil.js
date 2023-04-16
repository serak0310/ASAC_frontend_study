/*--- 기업 패널 반복 ---*/
const container = document.getElementById("company_list");
const wrapper = document.getElementById("company_item");

for (let i = 0; i < 7; i++) {
  const newItem = wrapper.cloneNode(true);
  container.appendChild(newItem);
}

/*--- 무한스크롤 구현 ---*/
window.addEventListener('scroll', function() {
  // 스크롤 이벤트 발생 시 처리할 내용
  var scrollHeight = document.documentElement.scrollHeight; // 문서 전체 높이
  var scrollTop = document.documentElement.scrollTop; // 스크롤 위치
  var clientHeight = document.documentElement.clientHeight; // 브라우저 창 높이
  var scrollBottom = scrollHeight - scrollTop - clientHeight; // 스크롤 바닥과 브라우저 창 바닥 간의 거리

  if (scrollBottom < 20) { // 스크롤 바닥과 브라우저 창 바닥 간의 거리가 100px 이하일 때
    loadMore(); // 새로운 콘텐츠 로드
  }
});

function loadMore() {
  // 새로운 콘텐츠 로드하는 코드
  for (let i = 0; i < 8; i++) {
    const newItem = wrapper.cloneNode(true);
    container.appendChild(newItem);
  }
  
}