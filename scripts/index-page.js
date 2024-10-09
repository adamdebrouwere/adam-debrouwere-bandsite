let comments = [
    {
        posted: "11/02/2023",
        name:"Victor Pinto",
        desctiption: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciat this for what it is and what it contains."
    },
    {   posted: "10/28/2023",
        name:"Christina Cabrera",
        desctiption: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."
    },
    {   posted: "10/20/2023",
        name:"Isaac Tadesse",
        desctiption: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."
    }
]

const commentsForm = document.querySelector(".conversation__form")

// const commentsList = document.querySelector("");

commentsForm.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("form submitted");
    console.log(event.target)
    console.log(event.target.name.value)
    console.log(event.target.comment.value)
    
    if(!(event.target.name.value && event.target.comment.value)) {
        alert("Please input name and comment.")
    }
    const newComment = {
        posted: Date.now(),
        name: event.target.name.value,
        desctiption: event.target.comment.value
    }

    console.log(newComment)
})

const loopAndAppenComments = () => {
    for(const comment in comments) {
        console.log(comment)
        const commentListItem = document.createElement('p');

        commentListItem.innerText = comments[comment].name
        commentsList.appendChild(commentListItem)
     }
} 








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