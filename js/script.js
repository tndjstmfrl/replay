
//첫화면에서 5개의 그림이 순서대로 보이기
// function show()
//   {     //no값이 4보다 작다면 1부터 시작하라
//      if(no<4)
//      {
//         no++;
//         $(".back").hide();
//         $("#back"+no).fadeIn(); 
//      }
//     else
//     {   //no가 5번 돌면 마지막은 0부터 시작
//         no=0;
//         $(".back").hide();
//         $("#back"+no).fadeIn(); 
//     }
    
//   }
// 현재 스크롤 포지션 값을 가져온다
$(function(){
    $(window).scroll(function(){
        if($(this).scrollTop()>500){ //현재 문서의 스크롤바의 위치값을 가져온다
            $('.site-top').fadeIn(); 
        }else{
            $('.site-top').fadeOut();
        }
    });

    $(".site-top").click(function(){
       $('html, body').animate({scrollTop : 0},400);//scrollTop속성을 사용해 스크롤 이동을
       //부드럽게 원하는 위치로 이동 시킨다.
       return false;     
    });
});




$('.main_con0>ul>li').hide();
$('.main_con0>ul>li:first-child').show();

setInterval(function(){
    $('.main_con0>ul>li:first-child').fadeOut()
    .next().fadeIn().end(1000)
    .appendTo('.main_con0>ul');
  //이전 요소로 반환 해준다  
},5000);

// 콘텐츠에 해당하는 아티클 순서대로 보이기
$(function(){
    $(".sub_m>li").on("click",function(){        
      no=$(this).attr("class");
        no=no.substr(5,2);
        $("article").hide();
        $(".contents_at"+no).css("display","block");
        
    })   
});


$(function(){

    //서브메뉴 클릭시 상세페이지로 이동하기
    $(".sub_m>li").on("click",function(){        
//        $(".at").hide();
//        $("#brand").hide(); 
          $(".m1").hide();    
    
    })
    //홈을 클릭하면 첫화면으로 이동하기
    $(".home").on("click",function(){  
        timer=setInterval("show()", 10000);    
        $(".m1").fadeIn();
        $(".m").hide();
        $("header").fadeIn();
        
    })
    //로고 클릭시 메인으로 이동하기
    $(".logo_m").on("click",function(){    
        timer=setInterval("show()",10000);    
        $("#at13").hide();
        $(".m1").fadeIn();
        $(".m").hide();
        $("#at14").hide();
    })
})

// window.onload=function(){
// //옆슬라이딩 메뉴/at0_json삽입하기
// for(i in mc.img0)
// {
//     this["at0_img_"+i].style.background="url(img/"+mc.img0[i]+")";
//     this["at0_img_"+i].style.backgroundSize="100% 100%";
// }

 

// }

 