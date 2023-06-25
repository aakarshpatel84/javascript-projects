
export const Navbar = () => {

  return (

    `<div class="logo">
    <img src="../images/logo.png" alt="" />
      </div>
      <div class="searchBox">
        <input type="text" placeholder="Search hare..." id="search"/>
        <i class="fi-xnsuhl-search"></i>
      </div>
      <ul>
        <li>
          <a href="/">
            <span><i class="fi-xnsuxl-home-solid"></i></span
          ></a>
        </li>
      
        <li>
          <a href="/signup">
            <span><i class="fi-xnluhl-user-solid"></i></span
          ></a>
        </li>
        <li>
          <a href="/login">
            <span><i class="fi-xwsuxl-sign-in-solid"></i></span
          ></a>
        </li>

        <li>
        <a href="/cart.html">
          <span class="cartLeng"><i class="fi-xwsuhl-shopping-cart-solid"></i></span
        ></a>
      </li>
      </ul>`

  );
};


export default Navbar;