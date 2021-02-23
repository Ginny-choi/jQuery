

;(function($){ //$가 매개변수를 받는다 . $가 제이쿼리를 수행한다.
    
    var intro = {
        init:      function(){
            var that = this;
            that.navFn();
            that.mainSlideFn();
            that.noticeFn();
            that.galleryFn();
            that.bannerFn();
            that.familyFn();


        },
        navFn:       function(){
            //아코디언 메뉴 
            //메인메뉴(선택자(selector):.main-btn)에 버튼 이벤트 리스터 
            //마우스 오버시(mouseenter) 해당 메뉴에 
            //클래스 추가(addClass('on'))하기전 추가된 모든 클래스 removeClass('on')
            //클래스 추가(addClass('on')하여 스타일을 설정하고

            //그리고 해당 서브메뉴(선택자: .sub)에 
            //클래스 추가(addClass('on'))하기전 추가된 모든 클래스 removeClass('on')
            // 클래스 추가(addClass('on')하여 스타일이 설정 되도록 한다.
            
            //
            var $mainBtn = $('#nav .main-btn');
            var $sub = $('#nav .sub');
            var $navUl = $('#nav > ul'); //이 영역을 떠나면 모든 메뉴 초기화

            //메인버튼 이벤트리스너(핸들러)
            $mainBtn.on({
                mouseenter:function(){
                    $mainBtn.removeClass('on'); //버튼 모두 추가된 클래스('on') 삭제
                    $(this).addClass('on');

                    $sub.removeClass('on');
                    $(this).next().addClass('on');

                }
            });
            //메인메누와 서브메뉴 영역을 떠나면 
            $navUl.on({
                mouseleave:function(){
                    $mainBtn.removeClass('on');
                    $sub.removeClass('on');
                }
            })

        },
        mainSlideFn: function(){
            //슬라이드 이미지 4개 좌우추가2개 = 총6개 (3 0 1 2 3 0)
            //선택자 : 애니메이션 대상 .slide-wrap
            //선택자 : 이전 슬라이드 버튼 .prev-btn
            //선택자 : 다음 슬라이드 버튼 .next-btn
            //변수 : 카운트 변수 cnt = 0;

            var $slideWrap = $('#section1 .slide-wrap')
            var $prevBtn = $('#section1 .prev-btn')
            var $nextBtn = $('#section1 .next-btn')
            var cnt = 0;

                //1. 메인 슬라이드 함수 
                function mainSlideFn(){
                    $slideWrap.stop().animate({left:-800*cnt},600, function(){
                        if(cnt>3) cnt=0;
                        if(cnt<0) cnt=3;
                        $slideWrap.stop().animate({left:-800*cnt},0); //순간 이동 롤링포인트
                    });

                }

                //2-1. 다음 슬라이드 함수 
                function nextSlideCountFn(){
                    cnt++;
                    mainSlideFn(); //메인 함수 호출 

                }
                //2-2. 이전 슬라이드 함수 
                function prevSlideCountFn(){
                    cnt--;
                    mainSlideFn(); //메인 함수 호출 

                }


                //3-1. 다음 슬라이드 버튼 클릭 이벤트
                $nextBtn.on({
                    click: function(){
                        //연속해서 클릭하면 버블링 발생 
                        //디버깅 : 애니메이션이 동작이 안될 때 클릭하도록 
                        //제어문 설정(if 조건문)
                        //not(부정) != !== 
                        //애니메이션이 안될 때를 !$slideWrap.is(':amimate')
                        if( !$slideWrap.is(':animated') ){
                        nextSlideCountFn();
                        }
                    }
                    
                });
                //3-1. 이전 슬라이드 버튼 클릭 이벤트
                $prevBtn.on({
                    click: function(){
                        if( !$slideWrap.is(':animated') ){
                        prevSlideCountFn();}
                    }        
                });

        },
        noticeFn:    function(){
            //공지사항 버튼 .notice-btn 클릭하면 모달창 #modal 띄운다.
           //(공지사항 버튼.notice-btn) 클릭한 버튼 텍스트(a태그에 있는 텍스트)가 
            //모달창 #modal .notice-text(h1) 에 해당 텍스트가 출력 한다.

            var $modal = $('#modal');    
            var $noticeBtn = $('#section2 .notice-btn');
            var $noticeText = $('#modal .notice-text');
            var $content = $('#modal .content');

           console.log($content);

                //모달창 열기(띄우기) show() fadeIn slideDown
                $noticeBtn.on({
                    click:function(event){
                        event.preventDefault();
                        var txt = $(this).text(); // 클릭한 버튼의 텍스트 가져오기
                        var tit = $(this).attr('title'); // 클릭한 버튼의 타이틀 속성 attr:attribute
                         
                        $modal.show(); //보여라(display:none => block)
                        $noticeText.text( tit ); //$noticeText.html()
                        }
                     });

                     //모달창 열기(띄우기) hide() fadeOut() SlideUp()
                     //#modal 을 클릭하면 창닫기
                     //단, $noticeText(h1) 텍스트 위치 박스는 클릭시 
                     // 닫기 이벤트 수행 안함. 

                     $modal.on({
                         click:function(event){
                            event.preventDefault();
                            

                            // $modal.hide(); 
                            $(this).hide();
                         }
                     });

                     //버튼 이벤트 전파 차단 
                     $content.on({
                         click:function(event){
                            event.stopPropagation();  //자손 요소에서 클릭시 조상영역위치의 이벤트가 수행되는걸 차단
                            alert('텍스트 콘텐츠 영역 위치 클릭 !!');
                         }
                     })
            
        },
        galleryFn:   function(){
            //gallery-btn(선택자)를 클릭(이벤트 리스너)하면 #modalGallery 가 열린다.(fadeIn(1000))
           //그리고 해당 이미지가 모달창에 나타난다.(부모영역의 이벤트 전달 차단.stopPropagation) 모달창 백그라운드 변경
           //그리고 또 모달창 이미지를 클릭하면 다음 이미지가 나타난다.부드럽게 페이드인(fadeIn(1000)된다.
           //모달창 닫기는 이미지를 제외한 영억 클릭시 닫기 fadeOut(1000) 부드럽게 페이드 아웃
           
           var $modalGallery = $('#modalGallery');
           var $galleryBtn = $('#section2 .gallery-btn');
           var $content = $('#modalGallery .content');

           //모달창 열기 
           $galleryBtn.on({
               click:function(event){
                   event.preventDefault();
                   $modalGallery.stop().fadeIn(300);
                   //클릭한 이미지로 
                   //모달창 배경 이미지 변경 
                   var bgimg = $(this).parent().css('backgroundImage'); /* background-image 가능 */
                    // console.log(bgimg); //클릭한 부모영역의 배경이미지 확인 

                //모달창 콘텐츠의 배경이미지 변경 
                   $content.css({backgroundImage: bgimg});
               }
           });
           //모달창 닫기
           $modalGallery.on({
            click:function(){
                $modalGallery.stop().fadeOut(600);
            }
        });

            //버튼 이벤트(갤러리 이미지 전환)
            $content.on({
                click:function(e){
                    e.stopPropagation();
                }
            });

            //이미지 전환 

           

            
        },
        bannerFn:    function(){
           
        },
        familyFn:    function(){
           
        }

    };
    intro.init();

})(jQuery); //제이쿼리를 전달 인자로 보내고 



//goUrl() 링크
//BOM[Browser Object Model] -browser 와 연결된 언어(?)

//ECMA Script 6(2015)
// goUrl = z => {
// goUrl = (z) => {}    

//ECMA Script 5 : ES5


function goUrl(z){

    // alert(z) ; //버튼 클릭시 전달인자[Argument] > 호출된 함수에서 받아주는 매개변수[] 확인

// switch(매개변수비교할 대상){
//      case 조건1:
//          //명령 수행할 내용
//          break;
//      case 조건2:
//          //명령 수행할 내용
//          break;
//      case 조건3:
//             //명령 수행 할 내용
//             break;
 //     :    
//      default:
//             //명령 수행할 내용
// // }





    switch(z){
        case 'noticeMore':
            location.href = 'http://www.bok.or.kr/museum/pgm/master/list.do?progrmSeCd=03&menuNo=700124'
            break; //강제 탈출

        //main1

        case 'main1': 
            location.href = './main1.html1';
            break; 
        case 'main1-1': 
            location.href = './main1-1.html1';
            break;     
        case 'main1-2': 
            location.href = './main1-2.html1';
            break; 
        case 'main1-3': 
            location.href = './main1-3.html1';
            break;     
            case 'main1-4': 
            location.href = './main1-4.html1';
            break;

        //main2
        case 'main2': 
            location.href = './main2.html1';
            break; 
        case 'main2-1': 
            location.href = './main2-1.html1';
            break;     
        case 'main2-2': 
            location.href = './main2-2.html1';
            break; 
        case 'main2-3': 
            location.href = './main2-3.html1';
            break;     
            case 'main2-4': 
            location.href = './main2-4.html1';
            break;    
            
        //main3
        case 'main3': 
            location.href = './main3.html1';
            break; 
        case 'main3-1': 
            location.href = './main3-1.html1';
            break;     
        case 'main3-2': 
            location.href = './main3-2.html1';
            break; 
        case 'main3-3': 
            location.href = './main3-3.html1';
            break;     
        case 'main3-4': 
            location.href = './main3-4.html1';
            break;        

        //main4
        case 'main4': 
            location.href = './main4.html1';
            break; 
        case 'main4-1': 
            location.href = './main4-1.html1';
            break;     
        case 'main4-2': 
            location.href = './main4-2.html1';
            break; 
        case 'main4-3': 
            location.href = './main4-3.html1';
            break;     
        case 'main4-4': 
            location.href = './main4-4.html1';
            break;            
            


        default:
            alert('URL 전달인자가 잘못되었습니다. 확인하세요-_-')
    } //switch()블록 끝



/*
    //공지사항 더보기
    if(z == 'noticeMore'){
        // location.href = 'http://www.bok.or.kr/museum/pgm/master/list.do?progrmSeCd=03&menuNo=700124'
        window.open('http://www.bok.or.kr/museum/pgm/master/list.do?progrmSeCd=03&menuNo=700124');
    }

    //main1

    else if(z == 'main1'){
        // location.href = './main1.html1'; //현재창 = _self
        window.open('./main1.html1') //새창 열기 = _blank
    }
    else if(z == 'main1-1'){
        location.href = './main1-1.html1';
    }
    else if(z == 'main1-2'){
        location.href = './main1-2.html1';
    }
    else if(z == 'main1-3'){
        location.href = './main1-3.html1';
    }
    else if(z == 'main1-4'){
        location.href = './main1-4.html1';
    }

    //main2
    else if(z == 'main2'){
        location.href = './main2.html1';
    }

    else if(z == 'main2-1'){
        location.href = './main2-1.html1';
    }
    else if(z == 'main2-2'){
        location.href = './main2-2.html1';
    }
    else if(z == 'main2-3'){
        location.href = './main2-3.html1';
    }
    else if(z == 'main2-4'){
        location.href = './main2-4.html1';
    }

     //main3
    else if(z == 'main3'){
        location.href = './main3.html1';
    }

    else if(z == 'main3-1'){
        location.href = './main3-1.html1';
    }
    else if(z == 'main3-2'){
        location.href = './main3-2.html1';
    }
    else if(z == 'main3-3'){
        location.href = './main3-3.html1';
    }
    else if(z == 'main3-4'){
        location.href = './main3-4.html1';
    }
     //main4
    else if(z == 'main4'){
        location.href = './main4.html1';
    }
    else if(z == 'main4-1'){
        location.href = './main4-1.html1';
    }
    else if(z == 'main4-2'){
        location.href = './main4-2.html1';
    }
    else if(z == 'main4-3'){
        location.href = './main4-3.html1';
    }
    else if(z == 'main4-4'){
        location.href = './main4-4.html1';
    }

    //그 밖에(그외에)
    else{
        alert('URL 전달인자가 잘못되었습니다. 확인하세요-_-');
        return false; //버튼 클릭을 취소 (오류가 발생하기전 막는다)
    } */

}; //goUrl()함수 끝 

