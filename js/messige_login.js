

$(document).ready(function(){
    //提交表单,调用验证函数
    $("form").submit(function(){
        var flag = true
        if (!checkTel()) flag = false;
        // if (!checkMessnum()) flag = false;
        return flag;
    })
    //绑定失去焦点事件
    $(".messinputs").keyup(messinputskeyup);   
    $("#tel").blur(checkTel);
    // $("#messige").blur(checkMessnum);

})
// $("input[type=submit]").attr("disabled", "disabled");

function messinputskeyup() {
    if($(this).val()!=0){
        $(this).addClass("outborder");
    }else{
        $(this).removeClass("outborder");
    }  
            var allhaveval = true;
            // var $pwarn = $("#pwarn");
            
            // $pwarn.html("").removeClass("error");
            // $("input[type=submit]").removeClass("abled");
            $(".messinputs").each(
                function(index, ele) {
                    var haveval = $(ele).val().length != 0;
                    allhaveval = allhaveval && haveval;
                }
            );

   
    if (allhaveval) {
        $("input[type=submit]").removeAttr("disabled");
        $("input[type=submit]").addClass("abled");
    } else {
        $("input[type=submit]").attr("disabled", "disabled");
        $("input[type=submit]").removeClass("abled");
    }
    }

        //验证手机
		function checkTel() {
			var reg = /1[345789]\d{9}/;
			var $tel = $("#tel");
			var $twarn = $("#twarn");
			// $uwarn.html("").removeClass("error");
			if (reg.test($tel.val())) {
				// $twarn.html("").removeClass("error");
				$("#get_messnum").css("color","#e4393c");
				$twarn.html("").removeClass("error");
                return true;
				
			}else{
				$twarn.html("手机号码格式不对！").addClass("error");
				return false;
			}
			
		}
		// 获取验证码
		var clock = '';
		var nums = 10;
		var btn;
		function sendCode(thisBtn)
		{ 

		btn = thisBtn;
		btn.disabled = true; //将按钮置为不可点击
		btn.value = nums+'s';
		clock = setInterval(doLoop, 1000); //一秒执行一次
		}
		function doLoop()
		{
		nums--;
		if(nums > 0){
		 btn.value = nums+'s';
		}else{
		 clearInterval(clock); //清除js定时器
		 btn.disabled = false;
		 btn.value = '重新获取';
		//  messige.value="";
		//  messige.style.borderColor = "#ccc" ;
		 nums = 10; //重置时间
		}
		}


