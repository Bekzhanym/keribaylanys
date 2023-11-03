var chat = document.querySelector(".chat-content");
var messages = chat.children;
var newMessageForm = document.querySelector(".chat-form");
var newMessageInput = document.querySelector(".chat-form-input");
var messageTemplate = document.getElementById("message-template").content;
var newMessageTemplate = messageTemplate.querySelector(".chat-message");
newMessageForm.addEventListener("submit", function(evt) {
  evt.preventDefault();
  var messageText = newMessageInput.value;
  var message = newMessageTemplate.cloneNode(true);
  var messageBox = message.querySelector("p");
  messageBox.textContent = messageText;
  chat.appendChild(message);
  var deleteButton = message.querySelector(".chat-message-button");
  deleteButton.addEventListener("click", function() {
    message.remove();
  });
  newMessageInput.value = "";
});