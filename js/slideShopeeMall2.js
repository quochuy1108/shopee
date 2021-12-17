const shopeeMall2List = document.querySelector('.shopeeMall2-list')
const shopeeMall2ListWidth = shopeeMall2List.offsetWidth - 18
const shopeeMall2Items = document.querySelectorAll('.shopeeMall2-item')
const shopeeMall2ItemsLength = shopeeMall2Items.length / 2

shopeeMall2List.style.width = shopeeMall2Items[0].offsetWidth * 12 + 'px'

const btnNext_shopeeMall2 = document.querySelector('.shopeeMall2-slide-btn .btn-right ')
const btnPrev_shopeeMall2 = document.querySelector('.shopeeMall2-slide-btn .btn-left ')

let positionXShopeeMall2 = 0;
let indexShopeeMall2 = 0;
let status4 = 'standing'




const nextSlideShopeeMall2 = () => {
    if (status4 == 'running') return false
    status4 = 'running'
    let move = 0
    positionXShopeeMall2 += -1 * shopeeMall2ListWidth
    if (indexShopeeMall2 < 2) {
        indexShopeeMall2++
        shopeeMall2List.style.transform = `translateX(${positionXShopeeMall2}px)`
        btnPrev_shopeeMall2.classList.add('appear')

        shopeeMall2List.addEventListener('transitionend', () => {
            move++;
            if (move == 1) { status4 = 'standing' }
        })

        if (indexShopeeMall2 === 2) {
            btnNext_shopeeMall2.classList.remove('appear')
            return
        }
        return
    }

}
const prevSlideShopeeMall2 = () => {
    if (status4 == 'running') return false
    status4 = 'running'
    let move = 0
    positionXShopeeMall2 += shopeeMall2ListWidth
    if (indexShopeeMall2 > 0) {
        indexShopeeMall2--
        shopeeMall2List.style.transform = `translateX(${positionXShopeeMall2}px)`
        btnNext_shopeeMall2.classList.add('appear')

        shopeeMall2List.addEventListener('transitionend', () => {
            move--;
            if (move == -1) { status4 = 'standing' }
            console.log(move);

        })


        if (indexShopeeMall2 === 0) {
            btnPrev_shopeeMall2.classList.remove('appear')
            return
        }

        return
    }
}

btnNext_shopeeMall2.addEventListener('click', nextSlideShopeeMall2)
btnPrev_shopeeMall2.addEventListener('click', prevSlideShopeeMall2)