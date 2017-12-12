

$(document).ready(function(){
    //提交表单,调用验证函数
    $("form").submit(function(){
        var flag = true
        if (!checkName()) flag = false;
        if (!checkPwd()) flag = false;
        return flag;
    })
    //绑定失去焦点事件
    $(".allinputs").keyup(allinputskeyup);   
    $("#uname").blur(checkName);
    $("#pwd").blur(checkPwd);

})
// $("input[type=submit]").attr("disabled", "disabled");

function allinputskeyup() {
    if($(this).val()!=0){
        $(this).addClass("outborder");
    }else{
        $(this).removeClass("outborder");
    }  
            var allhaveval = true;
            // var $pwarn = $("#pwarn");
            
            // $pwarn.html("").removeClass("error");
            // $("input[type=submit]").removeClass("abled");
            $(".allinputs").each(
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

        //验证名字
		function checkName() {
			var $uname = $("#uname");
			var $uwarn = $("#uwarn");
			$uwarn.html("").removeClass("error");
			if ($uname.val() == "") {
                $uwarn.html("名字不能为空").addClass("error");
				return false;
			}
			return true;
        }
        //验证密码
		function checkPwd() {
			var $pwd = $("#pwd");
			var $pwarn = $("#pwarn");
			$pwarn.html("").removeClass("error");
			if ($pwd.val() == "") {
				$pwarn.html("密码不能为空").addClass("error");
				return false;
			}
			if ($pwd.val().length < 6) {
                $pwarn.html("密码必须等于或大于6个字符").addClass("error");
                $pwd.val()=="";
				return false;
			}
			return true;
        }
        // 记住密码
        $("#remember_pw").click()

