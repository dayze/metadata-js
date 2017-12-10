window.addEventListener('load', function () {
  let body = document.body;
  let modal = document.querySelector('#modalContainerFlickr')
  let activators = document.querySelectorAll('.modalFlickrActivator')
  for (let i = 0; i < activators.length; i++) {
    activators[i].addEventListener('click', function (e) {
      if (modal.style.display === 'block') {
        body.style.overflowY = 'auto'
        modal.style.display = 'none'
      } else {
        body.style.overflowY = 'hidden'
        modal.style.display = 'block'
      }
    })
  }
})