window.addEventListener("load", function () {
  let modals = document.querySelectorAll(".modal");
  for (let i = 0; i < modals.length; i++) {
    modals[i].addEventListener('click', function() {
      modals[i].parentNode.parentNode.parentNode.remove();
    })
  }
})