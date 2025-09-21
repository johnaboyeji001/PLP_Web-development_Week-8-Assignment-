/* script.js */
function animateProduct(id){ const el=document.getElementById(id); el.classList.add('animate'); setTimeout(()=>el.classList.remove('animate'),1000); }
document.getElementById('calcBtn')?.addEventListener('click',()=>{
const qty=parseInt(document.getElementById('quantity').value);
if(!qty||qty<=0){ document.getElementById('priceResult').textContent='Enter valid quantity'; }
else { document.getElementById('priceResult').textContent=`Total: ₦${qty*500}`; }
});
document.getElementById('offerBtn')?.addEventListener('click',()=>{
const popup=document.getElementById('offerPopup'); popup.classList.remove('hidden'); setTimeout(()=>popup.classList.add('hidden'),3000);
});
document.getElementById('contactForm')?.addEventListener('submit',e=>{
e.preventDefault(); document.getElementById('formResult').textContent='Message sent!';
});
