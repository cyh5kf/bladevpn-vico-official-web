
var ua = navigator.userAgent;
if (ua.match(/iPhone/i) || ua.match(/iPad/i) || ua.match(/iPod/i)) {
	$(".platform-android").addClass("hide");
	$(".platform-apk").addClass("hide");
} else if(ua.match(/Android/i)) {
	$(".platform-iphone").addClass("hide");
}

$(function() {
	//监听鼠标滚动，恢复section-title的颜色
	 $(window).scroll(function(event){
		if (document.body.scrollTop < 56 && document.documentElement.scrollTop < 56) {
			$(".section-title").css('color', '#CACACA');
		}
	});

	var popHeight = document.body.clientHeight*0.84;
	$(".popUp .content").css("height", popHeight + "px");

	//兼容IE8操作hover
	$(".ic-close").hover(function() {
		$(".close-btn").hide();
		$(".close-btn-hover").show();
	}, function() {
		$(".close-btn").show();
		$(".close-btn-hover").hide();
	})

	$(".about-us .download-btn-blue").hover(function() {
		$(".ic-download").hide();
		$(".ic-download-hover").show();
	}, function() {
		$(".ic-download").show();
		$(".ic-download-hover").hide();
	})

	 //点击下载
	$("#android-googlePlay").click(function() {
		if(ua.match(/Android/i)) {
			window.location = android_google_url;
		} else {
			window.open(android_google_url);
		}

	});

	$("#android-apk").click(function() {
		window.location = android_apk_url;
	});



	$("#iPhone-download").click(function() {
		if (ua.match(/iPhone/i) || ua.match(/iPod/i) || ua.match(/iPad/i)) { // || ua.match(/iPad/i)
			window.location = ios_appstore_url;
		} else {
			window.open(ios_appstore_url);
		}
	});

	$("#mac-download").click(function() {
		if (ua.match(/iPhone/i) || ua.match(/iPod/i) || ua.match(/iPad/i)) { // || ua.match(/iPad/i)
			window.location = ios_mac_url;
		} else {
			window.open(ios_mac_url);
		}

	});

	
	//点击头部导航按钮跳转到对应页面
    $(".nav-list li a").click(function() {
    	var navId = $(this).attr("id");
    	var jumpObj = $("."+ navId);
    	jumpAnimate(jumpObj);
    });

	//移动端点击导航按钮跳转至对应页面
	$(".mobile-nav-list li a").click(function() {
		$(".mobile-mask").fadeOut("fast");
		$(".mobile-nav-list").hide();
		$(".HeaderMenu").show();
		$('html, body').removeClass('noscroll');

		var navId = $(this).attr("class");
		var jumpObj = $("."+ navId + "-target");
		jumpAnimate(jumpObj);
	});

	//点击"get BladeVPN"按钮跳转至下载区域
    $(".jump-download").click(function() {
    	var downloadArea = $(".download-area");
    	jumpAnimate(downloadArea);
    });

    function jumpAnimate(obj) {
    	$("html, body").animate({
            scrollTop: obj.offset().top
        }, 800, "swing", function() {
        	obj.find('.section-title').css('color', '#01B5D8');
        });
    }


    //点击terms policy打开弹窗页面
    $(".click-terms").click(function() {
    	$(".terms-pop").fadeIn("fast");
		$('html').addClass('noscroll');
    });

    $(".click-policy").click(function() {
    	$(".policy-pop").fadeIn("fast");
		$('html').addClass('noscroll');
    });

    $(".ic-close").click(function() {
    	$(".popUp").fadeOut("fast");
		$('html').removeClass('noscroll');
    });


	//移动端js操作
	$(".HeaderMenu").click(function () {
		$(".mobile-mask").fadeIn("fast");
		$(".mobile-nav-list").fadeIn("fast");
		$(".HeaderMenu").hide();
		$('html, body').addClass('noscroll');
	})

	$(".HeaderMenuClose").click(function () {
		$(".mobile-mask").fadeOut("fast");
		$(".mobile-nav-list").hide();
		$(".HeaderMenu").show();
		$('html, body').removeClass('noscroll');
	})

	$(".mobile-mask").click(function() {
		$(".mobile-mask").fadeOut("fast");
		$(".mobile-nav-list").hide();
		$(".HeaderMenu").show();
		$('html, body').removeClass('noscroll');
	});

})