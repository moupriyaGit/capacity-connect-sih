"use client";

import { useState } from "react";
import axios from "axios";
import Link from "next/link";

interface Recommendation {
  competencies: string[];
  course: string;
  trainer: string;
  expertise: string;
}

export default function Home() {
  const [learningNeed, setLearningNeed] = useState("");
  const [recommendation, setRecommendation] =
    useState<Recommendation | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!learningNeed.trim()) {
      setError("Please describe what you want to learn.");
      return;
    }

    setLoading(true);
    setRecommendation(null);
    setError("");

    try {
      const response = await axios.post(
        "http://localhost:5000/api/recommend",
        { learningNeed }
      );

      setRecommendation(response.data);
    } catch (err) {
      console.log(err);
      setError("Unable to connect to the recommendation service.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">

      {/* HEADER */}
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-4">

          <Link href="/" className="cursor-pointer">
            <h1 className="text-2xl font-bold">
              Capacity Connect
            </h1>

            <p className="text-xs text-slate-500">
              Digital Capacity Building & Learning Management Portal
            </p>
          </Link>

          <div className="flex items-center gap-6">

            <nav className="hidden items-center gap-5 text-sm md:flex">
              <Link
                href="/courses"
                className="text-slate-600 hover:text-blue-700"
              >
                Courses
              </Link>

              <Link
                href="/assessments"
                className="text-slate-600 hover:text-blue-700"
              >
                Assessments
              </Link>

              <Link
                href="/trainer"
                className="text-slate-600 hover:text-blue-700"
              >
                Trainer
              </Link>

              <Link
                href="/admin"
                className="text-slate-600 hover:text-blue-700"
              >
                Admin
              </Link>
            </nav>

            <span className="text-sm text-slate-600">
              Trainee
            </span>

            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-700">
              T
            </div>

          </div>
        </div>
      </header>


      {/* DASHBOARD HEADER */}
      <section className="border-b bg-white">
        <div className="mx-auto max-w-7xl px-8 py-8">

          <p className="text-sm font-semibold text-blue-700">
            TRAINEE DASHBOARD
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            Welcome back, Trainee
          </h2>

          <p className="mt-2 text-slate-500">
            Discover learning opportunities and build relevant competencies.
          </p>

        </div>
      </section>


      {/* MAIN */}
      <section className="mx-auto max-w-7xl px-8 py-10">

        {/* STATS */}
        <div className="grid gap-6 md:grid-cols-4">

          <StatCard
            title="Enrolled Courses"
            value="4"
          />

          <StatCard
            title="Completed Courses"
            value="2"
          />

          <StatCard
            title="Assessments"
            value="6"
          />

          <StatCard
            title="Certificates"
            value="2"
          />

        </div>


        {/* LEARNING DISCOVERY */}
        <div className="mt-10 rounded-2xl border bg-white p-8 shadow-sm">

          <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
            AI-ASSISTED LEARNING DISCOVERY
          </p>

          <h3 className="mt-2 text-2xl font-bold">
            What would you like to learn?
          </h3>

          <p className="mt-2 text-sm text-slate-500">
            Describe your learning requirement in your own words.
          </p>


          <textarea
            value={learningNeed}
            onChange={(e) => setLearningNeed(e.target.value)}
            placeholder="Example: I want to improve my skills in Python and ocean data analysis."
            className="mt-6 h-28 w-full resize-none rounded-xl border border-slate-300 p-4 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
          />


          {error && (
            <p className="mt-3 text-sm font-medium text-red-600">
              {error}
            </p>
          )}


          <div className="mt-4 flex justify-end">

            <button
              onClick={handleSearch}
              disabled={loading}
              className="rounded-lg bg-blue-700 px-7 py-3 font-semibold text-white transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading
                ? "Finding Learning Path..."
                : "Find My Learning Path →"}
            </button>

          </div>


          {/* RECOMMENDATION */}
          {recommendation && (

            <div className="mt-8 border-t pt-8">

              <p className="text-sm font-semibold text-slate-500">
                RECOMMENDED LEARNING PATH
              </p>


              <div className="mt-5 grid gap-5 md:grid-cols-3">

                {/* COMPETENCIES */}
                <div className="rounded-xl border bg-slate-50 p-6">

                  <p className="text-xs font-semibold text-blue-700">
                    IDENTIFIED COMPETENCIES
                  </p>

                  <div className="mt-4 space-y-2">

                    {recommendation.competencies.map(
                      (competency, index) => (
                        <div
                          key={index}
                          className="rounded-lg bg-white px-4 py-3 text-sm font-medium shadow-sm"
                        >
                          {competency}
                        </div>
                      )
                    )}

                  </div>

                </div>


                {/* COURSE */}
                <div className="rounded-xl border bg-slate-50 p-6">

                  <p className="text-xs font-semibold text-blue-700">
                    RECOMMENDED COURSE
                  </p>

                  <h4 className="mt-4 text-lg font-bold">
                    {recommendation.course}
                  </h4>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    Selected based on your learning requirement
                    and competency relevance.
                  </p>

                  <Link
                    href={`/courses?course=${encodeURIComponent(
                      recommendation.course
                    )}&trainer=${encodeURIComponent(
                      recommendation.trainer
                    )}&expertise=${encodeURIComponent(
                      recommendation.expertise
                    )}`}
                    className="mt-5 inline-block rounded-lg bg-blue-700 px-5 py-2 text-sm font-semibold text-white hover:bg-blue-800"
                  >
                    View Course
                  </Link>

                </div>


                {/* TRAINER */}
                <div className="rounded-xl border bg-slate-50 p-6">

                  <p className="text-xs font-semibold text-blue-700">
                    MATCHED TRAINER
                  </p>

                  <h4 className="mt-4 text-lg font-bold">
                    {recommendation.trainer}
                  </h4>

                  <p className="mt-3 text-sm text-slate-500">
                    {recommendation.expertise}
                  </p>

                  <Link
                    href={`/trainer?name=${encodeURIComponent(
                      recommendation.trainer
                    )}&expertise=${encodeURIComponent(
                      recommendation.expertise
                    )}`}
                    className="mt-5 inline-block rounded-lg border border-slate-300 bg-white px-5 py-2 text-sm font-semibold hover:bg-slate-50"
                  >
                    View Profile
                  </Link>

                </div>

              </div>


              {/* COMPETENCY MAPPING */}
              <div className="mt-6 rounded-xl bg-blue-50 p-5">

                <p className="text-sm font-semibold text-blue-800">
                  Competency Mapping Result
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Your learning requirement was mapped to relevant
                  competencies and matched with suitable courses
                  and trainer expertise.
                </p>

                <div className="mt-4 flex flex-wrap gap-2">

                  {recommendation.competencies.map(
                    (competency, index) => (
                      <span
                        key={index}
                        className="rounded-full bg-white px-3 py-1 text-xs font-medium text-blue-700"
                      >
                        ✓ {competency}
                      </span>
                    )
                  )}

                </div>

              </div>

            </div>

          )}

        </div>


        {/* CURRENT LEARNING */}
        <div className="mt-10">

          <div>
            <p className="text-sm font-semibold text-blue-700">
              MY LEARNING
            </p>

            <h3 className="mt-1 text-2xl font-bold">
              Continue Learning
            </h3>
          </div>


          <div className="mt-5 grid gap-6 md:grid-cols-3">

            <CourseCard
              title="Python Programming"
              progress="75%"
            />

            <CourseCard
              title="Data Analysis"
              progress="50%"
            />

            <CourseCard
              title="Computer Networks"
              progress="30%"
            />

          </div>

        </div>


        {/* UPCOMING ASSESSMENT */}
        <div className="mt-10 rounded-xl border bg-white p-7 shadow-sm">

          <p className="text-sm font-semibold text-blue-700">
            UPCOMING ASSESSMENT
          </p>

          <div className="mt-4 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

            <div>

              <h3 className="text-lg font-bold">
                Python Data Analysis — Assessment 1
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                10 MCQs · Deadline: 15 September 2026
              </p>

            </div>

            <Link
              href="/assessments"
              className="rounded-lg bg-blue-700 px-5 py-3 text-center text-sm font-semibold text-white hover:bg-blue-800"
            >
              Start Assessment
            </Link>

          </div>

        </div>


        {/* QUICK ACCESS */}
        <div className="mt-10 grid gap-5 md:grid-cols-3">

          <QuickCard
            title="Explore Courses"
            description="Browse available learning programmes."
            href="/courses"
          />

          <QuickCard
            title="Take Assessment"
            description="Evaluate your current competencies."
            href="/assessments"
          />

          <QuickCard
            title="Trainer Dashboard"
            description="Manage training and learner performance."
            href="/trainer"
          />

        </div>

      </section>


      {/* FOOTER */}
      <footer className="border-t bg-white">

        <div className="mx-auto max-w-7xl px-8 py-7">

          <p className="font-semibold">
            Capacity Connect
          </p>

          <p className="mt-1 text-sm text-slate-500">
            Digital Capacity Building & Learning Management Portal
          </p>

          <p className="mt-3 text-xs text-slate-400">
            SIH 2026 · Problem Statement PS-26075
          </p>

        </div>

      </footer>

    </main>
  );
}


/* STAT CARD */

function StatCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">

      <p className="text-sm text-slate-500">
        {title}
      </p>

      <p className="mt-2 text-3xl font-bold">
        {value}
      </p>

    </div>
  );
}


/* COURSE CARD */

function CourseCard({
  title,
  progress,
}: {
  title: string;
  progress: string;
}) {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">

      <h4 className="font-bold">
        {title}
      </h4>

      <div className="mt-5 h-2 rounded-full bg-slate-200">

        <div
          className="h-2 rounded-full bg-blue-700"
          style={{ width: progress }}
        />

      </div>

      <div className="mt-3 flex justify-between text-sm">

        <span className="text-slate-500">
          Progress
        </span>

        <span className="font-semibold">
          {progress}
        </span>

      </div>

      <Link
        href="/courses"
        className="mt-5 inline-block text-sm font-semibold text-blue-700"
      >
        Continue →
      </Link>

    </div>
  );
}


/* QUICK ACCESS CARD */

function QuickCard({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="rounded-xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
    >

      <h4 className="font-bold">
        {title}
      </h4>

      <p className="mt-2 text-sm leading-6 text-slate-500">
        {description}
      </p>

      <p className="mt-4 text-sm font-semibold text-blue-700">
        Open →
      </p>

    </Link>
  );
}