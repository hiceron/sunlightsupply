// public/ecommerce.js

// Initialize an empty cart
let cart = {};

// Function to add products to the cart
window.addToCart = function (productId, quantity) {
    quantity = parseInt(quantity);
    cart[productId] = (cart[productId] || 0) + quantity;
    updateCartDisplay();
};

// Function to update the cart display
function updateCartDisplay() {
    const cartItemsDiv = document.querySelector('.cart-items');
    if (!cartItemsDiv) return;
    cartItemsDiv.innerHTML = '';
    let totalPrice = 0;

    for (let productId in cart) {
        const quantity = cart[productId];
        const pricePerTon = getProductPrice(productId);
        const productTotal = pricePerTon * quantity;
        totalPrice += productTotal;

        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item', 'mb-2');
        cartItem.innerHTML = `
            <p>${getProductName(productId)}: ${quantity} tons - $${productTotal.toFixed(2)}</p>
            <div class="cart-item-controls">
                <button class="btn btn-sm btn-outline-primary" onclick="changeQuantity('add', '${productId}')">+</button>
                <button class="btn btn-sm btn-outline-primary" onclick="changeQuantity('subtract', '${productId}')">-</button>
                <button class="btn btn-sm btn-outline-danger" onclick="removeFromCart('${productId}')">Remove</button>
            </div>
        `;
        cartItemsDiv.appendChild(cartItem);
    }
    const cartTotalPriceElement = document.getElementById('cart-total-price');
    if (cartTotalPriceElement) {
        cartTotalPriceElement.textContent = totalPrice.toFixed(2);
    }
    toggleCartDisplay(true);
}

// Function to remove a product from the cart
window.removeFromCart = function (productId) {
    delete cart[productId];
    updateCartDisplay();
};

// Function to adjust product quantity
window.changeQuantity = function (action, productId) {
    if (action === 'add') {
        cart[productId] += 1;
    } else if (action === 'subtract') {
        cart[productId] = Math.max(1, cart[productId] - 1);
    }
    updateCartDisplay();
};

// Helper functions for product name and price
function getProductPrice(productId) {
    const prices = { 'pp': 500, 'pe': 550, 'ps': 600 };
    return prices[productId] || 0;
}

function getProductName(productId) {
    const names = { 'pp': 'Polypropylene Bulk', 'pe': 'Polyethylene Bulk', 'ps': 'Polystyrene Bulk' };
    return names[productId] || 'Unknown Product';
}

// Generate an invoice
window.generateInvoice = function () {
    let invoice = 'Invoice:\n\n';
    let totalPrice = 0;
    for (let productId in cart) {
        const quantity = cart[productId];
        const pricePerTon = getProductPrice(productId);
        const productTotal = pricePerTon * quantity;
        totalPrice += productTotal;
        invoice += `${getProductName(productId)}: ${quantity} tons - $${productTotal.toFixed(2)}\n`;
    }
    invoice += `\nTotal: $${totalPrice.toFixed(2)}`;
    alert(invoice);
};

// Toggle cart display
window.toggleCartDisplay = function (show) {
    const cartModal = document.getElementById('cartModal');
    if (cartModal) {
        cartModal.style.display = show ? 'block' : 'none';
    }
};
