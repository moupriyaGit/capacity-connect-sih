import Link from "next/link";

export default async function CoursesPage({
  searchParams,
}: {
  searchParams: Promise<{
    course?: string;
    trainer?: string;
    expertise?: string;
  }>;
}) {
  const params = await searchParams;

  const selectedCourse =
    params.course || "Ocean Data Analysis with Python";

  const trainer =
    params.trainer || "Dr. Ananya Sen";

  const expertise =
    params.expertise ||
    "Ocean Data Analytics · Python";

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
              className="font-semibold text-blue-700"
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

          </nav>

        </div>
      </header>


      {/* PAGE HEADER */}
      <section className="border-b bg-white">
        <div className="mx-auto max-w-7xl px-8 py-8">

          <p className="text-sm font-semibold text-blue-700">
            LEARNING PROGRAMME
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            {selectedCourse}
          </h2>

          <p className="mt-2 max-w-3xl text-slate-500">
            A structured learning programme designed to build
            job-relevant competencies through learning resources,
            expert guidance and assessment.
          </p>

        </div>
      </section>


      {/* MAIN */}
      <section className="mx-auto max-w-7xl px-8 py-10">

        <div className="grid gap-8 lg:grid-cols-3">

          {/* COURSE CONTENT */}
          <div className="lg:col-span-2">

            {/* OVERVIEW */}
            <div className="rounded-2xl border bg-white p-8 shadow-sm">

              <p className="text-sm font-semibold text-blue-700">
                COURSE OVERVIEW
              </p>

              <h3 className="mt-2 text-2xl font-bold">
                Build practical technical competencies
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                This programme combines structured learning materials,
                recorded lectures, presentations and assessments to
                help trainees develop measurable competencies.
              </p>

              <div className="mt-6 grid gap-4 md:grid-cols-3">

                <InfoBox
                  title="Duration"
                  value="6 Weeks"
                />

                <InfoBox
                  title="Learning Mode"
                  value="Blended"
                />

                <InfoBox
                  title="Assessment"
                  value="MCQ Based"
                />

              </div>

            </div>


            {/* MODULES */}
            <div className="mt-8 rounded-2xl border bg-white p-8 shadow-sm">

              <p className="text-sm font-semibold text-blue-700">
                COURSE MODULES
              </p>

              <div className="mt-5 space-y-4">

                <Module
                  number="01"
                  title="Introduction & Fundamentals"
                  description="Core concepts and foundational knowledge."
                  status="Completed"
                />

                <Module
                  number="02"
                  title="Data Processing & Analysis"
                  description="Practical methods for processing and analysing data."
                  status="In Progress"
                />

                <Module
                  number="03"
                  title="Applied Techniques"
                  description="Apply learned concepts to practical scenarios."
                  status="Locked"
                />

                <Module
                  number="04"
                  title="Final Assessment"
                  description="Evaluate competency through a structured assessment."
                  status="Locked"
                />

              </div>

            </div>


            {/* RESOURCES */}
            <div className="mt-8 rounded-2xl border bg-white p-8 shadow-sm">

              <p className="text-sm font-semibold text-blue-700">
                LEARNING RESOURCES
              </p>

              <div className="mt-5 grid gap-4 md:grid-cols-2">

                <Resource
                  title="Recorded Lecture"
                  type="Video"
                />

                <Resource
                  title="Course Presentation"
                  type="PPT"
                />

                <Resource
                  title="Study Material"
                  type="PDF"
                />

                <Resource
                  title="Practical Exercises"
                  type="Document"
                />

              </div>

            </div>

          </div>


          {/* SIDEBAR */}
          <div className="space-y-6">

            {/* TRAINER */}
            <div className="rounded-2xl border bg-white p-7 shadow-sm">

              <p className="text-xs font-semibold text-blue-700">
                COURSE TRAINER
              </p>

              <div className="mt-5 flex items-center gap-4">

                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-lg font-bold text-blue-700">
                  {trainer.charAt(0)}
                </div>

                <div>
                  <h3 className="font-bold">
                    {trainer}
                  </h3>

                  <p className="mt-1 text-xs text-slate-500">
                    Subject Matter Expert
                  </p>
                </div>

              </div>

              <div className="mt-5 rounded-xl bg-slate-50 p-4">

                <p className="text-xs font-semibold text-slate-500">
                  EXPERTISE
                </p>

                <p className="mt-2 text-sm font-medium">
                  {expertise}
                </p>

              </div>

              <Link
                href={`/trainer?name=${encodeURIComponent(
                  trainer
                )}&expertise=${encodeURIComponent(
                  expertise
                )}`}
                className="mt-5 block rounded-lg border border-slate-300 px-5 py-3 text-center text-sm font-semibold hover:bg-slate-50"
              >
                View Trainer Profile
              </Link>

            </div>


            {/* PROGRESS */}
            <div className="rounded-2xl border bg-white p-7 shadow-sm">

              <p className="text-xs font-semibold text-blue-700">
                YOUR PROGRESS
              </p>

              <div className="mt-5 flex items-end justify-between">

                <span className="text-3xl font-bold">
                  50%
                </span>

                <span className="text-sm text-slate-500">
                  3 of 6 modules
                </span>

              </div>

              <div className="mt-4 h-2 rounded-full bg-slate-200">

                <div
                  className="h-2 rounded-full bg-blue-700"
                  style={{ width: "50%" }}
                />

              </div>

              <Link
                href="/assessments"
                className="mt-6 block rounded-lg bg-blue-700 px-5 py-3 text-center text-sm font-semibold text-white hover:bg-blue-800"
              >
                Continue Learning →
              </Link>

            </div>


            {/* COMPETENCY */}
            <div className="rounded-2xl border bg-blue-50 p-7">

              <p className="text-xs font-semibold text-blue-700">
                COMPETENCY TRACKING
              </p>

              <h3 className="mt-3 text-lg font-bold">
                Competency Status
              </h3>

              <div className="mt-5 space-y-3">

                <Competency
                  title="Python Programming"
                  status="Developing"
                />

                <Competency
                  title="Data Analysis"
                  status="Developing"
                />

                <Competency
                  title="Ocean Data Processing"
                  status="Not Assessed"
                />

              </div>

            </div>

          </div>

        </div>


        {/* BOTTOM CTA */}
        <div className="mt-10 rounded-2xl bg-blue-700 p-8 text-white">

          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

            <div>

              <p className="text-sm font-semibold text-blue-100">
                READY TO TEST YOUR COMPETENCY?
              </p>

              <h3 className="mt-2 text-2xl font-bold">
                Take the course assessment
              </h3>

              <p className="mt-2 text-sm text-blue-100">
                Your assessment result will contribute to your
                competency record.
              </p>

            </div>

            <Link
              href="/assessments"
              className="rounded-lg bg-white px-6 py-3 text-center text-sm font-bold text-blue-700 hover:bg-blue-50"
            >
              Start Assessment →
            </Link>

          </div>

        </div>

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


/* INFO BOX */

function InfoBox({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-xl bg-slate-50 p-4">

      <p className="text-xs text-slate-500">
        {title}
      </p>

      <p className="mt-1 font-semibold">
        {value}
      </p>

    </div>
  );
}


/* MODULE */

function Module({
  number,
  title,
  description,
  status,
}: {
  number: string;
  title: string;
  description: string;
  status: string;
}) {
  const completed = status === "Completed";
  const progress = status === "In Progress";

  return (
    <div className="flex items-center gap-4 rounded-xl border p-5">

      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-50 text-sm font-bold text-blue-700">
        {number}
      </div>

      <div className="flex-1">

        <h4 className="font-bold">
          {title}
        </h4>

        <p className="mt-1 text-sm text-slate-500">
          {description}
        </p>

      </div>

      <span
        className={`rounded-full px-3 py-1 text-xs font-semibold ${
          completed
            ? "bg-green-100 text-green-700"
            : progress
            ? "bg-blue-100 text-blue-700"
            : "bg-slate-100 text-slate-500"
        }`}
      >
        {status}
      </span>

    </div>
  );
}


/* RESOURCE */

function Resource({
  title,
  type,
}: {
  title: string;
  type: string;
}) {
  return (
    <div className="flex items-center justify-between rounded-xl border p-5">

      <div>

        <h4 className="font-semibold">
          {title}
        </h4>

        <p className="mt-1 text-xs text-slate-500">
          {type}
        </p>

      </div>

      <button className="rounded-lg border border-slate-300 px-4 py-2 text-xs font-semibold hover:bg-slate-50">
        Open
      </button>

    </div>
  );
}


/* COMPETENCY */

function Competency({
  title,
  status,
}: {
  title: string;
  status: string;
}) {
  return (
    <div className="flex items-center justify-between rounded-lg bg-white p-3">

      <span className="text-sm font-medium">
        {title}
      </span>

      <span className="text-xs font-semibold text-blue-700">
        {status}
      </span>

    </div>
  );
}