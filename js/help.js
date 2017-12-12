// 商品分类页
$(
    function(){
        window.onload = function(){
            var $li = $(".lists li");
            var $dl = $(".classify_cnt_right");
            $li.click(function(){
                var $this = $(this);
                var $t = $this.index();
                $li.removeClass();
                $this.addClass("current");
                $dl.css("display","none");
                $dl.eq($t).css("display","block");
            });
        }
});

//商品分类页2
$(
    function(){
        $("#shaixuan").click(function(){
            $(".cover_right").show();
            $(".cover_right").css({"opacity":".6"});
            $(".choose_more").css({"right":"0px"});
        });
        huanyuan();
        $(".priceChoose input").click(function(){ 
            huanyuan();           
            $(this).css({"border":"1px solid #fc605a","background":"#fff","color":"red"});
        });
        $(".chooseCnt input").click(function(){ 
            huanyuan();           
            $(this).css({"border":"1px solid #fc605a","background":"#fff","color":"red"});
        });
        $(".chongzhi").click(function(){
            $("input").css({"border":"","background":"","color":""})
        });
        function huanyuan(){
            $(".priceChoose input").css({"border":"","background":"","color":""});
        }
        $("#queding").click(function(){
            $(".panel-right").hide();
            $(".cover_right").hide();
        });
        $(".cover_right").click(function(){
            $(".panel-right").hide();
            $(".cover_right").hide();
        })

    }

      
    
    
);

// 商品详情页
// 1.头部收藏效果
$(function(){
    $(".xuanxiang .shoucang").click(
        function(){
            if($("#coll").hasClass("col")){
                $("#coll").removeClass("col");
                $("#coll").text("收藏"); 
            }
            else{
                $("#coll").addClass("col");
                $("#coll").text("已收藏");
            }
            
        },
        // function(){
        //     $("#coll").removeClass("col");
        //     $("#coll").text("已收藏");
        // }
    );
});

//2. 点击加入购物车，立即购买按钮效果
$(function(){
    $(".size,.canshu,.colorSize,.productSize,.gouwuche").click(
        function(){
            $(".cover").show();
            $(".cover").css({"opacity":".5"});
            $(".different,.li").css({"bottom":"0px"});
            // $("#cover").animate({opacity:"1"},2000);
    // $(".different").animate({bottom:"0px"},2000);
        }
    )
    $(".goumai").click(
        function(){
            $(".cover").show();
            $(".cover").css({"opacity":".1"});
            $(".liji,.liji1,.li").css({"bottom":"0px"});
            // $("#cover").animate({opacity:"1"},2000);
    // $(".different").animate({bottom:"0px"},2000);
        }
    )
});

// 3/点击cover处效果
$(function(){
    $(".cover").click(
        function(){
            $(".choose,.liji").hide();
            $(".cover").removeClass();
            location.reload();
        }
    );
});

//4. 点击参数，口味效果
$(function(){
    $(".choose2 li").click(
        function(){
            huanyuan();
            $(this).css("border","1px solid #fc605a ");
        }
    );
    function huanyuan(){
        $(".choose2 li").css({"border":"","background":"","color":""});
    }
});

//5.点击数量加减
$(function(){
    // 加
    $("#add").click(function(){
        var n = $(this).prev().val();
        var num=parseInt(n)+1;
        if(num==0){return;}
        $(this).prev().val(num);
    });
    // 减
    $("#reduce").click(function(){
        var n = $(this).next().val();
        var num=parseInt(n)-1;
        if(num==0){return;}
        $(this).next().val(num);
    });
});

//6.点击加入购物车后确定效果
 $(function(){
     $("#jiaru").click(function(){
         window.location.href = "carts.html";
   });
   $("#jiesuan").click(function(){
    window.location.href = "accounting-center.html";
});


});

//7.点击立即购买后确定效果





//帮助中心页面
$(
    function(){
        $(".help_cnt dt").click(
            function(){
                $("dd").hide();
                $(this).siblings().toggle("100");
            }   
        );
    }
);
//详情页面
$(document).ready(function(){
    $("ul.pop li a").click(function() {  
        huanyuan();  
            $(this).css("color","red");
            $(this).parent().css("border-bottom","1px solid red");
        }); 
        function huanyuan(){
            $("ul.pop li a").css("color","#555");
            $("ul.pop li").css("border-bottom","");
        }
    });


