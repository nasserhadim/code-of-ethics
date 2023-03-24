function toggleExpand(id) {
  var section = document.getElementById(id);
  if (section.classList.contains('collapsed')) {
    section.classList.remove('collapsed');
    section.classList.add('expanded');
  } else {
    section.classList.remove('expanded');
    section.classList.add('collapsed');
  }
}

function showPreview(img) {
  var preview = document.createElement('img');
  preview.src = img.src;
  preview.classList.add('preview-image');
  img.parentNode.appendChild(preview);
  preview.style.left = img.offsetLeft + img.offsetWidth + 10 + 'px';
  preview.style.top = img.offsetTop + 'px';
  preview.style.display = 'block';
}

function hidePreview() {
  var preview = document.querySelector('.preview-image');
  if (preview) {
    preview.parentNode.removeChild(preview);
  }
}

