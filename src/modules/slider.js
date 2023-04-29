const input = document.querySelector('.input');
const sliderContainer = document.querySelector('.slider__container');
const buttonsContainer = document.querySelector('.sliderBlock__buttons');
const next = document.querySelector('.slider__right');


let reader = new FileReader();

export const slider = () => {
    addPhoto();
}

const addPhoto = () => {
    input.addEventListener('change', () => {
        let file = input.files[0];
        reader.readAsDataURL(file)
        reader.addEventListener('load', readerLoad)
    })
}

const readerLoad = () => {
    let image = document.createElement('img');
    image.setAttribute('src', reader.result)
    image.className = 'slider__image';
    sliderContainer.prepend(image);

    if(sliderContainer.childNodes.length > 1) {
        let offset = 0;
        buttonsContainer.style.display = 'flex';
        next.addEventListener('click', moveSlideRight(offset, image));
    }

}

const slideX = (offset) => sliderContainer.style.transform = `translateX(-${offset}px)`;


const moveSlideRight = (offset, image) => event => {
    offset += image.clientWidth;

    if(offset >= sliderContainer.clientWidth) {
        offset = 0;
    }
    
    slideX(offset);
}
