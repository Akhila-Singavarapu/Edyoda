$(document).ready(function () {
  $(".carousel1").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    cssEase: "linear",
  });
});

// End of Carousel

var reciveData = [];

$(document).ready(function () {
  $.ajax(
    $.get(
      "https://5d76bf96515d1a0014085cf9.mockapi.io/product",
      function (data, status) {
        if (data.length) {
          reciveData = data;
          console.log(status);
        }
        var clothCard = "";
        for (var i = 0; i < (reciveData.length = 5); i++) {
          clothCard += `
                  <a href="products.html?product_id=${reciveData[i].id}" id="${reciveData[i].id}">
                  <div class='main-card'>
                  <div class='image'>
                  <img src=${reciveData[i].preview}>
                  </div>
                  <div class='info-card'>
                  <h2>${reciveData[i].name}</h2>
                  <h4>${reciveData[i].brand}</h4>
                  <div class='free'>
                  <p>Rs. ${reciveData[i].price}</p>
                  </div>
                  </div>
                  </div>
                  </a>`;
        }
        $(clothContainer).html(clothCard);
        var clothHead = $("<h1>Clothing for Men and Women</h1>");
        $(clothing).prepend(clothHead);
      }
    )
  );
});

$(document).ready(function () {
  $.get(
    "https://5d76bf96515d1a0014085cf9.mockapi.io/product",
    function (dat, status) {
      if (dat.length) {
        reciveData = dat;
        console.log(status);
      }
      var accessCard = "";
      for (var j = 5; j < reciveData.length; j++) {
        accessCard += `
                  <a href="products.html?product_id=${reciveData[j].id}" id="${reciveData[j].id}">
                  <div id= ${reciveData[j].id} class='main-card'>
                  <img src=${reciveData[j].preview}>
                  <div class='info-card'>
                  <h2>${reciveData[j].name}</h2>
                  <h4>${reciveData[j].brand}</h4>
                  <div class='free'>
                  <p>Rs. ${reciveData[j].price}</p>
                  </div>
                  </div>
                  </div>
                  </a>`;
      }
      $(accessContainer).html(accessCard);
      var accessHead = $("<h1>Accessories for Men and Women</h1>");
      $(accessories).prepend(accessHead);
    }
  );
});

var clothing = $("<section id='clothing' class='cloth-section'></section>");
$("main").append(clothing);
var clothContainer = $("<div class='cloth-container'></div>");
$(clothing).append(clothContainer);

var accessories = $(
  "<section id='accessories' class='access-section'></section>"
);
$("main").append(accessories);
var accessContainer = $("<div class='access-container'></div>");
$(accessories).append(accessContainer);

$(document).ready(function () {
  function getProdDetail() {
    var id = window.location.search.split("=")[1];
    $.get(
      "https://5d76bf96515d1a0014085cf9.mockapi.io/product/" + id,
      function (data) {
        var prodDetail = data;

        name = prodDetail.name;
        imgSrc = prodDetail.preview;
        brand = prodDetail.brand;
        price = prodDetail.price;
        desc = prodDetail.description;
        pic1 = prodDetail.photos[0];
        pic2 = prodDetail.photos[1];
        pic3 = prodDetail.photos[2];
        pic4 = prodDetail.photos[3];
        pic5 = prodDetail.photos[4];

        function createProdPage() {
          $("#prod_img").attr("src", imgSrc);
          $("#prod_name").html(name);
          $("#prod_brand").html(brand);
          $("#price").html(price);
          $("#desc").html(desc + ".");
          $("#img0").attr("src", pic1);
          $("#img1").attr("src", pic2);
          $("#img2").attr("src", pic3);
          $("#img3").attr("src", pic4);
          $("#img4").attr("src", pic5);
        }
        createProdPage();
      }
    );

    var left = document.querySelector(".left_col img");
    var right = document.querySelectorAll(".prev_img img");

    for (var s = 0; s < right.length; s++) {
      right[s].addEventListener("click", function () {
        left.src = this.src;
        // console.log(this);
        for (var t = 0; t < right.length; t++) {
          right[t].classList.remove("active");
        }
        this.classList.add("active");
      });
    }
  }
  getProdDetail();
});

// console.log(dataStored);

var addCart = $(".add_btn");
// console.log(addCart);
var showCart = $(".count");

var allProducts = [];

for (var i = 0; i < addCart.length; i++) {
  addCart[i].addEventListener("click", function () {
    // e.preventDefault();
    var product = {
      image:
        this.parentElement.parentElement.children[0].children[5].children[1]
          .children[0].src,
      name: this.parentElement.parentElement.children[0].children[0].innerText,
      price:
        this.parentElement.parentElement.children[0].children[2].children[0]
          .innerText,
      totalPrice: parseInt(
        this.parentElement.parentElement.children[0].children[2].children[0]
          .innerText
      ),
      quantity: 1,
    };
    addItemToLocalStorage(product);
  });
}

function addItemToLocalStorage(product) {
  var cartItem = JSON.parse(localStorage.getItem("productInCart"));
  console.log(cartItem);
  if (cartItem === null) {
    allProducts.push(product);
    localStorage.setItem("productInCart", JSON.stringify(allProducts));
    // console.log(cartItem);
  } else {
    for (var i = 0; i < cartItem.length; i++) {
      if (product.name === cartItem[i].name) {
        product.quantity += cartItem[i].quantity;
        product.totalPrice = cartItem[i].totalPrice += product.totalPrice;
      } else {
        allProducts.push(cartItem[i]);
      }
    }
    allProducts.push(product);
  }
  localStorage.setItem("productInCart", JSON.stringify(allProducts));
  window.location.reload();
  // console.log(product);
}

function displayCartItem() {
  var cartList = "";
  var tot = 0;
  var cartItem = JSON.parse(localStorage.getItem("productInCart"));

  for (var j = 0; j < cartItem.length; j++) {
    cartList += `
                <div class='check-out'>
                  
                  <div class='cart-list'>
                    <div class='image'>
                      <img src=${cartItem[j].image}>
                    </div>
                    <div class='text'>
                      <h2>${cartItem[j].name}</h2>
                      <h4>x${cartItem[j].quantity}</h4>
                      <h3>Amount: ${cartItem[j].totalPrice}
                    </div>
                  </div>
                </div>
                `;
    tot += cartItem[j].totalPrice;
  }
  $(".tot").append(tot);
  console.log(cartList);
  $(".cart-card").append(cartList);
}

displayCartItem();

function displayCartCount() {
  var initialCartCount = 0;
  var cartItem = JSON.parse(localStorage.getItem("productInCart"));
  for (var i = 0; i < cartItem.length; i++) {
    initialCartCount += cartItem[i].quantity;
  }
  console.log(initialCartCount);
  $(showCart).text(initialCartCount);
}

displayCartCount();

var placeOrder = $(".order-btn");
for (var i = 0; i < placeOrder.length; i++) {
  placeOrder[i].addEventListener("click", function () {
    localStorage.removeItem("productInCart");
  });
}
