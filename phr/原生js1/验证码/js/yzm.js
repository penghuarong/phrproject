/*
* @Author: Marte
* @Date:   2018-03-26 07:27:26
* @Last Modified by:   Marte
* @Last Modified time: 2018-04-06 14:19:57
*/

'use strict';
/*;window.onload = function(){
    var ipt = document.getElementById("ipt"),
        btn = document.getElementById("btn"),
        ipt1 = document.getElementById("ipt1"),
        btn1 = document.getElementById("btn1");
        var time = 5;
        var timer = null;
        btn.onclick = function(){
            var str = "ASDFGHJKLPOIUYTREWQZXCVBNMasdfghjkloiuytrewqzxcvbnm1234567890";
            var yzm = "";
            for(var i=0;i<4;i++)
            {
                var index = Math.floor(Math.random()*str.length);
                yzm += str[index];
            }
            ipt.value=yzm;
            btn.disabled = true;
            timer = setInterval(downtime,1000);
        }
        btn1.onclick = function(){
            if(ipt.value.toLowerCase()==ipt1.value.toLowerCase())
            {
                alert("验证正确！");
            }
            else
            {
                alert("验证失败！！");
            }
        }
        function downtime(){
            btn.innerHTML = time-- + "s秒后重试";
            if(time<0){
                clearInterval(timer);
                btn.innerHTML = "点击获取";
                time = 5;
                btn.disabled = false;
            }
        }

}*/
;window.onload = function(){
    var ipt = document.getElementById("ipt"),
    btn = document.getElementById("btn");
    var time = 5;
    var timer = null;
    btn.onclick = function(){
        var str = "ASDFGHJKLPOIUYTREWQZXCVBNMasdfghjklpoiuytrewqzxcvbnm0987654321";
        var yzm = "";
        for(var i=0;i<4;i++){
            var index = Math.floor(Math.random()*str.length);
            yzm += str[index];
        }
        ipt.value = yzm;
        timer = setInterval(downtime,1000);
        btn.disabled = true;
    }

    function downtime(){
        btn.innerHTML = time-- + "s后重试";
        if(time<0){
            clearInterval(timer);
            btn.innerHTML = "点击重试";
            time = 5;
            btn.disabled = false;
        }
    }
}
