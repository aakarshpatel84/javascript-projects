
// Getting added item from localStorage
let cartItemsFromLs = JSON.parse(localStorage.getItem("cartItems")) || [];
console.log("cartItemsFromLs: ", cartItemsFromLs);


import { Navbar } from "../Components/Navbar.js"; // Importing Navbar
document.querySelector('nav').innerHTML = Navbar();


document.querySelector(".logo").addEventListener("click", () => {// Logo redirects Home
    window.location.href = "index.html";
});


// Appending  Cart Data
function displayCartData(cartData) {

    // Calling grand parent div
    const parentCartDiv = document.querySelector(".parent-cart");
    parentCartDiv.innerHTML = null;


    // Iterating every Items
    cartData.forEach((el) => {

        // Made parent Div
        const div = document.createElement("div");
        div.className = "cartItemDiv";

        // Display Image
        const image = document.createElement("img");
        image.src = el.image;

        // Display title 
        const title = document.createElement("p");
        title.innerText = `${el.title}`;

        // Display price 
        const price = document.createElement("p");
        price.innerText = `$${el.price}`;


        // Made button parent div
        const deleteBtnWrapper = document.createElement("div");
        deleteBtnWrapper.className = "deleteBtnWrapper";


        // Display delete button
        const deleteBtn = document.createElement("i");
        // deleteBtn.innerText = "delete"
        deleteBtn.className = "fa-sharp fa-solid fa-trash";
        deleteBtnWrapper.append(deleteBtn);


        // delete button click event
        deleteBtn.addEventListener("click", () => {
            deleteFun(el.id); // Function invokation
        });


        //  Display count value (1) 
        const countVal = document.createElement("p");
        countVal.innerText = 1;



        // Increment Button
        const incWrapper = document.createElement("div");
        incWrapper.className = "incBtn";
        const incBtn = document.createElement("i");
        incBtn.className = "fa-solid fa-circle-plus";
        incWrapper.append(incBtn);


        // Increment Button Click  Event
        incBtn.addEventListener("click", () => {
            incFun(el.price, countVal, price);
        });



        // Made Decrement Button
        const decWrapper = document.createElement("div");
        decWrapper.className = "decWrapper";
        const decBtn = document.createElement("i");
        decWrapper.className = "incBtn";
        decBtn.className = "decBtn";
        decBtn.setAttribute("type", "button");
        decBtn.className = "fa-solid fa-circle-minus";
        decWrapper.append(decBtn);


        // Decrement Button click Event
        decBtn.addEventListener("click", () => {
            decFun(el.price, countVal, price);
        });


        // Appending All Data to child
        div.append(image, title, price, incWrapper, countVal, decWrapper, deleteBtnWrapper);

        parentCartDiv.append(div);  // Appending child to Parent
    });
}


// -----------------------------------------------****-----------------------------------------------------------


function deleteFun(ID) { // Delete Function 
    cartItemsFromLs = cartItemsFromLs.filter((el) => el.id !== ID);
    displayCartData(cartItemsFromLs);
    localStorage.setItem("cartItems", JSON.stringify(cartItemsFromLs));
}



// Increment count Function 
function incFun(price, countElement, priceTag) {

    // Get the current count value
    let count = parseInt(countElement.innerText);
    count++; // Increment the count

    if (count > 5) {

        alert("Item limt is 5 only");

    } else {

        // Update the count value in the UI
        countElement.innerText = count;

        // Calculate the new price
        const totalPrice = price * count;

        // Update the price value in the UI
        const priceElement = priceTag;
        priceElement.innerText = `$${totalPrice.toFixed(2)}`;
    }
}



// Decrement count Function
function decFun(price, countElement, priceTag) {

    let count = parseInt(countElement.innerText);
    count--; // Decrement the count

    if (count < 1) { // if count is 0 

        alert("can't purchase 0 item");

    } else {

        // Update the count value in the UI
        countElement.innerText = count;

        // Calculate the new price
        const totalPrice = price * count;

        // Update the price value in the UI
        const priceElement = priceTag;
        priceElement.innerText = `$${totalPrice.toFixed(2)}`;
    }
}

displayCartData(cartItemsFromLs); // Display data function invokation