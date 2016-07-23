$(function(){
	var closebtn=$('.closebtn');
	var downloadbox=$('.downloadbox');
	closebtn.click(function(){
		downloadbox.css({display:'none'})
	})
	//返回顶部
	$('#back-to-top').click(function(){
		obj=document.body.scrollTop?document.body:document.documentElement;
		animate(obj,{scrollTop:0})
	})
})


$(function(){
	var $win=$(".scrolltext");
	var $box=$(".scrollbox");
	var $lis=$(".scrollbox a");
	var $liw=$lis.eq(0).height();
	var t=setInterval(moveR,2000);
	function moveR(){
		    $box.animate({marginTop:-$liw},function(){
			var $first=$('.scrollbox a').eq(0);
			$box.append($first);
			$box.css({marginTop:0});
		})
		    $flag=true;
	}
})
