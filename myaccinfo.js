document.querySelector("form").addEventListener("submit",myfun)
    var ud = []
    myfun()
    function myfun(){
        event.preventDefault()
        var obj = {
            name: document.getElementById("fname").value,
            email: document.getElementById("email").value
        }
        ud.push(obj)
      localStorage.setItem("udet",JSON.stringify(ud))
      window.location.href="myoverview.html"
    }