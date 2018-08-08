function pegarValor(){
		var url = document.getElementById("campo").value;
		var site = document.getElementById("ifr");
		site.src = "https://" + url;
	}
	document.getElementById("enviar").onclick = function(e){
		pegarValor();
		e.preventDefault();
	}