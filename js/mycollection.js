var $labels = $(".shop");
$(function(){
    $("#edit").click(function(){
        if($(this).html()=="编辑"){
            $(this).html("完成");
            $(".hide").fadeIn(500); 
            $(".choose").fadeIn(500);            
            $(".delete").stop().animate({"bottom":"0"},"1s"); 
            $(".collection_content").css("padding-bottom","30%");
        }else{
            $(this).html("编辑");
            $(".hide").fadeOut(500); 
            $(".choose").fadeOut(500);
            $(".delete").stop().animate({"bottom":"-2.5rem"},"1s");
            $(".collection_content").css("padding-bottom","15%");  
        }
    })
    $(".shop").click(function(){
        if($(".shop").children().attr("src")=="image/选择 (6).png"){
            $(".delete").css("background","")
        }else{
            $(".delete").css("background","#f55777");
            $(".delete").css("color","white")
        }
        if($(this).children().attr("src")=="image/选择 (6).png")
        {
            console.log($(this).children());
         $(this).children().attr("src","image/选择 (7).png");

        }
        else
        {
         $(this).children().attr("src","image/选择 (6).png");
        }
        $(this).toggle(); 
       });   
}) 


