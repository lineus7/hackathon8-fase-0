const product = [
    {
        id: 0,
        image: './image/gambar_menswear1.jpeg',
        title: 'Nebular Jumper',
        rating: {
            nilai: 45,
            reviewers: 100
            },
        price: 250000,
    },
    {
        id: 1,
        image: './image/gambar_menswear2.jpeg',
        title: 'Grave Oversized Tshirt',
        rating: {
        nilai: 50,
        reviewers: 100
        },
        price: 175000,
    },
    {
        id: 2,
        image: './image/gambar_women3.jpeg',
        title: 'Rockstood Jacket',
        rating: {
            nilai: 45,
            reviewers: 100
            },
        price: 500000,
    },
    {
        id: 3,
        image: './image/gambar_women1b.jpeg',
        title: 'Ribbed Knit Zip',
        rating: {
            nilai: 50,
            reviewers: 100
            },
        price: 370000,
    },
    {
        id: 4,
        image: './image/gambar_kacamata1.jpeg',
        title: 'Geometric Sunglasses',
        rating: {
        nilai: 45,
        reviewers: 1000
        },
        price: 200000,
    },
    {
        id: 5,
        image: './image/gambar_bag2.jpeg',
        title: 'Red Luna Bag',
        rating: {
        nilai: 40,
        reviewers: 1000
        },
        price: 320000,
    },
    {
        id: 6,
        image: './image/gambar_sendal4.jpeg',
        title: 'Hailey Loafers',
        rating: {
        nilai: 50,
        reviewers: 1000
        },
        price: 290000,
    },
    {
        id: 7,
        image: './image/gambar_women2.jpeg',
        title: 'Oversize T-shirt',
        rating: {
        nilai: 50,
        reviewers: 1000
        },
        price: 250000,
    },
];


const rupiah = (number)=>{
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR"
    }).format(number);
  }

let productsGrid= document.querySelector(`.products-grid`)

for (let i = 0; i <product.length; i++) {
    let productContainer = document.createElement(`div`)

    productContainer.classList.add(`product-container`)

    productContainer.innerHTML =
    `<div class="product-image-container">
    <img class="product-image"
        src="${product[i].image}">
    </div>
    
    <div class="product-name ">
    ${product[i].title}
    </div>
    
    <div class="product-rating-container">
    <img class="product-rating-stars"
        src="./foto/rating-45.png">
    <div class="product-rating-count link-primary">
        ${product[i].rating.reviewers}
    </div>
    </div>
    
    <div class="product-price">
    ${rupiah(product[i].price)}
    </div>
    
    
    <div class="product-spacer"></div>
    
    
    <button class="add-to-cart-button button-primary js-add-to-cart">
    Add to Cart
    </button>`

    productsGrid.append(productContainer)
}
// <div class="product-container">

// </div>

