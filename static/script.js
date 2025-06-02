async function sendChat() {
  const input = document.getElementById("userInput").value;
  const res = await fetch("/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: input }),
  });
  const data = await res.json();
  document.getElementById("responseArea").innerText = "챗봇: " + data.reply;
}
