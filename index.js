let a;
let b;
let sumAB;
document.getElementById("roleDes").onclick = function () {
    a = Math.floor(Math.random() * 6) + 1;
    b = Math.floor(Math.random() * 6) + 1;
    sumAB = a + b;
    // document.getElementById("a").innerHTML = a;
    // document.getElementById("b").innerHTML = b;
    document.getElementById("sumAB").innerHTML = sumAB;
    let img1 = document.getElementById("img1");
    let img2 = document.getElementById("img2");
    img1.innerHTML = "";
    img2.innerHTML = "";
    let img_1 = document.createElement("img");
    let img_2 = document.createElement("img");
    img_1.style = style = "width: 100px;";
    img_2.style = style = "width: 100px;";
    img1.appendChild(img_1);
    img2.appendChild(img_2);
    if (a === 1) {
        img_1.src = "/test01/images09/image1.png";
    } else if (a === 2) {
        img_1.src = "/test01/images09/image2.png";
    } else if (a === 3) {
        img_1.src = "/test01/images09/image3.png";
    } else if (a === 4) {
        img_1.src = "/test01/images09/image4.png";
    } else if (a === 5) {
        img_1.src = "/test01/images09/image5.png";
    } else if (a === 6) {
        img_1.src = "/test01/images09/image6.png";
    }
    if (b === 1) {
        img_2.src = "/test01/images09/image1.png";
    } else if (b === 2) {
        img_2.src = "/test01/images09/image2.png";
    } else if (b === 3) {
        img_2.src = "/test01/images09/image3.png";
    } else if (b === 4) {
        img_2.src = "/test01/images09/image4.png";
    } else if (b === 5) {
        img_2.src = "/test01/images09/image5.png";
    } else if (b === 6) {
        img_2.src = "/test01/images09/image6.png";
    }
};
