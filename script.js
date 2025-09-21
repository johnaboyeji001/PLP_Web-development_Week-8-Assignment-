// Toggle dark mode
const toggleBtn = document.getElementById('dark-mode-toggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Popup offer on page load
window.addEventListener('load', () => {
  const popup = document.getElementById('offer-popup');
  popup.style.display = 'block';
  setTimeout(() => { popup.style.display = 'none'; }, 5000);
});

// Simple product quantity calculator
function calculateTotal(price, quantity) {
  return price * quantity;
}
document.getElementById('calc-btn').addEventListener('click', () => {
  const price = parseFloat(document.getElementById('price').value);
  const qty = parseInt(document.getElementById('quantity').value);
  const total = calculateTotal(price, qty);
  document.getElementById('total').textContent = `₦${total.toLocaleString()}`;
});
