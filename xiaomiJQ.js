
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
    let now=0;
    // console.log(imgBox, dots);

    //初始化
    imgBox.first().css("opacity",1);
    dots.eq(0).addClass("active");

    setInterval(move,2000);
    function move() {
        now++;
        if (now==imgBox.length){
            now=0;
        }
        imgBox.css("opacity",0).eq(now).css("opacity",1);
        dots.removeClass("active").eq(now).addClass("active");

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
    console.log(button,button1,miList,w);
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


})




//   write less  do  more

