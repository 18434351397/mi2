window.onload=function () {
    let imgs = document.querySelectorAll(".banner .container .img img");
    let dots = document.querySelectorAll(".banner .container .dot .item");
    let banner = document.querySelector(".banner .container .img");
    let leftbtn = document.querySelector(".banner .container .leftBtn");
    let rightbtn = document.querySelector(".banner .container .rightBtn");
    let widths = parseInt(getComputedStyle(banner, null).width);
    // console.log(imgs,dots,leftbtn,rightbtn,widths);
    // doublelunbo(imgs, dots, banner, leftbtn, rightbtn, 990, "active", 2000);
    Olunbo(imgs,dots,banner,leftbtn,rightbtn);
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
            clearInterval(t);
        }

        rightBtn.onclick = function () {
            if (next == imgs.length - 1) {
                return;
            }
            if (!flag) {
                return;
            }
            flag = false;
            move();
            clearInterval(t);
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
                clearInterval(t);
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
        let flag = true;
        //now = 0    next =0

        //               ++
        // left 0          left1200
        //left-1200        left:0
        // let t = setInterval(move, second);

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
            if (next == imgs.length-1) {
                return;
            }
            if (!flag) {
                return;
            }
            flag = false;
            move();
        }

        // rightBtn.onclick = function () {
        //     if (next == imgs.length - 1) {
        //         return;
        //     }
        //     // if (!flag) {
        //     //     return;
        //     // }
        //     // flag = false;
        //     move();
        // }

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
        // banner.onmouseenter = function () {
        //     clearInterval(t);
        // }
        // banner.onmouseleave = function () {
        //     // t=setInterval(move,second);
        // }

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
        // window.onblur = function () {
        //     clearInterval(t);
        // }
        // //窗口获得焦点时，继续时间函数
        // window.onfocus = function () {
        //     // t = setInterval(move, second);
        // }


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
    shangou1(button,miList,w);
    function shangou1(button,miList,w) {
        // let button=document.querySelectorAll(".button");
        // let miList=document.querySelector(".miList");
        // let w=parseInt(getComputedStyle(miList,null).width)/3;
        // console.log(button,miList,w);
        let time=0;
        button[1].onclick=function () {
            time++;
            if(time==2){
                time=1;
            }
            miList.style.transform=`translate(${(-w*time)}px)`;
        }
        button[0].onclick=function () {
            time--;
            if(time==-1){
                time=0;
            }
            miList.style.transform=`translate(${(-w*time)}px)`;
        }
    }

    let button1=document.querySelectorAll(".button1");
    let miList1=document.querySelector(".miList1");
    let w1=parseInt(getComputedStyle(miList1,null).width)/3;
    // console.log(button);
    shangou(button1,miList1,w1);

    let lis1=document.querySelectorAll(".header .nav .son-box");
    let son1=document.querySelectorAll(".header .nav .son-box a .son1");
    // console.log(lis1,son1);
    xuanxiangka(lis1,son1);

    let back = document.querySelector(".back1");
    // console.log(back);
    backs(back);

    window.onscroll=function () {
        let gd=document.body.scrollTop||document.documentElement.scrollTop;
        console.log(gd);
        if(gd>1800){
            back.style.opacity=1;
        }else{
            back.style.opacity=0;
        }
    }
    // back.onclick = function () {
    //     animate(document.body, {scrollTop: 0}, 600);
    //     animate(document.documentElement, {scrollTop: 0}, 600);
    //     // document.body.scrollTop=0;
    //     // document.documentElement.scrollTop=0;
    // }

    let Second=document.querySelectorAll(".box-second .more a");
    let uls=document.querySelectorAll(".box-second .right1");
    // console.log(Second,uls);

    uls[0].style.display="block";
    Second[0].classList.add("hot");
    for(let i=0;i<uls.length;i++){
        Second[i].onmouseenter=function () {
            for(let j=0;j<uls.length;j++){
                uls[j].style.display="none";
                Second[j].classList.remove("hot");
            }
            uls[i].style.display="block";
            Second[i].classList.add("hot");
        }
    }

    let spans=document.querySelectorAll(".Time .box span");
    // console.log(spans);
    setDate();
    setInterval(setDate,1000);
    function setDate(){
        let arr=fn();
        // console.log(arr);
        spans.forEach((v,index)=>{
            v.innerHTML=arr[index]
    })
    }

    function fn() {
        let arr=[];
        let now=new Date();
        let future=new Date(2018,11,30);
        let time=Math.floor((future.getTime()-now.getTime())/1000);
        // console.log(time);
        // let month=Math.floor(time/(30*24*60*60));
        // // console.log(month);
        // arr.push(month);
        // let day=Math.floor(time%(30*24*60*60)/(24*60*60));
        // arr.push(day);
        let hour=Math.floor(time%(30*24*60*60)%(24*60*60)/(60*60));
        arr.push(hour);
        let fz=Math.floor(time%(30*24*60*60)%(24*60*60)%(60*60)/60);
        arr.push(fz);
        let miao=Math.floor(time%(30*24*60*60)%(24*60*60)%(60*60)%60);
        arr.push(miao);
        return(arr);

    }

}