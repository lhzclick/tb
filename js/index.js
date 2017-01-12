var change = $('#change');
var changeImg = $('img',change);
var changeLi = $('li',change);
var changeLen = changeImg.length;
function chg(){
	for(var i = 0 ; i<changeLen ; i++){
		changeImg[i].style.display = 'none'
		changeLi[i].style.backgroundColor = '';
	}
	changeImg[n].style.display = 'block'
	changeLi[n].style.backgroundColor = '#ff5501';
}
var n = 0 ;
var timer = null ;
timer = setInterval(function(){
	n ++ ;
	n = n == changeLen ? 0 : n ;
	chg();
},3000)
