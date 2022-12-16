var form = document.querySelector("form");
    var userData = JSON.parse(localStorage.getItem("userdetail")) || []
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        var data = {
                fname: form.fname.value,
                lname: form.lname.value,
                email: form.email.value,
                password1: form.pass.value,
                password2: form.repass.value,

            }
            // console.log(data.password1,data.password2)
        if (checkEmail(data.email) == true && data.password1 == data.password2) {
            userData.push(data);
            localStorage.setItem("userdetail", JSON.stringify(userData));
            alert("signup succesfull")
                // window.location.href="signIn.html"

        } else if (data.password1 != data.password2) {
            alert("please check your password")
            localStorage.setItem("permision", "notallow");
        } else {
            alert("Email already exist")
            localStorage.setItem("permision", "notallow");
        }

    })

    function checkEmail(email) {
        var filter = userData.filter(function(el) {
            return email == el.email
        })
        if (filter.length > 0) {
            return false;
        } else {
            return true;
        }
    }


    // for login

    document.querySelector("#form1").addEventListener("submit", myfcn)

    function myfcn() {
        event.preventDefault()
        var data = JSON.parse(localStorage.getItem("userdetail"))
        var uemail = document.querySelector("#email1").value
        var upass = document.querySelector("#pass1").value
        let is = false;
        //    let a
        for (var i = 0; i < data.length; i++) {
            if (uemail == data[i].email && upass == data[i].password1) {
                is = true;
                //    a=i
                // console.log(uemail)
            }
        }
        if (is) {
            alert("login successfull")
            localStorage.setItem("permision", "allow");
            location.replace("/index.html")
                //    localStorage.setItem("loginAs",JSON.stringify(data[a].name))
        } else {
            alert('wrong details')
            localStorage.setItem("permision", "notallow");
        }

    }




    let footer = document.getElementById("footer");
    fetch('/lifeFooter.html')
        .then(res => res.text())
        .then(data => {
            footer.innerHTML = data
            const parser = new DOMParser();
            const doc = parser.parseFromString(data, "text/html")
            eval(doc.querySelector("script").textContent)
        })

    let header = document.getElementById('header');

    fetch('/header.html')
        .then(res => res.text())
        .then(data => {
            header.innerHTML = data
            const parser = new DOMParser();
            const doc = parser.parseFromString(data, "text/html")
            eval(doc.querySelector("script").textContent)
        })