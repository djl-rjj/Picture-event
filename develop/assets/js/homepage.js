$(funtion(){
	var index=0;//当前显示的第几张图，默认为0
	var size=$('.banner-list li').size();

	setInterval(funtion(){
		$('.banner-list li').eq(index).addClass('curr').siblings().removeClss('curr');
		$('.banner-list li').eq(index).css('opacity', 1).siblings().css('opacity',0);	
		$('.icon-list li').eq(index).addClass('curr').siblings().removeClss('curr');
		index++;
		if (index==size) {
			index=0;
		}

	},500)

	
})