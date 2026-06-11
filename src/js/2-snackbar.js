import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const delay = Number(form.elements.delay.value);
  const state = form.elements.state.value;

  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  })
    .then(value => {
      iziToast.success({
        title: 'OK',
        message: `Fulfilled promise in ${value}ms`,
        position: 'topRight',
      });
    })
    .catch(value => {
      iziToast.error({
        title: 'Error',
        message: `Rejected promise in ${value}ms`,
        position: 'topRight',
      });
    });

  form.reset();
});
