const input = document.querySelectorAll('.info input');
document.querySelector('.next').addEventListener("click", function() {


    let empty = false;
    for (let i = 0; i < input.length; i++) {
        if (input[i].value === "") {
            empty = true;
        }
    }
    if (!empty) {
        window.location.href = "conform.html"
    } else {
        alert("Please enter correct details")
    }

})

document.querySelector('.back').addEventListener("click", function() {
    window.location.href = "address.html"
})

console.log(input)