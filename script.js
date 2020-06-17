// statements
const cards = document.querySelectorAll('.card');
const modalOverlay = document.querySelector('.modal-overlay');
const modal = document.querySelector('.modal');





//event that opens modal when click modules
for (let card of cards) {
    card.addEventListener("click", () => {
        const contentId = card.getAttribute('id')
        modalOverlay.classList.toggle('active');
        modalOverlay.querySelector('iframe').src = `https://rocketseat.com.br/${contentId}`



    })
}

//event that closes modal
document.querySelector('.close-modal').addEventListener('click', () => {
    modalOverlay.classList.toggle('active');
    modal.classList.remove('active')


})





// maximize function
document.querySelector('.maximize-modal').addEventListener('click', () => {
    if (modal.classList.contains('maximize')) {
        modal.classList.toggle('active')
        modalOverlay.querySelector('iframe').classList.toggle('active')

    }
})




