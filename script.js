document.addEventListener('DOMContentLoaded', () => {
    const checkoutItemsContainer = document.getElementById('checkout-items');
    const grandTotalElement = document.getElementById('grand-total');
    const placeOrderButton = document.getElementById('place-order');

    // Example cart items (Replace this with actual cart data)
    const cartItems = [
        { name: 'Stylish Shirt', price: 1500, quantity: 2 },
        { name: 'Elegant Dress', price: 2000, quantity: 1 },
        { name: 'Classic Jeans', price: 1800, quantity: 1 }
    ];

    // Render cart items in the checkout table
    const renderCheckoutItems = () => {
        let grandTotal = 0;
        checkoutItemsContainer.innerHTML = '';

        cartItems.forEach(item => {
            const total = item.price * item.quantity;
            grandTotal += total;

            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.name}</td>
                <td>PKR ${item.price}</td>
                <td>${item.quantity}</td>
                <td>PKR ${total}</td>
            `;
            checkoutItemsContainer.appendChild(row);
        });

        grandTotalElement.textContent = `PKR ${grandTotal}`;
    };

    // Handle Place Order button click
    placeOrderButton.addEventListener('click', () => {
        alert('Your order has been placed successfully!');
        // Clear the cart or redirect to a thank-you page
    });

    // Initial render
    renderCheckoutItems();
});
