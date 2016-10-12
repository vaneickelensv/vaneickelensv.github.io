$(document).ready(function(){
	var mivideo=$("#mivideo").get(0)
	var total,actual;

//Mostrar tiempo
mivideo.addEventListener("loadedmetadata",function(){
		total=mivideo.duration;
		console.info(total);
	});


//Botones 1
	$("#play").click(function(event) {
		mivideo.play();
	});

	$("#pause").click(function(event) {
		mivideo.play();
		mivideo.pause();
	});
//Aparecen botones 2

mivideo.addEventListener("timeupdate",function(){
	actual=mivideo.currentTime;
	if (actual>=15 && actual<=35){
		$(".botones2").slideDown();
	}else{
		$(".botones2").hide();
	}

	});



//Escoge opcion 1

$("#boton1").click(function(event) {
	$("#mivideo source").attr("src","Videos/3.mp4");
	mivideo.load();
	mivideo.play();
	$(".botones2").remove();
	
});

//Escoge opcion 2

$("#boton2").click(function(event) {
	$("#mivideo source").attr("src","Videos/Escoger opciones(primera parte) (Opcion2).mp4");
	mivideo.load();
	mivideo.play();
	$(".botones2").remove();

mivideo.addEventListener("timeupdate",function(){
	actual=mivideo.currentTime;
	if (actual>=5 && actual<=15){
		$("#boton3").show();
	}

	});
	
	
});

$("#boton3").click(function(event) {
	$("#mivideo source").attr("src","Videos/Desarollo.mp4");
	mivideo.load();
	mivideo.play();
 $("#boton3").remove();
		
	});






});