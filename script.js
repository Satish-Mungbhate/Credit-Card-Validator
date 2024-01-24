const cc = document.getElementById("cc");
const ccWrapper = document.getElementById("cc-wrapper");

class Luhn {
    constructor(text) {
        this.text = String(text).replace(/[\s]/g, "");
        this.len = text.length;
    }
    validate() {
        let odd = false;
        let total = 0;
        let calc, calc2;

        if (this.len === 0)
            return false;

        if (!/^[0-9]+$/.test(this.text))
            return false;

        for (let i = this.len; i > 0; i--) {
            calc = parseInt(this.text.charAt(i - 1));
            if (!odd) {
                total += calc;
            } else {
                calc2 = calc * 2;

                switch (calc2) {
                    case 10:
                        calc2 = 1;
                        break;
                    case 12:
                        calc2 = 3;
                        break;
                    case 14:
                        calc2 = 5;
                        break;
                    case 16:
                        calc2 = 7;
                        break;
                    case 18:
                        calc2 = 9;
                        break;
                    default:
                        calc2 = calc2;
                }
                total += calc2;
            }
            odd = !odd;
        }

        return ((total % 10) === 0);
    }
}

function check() {
    let luhnChecker = new Luhn(cc.value);
    luhnChecker.validate() ? ccWrapper.className = "Validate" : ccWrapper.className = "Invalid";
}


function ValidFun() {
    var x = document.getElementById("cc").value;

    if (x === "") {
        document.getElementById("message").innerHTML = " **Plaese enter Card number..";
        return false;
    }


    if (!x.match(/^\d+$/)) {
        document.getElementById("message").innerHTML = " **Please Enter Numeric Value Only..";
        return false;
    } else if (x.match(/^\d+$/)) {
        document.getElementById("message").innerHTML = "";
        return false;
    }


}