// const pixContent = document.getElementById("pixContent");
// const pix = "bce23200-89bc-42e8-b15c-62914cfdaa9c";

// swap();
// function copiar() {
//   navigator.clipboard.writeText(pix);
//   swap();
// }

// function swap() {
//   if (navigator.readText(pix)) {
//     const copied = "<spanid='pix'>Copiado!</span>";
//     pixContent.innerHTML = copied;
//     console.log("mds")
//   } else {
//     setTimeout(() => {
//         pixContent.innerHTML = "";
//     }, 500);
//   }
// }

const pixContent = document.getElementById("pixContent");
const pix = "bce23200-89bc-42e8-b15c-62914cfdaa9c";

function copiar() {
  navigator.clipboard.writeText(pix)
    .then(swap)
    .catch((err) => console.error('Erro ao copiar:', err));
}

function swap() {
  if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
    const copied = "<span id='pix'>Copiado <img src='assets/icon-check.svg' alt'check'></span>";
    pixContent.innerHTML = copied;
  } else {
    setTimeout(() => {
      pixContent.innerHTML = "<img src='assets/icon-copy.svg' alt='copiar'><span id='pix'>Pix</span>";
    }, 500);
  }
}

