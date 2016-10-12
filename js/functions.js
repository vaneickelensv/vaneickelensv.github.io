$(document).ready(function(){
	var mivideo=$("#mivideo").get(0)
	var total,actual;



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
	console.info(actual)
	if (actual>=30 && actual<=40){
		$("#boton1").slideDown();
	}else{
		$("#boton1").hide();
	}

	if (actual>=31 && actual<=40){
		$("#boton2").slideDown();
	}else{
		$("#boton2").hide();
	}

	});

//Escoge el sistema 1
 mivideo.addEventListener("timeupdate",function(){
	actual=mivideo.currentTime;
	if (actual>=39.5 && actual<=40){


var suerte=parseInt(Math.random()*2);
			if (suerte==0){
				teletransportar(41);
			}else if (suerte==1){
				teletransportar(57);
			}

		};

	})



//Aparecen botones 3

mivideo.addEventListener("timeupdate",function(){
	actual=mivideo.currentTime;
	console.info(actual)

	if (actual>=108 && actual<=116){
		$("#boton4").slideDown();
	}else{
		$("#boton4").hide();
	}

	if (actual>=110 && actual<=116){
		$("#boton5").slideDown();
	}else{
		$("#boton5").hide();
	}


	});

//Escoge el sistema 2
 mivideo.addEventListener("timeupdate",function(){
	actual=mivideo.currentTime;
	if (actual>=114 && actual<=115){


var suerte=parseInt(Math.random()*2);
			if (suerte==0){
				teletransportar(117);
			}else if (suerte==0){
				teletransportar(132);
			}

		};

	});





//Teletransportar

function teletransportar(fotograma){
		mivideo.currentTime=fotograma;
		mivideo.play
	}

	$("#boton1").click(function(){
		teletransportar(41);
	});

	$("#boton2").click(function(){
		teletransportar(57);
	});

	$("#boton4").click(function(){
		teletransportar(117);
	});

	$("#boton5").click(function(){
		teletransportar(132);
	});

// Opcion 1, vuelve a cargar el video 
	monica=1
	mivideo.addEventListener("timeupdate",function(){
	actual=mivideo.currentTime;
	if (actual>=55 && actual<=56.9 && monica==1){
		monica=0
		mivideo.pause();
		mivideo.load();
		location.reload();
	};
	});




// Opcion esclavos, vuelve a cargar el video 

monica=1
	mivideo.addEventListener("timeupdate",function(){
	actual=mivideo.currentTime;
	if (actual>=130 && actual<=131 && monica==1){
		monica=0
		mivideo.pause();
		mivideo.load();
		location.reload();
	};
	});



// Ultimas opciones

$("#acelerar").click(function(event) {
		mivideo.playbackRate+=0.5;
	});






			
		



	








});