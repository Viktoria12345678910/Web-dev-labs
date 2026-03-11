// ── TASK 1 ──────────────────────────────────────────
function validateCard(num) {
  const clean = num.replace(/\s/g, '');
  return /^[45]\d{15}$/.test(clean);
}

function checkCard() {
  const val = document.getElementById('cardInput').value;
  const res = document.getElementById('cardResult');
  if (validateCard(val)) {
    res.textContent = '✓ Номер картки валідний';
    res.className = 'result show ok';
  } else {
    res.textContent = '✗ Невалідний номер картки (16 цифр, починається з 4 або 5)';
    res.className = 'result show err';
  }
}

// ── TASK 2 ──────────────────────────────────────────
function validateEmail(email) {
  return /^[A-Za-z0-9][A-Za-z0-9_]*(-[A-Za-z0-9_]+)*@[A-Za-z0-9-]+\.[A-Za-z]{2,}$/.test(email);
}

function checkEmail() {
  const val = document.getElementById('emailInput').value;
  const res = document.getElementById('emailResult');
  if (validateEmail(val)) {
    res.textContent = '✓ Email is correct!';
    res.className = 'result show ok';
  } else {
    res.textContent = '✗ Email is not correct!';
    res.className = 'result show err';
  }
}

// ── TASK 3 ──────────────────────────────────────────
function isValidURL(url) {
  return /^(https?|ftp):\/\/.+/.test(url);
}

// Render example URLs
const examples = [
  'https://www.example.com',
  'ftp://fileserver/documents',
  'invalid-url',
  'http://example.com'
];
const list = document.getElementById('urlList');
examples.forEach(url => {
  const valid = isValidURL(url);
  const div = document.createElement('div');
  div.className = 'url-item';
  div.innerHTML = `<span class="badge ${valid ? 'valid' : 'invalid'}">${valid ? 'true' : 'false'}</span><span>${url}</span>`;
  list.appendChild(div);
});

function checkCustomUrl() {
  const val = document.getElementById('urlInput').value;
  const res = document.getElementById('urlResult');
  const valid = isValidURL(val);
  res.textContent = valid ? '✓ URL валідний' : '✗ URL невалідний';
  res.className = `result show ${valid ? 'ok' : 'err'}`;
}

// ── TASK 4 ──────────────────────────────────────────
function openModal() {
  document.getElementById('overlay').classList.add('active');
  clearForm();
}

function closeModal() {
  document.getElementById('overlay').classList.remove('active');
}

function handleOverlayClick(e) {
  if (e.target === document.getElementById('overlay')) closeModal();
}

function clearForm() {
  ['regNick','regEmail','regPass','regPass2'].forEach(id => document.getElementById(id).value = '');
  ['nickError','emailError','passError','pass2Error'].forEach(id => {
    document.getElementById(id).classList.remove('show');
  });
}

function validateFormEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function submitForm() {
  const nick  = document.getElementById('regNick').value.trim();
  const email = document.getElementById('regEmail').value.trim();
  const pass  = document.getElementById('regPass').value;
  const pass2 = document.getElementById('regPass2').value;

  let valid = true;

  const nickErr  = document.getElementById('nickError');
  const emailErr = document.getElementById('emailError');
  const passErr  = document.getElementById('passError');
  const pass2Err = document.getElementById('pass2Error');

  nickErr.classList.remove('show');
  emailErr.classList.remove('show');
  passErr.classList.remove('show');
  pass2Err.classList.remove('show');

  if (!nick) { nickErr.classList.add('show'); valid = false; }

  if (!validateFormEmail(email)) {
    emailErr.textContent = email
      ? 'Будь ласка, введіть коректну електронну адресу.'
      : 'Поле обов\'язкове';
    emailErr.classList.add('show');
    valid = false;
  }

  if (!pass) { passErr.classList.add('show'); valid = false; }

  if (pass !== pass2) {
    pass2Err.textContent = pass2 ? 'Паролі не співпадають.' : 'Поле обов\'язкове';
    pass2Err.classList.add('show');
    valid = false;
  }

  if (valid) {
    console.log('Реєстрація успішна! Дані форми:', { nick, email });
    alert('Реєстрація успішна!\nДані виведено в консоль.');
    closeModal();
    const res = document.getElementById('modalResult');
    res.textContent = `✓ Користувач "${nick}" успішно зареєстрований`;
    res.className = 'result show ok';
  }
}

// Enter key support
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});
