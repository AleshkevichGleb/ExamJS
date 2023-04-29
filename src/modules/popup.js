const images = ['https://avatarfiles.alphacoders.com/126/126281.png', 'https://avatarfiles.alphacoders.com/290/290279.png', 'https://avatarfiles.alphacoders.com/151/151293.jpg',
'https://avatarfiles.alphacoders.com/153/153040.jpg', 'https://avatarfiles.alphacoders.com/656/65658.png', 'https://avatarfiles.alphacoders.com/283/283518.jpg',
'https://avatarfiles.alphacoders.com/280/280398.jpg', 'https://avatarfiles.alphacoders.com/228/228229.jpg', 'https://avatarfiles.alphacoders.com/220/220587.jpg',
'https://avatarfiles.alphacoders.com/209/209945.png', 'https://avatarfiles.alphacoders.com/126/126281.png', 'https://avatarfiles.alphacoders.com/207/207230.jpg'];

const titles = ['puppy', 'dog in the hat', 'horse', 'roses', 'koala from the cartoon', 'dog with cat', 'supermind',
                'puppy is running', 'coala','Mickey Mouse','puppy', 'nature'];

export const popup = () => {
    const app = document.querySelector('.app');
    images.forEach((image, index) =>{ 
        const item = document.createElement('div');
        item.className = 'item';
        
        const linkImage = document.createElement('a');
        linkImage.classList.add('item__linkImage')
        
        const img = document.createElement('img');
        img.setAttribute('src', image);
        img.classList.add('item__image');
        
        const titlePhoto = document.createElement('span');
        titlePhoto.innerHTML = titles[index];
        titlePhoto.className = 'item__title';
                        
        linkImage.append(img);
        item.append(linkImage, titlePhoto);
        app.prepend(item);
                
        showPoUp(img)
    })
}

const showPoUp = img => {
    img.addEventListener('click', event => {
        const {target} = event;
        event.preventDefault();

        const imagePath = target.src;
        
        const popup = document.createElement('div');
        popup.classList.add('popup');

        const popupItem = document.createElement('div');
        popupItem.classList.add('popup__item');
        popupItem.style.backgroundImage = `url(${imagePath})`;

        const closePopup = document.createElement('span');
        closePopup.innerHTML = '&#10006;';
        closePopup.classList.add('popup__close');

        popupItem.append(closePopup)

        closePopup.addEventListener('click', closePopUpCross);

        popup.append(popupItem);
        document.body.prepend(popup);

        document.body.style.overflow = "hidden";
        document.addEventListener('keyup', closePopUpEscape(popup));
        
        if(document.querySelector('.popup')) {
            document.addEventListener('click', closePopupClick);
        }

    })
}

const closePopUpCross = event => {
    const {target} = event;

    const parent = target.closest('.popup');
    parent.remove();
    document.body.style.overflowY = "scroll";
}

const closePopUpEscape = popup => event => {
    if(event.key === 'Escape') {
        popup.remove();
        document.body.style.overflowY = "scroll";
    }
}

const closePopupClick = ({target}) => {
    const popup = document.querySelector('.popup');
    
    if(target.className ==='popup') {
        popup.remove();
    }

    document.body.style.overflowY= "scroll";
}