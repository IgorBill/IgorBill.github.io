"use strict";

const currency = (total) => parseFloat(Math.round(total * 100) / 100).toFixed(2);

const compare = (key, order='acs') => (a, b) => {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) return 0;
    
    const A = (typeof a[key] === 'string') ? a[key].toUpperCase() : a[key];
    const B = (typeof b[key] === 'string') ? b[key].toUpperCase() : b[key];

    let comparison = 0;
    comparison = (A > B) ? 1 : -1;
    return (order === 'desc') ? -comparison : comparison;
}

const findByProps = function(items, props, what) {
    let founds = [];
    items.find((item, i) => {
        if (item[props] === what) {
            founds.push(items[i]);
        }            
    })
    return founds;
}

const sortingOrders = [
    {key:"default", value: "Сортувати по..."}, 
    {key:"popularity", value:"Полурярності"}, 
    {key:"low-high", value:"По зростанню ціни"}, 
    {key:"high-low", value:"По зменшенню ціни"}
];

function Product(id, name, price, image) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.image = image;
}

// Діалогове вікно з описом продукції
function CardProduct(item) {
    
    this.item = item;
   
    const detailTemplate = (item) =>  `
    <div class="detail-container">
        <div class="col-left">
            <img src="${item.image}">
        </div>
        <div class="col-right">
            <div class="info-container">
                <h2 class="info-header">${item.name}</h2>

                <div class="info-price">Ціна: <span class="price">${item.price}</span></div>
                <div class="info-shipping">Free shipping</div>
                
                <div class="info-button to-cart" data-id="${item.id}">
                    <a href="#!" class="btn btn-submit add-to-cart"><i class="fas fa-cart-plus"></i> Додати в кошик</a>
                </div>

                <h2 class="qty-header py-2">Кількість:</h2>     
                    
                <div class="qty qty-buttons">
                    <div class="number-input quantity" data-id="${item.id}">
                        <button class="btn btn-dec">-</button>
                        <input class="quantity-result"
                                        type="number" 
                                        value="1"
                                        min="1"
                                        max="10"
                                        required 
                                        />
                        <button class="btn btn-inc">+</button>
                    </div>
                </div>

                <div class="info-description">${item.description}</div>
                <div class="info-link">
                <a class="btn-link far fa-heart add-to-wishlist" href="#!" data-id="${item.id}">&nbsp;В список бажань</a>
                </div>
            </div>    
        
        </div>
      </div>
    `;
    
    const showButton = this.item.querySelector(".show-details");
    const dialog = document.querySelector("dialog");
    const closeButton = dialog.querySelector("dialog .close");
    let dialogMain = dialog.querySelector("dialog .dialog-main");    
    
    showButton.addEventListener("click", event => {
        let parent = event.target.closest('.product');
        let id = parent.dataset.id;
        dialogMain.innerHTML = detailTemplate(productList.getProductById(id))
        dialog.showModal();
    });
    
    // Показати діалогове вікно по кліку на картинку
    const showDetailsImg = this.item.querySelector(".show-details-img");
    showDetailsImg.addEventListener("click", event => {
        let parent = event.target.closest('.product');
        let id = parent.dataset.id;
        dialogMain.innerHTML = detailTemplate(productList.getProductById(id))
        dialog.showModal();
    });
    
    closeButton.addEventListener("click", () => {
        dialog.close();
    });

    const addToCartButton = this.item.querySelector('.add-to-cart');

    addToCartButton.addEventListener('click', this);
    
    this.handleEvent = function(event) {
        let parent = event.target.closest('.product');
        let id = parent.dataset.id;
        let product = productList.getProductById(id);
        product = {...product, amount: 1};
        shoppingCart.addItemToCart(product);
        // document.getElementById('cart-amount').textContent = shoppingCart.totalAmount();
    } 
}

function Cart(tax = 0.07, shipping = 0) {
    // console.log("Cart constructor", this);
    this.tax = tax;
    this.shipping = shipping;

    const store = new Store();

    let cart = store.init('basket');

    this.saveCart = function() {
        // console.log(cart);
        store.set('basket', cart);
        cartAmount.textContent = shoppingCart.totalAmount();
    }


    function Item (id, price, amount) {
        this.id = id;
        this.price = price;
        this.amount = amount;
    }

    const cartItemTemplate = (item, product) => `
    
    <div class="row cart-item" id="id${product.id}">
        <div class="cell"><img src="${product.image}" alt="${product.name}" height="30"></div>
        <div class="cell">${product.name}</div>
        <div class="cell"><span class="product-price price">${product.price}</span></div>
        <div class="cell">${item.amount}</div>
        <div class="cell"><span class="product-subtotal price">0</span></div>
        <div class="cell"><a href="#!" class="fas fa-trash-alt"></a></div>
    </div>
    `;

    const findItem = (items, id) => items.find(item => item.id == id);
    this.populateShoppingCart = (products) => {
        let result = `
        <div class="row header">
                        <div class="cell">Cover</div>
                        <div class="cell">Product</div>
                        <div class="cell">Price</div>
                        <div class="cell">Quantity</div>
                        <div class="cell">Total</div>
                        <div class="cell">Action</div>
        </div>`;
        cart.forEach(item => result += cartItemTemplate(item, findItem(products, item.id)));
        return result;
    }

    this.setCartTotal = function(shoppingCartItems) {
        let tmpTotal = 0;
        let subTotal = 0;

        cart.map(item => {
            let price = shoppingCartItems.querySelector(`#id${item.id} .product-price`).textContent;
            tmpTotal = +price * item.amount;
            shoppingCartItems.querySelector(`#id${item.id} .product-subtotal`).textContent = parseFloat(tmpTotal).toFixed(2);
            subTotal += parseFloat(tmpTotal).toFixed(2);

        });

        document.querySelector('.cart-subtotal').textContent = this.totalInCart();
        document.querySelector('.cart-tax').textContent = this.tax;
        document.querySelector('.cart-shipping').textContent = this.shipping;
        document.querySelector('.cart-total').textContent = (+this.totalInCart() + +this.tax + +this.shipping).toFixed(2);
    }
    // 
    this.addItemToCart = function(product) {

        let inCart = cart.some(item => item.id === product.id);

        if (inCart){
            let index = cart.findIndex(item => item.id === product.id);
            cart[index].amount += product.amount;
        }else{
            let item = new Item(product.id, product.price, product.amount);
            cart.push(item);
        }
        this.saveCart();
    }

    this.setCountForItem = function(id, amount) {
        for (let i in cart) {
            if(cart[i].id === id) {
                cart[i].amount = amount;
            }
        }
    }

    this.totalAmount = function() {
        let total = 0;
        for (let item in cart) {
            total += cart[item].amount;
        }
        return total;
    }

    this.totalInCart = function() {
        let total = 0;
        for (let item in cart) {
            total += cart[item].price * cart[item].amount;
        }
        return currency(total*(1 + this.tax) + this.shipping);
    }

    this.removeItemFromCart = function(id) {
        for (let item in cart) {
            if (cart[item].id === id) {
                cart[item].amount--;
                if (cart[item].amount === 0) {
                    cart.splice(item, 1);
                }
                break;
            }
        }
        this.saveCart();
    }

    this.removeAllItemFromCart = function(id) {
        for (let item in cart) {
            if (cart[item].id === id) {
                cart.splice(item, 1);
                break;
            }
        }
        this.saveCart();
    }

    this.clearCart = function() {
        cart = [];
        this.saveCart();
    }

}


const starsTemplate = (n) => Array(n).fill('&starf;').concat(Array(5 - n).fill('&star;')).join('');

function ProductList(products) {
    
    this.products = products;

    // Темплейт карточки продукта
    this.productTemplate = (product) => `
        <article data-aos="zoom-in" data-aos-duration="1000" class="product" data-id="${product.id}">
            <div class="icons">
                <a href="#!" class="fas fa-shopping-cart add-to-cart"></a>
                <a href="#!" class="fas fa-heart add-to-wishlist"></a>
                <a href="#!" class="fas fa-eye show-details"></a>
            </div>
            <div class="image show-details-img">
                <div class="badge bg-${product.badge.bg}">${product.badge.title}</div>
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="content" data-id="${product.id}">
                <h3 class="product-name">${product.name}</h3>
                <span><span class="price"></span><span class="price product-price">${product.price}</span></span> <span class="starf">${starsTemplate(product.stars)}</span>
            </div>                    
        </article>`;

    this.populateProductList = function (products) {
        let content = "";
        products.forEach(item => content += this.productTemplate(item))
        return content;
    }

    this.getProductById = (id) => this.products.find(item => item.id == id);
}

const liElement = (item) => `<li><a class="category-item" href="#!" data-id="${item.id}">${item.name}</a></li>`;

const ulElement = items => {
    let ul = document.createElement('ul');
    ul.setAttribute('class', "list-unstyled categories text-muted");

    let res = '';
    for (let item of items) {
        res += liElement(item);
    }
    ul.innerHTML = res;
    return ul;
}

const distinctSections = items => {
    let mapped = [...items.map(item => item.section)];
    let unique = [...new Set(mapped)];
    return unique;
}


function categoriesCollation(distinct, categories) {
    let result = [];
    let i = 0;
    for (let section of distinct) {
        result[i] = categories.filter(item => item.section === section);
        i++;
    }
    return result;
}

let sectionName = section => {
    let div = document.createElement('div');
    div.setAttribute('class', 'py-2 px-4 bg-dark text-white mb-1');
    div.innerHTML = `<strong class="text-uppercase">${section}</strong>`;
    return div;
}

const populateCategories = (categoryContainer, categories) => {
    let distinct = distinctSections(categories);
    let collation = categoriesCollation(distinct, categories);
    for (let i=0; i<distinct.length; i++) {
        categoryContainer.append(sectionName(distinct[i]));
        categoryContainer.append(ulElement(collation[i]));
    }

}


function renderCategory(productContainer, selector, products) {
    const categoryItems = document.querySelectorAll(selector);

    categoryItems.forEach(item => item.addEventListener('click', e => {
        e.preventDefault();

        if (e.target.classList.contains('category-item')) {
            const category = e.target.dataset.id;
            const categoryFilter = items => items.filter(item => item.category == category);
            productContainer.innerHTML = productList.populateProductList(categoryFilter(products));
        } else {
            productContainer.innerHTML = productList.populateProductList(products);
        }

        let productCards = productContainer.querySelectorAll('.product');
        productCards.forEach(item => new CardProduct(item));

    }))
}

const sortingOptions = () => sortingOrders.map(item => `<option value="${item.key}">${item.value}</option>`).join('');

function renderSelect(selectPicker, products, productContainer) {
    selectPicker.innerHTML = sortingOptions();

    selectPicker.addEventListener('change', function() {
        switch(this.value) {
            case 'low-high':
                productContainer.innerHTML = productList.populateProductList(products.sort(compare('price', 'asc')))
                break;
            case 'high-low':
                productContainer.innerHTML = productList.populateProductList(products.sort(compare('price', 'desc')))
                break;
            case 'popularity':
                productContainer.innerHTML = productList.populateProductList(products.sort(compare('stars', 'desc')))
                break;

            default:
                productContainer.innerHTML = productList.populateProductList(products.sort(compare('id', 'asc')))
            
        }
        let productCards = productContainer.querySelectorAll('.product');
        productCards.forEach(item => new CardProduct(item));

    });
}


function Store() {

    this.init = function(key) {
        if(!this.isset(key)) {
            this.set(key, []);
        }
        return this.get(key);
    }

    this.isset = function(key) {
        return this.get(key) !== null;
    }

    this.get = function(key) {
        let value = localStorage.getItem(key);
        return value === null ? null : JSON.parse(value);
    }

    this.set = function(key, value) {
        return localStorage.setItem(key, JSON.stringify(value));
    }
    
}


const badgeTemplate = (item) => `
<div class="form-check mb-1">
<input class="form-check-input" type="checkbox" id="id-${item}" value="${item}" name="badge">
&nbsp;<label class="form-check-label" for="id-${item}">${item}</label>
</div>
`;

const renderList = (products, value) => productList.populateProductList(products.filter(product => product.badge.title.includes(value)));

const renderShowOnly = (showOnly, products, productContainer) => {
    let badges = [...new Set([...products.map(item => item.badge.title)].filter(item=>item != ''))];

    showOnly.innerHTML = badges.map(item => badgeTemplate(item)).join("");
    let checkboxes = showOnly.querySelectorAll('input[name="badge"]');

    let values = [];

    checkboxes.forEach(item => {
        item.addEventListener("change", e => {
            if(e.target.checked) {
                values.push(item.value);
                productContainer.innerHTML = values.map(value => renderList(products, value)).join("");
            }else{
                if (values.length != 0) {
                    values.pop(item.value)
                    productContainer.innerHTML = values.map(value => renderList(products, value)).join("");
                }
            }
            if (values.length == 0) {
                productContainer.innerHTML = productList.populateProductList(products);
            }
            let productCards = productContainer.querySelectorAll('.product');
            productCards.forEach(item => new CardProduct(item));

        }) 
    })
}


let shoppingCart =  new Cart();
let productList = new ProductList(products);
const cartAmount = document.getElementById('cart-amount');

cartAmount.textContent = shoppingCart.totalAmount();

function main() {

    const productContainer = document.querySelector('.product-container');

    if (productContainer) {

    productContainer.innerHTML = productList.populateProductList(products);	

    let productCards = productContainer.querySelectorAll('.product');

    productCards.forEach(item => new CardProduct(item));

    const sidebar = document.getElementById('sidebar');

    if (sidebar) {
        const categoryContainer = document.getElementById('category-container');
        populateCategories(categoryContainer, categories);

        renderCategory(productContainer, '#category-container', products)

    }

    const selectPicker = document.getElementById('selectpicker');
    if (selectPicker) {
        renderSelect(selectPicker, products, productContainer);
    }

    const showOnly = document.querySelector('.show-only');
    if(showOnly) {
        renderShowOnly(showOnly, products, productContainer);
    }
}

    const cartPage = document.getElementById('cart-page');
    if(cartPage) {
        const shippingCartItems = cartPage.querySelector('.cart-main .table');
        shippingCartItems.innerHTML = shoppingCart.populateShoppingCart(products);
        shoppingCart.setCartTotal(shippingCartItems);

        let isAuth = auth => auth ?? false;

        class AuthException extends Error {
            constructor(code, message) {
                const fullMessage = message ? `${code}: ${message}` : code;
                super(fullMessage) ;
                this.name = code;
                this.code = code;
                this.message = fullMessage;
            }

            toString() {
                return this.message;
            }
        }


        class Parent {
            hello = "Hello world";

            seyHi() {
                return this.hello;
            }
        } 

        let myParent = new Parent();
        console.log(myParent.seyHi())

        class Child extends Parent {

        }

        let myChild = new Child();
        console.log(myChild.seyHi())

        const msgBoxId = document.getElementById('dialogBox');

        function showDialog(e) {
            msgBoxId.querySelector('.message').textContent = e;
            msgBoxId.showModal();
        }


        const checkoutButton = document.querySelector('.checkout');

        



        checkoutButton.addEventListener('click', () => {
            try{
                console.log(isAuth)
                if(!isAuth()) {
                    // 
                    // throw new Error("Error")
                    throw new AuthException("FORBIDDEN" , "You don`t have access to this page.");
                } else {
                    window.open("/checkout.html");
                }
              

            }catch(e){
                console.error(e)
                console.error(e.toString())
                showDialog(e.toString())
                const closeButton = msgBoxId.querySelector('.close');
                console.log("closeButton ", closeButton)
                closeButton.addEventListener('click', () => {
                    msgBoxId.close();
                })
            }
        })


    }

    const checkoutPage = document.getElementById('checkout-page');
    if (checkoutPage) {
        const checkoutForm = checkoutPage.getElementById('checkout-form');
        const errorMessages = document.getElementById('errorMessages');
        function displayError(message) {
            errorMessages.innerHTML += `<div class="error">${message}</div>`;
        }

        function isValidEmail(email) {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        }

        checkoutForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const {name, email, address1, address2, city, zipcode} = checkoutForm.elements;

            errorMessages.innerHTML = "";
            if (!name.value.trim()) {
                displayError('Name field is required.')
                return;
            }
            if (!address1.value.trim() || !address2.value.trim()) {
                displayError('Address 1 or Address 2 fields is required.')
                return;
            }

            if (!city.value.trim()) {
                displayError('City field is required.')
                return;
            }
            if (!zipcode.value.trim()) {
                displayError('City postal code is required.')
                return;
            }

            if (!email.value.trim() || !isValidEmail(email.value)) {
                displayError('Please enter a valid email address.')
                return;
            }

        })

    }
}

// Розділ с фуутером
const template = document.createElement('template');

template.innerHTML = `
<footer>
        <div class="container page-footer">           

            <section class="footer-social py-3">
                <ul class="footer-social-list">
                <li><a target=”_blank” href="https://instagram.com/el.lapir"><i class="fab fa-instagram"></i></a></li>
                <li><a target=”_blank” href="https://t.me/ellapirsale"><i class="fab fa-telegram"></i></a></li>
                <li><a target=”_blank” href="https://www.facebook.com/profile.php?id=100008298630221"><i class="fab fa-facebook"></i></a></li>
                </ul>
            </section>
           
            <section class="footer-ligal">
                <ul class="footer-ligal-list">
                    <li><a target=”_blank” href="https://github.com/IgorBill">Created by Bilenko Ihor</a></li>
                    <li><a target=”_blank” href="https://instagram.com/el.lapir?utm_medium=copy_link">&copy; 2024 Copyright EL.LAPIR Inc.</a></li>
                </ul>
                
            </section>
        </div>
    </footer>
`;

let clone = template.content.cloneNode(true);
document.body.appendChild(clone)

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        main();
    })
} else {
    main();
}