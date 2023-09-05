$(function () {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    var swiper = new Swiper(".ad-box", {
        slidesPerView: 1,
        spaceBetween: 10,
        autoplay: {
            delay: 1000
        },
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
    //로딩페이지 터치 할때 슬라이드
    $('.start-bg').on('click', function () {
        $('#slide1').addClass('slideUp')
    });
    // 입주민 회원 가입
    $('.resident-form-wrap .next-btn button').on('click', function () {
        $('.resident-form-wrap .notice-wrap').css('display', 'block');
        $('.common-bg').css({
            'background-color': 'rgba(0,0,0,0.5)',
            'display': 'block'
        });
    });
    // 입주민 로그인 완료 안내창
    $('.login-wrap .next-btn button').on('click', function () {
        $('.login-wrap .resident-popUp').css('display', 'block');
        $('.common-bg').css({
            'background-color': 'rgba(0,0,0,0.5)',
            'display': 'block'
        })
    });
    $(function () {
        var sBtn = $(".login-wrap .btn-wrap .btn-box");
        sBtn.find("button").click(function () {
            sBtn.children().removeClass("on");
            $(this).parent().children().addClass("on");
        })
    });
    // 택배기사 로그인 완료 안내창
    $('.deliveryman-login .next-btn button').on('click', function () {
        $('.login-wrap .delivery-popUp').css('display', 'block');
        $('.common-bg').css({
            'background-color': 'rgba(0,0,0,0.5)',
            'display': 'block'
        })
    });

    // 입주민-내정보 수정
    $('.my-info-wrap .correction-btn button').on('click', function () {
        $('.notice-box1 .notice').css('display', 'block');
        $('.common-bg').css({
            'background-color': 'rgba(0,0,0,0.5)',
            'display': 'block'
        });
    });
    $('.notice-box1 .notice button').on('click', function () {
        $('.notice-box2 .notice').css('display', 'block');
        $('.notice-box1 .notice').css('display', 'none');
        $('.common-bg').css({
            'background-color': 'rgba(0,0,0,0.5)',
            'display': 'block'
        });
    });
    //입주민-내정보 수정 - 동정보 수정
    $('.my-info-wrap .my-info-box .adress-info button').on('click', function () {
        $('.my-info-wrap .info-change1').css('display', 'block');
        $('.common-bg').css({
            'background-color': 'rgba(0,0,0,0.5)',
            'display': 'block'
        });
    });
    //입주민-내정보 수정 - 비밀번호 수정
    $('.my-info-wrap .my-info-box .password-info button').on('click', function () {
        $('.my-info-wrap .info-change2').css('display', 'block');
        $('.common-bg').css({
            'background-color': 'rgba(0,0,0,0.5)',
            'display': 'block'
        });
    });

    // 택배찾기가 완료되었습니다.안내창 
    $('.find-wrap .find-btn button').on('click', function () {
        $('.find-wrap .notice-find').css('display', 'block');
        $('.common-bg').css({
            'background-color': 'rgba(0,0,0,0.5)',
            'display': 'block'
        });
    });
    $('.find-wrap .btn button').on('click', function () {
        $('.find-wrap .notice-find').css('display', 'block');
        $('.delivery-home').css('display', 'none');
        $('.common-bg').css({
            'background-color': 'rgba(0,0,0,0.5)',
            'display': 'block'
        });
    });
    // 비밀번호 입력창 display:none
    $('.find-wrap .notice-find').on('click', function () {
        $(this).css('display', 'none');
    });
    //우리집 택배찾기
    $('.find-wrap .home-btn').on('click', function () {
        $('.find-wrap .delivery-home').css('display', 'block');
        $('.common-bg').css({
            'background-color': 'rgba(0,0,0,0.5)',
            'display': 'block'
        });
    });
    //택배반송

    //세탁찾기
    $('.find-wrap .laundary-find .find-btn button').on('click', function () {
        $('.find-wrap .notice1').css('display', 'block')
        $('.common-bg').css({
            'background-color': 'rgba(0,0,0,0.5)',
            'display': 'block'
        });
    });

    // 세탁찾기 - 충전금액 부족할 때 안내창, 배경효과
    // $('').on('click',function(){ //결제금액이 충전금액 보다 클 경우
    //     $('.find-wrap .notice2').css('display','block') //충전금액이 부족합니다 알림창이 보여짐
    //     $('.common-bg').css({'background-color':'rgba(0,0,0,0.5)','display':'block'}); //알림창이 뜨면 알림창 제외한 나머지 배경이 어두워짐
    // });

    //세탁수거요청
    $('.laundary-pickup-wrap .laundary-btn button').on('click', function () {
        $('.laundary-pickup-wrap .notice-wrap').css('display', 'block')
        $('.common-bg').css({
            'background-color': 'rgba(0,0,0,0.5)',
            'display': 'block'
        });
    });
    // $('.point-wrap .point-box .amount-box div > button').on('click',function(){
    //     $(this).css({'background-color':'#0E2688','color':'#fff'})
    //     $(this).parent().siblings().children().find('button').css({'background-color':'transparent','color':'#0E2688'})
    // })

    //세탁수거요청 - 희망시간선택 현재 시간 표시
    $(function () {

        getTimeStamp();

    });

    function getTimeStamp() {

        var d = new Date();
        var date = leadingZeros(d.getFullYear(), 4) + '-' +
            leadingZeros(d.getMonth() + 1, 2) + '-' +
            leadingZeros(d.getDate(), 2) + ' ';

        var time = leadingZeros(d.getHours(), 2) + ':' +
            leadingZeros(d.getMinutes(), 2);

        $('#currentDate').val(date);

        $('#currentTime').val(time);
    }

    function leadingZeros(n, digits) {
        var zero = '';
        n = n.toString();
        if (n.length < digits) {
            for (i = 0; i < digits - n.length; i++)
                zero += '0';
        }
        return zero + n;
    }


    //포인트 충전 - 충전금액 선택할 경우 선택한 버튼의 색상이 바뀌고 선택하지 않은 버튼의 색상은 기본값(css)로 돌아옴
    $(function () {
        var sBtn = $(".amount div");
        sBtn.find("button").click(function () {
            sBtn.children().removeClass("on");
            $(this).parent().children().addClass("on");
        })
    });
    //포인트 충전 - 충전수단 선택할 경우 선택한 버튼의 색상이 바뀌고 선택하지 않은 버튼의 색상은 기본값(css)로 돌아옴
    $(function () {
        var sBtn = $(".means-box div");
        sBtn.find("button").click(function () {
            sBtn.children().removeClass("on");
            $(this).parent().children().addClass("on");
        })
    });

    //세탁찾기-> 포인트충전-충전 완료 안내창
    $('.point-wrap .amount-5').on('click', function () {
        $('.point-wrap .point-text').css('display', 'block');
        $('.common-bg').css({
            'background-color': 'rgba(0,0,0,0.5)',
            'display': 'block'
        });
    })
    // 세탁찾기 -> 포인트충전-직접입력 눌렀을 때 입력창 
    $('.point-wrap .charge-btn button').on('click', function () {
        $('.point-wrap .notice').css('display', 'block');
        $('.common-bg').css({
            'background-color': 'rgba(0,0,0,0.5)',
            'display': 'block'
        });
    });
    //세탁찾기 -> 포인트충전-충전할 금액 직접 입력후 확인 버튼 눌렀을 때
    $('.point-wrap .point-text .btn2').on('click', function () {
        $('.point-wrap .point-text').css('display', 'none');
        $('.common-bg').css({
            'display': 'none'
        });
    });
    // 택배기사 회원가입
    $('.delivery-form-wrap .next-btn button').on('click', function () {
        $('.delivery-form-wrap .notice-wrap').css('display', 'block');
        $('.common-bg').css({
            'background-color': 'rgba(0,0,0,0.5)',
            'display': 'block'
        })
    });
    //택배기사 - 입고취소 취소버튼 눌렀을때 알림창
    $('.cancle-btn').on('click', function () {
        $('.notice-wrap').css('display', 'block');
        $('.common-bg').css({
            'background-color': 'rgba(0,0,0,0.5)',
            'display': 'block'
        })
    });
    // 택배기사 - 택배반송 - 비밀번호
    $('.delivery-return-pw-wrap .next').on('click', function () {
        $('.pw-correct').css('display', 'block');
        $('.delivery-storage-wrap .payee').css('display', 'block')
        $('.common-bg').css({
            'background-color': 'rgba(0,0,0,0.5)',
            'display': 'block'
        })
    });


    // 택배기사 - 택배 보관
    $('.delivery-storage-wrap .storage-box .num-box .user-num .num-btn button').on('click', function () {
        $('.delivery-storage-wrap .payee').css('display', 'block')
        $('.common-bg').css({
            'background-color': 'rgba(0,0,0,0.5)',
            'display': 'block'
        })
    });
    // 택배기사 - 택배 보관
    // $('').on('click',function(){ // 동호수 조회 후 회원이 아닐 경우 안내창
    //     $('.delivery-storage-wrap .payee-phone-num').css('display','block') // 핸드폰 번호 입력 메세지
    //     $('.common-bg').css({'background-color':'rgba(0,0,0,0.5)','display':'block'}) // 배경 어두워지는 효과
    // });
    // 택배기사 - 리스트
    $('.delivery-list-wrap .notice-wrap button').on('click', function () {
        $('.delivery-list-wrap .notice-wrap').css('display', 'none');
    });
    // 세탁기사 - 세탁보관
    $('.laundaryman-storage-wrap .laundaryman-box .btn button').on('click', function () {
        $('.laundaryman-storage-wrap .notice-box').css('display', 'block');
        $('.common-bg').css({
            'background-color': 'rgba(0,0,0,0.5)',
            'display': 'block'
        });
    });
    // 세탁기사 세탁찾기
    $('.laundaryman-find-wrap .find-btn button').on('click', function () {
        $('.notice-wrap').css('display', 'block')
        $('.common-bg').css({
            'background-color': 'rgba(0,0,0,0.5)',
            'display': 'block'
        })
    });
    // 세탁기사 - 수거요청
    $('.laundaryman-pickup-wrap .laundaryman-pickup-box .list-textbox .laundary-pickup-time button').on('click', function () {
        $('.laundaryman-pickup-wrap .notice').css('display', 'block')
        $('.common-bg').css({
            'background-color': 'rgba(0,0,0,0.5)',
            'display': 'block'
        })
    });

});