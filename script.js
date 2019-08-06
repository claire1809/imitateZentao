var infoBtn = document.getElementById("infoBtn");
infoBtn.addEventListener("click",function() {
    var infoMenu = document.getElementById("infoMenu");
    if(infoMenu.style.display == "" || infoMenu.style.display == "none") {
        infoMenu.style.display = "block";
    } else {
        infoMenu.style.display = "none";
    }
});
// var dateTimeBtn = document.getElementById("dateTimeBtn");
// var dropdownMenu = document.getElementsByClassName("dropdownMenu")[0];
// dateTimeBtn.addEventListener("mouseover",function() {
//     dropdownMenu.style.display = "block";
// });
// dateTimeBtn.addEventListener("mouseout",function() {
//     dropdownMenu.style.display = "none";
// });
var blockSectionInfo = document.getElementById("blockSectionInfo");
blockSectionInfo.addEventListener("click", function() {
    var blockMenu = document.getElementById("blockSectionMenu");
    if(blockMenu.style.display == "" || blockMenu.style.display == "none") {
        blockMenu.style.display = "block";
    } else {
        blockMenu.style.display = "none";
    }
});
var themeBtn = document.getElementById("themeBtn");
var themeMenu = document.getElementById("themeMenu");
themeBtn.addEventListener("mouseover", function() {
    themeMenu.style.display = "block";
});
themeBtn.addEventListener("mouseout", function() {
    themeMenu.style.display = "none";
});
themeMenu.addEventListener("mouseover", function() {
    themeBtn.children[0].style.backgroundColor="#E7F3FC";
});
themeMenu.addEventListener("mouseout", function() {
    themeBtn.children[0].style.backgroundColor="#ffffff";
    themeBtn.children[0].style.color = "#000000";
});
themeBtn.children[0].addEventListener("mouseover", function() {
    themeBtn.children[0].style.backgroundColor = "#0066EB";
    themeBtn.children[0].style.color = "#ffffff";
});
themeBtn.children[0].addEventListener("mouseout", function() {
    themeBtn.children[0].style.backgroundColor="#ffffff";
    themeBtn.children[0].style.color = "#000000";
});

// var panelBugBtn = document.getElementById("panelBugBtn");
// panelBugBtn.addEventListener("click",function() {
//     var panelBugMenu = document.getElementById("panelBugMenu");
//     if(panelBugMenu.style.display == "" || panelBugMenu.style.display == "none") {
//         panelBugMenu.style.display = "block";
//     } else {
//         panelBugMenu.style.display = "none";
//     }
// });

var panelBtnList = document.getElementsByClassName("icon-panel-control");
for(var i = 0; i < panelBtnList.length; i++) {
    // panelBtnList[i].onclick = (function(index) {
    //     // var siblingMenu = panelBtnList[i].nextElementSibling;
    //     if(panelBtnList[index].nextElementSibling.style.display == "" || panelBtnList[index].nextElementSibling.style.display == "none") {
    //         panelBtnList[index].nextElementSibling.style.display = "block";
    //     } else {
    //         panelBtnList[index].nextElementSibling.style.display == "none"
    //     }
    // })(i);

    (function (arg){//这个函数对象有一个本地私有变量arg(形参)，该函数的function scope的closure对象属性有两个引用：arr和i。i的值随外部改变，但是本地的私有变量(形参)arg不会受影响，其值在一开始被调用时就决定了
        panelBtnList[arg].onclick = function () {//onclick函数实例的function scope的closure对象属性有一个引用arg
            // alert(i);
            // alert(arg);//只要外部空间的arg不变，这里的引用值就不会改变
            if(panelBtnList[arg].nextElementSibling.style.display == "" || panelBtnList[arg].nextElementSibling.style.display == "none") {
                panelBtnList[arg].nextElementSibling.style.display = "block";
            } else {
                panelBtnList[arg].nextElementSibling.style.display = "none"
            }
        }
    })(i);//立即执行匿名函数，传递下标i(实参)

    // var li = panelBtnList[i];
    //
    // var addClick = function (el, index) {
    //     el.onclick= function () {
    //         if(el.nextElementSibling.style.display == "" || el.nextElementSibling.style.display == "none") {
    //             el.nextElementSibling.style.display = "block";
    //         } else {
    //             el.nextElementSibling.style.display = "none"
    //          }
    //     };
    // };
    //
    // addClick(li, i);
}

var c=document.getElementById("planProgress");
var ctx=c.getContext("2d");
ctx.beginPath();
ctx.arc(50,50,40,0,2*Math.PI);
ctx.stroke();


