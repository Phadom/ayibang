$(function($){
	var ss=new IScroll("#service-right");
	$.ajax({
		url:"../data/service.json",
		success:function(e){
			var all_service=e.allservice;
			var str1=str4="";
			for(var i =0;i<all_service.length;i++){
				str1+="<li>"+all_service[i].title+"</li>";
				var str2="<div><p>"+all_service[i].title+"<p><div>{{content}}</div></div>";
				var str3="";
				for(var j=0;j<all_service[i].data.length;j++){
					str3+="<dl><dt><img src='../img/"+all_service[i].data[j].img+"'/></dt><dd><p>"+all_service[i].data[j].text+"</p><p>"+all_service[i].data[j].val+"</p></dd><div class='clear'></div></dl>";
				}
				
				str4+=str2.replace("{{content}}",str3);
			}
			$(".service-right>div").html(str4).children("div:first").show().siblings("div").hide();
			$(".service-left>ul").html(str1).children("li:first").addClass("check").siblings("li").removeClass("check");
			ss.refresh()
		},
		error:function(e){
			console.log("数据错误")
		}
	})
	$(".service-left>ul").on("click","li",function(){
		var index=$(this).index();
		$(this).addClass("check").siblings("li").removeClass("check");
		$(".service-right>div").children("div").eq(index).show().siblings("div").hide()
		ss.refresh()
	})
	$(".back").on("click",function(){
		 history.back(-1);
	})
})