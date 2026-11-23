
export default function Home() {
  const email = "ampellisreecharangoud@gmail.com";
  const phone = "+91 9398411913";

  // Add your confirmed LinkedIn URL here later.
  const linkedInUrl = "https://www.linkedin.com/in/sri-charan-ampelly-71817b370/";

  const skills = [
    "Python",
    "Java",
    "React.js",
    "Node.js",
    "HTML5",
    "CSS3",
  ];

  const skillCategories = [
    {
      title: "Programming Languages",
      technologies: ["Python", "Java"],
    },
    {
      title: "Frontend Development",
      technologies: [
        "HTML5",
        "CSS3",
        "Bootstrap",
        "React.js",
      ],
    },
    {
      title: "Backend Development",
      technologies: ["Node.js"],
    },
    {
      title: "Databases",
      technologies: ["MySQL", "PostgreSQL"],
    },
    {
      title: "Developer Tools",
      technologies: [
        "Git",
        "GitHub",
        "VS Code",
        "Jupyter Notebook",
      ],
    },
  ];

  const projects = [
    {
      number: "01",
      title: "EV Charging Demand & Peak Prediction",
      category: "Machine Learning & Sustainable Energy",
      status: "Planned",
      description:
        "A proposed machine learning system to forecast EV charging demand, vehicle arrivals, energy requirements, and peak electricity loads using historical charging records, weather data, and user behavior. The goal is to help solar-powered charging stations manage energy efficiently.",
      features: [
        "EV charging demand forecasting",
        "Peak electricity load prediction",
        "Weather-aware demand analysis",
        "Solar charging optimization",
      ],
      technologies: [
        "Python",
        "Pandas",
        "NumPy",
        "Scikit-learn",
        "XGBoost",
        "LightGBM",
        "FastAPI",
        "Streamlit",
        "Plotly",
      ],
    },
    {
      number: "02",
      title:
        "Real-Time Fraud & Anomaly Detection Engine",
      category: "FinTech, Machine Learning & Explainable AI",
      status: "Completed",
      description:
        "A hybrid machine learning system designed to detect suspicious digital payment transactions. It combines supervised fraud classification with unsupervised anomaly detection, assigns transaction risk scores, and uses SHAP to explain flagged transactions through an interactive dashboard.",
      features: [
        "Hybrid fraud and anomaly detection",
        "Real-time transaction risk scoring",
        "Behavioral velocity analysis",
        "Three-tier transaction decision routing",
        "SHAP-based explainable AI alerts",
        "Live transaction simulation dashboard",
      ],
      technologies: [
        "Python",
        "Pandas",
        "Scikit-learn",
        "XGBoost",
        "LightGBM",
        "SHAP",
        "FastAPI",
        "Streamlit",
        "Plotly",
      ],
    },
  ];

  const contactCards = [
    {
      title: "Email",
      value: email,
      href: `mailto:${email}`,
      symbol: "@",
    },
    {
      title: "Phone",
      value: phone,
      href: `tel:${phone.replace(/\s/g, "")}`,
      symbol: "☎",
    },
    {
      title: "LinkedIn",
      value: linkedInUrl
        ? "View my LinkedIn profile"
        : "Profile link to be confirmed",
      href: linkedInUrl,
      symbol: "in",
    },
    {
      title: "Location",
      value: "Hyderabad, Telangana, India",
      href: "",
      symbol: "⌖",
    },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#080B16] text-white">
      {/* Background Effects */}
      <div className="pointer-events-none absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-violet-600/10 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Navigation */}
        <header className="flex min-h-24 flex-wrap items-center justify-between gap-4 border-b border-white/10 py-5">
          <a
            href="#home"
            className="text-2xl font-black tracking-tight"
          >
            SC<span className="text-cyan-400">.</span>
          </a>

          <nav className="flex flex-wrap gap-5 text-sm text-gray-300">
            {[
              ["Home", "#home"],
              ["About", "#about"],
              ["Skills", "#skills"],
              ["Projects", "#projects"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="transition-colors hover:text-cyan-400"
              >
                {label}
              </a>
            ))}
          </nav>
        </header>

        {/* Homepage */}
        <section
          id="home"
          className="flex min-h-[75vh] flex-col justify-center py-20"
        >
          <div className="mb-8 w-fit rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
            Welcome to my digital space
          </div>

          <p className="mb-4 text-lg text-gray-400">
            Hello, I&apos;m
          </p>

          <h1 className="max-w-5xl text-5xl font-extrabold leading-tight tracking-tight sm:text-7xl lg:text-8xl">
            AMPELLY
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-500 bg-clip-text text-transparent">
              SRI CHARAN
            </span>
          </h1>

          <h2 className="mt-8 text-xl font-medium text-gray-200 sm:text-2xl">
            Computer Science &amp; Data Science Student
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-gray-400">
            I am a B.Tech student at Malla Reddy Technical
            Campus. I enjoy learning programming, exploring
            modern web technologies, and building useful
            applications.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-[#080B16] transition-colors hover:bg-cyan-300"
            >
              Explore My Projects
            </a>

            <span className="text-sm text-gray-400">
              Hyderabad, India
            </span>
          </div>
        </section>

        {/* About Me */}
        <section id="about" className="py-24">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Get to know me
          </p>

          <h2 className="mb-8 text-4xl font-bold sm:text-5xl">
            About <span className="text-cyan-400">Me.</span>
          </h2>

          <p className="max-w-3xl text-lg leading-9 text-gray-400">
            I am Ampelly Sri Charan, a Computer Science and
            Data Science student at Malla Reddy Technical
            Campus, Hyderabad. I am passionate about
            programming, web development, and exploring
            modern technologies. My goal is to improve my
            technical skills and build innovative real-world
            projects.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-cyan-400/40">
              <h3 className="mb-2 text-xl font-bold">
                Education
              </h3>

              <p className="text-gray-400">
                B.Tech in Computer Science and Data Science
              </p>
              <p className="mt-2 text-cyan-400">
                Malla Reddy Technical Campus
              </p>
              <p className="mt-2 text-gray-400">
                2025 - 2029
              </p>
              <p className="mt-2 text-cyan-400">
                CGPA: 8.9 / 10
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-cyan-400/40">
              <h3 className="mb-2 text-xl font-bold">
                My Focus
              </h3>

              <p className="text-gray-400">
                Software Development, Data Science,
                and Modern Web Technologies
              </p>
              <p className="mt-4 text-gray-400">
                Learning new technologies and improving
                my problem-solving skills.
              </p>
            </div>
          </div>
        </section>

        {/* Technical Skills */}
        <section
          id="skills"
          className="border-t border-white/10 py-24"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            What I work with
          </p>

          <h2 className="mb-5 text-4xl font-bold sm:text-5xl">
            Technical{" "}
            <span className="text-cyan-400">Skills.</span>
          </h2>

          <p className="mb-12 max-w-2xl text-lg leading-8 text-gray-400">
            Here are the programming languages, web
            technologies, databases, and development tools
            I use.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className="group rounded-2xl border border-white/10 bg-white/5 p-7 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/50 hover:bg-cyan-400/5"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 font-bold text-cyan-400">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3 className="mb-3 text-xl font-bold">
                  {category.title}
                </h3>

                <div className="mt-6 flex flex-wrap gap-2">
                  {category.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-lg border border-white/10 bg-[#111827] px-3 py-2 text-sm text-gray-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Projects */}
        <section
          id="projects"
          className="border-t border-white/10 py-24"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            My portfolio work
          </p>

          <h2 className="mb-5 text-4xl font-bold sm:text-5xl">
            Featured{" "}
            <span className="text-cyan-400">Projects.</span>
          </h2>

          <p className="mb-12 max-w-3xl text-lg leading-8 text-gray-400">
            Explore my projects in machine learning, data
            science, financial technology, and sustainable
            energy solutions.
          </p>

          <div className="grid gap-8 lg:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.number}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#101522] transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/50"
              >
                <div className="relative flex min-h-48 items-center justify-center overflow-hidden bg-gradient-to-br from-cyan-950 via-blue-950 to-violet-950">
                  <div className="absolute h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" />

                  <div className="relative text-center">
                    <p className="text-sm font-semibold tracking-widest text-cyan-300">
                      PROJECT {project.number}
                    </p>

                    <div className="mt-4 text-6xl font-black text-white/20">
                      {project.number}
                    </div>
                  </div>

                  <span
                    className={`absolute right-5 top-5 rounded-full border px-4 py-2 text-xs font-semibold ${
                      project.status === "Completed"
                        ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-300"
                        : "border-amber-400/30 bg-amber-400/10 text-amber-300"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-cyan-400">
                    {project.category}
                  </p>

                  <h3 className="mb-5 text-2xl font-bold leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-sm leading-8 text-gray-400">
                    {project.description}
                  </p>

                  <h4 className="mb-4 mt-8 font-semibold">
                    {project.status === "Planned"
                      ? "Planned Features"
                      : "Main Features"}
                  </h4>

                  <ul className="space-y-3">
                    {project.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm text-gray-300"
                      >
                        <span className="mt-1 text-cyan-400">
                          ✓
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-8">
                    <h4 className="mb-4 font-semibold">
                      {project.status === "Planned"
                        ? "Proposed Technologies"
                        : "Project Technologies"}
                    </h4>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-lg border border-cyan-400/20 bg-cyan-400/5 px-3 py-2 text-xs font-medium text-cyan-200"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Contact Me Section */}
        <section
          id="contact"
          className="border-t border-white/10 py-24"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Let's connect
          </p>

          <h2 className="mb-6 text-4xl font-bold sm:text-5xl">
            Contact <span className="text-cyan-400">Me.</span>
          </h2>

          <p className="mb-12 max-w-2xl text-lg leading-8 text-gray-400">
            I am interested in learning opportunities,
            internships, and collaborations. Feel free
            to reach out to me.
          </p>

          {/* Contact Cards */}
          <div className="grid gap-6 sm:grid-cols-2">
            {contactCards.map((contact) => (
              <div
                key={contact.title}
                className="group rounded-2xl border border-white/10 bg-white/5 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-xl font-bold text-cyan-400">
                  {contact.symbol}
                </div>

                <h3 className="mb-3 text-xl font-bold">
                  {contact.title}
                </h3>

                {contact.href ? (
                  <a
                    href={contact.href}
                    target={
                      contact.title === "LinkedIn"
                        ? "_blank"
                        : undefined
                    }
                    rel={
                      contact.title === "LinkedIn"
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="break-all text-sm text-gray-400 transition-colors hover:text-cyan-400"
                  >
                    {contact.value}
                  </a>
                ) : (
                  <p className="text-sm text-gray-400">
                    {contact.value}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Email Action Button */}
          <div className="mt-12 rounded-3xl border border-cyan-400/20 bg-gradient-to-r from-cyan-500/10 to-violet-500/10 p-8 text-center sm:p-12">
            <h3 className="mb-4 text-2xl font-bold sm:text-3xl">
              Have an opportunity or idea?
            </h3>

            <p className="mb-8 text-gray-400">
              Let's discuss learning, technology,
              and meaningful projects.
            </p>

            <a
              href={`mailto:${email}`}
              className="inline-flex rounded-xl bg-cyan-400 px-8 py-4 font-bold text-[#080B16] transition-all hover:-translate-y-1 hover:bg-cyan-300"
            >
              Send Me an Email
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10 py-8 text-center text-sm text-gray-500">
          © 2026 Ampelly Sri Charan. Built with Next.js,
          React, TypeScript &amp; Tailwind CSS.
        </footer>
      </div>
    </main>
  );
}
