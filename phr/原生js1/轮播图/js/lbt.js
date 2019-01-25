/*
* @Author: Marte
* @Date:   2018-03-24 11:09:32
* @Last Modified by:   Marte
* @Last Modified time: 2018-04-06 19:54:17
*/

'use strict';
/*;window.onload = function(){

    function $( idname )
    {
        return document.getElementById( idname );
    }
    var wrap = $("wrap"),
        left = $("left"),
        right = $("right"),
        imgs = $("imgBox").getElementsByTagName("img"),
        tabs = $("tabBox").getElementsByTagName("li");
     var count = 0;

     left.onclick = function(){
        changecount(true);
     }

     right.onclick = function(){
        changecount();
     }

     var timer = setInterval( changecount ,1000);
     wrap.onmouseover = function(){
        clearInterval(timer);
     }
     wrap.onmouseout = function(){
        timer = setInterval( changecount ,1000);
     }
     for(var i=0;i<tabs.length;i++){
        tabs[i].index = i;
        tabs[i].onmouseover = function(){
            count = this.index;
            paita();
        }
     }

     function changecount(flag){
        if(flag)
        {
        count--;
        if(count < 0)
        {
            count = imgs.length - 1;
        }

        }
        else{
        count++;
        if(count >= imgs.length)
        {
            count = 0;
        }
        }
        paita();
     }

     function paita(){
        for(var i=0;i<imgs.length;i++)
        {
            imgs[i].style.display = "none";
            tabs[i].className = "";
        }
        imgs[ count ].style.display = "block";
        tabs[count].className = "active";
     }
}*/
/*;window.onload = function(){
    function $(idname){
        return document.getElementById(idname);
    }
    var wrap = $("wrap"),
        right = $("right"),
        left = $("left"),
        imgs = $("imgBox").getElementsByTagName("img"),
        tabs = $("tabBox").getElementsByTagName("li");
    var count = 0;
    left.onclick = function(){
        changecount(true);
    }
    right.onclick = function(){
        changecount();
    }
    var timer = setInterval(changecount,1000);
    wrap.onmouseover = function(){
        clearInterval(timer);
    }
    wrap.onmouseout = function(){
        timer = setInterval(changecount,1000);
    }
    for(var i=0;i<tabs.length;i++)
    {
        tabs[i].index=i;
        tabs[i].onmouseover = function(){
            count = this.index;
            paita();
        }
    }
    function changecount(flag){
        if(flag)
        {
        count--;
        if(count < 0){
            count = imgs.length-1;
        }
        paita();
        }
        else
        {
        count++;
        if(count >= imgs.length){
            count = 0;
        }
        paita();
        }
    }
    function paita(){
        for(var i=0;i<imgs.length;i++)
        {
            imgs[i].style.display = "none";
            tabs[i].className = "";
        }
        imgs[count].style.display = "block";
        tabs[count].className = "active";
    }
}*/

/*;window.onload = function(){
    function $(idname){
        return document.getElementById(idname);
    }
    var wrap = $("wrap"),
        left = $("left"),
        right = $("right"),
        imgs = $("imgBox").getElementsByTagName("img"),
        tabs = $("tabBox").getElementsByTagName("li");
    var count = 0;
    left.onclick = function()
    {
        changecount(true);
    }
    right.onclick = function()
    {
        changecount();
    }
    var timer = setInterval(changecount,1000);
    wrap.onmouseover = function()
    {
        clearInterval(timer);
    }
    wrap.onmouseout = function()
    {
        timer = setInterval(changecount,1000);
    }
    for(var i=0;i<tabs.length;i++){
        tabs[i].index = i;
        tabs[i].onmouseover = function(){
            count = this.index;
            paita();
        }
    }
    function changecount(aa)
    {
        if(aa)
        {
        count--;
        if(count < 0)
        {
            count = imgs.length - 1;
        }
        paita();
        }
        else
        {
        count++;
        if(count >= imgs.length)
        {
            count = 0;
        }
        paita();
        }
    }
    function paita(){
        for(var i=0;i<imgs.length;i++)
        {
            imgs[i].style.display = "none";
            tabs[i].className = "";
        }
        imgs[count].style.display = "block";
        tabs[count].className = "active";
    }
}*/
;window.onload = function(){
    function $(idname){
        return document.getElementById(idname);
}
var wrap = $("wrap"),
    left = $("left"),
    right = $("right"),
    imgBox = $("imgBox"),
    imgs = $("imgBox").getElementsByTagName("img"),
    tabBox = $("tabBox"),
    tabs = $("tabBox").getElementsByTagName("li"),
    count = 0;
    left.onclick = function(){
        countimg(true);
    }
    right.onclick = function(){
        countimg();
    }
    var timer = setInterval(countimg,1000);
    wrap.onmouseover = function(){
        clearInterval(timer);
    }
    wrap.onmouseout = function(){
        timer = setInterval(countimg,1000);
    }
    for(var i=0;i<tabs.length;i++){
        tabs[i].index=i;
        tabs[i].onmouseover = function(){
            count = this.index;
            paita();
        }

    }
    function countimg(flag){
        if(flag){
        count--;
        if(count<0){
            count = imgs.length - 1;
        }
        paita();
        }
        else{
        count++;
        if(count>=imgs.length){
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
        //imgBox.style.marginLeft = -1000*count + "px";
    }
}