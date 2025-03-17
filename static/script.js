/*
var x = 5; 
var y = 7; 
var z = x+y; 
console.log(z); 

var A = "Hello "; 
var B = "world!"; 
var C = A+B; 
console.log(C);

function SumNPrint(x, y) {
    x1 = x;
    x2 = y;
    var x3;
    x3 = x1 + x2;
    return x3;
}

console.log(SumNPrint(x,y));
console.log(SumNPrint(A,B));

if (C.length > z) {
    console.log(C);
} if (C.length < z)  {
    console.log(z);
} else {
    console.log("good job!");
}

const L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
const L2 = ["Apple", "Banana", "Kiwi", "Orange"];

function findTheBanana(array, arrayName) {
        array.forEach(function (item) {
                if (item == "Banana") {
            alert("We found a banana in the " + arrayName + " array");
        }
    });
    }

findTheBanana(L1, "first");
findTheBanana(L2, "second");

*/

function greetingFunc () {
    var d = new Date;
    var h = d.getHours();
    if (h < 12 ) {
        msg = "Good morning";
    } if (h >= 12 && h<18) {
        msg = "Good afternoon";
    } if (h >= 18 && h<20) {
        msg = "Good evening";
    } if ((h >= 20 && h<24) || (h>=0 && h<5)) {
        msg = "Good night";
    }

    console.log(msg);
    var E = document.getElementById("greeting");
    E.innerHTML = msg + ", I am Vaishnavi!";
}



function addYear () {
    var date = new Date();
    var year = date.getFullYear();
    document.getElementById("copyYear").innerHTML += " " + year

}


function showList() {
    document.getElementById("FavList").style.display = "block";
    document.getElementById("SeeMoreBTN").style.display = "none";
}

$("#readMore").click(function() {
    $("#longIntro").show();
    $("#readLess").show();
    $("#readMore").hide();
})

$("#readLess").click(function() {
    $("#longIntro").hide();
    $("#readLess").hide();
    $("#readMore").show();
})


document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");

    // only run if the form exists on the page
    if (form) {
        const nameInput = document.getElementById("name");
        const emailInput = document.getElementById("email");
        const messageInput = document.getElementById("message");

        const nameError = document.getElementById("nameError");
        const emailError = document.getElementById("emailError");
        const messageError = document.getElementById("messageError");

        function validateField(input, errorElement) {
            if (!input.checkValidity()) {
                errorElement.textContent = input.validationMessage;
                errorElement.style.display = "block";
            } else {
                errorElement.textContent = "";
                errorElement.style.display = "none";
            }
        }

        form.addEventListener("submit", function (event) {
            validateField(nameInput, nameError);
            validateField(emailInput, emailError);
            validateField(messageInput, messageError);

            if (!form.checkValidity()) {
                event.preventDefault();
            }
        });
    }
});
