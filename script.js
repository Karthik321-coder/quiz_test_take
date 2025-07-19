"use strict";

// --- 60 questions, 10 per topic ---
const QUESTION_BANK = {
  general: [
    { question: "What is the capital of France?", options: ["Paris","Rome","Berlin","Madrid"], answer: "Paris", difficulty: "Easy" },
    { question: "Who wrote 'Hamlet'?", options: ["Shakespeare","Newton","Einstein","Darwin"], answer: "Shakespeare", difficulty: "Medium" },
    { question: "What is the largest animal on Earth?", options: ["Elephant","Blue Whale","Giraffe","Dinosaur"], answer: "Blue Whale", difficulty: "Easy" },
    { question: "The Great Wall of China is visible from?", options: ["Moon", "Space", "Both", "Neither"], answer: "Neither", difficulty: "Medium" },
    { question: "Who painted Mona Lisa?", options: ["Da Vinci", "Picasso", "Van Gogh", "Michelangelo"], answer: "Da Vinci", difficulty: "Easy" },
    { question: "What is the boiling point of water?", options: ["90°C", "100°C", "120°C", "80°C"], answer: "100°C", difficulty: "Easy" },
    { question: "Which country gifted the Statue of Liberty?", options: ["Spain", "Brazil", "France", "Italy"], answer: "France", difficulty: "Easy" },
    { question: "What is H2O?", options: ["Hydrogen", "Oxygen", "Water", "Helium"], answer: "Water", difficulty: "Easy" },
    { question: "What is the world’s largest desert?", options: ["Sahara", "Arctic", "Gobi", "Antarctica"], answer: "Antarctica", difficulty: "Medium" },
    { question: "Which gas is most abundant in Earth’s atmosphere?", options: ["Oxygen","Carbon Dioxide","Nitrogen","Hydrogen"], answer: "Nitrogen", difficulty: "Medium" }
  ],
  geography: [
    { question: "Which is the largest continent?", options: ["Asia", "Africa", "Europe", "Antarctica"], answer: "Asia", difficulty: "Easy" },
    { question: "Where is the Amazon rainforest?", options: ["India", "Brazil", "Congo", "Peru"], answer: "Brazil", difficulty: "Easy" },
    { question: "The tallest mountain in the world is?", options: ["K2","Everest","Kilimanjaro","Matterhorn"], answer: "Everest", difficulty: "Easy" },
    { question: "What is the capital of Australia?", options: ["Sydney", "Canberra", "Melbourne", "Perth"], answer: "Canberra", difficulty: "Easy" },
    { question: "Which ocean is on India's south?", options: ["Pacific", "Indian", "Atlantic", "Arctic"], answer: "Indian", difficulty: "Easy" },
    { question: "Where are the Pyramids of Giza?", options: ["Iraq", "Iran", "Egypt", "Sudan"], answer: "Egypt", difficulty: "Easy" },
    { question: "Which river is longest in the world?", options: ["Amazon", "Yangtze", "Nile", "Ganga"], answer: "Nile", difficulty: "Medium" },
    { question: "Which US state is called 'Sunshine State'?", options: ["California", "Nevada", "Florida", "Texas"], answer: "Florida", difficulty: "Easy" },
    { question: "In which continent is Mount Kilimanjaro?", options: ["Asia", "Europe", "Africa", "Australia"], answer: "Africa", difficulty: "Medium" },
    { question: "Which country is both a continent and a country?", options: ["Canada","Australia","Spain","Russia"], answer: "Australia", difficulty: "Easy" }
  ],
  sports: [
    { question: "Football (soccer) team has how many players?", options: ["9","10","11","12"], answer: "11", difficulty: "Easy" },
    { question: "Who won FIFA World Cup 2018?", options: ["Brazil","Germany","France","Argentina"], answer: "France", difficulty: "Medium" },
    { question: "The Olympics are held every _ years.", options: ["2","3","4","5"], answer: "4", difficulty: "Easy" },
    { question: "Sachin Tendulkar played which sport?", options: ["Hockey","Tennis","Cricket","Badminton"], answer: "Cricket", difficulty: "Easy" },
    { question: "NBA is a league for which sport?", options: ["Baseball","Basketball","Football","Hockey"], answer: "Basketball", difficulty: "Easy" },
    { question: "Wimbledon is held in?", options: ["France","Italy","England","Spain"], answer: "England", difficulty: "Easy" },
    { question: "M.S. Dhoni held which captaincy?", options: ["India Cricket","New Zealand Rugby","Australia Hockey","Pakistani Badminton"], answer: "India Cricket", difficulty: "Medium" },
    { question: "P.V. Sindhu is famous for?", options: ["Wrestling","Weightlifting","Badminton","Shooting"], answer: "Badminton", difficulty: "Easy" },
    { question: "Who is called the Flying Sikh?", options: ["Milkha Singh","P.T. Usha","Abhinav Bindra","Mary Kom"], answer: "Milkha Singh", difficulty: "Medium" },
    { question: "Which sport uses a 'shuttlecock'?", options: ["Badminton","Tennis","Squash","Basketball"], answer: "Badminton", difficulty: "Easy" }
  ],
  "social-studies": [
    { question: "When did India gain independence?", options: ["1945","1947","1950","1930"], answer: "1947", difficulty: "Easy" },
    { question: "Who is called the Father of Nation?", options: ["Ambedkar","Nehru","Tagore","Gandhi"], answer: "Gandhi", difficulty: "Easy" },
    { question: "The Indian Constitution came into effect in?", options: ["1948","1949","1950","1952"], answer: "1950", difficulty: "Medium" },
    { question: "Who wrote Indian National Anthem?", options: ["Gandhi","Nehru","Tagore","Subhas Bose"], answer: "Tagore", difficulty: "Easy" },
    { question: "Capital of Karnataka is?", options: ["Mysore","Bangalore","Chennai","Hyderabad"], answer: "Bangalore", difficulty: "Easy" },
    { question: "Republic Day in India?", options: ["Jan 26","Aug 15","May 1","Dec 25"], answer: "Jan 26", difficulty: "Easy" },
    { question: "Which is the largest democracy?", options: ["USA","UK","India","Russia"], answer: "India", difficulty: "Medium" },
    { question: "Who led Salt March?", options: ["Bhagat Singh","Sardar Patel","Gandhi","Rajaji"], answer: "Gandhi", difficulty: "Medium" },
    { question: "India’s national emblem is from?", options: ["Red Fort","Qutub Minar","Sarnath Lion Capital","Lotus Temple"], answer: "Sarnath Lion Capital", difficulty: "Easy" },
    { question: "Taj Mahal is in?", options: ["Delhi","Hyderabad","Agra","Lucknow"], answer: "Agra", difficulty: "Easy" }
  ],
  science: [
    { question: "Which planet is called the 'Red Planet'?", options: ["Earth","Venus","Mars","Jupiter"], answer: "Mars", difficulty: "Easy" },
    { question: "What is the freezing point of water?", options: ["0°C","10°C","100°C","-10°C"], answer: "0°C", difficulty: "Easy" },
    { question: "Normal human body temperature?", options: ["96°F","98.6°F","99.6°F","102°F"], answer: "98.6°F", difficulty: "Easy" },
    { question: "Who discovered gravity?", options: ["Newton","Einstein","Tesla","Darwin"], answer: "Newton", difficulty: "Easy" },
    { question: "What gas do plants produce?", options: ["Oxygen","Nitrogen","Methane","Ammonia"], answer: "Oxygen", difficulty: "Easy" },
    { question: "Smallest unit of life?", options: ["Tissue","Cell","Atom","Organ"], answer: "Cell", difficulty: "Easy" },
    { question: "Which of these is a mammal?", options: ["Snake","Frog","Bat","Shark"], answer: "Bat", difficulty: "Medium" },
    { question: "Sun is a?", options: ["Planet","Star","Satellite","Asteroid"], answer: "Star", difficulty: "Easy" },
    { question: "Vitamin D is produced from?", options: ["Iron", "Sunlight", "Life", "Calcium"], answer: "Sunlight", difficulty: "Medium" },
    { question: "Who invented the telephone?", options: ["Newton","Edison","Tesla","Bell"], answer: "Bell", difficulty: "Easy" }
  ],
  technology: [
    { question: "HTML stands for?", options: ["HighText Machine Language","Hyper Text Markup Language","Hyper Tabular Markup Language","None"], answer: "Hyper Text Markup Language", difficulty: "Easy" },
    { question: "Who is known as Father of Computer?", options: ["Bill Gates","Charles Babbage","Steve Jobs","Alan Turing"], answer: "Charles Babbage", difficulty: "Easy" },
    { question: "What is the brain of computer?", options: ["RAM","CPU","Keyboard","Monitor"], answer: "CPU", difficulty: "Easy" },
    { question: "What does ROM stand for?", options: ["Read Only Memory","Raft Only Memory","Read Option Memory","None"], answer: "Read Only Memory", difficulty: "Easy" },
    { question: "Which company created Windows?", options: ["Apple","IBM","Microsoft","Google"], answer: "Microsoft", difficulty: "Easy" },
    { question: "What is the shortcut for 'copy'?", options: ["Ctrl+X","Ctrl+V","Ctrl+C","Ctrl+P"], answer: "Ctrl+C", difficulty: "Easy" },
    { question: "First electronic computer was?", options: ["ENIAC","UNIVAC","EDVAC","EDSAC"], answer: "ENIAC", difficulty: "Medium" },
    { question: "Which language is mostly for Apple iOS apps?", options: ["Swift","Kotlin","Java","Python"], answer: "Swift", difficulty: "Medium" },
    { question: "Binary system is based on?", options: ["2","8","10","16"], answer: "2", difficulty: "Medium" },
    { question: "What protocol is used for web?", options: ["HTTP","FTP","SMTP","SFTP"], answer: "HTTP", difficulty: "Easy" }
  ]
};

// --- APP LOGIC ---
class QuizApp {
  constructor() {
    this.validUsers = { student: "quiz2025" };
    this.currentUser = null;
    this.selectedCategory = null;
    this.questions = [];
    this.index = 0;
    this.score = 0;
    this.timer = null;
    this.timeElapsed = 0;
  }

  login(username, password) {
    if (this.validUsers[username] === password) {
      this.currentUser = username;
      document.getElementById("loggedUser").textContent = username;
      document.getElementById("loginContainer").style.display = "none";
      document.getElementById("quizContainer").style.display = "block";
      this.showSection("quiz");
    } else {
      alert("Invalid username or password");
    }
  }

  logout() {
    clearInterval(this.timer);
    location.reload();
  }

  showSection(section) {
    document.getElementById("quizSection").style.display = section === "quiz" ? "block" : "none";
    document.getElementById("aboutSection").style.display = section === "about" ? "block" : "none";
    document.querySelectorAll(".nav-btn").forEach(btn => btn.classList.remove("active"));
    document.querySelector(`.nav-btn[onclick="showSection('${section}')"]`)?.classList.add("active");
  }

  selectCategory(category) {
    this.selectedCategory = category;
    document.getElementById("startQuizBtn").disabled = false;
  }

  startQuiz() {
    if (!this.selectedCategory || !QUESTION_BANK[this.selectedCategory]) {
      alert("Please select a valid topic.");
      return;
    }
    this.questions = [...QUESTION_BANK[this.selectedCategory]];
    this.index = 0;
    this.score = 0;
    this.timeElapsed = 0;

    document.getElementById("startScreen").style.display = "none";
    document.getElementById("questionScreen").style.display = "block";
    document.getElementById("resultsScreen").style.display = "none";
    document.getElementById("totalQ").textContent = this.questions.length;
    this.updateScore();
    this.loadQuestion();
    this.startTimer();
  }

  startTimer() {
    let timeLeft = 30;
    document.getElementById("timer").textContent = timeLeft;

    clearInterval(this.timer);
    this.timer = setInterval(() => {
      timeLeft--;
      this.timeElapsed++;
      document.getElementById("timer").textContent = timeLeft;
      if (timeLeft <= 0) this.skipQuestion();
    }, 1000);
  }

  loadQuestion() {
    const q = this.questions[this.index];
    if (!q) return;

    document.getElementById("questionText").textContent = q.question;
    document.getElementById("questionCategory").textContent = this.selectedCategory.toUpperCase();
    document.getElementById("questionDifficulty").textContent = q.difficulty;
    document.getElementById("currentQ").textContent = this.index + 1;

    const optionsBox = document.getElementById("optionsContainer");
    optionsBox.innerHTML = "";

    q.options.forEach(opt => {
      const btn = document.createElement("button");
      btn.className = "option-btn";
      btn.textContent = opt;
      btn.onclick = () => this.selectOption(btn);
      optionsBox.appendChild(btn);
    });

    document.getElementById("submitBtn").disabled = true;
    document.getElementById("progressFill").style.width =
      (this.index / this.questions.length) * 100 + "%";
  }

  selectOption(btn) {
    document.querySelectorAll(".option-btn").forEach(b => b.classList.remove("chosen"));
    btn.classList.add("chosen");
    document.getElementById("submitBtn").disabled = false;
  }

  submitAnswer() {
    const selected = document.querySelector(".option-btn.chosen");
    if (!selected) return;
    const answer = selected.textContent;
    if (answer === this.questions[this.index].answer) {
      this.score++;
    }
    this.index++;
    this.index < this.questions.length ? this.loadNext() : this.finishQuiz();
  }

  skipQuestion() {
    this.index++;
    this.index < this.questions.length ? this.loadNext() : this.finishQuiz();
  }

  loadNext() {
    clearInterval(this.timer);
    this.loadQuestion();
    this.startTimer();
    this.updateScore();
  }

  updateScore() {
    document.getElementById("currentScore").textContent = this.score;
  }

  finishQuiz() {
    clearInterval(this.timer);
    document.getElementById("questionScreen").style.display = "none";
    document.getElementById("resultsScreen").style.display = "block";

    document.getElementById("correctAnswers").textContent = this.score;
    document.getElementById("wrongAnswers").textContent =
      this.questions.length - this.score;
    document.getElementById("finalPercentage").textContent =
      Math.round((this.score / this.questions.length) * 100) + "%";
    document.getElementById("totalTime").textContent = this.timeElapsed + "s";
  }

  restartQuiz() {
    document.getElementById("resultsScreen").style.display = "none";
    document.getElementById("startScreen").style.display = "block";
    this.selectedCategory = null;
    document.getElementById("startQuizBtn").disabled = true;
    document.querySelectorAll(".category-card").forEach(c => c.classList.remove("selected"));
    this.updateScore();
  }
}

// -- GLOBALS and BUTTON HANDLERS --
let app;

document.addEventListener("DOMContentLoaded", () => {
  app = new QuizApp();
  document.getElementById("loginForm").addEventListener("submit", e => {
    e.preventDefault();
    const user = document.getElementById("username").value.trim();
    const pass = document.getElementById("password").value.trim();
    app.login(user, pass);
  });
});

function logout() { app.logout(); }
function showSection(section) { app.showSection(section); }
function selectCategory(el) {
  const category = el.dataset.category;
  app.selectCategory(category);
  document.querySelectorAll(".category-card").forEach(c => c.classList.remove("selected"));
  el.classList.add("selected");
  document.getElementById("startQuizBtn").disabled = false;
}
function startQuiz() { app.startQuiz(); }
function submitAnswer() { app.submitAnswer(); }
function skipQuestion() { app.skipQuestion(); }
function restartQuiz() { app.restartQuiz(); }
