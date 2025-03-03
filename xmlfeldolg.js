function xmlfeldolg() {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            var xmlDoc = xhttp.responseXML;
            const breakfast_menu = xmlDoc.getElementsByTagName("breakfast_menu")[0];
            const foods = breakfast_menu.getElementsByTagName("food");

            let names = [];
            let sum = 0;
            let prices = [];

            for (let i = 0; i < foods.length; i++) {
                const name = foods[i].getElementsByTagName("name")[0].textContent;
                const price = parseFloat(foods[i].getElementsByTagName("price")[0].textContent.replace("$", ""));

                names.push(name);
                sum += price;
                prices.push(price);
            }

            let htmlString = names.join(", ") + "<br>";
            htmlString += "A maximum ár: " + Math.max(...prices).toFixed(2) + " USD<br>";
            htmlString += "A minimum ár: " + Math.min(...prices).toFixed(2) + " USD<br>";
            htmlString += "Az átlag ár: " + (sum / prices.length).toFixed(2) + " USD<br>";

            document.getElementById("eredmeny").innerHTML = htmlString;
        }
    };
    xhttp.open("GET", "./food_menu.xml", true);
    xhttp.send();
}
