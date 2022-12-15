function getOtp(event) {

    const abc = document.querySelector('input').value;
    if (abc.length < 10) {
        alert('Please enter a valid number')
    } else {

        document.querySelector('button').style.display = 'none';
        document.querySelector('input').style.display = 'none';
        document.querySelector('h1').innerText = "Please enter otp"
        const otp = document.createElement('input');
        otp.placeholder = "Enter OTP"
        const btn = document.createElement('button');
        btn.innerText = "Submit"
        btn.addEventListener('click', success)

        document.querySelector('.otp').append(otp, btn);
    }

}

function success(event) {
    alert("otp match successful");
    window.location.href = "success.html";
}


// let total = localStorage.getItem("total");
// console.log(total)
    // total = Number(total);


var grandtotal = JSON.parse(localStorage.getItem("GGtotal"))
// console.log(grandtotal)
var sum = 0;
for(var i =0;i<grandtotal.length;i++){
  sum+= grandtotal[i]
}
console.log(sum)
const h1 = document.createElement('h1');
h1.innerText = "Total amount: " + sum;
document.querySelector('.otp').append(h1);