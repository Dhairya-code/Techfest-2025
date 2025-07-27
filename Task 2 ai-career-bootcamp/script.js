const registerBtn = document.getElementById('registerBtn');
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('closeBtn');
const form = document.getElementById('registerForm');
const thankYou = document.getElementById('thankYou');

registerBtn.onclick = () => {
  modal.style.display = 'flex';
};

closeBtn.onclick = () => {
  modal.style.display = 'none';
  thankYou.style.display = 'none';
  form.style.display = 'block';
};

window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
    thankYou.style.display = 'none';
    form.style.display = 'block';
  }
};

form.onsubmit = (e) => {
  e.preventDefault();
  form.style.display = 'none';
  thankYou.style.display = 'block';
};
