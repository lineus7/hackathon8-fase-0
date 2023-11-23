const product = [
  {
    id: 0,
    image: "./image/gambar_menswear1.jpeg",
    title: "Nebular Jumper",
    rating: {
      nilai: 45,
      reviewers: 100,
    },
    price: 250000,
  },
  {
    id: 1,
    image: "./image/gambar_menswear2.jpeg",
    title: "Grave Oversized Tshirt",
    rating: {
      nilai: 50,
      reviewers: 100,
    },
    price: 175000,
  },
  {
    id: 2,
    image: "./image/gambar_women3.jpeg",
    title: "Rockstood Jacket",
    rating: {
      nilai: 45,
      reviewers: 100,
    },
    price: 500000,
  },
  {
    id: 3,
    image: "./image/gambar_women1b.jpeg",
    title: "Ribbed Knit Zip",
    rating: {
      nilai: 50,
      reviewers: 100,
    },
    price: 370000,
  },
  {
    id: 4,
    image: "./image/gambar_kacamata1.jpeg",
    title: "Geometric Sunglasses",
    rating: {
      nilai: 45,
      reviewers: 1000,
    },
    price: 200000,
  },
  {
    id: 5,
    image: "./image/gambar_bag2.jpeg",
    title: "Red Luna Bag",
    rating: {
      nilai: 40,
      reviewers: 1000,
    },
    price: 320000,
  },
  {
    id: 6,
    image: "./image/gambar_sendal4.jpeg",
    title: "Hailey Loafers",
    rating: {
      nilai: 50,
      reviewers: 1000,
    },
    price: 290000,
  },
  {
    id: 7,
    image: "./image/gambar_women2.jpeg",
    title: "Oversize T-shirt",
    rating: {
      nilai: 50,
      reviewers: 1000,
    },
    price: 250000,
  },
];

let total = 0; //BUAT TOTAL CART JANGAN DIHAPUS

//LOOPING CONTENT AND BUTTON

const rupiah = (number) => {
  // FUNCTION RUPIAH
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(number);
};

let productsGrid = document.querySelector(`.products-grid`);
for (let i = 0; i < product.length; i++) {
  // CREATE CONTENT & BUTTON ADD TO CART
  let productContainer = document.createElement(`div`);
  let button = document.createElement(`button`);

  productContainer.classList.add(`product-container`);
  button.classList.add(
    `add-to-cart-button`,
    `button-primary`,
    `js-add-to-cart`
  );

  button.innerText = `Add to Cart`;

  productContainer.innerHTML = `<div class="product-image-container">
        <img class="product-image" src="${product[i].image}">
    </div>

    <div class="product-name ">
    ${product[i].title}
    </div>

    <div class="product-rating-container">
        <img class="product-rating-stars" src="./foto/rating-45.png">
        <div class="product-rating-count link-primary">
            ${product[i].rating.reviewers}
        </div>
    </div>

    <div class="product-price">
        ${rupiah(product[i].price)}
    </div>
    <div class="product-spacer">
    </div>`;

  productContainer.append(button);
  productsGrid.append(productContainer);
  //END CREATE CONTENT & BUTTON ADD TO CART

  // BUTTON TO ADD CART AND DELETE PER ITEM

  let cartList = document.querySelector(`.cart-list`);
  let cartTotal = document.querySelector(`.cart-total`);
  let cartContainer = document.querySelector(`.cart-container`);

  button.addEventListener(`click`, () => {
    cartContainer.classList.remove(`none`);
    let cartItem = document.createElement(`div`);
    let button2 = document.createElement(`button`);

    button2.classList.add(`delete-item`);
    cartItem.classList.add(`cart-item`);

    button2.textContent = `X`;

    cartItem.innerHTML = `
        <img src="${product[i].image}" alt="" class="cart-img">
        <p class="item-text">${product[i].title}</p>
        <p class="harga item-text ">${rupiah(product[i].price)}</p>
        `;
    cartItem.append(button2);
    cartList.append(cartItem);

    total += product[i].price;
    cartTotal.textContent = `${rupiah(total)}`;

    button2.addEventListener(`click`, () => {
      cartItem.remove();
      total -= product[i].price;
      cartTotal.textContent = `${rupiah(total)}`;
    });
  });
  //END BUTTON ADD CART AND DELETE PER ITEM
}
//LOOPING END

//CART BUTTON
let closeX = document.querySelector(`.close`);
let cartContainer = document.querySelector(`.cart-container`);

//CLOSE CART
closeX.addEventListener(`click`, () => {
  cartContainer.classList.add(`none`);
});
//CLOSE CART END

//OPEN CART
let open = document.querySelector(`ion-icon`);

open.addEventListener(`click`, () => {
  cartContainer.classList.remove(`none`);
});
//OPEN CART END

//CLEAR BUTTON
let clear = document.querySelector(`.clear`);
let cartTotal = document.querySelector(`.cart-total`);

clear.addEventListener(`click`, () => {
  let cartItems = document.querySelectorAll(`.cart-item`);
  cartItems.forEach((li) => {
    li.remove();
  });
  total = 0;
  cartTotal.textContent = `${rupiah(total)}`;
});
//END CART BUTTON

//BUY BUTTON
let buy = document.querySelector(`.submit`);

buy.addEventListener(`click`, () => {
  if (total === 0) {
    alert(
      `Tidak ada barang dikeranjang. Silahkan masukan barang terlebih dahulu.`
    );
  } else {
    alert(`Pembelian sebesar ${rupiah(total)} telah berhasil.`);
    total = 0;
    cartTotal.textContent = `${rupiah(total)}`;
    let cartItems = document.querySelectorAll(`.cart-item`);
    cartItems.forEach((li) => {
      li.remove();
    });
  }
});
//FILTER SEARCH

let searchInput = document.querySelector('#search-input');
let listProducts = document.querySelectorAll(".product-container");

searchInput.addEventListener('input', filterProducts);

function filterProducts() {
  let searchValue = searchInput.value.toLowerCase();

  listProducts.forEach((product) => {
    let productName = product.querySelector(".product-name").textContent.toLowerCase();

    if (productName.includes(searchValue)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
}

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];

// }

// filterProducts()
