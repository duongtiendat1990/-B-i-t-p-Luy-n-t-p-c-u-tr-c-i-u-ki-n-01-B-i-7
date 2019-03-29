function Check() {
    let minute = document.getElementById("minute").value;
    let fixedCharge = 25000
    if (minute>200) {
        result = (minute-200)*200+150*400+50*600;
    } else if (minute>50) {
        result=(minute-50)*400+50*600;
    } else {
        result = minute*600
    }
    fee = result + fixedCharge
    document.getElementById("result").innerHTML = fee + 'VND'
}
function listen() {
    document.addEventListener('keydown', checkKey);
}
function checkKey(e) {
    var keyCode = (event.key);
    if (keyCode == '+' || keyCode == '-' || keyCode == '.') {
        e.preventDefault()
    }
}