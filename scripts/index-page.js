const commentsForm = document.querySelector(".conversation__form");
const commentPosts = document.querySelector(".conversation-post__container");
const commentNameInput = document.querySelector(".conversation__name-input");
const commentCommentInput = document.querySelector(
  ".conversation__comment-input"
);

commentsForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const name = event.target.name.value;
  const comment = event.target.comment.value;

  commentNameInput.classList.remove("conversation__name-input--error");
  commentCommentInput.classList.remove("conversation__comment-input--error");

  if (!name && !comment) {
    commentNameInput.classList.add("conversation__name-input--error");
    commentCommentInput.classList.add("conversation__comment-input--error");
    alert("Please input name and comment.");
    return;
  } else if (!name) {
    commentNameInput.classList.add("conversation__name-input--error");
    alert("Please input name");
    return;
  } else if (!comment) {
    commentCommentInput.classList.add("conversation__comment-input--error");
    alert("Please input comment");
    return;
  }

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
  commentNameInput.classList.remove("conversation__name-input--error");
  commentCommentInput.classList.remove("conversation__comment-input--error");
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
    const profilePicContainer = document.createElement("div");
    profilePicContainer.classList.add(
      "conversation-post__profile-pic-container"
    );

    const profilePicImg = document.createElement("img");
    profilePicImg.classList.add("conversation-post__profile-pic-img");
    profilePicImg.alt = `${item.name}'s profile picture`;

    if (!profilePicImg.src) {
      profilePicImg.style.display = "none";
    }

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

    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("conversation-post__button-container");

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add(
      "conversation-post__btn",
      "conversation-post__btn--red"
    );
    deleteBtn.innerText = "DELETE";
    deleteBtn.setAttribute("data-id", item.id);

    const likeBtn = document.createElement("button");
    likeBtn.classList.add(
      "conversation-post__btn",
      "conversation-post__btn--blue"
    );
    likeBtn.innerText = "LIKE";
    likeBtn.setAttribute("data-id", item.id);

    const likeCounter = document.createElement("span");
    likeCounter.classList.add("conversation-post__like-counter");
    likeCounter.innerText = `Likes: ${item.likes}`;

    const lineBreak = document.createElement("div");
    lineBreak.classList.add("conversation-post__line-break");

    commentPosts.appendChild(commentPostsContent);
    commentPostsContent.appendChild(commentPostsLeft);
    commentPostsContent.appendChild(commentPostsRight);
    commentPostsRight.appendChild(commentPostsRightTop);
    commentPostsRight.appendChild(commentPostsRightBottom);
    profilePicContainer.appendChild(profilePicImg);
    commentPostsLeft.appendChild(profilePicContainer);
    commentPostsRightTop.appendChild(name);
    commentPostsRightTop.appendChild(postedTime);
    commentPostsRightBottom.appendChild(comment);
    buttonContainer.appendChild(likeCounter);
    buttonContainer.appendChild(likeBtn);
    buttonContainer.appendChild(deleteBtn);
    commentPostsRightBottom.appendChild(buttonContainer);
    commentPosts.appendChild(lineBreak);

    deleteBtn.addEventListener("click", async () => {
      const id = deleteBtn.getAttribute("data-id");

      const confirmed = confirm(
        "Are you sure you want to delete this comment?"
      );
      if (!confirmed) {
        return;
      }

      try {
        await bandSiteApi.deleteComment(id);
        const updatedComments = await bandSiteApi.getComments();
        loopAndAppend(updatedComments);
      } catch (error) {
        console.error("error deleting comment", error);
      }
    });

    likeBtn.addEventListener("click", async () => {
      const id = likeBtn.getAttribute("data-id");

      try {
        await bandSiteApi.likeComment(id);
        const updatedComments = await bandSiteApi.getComments();
        loopAndAppend(updatedComments);
      } catch (error) {
        console.error("Error liking comment", error);
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
