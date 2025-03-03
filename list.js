function generateList(n, m) {
    let list = "<ul>";
    let number = 1;
    for (let i = 1; i <= n; i++) {
        const value = parseFloat(Math.log(number)).toFixed(4);
        list += "<li>" + value + "</li>";
        number += m;
    }
    list += "</ul>";
    return list;
}

module.exports = { generateList };