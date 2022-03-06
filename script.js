const shareButtonDesktop = document.querySelector('.card__text__author__share');
const shareMenuDesktop = document.querySelector('.card__sharemenu__dt');

function myFunction(){
    shareMenuDesktop.classList.toggle('active');
    console.log('it worked');
}

shareButtonDesktop.addEventListener("click", myFunction);