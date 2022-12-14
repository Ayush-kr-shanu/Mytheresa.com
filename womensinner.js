var kidsdata = [{
        image: "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/1f/P00709974.jpg",
        name: "LORO PIANA",
        price: 585,
    },
    {
        image: "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/5d/P00710025.jpg",
        name: "LORO PIANA",
        price: 1095,
    },
    {
        image: "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/ad/P00712412.jpg",
        name: "LORO PIANA",
        price: 499,
    },
    {
        image: "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/ad/P00712412.jpg",
        name: "LORO PIANA",
        price: 1555,
    },
    {
        image: "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/e0/P00709999.jpg",
        name: "LORO PIANA",
        price: 1095
    },
    {
        image: "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/a4/P00712474.jpg",
        name: "LORO PIANA",
        price: 499,
    },
    {
        image: "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/a7/P00712480.jpg",
        name: "LORO PIANA",
        price: 1099,
    },
    {
        image: "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/35/P00709970.jpg",
        name: "LORO PIANA",
        price: 1429,
    },
    {
        image: "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/8c/P00709981.jpg",
        name: "LORO PIANA",
        price: 585,
    },
    {
        image: "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/63/P00709993.jpg",
        name: "LORO PIANA",
        price: 795,
    },
    {
        image: "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/2d/P00709954.jpg",
        name: "LORO PIANA",
        price: 1429,
    },
    {
        image: "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/7d/P00712487.jpg",
        name: "LORO PIANA",
        price: 415,
    },
    {
        image: "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/ec/P00710001.jpg",
        name: "LORO PIANA",
        price: 1095,
    },
    {
        image: "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/26/P00709987.jpg",
        name: "LORO PIANA",
        price: 1095,
    }

]
var kidsarr = JSON.parse(localStorage.getItem("cartdetail")) || []
document.querySelector("#filter").addEventListener("change", priceFilter)
priceFilter(kidsdata)
var count = kidsdata.length
console.log(count)


function priceFilter() {
    var selected = document.querySelector("#filter").value;
    if (selected == "lowtohigh") {
        kidsdata.sort(function(a, b) {
                if (a.price > b.price) return 1
                if (a.price < b.price) return -1
                return 0
                    // console.log(a.price)
            })
            //  disptable(menarr)
            // console.log(selected)
            // made by suraj web 19 roll no 1274 
    }
    if (selected == "sortby") {
        kidsdata.sort(function(a, b) {
                return
                // console.log(a.price)
            })
            //  disptable(menarr)
            // console.log(selected)
    }
    if (selected == "hightolow") {
        kidsdata.sort(function(a, b) {
                if (a.price > b.price) return -1
                if (a.price < b.price) return 1
                return 0
            })
            //  disptable(menarr)
            // made by suraj web 19 roll no 1274 
    }
    disptable(kidsdata)
}

function brandfilter() {

}
disptable(kidsdata)

function disptable(k) {
    document.getElementById("productlength").innerText = `${count} products `
    document.querySelector("#right_Section").innerHTML = "";
    k.forEach(function(el, index) {

            var div = document.createElement("div")
            var avtar = document.createElement("img")
                // var avtar1 = document.createElement("img")
            avtar.setAttribute("src", el.image)
                
            var p1 = document.createElement("p")
            p1.innerText = el.name
            var p2 = document.createElement("p")
            p2.innerText = "Women's Products"
            var h4 = document.createElement("h4")
            h4.innerText = `€ ${el.price}`
            var btn = document.createElement("button")
            btn.innerText = "Add to Cart"
            btn.addEventListener("click", function() {
                addall(el)
            })
            div.append(avtar, p1, p2, h4, btn)
            document.getElementById("right_Section").append(div)
        })
        
}

function addall(el) {
    //  el.quantity = 1;
    //  el.total_price = el.price * 1; 

    kidsarr.push(el)
    localStorage.setItem("cartdetail", JSON.stringify(kidsarr))


}
let ArrayData = [];
let allData = document.getElementsByClassName("check");
Array.from(allData).forEach(function(e, i) {
    document.getElementsByClassName("check")[i].addEventListener("click", function() {
        let checkbox = document.getElementsByClassName("check")[i]

        // console.log(checkbox.value);
        // made by suraj web 19 roll no 1274 
        if (checkbox.checked == true) {


            ArrayData.push(checkbox.value)
            CheckboxFun(ArrayData);

        } else {
            let index = ArrayData.indexOf(checkbox.value);
            ArrayData.splice(index, 1);
            CheckboxFun(ArrayData);

        }
    })
})

function CheckboxFun(arr) {
    let newArray = [];

    if (arr.length == 0) {
        disptable(kidsdata)
        return;
    }
    arr.forEach(function(e) {
            let result = kidsdata.filter(function(x) {
                    return x.name == e;
                })
                // console.log(result)
                // made by suraj web 19 roll no 1274 
            newArray.push(result)

        })
        // console.log(newArray);
    let lastArray = [];
    for (let i = 0; i < newArray.length; i++) {
        for (let j = 0; j < newArray[i].length; j++) {
            // console.log(newArray[i][j])
            // made by suraj web 19 roll no 1274 
            lastArray.push(newArray[i][j])
        }
    }
    disptable(lastArray);
}

disptable(kidsdata)