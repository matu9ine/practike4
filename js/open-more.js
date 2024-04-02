const btnShowAll = document.querySelectorAll('.main__section_btn');
const sectionList = document.querySelectorAll('.main__section-list');
const mainDescriptionReadMore = document.querySelector('.main__description-read-more');
const mainDescriptionSize = document.querySelector('.main__description-size');
const mainDescriptionItem = document.querySelector('.main__description-item');

const SCREEN_WIDTH = 768;
const MAX_HEIGHT_DESCRIPTION = 176 + 'px';

for (let i = 0; i < btnShowAll.length; i++) {
btnShowAll[i].addEventListener('click', function() { 
  if (!btnShowAll[i].classList.contains('show-all')) {
  sectionList[i].style.height = 'auto';
  btnShowAll[i].classList.add('show-all');
  btnShowAll[i].textContent = 'Скрыть';
  } else {
    sectionList[i].style.height = MAX_HEIGHT_DESCRIPTION;
    btnShowAll[i].classList.remove('show-all');
    btnShowAll[i].textContent = 'Показать все';
    }
  });
}

mainDescriptionReadMore.addEventListener('click', function() {
  if (!mainDescriptionReadMore.classList.contains('show-all')) {
    mainDescriptionSize.style.height = 'auto';
    mainDescriptionReadMore.classList.add('show-all');
    mainDescriptionReadMore.textContent = 'Скрыть';
  } else {
    openReadMore();
    mainDescriptionReadMore.classList.remove('show-all');
    mainDescriptionReadMore.textContent = 'Читать дальше';
  }
});

function openReadMore() {
  if(window.innerWidth >= SCREEN_WIDTH) {
    mainDescriptionSize.style.height = MAX_HEIGHT_DESCRIPTION;
  } else {
    mainDescriptionSize.style.height = mainDescriptionItem.clientHeight + 'px';
  }
};
openReadMore();

window.addEventListener('resize', function() {
  openReadMore();
});