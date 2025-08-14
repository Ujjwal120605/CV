

function openCertModal(imgSrc, title) {
  const modal = document.createElement('div');
  modal.style.position = 'fixed';
  modal.style.top = '0';
  modal.style.left = '0';
  modal.style.width = '100%';
  modal.style.height = '100%';
  modal.style.background = 'rgba(0,0,0,0.8)';
  modal.style.display = 'flex';
  modal.style.alignItems = 'center';
  modal.style.justifyContent = 'center';
  modal.style.zIndex = '1000';

  const img = document.createElement('img');
  img.src = imgSrc;
  img.style.maxWidth = '90%';
  img.style.maxHeight = '90%';
  img.style.border = '5px solid white';
  img.style.borderRadius = '10px';

  modal.appendChild(img);
  document.body.appendChild(modal);

  modal.onclick = () => {
      modal.remove();
  };
}
function openCertModal(src) {
  document.getElementById("certModal").style.display = "block";
  document.getElementById("certModalImg").src = src;
}

function closeCertModal() {
  document.getElementById("certModal").style.display = "none";
}
