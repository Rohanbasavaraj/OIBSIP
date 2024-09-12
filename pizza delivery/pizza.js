document.addEventListener('DOMContentLoaded', () => {
    const adminLoginForm = document.getElementById('admin-login-form');
    const userLoginForm = document.getElementById('user-login-form');
    const userDashboard = document.getElementById('user-dashboard');
    const adminDashboard = document.getElementById('admin-dashboard');
    const orderPizzaBtn = document.getElementById('order-pizza');
    const pizzaOrderForm = document.getElementById('pizza-order-form');
    const placeOrderBtn = document.getElementById('place-order');

    adminLoginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Implement admin authentication here
        adminDashboard.style.display = 'block';
    });

    userLoginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Implement user authentication here
        userDashboard.style.display = 'block';
    });

    orderPizzaBtn.addEventListener('click', () => {
        pizzaOrderForm.style.display = 'block';
    });

    placeOrderBtn.addEventListener('click', () => {
        // Implement pizza order placement and Razorpay integration here
        alert('Order placed!');
        pizzaOrderForm.style.display = 'none';
    });
});
