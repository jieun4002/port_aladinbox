// 캐비닛 선택할 때 색상변경
let $cabinetBox = $('.ordinary_box');
let $VariablecabinetBox = $('.variable_cabinet');
let $cabinetPost = $('#delivery_stock_post_cabinet .post_select');
   // 우편물은 택배기사 등기보관에서만 클릭 가능하게 ID값 부여

$cabinetBox.click(function(){
    emptyCabinet = $(this).hasClass('choice')
    selectedCabinet = $(this).hasClass('selected')

    if(selectedCabinet == false && emptyCabinet == false){
        $cabinetBox.removeClass('choice')
        $(this).addClass('choice')
    }
})
$cabinetPost.click(function(){
    emptyCabinet = $(this).hasClass('choice')
    selectedCabinet = $(this).hasClass('selected')

    if(selectedCabinet == false && emptyCabinet == false){
        $cabinetPost.removeClass('choice')
        $(this).addClass('choice')
    }
})
$VariablecabinetBox.click(function(){
    emptyCabinet = $(this).hasClass('choice')
    selectedCabinet = $(this).hasClass('selected')

    if(selectedCabinet == false && emptyCabinet == false){
        $VariablecabinetBox.removeClass('choice')
        $(this).addClass('choice')
    }
})

//캐비닛 갯수 늘어날때 갯수 확인해줌
const $selectBox = $('#select_box_page_count');
let selectBoxCount = $selectBox.find('.cabinet').length // 화면에 표시할 캐비닛 갯수 확인
let cabinetCount = $('.select_box.cabinet').find('ul.select_box_list').length // 사용하는 캐비닛 갯수

// 캐비닛 부모요소 너비값 자동설정
let cabinetSoloWidth = 150;
$('.select_box_list').css({
    'width' : cabinetSoloWidth + 'px'
})
const $cabinetPrevBtn = $('#cabinet_prev');
const $cabinetNextBtn = $('#cabinet_next');
const $cabinetShowBox = $('#cabinet_show');

currentCabinet = 1;

$cabinetPrevBtn.click(function(){
    if(cabinetCount>4 && currentCabinet*4 > 4){
        currentCabinet--
        leftValue = cabinetSoloWidth * currentCabinet
        console.log(currentCabinet, currentCabinet*4, cabinetCount, leftValue)
        $cabinetShowBox.css({
            'left' : (-leftValue + cabinetSoloWidth) * 4
        })    
        CabinetUpBtnColorChagne()
        CabinetDownBtnColorChagne()
    }
})

$cabinetNextBtn.click(function(){
    if(cabinetCount>4 && currentCabinet*4<= cabinetCount){
        leftValue = cabinetSoloWidth * currentCabinet
        currentCabinet++
        $cabinetShowBox.css({
            'left' : -leftValue * 4
        })
        console.log(currentCabinet, currentCabinet*4, cabinetCount, leftValue)    
        CabinetUpBtnColorChagne()
        CabinetDownBtnColorChagne()
    }
    
})

// 캐비닛 이전 다음 버튼 색 변화
function CabinetUpBtnColorChagne(){
    if(currentCabinet === 1){
        $('.cabinet_prev_btn').addClass('active')
    }else(
        $('.cabinet_prev_btn').removeClass('active')
    )
}
CabinetUpBtnColorChagne()


function CabinetDownBtnColorChagne(){
    if(currentCabinet*4 >= cabinetCount){
        $('.cabinet_next_btn').addClass('active')
    }else(
        $('.cabinet_next_btn').removeClass('active')
    )
}
CabinetDownBtnColorChagne()




// currentCabinet = 1;

// function CabinetUpBtnColorChagne(){
//     if(currentCabinet === 1){
//         $('.cabinet_prev_btn').addClass('active')
//     }else(
//         $('.cabinet_prev_btn').removeClass('active')
//     )
// }
// CabinetUpBtnColorChagne()

// function CabinetDownBtnColorChagne(){
//     if(currentCabinet === selectBoxCount){
//         $('.cabinet_next_btn').addClass('active')
//     }else(
//         $('.cabinet_next_btn').removeClass('active')
//     )
// }
// CabinetDownBtnColorChagne()




// $cabinetBoxWidth = 1280;
// console.log('currentCabinet :' , currentCabinet, $cabinetBoxWidth)    

// $cabinetPrevBtn.click(function(){
//     if(currentCabinet > 1){
//         currentCabinet--
//         $cabinetBoxWidth = 1280 * currentCabinet
//         $selectBox.css({
//             'left' : -$cabinetBoxWidth + 1280
//         })
//         console.log('currentCabinet :' , currentCabinet, $cabinetBoxWidth)     
//     }

//     CabinetUpBtnColorChagne()
//     CabinetDownBtnColorChagne()
// })

// $cabinetNextBtn.click(function(){
//     if(currentCabinet < selectBoxCount){
//         $selectBox.css({
//             'left' : -$cabinetBoxWidth
//         })
//         currentCabinet++
//         $cabinetBoxWidth = 1280 * currentCabinet
//         console.log('currentCabinet :' , currentCabinet, $cabinetBoxWidth)    
//     }

//     CabinetUpBtnColorChagne()
//     CabinetDownBtnColorChagne()
// })


// 입주민 반송함 비밀번호
$('#customer_re_gobox_cabinet .box_select').click(function(){
    check = $(this).hasClass('selected') //비어있는 함인지 체크

    if(check == false){
        check = $('.re_gobox_sub_container').hasClass('active')
        if(check == false){
            $('.re_gobox_sub_container').addClass('active')
        }
    }
})



// 선택함 가변함 이름값 받기
$variableLastChoiceVariableName = '';
$variableAllChoiceVariableName = '';
function variableCabinetGetName(){
    //선택된(.choice) 클래스 가져오기
    check = $(this).hasClass('choice')
    $variableLastChoiceVariableName = $('.choice').children().text()// 캐비닛 숫자
    console.log('마지막 :' , $variableLastChoiceVariableName, '모두 :', $variableAllChoiceVariableName)
    if($variableAllChoiceVariableName == ''){
        inputCabinetName($variableLastChoiceVariableName)
    }else{
        inputCabinetName($variableAllChoiceVariableName + ', ' + $variableLastChoiceVariableName)
    }
    
}
$('#delivery_stock_cabinet .variable_cabinet').click(variableCabinetGetName)

// 선택함 가변함 이름값 기억하기
function allVariableCabinetGetName(){
    // $variableAllChoiceVariableName = $('.extra_variable').children('span').text()

    if($variableAllChoiceVariableName == ''){
        $variableAllChoiceVariableName = $variableLastChoiceVariableName    
    }else{
        $variableAllChoiceVariableName = $variableAllChoiceVariableName + ', ' + $variableLastChoiceVariableName
    }
    
    console.log('마지막 :' , $variableLastChoiceVariableName, '모두 :', $variableAllChoiceVariableName)
    // $('#variable_select_cabinet_name').text($variableAllChoiceVariableName) 
    inputCabinetName($variableAllChoiceVariableName)
}
$('#extra_open').click(allVariableCabinetGetName)

// 가변함에 이름 넣기
function inputCabinetName(Number){
    $('#variable_select_cabinet_name').text(Number)
}

// 선택한 일반함 이름값 받기
function ordinaryCabinetName(){
    cabinetNumber = $(this).find('span').text()
    // console.log(cabinetNumber)
    $('#ordinary_select_cabinet_name').text(cabinetNumber)
}
$('.ordinary_box').click(ordinaryCabinetName)

//일반함 케이스 열기
function choiceOrdinayCabinet(){
    check = $(this).hasClass('selected') //비어있는 함인지 체크
    check2 = $(this).hasClass('variable_cabinet') //가변함인지 체크
    check3 = $(this).hasClass('ordinary_box') //가변함인지 체크
    // console.log($(this).attr('class'))
    // ('select_box_num box_select variable_cabinet choice')
    // $selectedVariableCabinet = $selectedVariableCabinet + $(this)
    // console.log(check, check2, check3)
    if(check == false && check2 == false && check3 == true){
        check = $('.ordinary_cabinet_notice_box').hasClass('active')
        if(check == false){
            $('.ordinary_cabinet_notice_box').addClass('active')
        }
    }
}
$('.ordinary_box').click(choiceOrdinayCabinet)

// 가변함 케이스 열기
$selectedVariableCabinet = '';

function choiceVariableCabinet(){
    check = $(this).hasClass('selected') //비어있는 함인지 체크
    check2 = $(this).hasClass('extra_variable') 
    // console.log($(this).attr('class'))
    // ('select_box_num box_select variable_cabinet choice')
    // $selectedVariableCabinet = $selectedVariableCabinet + $(this)

    if(check == false && check2 == false){
        check = $('.variable_cabinet_notice_box').hasClass('active')
        if(check == false){
            $('.variable_cabinet_notice_box').addClass('active')
        }
    }
}
$('#delivery_stock_cabinet .variable_cabinet').click(choiceVariableCabinet)


// 가변함 케이스 추가 열기시
function variableCabinetExtraOpen(){
    $('.select_box_num.box_select.variable_cabinet.choice').addClass('extra_variable')
    $('.variable_cabinet_notice_box').removeClass('active')
    $('.box_select').removeClass('ordinary_box')
}

// 기존 가변함 케이스 다시 선택해서 열기
function originallyExtraBoxOpen(){
    check = $(this).hasClass('extra_variable')
    if(check == true){
        $('.variable_cabinet_notice_box_re').addClass('active')
    }
    $('#variable_select_cabinet_name_re').text($variableAllChoiceVariableName)
}
$('#delivery_stock_cabinet .variable_cabinet').click(originallyExtraBoxOpen)



// 캐비닛 케이스 열기 클릭
function variableCabinetOpen(){
    $('.variable_cabinet_notice_box').removeClass('active')
    $('.select_box_num.box_select.variable_cabinet.choice').addClass('extra_variable')
    alert('열기 기능 삽입')
}
function variableCabinetReOpen(){
    $('.variable_cabinet_notice_box_re').removeClass('active')
    alert('다시 열기 기능 삽입')
}
function ordinaryCabinetOpen(){
    $('.ordinary_cabinet_notice_box').removeClass('active')
    alert('열기 기능 삽입')
}

// 캐비닛 케이스 취소 클릭
function variableCabinetClose(){
    $('.variable_cabinet_notice_box').removeClass('active')
}
function variableCabinetReClose(){
    $('.variable_cabinet_notice_box_re').removeClass('active')
}
function ordinaryCabinetClose(){
    $('.ordinary_cabinet_notice_box').removeClass('active')
}

//택배기사 반송함 열기
$('#delivery_re_collect_cabinet .selected.booking').click(function(){
    check = $('.re_collect_sub_container').hasClass('active');
    if(check == false){
        $('.re_collect_sub_container').addClass('active');
    }
})

function reCollectClose(){
    $('.re_collect_sub_container').removeClass('active');
    location.reload()
}

function reCollectClear(){
    alert('확인 기능 넣기')
    $('.re_collect_sub_container').removeClass('active');
    location.reload()
}

$('.ordinary_box').on('click',function(){
    $('.select_boxes .notice').css('display','block')
});
$('.selected').on('click',function(){
    $('.select_boxes .notice1').css('display','block')
});