function toggleChat() {
  const chatbox = document.getElementById("chatbox");
  chatbox.style.display = chatbox.style.display === "none" ? "flex" : "none";
}

async function sendChat() {
  const input = document.getElementById("userInput").value;
  const res = await fetch("/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: input }),
  });
  const data = await res.json();
  const responseArea = document.getElementById("responseArea");
  responseArea.innerHTML += `<div>😎 ${input}</div><div>🤖 ${data.reply}</div><br>`;
  document.getElementById("userInput").value = "";
  responseArea.scrollTop = responseArea.scrollHeight;
}

document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("userInput");

  input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      sendChat();
    }
  });
});
