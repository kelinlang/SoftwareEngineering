var vw = 0;
function scrollx(p){
var isIE=!!window.ActiveXObject;
var d = document,dd = d.documentElement,db = d.body,w = window,o = d.getElementById(p.id),ie6 = isIE&&!window.XMLHttpRequest,style,timer;
o.style.display = "block";
if(o){
o.style.cssText +=";position:"+(p.f&&!ie6?'fixed':'absolute')+";"+(p.l==undefined?'right:0;':'left:'+p.l+'px;')+(p.t!=undefined?'top:'+p.t+'px':'bottom:0');
if(p.f&&ie6){
o.style.cssText +=';left:expression(documentElement.scrollLeft + '+(p.l==undefined?dd.clientWidth-o.offsetWidth:p.l)+' + "px");top:expression(documentElement.scrollTop +'+(p.t==undefined?dd.clientHeight-o.offsetHeight:p.t)+'+ "px" );';
dd.style.cssText +=';background-image: url(about:blank);background-attachment:fixed;';
}else{
if(p.f){
w.onresize = w.onscroll = function(){
clearInterval(timer);
timer = setInterval(function(){
document.getElementById("GoAdviceDiv").style.left = document.body.clientWidth/2+500;
clearInterval(timer);
},10)
}
}
}
}
}
function show_rf(){
	scrollx({
	id:'GoAdviceDiv',
	l:document.body.clientWidth/2+500,
	t:100,
	f:1
	});
	document.getElementById("GoAdviceDiv").style.left = document.body.clientWidth/2+500;
}

function ajaxlogin(hurl,siteid,t){
	$.ajax({ url: '/index.php?m=member&c=index&a=mini&forward='+hurl+'&siteid='+siteid+'&t='+t, context: document.body, success: function(data){
		$('#userbar').html(data);
	}});
	if(t === 4) {
		$('#userbar').addClass('logined');
	}
}