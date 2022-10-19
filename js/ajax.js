
// var timer1=setInterval("show_at()", 9000);
var no=0;
var no,str="",at1_no=1,cnt=0;

var mA={
    //첫화면 이벤트에 들어가는 그림 json삽입
        "img":["instra_img1.jpg","instra_img2.jpg","instra_img3.jpg","facebook_img4.jpg","facebook_img5.jpg","facebook_img6.jpg","instra_img7.jpg","instra_img8.jpg","instra_img9.jpg","facebook_img10.jpg","facebook_img11.jpg","facebook_img12.jpg"],
    //그림 클릭시 텍스트 json으로 삽입하기
        "image":["menu_img1.jpg","menu_img2.jpg","menu_img3.jpg","menu_img4.jpg","menu_img5.jpg","menu_img6.jpg",
         "menu_img7.jpg","menu_img8.jpg"],    
        "text1":["미스터에그","<p>스크램블에그가 들어있어 폭신한 식감의 계란과<br><p>부드러운 생크림의 어우러진 맛</p><br><p>2,900원</p>"],
        "text2":["아메리칸 햄 치즈","<p>슬라이스 햄이 들어있어 짭짤한 맛과<br><p>느낌함과 고소함을 잡아준 체다치즈</p><br><p>3,600원</p>"],
        "text3":["베이컨 더블 치즈","<p>버터와 달걀이 듬뿍 들어간 브리오슈식빵<br><p>브리오슈식빵과 촉촉한 에그스럼블의 조합</p><br><p>3,900원</p>"],
        "text4":["데리야끼 바베큐","<p>고기가 부드러우며 폭신한 식감과<br><p>데리야끼 소스의맛</p><br><p>4,200원</p>"],
        "text5":["갈릭 베이컨 치즈","<p>부들부들한 계란이 들어있어 폭신한 식감<br><p>화이트 색상의 소스와 치즈</p><br><p>4,400원</p>"],
        "text6":["아보 홀릭","<p>아보카도가 올라간 아보홀릭이 너무너무 맛난다<br></p><p>폭신한 에그스크럼블과 아보카도가 들어가있어서</p><p>담백한맛</p><p>4,600원</p>"],
        "text7":["타마고 산도","<p>담백하고 고소하고 달달했던 계란<br><p>빵이 쫀득하고 부드러움</p><br><p>4,600원</p>"],
        "text8":["에그 콥 샐러드","<p>양상추와 함께 스위트콘과 올리브가 들어있어<br><p>달달하며 고소한 맛</p><br><p>4,400원</p>"],  
}



//클릭시 각각 sns로 이동 그림json으로 삽입
var con_at4={
        "con_sns":["https://www.instagram.com/p/B62_LLFl0Id/","https://www.instagram.com/p/B59K6B-luJo/","https://www.instagram.com/p/B5T_iN6FgU9/","https://www.facebook.com/1538974882903091/photos/a.1544973252303254/1651819458285299/?type=3&theater","https://www.facebook.com/1538974882903091/photos/a.1544973252303254/1651810191619559/?type=3&theater","https://www.facebook.com/1538974882903091/photos/a.1544973252303254/1646786035455308/?type=3&theater","https://www.instagram.com/p/B0pOgvoFlOd/?igshid=kbd7r10st12n","https://www.instagram.com/p/B0pKlMclgin/","https://www.instagram.com/p/Bzcv8shFJ0_/?igshid=10a4banm76fy7","https://www.facebook.com/1538974882903091/photos/a.1544973252303254/1562086910591888/?type=3&theater","https://www.facebook.com/1538974882903091/photos/a.1544973252303254/1545122745621638/?type=3&theater","https://www.facebook.com/1538974882903091/photos/a.1544973252303254/1652396551560923/?type=3&theater"]
}

//모바일 삼선바 메뉴 클릭시
// $(function(){
//    $('.title_bar span').click(function(){
//       $('.nav_main').toggleClass('on'); 
//    });
//    $('.close').click(function(){
//       $('.nav_main').removeClass('on'); 
//    });
//    $('.mt1').click(function(){
//       $('.nav_main').removeClass('on'); 
//    });
//    $('.mt2').click(function(){
//       $('.nav_main').removeClass('on'); 
//    });
//    $('.mt3').click(function(){
//       $('.nav_main').removeClass('on');  
//    });
//    $('.mt4').click(function(){
//       $('.nav_main').removeClass('on'); 
//    });    
// });

$(function(){
     // 메인 페이지 


    //클릭을 한다면 가맹점 내용 보이기
    $(".at1_info1").on("click",function(){
        no=$(this).index();
        $(".at1_big").hide();
        $(".at1_big").css("display","block");
    });
//닫기 버튼 클릭하면 사라지기        
    $(".at1_big, at1_big>p").on("click",function(){
        $(".at1_big").hide();
});   
});














window.onload=function()
{   
    //인스타그램,페이스북 로고 메뉴에 동적 요소로 li 12칸 만들기
    str="";    
    str+="<ul>";
        for(i=1; i<=12; i++)            
    str+="<li id='m"+i+"'>";
    str+="</li>";
    str+="</ul>";
    at1_box12.innerHTML=str;
//인스타그램,페이스북에 각각 12개의 칸에 그림 넣기 
    x=1;
    for(i in mA.img)
        {
           this["m"+x].innerHTML="<a href='"+con_at4.con_sns[i]+"' target='_blank'><img src='img/"+mA.img[i]+"'></a>"; 
            x++;
        }
     
    //at4_menu_image(div)에 들어갈 li 8칸 만들기    
    str="";
    str+="<ul id='menu'>";
        for(i=1; i<=8; i++)
    str+="<li id='menu"+i+"'></li>";
    
    str+="</ul>";
    at4_menu_image.innerHTML=str;
    
    //at4_menu_image li에 들어갈 그림 넣기
    y=1;
    for(i in mA.image)  
    {
        this["menu"+y].style.background="url(img/"+mA.image[i]+")";
        this["menu"+y].style.backgroundSize="100% 100%";
        y++;
    }
    
    //옆슬라이딩 메뉴/at0_json삽입하기
    for(i in mA.img0)
    {
        this["at0_img_"+i].style.background="url(img/"+mA.img0[i]+")";
        this["at0_img_"+i].style.backgroundSize="100% 100%";
    }


     //아티클4 메뉴를 클릭할때
    $("#menu>li").on("click",function(){
        no=$(this).index()+1;
        //첫번째에서 텍스트 가져오기
        if(no==1)
        {
            $("#at4_imgage2_text1").html(mA.text1[0]);
            $("#at4_imgage2_text2").html(mA.text1[1]);
        }
        //두번째에서
        else if(no==2)
        {
            $("#at4_imgage2_text1").html(mA.text2[0]);
            $("#at4_imgage2_text2").html(mA.text2[1]);
        }
        //세번째에서
         else if(no==3)
        {
            $("#at4_imgage2_text1").html(mA.text3[0]);
            $("#at4_imgage2_text2").html(mA.text3[1]);
        }
        //네번째에서
         else if(no==4)
        {
            $("#at4_imgage2_text1").html(mA.text4[0]);
            $("#at4_imgage2_text2").html(mA.text4[1]);
        } 
        //다섯번째에서
         else if(no==5)
        {
            $("#at4_imgage2_text1").html(mA.text5[0]);
            $("#at4_imgage2_text2").html(mA.text5[1]);
        }
        //여섯번째에서
         else if(no==6)
        {
            $("#at4_imgage2_text1").html(mA.text6[0]);
            $("#at4_imgage2_text2").html(mA.text6[1]);
        }
        //일곱번째에서
         else if(no==7)
        {
            $("#at4_imgage2_text1").html(mA.text7[0]);
            $("#at4_imgage2_text2").html(mA.text7[1]);
        }
        //여덟번째에서
         else if(no==8)
        {
            $("#at4_imgage2_text1").html(mA.text8[0]);
            $("#at4_imgage2_text2").html(mA.text8[1]);
        }
        
        //그림이 확대되서 순서대로 보이기
        $("#at4_img_pic").attr({"src":"img/menu_img"+no+".jpg"});
        $("#at4_image2").html(mA.text[no-1]);   
    })



    //클릭을 한다면 가맹점 내용 보이기
     $(".at1_info1").on("click",function(){
            no=$(this).index();
            $(".at1_big").hide();
            $(".at1_big").css("display","block");
        });
    //닫기 버튼 클릭하면 사라지기        
    $(".at1_big, at1_big>p").on("click",function(){
       $(".at1_big").hide();
    });
    
    
    $(function(){

    
    //아이콘 클릭시 회원가입 부르기
    $("#Sign_Up_btn").on("click",function(){
        $("article").hide();
        $("#at13").fadeIn();
    });
    //로그인 클릭시 이동
    $("#mypage").on("click",function(){
        $("article").hide();
        $("#at14").fadeIn();
    });   
        

    //모바일용 삼선바를 클릭시 아티클1~6 보이기
    $("#bar").on("click",function(){
        $("#mob_top_m").css("marginLeft","0").css("transition","0.5s");
                

    });
    $("#mob_top_m>li").on("click",function(){
        no=$(this).index()+1;
       if(size>700)
       {
          $("#mob_top_m").css("marginLeft", "0%");
       }
       else 
       {
           $("#mob_top_m").css("marginLeft", "-100%");
       } 
      $(".mob_at").hide();
      $("#mob_at"+no).fadeIn();    
        
   })
    //서브메뉴1번 클릭시  
    // $(".sub_m1").on("click",function(){
    //     $("#contents_at1_img").css("display","none"); //브랜드 소개에서 이미지와 글자
    //                                                   //숨기기와 보이기 
    //     $("#img_text").css("display","none");
    //     $("#contents_at1_img").fadeIn(3000,function(){
             
    //         $("#img_text").fadeIn(1000); 
    //     });
        
         
    // });
    //모바일 브랜드 내용 서서히 보이기 
    $(".mt1").on("click",function(){
       $("#layout1").css("display","none");
       $(".message").css("display","none");
        $("#layout1").fadeIn(3000,function(){
            $(".message").fadeIn(1000);
        });
        
    });    
     
})
    

$(function(){
    //10개 음료 이미지 불러오기    
    for(i=1; i<=10; i++)
    {
        $(".at5_small_"+i).css("background","url(img/drink_img"+i+".jpg)").css("backgroundSize","100% 100%");

    }
    for(i=1; i<=10; i++)
    {
        $(".at5_small2_"+i).css("background","url(img/drink_img"+(i+10)+".jpg)").css("backgroundSize","100% 100%");

    }
 
    //아티클 5번 팝업창 만들기    
     // 커피 그림 클릭시 자세히 보기
    $(".at5_small_img1>li").on("click",function(){
        no=$(this).index()+1;
        $(".at5_big").hide();
        $(".at5_big"+no).css("display","block");
    });
        //(at5) 닫기 버튼을 클릭하면 사라지기
    $(".at5_big, at5_big>p").on("click",function(){
        
        $(".at5_big").hide();    
    })
    // 음료 그림 클릭시 자세히 보기    
    $(".at5_small_img2>li").on("click",function(){
        no=$(this).index()+1;
        $(".at5-1_big").hide();
        $(".at5-1_big"+no).css("display","block");
    })
    //닫기 버튼을 클릭하면 사라지기
    $(".at5-1_big, at5-1_big>p").on("click",function(){
       $(".at5-1_big").hide(); 
    });
    
        //클릭으로 그림 크게 보기 위해서 큰 그림 div에 넣기
    for(i=1; i<=10; i++)
    {                                                                                              $(".at5_big"+i).css("background","url(img/drink_img"+i+".jpg)").css("backgroundSize","100% 100%");         
    }
    for(i=1; i<=10; i++)
    {
        $(".at5-1_big"+i).css("background","url(img/drink_img"+(i+10)+".jpg)").css("backgroundSize","100% 100%");
    }
  
});
//로그인 버튼 클릭시 첫화면 으로 이동
    $("#login>li:nth-child(5)").on("click",function(){
        $("#at14").fadeOut();
        $(".m1").show();
        alert("로그인 되었습니다 ^^")
    });
 
            
    //회원가입 관련
function at13_check(js)
{
	// 성 입력시 한글만 입력 되었는지 확인 작업
	var len=js.at13_sung.value.length;
	//alert(len);
	if( len<1 )
	{        
		alert("성은 1글자 이상 입력하세요");
		js.at13_sung.value="";
		js.at13_sung.focus();
		return ;
	}
	for(i=0; i<len; i++)	
	{     
		code=js.at13_sung.value.charCodeAt(i);
		if(code < 128)
		{
			alert("성은 한글로만 입력하세요");
			js.at13_sung.value="";
			js.at13_sung.focus();
			return ;
		}
	}
	// 이름 입력시 한글만 입력 되었는지 확인 작업
	var len=js.at13_name.value.length;
	//alert(len);
	if( len<1 )
	{
		alert("이름은 1글자 이상 입력하세요");
		js.at13_name.value="";
		js.at13_name.focus();
		return ;
	}
	for(i=0; i<len; i++)	
	{  
		code=js.at31_name.value.charCodeAt(i);
		if(code < 128)
		{     
			alert("이름은 한글로만 입력하세요");
			alert(no);
            js.at13_name.value="";
			js.at13_name.focus();
			return ;
		}
	}
	// 전화번호가 숫자인지 체크 하는 작업
	if( isNaN(js.at13_tel_2.value) ||  isNaN(js.at13_tel_3.value) 
			||  js.at31_tel_2.value == "" ||  js.at13_tel_3.value == "" ) 
	{
		alert("전화번호는 숫자로 입력 하세요");
		js.at13_tel_2="";
		js.at13_tel_3="";
		js.at13_tel_2.focus();
		return;
	}
	//alert(js.at31_tel_2.value);
	
	// 주민번호 13자리 확인 작업
	noA=new Array();
	noA=js.at13_ju_1.value + js.at31_ju_2.value;
	// noA=735896 + 1165484     noA="7358961165484"
	// str='A';    str="A"; 
	if( noA.length != 13 )
	{
		alert("주민번호는 13자리인지 확인해 주세요");
		js.at13_ju_1.value="";
		js.at13_ju_2.value="";
		js.at13_ju_1.focus();
		return;
	}
	var sum=0;
	k=new Array(2,3,4,5,6,7,8,9,2,3,4,5);
	for(i=0; i<=11; i++)
	{
		//alert(noA.substring(i, i+1) );
		//      720515 201485 4
		sum += k[i] * noA.substring(i, i+1); 
	}
	nam = sum % 11;
	bit = 11 - nam;
	
	if(bit != noA.substring(12, 13) )
	{
		alert("틀린 주민번호 입니다.");
		js.at13_ju_1.value="";
		js.at13_ju_2.value="";
		js.at13_ju_1.focus();
		return;
	};
     alert("에그드랍 회원이 되신 것을 축하드립니다!");
  
}

function at13_post_number()
{
	if( (event.keyCode<48) || (event.keyCode>57) )
	{
		event.returnValue=false;
	}
}
    function at13_post(arg, js, len)
{
	if(arg.value.length == len)
	{
		js.focus();
		return;
	}
}
 //가입완료 버튼 클릭시 첫화면 으로 이동
    $("#ok_btn>td").on("click",function(){
        $("#at13").fadeOut();
        $(".m1").show();
        alert("회원가입 완료 되었습니다 ^^")
    });   
    
    //회원가입 관련 종료
    
//아티클-3번 전용 제이쿼리
$(function(){ 
//    지난이벤트 & 이벤트 모든 배경 흰색-겹쳐져 있다.
    $(".at6_body").css("background","white");
//    클릭할 지난이벤트/이벤트의 배경을 모두 없앤다.
    
//    지난 이벤트만 배경을 검정으로-지난이벤트만 나오게 하겠다.
    $("#at6_sel1").css("background","darkred").css("color", "white").css("border-top-left-radius","10px").css("border-top-right-radius","10px");
    //클릭한 지난이벤트 로부터 내용을 맨앞으로 오게 하겠다
    $("#at6_body1").addClass("at6_z");
//    이벤트 txt파일 읽어 들이기
    $.ajax({url:"data/at6_eve1.txt", success:function(js){
        $("#at6_body2").html(js);
    }});
    
   
//    지난이벤트/이벤트 중 어느것을 클릭 했는가? 알아보기  =============================
    $("#at6_sel>li").on("click", function(){
        no=$(this).index()+1;
//    클릭할 지난 이벤트/이벤트 의배경을 모두 없앤다.
        $("#at6_sel>li").css("background", "none").css("color","black");
       
//    선택한 메뉴 배경을 검정으로-나오게 하겠다.
    $("#at6_sel"+no).css("background","darkred").css("color", "white").css("border-top-left-radius","10px").css("border-top-right-radius","10px");        
        
//        보여주는 at6_body 모두 zIndex를 취소 시킨다.
        $(".at6_body").removeClass("at6_z");
//        선택된 번호에 해당하는 at6_body만 zIndex를 적용한다.(보여준다)
        $("#at6_body"+no).addClass("at6_z");
    })

})
    
//아티클6 이벤트 클릭시
$(function(){
    $(".at6_img1>div").on("click",function(){
       no=$(this).index()+1;
       $(".at6_pop_1").hide();
       $("#at6_pop"+no).css("display","block");    
    });
    $(".at6_pop_1>p").on("click",function(){
       $(".at6_pop_1").hide(); 
    });
    $(".at6_img2>div").on("click",function(){
        no=$(this).index()+1;
        $(".at6_up_1").hide();
        $("#at6_up"+no).css("display","block");
    })
    $(".at6_up_1>p").on("click",function(){
       $(".at6_up_1").hide(); 
    });
    for(i=1; i<=1; i++)
    {
        $("#at6_pop"+i).css("background","url(img/instra"+i+".jpg)").css("backgroundSize","100% 100%");
    }
    for(i=1; i<=1; i++)
    {
        $("#at6_up"+i).css("background","url(img/instra"+(i+1)+".jpg)").css("backgroundSize","100% 100%");
    } 
    
});

//아티클7 공지사항 클릭시 팝업창 띄우기
$(function(){
   $("tr>.Notice_1").on("click",function(){
      no=$(this).index();
      $(".box1_1").hide();
      $("#pop_not"+no).css("display","block");
    });
      $(".box1_1>p").on("click",function(){
        $(".box1_1").hide(); 
    });
    $("tr>.Notice_2").on("click",function(){
      no=$(this).index();
      $(".box1_1").hide();
      $("#pop_notice"+no).css("display","block");
    });
      $(".box1>p").on("click",function(){
        $(".box1").hide(); 
    });
        
    for(i=1; i<=1; i++)
    {
        $("#pop_not"+i).css("background","url(img/gogi"+i+".jpg)").css("backgroundSize","100% 100%");
    }
    for(i=1; i<=2; i++)
    {
        $("#pop_notice"+i).css("background","url(img/gogi"+(i+1)+".jpg)").css("backgroundSize","100% 100%");
    } 
 
});    
 //아티클-10 클릭시 내용보기
    $(function(){
       //모든 배경색상 화이트로 겹친다
    $(".at10_body").css("background","white");
      //개설문의 배경색상은 다크레드 색상으로 나오게 하겠다.    
    $("#at10_sel1").css("background","darkred").css("color","white").css("border-top-left-radius","10px").css("border-top-right-radius","10px");    
    });
    //클릭한 개설문의로부터 내용을 맨앞으로 오게하겠다. 
    $("#at10_body1").addClass("at10_z");
    //텍스트 파일을 읽어들인다
    $.ajax({url:"data/Quiz.txt", success:function(js){
        $("#at10_body1").html(js);
    }});

//   어느것을 클릭 했는가? 알아보기  =============================
    $("#at10_sel>li").on("click", function(){
        no=$(this).index()+1;
//    클릭할 개설문의 배경을 모두 없앤다.
        $("#at10_sel>li").css("background", "none").css("color","black");
//    선택한 메뉴 배경색상을 다크레드 색상으로 나오게 한다
    $("#at10_sel"+no).css("background","darkred").css("color", "white").css("border-top-left-radius","10px").css("border-top-right-radius","10px");        
        
//        보여주는 at6_body 모두 zIndex를 취소 시킨다.
        $(".at10_body").removeClass("at10_z");
//        선택된 번호에 해당하는 at6_body만 zIndex를 적용한다.(보여준다)
        $("#at10_body"+no).addClass("at10_z");
    });
    //고객의 소리 내용 입력시
    $(".login_close").on("click",function(){
        alert("성함 및 매장명 등을 다시 입력해 주세요")    
    });
    
    //점포제안 신청하기 버튼 클릭시
    $("#at10_button").on("click",function(){
       alert("다시 입력해 주세요") 
    });
    
    
    
}





