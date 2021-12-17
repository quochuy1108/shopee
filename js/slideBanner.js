const dots = document.querySelectorAll('.mainBanner-slide-dot')
const btnNext = document.querySelector('.mainBanner-slide-btnRight')
const btnPrev = document.querySelector('.mainBanner-slide-btnLeft')
const mainBannerSlide = document.querySelector('.mainBanner-slide')
let mainBannerSlideItem = document.querySelectorAll('.mainBanner-slide-item')
let slideWidth = mainBannerSlideItem[0].clientWidth

const infinitySlide = (slides, slide, slideWidth, dots, btnNext, btnPrev, first__Clone, last__Clone, classNameSLide) => {
    const getSlide = () => slide = document.querySelectorAll(`${classNameSLide}`)
    let index = 1
    let status = 'standing'
    const firstClone = slide[0].cloneNode(true);
    const lastClone = slide[slide.length - 1].cloneNode(true);
    firstClone.id = `${first__Clone}`
    lastClone.id = `${last__Clone}`

    slides.append(firstClone)
    slides.prepend(lastClone)

    slides.style.transform = `translateX(${-slideWidth * index}px)`

    const nextSlide = () => {
        if (status == 'running') return
        status = 'running'
        let move = 0
        index++;
        slides.style.transform = `translateX(${-slideWidth * index}px)`
        slides.style.transition = '.5s'
        slides.addEventListener('transitionend', (e) => {
            getSlide()

            move++
            if (move == 1) { status = 'standing' }
            dots.forEach(dot => {
                dot.classList.remove('dotActive')
            })
            dots[index - 1].classList.add('dotActive')
        })
    }

    const prevSlide = () => {
        if (status == 'running') return
        status = 'running'
        let move = 0
        index--;
        slides.style.transform = `translateX(${-slideWidth * index}px)`
        slides.style.transition = '.5s'
        slides.addEventListener('transitionend', (e) => {
            getSlide()

            move--
            if (move == -1) { status = 'standing' }
            dots.forEach(dot => {
                dot.classList.remove('dotActive')
            })
            dots[index - 1].classList.add('dotActive')
        })
    }


    slides.addEventListener('transitionend', (e) => {
        getSlide()
        if (slide[index].id === firstClone.id) {
            slides.style.transition = 'none'
            index = 1
            slides.style.transform = `translateX(${-slideWidth * index}px)`

        }
        if (slide[index].id === lastClone.id) {
            slides.style.transition = 'none'
            index = slide.length - 2
            slides.style.transform = `translateX(${-slideWidth * index}px)`

        }
    })


    dots.forEach(dot => {
        dot.onclick = function (e) {
            const dotIndex = e.target.dataset.index
            index = dotIndex
            slides.style.transform = `translateX(${-slideWidth * index}px)`
            slides.style.transition = '.7s'
            slides.addEventListener('transitionend', () => {
                dots.forEach(dot => {
                    dot.classList.remove('dotActive')
                })
                this.classList.add('dotActive')
            })
        }
    })


    setInterval(function () { nextSlide() }, 3000);

    btnNext.addEventListener('click', nextSlide)
    btnPrev.addEventListener('click', prevSlide)
}
infinitySlide(mainBannerSlide, mainBannerSlideItem, slideWidth, dots, btnNext, btnPrev, 'first-clone', 'last-clone', '.mainBanner-slide-item')



