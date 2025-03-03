function eredmeny2(){
	const xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function () {
		if (xhttp.readyState == 4 && xhttp.status == 200) {
			console.log(xhttp.responseText);
			var xmlDock= xhttp.responseXML;
			const catalog= xmlDock.getElementsByTagName("CATALOG")[0];
			const plants= catalog.getElementsByTagName("PLANT");
			let lights=[];
			let sum=0;
			let prices=[];
			for (let i = 0; i < plants.length; i++){
				const plant = plants[i];
				const light= plant.getElementsByTagName("LIGHT")[0].childNodes[0].nodeValue.toLowerCase()
				const price= parseFloat(plant.getElementsByTagName("PRICE")[0].childNodes[0].nodeValue.replace("$",""))
				sum+=price;
				prices.push(price);
				if(!lights.includes(light)){
					lights.push(light);
				}
			}
			lights=lights.sort();
			document.getElementById("elso").innerHTML = lights.join(", ");
			document.getElementById("masodik").innerHTML = "A maximum ár"+Math.max(...prices).toFixed(2)+" USD<br>";
			document.getElementById("masodik").innerHTML += "A minimum ár"+Math.min(...prices).toFixed(2)+" USD<br>";
			document.getElementById("masodik").innerHTML += "A átlag ár"+(sum/prices.length).toFixed(2)+" USD<br>";
		}
	}
	xhttp.open("GET", "./plant_catalog.xml", true);
	xhttp.send();
}


function list() {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function () {
		if (xhttp.readyState == 4 && xhttp.status == 200) {
			var kiv = document.getElementById("day").value;
			let data = JSON.parse(xhttp.responseText);
			let content = "<ul>";

			for (let i = 0; i < data.length; i++) {
				var startOfWeek = data[i].startOfWeek;
				if (kiv == "all" || startOfWeek == kiv) {
						content += "<li>" + data[i].translations.hun.common + "</li>";
				}
			}
			content += "</ul>";

			document.getElementById("harmadik").innerHTML = content;
		}
	};
	xhttp.open("GET", "https://restcountries.com/v3.1/all", true);
	xhttp.send();
}
