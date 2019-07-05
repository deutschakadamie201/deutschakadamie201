
function generator(){
	var cap = Math.floor((Math.random()*20)+1);
	var img = Math.floor((Math.random()*20)+1);

	//console.log(cap);
	//console.log(img);
	document.getElementById('taco').innerHTML=`
		<img src="captions/${cap}.png" style="width:550px; height:200px;">
	`;
	
	document.getElementById('divCaption').innerHTML=`
		<img src="images/${img}.jpg" style="width:550px;">
	`;

	
}