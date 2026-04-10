import { useEffect, useState } from "react";

const quizData = {
  HTML: [
    {
      question: "What does HTML stand for?",
      options: [
        "Hyper Trainer Marking Language",
        "Hyper Text Markup Language",
        "High Text Machine Language",
        "Hyper Text Markdown Language",
      ],
      answer: "Hyper Text Markup Language",
    },
    {
      question: "Which tag is used for the largest heading?",
      options: ["<h6>", "<heading>", "<h1>", "<head>"],
      answer: "<h1>",
    },
    {
      question: "Which tag creates a line break?",
      options: ["<lb>", "<break>", "<br>", "<hr>"],
      answer: "<br>",
    },
    {
      question: "Which HTML tag is used for links?",
      options: ["<a>", "<link>", "<href>", "<nav>"],
      answer: "<a>",
    },
    {
      question: "Which attribute is used for image alt text?",
      options: ["title", "alt", "src", "description"],
      answer: "alt",
    },
  ],

  CSS: [
    {
      question: "What does CSS stand for?",
      options: [
        "Color Style Sheets",
        "Cascading Style Sheets",
        "Creative Style System",
        "Computer Style Sheets",
      ],
      answer: "Cascading Style Sheets",
    },
    {
      question: "Which property changes text color?",
      options: ["font-color", "text-color", "color", "fgcolor"],
      answer: "color",
    },
    {
      question: "Which is used for spacing inside an element?",
      options: ["margin", "padding", "border", "spacing"],
      answer: "padding",
    },
    {
      question: "Which property controls layout direction in flexbox?",
      options: ["flex-direction", "align-items", "position", "display"],
      answer: "flex-direction",
    },
    {
      question: "Which unit is relative to parent font size?",
      options: ["px", "cm", "em", "vh"],
      answer: "em",
    },
  ],

  JS: [
    {
      question: "Which keyword declares a variable in JavaScript?",
      options: ["int", "var", "define", "string"],
      answer: "var",
    },
    {
      question: "Which company created JavaScript?",
      options: ["Microsoft", "Apple", "Netscape", "Google"],
      answer: "Netscape",
    },
    {
      question: "Which symbol is used for strict equality?",
      options: ["=", "==", "===", "!="],
      answer: "===",
    },
    {
      question: "What is used to store multiple values?",
      options: ["array", "object", "string", "number"],
      answer: "array",
    },
    {
      question: "Which function prints output in console?",
      options: ["print()", "log()", "console.log()", "output()"],
      answer: "console.log()",
    },
  ],
};

export default function App() {
  const [step, setStep] = useState("start"); // start | quiz | result
  const [category, setCategory] = useState(null);

  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);

  const [selected, setSelected] = useState(null);
  const [locked, setLocked] = useState(false);

  const [darkMode, setDarkMode] = useState(false);

  const [timeLeft, setTimeLeft] = useState(10);
  const [answers, setAnswers] = useState([]);

  const questions = category ? quizData[category] : [];
  const current = questions[index];

  const progress = ((index + 1) / questions.length) * 100;

  useEffect(() => {
    if (step !== "quiz") return;

    if (timeLeft === 0) {
      handleAnswer(null);
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft((t) => t - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, step]);

  const startQuiz = (cat) => {
    setCategory(cat);
    setStep("quiz");
    setIndex(0);
    setScore(0);
    setAnswers([]);
    setTimeLeft(10);
  };

  const handleAnswer = (option) => {
    if (locked) return;

    setLocked(true);

    const isCorrect = option === current.answer;

    if (isCorrect) setScore((s) => s + 1);

    setAnswers((prev) => [
      ...prev,
      {
        question: current.question,
        selected: option,
        correct: current.answer,
        isCorrect,
      },
    ]);

    setSelected(option);

    setTimeout(() => {
      const next = index + 1;

      if (next < questions.length) {
        setIndex(next);
        setTimeLeft(10);
        setSelected(null);
        setLocked(false);
      } else {
        setStep("result");
      }
    }, 700);
  };

  const restart = () => {
    setStep("start");
    setCategory(null);
    setIndex(0);
    setScore(0);
    setAnswers([]);
    setTimeLeft(10);
    setSelected(null);
    setLocked(false);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const newMode = !prev;

      if (newMode) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }

      return newMode;
    });
  };

  return (
    <div className={`app ${darkMode ? "dark" : ""}`}>
      <div className="container">
        {step === "start" && (
          <div className="start">
            <h1>QuizFlow Pro 🚀</h1>
            <p>Select a category</p>

            <div className="category-grid">
              {Object.keys(quizData).map((cat) => (
                <button key={cat} onClick={() => startQuiz(cat)}>
                  {cat}
                </button>
              ))}
            </div>

            <button className="toggle" onClick={toggleDarkMode}>
              {darkMode ? "☀️ Light" : "🌙 Dark"}
            </button>
          </div>
        )}

        {step === "quiz" && current && (
          <div className="quiz">
            <div className="top-bar">
              <p>
                Category: <b>{category}</b>
              </p>
              <p className="timer">⏱ {timeLeft}s</p>
            </div>

            <div className="progress-bar">
              <div style={{ width: `${progress}%` }} />
            </div>

            <h2>{current.question}</h2>

            <div className="options">
              {current.options.map((opt, i) => {
                const isCorrect = opt === current.answer;
                const isSelected = opt === selected;

                return (
                  <button
                    key={i}
                    onClick={() => handleAnswer(opt)}
                    disabled={locked}
                    className={
                      selected
                        ? isCorrect
                          ? "correct"
                          : isSelected
                            ? "wrong"
                            : ""
                        : ""
                    }
                  >
                    {opt}
                  </button>
                );
              })}
            </div>

            <p>
              Question {index + 1} of {questions.length}
            </p>
          </div>
        )}

        {step === "result" && (
          <div className="result">
            <h1>Results 🎉</h1>

            <p>
              Score: <b>{score}</b> / {questions.length}
            </p>

            <button onClick={restart}>Restart Quiz</button>
          </div>
        )}
      </div>
    </div>
  );
}
