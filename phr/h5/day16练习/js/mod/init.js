$.ajax({
    url:"data.json",
    success:function(data){
        if(data.code == 0){
            data = data.result;
            rander(data);
        }
    }
})
function rander(data){
    var str = '';
    $.each(data,function(i,v){
        str += `<li>
                        <div class="left">
                            <p><span>半</span>${v.name}<span>限</span></p>
                            <p><span>年化收益</span><span>期限</span><span>起投金额</span></p>
                            <p><span style="color:#f03b4c">${v.percent}</span><span>${v.time}</span><span>${v.money}元</span></p>
                        </div>
                        <div class="right">
                            <canvas width="150" height="150" data-name="${v.canvas}"></canvas>
                        </div>
                    </li>`;
    })
    $(str).appendTo(".content ul");
    var draw = document.querySelectorAll("canvas");
    for(var i=0;i<draw.length;i++){
        circle(draw[i]);
    }
    function circle(aa){
        var ud = aa.getContext('2d');


            // ud.beginPath();
            // ud.strokeStyle = "#ccc";
            // ud.arc(75, 75, 70, 0, 360);
            // ud.stroke();
            // ud.closePath();

            var count = 0;
            var deg = Math.PI/180;
            var bill = 360/100*deg;
            var num = aa.getAttribute('data-name');

            function bb(){
                ud.clearRect(0,0,150,150);
                count++;
                if(count<num){
                    requestAnimationFrame(bb);
                    text(count);
                }else{
                    text(num);
                }

                ud.beginPath();
                ud.strokeStyle = "#ccc";
                ud.arc(75, 75, 70, 0, 360);
                ud.stroke();
                ud.closePath();

                ud.beginPath();
                ud.strokeStyle = "red";
                ud.lineWidth = 5;
                ud.arc(75, 75, 70, -90*deg, bill*count-90*deg);
                ud.stroke();
                ud.closePath();

                function text(txt) {
                    ud.beginPath();
                    ud.lineWidth = 7;
                    ud.fillStyle = "red";
                    ud.font = "20px normal";
                    ud.textAlign = "center";
                    ud.textBaseline = "middle";
                    ud.fillText(txt+"%", 75, 70);
                    ud.closePath();
                }

                ud.beginPath();
                ud.lineWidth = 7;
                ud.fillStyle = "#000";
                ud.font = "16px normal";
                ud.textAlign = "center";
                ud.textBaseline = "middle";
                ud.fillText("投资中", 75, 95);
                ud.closePath();
            }
        bb();

    }
}