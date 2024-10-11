document.addEventListener('DOMContentLoaded', function() {
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const emailPlaceholder = document.querySelector('.email-group .placeholder');
  const passwordPlaceholder = document.querySelector('.password-group .placeholder');
  const emailIcon = document.querySelector('.email-icon');
  const passwordIcon = document.querySelector('.password-icon');

  const hidePlaceholderAndIcon = (input, placeholder, icon) => {
      placeholder.style.display = 'none';
      icon.classList.add('hidden'); // Sembunyikan ikon dengan menambahkan kelas
  };

  const showPlaceholderAndIcon = (input, placeholder, icon) => {
      if (!input.value) {
          placeholder.style.display = 'block';
          icon.classList.remove('hidden'); // Tampilkan ikon dengan menghapus kelas
      }
  };

  emailInput.addEventListener('focus', () => {
      hidePlaceholderAndIcon(emailInput, emailPlaceholder, emailIcon);
  });

  emailInput.addEventListener('blur', () => {
      showPlaceholderAndIcon(emailInput, emailPlaceholder, emailIcon);
  });

  passwordInput.addEventListener('focus', () => {
      hidePlaceholderAndIcon(passwordInput, passwordPlaceholder, passwordIcon);
  });

  passwordInput.addEventListener('blur', () => {
      showPlaceholderAndIcon(passwordInput, passwordPlaceholder, passwordIcon);
  });
});