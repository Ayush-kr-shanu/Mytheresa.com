let link=document.querySelectorAll(".link")
for(let i=0;i<link.length;i++){
    link[i].addEventListener("click",function(event){
        window.location.href="/womeninner.html"
    })
}













let footer = document.getElementById("footer");
    fetch('/kidsFooter.html')
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