from flask import Flask, request, jsonify, render_template

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/chat", methods=["POST"])
def chat():
    data = request.get_json()
    user_input = data.get("message", "")
    
    if "급식" in user_input:
        return jsonify({"reply": "오늘 급식은 된장국과 제육볶음입니다!"})
    elif "시간표" in user_input:
        return jsonify({"reply": "2학년 3반 시간표를 알려드릴게요!"})
    else:
        return jsonify({"reply": "무슨 말인지 잘 모르겠어요 😢"})

if __name__ == "__main__":
    app.run(debug=True)
