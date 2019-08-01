let recContent = document.querySelectorAll('.testimonial');
let recPhoto = document.querySelectorAll('.author-photo');
for (i = 0; i < recPhoto.length; i++) {
    recPhoto[i].addEventListener('click', toggleRec, false);
}
function unselectRest() {    
    let selectedPhoto = document.querySelector('.selected');
    let selectedContent= document.querySelector('.visible');
    selectedPhoto.classList.remove('selected');
    selectedPhoto.classList.add('unselected');
    selectedContent.classList.remove('visible');
    selectedContent.classList.add('hidden');
}
function toggleRec() {
    let recId = this.id;
    unselectRest();
    if (this.classList.contains('unselected')) {
        this.classList.remove('unselected');
        this.classList.add('selected');
        let recIdContent = 't' + recId;
        document.getElementById(recIdContent).classList.remove('hidden');
        document.getElementById(recIdContent).classList.add('visible');
    }
}