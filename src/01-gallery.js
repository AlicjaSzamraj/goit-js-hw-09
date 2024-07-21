import SimpleLightbox from 'simplelightbox';
import { images } from './images';
import 'simplelightbox/dist/simple-lightbox.min.css';

const createImage = ({ preview, original, description }) => {
  const li = document.createElement('li');
  li.classList.add('gallery-item');

  li.innerHTML = `<a class="gallery-link" href="${original}">
    <img 
    class="gallery-image"
    src="${preview}"
    alt="${description}"
    title="${description}"
    />
    </a>`;
  return li;
};

const initImages = images => {
  const imgs = images.map(createImage);

  const fragment = document.createDocumentFragment();
  fragment.append(...imgs);
  return fragment;
};

const main = () => {
  document.querySelector('.gallery').appendChild(initImages(images));
};

main();

const lightbox = new SimpleLightbox('ul.gallery li a', {
  captionType: 'alt',
  sourceAttr: 'href',
  overlay: true,
});
lightbox.on('show.simplelightbox', function () {
  console.log('lightbox on');
  setTimeout(() => {
    const caption = document.querySelector('.sl-caption');
    if (caption) {
      caption.style.display = 'block';
    }
  }, 250); // 250 milliseconds delay
});
