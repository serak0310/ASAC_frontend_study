// 배너 슬라이드 구현
// var main_banner_prev = document.getElementsByClassName("main_banner_prev")[0];
const prevEventBtn = document.querySelector('.main_banner_prev');
const nextEventBtn = document.querySelector('.main_banner_next');

const slideList = document.querySelector('.slide_list');
const slideItems = document.querySelectorAll('.slide_item');

let eventCounter = 1;  // 현재 슬라이드 위치 지정
const eventSize = slideItems[0].clientWidth;    // 한 슬라이드 사이즈 지정

const cloneFirstElement = () => {
    slideList.prepend(slideItems[0].cloneNode(true));
}

cloneFirstElement();

slideList.style.transform = "translateX("+eventSize*eventCounter+"px)";

// 다음 버튼
nextEventBtn.addEventListener("click", function(){
    if(eventCounter >= slideItems.length -1 ){
        // 슬라이드 끝에 도달했다면
        slideList.style.transition = "transform 0.3s ease-in-out";      // transform을 할 때 0.3초 동안 ease-in-out 효과
        eventCounter = 1;
        slideList.style.transform = "translateX("+ -eventSize*eventCounter+"px)";
    }else{
        // 슬라이드가 끝 지점이 아니라면
        slideList.style.transition = "transform 0.3s ease-in-out";      // transform을 할 때 0.3초 동안 ease-in-out 효과
        eventCounter++;
        slideList.style.transform = "translateX("+ -eventSize*eventCounter+"px)";
    }

})
