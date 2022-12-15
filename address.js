let input = document.querySelectorAll('form input');
    console.log(input);
    document.querySelector('.next').addEventListener("click", function() {

        let empty = false;
        for (let i = 0; i < input.length; i++) {
            if (input[i].value === "") {
                empty = true;
            }
        }
        if (!empty) {
            window.location.href = "payment-page.html"
        } else {
            alert("Please enter correct details")
        }


    })

    document.querySelector('.back').addEventListener("click", function() {
        window.location.href = "/cart.html"
    })