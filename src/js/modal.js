import refs from './refs';
const {
  closeModal,
  modal,
  button,
  gallery,
  dateNow,
  picture,
  iconCloseImages,
  overlay,
  modalPicture,
} = refs;

gallery.addEventListener('click', onOpenModal);
closeModal.addEventListener('click', onCloseModal);

function onOpenModal(e) {
  if (e.target.nodeName === 'IMG') {
    modalPicture.src = e.target.src;
    modalPicture.alt = e.target.alt;
    window.addEventListener('keydown', onPressEscape);
    modal.classList.add('is_open');
    overlay.addEventListener('click', onBackDropClick);
  }
}
function onCloseModal() {
  window.removeEventListener('keydown', onPressEscape);
  modal.classList.remove('is_open');
}
function onBackDropClick(event) {
  if (event.target === event.currentTarget) {
    onCloseModal();
  }
}
function onPressEscape(event) {
  if (event.code === 'Escape') {
    onCloseModal();
  }
}
