function  ajax(obj){
 			var type=obj.type || 'get';
 			var async=obj.async || true; //false || true
 			var url=obj.url  || "";
 			var data=obj.data  || null;
 			var success=obj.success || function(){}

 			console.log(data)
 					/*name=zs&sex=男*/
 		var temp=[]
 			for(var key in data){
 					temp.push(key+"="+data[key])
 			}
 	    var str=temp.join('&');
 	    //创建ajax对象
 	    	if(window.XMLHttpRequest){
 	    		var xhr=new  XMLHttpRequest()
 	    	}else{
 	    		var xhr=new ActiveXObject('Microsoft.XMLHTTP');
 	    	}

 	    //连接 发送
 	    if(type=='get'){
 	    	 xhr.open(type,url+"?"+str,async);
 	    	 xhr.send(null);
 	    }else if(type=='post'){
 	    	 xhr.open(type,url,async);
 	    	 xhr.setRequestHeader('Content-Type',"application/x-www-form-urlencoded");
 	    	 xhr.send(str)
 	    }


 	    //返回数据
 	    
 	    xhr.onreadystatechange=function(){
 	    		if(xhr.readyState==4 && xhr.status==200){
 	    				success(xhr.responseText);
 	    		}
 	}
 	    }



