$("document").ready(function(){

    const work_img = [
        // "../이미지폴더/파일명.확장자",
        // "../이미지폴더/파일명.확장자",
        // "../이미지폴더/파일명.확장자"
        // 마지막에 콤마(,) 넣으면 에러 발생
        "https://via.placeholder.com/1200x2000",
        "https://via.placeholder.com/1200x2000/ff4",
        "https://via.placeholder.com/1200x2000/dae",
        "https://via.placeholder.com/1200x2000/053",
        "https://via.placeholder.com/1200x2000/a64",
        "https://via.placeholder.com/1200x2000/d70"
    ]

    $(".work-content").click(function(e){
        e.preventDefault()
        let i = $(this).index();
        $(".window").fadeIn();
        $(".window-content").show()
        $(".window-content img").attr("src", work_img[i])
        $("html, body").css("overflow", "hidden")
    })
    $(".window, .window-content i").click(function(){
        $(".window").fadeOut();
        $("html, body").css("overflow", "");
        $(".window-content").scrollTop(0).hide();
    })

    let close = parseInt($(".window-content i").css("top"));

    $(".window-content").scroll(function(){
        let pos = $(".window-content").scrollTop();
        console.log(pos)

        // 최초 닫기 버튼의 위치가 20px (탑값) 모달창이 스크롤이 되면, 
        // 스크롤이 된 scrollTop 값 + 20을 더해준다. 해당 위치에 고정되는 원리.
        $(".window-content i").css("top", pos + close+"px")
    })

})