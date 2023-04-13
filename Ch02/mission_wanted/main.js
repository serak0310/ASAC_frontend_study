/*--- 메인 패널 반복 ---*/
const container = document.getElementById('careerContentList');
const wrapper = document.getElementById('carrerContentList_content');

for(let i=0; i<7; i++){
    const newItem = wrapper.cloneNode(true);
    container.appendChild(newItem);
}

/*--- 더보기 버튼 ---*/
const moreContent_btn = document.getElementById('moreContent_btn');
moreContent_btn.addEventListener("click", function(){
    // alert('버튼 클릭됨');
    for(let i=0; i<8; i++){
        const newItem = wrapper.cloneNode(true);
        container.appendChild(newItem);
    }
})

/*--- 로딩 3초 후, 메인 페이지 show ---*/
setTimeout(function() {
    document.getElementById('spinner').style.display = 'none'; // 스피너 숨기기
    document.getElementById('loaded').classList.add('show'); // 로딩 완료 후 보이기
}, 3000); // 3초 후 실행

/*---  로그인 모달 창 ---*/
var login_modal = document.getElementById("login_modal");
var login_btn = document.getElementById("login-btn");
var span = document.getElementsByClassName("close")[0];
var body = document.body;

login_btn.onclick = function() {    // 로그인 버튼 클릭시 모달 팝업
    login_modal.style.display = "block";
    body.style.overflow = "hidden";     // 모달 제외 외부 스크롤 막기
}

window.onclick = function(event) {  // 모달 창 외부 클릭시 모달 
    if (event.target == login_modal) {
        login_modal.style.display = "none";
        body.style.overflow = "auto";    // 모달 제외 외부 스크롤 가능 
    }
}

// login_modal.onclick = function() {  // 모달 창 외부 클릭시 모달 
//     login_modal.style.display = "none";
// }

/*--- 이메일 형식 검사 ---*/
let emailValue = ""
const emailNotValid_txt = document.getElementById('emailNotValid_txt')

function emailCheck(){
    let emailRegex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    emailValue = document.getElementById('userEmail').value;

    if (emailValue.match(emailRegex) != null) {
        // 이메일 형식이 맞다면, 버튼 활성화 + border blue
        emailNotValid_txt.style.display = "none";
    }
    else {
        // 이메일 형식이 아니라면, 버튼 비활성화 + border red
        emailNotValid_txt.style.display = "block";
    }
}

