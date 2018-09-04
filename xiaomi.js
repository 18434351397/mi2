window.onload=function () {
    let imgs = document.querySelectorAll(".banner .container .img img");
    let dots = document.querySelectorAll(".banner .container .dot .item");
    let banner = document.querySelector(".banner .container .img");
    let leftbtn = document.querySelector(".banner .container .leftBtn");
    let rightbtn = document.querySelector(".banner .container .rightBtn");
    let widths = parseInt(getComputedStyle(banner, null).width);
    // console.log(imgs,dots,leftbtn,rightbtn,widths);

    doublelunbo(imgs, dots, banner, leftbtn, rightbtn, 990, "active", 2000);

    function doublelunbo(imgs, dots, banner, leftBtn, rightBtn, widths, activeClass, second) {
        //初始值
        imgs[0].style.left = "0";
        dots[0].classList.add(activeClass);
        let now = 0;
        let next = 0;
        let flag = false;
        //now = 0    next =0

        //               ++
        // left 0          left1200
        //left-1200        left:0
        let t = setInterval(move, second);

        function move() {
            next++;
            if (next == imgs.length) {
                next = 0;
            }
            //确保下一张图的位置永远在最右侧
            imgs[next].style.left = widths + "px";
            animate(imgs[now], {left: -widths});
            animate(imgs[next], {left: 0}, function () {
                flag = true;
            });
            dots[now].classList.remove(activeClass);
            dots[next].classList.add(activeClass);
            now = next;
        }

        // clearInterval(t);

        function moveL() {
            next--;
            if (next < 0) {
                next = imgs.length - 1;
            }
            imgs[next].style.left = -widths + "px";
            animate(imgs[now], {left: widths});
            animate(imgs[next], {left: 0}, function () {
                flag = true;
            });
            dots[now].classList.remove(activeClass);
            dots[next].classList.add(activeClass);
            now = next;
        }

        leftBtn.onclick = function () {
            if (next == 0) {
                return;
            }
            if (!flag) {
                return;
            }
            flag = false;
            moveL();
        }

        rightBtn.onclick = function () {
            if (next == imgs.length - 1) {
                return;
            }
            move();
        }

        //开关
        //flag=false   ！flag=true
        //防止重复点击时出现的快速轮播的现象
        //默认开关是打开的，可以点击左右箭头

        // leftBtn.onclick=function(){
        //判断开关是否开启
        //开关开启时，！flag=false
        //不执行return， 执行flag=false，move(); move执行完执行flag=true
        //开关关闭时，不要点击
        //！flag=true，执行return
        //     if(next==0){
        //         return;
        //     }
        //     if(!flag){
        //         return;
        //     }
        //
        //     flag=false;
        //     moveL();
        // }
        // rightBtn.onclick=function(){
        //     if(next==imgs.length-1){
        //         return;
        //     }
        //     if(!flag){
        //         return;
        //     }
        //     flag=false;
        //     move();
        // }
        banner.onmouseenter = function () {
            clearInterval(t);
        }
        banner.onmouseleave = function () {
            t=setInterval(move,second);
        }

        //鼠标点击，变颜色
        for (let i = 0; i < imgs.length; i++) {
            dots[i].onclick = function () {
                for (let j = 0; j < imgs.length; j++) {
                    dots[j].classList.remove(activeClass);
                    imgs[j].style.left = widths + "px";
                }
                dots[i].classList.add(activeClass);
                imgs[i].style.left = 0;
                now = i;
                next = i;
            }
        }
        //窗口失去焦点时，停止时间函数
        window.onblur = function () {
            clearInterval(t);
        }
        //窗口获得焦点时，继续时间函数
        window.onfocus = function () {
            t = setInterval(move, second);
        }


    }


    let lunbo1 = document.querySelectorAll(".content ul li .lun5");
    let dots1= document.querySelectorAll(".content ul li .pagers .dot0");
    let lunbox = document.querySelector(".content ul li");
    let leftbtn1 = document.querySelector(".content ul li .leftbtn1");
    let rightbtn1 = document.querySelector(".content ul li .rightbtn1");
    let widths1 = parseInt(getComputedStyle(lunbox, null).width);
    // console.log(leftbtn1,rightbtn1,widths1);
    doublelunbo1(lunbo1, dots1, lunbox, leftbtn1, rightbtn1, widths1, "active", 2000);

    function doublelunbo1(imgs, dots, banner, leftBtn, rightBtn, widths, activeClass, second) {
        //初始值
        imgs[0].style.left = "0";
        dots[0].classList.add(activeClass);
        let now = 0;
        let next = 0;
        let flag = false;
        //now = 0    next =0

        //               ++
        // left 0          left1200
        //left-1200        left:0
        let t = setInterval(move, second);

        function move() {
            next++;
            if (next == imgs.length) {
                next = 0;
            }
            //确保下一张图的位置永远在最右侧
            imgs[next].style.left = widths + "px";
            animate(imgs[now], {left: -widths});
            animate(imgs[next], {left: 0}, function () {
                flag = true;
            });
            dots[now].classList.remove(activeClass);
            dots[next].classList.add(activeClass);
            now = next;
        }
        clearInterval(t);

        function moveL() {
            next--;
            if (next < 0) {
                next = imgs.length - 1;
            }
            imgs[next].style.left = -widths + "px";
            animate(imgs[now], {left: widths});
            animate(imgs[next], {left: 0}, function () {
                flag = true;
            });
            dots[now].classList.remove(activeClass);
            dots[next].classList.add(activeClass);
            now = next;
        }

        leftBtn.onclick = function () {
            if (next == 0) {
                return;
            }
            if (!flag) {
                return;
            }
            flag = false;
            moveL();
        }

        rightBtn.onclick = function () {
            if (next == imgs.length - 1) {
                return;
            }
            move();
        }

        //开关
        //flag=false   ！flag=true
        //防止重复点击时出现的快速轮播的现象
        //默认开关是打开的，可以点击左右箭头

        // leftBtn.onclick=function(){
        //判断开关是否开启
        //开关开启时，！flag=false
        //不执行return， 执行flag=false，move(); move执行完执行flag=true
        //开关关闭时，不要点击
        //！flag=true，执行return
        //     if(next==0){
        //         return;
        //     }
        //     if(!flag){
        //         return;
        //     }
        //
        //     flag=false;
        //     moveL();
        // }
        // rightBtn.onclick=function(){
        //     if(next==imgs.length-1){
        //         return;
        //     }
        //     if(!flag){
        //         return;
        //     }
        //     flag=false;
        //     move();
        // }
        banner.onmouseenter = function () {
            clearInterval(t);
        }
        banner.onmouseleave = function () {
            // t=setInterval(move,second);
        }

        //鼠标点击，变颜色
        for (let i = 0; i < imgs.length; i++) {
            dots[i].onclick = function () {
                for (let j = 0; j < imgs.length; j++) {
                    dots[j].classList.remove(activeClass);
                    imgs[j].style.left = widths + "px";
                }
                dots[i].classList.add(activeClass);
                imgs[i].style.left = 0;
                now = i;
                next = i;
            }
        }
        //窗口失去焦点时，停止时间函数
        window.onblur = function () {
            clearInterval(t);
        }
        //窗口获得焦点时，继续时间函数
        window.onfocus = function () {
            // t = setInterval(move, second);
        }


    }

    let lunbo2 = document.querySelectorAll(".content ul li .lun2");
    let dots2 = document.querySelectorAll(".content ul li .pagers .dot2");
    // let lunbox2 = document.querySelector(".content ul li");
    let leftbtn2 = document.querySelector(".content ul li .leftbtn2");
    let rightbtn2 = document.querySelector(".content ul li .rightbtn2");
    // let widths2 = parseInt(getComputedStyle(lunbox, null).width);
    doublelunbo1(lunbo2,dots2,lunbox,leftbtn2,rightbtn2,widths1,"active", 2000);

    let lunbo3 = document.querySelectorAll(".content ul li .lun3");
    let dots3 = document.querySelectorAll(".content ul li .pagers .dot3");
    // let lunbox2 = document.querySelector(".content ul li");
    let leftbtn3 = document.querySelector(".content ul li .leftbtn3");
    let rightbtn3 = document.querySelector(".content ul li .rightbtn3");
    // let widths2 = parseInt(getComputedStyle(lunbox, null).width);
    doublelunbo1(lunbo3,dots3,lunbox,leftbtn3,rightbtn3,widths1,"active", 2000);

    let lunbo4 = document.querySelectorAll(".content ul li .lun4");
    let dots4 = document.querySelectorAll(".content ul li .pagers .dot4");
    // let lunbox2 = document.querySelector(".content ul li");
    let leftbtn4 = document.querySelector(".content ul li .leftbtn4");
    let rightbtn4 = document.querySelector(".content ul li .rightbtn4");
    // let widths2 = parseInt(getComputedStyle(lunbox, null).width);
    doublelunbo1(lunbo4,dots4,lunbox,leftbtn4,rightbtn4,widths1,"active", 2000);


    let lis=document.querySelectorAll(".banner .list .listbox");
    let son=document.querySelectorAll(".banner .list .listbox .son");
    xuanxiangka(lis,son);


    let button=document.querySelectorAll(".button");
    let miList=document.querySelector(".miList");
    let w=parseInt(getComputedStyle(miList,null).width)/2;
    // console.log(button);
    shangou(button,miList,w);

    let button1=document.querySelectorAll(".button1");
    let miList1=document.querySelector(".miList1");
    let w1=parseInt(getComputedStyle(miList1,null).width)/3;
    // console.log(button);
    shangou(button1,miList1,w1);

    let lis1=document.querySelectorAll(".header .nav .son-box");
    let son1=document.querySelectorAll(".header .nav .son-box a .son1");
    console.log(lis1,son1);
    xuanxiangka(lis1,son1);


}