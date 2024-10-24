// for houres setting in 12 format
let time = document.getElementById("time");
function timeAMPM() {
    let now = new Date();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
    if (h < 12) {
        return `${h}:${m}:${s} AM`
    } else {
        if (h == 12) {
            h = 12;
            return `${h}:${m}:${s} PM`
        } else {
            h = h % 12;
            return `${h}:${m}:${s} PM`
        }
    }
}
setInterval(() => {
    time.innerText = "Time : " + timeAMPM();
}, 1000)


// transaction history

let total = 0;
function transaction(str) {
    let input_Str = document.getElementById("input");
    let input = Number(input_Str.value);
    let trns = document.getElementById("transaction");
    let bal = document.getElementById('bal');
    let p = document.createElement('p');
    let hr = document.createElement('hr');
    let time = timeAMPM();
    bal.innerText = `Current Balance: ₹ ${total}`

    if (str === "Deposit") {
        total = total + input;
        p.innerText = `${str} : ₹${input}  (${time})`;
        bal.innerText = `Current Balance: ₹ ${total}`
        trns.appendChild(p);
        trns.appendChild(hr);
    } else {
        if (input > total)
            alert("You have low balance");
        else {
            total = total - input;
            p.innerText = `${str} : ₹${input}  (${time})`
            bal.innerText = `Current Balance: ₹ ${total}`
            trns.appendChild(p);
            trns.appendChild(hr);
        }
    }
}

