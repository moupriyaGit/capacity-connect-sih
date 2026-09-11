"use client";

import { useState } from "react";
import Link from "next/link";

const questions = [
  {
    question: "Which Python library is commonly used for data analysis?",
    options: ["React", "Pandas", "Express", "Bootstrap"],
    answer: "Pandas",
  },
  {
    question: "Which structure stores data in rows and columns?",
    options: ["Array", "Tree", "Table", "Graph"],
    answer: "Table",
  },
  {
    question: "What does CSV stand for?",
    options: [
      "Common System Value",
      "Comma Separated Values",
      "Computer Stored Variable",
      "Column Storage Version",
    ],
    answer: "Comma Separated Values",
  },
  {
    question: "Which Python library is widely used for numerical computing?",
    options: ["NumPy", "Express", "Next.js", "Node"],
    answer: "NumPy",
  },
  {
    question: "Which chart is commonly used to show trends over time?",
    options: ["Line chart", "Pie chart", "Tree", "Histogram only"],
    answer: "Line chart",
  },
];

export default function AssessmentsPage() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState("");
  const [score, setScore] = useState<number | null>(null);
  const [answers, setAnswers] = useState<string[]>([]);

  const question = questions[current];

  const handleNext = () => {
    if (!selected) return;

    const updatedAnswers = [...answers];
    updatedAnswers[current] = selected;
    setAnswers(updatedAnswers);

    if (current < questions.length - 1) {
      setCurrent(current + 1);
      setSelected(updatedAnswers[current + 1] || "");
    } else {
      let finalScore = 0;

      questions.forEach((q, index) => {
        if (updatedAnswers[index] === q.answer) {
          finalScore++;
        }
      });

      setScore(finalScore);
    }
  };

  const restart = () => {
    setCurrent(0);
    setSelected("");
    setScore(null);
    setAnswers([]);
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">

      {/* HEADER */}
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-4">

          <Link href="/">
            <h1 className="text-2xl font-bold">
              Capacity Connect
            </h1>

            <p className="text-xs text-slate-500">
              Digital Capacity Building & Learning Management Portal
            </p>
          </Link>

          <nav className="flex items-center gap-5 text-sm">

            <Link
              href="/"
              className="text-slate-600 hover:text-blue-700"
            >
              Dashboard
            </Link>

            <Link
              href="/courses"
              className="text-slate-600 hover:text-blue-700"
            >
              Courses
            </Link>

            <Link
              href="/assessments"
              className="font-semibold text-blue-700"
            >
              Assessments
            </Link>

            <Link
              href="/trainer"
              className="text-slate-600 hover:text-blue-700"
            >
              Trainer
            </Link>

          </nav>

        </div>
      </header>


      {/* PAGE HEADER */}
      <section className="border-b bg-white">
        <div className="mx-auto max-w-7xl px-8 py-8">

          <p className="text-sm font-semibold text-blue-700">
            COMPETENCY ASSESSMENT
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            Python Data Analysis — Assessment 1
          </h2>

          <p className="mt-2 text-slate-500">
            Evaluate your understanding of Python and data analysis
            fundamentals.
          </p>

        </div>
      </section>


      {/* MAIN */}
      <section className="mx-auto max-w-4xl px-8 py-10">

        {score === null ? (

          <div className="rounded-2xl border bg-white p-8 shadow-sm">

            {/* PROGRESS */}
            <div className="flex items-center justify-between">

              <p className="text-sm font-semibold text-blue-700">
                QUESTION {current + 1} OF {questions.length}
              </p>

              <p className="text-sm text-slate-500">
                MCQ Assessment
              </p>

            </div>

            <div className="mt-4 h-2 rounded-full bg-slate-200">

              <div
                className="h-2 rounded-full bg-blue-700 transition-all"
                style={{
                  width: `${((current + 1) / questions.length) * 100}%`,
                }}
              />

            </div>


            {/* QUESTION */}
            <div className="mt-10">

              <h3 className="text-xl font-bold leading-8">
                {question.question}
              </h3>

              <div className="mt-6 space-y-3">

                {question.options.map((option) => (

                  <button
                    key={option}
                    onClick={() => setSelected(option)}
                    className={`w-full rounded-xl border p-4 text-left text-sm font-medium transition ${
                      selected === option
                        ? "border-blue-700 bg-blue-50 text-blue-700"
                        : "border-slate-200 hover:border-blue-300 hover:bg-slate-50"
                    }`}
                  >
                    <div className="flex items-center gap-3">

                      <div
                        className={`flex h-5 w-5 items-center justify-center rounded-full border ${
                          selected === option
                            ? "border-blue-700 bg-blue-700"
                            : "border-slate-300"
                        }`}
                      >
                        {selected === option && (
                          <div className="h-2 w-2 rounded-full bg-white" />
                        )}
                      </div>

                      {option}

                    </div>
                  </button>

                ))}

              </div>

            </div>


            {/* ACTION */}
            <div className="mt-8 flex justify-end">

              <button
                onClick={handleNext}
                disabled={!selected}
                className="rounded-lg bg-blue-700 px-7 py-3 text-sm font-semibold text-white hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {current === questions.length - 1
                  ? "Submit Assessment"
                  : "Next Question →"}
              </button>

            </div>

          </div>

        ) : (

          /* RESULT */
          <div className="rounded-2xl border bg-white p-8 shadow-sm">

            <div className="text-center">

              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-2xl font-bold text-green-700">
                {score}/{questions.length}
              </div>

              <p className="mt-6 text-sm font-semibold text-blue-700">
                ASSESSMENT COMPLETED
              </p>

              <h3 className="mt-2 text-3xl font-bold">
                Your Score: {score}/{questions.length}
              </h3>

              <p className="mt-3 text-slate-500">
                {score >= 4
                  ? "Strong performance. Your competency is progressing well."
                  : score >= 3
                  ? "Good progress. Continue learning to strengthen your competency."
                  : "Keep learning and attempt the assessment again."}
              </p>

            </div>


            {/* COMPETENCY STATUS */}
            <div className="mt-10 rounded-xl bg-blue-50 p-6">

              <p className="text-sm font-semibold text-blue-800">
                COMPETENCY STATUS
              </p>

              <div className="mt-5 space-y-3">

                <ResultRow
                  title="Python Programming"
                  status={score >= 3 ? "Developing" : "Needs Improvement"}
                />

                <ResultRow
                  title="Data Analysis"
                  status={score >= 4 ? "Competent" : "Developing"}
                />

                <ResultRow
                  title="Data Processing"
                  status={score >= 4 ? "Competent" : "Developing"}
                />

              </div>

            </div>


            {/* SCORE SUMMARY */}
            <div className="mt-8 grid gap-4 md:grid-cols-3">

              <SummaryBox
                title="Correct Answers"
                value={String(score)}
              />

              <SummaryBox
                title="Questions"
                value={String(questions.length)}
              />

              <SummaryBox
                title="Percentage"
                value={`${Math.round(
                  (score / questions.length) * 100
                )}%`}
              />

            </div>


            {/* ACTIONS */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">

              <button
                onClick={restart}
                className="rounded-lg border border-slate-300 px-6 py-3 text-sm font-semibold hover:bg-slate-50"
              >
                Retake Assessment
              </button>

              <Link
                href="/courses"
                className="rounded-lg bg-blue-700 px-6 py-3 text-center text-sm font-semibold text-white hover:bg-blue-800"
              >
                Back to Course
              </Link>

              <Link
                href="/"
                className="rounded-lg bg-slate-800 px-6 py-3 text-center text-sm font-semibold text-white hover:bg-slate-900"
              >
                Dashboard
              </Link>

            </div>

          </div>

        )}

      </section>


      {/* FOOTER */}
      <footer className="border-t bg-white">

        <div className="mx-auto max-w-7xl px-8 py-7">

          <p className="font-semibold">
            Capacity Connect
          </p>

          <p className="mt-1 text-sm text-slate-500">
            SIH 2026 · PS-26075
          </p>

        </div>

      </footer>

    </main>
  );
}


/* RESULT ROW */

function ResultRow({
  title,
  status,
}: {
  title: string;
  status: string;
}) {
  return (
    <div className="flex items-center justify-between rounded-lg bg-white p-4">

      <span className="text-sm font-medium">
        {title}
      </span>

      <span
        className={`rounded-full px-3 py-1 text-xs font-semibold ${
          status === "Competent"
            ? "bg-green-100 text-green-700"
            : status === "Developing"
            ? "bg-blue-100 text-blue-700"
            : "bg-red-100 text-red-700"
        }`}
      >
        {status}
      </span>

    </div>
  );
}


/* SUMMARY BOX */

function SummaryBox({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-xl bg-slate-50 p-5 text-center">

      <p className="text-xs text-slate-500">
        {title}
      </p>

      <p className="mt-2 text-2xl font-bold">
        {value}
      </p>

    </div>
  );
}