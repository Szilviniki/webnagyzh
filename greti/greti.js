function kiir() {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            const data = xhttp.responseText.split("\n");

            const nameParts = data[0].trim().split(" ");
            const formattedName = nameParts[0].charAt(0) + ". " + nameParts[1];

            const dateObj = new Date(data[1]);
            const month = dateObj.getMonth() + 1;
            const roundedNumber = Math.round(parseFloat(data[2]));

            document.getElementById("eredmeny").innerHTML =
                formattedName + "<br>" + month + "<br>" + roundedNumber;
        }
    }
    xhttp.open("GET", "./adat.txt", true);
    xhttp.send();
}
