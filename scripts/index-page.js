let comments = {}

















// document.addEventListener("DOMContentLoaded", () => {
//     const galleryImg = document.querySelectorAll('.gallery__img');
//     galleryImg.forEach(img => {
//         const mask = document.createElement('div');
//         mask.classList.add('gallery__mask');
//         img.parentElement.appendChild(mask);


//         img.addEventListener('mouseenter', (event) => {
//             const rect = img.getBoundingClientRect();
//             const mouseX = event.clientX - rect.left;
//             const mouseY = event.clientY - rect.top;

//             mask.style.background = `radial-gradient(circle at ${mouseX}px ${mouseY}px, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 30%, rgba(255, 255, 255, 1) 60%)`;
//         })

//         img.addEventListener('mouseleave', () => {
//             mask.style.background = 'rgba(255, 255, 255, 0)';
//         })
//     })
// })