export function createGalleryCard(images) {
  return images
    .map(
      image => `<li class="gallery__item">
        <img class="gallery-img" alt="${image.alt_description}" src="${image.urls.small}" />
      </li>`
    )
    .join('');
}
