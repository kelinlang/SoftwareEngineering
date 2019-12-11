$(function(){
	if ($('#focus').length>0) {
		var focusSwiper = new Swiper('#focus',{
			pagination: '#focus .nav',
			loop:true,
			autoplay:3000,
			speed:1200,
			paginationClickable: true
		});
		
		$('#focusbtn .a-left').on('click', function(e){
			e.preventDefault();
			focusSwiper.swipePrev();
		});
		$('#focusbtn .a-right').on('click', function(e){
			e.preventDefault();
			focusSwiper.swipeNext();
		});
		
	}
	$("#cate_menu").find('li').hover(function(){
		$(this).addClass("over");
		$(this).find('ul:first').show();

	},function(){
		$(this).removeClass("over");
		$(this).find('ul:first').hide();
	});
	
	$('#safeCatTab').height($('#safeCatTab').find('.tab_item').height());
	var safeCatTab = new Swiper('#safeCatTab',{
		onlyExternal : true,
		wrapperClass:'tab_main',
		slideClass:'tab_item',
		speed:0
	});
	$('#safeCatTit .Check').on('mouseenter',function(){
		$(this).addClass('Checked').siblings().removeClass('Checked');
		$('#safeCatTab').find('.tab_item').height('auto');
		var thisItem=$('#safeCatTab').find('.tab_item').eq($(this).index()-1);
		if(thisItem.height()<200){
			$('#safeCatTab').height(650);
		}else{
			$('#safeCatTab').height(thisItem.height());	
		}
		safeCatTab.reInit();
		safeCatTab.swipeTo($(this).index()-1);
	});
	var safeTab = new Swiper('#safeTab',{
		onlyExternal : true,
		wrapperClass:'tab_main',
		slideClass:'tab_item',
		speed:0
	});
	$('#safeTitle li').on('mouseenter',function(){
		$('#safeTitle li').not('.LTitle').removeClass('RButtoncheck').addClass('RButton');
		$('#safeTitle li.LTitle').find('a').removeClass('LTButtoncheck');
		if($(this).hasClass('LTitle')){
			$(this).find('a').addClass('LTButtoncheck');
		}else{
			$(this).removeClass('RButton').addClass('RButtoncheck');
			$('#safeTitle li.LTitle').find('a').addClass('LTButton');
		}
		safeTab.swipeTo($(this).index());
	});
	var programTab = new Swiper('#programTab',{
		onlyExternal : true,
		wrapperClass:'tab_main',
		slideClass:'tab_item',
		speed:0
	});
	$('#programTit li').on('mouseenter',function(){
		$('#programTit li').not('.LTitle').removeClass('RButtoncheck').addClass('RButton');
		$('#programTit li.LTitle').find('a').removeClass('LTButtoncheck');
		if($(this).hasClass('LTitle')){
			$(this).find('a').addClass('LTButtoncheck');	
		}else{
			$(this).removeClass('RButton').addClass('RButtoncheck');
			$('#programTit li.LTitle').find('a').addClass('LTButton');
		}
		programTab.swipeTo($(this).index());
	});
	
	var newsTab = new Swiper('#newsTab',{
		onlyExternal : true,
		wrapperClass:'tab_main',
		slideClass:'tab_item',
		speed:0
	});
	$('#newsTit li').on('mouseenter',function(){
		$('#newsTit li').not('.LT').removeClass('buttonon').addClass('buttonoff');
		if(!$(this).hasClass('LT')){
			$(this).removeClass('buttonoff').addClass('buttonon');
		}
		newsTab.swipeTo($(this).index());
	});
	var databaseTab = new Swiper('#databaseTab',{
		onlyExternal : true,
		wrapperClass:'tab_main',
		slideClass:'tab_item',
		speed:0
	});
	$('#databaseTit li').on('mouseenter',function(){
		$('#databaseTit li').not('.LT').removeClass('buttonon').addClass('buttonoff');
		if(!$(this).hasClass('LT')){
			$(this).removeClass('buttonoff').addClass('buttonon');
		}
		databaseTab.swipeTo($(this).index());
	});
	var ebookTab = new Swiper('#ebookTab',{
		onlyExternal : true,
		wrapperClass:'tab_main',
		slideClass:'tab_item',
		speed:0
	});
	$('#ebookTit span').on('mouseenter',function(){
		$('#ebookTit span').not('.LT').removeClass('dorbuttoncheck').addClass('dorbutton');
		$(this).removeClass('dorbutton').addClass('dorbuttoncheck');
		ebookTab.swipeTo($(this).index()-1);
	});
	var systemTab = new Swiper('#systemTab',{
		onlyExternal : true,
		wrapperClass:'tab_main',
		slideClass:'tab_item',
		speed:0
	});
	$('#systemTit li').on('mouseenter',function(){
		$('#systemTit li').not('.LTitle').removeClass('RButtoncheck').addClass('RButton');
		$('#systemTit li.LTitle').find('a').removeClass('LTButtoncheck');
		if($(this).hasClass('LTitle')){
			$(this).find('a').addClass('LTButtoncheck');
		}else{
			$(this).removeClass('RButton').addClass('RButtoncheck');
			$('#systemTit li.LTitle').find('a').addClass('LTButton');
		}
		systemTab.swipeTo($(this).index());
	});
	var qqTab = new Swiper('#qqTab',{
		onlyExternal : true,
		wrapperClass:'tab_main',
		slideClass:'tab_item',
		speed:0
	});
	$('#qqTitle li').on('mouseenter',function(){
		$('#qqTitle li').not('.LTitle').removeClass('RButtoncheck').addClass('RButton');
		$('#qqTitle li.LTitle').find('a').removeClass('LTButtoncheck');
		if($(this).hasClass('LTitle')){
			$(this).find('a').addClass('LTButtoncheck');
		}else{
			$(this).removeClass('RButton').addClass('RButtoncheck');
			$('#qqTitle li.LTitle').find('a').addClass('LTButton');
		}
		qqTab.swipeTo($(this).index());
	});
	var netWorkTab = new Swiper('#netWorkTab',{
		onlyExternal : true,
		wrapperClass:'tab_main',
		slideClass:'tab_item',
		speed:0
	});
	$('#netWorkTit li').on('mouseenter',function(){
		$('#netWorkTit li').not('.LT').removeClass('buttonon').addClass('buttonoff');
		if(!$(this).hasClass('LT')){
			$(this).removeClass('buttonoff').addClass('buttonon');
		}
		netWorkTab.swipeTo($(this).index());
	});
	var wxTab = new Swiper('#wxTab',{
		onlyExternal : true,
		wrapperClass:'tab_main',
		slideClass:'tab_item',
		speed:0
	});
	$('#wxTitle li').on('mouseenter',function(){
		$('#wxTitle li').not('.LT').removeClass('buttonon').addClass('buttonoff');
		if(!$(this).hasClass('LT')){
			$(this).removeClass('buttonoff').addClass('buttonon');
		}
		wxTab.swipeTo($(this).index());
	});
	var adminTab = new Swiper('#adminTab',{
		onlyExternal : true,
		wrapperClass:'tab_main',
		slideClass:'tab_item',
		speed:0
	});
	$('#adminTit li').on('mouseenter',function(){
		$('#adminTit li').not('.LT').removeClass('buttonon').addClass('buttonoff');
		if(!$(this).hasClass('LT')){
			$(this).removeClass('buttonoff').addClass('buttonon');
		}
		adminTab.swipeTo($(this).index());
	});
	var codesTab = new Swiper('#codesTab',{
		onlyExternal : true,
		wrapperClass:'tab_main',
		slideClass:'tab_item',
		speed:0
	});
	$('#codesTit span').on('mouseenter',function(){
		$('#codesTit span').not('.LT').removeClass('dorbuttoncheck').addClass('dorbutton');
		$(this).removeClass('dorbutton').addClass('dorbuttoncheck');
		codesTab.swipeTo($(this).index()-1);
	});
	if($('#softPtop4').length>0){
		var softPtop4 = new Swiper('#softPtop4',{
			onlyExternal : true,
			wrapperClass:'tab_main',
			slideClass:'tab_item',
			speed:0
		});
		$('#softPtop4 li').not('.Name').on('mouseenter',function(){
			$('#softPtop4 li').not('.Name').removeClass('Checked').addClass('Check');
			$(this).removeClass('Check').addClass('Checked');
			softPtop4.swipeTo($(this).index()-1);
		});
	}
	if($('#softPtop1').length>0){
		var softPtop1 = new Swiper('#softPtop1',{
			onlyExternal : true,
			wrapperClass:'tab_main',
			slideClass:'tab_item',
			speed:0
		});
		$('#softPtop1 .TabBox li').not('.Name').on('mouseenter',function(){
			$('#softPtop1 .TabBox li').not('.Name').removeClass('Checked').addClass('Check');
			$(this).removeClass('Check').addClass('Checked');
			softPtop1.swipeTo($(this).index()-1);
		});
	}
	if($('#softPtop2').length>0){
		var softPtop2 = new Swiper('#softPtop2',{
			onlyExternal : true,
			wrapperClass:'tab_main',
			slideClass:'tab_item',
			speed:0
		});
		$('#softPtop2 .TabBox li').not('.Name').on('mouseenter',function(){
			$('#softPtop2 .TabBox li').not('.Name').removeClass('Checked').addClass('Check');
			$(this).removeClass('Check').addClass('Checked');
			softPtop2.swipeTo($(this).index()-1);
		});
	}
	if($('#softPtop3').length>0){
		var softPtop3 = new Swiper('#softPtop3',{
			onlyExternal : true,
			wrapperClass:'tab_main',
			slideClass:'tab_item',
			speed:0
		});
		$('#softPtop3 .TabBox li').not('.Name').on('mouseenter',function(){
			$('#softPtop3 .TabBox li').not('.Name').removeClass('Checked').addClass('Check');
			$(this).removeClass('Check').addClass('Checked');
			softPtop3.swipeTo($(this).index()-1);
		});
	}
	if($('#softPtop4').length>0){
		var softPtop4 = new Swiper('#softPtop4',{
			onlyExternal : true,
			wrapperClass:'tab_main',
			slideClass:'tab_item',
			speed:0
		});
		$('#softPtop4 .TabBox li').not('.Name').on('mouseenter',function(){
			$('#softPtop4 .TabBox li').not('.Name').removeClass('Checked').addClass('Check');
			$(this).removeClass('Check').addClass('Checked');
			softPtop4.swipeTo($(this).index()-1);
		});
	}
	if($('#qqNew').length>0){
		var qqNew = new Swiper('#qqNew',{
			onlyExternal : true,
			wrapperClass:'tab_main',
			slideClass:'tab_item',
			speed:0
		});
		$('#qqNew .tabbox li').on('mouseenter',function(){
			$('#qqNew .tabbox li').removeClass('checked').addClass('check');
			$(this).removeClass('check').addClass('checked');
			qqNew.swipeTo($(this).index());
		});
	}
	if($('#QQgxTab').length>0){
		var QQgxTab = new Swiper('#QQgxTab',{
			onlyExternal : true,
			wrapperClass:'tab_main',
			slideClass:'tab_item',
			speed:0
		});
		$('#QQgxTab .tabbox li').on('mouseenter',function(){
			$('#QQgxTab .tabbox li').removeClass('checked').addClass('check');
			$(this).removeClass('check').addClass('checked');
			QQgxTab.swipeTo($(this).index());
		});
	}
	if($('#QQkjTab').length>0){
		var QQkjTab = new Swiper('#QQkjTab',{
			onlyExternal : true,
			wrapperClass:'tab_main',
			slideClass:'tab_item',
			speed:0
		});
		$('#QQkjTab .tabbox li').on('mouseenter',function(){
			$('#QQkjTab .tabbox li').removeClass('checked').addClass('check');
			$(this).removeClass('check').addClass('checked');
			QQkjTab.swipeTo($(this).index());
		});
	}
	if($('#QQqTab').length>0){
		var QQqTab = new Swiper('#QQqTab',{
			onlyExternal : true,
			wrapperClass:'tab_main',
			slideClass:'tab_item',
			speed:0
		});
		$('#QQqTab .tabbox li').on('mouseenter',function(){
			$('#QQqTab .tabbox li').removeClass('checked').addClass('check');
			$(this).removeClass('check').addClass('checked');
			QQqTab.swipeTo($(this).index());
		});
	}
	if($('#booktab1').length>0){
		var booktab1 = new Swiper('#booktab1',{
			onlyExternal : true,
			wrapperClass:'tab_main',
			slideClass:'tab_item',
			speed:0
		});
		$('#booktab1 .tabtit span').on('click',function(){
			$('#booktab1 .tabtit span').removeClass('on');
			$(this).addClass('on');
			booktab1.swipeTo($(this).index());
		});
	}
	if($('#booktab2').length>0){
		var booktab2 = new Swiper('#booktab2',{
			onlyExternal : true,
			wrapperClass:'tab_main',
			slideClass:'tab_item',
			speed:0
		});
		$('#booktab2 .tabtit span').on('click',function(){
			$('#booktab2 .tabtit span').removeClass('on');
			$(this).addClass('on');
			booktab2.swipeTo($(this).index());
		});
	}
	if($('#booktab3').length>0){
		var booktab3 = new Swiper('#booktab3',{
			onlyExternal : true,
			wrapperClass:'tab_main',
			slideClass:'tab_item',
			speed:0
		});
		$('#booktab3 .tabtit span').on('click',function(){
			$('#booktab3 .tabtit span').removeClass('on');
			$(this).addClass('on');
			booktab3.swipeTo($(this).index());
		});
	}
	if($('#booklist').length>0){
		var booklist = new Swiper('#booklist .tab_wrap',{
			onlyExternal : true,
			wrapperClass:'tab_main',
			slideClass:'tab_item',
			speed:0
		});
		$('#booklist .tabtitle span').on('mouseover',function(){
			$('#booklist .tabtitle span').removeClass('on');
			$(this).addClass('on');
			booklist.swipeTo($(this).index());
		});
	}
	if($('#listTab').length>0){
		var h1=$('#listTab .tab_item').eq(0).height();
		var h2=$('#listTab .tab_item').eq(1).height();
		if(h1>h2){
			$('#listTab').height(h1);
		}else{
			$('#listTab').height(h2);
		}
		var listTab = new Swiper('#listTab',{
			onlyExternal : true,
			wrapperClass:'tab_main',
			slideClass:'tab_item',
			speed:0
		});
		$('#ltabTitle dd').on('hover',function(){
			$('#ltabTitle dd').removeClass('on');
			$(this).addClass('on');
			listTab.swipeTo($(this).index());
		});
	}
	if($('#alistTab').length>0){
		var h1=$('#alistTab .tab_item').eq(0).height();
		var h2=$('#alistTab .tab_item').eq(1).height();
		if(h1>h2){
			$('#alistTab').height(h1);
		}else{
			$('#alistTab').height(h2);
		}
		var alistTab = new Swiper('#alistTab',{
			onlyExternal : true,
			wrapperClass:'tab_main',
			slideClass:'tab_item',
			speed:0
		});
		$('#altabTitle dd').on('hover',function(){
			$('#altabTitle dd').removeClass('on');
			$(this).addClass('on');
			alistTab.swipeTo($(this).index());
		});
	}
	if($('#listTab2').length>0){
		var h1=$('#listTab2 .tab_item').eq(0).height();
		var h2=$('#listTab2 .tab_item').eq(1).height();
		var h3=$('#listTab2 .tab_item').eq(2).height();
		if(h1>h2){
			$('#listTab2').height(h1);
		}else{
			$('#listTab2').height(h2);
		}
		if(h3>h1){
			$('#listTab2').height(h3);
		}else{
			$('#listTab2').height(h1);
		}
		var listTab2 = new Swiper('#listTab2',{
			onlyExternal : true,
			wrapperClass:'tab_main',
			slideClass:'tab_item',
			speed:0
		});
		$('#ltabTitle2 dd').on('hover',function(){
			$('#ltabTitle2 dd').removeClass('on');
			$(this).addClass('on');
			listTab2.swipeTo($(this).index());
		});
	}
	if($('#slides').length>0){
		var slides = new Swiper('#slides',{
			loop:true,
			autoplay:4000,
			wrapperClass:'slides',
			slideClass:'fl_item',
			paginationActiveClass:'current',
			speed:1500,
			pagination : '#slides .p',
			autoplayDisableOnInteraction:false,
			paginationClickable:true
		});
		$('#slides .prev').click(function(){
			slides.swipePrev(); 
		})
		$('#slides .next').click(function(){
			slides.swipeNext(); 
		})
	}
	if($('#bookflash').length>0){
		var bookflash = new Swiper('#bookflash',{
			loop:true,
			autoplay:4000,
			wrapperClass:'flash',
			slideClass:'fl_item',
			paginationActiveClass:'current',
			speed:600,
			pagination : '#bookflash .p',
			autoplayDisableOnInteraction:false,
			paginationClickable:true,
			onSwiperCreated: function(swiper){
				for (var i =0; i <  $('#bookflash .p').find('span').length; i++) {
					$('#bookflash .fl_item').eq(i).find('img').clone().prependTo($('#bookflash .p').find('span').eq(i-1));
				}
			}
		});
		
	}
	
	var exbox = new Swiper('#box',{
		mode:'vertical',
		loop:true,
		autoplay:5000,
		speed:1200
	});
	var npic = new Swiper('#npic',{
		loop:true,
		autoplay:5000,
		wrapperClass:'flash',
		slideClass:'fl_item',
		speed:600
	});
	
	var specfocus = new Swiper('#specfocus',{
		pagination: '#specfocus .nav',
		loop:true,
		autoplay:3000,
		speed:1200,
		paginationClickable: true
	});
});
