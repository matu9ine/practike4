const modalFeedbackOpenBtn = document.querySelectorAll('.contacts__link--feedback');
const modalFeedback = document.querySelector('.modal--feedback');
const modalFeedbackCloseBtn = document.querySelector('.modal__close--feedback');
const overlayModal = document.querySelector('.overlay--modal');

const modalCallbackOpenBtn = document.querySelectorAll('.contacts__link--callback');
const modalCallback = document.querySelector('.modal--callback');
const modalCallbackCloseBtn = document.querySelector('.modal__close--callback');

const callBackModalFirstInput = modalCallback.querySelector('.form__input');
const feedBackModalFirstInput = modalFeedback.querySelector('.form__input');

const sideMenu = document.querySelector('.side-menu');
const overlayMenu = document.querySelector('.overlay--menu');

const ESC_KЕYCODE = 27;

export function escKeydownHandler(evt) {
  if (evt.keyCode === ESC_KЕYCODE) {
    console.log('aaa');
    if (modalFeedback.classList.contains('modal--active')) {
      closeFeedbackModal();
      return;
    }
    else if (modalCallback.classList.contains('modal--active')) {
      closeCallbackModal();
      return;
    }
    else if (sideMenu.classList.contains('side-menu--active')) {
      sideMenu.classList.remove('side-menu--active');
      overlayMenu.classList.remove('overlay--active');
      return;
    } else {
     return document.removeEventListener('keydown', escKeydownHandler);
    }
  }
};

//open modalWinBack
function openFeedbackModal() {
  modalFeedback.classList.add('modal--active');
  overlayModal.classList.add('overlay--active');
  feedBackModalFirstInput.focus();
  modalFeedbackCloseBtn.addEventListener('click', feedbackModalCloseButtonClickHandler);
  overlayModal.addEventListener('click', feedbackModalCloseButtonClickHandler);
  document.addEventListener('keydown', escKeydownHandler);
}

//close modalWinBack
function closeFeedbackModal() {
  modalFeedback.classList.remove('modal--active');
  overlayModal.classList.remove('overlay--active');
  modalFeedbackCloseBtn.removeEventListener('click', feedbackModalCloseButtonClickHandler);
  overlayModal.removeEventListener('click', feedbackModalCloseButtonClickHandler);
}

//open modalWinCall
function openCallbackModal() {
  modalCallback.classList.add('modal--active');
  overlayModal.classList.add('overlay--active');
  callBackModalFirstInput.focus();
  modalCallbackCloseBtn.addEventListener('click', callbackModalCloseButtonClickHandler);
  overlayModal.addEventListener('click', callbackModalCloseButtonClickHandler);
  document.addEventListener('keydown', escKeydownHandler);
}

//close modalWinCall
function closeCallbackModal() {
  modalCallback.classList.remove('modal--active');
  overlayModal.classList.remove('overlay--active');
  modalCallbackCloseBtn.removeEventListener('click', callbackModalCloseButtonClickHandler);
  overlayModal.removeEventListener('click', callbackModalCloseButtonClickHandler);
}

function feedbackModalOpenButtonClickHandler() {
  openFeedbackModal();
};

function feedbackModalCloseButtonClickHandler() {
  closeFeedbackModal();
}

function callbackModalOpenButtonClickHandler() {
  openCallbackModal();
}

function callbackModalCloseButtonClickHandler() {
  closeCallbackModal();
}

for (let j = 0; j < modalFeedbackOpenBtn.length; j++) {
  modalFeedbackOpenBtn[j].addEventListener('click', feedbackModalOpenButtonClickHandler);
}
for (let i = 0; i < modalCallbackOpenBtn.length; i++) {
  modalCallbackOpenBtn[i].addEventListener('click', callbackModalOpenButtonClickHandler)
}
function openModal(modal) {
  modal.classList.add('modal--active'); 
  overlayModal.classList.add('overlay--active');
  modal.querySelector('.form__input').focus();
  modal.querySelector('.modal__close').addEventListener('click', closeModalButtonClickHandler);
  overlayModal.addEventListener('click', closeModalButtonClickHandler);
  document.addEventListener('keydown', escKeydownHandler);
}


function closeModal(modal) {
  modal.classList.remove('modal--active'); 
  overlayModal.classList.remove('overlay--active');
  modal.querySelector('.modal__close').removeEventListener('click', closeModalButtonClickHandler);
  overlayModal.removeEventListener('click', closeModalButtonClickHandler);
}

function modalOpenButtonClickHandler(evt) {
  const modal = evt.target.closest('.modal');
  openModal(modal);
}

modalFeedbackOpenBtn.forEach(btn => {
  btn.addEventListener('click', modalOpenButtonClickHandler);
});

modalCallbackOpenBtn.forEach(btn => {
  btn.addEventListener('click', modalOpenButtonClickHandler);
});
