const register = document.querySelector('#register')
const login = document.querySelector('#log-in')
const modal__register = document.querySelector('.modall.register')
const modal__login = document.querySelector('.modall.log-in')
const overlay = document.querySelectorAll('.modall__overlay')
const register_login = document.querySelector('#register-login')
const login_register = document.querySelector('#login-register')
const modal__register__body = document.querySelectorAll('.modall__body')[0]
const modal__login__body = document.querySelectorAll('.modall__body')[1]
const btn_back = document.querySelectorAll('button.btn.btn--transparent')
const historyItem = document.querySelectorAll('.header__search-history-item a')
const auth_form_register = document.querySelector('.modall.register .auth-form')
const auth_form_login = document.querySelector('.modall.log-in .auth-form')
const auth_form_input = document.querySelectorAll('.auth-form__input')
const formRegister = document.querySelector('.modall.register .auth-form__form')
const formLogin = document.querySelector('.modall.log-in .auth-form__form')
const noticeFailLogin = document.querySelector('.noticeFailLogin')
const noticeSuccessRegister = document.querySelector('.noticeSuccessRegister')


for (let i = 0; i < btn_back.length; i++) {
    btn_back[i].onclick = function (e) {
        e.preventDefault();
        modal__register.classList.remove('hienlen');
        modal__login.classList.remove('hienlen');
        noticeLogin()
        noticeRegister()
    }
}

register.onclick = function () {
    modal__register.classList.add('hienlen');
    modal__register__body.style.animation = "scale ease-out 0.3s"

}

login.onclick = function () {
    modal__login.classList.add('hienlen')
    modal__login__body.style.animation = "scale ease-out 0.3s"
}

for (let i = 0; i < overlay.length; i++) {
    overlay[i].onclick = function () {
        modal__register.classList.remove('hienlen');
        modal__login.classList.remove('hienlen');
        modal__register__body.style.removeProperty('animation');
        modal__login__body.style.removeProperty('animation');
        noticeLogin()
        noticeRegister()
    }

}
register_login.onclick = function () {
    modal__register.classList.remove('hienlen');
    modal__login.classList.add('hienlen');
    modal__register__body.style.removeProperty('animation');
    modal__login__body.style.animation = "scale ease-out 0.3s"
    noticeLogin()
    noticeRegister()
}

login_register.onclick = function () {
    modal__login.classList.remove('hienlen');
    modal__register.classList.add('hienlen');
    modal__login__body.style.removeProperty('animation');
    modal__register__body.style.animation = "scale ease-out 0.3s"
    noticeLogin()
    noticeRegister()

}


auth_form_register.addEventListener('submit', (e) => {
    e.preventDefault();

    noticeRegister()
    setConfirmPassword()
    setErrorEmail()
    setErrorPassword()

    const email = auth_form_input[0].value
    const password = auth_form_input[1].value
    const confirmPassword = auth_form_input[2].value

    if (!email) {
        setErrorEmail('Email cannot be empty')

    }
    else if (!email.includes('@')) {
        setErrorEmail('Email must be have \'@\'')

    }

    if (!password) {
        setErrorPassword('Password cannot be empty')
    }
    else if (password.length < 6) {
        setErrorPassword('Password must be greater 6 characters')

    }
    if (!confirmPassword) {
        setConfirmPassword('ConfirmPassword cannot be empty')

    }
    else if (password !== confirmPassword) {
        setConfirmPassword('Password and ConfirmPassword must be match')


    }

    if (!email || !email.includes('@') || !password || password.length < 6 || !confirmPassword || password !== confirmPassword) {
        return
    }

    noticeRegister('Chúc mừng bạn đã đăng ký thành công')

    auth_form_input[0].value = ''
    auth_form_input[1].value = ''
    auth_form_input[2].value = ''

})

auth_form_login.addEventListener('submit', (e) => {
    e.preventDefault()

    noticeLogin()
    setErrorEmailLogin()
    setErrorPasswordLogin()

    const email = auth_form_input[3].value
    const password = auth_form_input[4].value


    if (!email) {
        setErrorEmailLogin('Email cannot be empty')
    }

    if (!password) {
        setErrorPasswordLogin('Password cannot be empty')

    }
    else if (password.length < 6) {
        setErrorPasswordLogin('Password must be greater 6 characters')

    }

    if (!email || !password || password.length < 6) {
        return
    }

    noticeLogin('Tài khoảng không tồn tại')

    auth_form_input[3].value = ''
    auth_form_input[4].value = ''
})


const setErrorEmail = (err) => {
    if (err) {
        auth_form_input[0].nextElementSibling.innerHTML = err
    } else {
        auth_form_input[0].nextElementSibling.innerHTML = ""
    }
}


const setErrorPassword = (err) => {
    if (err) {
        auth_form_input[1].nextElementSibling.innerHTML = err
    }
    else {
        auth_form_input[1].nextElementSibling.innerHTML = ""
    }
}

const setConfirmPassword = (err) => {
    if (err) {
        auth_form_input[2].nextElementSibling.innerHTML = err
    }
    else {
        auth_form_input[2].nextElementSibling.innerHTML = ""
    }
}

const setErrorEmailLogin = (err) => {
    if (err) {
        auth_form_input[3].nextElementSibling.innerHTML = err
    } else {
        auth_form_input[3].nextElementSibling.innerHTML = ""
    }
}


const setErrorPasswordLogin = (err) => {
    if (err) {
        auth_form_input[4].nextElementSibling.innerHTML = err
    }
    else {
        auth_form_input[4].nextElementSibling.innerHTML = ""
    }
}

const noticeLogin = (err) => {
    if (err) {
        noticeFailLogin.style.display = 'block'
        noticeFailLogin.textContent = err
    } else {
        noticeFailLogin.style.display = 'none'

    }
}

const noticeRegister = (err) => {
    if (err) {
        noticeSuccessRegister.style.display = 'block'
        noticeSuccessRegister.textContent = err
    } else {
        noticeSuccessRegister.style.display = 'none'
    }
}



// delete cart-item
const cart_item_remove = document.querySelectorAll('.header__cart-item-remove')
cart_item_remove.forEach(removeItem => {
    removeItem.onclick = function () {
        this.parentNode.parentNode.parentNode.style.display = 'none'
    }
})