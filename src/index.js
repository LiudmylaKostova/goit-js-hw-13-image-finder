import './styles.css';
import card from './templates/card.hbs';
import {default as apiService} from './apiService';


const refs = {
    form: document.querySelector('#search-form'),
    gallery: document.querySelector('.gallery'),
    button: document.querySelector('.button'),
}

function markupGallery(items) {
    const markup = card(items);
    refs.gallery.insertAdjacentHTML('beforeend', markup);
}

refs.form.addEventListener('submit', e => {
    e.preventDefault();
    const form = e.currentTarget;
    apiService.query = form.elements.query.value;
    refs.gallery.innerHTML = '';
    apiService.resetPage();
    refs.button.classList.add('is-hidden');

    apiService
        .fetchImages()
        .then(hits => {
            markupGallery(hits);
            refs.button.classList.remove('is-hidden');
        });
    
});

function getPage() {
    apiService.fetchImages().then(markupGallery);
};

refs.button.addEventListener('click', getPage);

const scrollDown = () => {
    window.scrollTo({
        top: document.documentElement.offsetHeight,
        left: 0,
        behavior: 'smooth'
    });
};

 refs.button.addEventListener('click', scrollDown);
 


    
  
