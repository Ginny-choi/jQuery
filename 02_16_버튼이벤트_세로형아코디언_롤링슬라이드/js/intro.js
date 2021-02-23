;(function($){
    var intro = {
        init:function(){
            var that = this;
            that.navFn();
            that.mainSlideFn();            
        },

        navFn:function(){
            //선택자 설정
            $mainBtn = $('#header .main-btn');
            $sub = $('#header .sub');
            $navUl = $('#nav .main-menu');

            $mainBtn.on({
                mouseenter:function(){
                    $mainBtn.removeClass('on');
                    $(this).addClass('on');

                    $sub.removeClass('on');
                    $(this).next().addClass('on');
                }
            })

            $navUl.on({
                mouseleave:function(){
                    $mainBtn.removeClass('on');
                    $sub.removeClass('on');
                }
            })
        },

        mainSlideFn: function(){
            //1.선택자(변수)설정//2.함수 설정//3.버튼 이벤트 실행 

            var $imgWrap = $('#section1 .img-wrap');
            var $nextBtn = $('#section1 .next-btn');
            var $prevBtn = $('#section1 .prev-btn');
            var cnt = 0;

            function mainSlidefn(){
                $imgWrap.stop().animate({left:-795*cnt},600, function(){
                    if(cnt>3) cnt=0;
                    if(cnt<0) cnt=3;
                    $imgWrap.stop().animate({left:-795*cnt},0);
                });
            }

            function nextSlideFn(){
                cnt++;
                mainSlidefn();
            }
            function prevSlideFn(){
                cnt--;
                mainSlidefn();
            }

            $nextBtn.on({
                click:function(){
                    if( !$imgWrap.is(':animated')){
                    nextSlideFn();
                }
                }
            });
            $prevBtn.on({
                click:function(){
                    if( !$imgWrap.is(':animated')){
                    prevSlideFn();
                }
                }
            });
            
            

        },


    };
    intro.init();
  
})(jQuery);