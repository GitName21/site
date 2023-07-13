$(document).ready(function(){
	
	// 首页
	$(".navbar-more").click(function(){
		
		// $(".navbar-more").toggleClass("navbar-open");
		
		if($(".navbar-more").is(".navbar-open")){
			$(".navbar-more").addClass("navbar-close");
			$(".navbar-more").removeClass("navbar-open");
			$('.navbar-more div').show(200);
			
			$('.global-Mask').fadeOut(300)
			$('.navbar-mobile').fadeOut(0)
			$('.navbar-mobile').css({'transform':'translateX(100%)'})
			$('.content-box').css({'transform':'translateX(0)','transition':'all 0.3s ease'})
			$('.navbar-left').css({'transform':'translateX(0)','transition':'all 0.3s ease'})

			$(document).unbind("scroll.unable"); 
		}else{
			$(".navbar-more").addClass("navbar-open");
			$(".navbar-more").removeClass("navbar-close");
			$('.navbar-more div').hide();
			
			$(document).scrollTop(0);
			$('.global-Mask').fadeIn(300)
			$('.navbar-mobile').fadeIn(0)
			$('.mask').css({'display':'flex'})
			$('.navbar-mobile').css({'transform':'translateX(0)'})
			$('.content-box').css({'transform':'translateX(-85%)','transition':'all 0.3s ease'})
			$('.navbar-left').css({'transform':'translateX(-150%)','transition':'all 0.3s ease'})
			
			var top = $(document).scrollTop();
			// 禁止窗口滚动
			$(document).on('scroll.unable',function (e) {
				$(document).scrollTop(top);
			})
		}
		
	});
	
	// 窗口大小发生改变时触发
	$(window).resize(function(){
		var win_Width = $(document).width();
		if(win_Width >= "768"){
			$(document).unbind("scroll.unable"); 
			$(".navbar-more").removeClass("navbar-open");
			// 取消遮罩
			$(".mask").hide(200);			
		}
	});
	
	// 展开移动端二级菜单-设置
	$(".navbar-mobile-set-btn").click(function(){
		$(".navbar-mobile-set").toggle(500);
	});
	
	// 获取get图片链接
	$(function () {
		(function ($) {
			$.getUrlParam = function (name) {
				var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
				var r = window.location.search.substr(1).match(reg);
				if (r != null) return unescape(r[2]); return null;
			}
		})(jQuery);
		var imgsrc = $.getUrlParam('src');
		$(".details-main img").attr ("src",imgsrc);
	});	
  
	// 移动端固定按钮
	$(window).scroll(function () {
		var top = $(window).scrollTop();//获取body滚动距离
		var topheight = $('.navbar-box').outerHeight();//获取body滚动距离
		if(top >= topheight){                 //如果达到某个值
			//将元素的position属性置为absolute
			$(".mode-button").show(300);
		}else {
			$(".mode-button").hide(300);
		}
	});
	
	// 留言判断
	$('.comment-text').click(function(){
		if($('.comment-text').val() == '请输入你要留下的内容:'){
			$('.comment-text').val('')
			return false;
		}
		if($('.comment-text').val() == '内容不能为空！'){
			$('.comment-text').val('');
			return false;
		}
	})
	
	// 实时检测输入情况
	$(".comment-name").bind("input propertychange",function(event){
		console.log($(this).val()); //调试
		
		if ($.trim($(this).val()) != ''){
			$(".comment-sub").css({"background-color":"#0077FF","transition":"all 0.5s","color":"#fff"});
			$(".hint-con span:first").html('昵称格式无误');
			$(".hint-con:first").css({"animation":"none","color":"green","display":"flex"});
			$(".hint-con:first img").attr('src','img/icon/yes.png');
		}else{
			$(".hint-con:first").css({"display":"flex"});
			$(".comment-sub").css({"background-color":"#e6e6e6","transition":"all 0.5s","color":"#a6a6a6"});
			$(".hint-con span:first").html('昵称不能为空');
			$(".hint-con:first").css({"animation":"hint-con 0.5s infinite","color":"red"});			
			$(".hint-con:first img").attr('src','img/icon/no.png');
			return false;
		}				
	})	
	$('.comment-name').blur(function(){
		if ($.trim($('.comment-name').val()) != ''){
			$(".comment-sub").css({"background-color":"#0077FF","transition":"all 0.5s","color":"#fff"});
			$(".hint-con span:first").html('昵称格式无误');
			$(".hint-con:first").css({"animation":"none","color":"green","display":"flex"});
			$(".hint-con:first img").attr('src','img/icon/yes.png');
		}else{
			$(".hint-con:first").css({"display":"flex"});
			$(".comment-sub").css({"background-color":"#e6e6e6","transition":"all 0.5s","color":"#a6a6a6"});
			$(".hint-con span:first").html('昵称不能为空');
			$(".hint-con:first").css({"animation":"hint-con 0.5s infinite","color":"red"});			
			$(".hint-con:first img").attr('src','img/icon/no.png');
			return false;
		}
	})
	// 实时检测输入情况
	$(".comment-text").bind("input propertychange",function(event){
		console.log($(this).val()); //调试

		if ($.trim($(this).val()) != '' && $(this).val() != '请输入你要留下的内容:'){
			$(".comment-sub").css({"background-color":"#0077FF","transition":"all 0.5s","color":"#fff"});
			$(".hint-con span:last").html('内容格式无误');
			$(".hint-con:last").css({"animation":"none","color":"green","display":"flex"});
			$(".hint-con:last img").attr('src','img/icon/yes.png');
		}else{
			$('.comment-text').val('请输入你要留下的内容:');
			$(".hint-con:last").css({"display":"flex"});
			$(".comment-sub").css({"background-color":"#e6e6e6","transition":"all 0.5s","color":"#a6a6a6"});
			$(".hint-con span:last").html('内容不能为空');
			$(".hint-con:last").css({"animation":"hint-con 0.5s infinite","color":"red"});			
			$(".hint-con:last img").attr('src','img/icon/no.png');
			return false;
		}					
	})		
	$('.comment-text').blur(function(){
		if ($.trim($('.comment-text').val()) != '' && $('.comment-text').val() != '请输入你要留下的内容:'){
			$(".comment-sub").css({"background-color":"#0077FF","transition":"all 0.5s","color":"#fff"});
			$(".hint-con span:last").html('内容格式无误');
			$(".hint-con:last").css({"animation":"none","color":"green","display":"flex"});
			$(".hint-con:last img").attr('src','img/icon/yes.png');
		}else{
			$('.comment-text').val('请输入你要留下的内容:');
			$(".hint-con:last").css({"display":"flex"});
			$(".comment-sub").css({"background-color":"#e6e6e6","transition":"all 0.5s","color":"#a6a6a6"});
			$(".hint-con span:last").html('内容不能为空');
			$(".hint-con:last").css({"animation":"hint-con 0.5s infinite","color":"red"});			
			$(".hint-con:last img").attr('src','img/icon/no.png');
			return false;
		}
	})
	// 提交
	$('.comment-sub').click(function(){
		if ($.trim($('.comment-text').val()) != '' && $('.comment-text').val() != '请输入你要留下的内容:' && $.trim($('.comment-name').val()) != ''){
			$(".comment-form-1").submit();
		}else{
			if($.trim($('.comment-name').val()) == ''){
				$(".hint-con:first").css({"display":"flex"});
				$(".comment-sub").css({"background-color":"#e6e6e6","transition":"all 0.5s","color":"#a6a6a6"});
				return false;
			}
			if($.trim($('.comment-text').val()) == '' && $('.comment-text').val() == '请输入你要留下的内容:'){
				$('.comment-text').val('请输入你要留下的内容:');
				$(".hint-con:last").css({"display":"flex"});
				$(".comment-sub").css({"background-color":"#e6e6e6","transition":"all 0.5s","color":"#a6a6a6"});
				
				return false;				
			}
		}	
	})
	
	// 笔记详情页右边滚动到顶部后固定
	// var boxLeft = $('.note-details-ul-right').offset().left;
	// var boxLeft = boxLeft + 'px';
	// var boxTop = $('.note-details-ul-right').offset().top;
	// var boxWidth = $('.note-details-ul-right').outerWidth();
	// var boxWidth = boxWidth + 'px';
	// var footer = $('.footer-box').offset().top;
	
	// console.log(boxWidth)
	// $(window).scroll(function(){
	// 	console.log($(window).scrollTop())
	// 	if($(window).scrollTop() >= boxTop){
	// 		console.log(boxLeft)
	// 		$('.note-details-ul-right').css({"position":"fixed","left":boxLeft,"width":boxWidth})
	// 		$('.note-details-ul-right').animate({top:'1rem'})
	// 	}
	// 	if($(window).scrollTop() < boxTop){
	// 		console.log(footer)
	// 		$('.note-details-ul-right').css({"position":"relative","left":0,'top':0})
	// 	}
	// })
	
	// for循环制作数字递增
	// function num(){
	// 	var arr = [];
	// 	$('.notes-statistics p:last-child').each(function(){
	// 		var num = $(this).text();
	// 		arr.push(num);
	// 	});
		
	// 	var lengthP = $(".notes-statistics p:last-child").length;
		
	// 	for(var i=0;i<lengthP;i++){
				
	// 		for(var a=0;a<arr[i];a++){
	// 			console.log(a)
	// 		}
	// 		console.log(arr[i])
	// 	}
		
	// 	console.log(arr[0])
	// }
	// mytime = setInterval(num,2000);
	
	// animate制作数字递增
	var one = $('.notes-statistics li:first-child p:last-child').text();
	// var one =Number(one)+1;
	var two = $('.notes-statistics li:nth-child(2) p:last-child').text();
	// var two =Number(two)+1;
	var three = $('.notes-statistics li:last-child p:last-child').text();
	// var three =Number(three)+1;
	
	$({
		countNum:0
		}).animate({
			countNum:one
		},{
			duration:3000,
			easing:"linear",
			step:function(){
				$('.notes-statistics li:first-child p:last-child').text(Math.floor(this.countNum));
			},complete:function(){
				$('.notes-statistics li:first-child p:last-child').text(this.countNum)
			}
		});
	$({
		countNum:0
		}).animate({
			countNum:two
		},{
			duration:3000,
			easing:"linear",
			step:function(){
				$('.notes-statistics li:nth-child(2) p:last-child').text(Math.floor(this.countNum));
			},complete:function(){
				$('.notes-statistics li:nth-child(2) p:last-child').text(this.countNum)
			}
		});
	$({
		countNum:0
		}).animate({
			countNum:three
		},{
			duration:3000,
			easing:"linear",
			step:function(){
				$('.notes-statistics li:last-child p:last-child').text(Math.floor(this.countNum));
			},complete:function(){
				$('.notes-statistics li:last-child p:last-child').text(this.countNum)
			}
		});
	
	// 设计作品页移动端点击全屏
	// function details(){
	// 	var detailsWindow = "<ul id='ee'><li>图</li><li>关</li></ul>";
	// 	$('#ee').css({"background-color":"yellow"})
	// 	$(document.body).append(detailsWindow);
	// 	console.log(detailsWindow)
	// }
	// details();
	
	// 回滚顶部
	$('.footer-but li:first-child').click(function(){
		$("html,body").finish().animate({"scrollTop":"0px"},900);
	});
	
	// 定义分享弹窗
	function alertShare(shareTYPE){
		$('.global-Mask').fadeIn(200,function(){
			// 禁止屏幕滚动
			var top = $(document).scrollTop();
			$(document).on('scroll.unable',function (e) {
				$(document).scrollTop(top);
			})
		});
	}
	// 定义关闭分享弹窗
	function closeShare(){
		$('.global-Mask').fadeOut(200,function(){
			// 屏幕滚动
			$(document).unbind("scroll.unable"); 
		});		
	}
	$('.footer-but>li:last-child').click(function(){
		alertShare();
		$('.alert-box').fadeIn(500);
		$('.share-href').html(window.location.href);
		$('.share-tit').html($(document).attr('title'));
	})
	// 粘贴
	$('.alert-share-go').click(function(){
		// 开始复制内容
		var str = '快来看你的好友给你分享了：' + window.location.href + '  ' + $(document).attr('title') + '          来自————来自21号博客';
		var $temp = $('<input>');
		$('body').append($temp);
		$temp.val(str).select();
		document.execCommand('copy');
		$temp.remove();
		
		// 提示复制成功
		$('.alert-share-go span').animate({opacity:"1",bottom:"3rem",fontSize:'1.5rem'},500);
		
		// 关闭弹窗
		closeShare();
		$('.alert-box').fadeOut(800,function(){
			// 隐藏提示复制成功
			$('.alert-share-go span').animate({opacity:"0",bottom:"1rem",fontSize:'1rem'},500);
		});
		
	})
	// 取消分享
	$('.alert-share-cancel').click(function(){
		closeShare();
		$('.alert-box').fadeOut(500);
	})
	$('.global-Mask').click(function(){
		closeShare();
		$('.alert-box').fadeOut(500);
	})
	
	
	// 弹窗实时居中
	function center(){
		var shareWidth = $(".alert-box").innerWidth();
		var shareHeight = $(".alert-box").innerHeight();
		var x = ($(window).width()-shareWidth)/2;//使用$(window).width()获得显示器的宽，并算出对应的Div离左边的距离
		var y = ($(window).height()-shareHeight)/2;//使用$(window).height()获得显示器的高，并算出相应的Div离上边的距离
		$(".alert-box").css("top",y).css("left",x);
	}
	// 弹窗居中
	center();
	$(window).resize(function(){
		center();
	})
	
	
	// 图片全屏观看
	$('.details-main div:first-child img').click(function(){
		
		$('.img-full-screen').css({"top":$(document).scrollTop()})
		$('.img-full-screen').fadeIn(500)
		$('.img-full-screen').css({"display":"flex"})
		
		// 获取图片路径
		var ImgSrc = $(this).attr('src');
		$('.img-full-screen>div img').attr('src', ImgSrc);
		
		var img = $(this);
		var realWidth;//真实的宽度
		var realHeight;//真实的高度
			
		$("<img/>").attr("src", $(img).attr("src")).load(function() {
			/*
			  如果要获取图片的真实的宽度和高度有三点必须注意
			  1、需要创建一个image对象：如这里的$("<img/>")
			  2、指定图片的src路径
			  3、一定要在图片加载完成后执行如.load()函数里执行
			 */
			realWidth = this.width;
			realHeight = this.height;
		   
		   if($(window).width() < 767){
			   $('body').css({"overflow":"hidden"})
		   }
		   // 判断如果图片为长图,并且比屏幕长,则执行
		   if(realHeight > realWidth && realHeight > $(window).height()){var imgMax = $('.img-full-screen').outerHeight();
				// 获取父元素下所有元素加起来的高度
			   // var imgMax = $('.img-full-screen img').outerHeight();
			   // var divTitleMax = $('.img-full-screen div div:first-child').outerHeight();
			   // var imgContentMax = $('.img-full-screen div div:last-child').outerHeight() + 150;
			   // 获取屏幕卷去的高度,然后赋给父元素进行定位
			   $('.img-full-screen').css({"align-items":"flex-start","top":$(document).scrollTop()})
			   $('.img-full-screen div div:first-child').css({"margin":"1rem 0 0 0"})
			   $('.img-full-screen div div:last-child').css({"padding":"1rem 0 2rem 0"})
			   $('body').css({"overflow":"hidden"})
			   $('.img-full-screen').css({"overflow":"scroll"})
			   // 点击时,滚轴位置恢复到顶部
			   $('.img-full-screen').scrollTop(0)
			   
		   }else{
			   $('body').css({"overflow":"hidden"})
		   }
		});
	});
	// 关闭
	$('.img-full-screen-close span').click(function(){
		$('.img-full-screen').fadeOut(0)
		$('body').css({"overflow":"scroll"})
	})
	
	// 页面加载完菜单标识条定位
	// 获取菜单宽度
	var distance = $('.navbar-ul-left div:not(.search-box)').outerWidth();
	// var str = ['index', 'graphic', 'details', 'Notes', 'note-details', 'message'];
	// 截取当前浏览器链接字符串
	var href = window.location.href;
	if(href.indexOf("index") >= 0 ) { 
	    Number_eq = 0;
	}
	if(href.indexOf("graphic") >= 0 || href.indexOf("details") >= 0) { 
	    Number_eq = 1;
	}
	if(href.indexOf("Notes") >= 0 ||  href.indexOf("note-details") >= 0) { 
	    Number_eq = 2;
	}
	if(href.indexOf("message") >= 0) { 
	    Number_eq = 4;
	}
	$('.navbar-ul-left-hint').css({"left":distance*Number_eq+'px'})
	// 窗口缩放实时获取菜单宽度
	$(window).resize(function(){
		var distance = $('.navbar-ul-left div:not(.search-box)').outerWidth();
		$('.navbar-ul-left-hint').css({"left":distance*Number_eq+'px'})
	})
	
	// 导航栏鼠标靠近
	$('.navbar-ul-left div:not(.search-box) a').hover(function(){
		
		// 获取当前鼠标靠近的元素的下标
		var eq = $(".navbar-ul-left div:not(.search-box) a").index(this)
		
		$('.navbar-ul-left-hint').css({"left":distance*eq+'px'})
	})
	// 导航栏鼠标离开
	$('.navbar-ul-left div:not(.search-box) a').mouseout(function(){
		
		$('.navbar-ul-left-hint').css({"left":distance*Number_eq+'px'})
	})
	
	// 移动端打开留言面板
	$('.message-record-open').click(function(){
		$('.message-record').slideDown(300)
	})
	// 移动端关闭留言面板
	$('.message-record-close').click(function(){
		$('.message-record').slideUp(300)
	})
	
	var feedbackBoxWidth= $('.feedback-box').outerWidth();
	var feedbackBoxHeight= $('.feedback-box').outerHeight();
	var centerY = ($(window).height()-feedbackBoxHeight)/2;
	var centerX = ($(window).width()-feedbackBoxWidth)/2;
	$('.feedback-box').css({"top":centerY,"left":centerX})
	// 反馈
	$('.footer-but li:nth-child(2)').click(function(){
		// 打开遮罩
		alertShare();
		$('.feedback-box').fadeIn(500)
		
	})
	$('.global-Mask').click(function(){
		$('.feedback-box').fadeOut(500)
	})
	
	
});




// 开启夜间模式

var modenight = document.getElementById("modenight");
var modeoo = document.getElementById("modeoo");
// 新版本两个按钮
var daytime2 = document.getElementById("mode-button-2")
var night1 = document.getElementById("mode-button-1")
// var fixedbtn = document.getElementsByClassName("fixed-btn")

function night(){
	
	// 利用cookie缓存一个数值在电脑
	// document.cookie="mode=night; path=/";
	// var mode = document.cookie.slice(5);
	
	localStorage.setItem("mode", "night");
	var mode = localStorage.getItem("mode");
	
	
	if(mode == 'night'){
		document.getElementsByTagName("body")[0].setAttribute("style","transition:var(--transitionTime05)");		
		document.getElementsByClassName("navbar-box")[0].setAttribute("style","transition:var(--transitionTime05)");
		document.documentElement.style.setProperty('--bg-color', "#121212");
		document.documentElement.style.setProperty('--dark-gray', "#ffffff");
		document.documentElement.style.setProperty('--bg-fff', "#1d1d1d");
		document.documentElement.style.setProperty('--color000', "#ffffff");
		document.documentElement.style.setProperty('--shadow-shallow', "#2f2f2f");
		
		// alert('已开启深色模式');
		
		modenight.style.setProperty('display', "none");
		modeoo.style.setProperty('display', "flex");
		// 新版本两个按钮
		daytime2.style.setProperty('display', "none");
		night1.style.setProperty('display', "flex");
		
		// var str="<span onclick='daytime()'>日间模式</span>";
		// var x = document.getElementById("modespan");
		// x.innerHTML=str;
				
	}


}

// 保持夜间模式
var mode = localStorage.getItem("mode");
if(mode == 'night'){
	
	document.getElementsByTagName("body")[0].setAttribute("style","transition:0s");
	document.getElementsByClassName("navbar-box")[0].setAttribute("style","transition:0s");
	document.documentElement.style.setProperty('--bg-color', "#121212");
	document.documentElement.style.setProperty('--dark-gray', "#ffffff");
	document.documentElement.style.setProperty('--bg-fff', "#1d1d1d");
	document.documentElement.style.setProperty('--color000', "#ffffff");
	document.documentElement.style.setProperty('--shadow-shallow', "#2f2f2f");
	
	modenight.style.setProperty('display', "none");
	modeoo.style.setProperty('display', "flex");
	// 新版本两个按钮
	daytime2.style.setProperty('display', "none");
	night1.style.setProperty('display', "flex");
	
	// var str="<span onclick='daytime()'>日间模式</span>";
	// var x = document.getElementById("modespan");
	// x.innerHTML=str;
	
}

// 关闭夜间模式
function daytime(){
	
	// 利用cookie缓存一个数值在电脑
	// document.cookie="mode=daytime; path=/";
	// var mode = document.cookie.slice(5);
	
	localStorage.removeItem("mode");
	// var ttt = localStorage.getItem("mode");
	document.getElementsByTagName("body")[0].setAttribute("style","transition:var(--transitionTime05)");
	document.getElementsByClassName("navbar-box")[0].setAttribute("style","transition:var(--transitionTime05)");
	document.documentElement.style.setProperty('--bg-color', "#ECF1F7");
	document.documentElement.style.setProperty('--dark-gray', "#383838");
	document.documentElement.style.setProperty('--bg-fff', "#ffffff");
	document.documentElement.style.setProperty('--color000', "#000000");
	document.documentElement.style.setProperty('--shadow-shallow', "#e5e5e5");
	
	// alert('已关闭深色模式');
	
	modenight.style.setProperty('display', "flex");
	modeoo.style.setProperty('display', "none");
	// 新版本两个按钮
	night1.style.setProperty('display', "none");
	daytime2.style.setProperty('display', "flex");
	
	// if(mode == null){
	// 	var str="<span onclick='night()'>夜间模式</span>";
	// 	var x = document.getElementById("modespan");
	// 	x.innerHTML=str;
	// 	alert('暂未开放')
	// }
}
// 在其他标签页开启深色或浅色模式时，自动同步其它窗口
document.addEventListener("visibilitychange", function () {
	if (!document.hidden) {  
		// 处于当前页面
		// 同步开启
		var mode = localStorage.getItem("mode");
		if(mode == 'night'){
			
			document.getElementsByTagName("body")[0].setAttribute("style","transition:0s");
			document.getElementsByClassName("navbar-box")[0].setAttribute("style","transition:0s");
			document.documentElement.style.setProperty('--bg-color', "#121212");
			document.documentElement.style.setProperty('--dark-gray', "#ffffff");
			document.documentElement.style.setProperty('--bg-fff', "#1d1d1d");
			document.documentElement.style.setProperty('--color000', "#ffffff");
			
			modenight.style.setProperty('display', "none");
			modeoo.style.setProperty('display', "flex");
			// 新版本两个按钮
			night1.style.setProperty('display', "flex");
			daytime2.style.setProperty('display', "none");
			
		};
		if(mode != 'night'){
			document.getElementsByTagName("body")[0].setAttribute("style","transition:0s");
			document.getElementsByClassName("navbar-box")[0].setAttribute("style","transition:0s");
			document.documentElement.style.setProperty('--bg-color', "#ECF1F7");
			document.documentElement.style.setProperty('--dark-gray', "#383838");
			document.documentElement.style.setProperty('--bg-fff', "#ffffff");
			document.documentElement.style.setProperty('--color000', "#000000");
			
			modenight.style.setProperty('display', "flex");
			modeoo.style.setProperty('display', "none");
			// 新版本两个按钮
			night1.style.setProperty('display', "none");
			daytime2.style.setProperty('display', "flex");
		}
	}
});
