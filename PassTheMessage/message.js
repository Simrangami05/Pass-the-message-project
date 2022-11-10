(function () {
  //Select the input element
  const form = document.querySelector("#form");
  //Set up Submit Button
  form.addEventListener("submit", function (event) {
    // prevent the form's default submission action
    event.preventDefault();
    //Get user's input from from
    const message = document.querySelector("#text");
    const feedback = document.querySelector(".feedback");
    const messageContent = document.querySelector(".hello");

    if (message.value === " ") {
      feedback.classList.add("show");
      setTimeout(function () {
        feedback.classList.remove("show");
      }, 2000);
    } else {
      //Change message content and clear the message input
      messageContent.textContent = message.value;
      message.value = "";
    }
  });
})();
