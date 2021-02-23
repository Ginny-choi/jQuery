;(function($){
    var intro = {
        init:function(){
            var that = this;
            that.navFn();
            that.mainSlideFn();
            that.noticeFn();

        },
        navFn:function(){
            //main-btn 버튼에 on 이벤트 실행 // sub 메뉴 추가 // ul 영역 벗어날 시 메뉴 사라짐 
            var $mainBtn = $('#header .main-btn');
            var $sub = $('#nav .sub');
            var $navUl = $('#nav ul');

            $mainBtn.on({
                mouseenter:function(){
                    $mainBtn.removeClass('on');
                    $(this).addClass('on');

                    $sub.removeClass('on');
                    $(this).next().addClass('on');
                }
            });
            $navUl.on({
                mouseleave:function(){
                    $mainBtn.removeClass('on');
                    $sub.removeClass('on');
                }
            });


        },
        mainSlideFn:function(){
            //선택자 설정 () // 함수 생성 // 버튼 이벤트 
            var $slideWrap = $('#section1 .slide-wrap');
            var $nextBtn = $('#section1 .next-btn');
            var $prevBtn = $('#section1 .prev-btn');
            var cnt = 0;

            function slideViewFn(){
                $slideWrap.stop().animate({left:-800*cnt},500, function(){
                    if(cnt>3) cnt=0;
                    if(cnt<0) cnt=3;
                    $slideWrap.stop().animate({left:-800*cnt},0);
                });
            }
            function nextSlideFn(){
                cnt++;
                slideViewFn();

            }
            function prevSlideFn(){
                cnt--;
                slideViewFn();
            }

            $nextBtn.on({
                click:function(){
                    if( !$slideWrap.is(':animated')){
                        nextSlideFn();
                    }
                }
            });
            $prevBtn.on({
                click:function(){
                    if( !$slideWrap.is(':animated')){
                        prevSlideFn();
                    }
                }
            });


        },
        noticeFn:function(){
            //공지사항 버튼을 누르면 모달창 팝업 시킨다.
            //공지사항 a 버튼(.notice-btn)의 텍스트가 모달창 팝업시 h1 부분(.modal-text)에 출력된다.

            var $modal = $('#modal');
            var $modalText = $('#modal .modal-text');
            var $noticeBtn = $('#section2 .notice-btn');
            var $content = $('#modal .content');

            $noticeBtn.on({
               click:function(event){
                   event.preventDefault();
                   var tit = $(this).attr('title'); 

                   $modal.show();
                   $modalText.text(tit);
               }
            });

            //모달창 누를시 창 종료 실행

            $modal.on({
                click:function(e){
                    e.preventDefault();
                    $modal.hide();
                }
            });

            //content 부분은 제외하기

            $content.on({
                click:function(event){
                   
                    alert('no');
                    event.stopPropagation();
                }
            });



        },



    }
    intro.init();

})(jQuery);