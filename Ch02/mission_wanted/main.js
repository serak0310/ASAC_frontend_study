/*--- 메인 패널 반복 ---*/
const container = document.getElementById("careerContentList");
const wrapper = document.getElementById("carrerContentList_content");

for (let i = 0; i < 7; i++) {
  const newItem = wrapper.cloneNode(true);
  container.appendChild(newItem);
}

/*--- 더보기 버튼 ---*/
const moreContent_btn = document.getElementById("moreContent_btn");
moreContent_btn.addEventListener("click", function () {
  // alert('버튼 클릭됨');
  for (let i = 0; i < 8; i++) {
    const newItem = wrapper.cloneNode(true);
    container.appendChild(newItem);
  }
});

/*--- 로딩 3초 후, 메인 페이지 show ---*/
setTimeout(function () {
  document.getElementById("spinner").style.display = "none"; // 스피너 숨기기
  document.getElementById("loaded").classList.add("show"); // 로딩 완료 후 보이기
}, 3000); // 3초 후 실행

/*---  로그인 모달 창 ---*/
var login_modal = document.getElementById("login_modal");
var login_btn = document.getElementById("login-btn");
var span = document.getElementsByClassName("close")[0];
var body = document.body;

login_btn.onclick = function () {
  // 로그인 버튼 클릭시 모달 팝업
  login_modal.style.display = "block";
  body.style.overflow = "hidden"; // 모달 제외 외부 스크롤 막기
};

window.onclick = function (event) {
  // 모달 창 외부 클릭시 모달
  if (event.target == login_modal || event.target == join_modal) {
    login_modal.style.display = "none";
    join_modal.style.display = "none";
    body.style.overflow = "auto"; // 모달 제외 외부 스크롤 가능
  }
};

/*--- 이메일 형식 검사 ---*/
let emailValue = "";
const userEmail_tf = document.getElementById("userEmail");    // 로그인 창 이메일
const emailNotValid_txt = document.getElementById("emailNotValid_txt");
const continue_btn = document.getElementById("continue_btn");

function emailCheck() {
  let emailRegex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
  emailValue = userEmail_tf.value;

  if (emailValue == "") {
    // 입력이 없다면, 버튼 비활성화 + 경고창X
    emailNotValid_txt.style.display = "none";
    continue_btn.style.backgroundColor = "#f2f4f7";
    continue_btn.style.color = "#ccc";
    continue_btn.disabled = true;
    userEmail_tf.style.borderColor="rgb(225, 226, 227)";
  } else {
    // 입력이 있다면
    if (emailValue.match(emailRegex) != null) {
      // 이메일 형식이 맞다면, 버튼 활성화 + 경고창X
      emailNotValid_txt.style.display = "none";
      continue_btn.style.backgroundColor = "#36f";
      continue_btn.style.color = "#fff";
      continue_btn.disabled = false;
      userEmail_tf.style.borderColor="rgb(225, 226, 227)";
    } else {
      // 이메일 형식이 아니라면, 버튼 비활성화 + 경고창O
      emailNotValid_txt.style.display = "block";
      continue_btn.style.backgroundColor = "#f2f4f7";
      continue_btn.style.color = "#ccc";
      continue_btn.disabled = true;
      userEmail_tf.style.borderColor="#fe415c";
    }
  }
}

/*---  회원가입 모달 창 ---*/
var join_modal = document.getElementById("join_modal");
var userEmail_join = document.getElementById("userEmail_tf");   // 회원가입창 email
var backToLogin_btn = document.getElementById("backToLogin_btn");   // 회원가입창 취소버튼

continue_btn.onclick = function () {
  // 이메일로 계속하기 버튼 클릭시 회원가입 모달 팝업
  userEmail_join.placeholder = userEmail_tf.value;              // 이메일 자동 변경
  join_modal.style.display = "block";
  login_modal.style.display = "none";
  body.style.overflow = "hidden"; // 모달 제외 외부 스크롤 막기
};

backToLogin_btn.onclick = function(){
  join_modal.style.display = "none";
  login_modal.style.display = "block";
  body.style.overflow = "hidden"; // 모달 제외 외부 스크롤 막기
}