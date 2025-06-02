function toggleChat() {
  const box = document.getElementById("chatbox");
  box.style.display = box.style.display === "none" ? "block" : "none";
}

function appendMessage(role, text) {
  const log = document.getElementById("chatLog");
  const bubble = document.createElement("div");
  bubble.className = role === "user" ? "user-bubble" : "bot-bubble";
  bubble.innerText = (role === "user" ? "😎 " : "🤖 ") + text;
  log.appendChild(bubble);
  log.scrollTop = log.scrollHeight;
}

async function sendChat() {
  const input = document.getElementById("userInput");
  const text = input.value.trim();
  if (!text) return;

  appendMessage("user", text);

  const res = await fetch("/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: text }),
  });
  const data = await res.json();

  appendMessage("bot", data.reply);
  input.value = "";
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("userInput").addEventListener("keydown", function (e) {
    if (e.key === "Enter") sendChat();
  });
});
