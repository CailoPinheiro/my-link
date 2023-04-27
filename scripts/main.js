const pixContent = document.getElementById("pixContent");
const pix = "bce23200-89bc-42e8-b15c-62914cfdaa9c";

function copiar() {
  navigator.clipboard
    .writeText(pix)
    .then(swap)
    .catch((err) => console.error("Erro ao copiar:", err));
}

function swap() {
  if (
    navigator.clipboard &&
    typeof navigator.clipboard.writeText === "function"
  ) {
    setTimeout(() => {
      pixContent.innerHTML =
        "<span id='pix' class='fade-in'>Copiado <img src='assets/icon-check.svg' alt'check'></span>";
    }, 100);

    // setTimeout(() => {
    //   pixContent.innerHTML =
    //     "<img src='assets/icon-copy.svg' alt='copiar'><span id='pix' class='fade-in'>Pix</span>";
    // }, 10000);
  }
}

// touch start e touch end na imagem

const profileImg = document.querySelector('#profile img');

let timeoutId;

profileImg.addEventListener('mousedown', function() {
  this.classList.add('active');
  
  timeoutId = setTimeout(() => {
    this.classList.remove('active');
  }, 2000);
});

profileImg.addEventListener('mouseup', function() {
  clearTimeout(timeoutId);
  this.classList.remove('active');
});







// setTimeout(() => {
    
// }, 3000);