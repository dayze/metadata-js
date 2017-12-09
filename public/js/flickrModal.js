window.addEventListener("load", function () {
  let modal = document.querySelector("#modalContainerFlickr")
  let activators = document.querySelectorAll(".modalFlickrActivator")
  for (let i = 0; i < activators.length; i++) {
    activators[i].addEventListener("click", function (e) {
      if (modal.style.display === "block") {
        modal.style.display = "none"
      } else {
        modal.style.display = "block"
      }
    })
  }
})