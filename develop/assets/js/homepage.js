$(function(){
	var index=0;//当前显示的第几张图，默认为0
	var size=$('.banner-list li').size();
	setInterval(function(){//2秒定时轮播函数
		//$('.banner-list li').eq(index).addClass('curr').siblings('li').removeClass('curr');
		$('.banner-list li').eq(index).animate({opacity:'1'}).siblings('li').animate({opacity:'0'});
		$('.icon-list li').eq(index).addClass('curr').siblings('li').removeClass('curr');
		index++;
		if (index==size) {
			index=0;
		};

	},2000);


	function handlerIn(){
		$('.all-brand').removeClass('ks-hide');
		$('.guide-item,.brand').addClass('curr');
    }
	function handlerOut(){
		$('.all-brand').addClass('ks-hide');
		$('.guide-item,.brand').removeClass('curr');
	}

	$('.brand').mouseover(handlerIn).mouseout(handlerOut);
	$('.all-brand').mouseover(handlerIn).mouseout(handlerOut);
})