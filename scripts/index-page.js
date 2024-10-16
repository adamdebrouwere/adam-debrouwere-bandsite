// let comments = [
//     {
//         posted: "11/02/2023",
//         name:"Victor Pinto",
//         description: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciat this for what it is and what it contains."
//     },
//     {   posted: "10/28/2023",
//         name:"Christina Cabrera",
//         description: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."
//     },
//     {   posted: "10/20/2023",
//         name:"Isaac Tadesse",
//         description: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."
//     }
// ]

const commentsForm = document.querySelector(".conversation__form");
const commentPosts = document.querySelector(".conversation-post__container");

commentsForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const name = event.target.name.value;
  const comment = event.target.comment.value;

  if (!(name && comment)) {
    alert("Please input name and comment.");
    return;
  }

  // const newComment = {
  //     // posted: new Date (Date.now()).toLocaleDateString(),
  //     name: name
  //     comment: event.target.comment.value
  // }

  // comments.unshift(newComment)
  try {
    await bandSiteApi.postComment(name, comment);
    const displayComment = await bandSiteApi.getComments();

    loopAndAppend(displayComment);

    event.target.name.value = "";
    event.target.comment.value = "";
  } catch (error) {
    console.error("Error posting comment", error);
  }
});

const loopAndAppend = (items) => {
  commentPosts.innerText = "";

  items.forEach((item) => {
    const commentPostsContent = document.createElement("div");
    commentPostsContent.classList.add("conversation-post__content");

    const commentPostsLeft = document.createElement("div");
    commentPostsLeft.classList.add("conversation-post__content-left");

    const commentPostsRight = document.createElement("div");
    commentPostsRight.classList.add("conversation-post__content-right");

    const commentPostsRightTop = document.createElement("div");
    commentPostsRightTop.classList.add("conversation-post__content-right-top");

    const commentPostsRightBottom = document.createElement("div");
    commentPostsRightBottom.classList.add(
      "conversation-post__content-right-bottom"
    );

    const profilePic = document.createElement("img");
    profilePic.classList.add("conversation-post__profile-pic");
    profilePic.alt = `${item.name}'s profile picture`;

    const postedTime = document.createElement("span");
    postedTime.classList.add("conversation-post__posted");
    const date = new Date(item.timestamp);
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      timeZoneName: "short",
    };

    postedTime.innerText = date.toLocaleString(undefined, options);

    const name = document.createElement("p");
    name.classList.add("conversation-post__name");
    name.innerText = item.name;

    const comment = document.createElement("article");
    comment.classList.add("conversation-post__comment");
    comment.innerText = item.comment;

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("conversation-post__delete-btn");
    deleteBtn.innerText = "DELETE COMMENT";
    deleteBtn.setAttribute("data-id", item.id);

    const lineBreak = document.createElement("div");
    lineBreak.classList.add("conversation-post__line-break");

    commentPosts.appendChild(commentPostsContent);
    commentPostsContent.appendChild(commentPostsLeft);
    commentPostsContent.appendChild(commentPostsRight);
    commentPostsRight.appendChild(commentPostsRightTop);
    commentPostsRight.appendChild(commentPostsRightBottom);
    commentPostsLeft.appendChild(profilePic);
    commentPostsRightTop.appendChild(name);
    commentPostsRightTop.appendChild(postedTime);
    commentPostsRightBottom.appendChild(comment);
    commentPostsRightBottom.appendChild(deleteBtn);
    commentPosts.appendChild(lineBreak);

    deleteBtn.addEventListener("click", async () => {
      const confirmed =  confirm("Are you sure you want to delete this comment?");

      if (!confirmed) {
        return;
      }
      const id = deleteBtn.getAttribute("data-id");

      try {
        await bandSiteApi.deleteComment(id);
        const updatedComments = await bandSiteApi.getComments();
        loopAndAppend(updatedComments);
      } catch (error) {
        console.error("error deleting comment", error);
      }
    });
  });
};

bandSiteApi
  .getComments()
  .then((comments) => {
    loopAndAppend(comments);
  })
  .catch((error) => console.error("error getting comments", error));

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
