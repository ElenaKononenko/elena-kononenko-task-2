import refs from './refs';
const { button, gallery, dateNow, picture } = refs;

button.addEventListener('click', onStart);

function onStart() {
  pictureCount();
  getDate();
}
function pictureCount() {
  picture.textContent = gallery.children.length;
}
function getDate() {
  let date = new Date();
  const options = {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  };
  const dateString = date.toLocaleString('Uk-uk', options);
  dateNow.textContent = dateString;
}
