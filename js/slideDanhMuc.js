const slideDanhMucList = document.querySelector('.danhMuc-list')
const slideDanhMucItems = document.querySelectorAll('.danhMuc-item')
const slideDanhMucItemsLength = slideDanhMucItems.length / 2

slideDanhMucList.style.width = slideDanhMucItems[0].offsetWidth * 13 + 'px'

const btnNext_slideDanhMuc = document.querySelector('.danhMuc-slide-btn .btn-right ')
const btnPrev_slideDanhMuc = document.querySelector('.danhMuc-slide-btn .btn-left ')



const nextSlideDanhMuc = () => {
    slideDanhMucList.style.transform = `translateX(${-1 * slideDanhMucItems[0].offsetWidth * 3}px)`
    btnNext_slideDanhMuc.classList.remove('appear')
    btnPrev_slideDanhMuc.classList.add('appear')
}
const prevSlideDanhMuc = () => {
    slideDanhMucList.style.transform = `translateX(0)`
    btnPrev_slideDanhMuc.classList.remove('appear')
    btnNext_slideDanhMuc.classList.add('appear')
}

btnNext_slideDanhMuc.addEventListener('click', nextSlideDanhMuc)
btnPrev_slideDanhMuc.addEventListener('click', prevSlideDanhMuc)