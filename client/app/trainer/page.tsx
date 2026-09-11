"use client";

import Link from "next/link";

export default function TrainerPage() {
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

          <nav className="hidden items-center gap-6 text-sm md:flex">
            <Link href="/" className="text-slate-600 hover:text-blue-700">
              Dashboard
            </Link>

            <Link href="/courses" className="text-slate-600 hover:text-blue-700">
              Courses
            </Link>

            <Link href="/assessments" className="text-slate-600 hover:text-blue-700">
              Assessments
            </Link>

            <Link
              href="/trainer"
              className="font-semibold text-blue-700"
            >
              Trainer
            </Link>

            <Link href="/admin" className="text-slate-600 hover:text-blue-700">
              Admin
            </Link>
          </nav>

          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-700">
            AS
          </div>

        </div>
      </header>


      {/* PAGE HEADER */}
      <section className="border-b bg-white">
        <div className="mx-auto max-w-7xl px-8 py-8">

          <p className="text-sm font-semibold text-blue-700">
            TRAINER DASHBOARD
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            Trainer Profile & Learning Management
          </h2>

          <p className="mt-2 text-slate-500">
            Manage training programmes, learning resources and trainee performance.
          </p>

        </div>
      </section>


      {/* MAIN */}
      <section className="mx-auto max-w-7xl px-8 py-10">

        {/* PROFILE + STATS */}
        <div className="grid gap-6 lg:grid-cols-3">

          {/* PROFILE */}
          <div className="rounded-2xl border bg-white p-7 shadow-sm">

            <div className="flex items-center gap-5">

              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-blue-100 text-2xl font-bold text-blue-700">
                AS
              </div>

              <div>
                <h3 className="text-xl font-bold">
                  Dr. Ananya Sen
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  Senior Trainer · Ocean Data Analytics
                </p>
              </div>

            </div>

            <div className="mt-7">

              <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">
                Areas of Expertise
              </p>

              <div className="mt-4 flex flex-wrap gap-2">

                {[
                  "Python",
                  "Ocean Data Analytics",
                  "Data Processing",
                  "Scientific Computing",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-medium text-blue-700"
                  >
                    {item}
                  </span>
                ))}

              </div>

            </div>

            <div className="mt-7 flex gap-2">

              <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                ✓ Verified Trainer
              </span>

              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                Active
              </span>

            </div>

          </div>


          {/* STATS */}
          <div className="grid grid-cols-2 gap-4 lg:col-span-2">

            <StatCard
              title="Active Trainees"
              value="128"
              description="Currently enrolled"
            />

            <StatCard
              title="Courses"
              value="4"
              description="Learning programmes"
            />

            <StatCard
              title="Assessments"
              value="16"
              description="Published assessments"
            />

            <StatCard
              title="Completion Rate"
              value="87%"
              description="Average course completion"
            />

          </div>

        </div>


        {/* COMPETENCY MATCH */}
        <div className="mt-8 rounded-2xl border bg-white p-8 shadow-sm">

          <p className="text-sm font-semibold text-blue-700">
            COMPETENCY MATCH
          </p>

          <h3 className="mt-2 text-2xl font-bold">
            Why this trainer was recommended
          </h3>

          <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-500">
            The platform compares the trainee's learning requirement with
            trainer expertise and identifies the most relevant trainer.
          </p>

          <div className="mt-7 grid gap-4 md:grid-cols-3">

            <CompetencyCard
              title="Python Programming"
              match="Strong Match"
            />

            <CompetencyCard
              title="Data Analysis"
              match="Strong Match"
            />

            <CompetencyCard
              title="Ocean Data Processing"
              match="Strong Match"
            />

          </div>

        </div>


        {/* TRAINER LIBRARY */}
        <div className="mt-8">

          <p className="text-sm font-semibold text-blue-700">
            TRAINER LIBRARY
          </p>

          <h3 className="mt-1 text-2xl font-bold">
            Learning Programmes
          </h3>

          <p className="mt-2 text-sm text-slate-500">
            Resources and courses made available to trainees.
          </p>


          <div className="mt-5 grid gap-6 md:grid-cols-2">

            <CourseCard
              title="Ocean Data Analysis with Python"
              description="Python-based processing and analysis of oceanographic datasets."
              modules="8 Modules"
              trainees="86 Trainees"
            />

            <CourseCard
              title="Applied Data Processing"
              description="Practical methods for handling and analysing scientific data."
              modules="6 Modules"
              trainees="54 Trainees"
            />

          </div>

        </div>


        {/* PERFORMANCE */}
        <div className="mt-8 rounded-2xl border bg-white p-8 shadow-sm">

          <p className="text-sm font-semibold text-blue-700">
            TRAINEE PERFORMANCE
          </p>

          <h3 className="mt-2 text-2xl font-bold">
            Training Overview
          </h3>

          <div className="mt-6 space-y-5">

            <PerformanceRow
              title="Course Participation"
              value="92%"
              width="92%"
            />

            <PerformanceRow
              title="Assessment Completion"
              value="84%"
              width="84%"
            />

            <PerformanceRow
              title="Competency Development"
              value="78%"
              width="78%"
            />

          </div>

        </div>


        {/* ACTIONS */}
        <div className="mt-8 grid gap-4 md:grid-cols-3">

          <ActionCard
            title="Manage Courses"
            description="Create and manage training programmes."
            href="/courses"
          />

          <ActionCard
            title="Create Assessment"
            description="Create questionnaires and monitor assessment performance."
            href="/assessments"
          />

          <ActionCard
            title="Back to Dashboard"
            description="Return to the main learning dashboard."
            href="/"
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
  description,
}: {
  title: string;
  value: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">

      <p className="text-sm text-slate-500">
        {title}
      </p>

      <p className="mt-2 text-3xl font-bold">
        {value}
      </p>

      <p className="mt-2 text-xs text-slate-400">
        {description}
      </p>

    </div>
  );
}


/* COMPETENCY CARD */

function CompetencyCard({
  title,
  match,
}: {
  title: string;
  match: string;
}) {
  return (
    <div className="rounded-xl border bg-slate-50 p-5">

      <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">
        Matched Competency
      </p>

      <h4 className="mt-3 font-semibold">
        {title}
      </h4>

      <div className="mt-4 flex items-center justify-between">

        <span className="text-xs text-slate-500">
          Expertise relevance
        </span>

        <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
          {match}
        </span>

      </div>

    </div>
  );
}


/* COURSE CARD */

function CourseCard({
  title,
  description,
  modules,
  trainees,
}: {
  title: string;
  description: string;
  modules: string;
  trainees: string;
}) {
  return (
    <div className="rounded-2xl border bg-white p-7 shadow-sm">

      <div className="flex items-start justify-between gap-4">

        <div>
          <h4 className="text-lg font-bold">
            {title}
          </h4>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            {description}
          </p>
        </div>

        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
          Active
        </span>

      </div>

      <div className="mt-6 flex gap-3">

        <span className="rounded-lg bg-slate-50 px-3 py-2 text-xs font-medium text-slate-600">
          {modules}
        </span>

        <span className="rounded-lg bg-slate-50 px-3 py-2 text-xs font-medium text-slate-600">
          {trainees}
        </span>

      </div>

      <Link
        href="/courses"
        className="mt-6 inline-block text-sm font-semibold text-blue-700 hover:text-blue-800"
      >
        View Course →
      </Link>

    </div>
  );
}


/* PERFORMANCE ROW */

function PerformanceRow({
  title,
  value,
  width,
}: {
  title: string;
  value: string;
  width: string;
}) {
  return (
    <div>

      <div className="flex items-center justify-between text-sm">

        <span className="font-medium">
          {title}
        </span>

        <span className="font-semibold text-blue-700">
          {value}
        </span>

      </div>

      <div className="mt-2 h-2 rounded-full bg-slate-200">

        <div
          className="h-2 rounded-full bg-blue-700"
          style={{ width }}
        />

      </div>

    </div>
  );
}


/* ACTION CARD */

function ActionCard({
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
      className="rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
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