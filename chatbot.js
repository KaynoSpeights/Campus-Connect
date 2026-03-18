function sendMessage(){

let input = document.getElementById("userInput");
let message = input.value;

if(message === "") return;

let chat = document.getElementById("chatMessages");

/* user message */

let userMsg = document.createElement("div");
userMsg.className = "user-message";
userMsg.innerText = message;
chat.appendChild(userMsg);

/* bot response */

let botMsg = document.createElement("div");
botMsg.className = "bot-message";

let response = "I'm not sure how to help with that.";

message = message.toLowerCase();

if(message.includes("hair")){
response = "You can find hair services under 'Browse Services'.";
}

else if(message.includes("food") || message.includes("meal")){
response = "Students offering home cooked meals are listed in the services section.";
}

else if(message.includes("tutor")){
response = "Check the tutoring services in the Browse Services page.";
}

else if(message.includes("register")){
response = "You can register your own student business using the Register Business page.";
}

else if(message.includes("services")){
response = "Click the Browse Services button to see available student services.";
}

botMsg.innerText = response;
chat.appendChild(botMsg);

chat.scrollTop = chat.scrollHeight;

input.value = "";

}