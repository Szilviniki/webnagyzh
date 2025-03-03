function beolvas() {
	const xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function () {
		if (xhttp.readyState == 4 && xhttp.status == 200) {
			let tablazat;
			const sorok=xhttp.responseText.split("\n");
			const fejlecek=sorok[0].split(";");
			const adatok=sorok.slice(1, sorok.length);

			tablazat = "<table style='border: black solid'>";
			tablazat += "<tr>";
			for (let i = 0; i < fejlecek.length; i++) {
				tablazat += "<td>" + fejlecek[i].toUpperCase() + "</td>";
			}
			tablazat += "</tr>";
			for (let i = 0; i < adatok.length; i++) {
				tablazat += "<tr>";
				const adat = adatok[i].split(";");
				for (let j = 0; j < adat.length; j++) {
					tablazat += "<td>" + adat[j] + "</td>";
				}
				tablazat += "</tr>";
			}
			tablazat += "</table>";
			document.getElementById("eredmeny").innerHTML = tablazat;
		}
	}
	xhttp.open("GET", "./data.csv", true);
	xhttp.send();
}