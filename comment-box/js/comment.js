document.getElementById("btn-post").addEventListener("click", () => {
  const newCommentFiled = document.getElementById("newComment");
  const commentContainer = document.getElementById("commentContainer");
  const newComment = document.createElement("p");
  newComment.innerText = newCommentFiled.value;
  commentContainer.appendChild(newComment);
  newCommentFiled.value = "";
});
