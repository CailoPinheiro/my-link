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
        "<span id='pix' class='fade-in'>Copiado <svg viewBox='0 0 169 169'><path fill-rule='evenodd' d='M62.9204 11.1052C73.4964 -3.70175 95.503 -3.70175 106.08 11.1052L107.764 13.4625C109.625 16.0685 112.75 17.4639 115.933 17.1103L123.438 16.2763C140.329 14.3996 154.6 28.6716 152.724 45.5621L151.89 53.0672C151.537 56.25 152.932 59.3752 155.537 61.2366L157.895 62.9204C172.702 73.4964 172.702 95.503 157.895 106.08L155.537 107.764C152.932 109.625 151.537 112.75 151.89 115.933L152.724 123.438C154.6 140.329 140.329 154.6 123.438 152.724L115.933 151.89C112.75 151.537 109.625 152.932 107.764 155.537L106.08 157.895C95.503 172.702 73.4973 172.702 62.9204 157.895L61.2366 155.537C59.3752 152.932 56.25 151.537 53.0671 151.89L45.5621 152.724C28.6716 154.6 14.3996 140.329 16.2763 123.438L17.1103 115.933C17.4639 112.75 16.0685 109.625 13.4625 107.764L11.1052 106.08C-3.70175 95.503 -3.70175 73.4973 11.1052 62.9204L13.4625 61.2366C16.0685 59.3752 17.4639 56.25 17.1103 53.0671L16.2763 45.5621C14.3996 28.6716 28.6716 14.3996 45.5621 16.2763L53.0672 17.1103C56.25 17.4639 59.3752 16.0685 61.2366 13.4625L62.9204 11.1052ZM117.27 60.5699C120.722 64.0221 120.722 69.6193 117.27 73.0712L83.5118 106.829C79.1759 111.166 72.1448 111.166 67.8089 106.829L51.7301 90.7507C48.278 87.2988 48.278 81.7015 51.7301 78.2495C55.1823 74.7976 60.7793 74.7976 64.2315 78.2495L75.6604 89.6785L104.769 60.5699C108.221 57.1178 113.818 57.1178 117.27 60.5699Z' fill='var(--pix-check-color)'/></svg>";
    }, 100);

    // setTimeout(() => {
    //   pixContent.innerHTML =
    //     "<img src='assets/icon-copy.svg' alt='copiar'><span id='pix' class='fade-in'>Pix</span>";
    // }, 10000);
  }
}

// touch start e touch end na imagem

// $(document).ready(function() {
//   $("#profile-img").on("tap", function() {
//     $(this).addClass("active");
//     setTimeout(() => {
//       $(this).removeClass("active");
//     }, 2000);
//   });
// });








// setTimeout(() => {
    
// }, 3000);