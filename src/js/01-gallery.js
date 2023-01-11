// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector('.gallery');
const items = [];

galleryItems.forEach(e => {
    const gallaryLink = document.createElement('a');
    gallaryLink.className = 'gallery__link';
    gallaryLink.href = e.original;

    const gallaryImage = document.createElement('img');
    gallaryImage.className = 'gallery__image';
    gallaryImage.src = e.preview;
    gallaryImage.alt = e.description;
    gallaryImage.title = e.description;

    gallaryLink.append(gallaryImage);
    items.push(gallaryLink);
})
gallery.append(...items);

new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    enableKeyboard: true,
    captionPosition: 'bottom'
})