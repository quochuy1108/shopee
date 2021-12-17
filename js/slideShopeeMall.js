const shopeeMallSlide = document.querySelector('.shopeeMall-slide')
const dotsShopeeMall = document.querySelectorAll('.shopeeMall-slide-dot')
const btnNextShopeeMall = document.querySelector('.shopeeMall-slide-btnRight')
const btnPrevShopeeMall = document.querySelector('.shopeeMall-slide-btnLeft')
let shopeeMallSlideItem = document.querySelectorAll('.shopeeMall-slide-item')
let shopeeMallSlideItemWidth = shopeeMallSlideItem[0].clientWidth


infinitySlide(shopeeMallSlide, shopeeMallSlideItem, shopeeMallSlideItemWidth, dotsShopeeMall, btnNextShopeeMall, btnPrevShopeeMall, 'first__clone2', 'last__clone2', '.shopeeMall-slide-item')



