/*
* @Author: Marte
* @Date:   2018-04-02 13:17:17
* @Last Modified by:   Marte
* @Last Modified time: 2018-04-06 13:49:00
*/

'use strict';
/*;window.onload = function(){
    var user = document.querySelector("#user"),
        content = document.querySelector("#content"),
        btn = document.querySelector("#btn"),
        ulBox = document.querySelector("#ulBox"),
        btn1 = document.querySelector("#btn1"),
        count = document.querySelector("#count"),
        pl = document.querySelector("#pl");
        btn.onclick = function(){
            if(user.value == "" || content.value == ""){
                alert("您还没有输入内容！");
            }
            else{
            pl.innerHTML = +pl.innerHTML + 1;
            var oli = document.createElement("li"),
                oimg = document.createElement("img"),
                oh3 = document.createElement("h3"),
                oh5 = document.createElement("h5"),
                op = document.createElement("p");

            oimg.src = "images/userBj.png";
            oh3.innerHTML = user.value;
            oh5.innerHTML = new Date().toLocaleString();
            op.innerHTML = content.value;

            oli.appendChild(oimg);
            oli.appendChild(oh3);
            oli.appendChild(oh5);
            oli.appendChild(op);
            ulBox.insertBefore(oli,ulBox.firstElementChild);
            user.value = "";
            content.value = "";
}
        }
        btn1.onclick = function(){
            if(this.innerHTML=="隐藏留言"){
                ulBox.style.display = "none";
                this.innerHTML = "显示留言";
            }
            else{
                ulBox.style.display = "block";
                this.innerHTML = "隐藏留言";
            }
        }
        var wordCount = 100;
        content.onkeyup = function(){
            //alert(this.value.length);
            count.innerHTML = wordCount - this.value.length;
        }
}*/
;window.onload = function(){
    var user = document.querySelector("#user"),
        content = document.querySelector("#content"),
        btn = document.querySelector("#btn"),
        btn1 = document.querySelector("#btn1"),
        ulBox = document.querySelector("#ulBox"),
        pl = document.querySelector("#pl"),
        shu = document.querySelector("#pId");
        btn.onclick = function(){
            pl.innerHTML = +pl.innerHTML + 1;
            var oli = document.createElement("li"),
                oimg =document.createElement("img"),
                oh3 =document.createElement("h3"),
                oh5 = document.createElement("h5"),
                op = document.createElement("p");
                oimg.src = "images/userBj.png";
                oh3.innerHTML = user.value;
                oh5.innerHTML = new Date().toLocaleString();
                op.innerHTML = content.value;
                oli.appendChild(oimg);
                oli.appendChild(oh3);
                oli.appendChild(oh5);
                oli.appendChild(op);
                ulBox.insertBefore(oli,ulBox.firstElementChild);
                user.value = "";
                content.value = "";

        }
        btn1.onclick = function(){
            if(btn1.innerHTML == "显示留言"){
                ulBox.style.display = "block";
                btn1.innerHTML = "隐藏留言";
            }
            else{
                ulBox.style.display = "none";
                btn1.innerHTML = "显示留言";
            }
        }
}
