import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { images } from './images.js';
import '../css/styles.css';

const galleryContainer = document.querySelector('.gallery');

const galleryMarkup = images
  .map(
    ({ preview, original, description }) => `
<li class="gallery-item">
  <a class="gallery-link" href="${original}">
    <img
      class="gallery-image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>
`
  )
  .join('');

galleryContainer.innerHTML = galleryMarkup;

new SimpleLightbox.default('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  overlayOpacity: 1,
});
