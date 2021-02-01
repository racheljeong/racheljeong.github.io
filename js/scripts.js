(function($) {
    "use strict";

    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 60
    });

    $('#topNav').affix({
        offset: {
            top: 200
        }
    });
    
    new WOW().init();
    
    $('a.page-scroll').bind('click', function(event) {
        var $ele = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($ele.attr('href')).offset().top - 60)
        }, 1450, 'easeInOutExpo');
        event.preventDefault();
    });
    
    $('.navbar-collapse ul li a').click(function() {
        /* always close responsive nav after click */
        $('.navbar-toggle:visible').click();
    });

    $('#galleryModal').on('show.bs.modal', function (e) {
       $('#galleryImage').attr("src",$(e.relatedTarget).data("src"));
    });

    

    // var $frm = document.querySelector("[name=loginFrm]");
    //     //  console.log(frm);
    //     //Submit직전에 이벤트 (return true - 제출, false - 제출되지 않음)

    //   $frm.onsubmit = function() {

    //     //1.아이디 검사
    //     if(id.value.length < 4) {  //문자열길이(length)는 메소드가 아니라 속성이다 : length()금지
    //     alert("아이디는 네글자 이상이어야 합니다.");
    //     id.select();
    //     return false;  //조기리턴 -> 폼 제출 되지 않음
    //     }  
    
    //     //3. 패스워드 검사 : (4글자이상 && pwd.value == pwdCheck.value)
    //     if(password.value.length < 4){
    //         alert("비밀번호는 네글자 이상이어야 합니다.");
    //         return false;
    //     }

   
    //     return true;

    //   };
   

})(jQuery);