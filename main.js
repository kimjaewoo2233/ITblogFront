const swiper = new Swiper( '.swiper', {
    autoplay: true,
    loop: true,
    slidesPerView : 3, // 동시에 보여줄 슬라이드 갯수
    spaceBetween : 30, // 슬라이드간 간격
    slidesPerGroup : 3, // 그룹으로 묶을 수, slidesPerView 와 같은 값을 지정하는게 좋음

    // 그룹수가 맞지 않을 경우 빈칸으로 채우기 여부
    // 3개가 나와야 되는데 1개만 있다면 2개는 빈칸으로 채워서 3개를 만듬
    loopFillGroupWithBlank : true,
    pagination: { // 호출(pager) 여부
        el: ".swiper-pagination", //버튼을 담을 태그 설정
        clickable: true, // 버튼 클릭 여부
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
} );


var cant_btn = document.querySelector('.cant');
cant_btn.addEventListener('click',function(e){
        document.querySelector('.box').style.display = 'none';
})



const spyEls = document.querySelectorAll('.spy'); //요소를 전부 찾아서
// 요소들 반복 처리!
spyEls.forEach(function (spyEl) {
    new ScrollMagic
        .Scene({ // 감시할 장면(Scene)을 추가
            triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
            triggerHook: .6 // 화면의 80% 지점에서 보여짐 여부 감시
        })
        .setClassToggle(spyEl, 'show') // 요소가 화면에 보이면 show 클래스 추가
        .addTo(new ScrollMagic.Controller()) // 컨트롤러에 장면을 할당(필수!)
})
