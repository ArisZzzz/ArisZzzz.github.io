// let myHeading = document.querySelector("h1");
// //利用querySelect获取标题的引用；
// myHeading.textContent = "hello";
//textcontent 是标题内容
//js对大小写敏感

let myImage = document.querySelector("img");
myImage.onclick = function () {
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "images/seven.jpeg") {
        myImage.setAttribute("src", "images/backgr.jpg");
    } else {
        myImage.setAttribute("src", "images/seven.jpeg");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    let myName = prompt("请输入你的名字。");
    if (!myName) {
        alert("输入错误");
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = "欢迎：" + myName + "小童鞋";
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "欢迎" + storedName + "小童鞋";
}
myButton.onclick = function () {
    setUserName();
};