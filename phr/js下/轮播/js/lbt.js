/*
* @Author: Marte
* @Date:   2018-04-18 14:07:47
* @Last Modified by:   Marte
* @Last Modified time: 2018-04-19 13:55:21
*/

'use strict';
/*;window.onload = function(){
    var wrap = document.querySelector(".wrap"),
        imgs = document.querySelectorAll("ul img"),
        left = document.querySelector("#left"),
        right = document.querySelector("#right"),
        tabs = document.querySelectorAll("#tabs li");
        var count = 0;
        left.onclick = function(){
            changeimg(true);
        }
        right.onclick = function(){
            changeimg();
        }
        var timer = setInterval(changeimg,1000);
        wrap.onmouseover = function(){
            clearInterval(timer);
        }
        wrap.onmouseout = function(){
            timer = setInterval(changeimg,1000);
        }
        for(var i=0;i<tabs.length;i++){
            tabs[i].index=i;
            tabs[i].onmouseover = function(){
                count = this.index;
                paita();
            }
        }

        function changeimg(flag){
            if(flag){
                count--;
                if(count<0){
                    count = imgs.length - 1;
                }
                paita();
            }
            else{
               count++;
                if(count>imgs.length-1){
                    count = 0;
                }
                paita();
            }
        }
        function paita(){
            for(var i=0;i<imgs.length;i++){
                imgs[i].style.display = "none";
                tabs[i].className = "";
            }
            imgs[count].style.display = "block";
            tabs[count].className = "active";
        }
}*/