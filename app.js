
function getRandomRgbNumber () {
    min = Math.ceil(0);
    max = Math.floor(16777216);
    return Math.floor(Math.random() * (max - min) + min);
};

let z = 0
document.getElementById("bgColor").style.borderRadius = 0;

function radChange (a) {
 if (z < 100) {
    document.getElementById("bgColor").style.borderRadius = a + z + "px";
    z = parseInt(document.getElementById("bgColor").style.borderRadius.valueOf().replace("px", ""));
    console.log(document.getElementById("bgColor").style.borderRadius.valueOf());
    console.log(z);}
     else {
        z = 0
        document.getElementById("bgColor").style.borderRadius = z;
        alert("Stop right there criminal scum! Its geometry POLICE! We will take all of your millimeters");
     }

    //   } else {
    //     //  block of code to be executed if the condition is false
    //   }
    // document.getElementById("bgColor").style.borderRadius = a + z + "px";
    // z = parseInt(document.getElementById("bgColor").style.borderRadius.valueOf().replace("px", ""));
    // console.log(document.getElementById("bgColor").style.borderRadius.valueOf());
    // console.log(z);
};



function changeBgColorResult () {
    let a = getRandomRgbNumber().toString(16);
    document.getElementById("bgColor").style.background = "#" + a;
    document.getElementById("colorCode").textContent = "Hex color code " + a;

    console.log(a);

    // let b = getRandomRadius() + 'px'
    // console.log(b);
    // document.getElementById("bgColor").style.borderRadius = b;
};

