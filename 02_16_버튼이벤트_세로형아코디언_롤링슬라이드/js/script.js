

// $imgWrap = document.querySelector('.img-wrap');
// cnt = 0;

// // 클릭시 호출 할 함수이름 
// // 1. 다음 슬라이드 : nextSlideFn
// // 2. 이전 슬라이드 : prevSlideFn

// function nextSlideFn(){
//     cnt++;
//     cnt > 3 ? cnt=0 : cnt;
//     $imgWrap.style = 'left:' + (-795*cnt) + 'px'; 


// }

// function prevSlideFn(){
//     cnt--;
//     cnt < 0 ? cnt=0 : cnt;
//     $imgWrap.style = 'left:' + (-795*cnt) + 'px'; 


// }

var menu = {
    init:function(){
        this.menuFn();
        this.slideFn();

    },

    menuFn:function(){
        var $mainBtn = document.getElementsByClassName('main-btn');
        var $sub = document.getElementsByClassName('sub');


        $mainBtn = [].slice.call($mainBtn);
        console.log($mainBtn);

        $mainBtn.forEach(function(el,idx,arr){
            $mainBtn[idx].addEventListener('mouseenter',function(event){
                event.preventDefault;
                for(var i = 0; i<=3; i++){
                $mainBtn[i].classList.remove('on');
                $sub[i].classList.remove('on');
            }
            
            
            $mainBtn[idx].classList.add('on');
            $sub[idx].classList.add('on');
        },false);

        });
        var $navArea = document.getElementsByClassName('nav-area');
        $navArea = [].slice.call($navArea);
        console.log($navArea);

        $navArea.forEach(function(el,idx,arr){
            $navArea[idx].addEventListener('mouseleave',function(event){
                $mainBtn[idx].classList.remove('on');
                $sub[idx].classList.remove('on');

                 

            },false);
        })
       
    },

    slideFn:function(){
        var $imgWrap = document.querySelector('.img-wrap');
        var $nextBtn = document.querySelector('.next-btn');
        var $prevBtn = document.querySelector('.prev-btn');

        console.log($prevBtn);
        console.log($imgWrap);

        var cnt = 0;

        function nextSlideFn() {
            cnt++;
            cnt > 3 ? cnt=0 : cnt;
            $imgWrap.style = 'left:' + (-795*cnt) + 'px'; 
            }

        function prevSlideFn() {
            cnt--;
            cnt < 0 ? cnt=0 : cnt;
            $imgWrap.style = 'left:' + (-795*cnt) + 'px'; 
            }

            $nextBtn.addEventListener('click',function(event){
                event.preventDefault;
                nextSlideFn();

            },false);

            $prevBtn.onclick = function(event){
                event.preventDefault();
                prevSlideFn();
            }

        

    }
};
menu.init();