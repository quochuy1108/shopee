const slideFlashSaleList = document.querySelector('.flashSale-list')
const slideFlashSaleListWidth = slideFlashSaleList.offsetWidth
const slideFlashSaleItems = document.querySelectorAll('.flashSale-item')
const slideFlashSaleItemsLength = slideFlashSaleItems.length / 2

slideFlashSaleList.style.width = slideFlashSaleItems[0].offsetWidth * 18 + 'px'

const btnNext_slideFlashSale = document.querySelector('.flashSale-slide-btn .btn-right ')
const btnPrev_slideFlashSale = document.querySelector('.flashSale-slide-btn .btn-left ')

let positionXFlashSale = 0;
let indexFlashSale = 0;
let status2 = 'standing'




const nextSlideFlashSale = () => {
    if (status2 == 'running') return false
    status2 = 'running'
    let move = 0
    positionXFlashSale += -1 * slideFlashSaleListWidth
    if (indexFlashSale < 2) {
        indexFlashSale++
        slideFlashSaleList.style.transform = `translateX(${positionXFlashSale}px)`
        btnPrev_slideFlashSale.classList.add('appear')

        slideFlashSaleList.addEventListener('transitionend', () => {
            move++;
            if (move == 1) { status2 = 'standing' }

        })

        if (indexFlashSale === 2) {
            btnNext_slideFlashSale.classList.remove('appear')
            return
        }
        console.log(positionXFlashSale);
        return
    }


}
const prevSlideFlashSale = () => {
    if (status2 == 'running') return false
    status2 = 'running'
    let move = 0
    positionXFlashSale += slideFlashSaleListWidth
    if (indexFlashSale > 0) {
        indexFlashSale--
        slideFlashSaleList.style.transform = `translateX(${positionXFlashSale}px)`
        btnNext_slideFlashSale.classList.add('appear')
        slideFlashSaleList.addEventListener('transitionend', () => {
            move--;
            if (move == -1) { status2 = 'standing' }
        })
        if (indexFlashSale === 0) {
            btnPrev_slideFlashSale.classList.remove('appear')
            return
        }
        return
    }
    // btnPrev_slideFlashSale.classList.remove('appear')
    // btnNext_slideFlashSale.classList.add('appear')
}

btnNext_slideFlashSale.addEventListener('click', nextSlideFlashSale)
btnPrev_slideFlashSale.addEventListener('click', prevSlideFlashSale)

