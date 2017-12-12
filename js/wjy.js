// 删除订单的js开始;
$(
    function(){
        $("#shanchu").click(
            function(){
                 $(".black_cover").css("display","block");
                 $(".order_detail_alert").css("display","block");
                // $(this).css("color","red");
            }
        );
        $(".delcancer").click(
           function(){
            $(".black_cover").css("display","none");
            $(".order_detail_alert").css("display","none");
           } 
        );
        $(".confirm").click(
            function(){
                window.location.href="javascript:history.go(-1)";
            }
            
        );
    }
)
//删除订单的js结束；
