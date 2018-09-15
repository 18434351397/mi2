
$(function () {
    let shop=$(".daohang .top-right .icon-gouwuchekong");
    // console.log(shop);
    // let xiala=$(".daohang .top-right .icon-gouwuchekong .red");
    shop.mouseenter(function () {
        $(".daohang .top-right .icon-gouwuchekong .red").clearQueue().slideDown();
    })
    shop.mouseleave(function () {
        $(".daohang .top-right .icon-gouwuchekong .red").clearQueue().slideUp();
    })
    // parent.triggerHandler("mouseenter");

    //侧导航
    // let lis=$(".listbox");
    // let son=$(".son");
    // console.log(son);

    $(".listbox").mouseenter(function () {
        $(".listbox son").css("display","none");
        $(this).children(".listbox .son").css("display","block");
    })
    $(".listbox").mouseleave(function () {
        $(this).children(".listbox .son").css("display","none");
    })


    //轮播图
    let imgBox=$(".banner .img img");
    let dots=$(".banner .dot .item");
    let lbtn=$(".leftBtn");
    let rbtn=$(".rightBtn");
    let banner=$(".banner");
    let next=0;
    // console.log(banner);

    dots.mouseenter(function () {
        let i=$(this).index();
        imgBox.eq(i).css("opacity",1).siblings().css("opacity",0);
        dots.eq(i).addClass("active").siblings().removeClass("active");
    })
    banner.mouseenter(function () {
        clearInterval(t);
    })
    banner.mouseleave(function () {
        t=setInterval(move,2000);
    })
    let now=0;
    //初始化
    imgBox.first().css("opacity",1);
    dots.eq(0).addClass("active");

    lbtn.click(function () {
        clearInterval(t);
        movel();
    })
    rbtn.click(function () {
        move();
    })

    let t=setInterval(move,2000);
    function move() {
        now++;
        if (now==imgBox.length){
            now=0;
        }
        imgBox.css("opacity",0).eq(now).css("opacity",1);
        dots.removeClass("active").eq(now).addClass("active");

    }
    function movel() {
        now--;
        if (now==0){
            now=imgBox.length;
        }
        imgBox.css("opacity",0).eq(now).css("opacity",1);
        dots.removeClass("active").eq(now).addClass("active");

    }



    //内容
    let lunbo1 = $(".content ul li .lun5");
    let dots1= $(".content ul li .pagers .dot0");
    let lunbox = $(".content ul li:nth-child(1)");
    let leftbtn1 = $(".content ul li .leftbtn1");
    let rightbtn1 = $(".content ul li .rightbtn1");
    let widths1=parseInt(lunbox.css("width"));
    console.log(lunbo1.length);
    doublelunbo1(lunbo1, dots1,leftbtn1, rightbtn1, widths1);

    let lunbo2 = $(".content ul li .lun2");
    let dots2 = $(".content ul li .pagers .dot2");
    let leftbtn2 = $(".content ul li .leftbtn2");
    let rightbtn2 = $(".content ul li .rightbtn2");
    doublelunbo1(lunbo2,dots2,leftbtn2,rightbtn2,widths1);

    let lunbo3 = $(".content ul li .lun3");
    let dots3 = $(".content ul li .pagers .dot3");
    // let lunbox2 = document.querySelector(".content ul li");
    let leftbtn3 = $(".content ul li .leftbtn3");
    let rightbtn3 = $(".content ul li .rightbtn3");
    // let widths2 = parseInt(getComputedStyle(lunbox, null).width);
    doublelunbo1(lunbo3,dots3,leftbtn3,rightbtn3,widths1);

    let lunbo4 = $(".content ul li .lun4");
    let dots4 = $(".content ul li .pagers .dot4");
    // let lunbox2 = document.querySelector(".content ul li");
    let leftbtn4 = $(".content ul li .leftbtn4");
    let rightbtn4 = $(".content ul li .rightbtn4");
    // let widths2 = parseInt(getComputedStyle(lunbox, null).width);
    doublelunbo1(lunbo4,dots4,leftbtn4,rightbtn4,widths1);
    function doublelunbo1(imgs,dots,leftBtn, rightBtn, widths) {
        //初始值
        imgs.eq(0).css("left",0);
        dots.eq(0).addClass("active");
        let now = 0;
        let next = 0;
        let flag = true;
        function move() {
            next++;
            if (next == imgs.length) {
                next = 0;
            }
            //确保下一张图的位置永远在最右侧

            imgs.eq(next).css({left:widths});
            imgs.eq(now).animate( {left: -widths});
            imgs.eq(next).animate({left: 0}, function () {
                flag = true;
            });
            dots.eq(now).removeClass("active");
            dots.eq(next).addClass("active");
            now = next;
        }
        function moveL() {
            next--;
            if (next < 0) {
                next = imgs.length - 1;
                }
            //确保下一张图的位置永远在最右侧

            imgs.eq(next).css({left:-widths});
            imgs.eq(now).animate( {left: widths});
            imgs.eq(next).animate({left: 0}, function () {
                flag = true;
            });
            dots.eq(now).removeClass("active");
            dots.eq(next).addClass("active");
            now = next;
        }
        leftBtn.click(function () {
            if (next == 0) {
                return;
            }
            if (!flag) {
                return;
            }
            flag = false;
            moveL();
        })
        rightBtn.click(function () {
            if (next == imgs.length-1) {
                return;
            }
            if (!flag) {
                return;
            }
            flag = false;
            move();
        })

        dots.click(function () {
            let i=$(this).index();

        })

        //鼠标点击，变颜色
        // for (let i = 0; i < imgs.length; i++) {
        //     dots[i].onclick = function () {
        //         for (let j = 0; j < imgs.length; j++) {
        //             dots[j].classList.remove("active");
        //             imgs[j].style.left = widths + "px";
        //         }
        //         dots[i].classList.add("active");
        //         imgs[i].style.left = 0;
        //         now = i;
        //         next = i;
        //     }
        // }
    }





    //商品移入移出
    let parent=$(".box-second .more a");
    let son=$(".box-second .right1");
    // console.log(parent, son);
    parent.mouseenter(function () {
        let i=$(this).index();
        // $(this).removeClass("hot");
        // $(this).addClass("hot");
        parent.removeClass("hot").eq(i).addClass("hot");

        son.css("display","none").eq(i).css("display","block");
    })
    parent.triggerHandler("mouseenter");


    let button=$(".more .lb1");
    let button1=$(".more .rb1");
    let miList=$(".miList1");
    let w1=parseInt($(".miList").css("width"))/2;
    let w=parseInt($(".miList1").css("width"))/3;
    // console.log(button,button1,miList,w);
    let time=0;
    // console.log(button[0],miList,w);

    $(".more .lb").click(function () {
        time--;
        if(time==-1){
            time=0;
        }
        $(".miList").animate({left:(-w1*time)},600);
    })
    $(".more .rb").click(function () {
        time++;
        if(time==2){
            time=1;
        }
        $(".miList").animate({left:(-w1*time)},600);
    })

    $(".more .lb1").click(function () {
        time--;
        if(time==-1){
            time=0;
        }
        $(".miList1").animate({left:(-w*time)},600);
    })
    $(".more .rb1").click(function () {
        time++;
        if(time==3){
            time=2;
        }
        $(".miList1").animate({left:(-w*time)},600);
    })


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
        let future=new Date(2018,9,2);
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



    $(window).scroll(function () {
        let gd=document.body.scrollTop||document.documentElement.scrollTop;
        console.log(gd);
        if(gd>1800){
            back.css({opacity:1});
        }else{
            back.css({opacity:0});
        }
    })



    let back=$(".back1");
    // console.log(back);
    back.click(function () {
        $(document.body).animate({scrollTop: 0},600);
        $(document.documentElement).animate({scrollTop: 0},600);
    })


})




//   write less  do  more

