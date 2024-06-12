function convert() {
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
    let amount = parseInt(document.getElementById("amount").value);
    fetch('https://v6.exchangerate-api.com/v6/80c317044a6e0a40a46593f5/latest/' + from)
        .then(resp => resp.json())
        .then(data => {
            let rates = data.conversion_rates;
            let convRate = rates[to];
            let result = convRate * amount;
            document.getElementById("result").innerHTML = "Converted amount in " + to + " is " + result;
        })
}