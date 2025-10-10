document.addEventListener('DOMContentLoaded', function () {
    // Элементы DOM
    const loginForm = document.querySelector('.login-form');
    const passwordInput = document.querySelector('input[type="password"]');
    const passwordToggle = document.getElementById('passwordToggle');
    const loginButton = document.querySelector('.login-button');
    const buttonLoader = document.getElementById('buttonLoader');
    const buttonText = document.querySelector('.button-text');

    // Переключение видимости пароля
    passwordToggle.addEventListener('click', function () {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);

        // Обновление иконки
        const icon = this.querySelector('svg');
        if (type === 'text') {
            icon.innerHTML = `
                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
                <line x1="1" y1="1" x2="23" y2="23"/>
            `;
        } else {
            icon.innerHTML = `
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                <circle cx="12" cy="12" r="3"/>
            `;
        }
    });

    // Обработка отправки формы
    loginForm.addEventListener('submit', function (e) {
        if (!validateForm()) {
            e.preventDefault();
            return;
        }

        // Показ состояния загрузки
        showLoadingState(true);

        // Симуляция задержки сети (удалите в продакшене)
        setTimeout(() => {
            showLoadingState(false);
        }, 2000);
    });

    // Валидация формы
    function validateForm() {
        let isValid = true;
        const emailInput = document.querySelector('input[type="email"]');
        const passwordInput = document.querySelector('input[type="password"]');

        // Валидация email
        if (!emailInput.value || !isValidEmail(emailInput.value)) {
            showError(emailInput, 'Введите корректный email');
            isValid = false;
        } else {
            clearError(emailInput);
        }

        // Валидация пароля
        if (!passwordInput.value || passwordInput.value.length < 6) {
            showError(passwordInput, 'Пароль должен содержать минимум 6 символов');
            isValid = false;
        } else {
            clearError(passwordInput);
        }

        return isValid;
    }

    // Валидация email
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Показать ошибку
    function showError(input, message) {
        const formGroup = input.closest('.form-group');
        let errorElement = formGroup.querySelector('.validation-error');

        if (!errorElement) {
            errorElement = document.createElement('span');
            errorElement.className = 'validation-error';
            formGroup.appendChild(errorElement);
        }

        errorElement.textContent = message;
        input.classList.add('input-validation-error');
    }

    // Очистить ошибку
    function clearError(input) {
        const formGroup = input.closest('.form-group');
        const errorElement = formGroup.querySelector('.validation-error');

        if (errorElement) {
            errorElement.remove();
        }

        input.classList.remove('input-validation-error');
    }

    // Показать/скрыть состояние загрузки
    function showLoadingState(show) {
        if (show) {
            loginButton.classList.add('loading');
            loginButton.disabled = true;
        } else {
            loginButton.classList.remove('loading');
            loginButton.disabled = false;
        }
    }

    // Real-time валидация
    const inputs = document.querySelectorAll('.form-input');
    inputs.forEach(input => {
        input.addEventListener('blur', function () {
            if (this.type === 'email') {
                if (this.value && !isValidEmail(this.value)) {
                    showError(this, 'Введите корректный email');
                } else {
                    clearError(this);
                }
            }

            if (this.type === 'password') {
                if (this.value && this.value.length < 6) {
                    showError(this, 'Пароль должен содержать минимум 6 символов');
                } else {
                    clearError(this);
                }
            }
        });

        input.addEventListener('input', function () {
            if (this.classList.contains('input-validation-error')) {
                clearError(this);
            }
        });
    });

    // Анимация появления полей
    animateFormElements();
});

// Анимация элементов формы
function animateFormElements() {
    const formGroups = document.querySelectorAll('.form-group');
    formGroups.forEach((group, index) => {
        group.style.opacity = '0';
        group.style.transform = 'translateY(20px)';

        setTimeout(() => {
            group.style.transition = 'all 0.5s ease';
            group.style.opacity = '1';
            group.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// Обработка клавиши Enter
document.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' && !e.target.closest('.login-button')) {
        const loginButton = document.querySelector('.login-button');
        loginButton.click();
    }
});