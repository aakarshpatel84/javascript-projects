import { Navbar } from "../Components/Navbar.js";
document.querySelector('nav').innerHTML = Navbar();



const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

// getting Data
let data;


const getData = async () => {
    try {
        const URL = "https://fakestoreapi.com/products";
        const res = await fetch(URL);
        data = await res.json();
        displayData(data);
        addSearchListener(data);

    } catch (error) {
        console.log("error ==>", error.message);
    }

};

getData();

// display data

const displayData = (data) => {

    const section = document.querySelector("section");
    section.innerHTML = null;
    data.forEach((el) => {

        const div = document.createElement("div");
        div.className = "grid";


        const imageWrapper = document.createElement("div");
        imageWrapper.className = "imageWrapper";
        const image = document.createElement("img");
        image.src = el.image;
        imageWrapper.append(image);

        const titleWrapper = document.createElement("div");
        titleWrapper.className = "titleWrapper";
        const title = document.createElement("p");
        title.innerText = `${el.title}`;
        titleWrapper.append(title);


        const priceWrapper = document.createElement("div");
        priceWrapper.className = "priceWrapper";
        const price = document.createElement("p");
        price.innerText = `$${el.price}`;
        priceWrapper.append(price);



        const descWrapper = document.createElement("div");
        descWrapper.className = "descWrapper";
        const desc = document.createElement("p");
        desc.innerText = el.description;
        descWrapper.append(desc);


        const addToCartButtonWrapper = document.createElement("div");
        addToCartButtonWrapper.className = "addToCartButtonWrapper";
        const addToCartButton = document.createElement("button");
        addToCartButton.innerText = "Add To Cart";
        addToCartButtonWrapper.append(addToCartButton);


        addToCartButton.addEventListener("click", () => {
            addToCart(el, el.id);

        });


        div.append(imageWrapper, titleWrapper, priceWrapper, addToCartButtonWrapper);
        section.append(div);

    });


};

// Debaounce
const debounce = (func, delay) => {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
};



function filter() {
    let query = document.getElementById('search').value;
    let low = query.toLowerCase();
    let copy_Data = data;
    copy_Data = copy_Data.filter((el) => {
        return el.title.toLowerCase().includes(low);
    });
    displayData(copy_Data);
};


const addSearchListener = () => {
    const inputElement = document.getElementById('search');
    const debouncedFilter = debounce(filter, 800);
    inputElement.addEventListener('input', debouncedFilter);
};

const cartIcon = document.querySelector(".cartLeng");
const cartLength = document.createElement("p");
cartLength.innerText = cartItems.length;


// Add To Cart
function addToCart(Data, ID) {
    const isCart = cartItems.find((el) => el.id === ID);
    if (isCart) {
        alert("This item already in cart");
    } else {
        cartItems.push(Data);
        // cartLength.innerText = cartItems.length;
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
        cartLength.innerText = cartItems.length;
        alert('item Added');

    }




}
// Show cart value
cartIcon.append(cartLength);
