document.querySelector("#homePage").innerHTML=
`
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>CamCourse | Home</title>
    <link rel="stylesheet" href="./src/output.css" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css"
      integrity="sha512-2SwdPD6INVrV/lHTZbO2nodKhrnDdJK9/kg2XD1r9uGqPo1cUbujc+IYdlYdEErWNu69gVcYgdxlmVmzTWnetw=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
  </head>
  <body class="bg-white text-campus-ink">
    <header
      id="site-header"
      class="site-header fixed top-0 z-30 w-full border-b border-white/20 bg-white/90 text-campus-navy"
    >
      <nav
        class="mx-auto flex max-w-[94%] items-center justify-between gap-3 py-3 xl:max-w-[78%]"
      >
        <div class="flex items-center gap-3">
          <a href="./index.html" class="shrink-0">
            <span
              class="bg-linear-to-r from-campus-navy to-campus-blue bg-clip-text text-2xl font-bold text-transparent dark:text-white"
            >
              <span class="text-2xl">&lt;/&gt;</span>CamCourse</span
            >
          </a>

          <div id="explore-wrap" class="relative hidden lg:block">
            <button
              id="explore-button"
              class="flex items-center rounded-lg px-3 py-2 font-semibold hover:bg-campus-sky"
              type="button"
              aria-expanded="false"
              aria-controls="explore-menu"
            >
              Explore
              <i class="fa-solid fa-angle-down ml-2 text-sm transition-transform"></i>
            </button>

            <div
              id="explore-menu"
              class="explore-mega hidden"
            >
              <div class="explore-mega-inner">
                <div class="explore-col explore-col-left">
                  <p class="explore-heading">Goals</p>
                  <div class="grid gap-1">
                    <a href="./src/pages/course.html" class="explore-goal-link">
                      <i class="fa-solid fa-compass"></i>
                      Take a free course
                    </a>
                    <a href="./src/pages/degree.html" class="explore-goal-link">
                      <i class="fa-solid fa-graduation-cap"></i>
                      Earn a Degree
                    </a>
                    <a href="./src/pages/subscription/plans.html" class="explore-goal-link">
                      <i class="fa-solid fa-certificate"></i>
                      Earn a Certificate
                    </a>
                    <a href="./src/pages/course.html" class="explore-goal-link">
                      <i class="fa-solid fa-briefcase"></i>
                      Find your new career
                    </a>
                  </div>
                </div>
                <div class="explore-col explore-col-center">
                  <div>
                    <p class="explore-heading">Subjects</p>
                    <div class="grid gap-1">
                      <a href="./src/pages/courses/dataAnalyticsCourse.html" class="explore-link">Data Science</a>
                      <a href="./src/pages/course.html" class="explore-link">Business</a>
                      <a href="./src/pages/courses/frontendCourse.html" class="explore-link">Computer Science</a>
                      <a href="./src/pages/courses/cloudComputingCourse.html" class="explore-link">Information Technology</a>
                      <a href="./src/pages/course.html" class="explore-link">Language Learning</a>
                      <a href="./src/pages/course.html" class="explore-link">Health</a>
                    </div>
                  </div>
                  <div>
                    <p class="explore-heading">&nbsp;</p>
                    <div class="grid gap-1">
                      <a href="./src/pages/course.html" class="explore-link">Math and Logic</a>
                      <a href="./src/pages/course.html" class="explore-link">Personal Development</a>
                      <a href="./src/pages/course.html" class="explore-link">Physical Science and Engineering</a>
                      <a href="./src/pages/course.html" class="explore-link">Social Sciences</a>
                      <a href="./src/pages/course.html" class="explore-link">Arts and Humanities</a>
                    </div>
                  </div>
                </div>
                <div class="explore-col explore-col-right">
                  <p class="explore-heading">Popular Certificates</p>
                  <div class="grid gap-2">
                    <a href="./src/pages/courses/aiEngineerCourse.html" class="explore-link">
                      AI Engineer Professional Certificate
                      <small>CamCourse • Professional Certificate</small>
                    </a>
                    <a href="./src/pages/courses/dataAnalyticsCourse.html" class="explore-link">
                      Data Analytics Professional Certificate
                      <small>CamCourse • Professional Certificate</small>
                    </a>
                    <a href="./src/pages/courses/cybersecurityCourse.html" class="explore-link">
                      Cybersecurity Professional Certificate
                      <small>CamCourse • Professional Certificate</small>
                    </a>
                    <a href="./src/pages/courses/frontendCourse.html" class="explore-link">
                      Frontend Developer Professional Certificate
                      <small>CamCourse • Professional Certificate</small>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <a class="hidden font-medium hover:underline lg:inline" href="./src/pages/course.html">Courses</a>
          <a class="hidden font-medium hover:underline lg:inline" href="./src/pages/degree.html">Degrees</a>

          <div
            class="hidden rounded-4xl border border-gray-300 px-4 transition-all hover:border-campus-ink focus-within:border-blue-500 focus-within:shadow-sm lg:flex lg:w-72 xl:w-[360px]"
          >
            <input
              id="search-input"
              class="w-full border-none bg-transparent py-1 outline-none"
              type="text"
              placeholder="What do you want to learn?"
            />
            <button id="search-button" type="button" aria-label="Search courses">
              <i class="fa-solid fa-search text-campus-blue"></i>
            </button>
          </div>
        </div>

        <div class="flex items-center gap-3">

          <button
            id="theme-toggle"
            class="nav-icon rounded-lg hover:bg-campus-sky"
            title="switch theme"
            type="button"
            aria-label="Switch dark and light mode"
          >
            <i id="theme-icon" class="fa-solid fa-moon"></i>
          </button>

          <button
            class="nav-icon rounded-lg hover:bg-campus-sky"
          >
            <i class="fa-solid fa-bell"></i>
          </button>


          <div class="relative hidden sm:block">
            <button
              id="user-button"
              class="nav-icon rounded-lg hover:bg-campus-sky"
              title="user"
              type="button"
              aria-expanded="false"
              aria-controls="user-menu"
            >
              <i class="fa-solid fa-user"></i>
            </button>
            <div
              id="user-menu"
              class="nav-panel hidden absolute right-0 top-12 w-72 rounded-lg border border-slate-200 bg-white p-4 shadow-lg"
            >
              <div class="flex items-center gap-3 border-b border-slate-200 pb-4">
                <div class="flex h-11 w-11 items-center justify-center rounded-lg bg-campus-blue text-white">
                  <i class="fa-solid fa-user"></i>
                </div>
                <div>
                  <p class="font-bold text-campus-navy">user</p>
                  <p class="text-sm text-slate-600">student dashboard</p>
                </div>
              </div>
              <div class="mt-3 grid gap-2">
                <a class="user-action" href="./src/pages/course.html" data-action="Catalog">
                  <i class="fa-solid fa-compass"></i> Catalog
                </a>
                <a class="user-action" href="./src/pages/login.html" data-action="Login">
                  <i class="fa-solid fa-right-to-bracket"></i> Login
                </a>
                <a class="user-action" href="./src/pages/signup.html" data-action="Sign up">
                  <i class="fa-solid fa-user-plus"></i> Sign up
                </a>
              </div>
            </div>
          </div>

          <button
            id="mobile-nav-toggle"
            class="nav-icon rounded-lg border border-slate-200 sm:hidden"
            type="button"
            aria-expanded="false"
            aria-controls="mobile-nav-panel"
            aria-label="Open navigation menu"
          >
            <i class="fa-solid fa-bars"></i>
          </button>
        </div>
      </nav>

      <div
        id="mobile-nav-panel"
        class="nav-panel hidden border-t border-slate-200 bg-white px-4 py-4 sm:hidden"
      >
        <div class="mb-3 rounded-4xl border border-gray-300 px-4">
          <input
            class="w-full border-none bg-transparent py-2 outline-none"
            type="text"
            placeholder="Search courses"
          />
        </div>
        <div class="grid gap-2">
          <a class="dropdown-link" href="./src/pages/course.html">Course Catalog</a>
          <a class="dropdown-link" href="./src/pages/degree.html">Degrees</a>
          <a class="dropdown-link" href="./src/pages/about.html">About</a>
          <a class="dropdown-link" href="./src/pages/login.html">Login</a>
        </div>
      </div>
    </header>

    <main class="w-full border-b border-b-slate-200">
      <section
        class="relative isolate mt-18 flex min-h-[82vh] max-w-full items-center justify-center overflow-hidden border-b border-b-slate-200 hero-section"
      >
        <img
          src="./assets/campus-hero.png"
          alt="Students learning on campus"
          class="absolute inset-0 -z-20 h-full w-full object-cover hero-banner-image"
        />
        <div
          class="absolute inset-0 -z-10 bg-linear-to-r from-campus-navy/95 via-campus-blue/75 to-white/15"
        ></div>
        <div
          class="mx-auto grid w-[94%] gap-8 pb-12 pt-24 lg:w-[78%] lg:grid-cols-[1.04fr_0.96fr] lg:items-end"
        >
          <div class="max-w-2xl text-white" data-reveal>
            <p class="text-cyan-200">Built for Cambodian university students</p>
            <h1 class="mt-5 text-5xl font-black leading-tight sm:text-6xl lg:text-7xl">
              Learn without limits
            </h1>
            <p class="mt-5 max-w-xl text-lg leading-8 text-blue-50">
              Start, switch, or advance your career with practical IT and tech
              programs from CamCourse partner institutions.
            </p>
            <div class="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="./src/pages/course.html"
                class="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 font-semibold text-campus-blue hover:bg-blue-50"
              >
                Browse Courses
                <i class="fa-solid fa-arrow-right"></i>
              </a>
              <a
                href="./src/pages/degree.html"
                class="inline-flex items-center justify-center gap-2 rounded-lg border border-white/40 bg-white/10 px-5 py-3 font-semibold text-white hover:bg-white hover:text-campus-blue"
              >
                View Degrees
              </a>
            </div>
          </div>

          <div class="grid gap-3 sm:grid-cols-3 lg:pb-4" data-reveal>
            <div class="rounded-lg border border-white/25 bg-white/15 p-4 text-white backdrop-blur-md">
              <p class="text-3xl font-black" data-counter="80" data-suffix="+">+120</p>
              <p class="mt-1 text-sm text-blue-50">career-ready courses</p>
            </div>
            <div class="rounded-lg border border-white/25 bg-white/15 p-4 text-white backdrop-blur-md">
              <p class="text-3xl font-black" data-counter="12">+64</p>
              <p class="mt-1 text-sm text-blue-50">university partners</p>
            </div>
            <div class="rounded-lg border border-white/25 bg-white/15 p-4 text-white backdrop-blur-md">
              <p class="text-3xl font-black" data-counter="96" data-suffix="%">4.5</p>
              <p class="mt-1 text-sm text-blue-50">learner satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      <section class="border-b border-b-slate-200 bg-white px-4 py-10">
        <div class="mx-auto w-[94%] lg:w-[78%]" data-reveal>
          <p class="text-sm font-bold uppercase text-campus-cyan">
            Learn from top university
          </p>
          <div class="mt-6 flex flex-wrap items-center justify-center gap-8 md:gap-12">
            <img class="h-16 w-auto object-contain" src="./assets/RUPP.png" alt="RUPP" />
            <img class="h-16 w-auto object-contain" src="./assets/istad.png" alt="ISTAD" />
            <img class="h-14 w-auto object-contain" src="./assets/cadt.png" alt="CADT" />
            <img class="h-14 w-auto object-contain" src="./assets/aupp.png" alt="AUPP" />
            <img class="h-16 w-auto object-contain" src="./assets/techno.png" alt="Techno" />
            <img class="h-12 w-auto object-contain" src="./assets/npic.png" alt="NPIC" />
          </div>
        </div>
      </section>

      <section class="border-b border-b-slate-200 bg-white px-4 py-12">
        <div class="mx-auto w-[94%] lg:w-[78%]" data-reveal>
          <p class="text-sm font-bold uppercase text-campus-cyan">Explore categories</p>
          <h2 class="mt-3 text-3xl font-black text-campus-navy">
            Build momentum in the skills companies hire for.
          </h2>
          <div class="mt-6 flex flex-wrap gap-3">
            <a class="link-chip" href="./src/pages/courses/frontendCourse.html">Web Development</a>
            <a class="link-chip" href="./src/pages/courses/dataAnalyticsCourse.html">Data Analytics</a>
            <a class="link-chip" href="./src/pages/courses/aiEngineerCourse.html">Artificial Intelligence</a>
            <a class="link-chip" href="./src/pages/courses/cybersecurityCourse.html">Cybersecurity</a>
            <a class="link-chip" href="./src/pages/courses/cloudComputingCourse.html">Cloud Computing</a>
            <a class="link-chip" href="./src/pages/courses/mobileAppCourse.html">Mobile Development</a>
            <a class="link-chip" href="./src/pages/courses/uiuxCourse.html">UI/UX Design</a>
            <a class="link-chip" href="./src/pages/courses/pythonCourse.html">Python Programming</a>
          </div>
        </div>
      </section>

      <section id="popular-courses" class="border-b border-b-slate-200 bg-white px-4 py-12">
        <div class="mx-auto w-[94%] lg:w-[78%]">
          <div class="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between" data-reveal>
            <div>
              <p class="text-sm font-bold uppercase text-campus-cyan">Popular Courses</p>
              <h2 class="mt-3 text-3xl font-black text-campus-navy">
                Pick a technology path and start today.
              </h2>
            </div>
            <a
              href="./src/pages/course.html"
              class="inline-flex items-center gap-2 font-semibold text-campus-blue hover:text-campus-navy"
            >
              View full catalog
              <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>

          <div class="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            <article
              class="course-card rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
              data-course-card
              data-topic="web"
              data-course="fullstack web development html css javascript backend api deployment"
              data-reveal
            >
              <img class="h-44 w-full rounded-lg object-cover" src="./assets/fullstack.jpg" alt="Fullstack Web Development" />
              <h3 class="mt-5 text-xl font-bold text-campus-navy">Fullstack Web Development</h3>
              <p class="mt-3 leading-7 text-slate-600">
                Build complete web apps from frontend to backend and deployment.
              </p>
              <div class="mt-5 flex flex-wrap gap-2 text-sm font-semibold text-campus-ink">
                <span class="rounded-lg bg-slate-100 px-3 py-1 dark:text-campus-navy">12 weeks</span>
                <span class="rounded-lg bg-slate-100 px-3 py-1 dark:text-campus-navy">42 lessons</span>
                <span class="rounded-lg bg-slate-100 px-3 py-1 dark:text-campus-navy">Certificate</span>
              </div>
            </article>

            <article
              class="course-card rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
              data-course-card
              data-topic="data"
              data-course="data science python statistics visualization machine learning"
              data-reveal
            >
              <img class="h-44 w-full rounded-lg object-cover" src="./assets/datascience.webp" alt="Data Science" />
              <h3 class="mt-5 text-xl font-bold text-campus-navy">Data Science</h3>
              <p class="mt-3 leading-7 text-slate-600">
                Learn Python, data storytelling, statistics, and model fundamentals.
              </p>
              <div class="mt-5 flex flex-wrap gap-2 text-sm font-semibold text-campus-ink">
                <span class="rounded-lg bg-slate-100 px-3 py-1 dark:text-campus-navy">10 weeks</span>
                <span class="rounded-lg bg-slate-100 px-3 py-1 dark:text-campus-navy">36 lessons</span>
                <span class="rounded-lg bg-slate-100 px-3 py-1 dark:text-campus-navy">Projects</span>
              </div>
            </article>

            <article
              class="course-card rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
              data-course-card
              data-topic="ai"
              data-course="ai engineer prompt engineering model api deployment"
              data-reveal
            >
              <img class="h-44 w-full rounded-lg object-cover" src="./assets/aiEngineer.webp" alt="AI Engineer" />
              <h3 class="mt-5 text-xl font-bold text-campus-navy">AI Engineer</h3>
              <p class="mt-3 leading-7 text-slate-600">
                Design and ship AI-powered products using modern model APIs.
              </p>
              <div class="mt-5 flex flex-wrap gap-2 text-sm font-semibold text-campus-ink">
                <span class="rounded-lg bg-slate-100 px-3 py-1 dark:text-campus-navy">8 weeks</span>
                <span class="rounded-lg bg-slate-100 px-3 py-1 dark:text-campus-navy">30 lessons</span>
                <span class="rounded-lg bg-slate-100 px-3 py-1 dark:text-campus-navy">Mentor labs</span>
              </div>
            </article>
          </div>
          <div
            id="course-empty-state"
            class="hidden mt-6 rounded-lg border border-slate-200 bg-campus-sky p-5 text-center font-semibold text-campus-navy"
          >
            No matching course found. Try Web, Data, AI, or Python.
          </div>
        </div>
      </section>

      <section id="career-paths" class="border-b border-b-slate-200 bg-white px-4 py-12">
        <div class="mx-auto w-[94%] lg:w-[78%]">
          <div class="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div data-reveal>
              <p class="text-sm font-bold uppercase text-campus-cyan">Career paths</p>
              <h2 class="mt-3 text-3xl font-black text-campus-navy">
                Prepare for an in-demand technology role.
              </h2>
              <p class="mt-4 leading-7 text-slate-600">
                Choose a role path and complete curated courses, labs, and capstones
                that map to real job skills.
              </p>
            </div>
            <div class="grid gap-4 sm:grid-cols-3">
              <article class="stat-card" data-reveal>
                <i class="fa-solid fa-code text-2xl text-campus-cyan"></i>
                <h3 class="mt-3 text-lg font-bold text-campus-navy">Frontend Developer</h3>
                <p class="mt-2 text-sm leading-6 text-slate-600">
                  React, responsive UI, performance, and accessibility.
                </p>
              </article>
              <article class="stat-card" data-reveal>
                <i class="fa-solid fa-database text-2xl text-campus-cyan"></i>
                <h3 class="mt-3 text-lg font-bold text-campus-navy">Data Analyst</h3>
                <p class="mt-2 text-sm leading-6 text-slate-600">
                  SQL, dashboards, statistics, and business insights.
                </p>
              </article>
              <article class="stat-card" data-reveal>
                <i class="fa-solid fa-shield-halved text-2xl text-campus-cyan"></i>
                <h3 class="mt-3 text-lg font-bold text-campus-navy">Security Specialist</h3>
                <p class="mt-2 text-sm leading-6 text-slate-600">
                  Threat detection, hardening, and incident response.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section class="border-b border-b-slate-200 bg-white px-4 py-12">
        <div class="mx-auto w-[94%] lg:w-[78%]">
          <p class="text-sm font-bold uppercase text-campus-cyan" data-reveal>
            Hands-on learning
          </p>
          <h2 class="mt-3 text-3xl font-black text-campus-navy" data-reveal>
            Practice with realistic labs and team workflows.
          </h2>
          <div class="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            <article class="rounded-lg border border-slate-200 bg-white p-5 shadow-sm" data-reveal>
              <i class="fa-solid fa-terminal text-2xl text-campus-cyan"></i>
              <h3 class="mt-4 text-lg font-bold text-campus-navy">Code Labs</h3>
              <p class="mt-2 text-sm leading-6 text-slate-600">
                Build and debug projects in browser-based dev environments.
              </p>
            </article>
            <article class="rounded-lg border border-slate-200 bg-white p-5 shadow-sm" data-reveal>
              <i class="fa-solid fa-diagram-project text-2xl text-campus-cyan"></i>
              <h3 class="mt-4 text-lg font-bold text-campus-navy">Capstone Projects</h3>
              <p class="mt-2 text-sm leading-6 text-slate-600">
                Deliver portfolio projects with milestone feedback.
              </p>
            </article>
            <article class="rounded-lg border border-slate-200 bg-white p-5 shadow-sm" data-reveal>
              <i class="fa-solid fa-people-group text-2xl text-campus-cyan"></i>
              <h3 class="mt-4 text-lg font-bold text-campus-navy">Peer Reviews</h3>
              <p class="mt-2 text-sm leading-6 text-slate-600">
                Improve through constructive reviews from fellow learners.
              </p>
            </article>
            <article class="rounded-lg border border-slate-200 bg-white p-5 shadow-sm" data-reveal>
              <i class="fa-solid fa-briefcase text-2xl text-campus-cyan"></i>
              <h3 class="mt-4 text-lg font-bold text-campus-navy">Career Prep</h3>
              <p class="mt-2 text-sm leading-6 text-slate-600">
                Resume and interview prep aligned to each role path.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="feedback" class="border-b border-b-slate-200 bg-white px-4 py-12">
        <div class="mx-auto w-[94%] lg:w-[78%]">
          <h2 class="mt-3 text-3xl font-black text-campus-navy" data-reveal>
            What learners are achieving with CamCourse
          </h2>
          <div class="mt-8 grid gap-5 md:grid-cols-3">
            <article class="rounded-lg border border-slate-200 bg-white p-6 shadow-sm" data-reveal>
              <div class="flex items-center gap-3">
                <div class="flex h-11 w-11 items-center justify-center rounded-lg bg-campus-blue font-bold text-white">
                  T
                </div>
                <div>
                  <p class="font-bold text-campus-navy">Heng Tithean</p>
                </div>
              </div>
              <p class="mt-5 leading-7 text-campus-ink">
                "I shipped my first fullstack project and used it in internship interviews."
              </p>
            </article>
            <article class="rounded-lg border border-slate-200 bg-white p-6 shadow-sm" data-reveal>
              <div class="flex items-center gap-3">
                <div class="flex h-11 w-11 items-center justify-center rounded-lg bg-emerald-700 font-bold text-white">
                  PV
                </div>
                <div>
                  <p class="font-bold text-campus-navy">Phai Virakthun</p>
                </div>
              </div>
              <p class="mt-5 leading-7 text-campus-ink">
                "The data path was structured clearly and the labs made SQL finally click for me."
              </p>
            </article>
            <article class="rounded-lg border border-slate-200 bg-white p-6 shadow-sm" data-reveal>
              <div class="flex items-center gap-3">
                <div class="flex h-11 w-11 items-center justify-center rounded-lg bg-amber-700 font-bold text-white">
                  SV
                </div>
                <div>
                  <p class="font-bold text-campus-navy">Son Vichet</p>
                </div>
              </div>
              <p class="mt-5 leading-7 text-campus-ink">
                "AI Engineer gave me hands-on confidence with prompt workflows and model APIs."
              </p>
            </article>
          </div>
        </div>
      </section>

      
      <section class="border-b border-b-slate-200 bg-white px-4 py-12">
        <div class="mx-auto w-[94%] lg:w-[78%]">
          <h2 class="text-3xl font-black text-campus-navy" data-reveal>Frequently asked questions</h2>
          <div class="mt-8 grid gap-4">
            <article class="rounded-lg border border-slate-200 bg-white p-5 shadow-sm" data-reveal>
              <button
                class="flex w-full items-center justify-between gap-4 text-left text-lg font-bold text-campus-navy"
                type="button"
                data-accordion-trigger="#faq-1"
                aria-expanded="false"
              >
                Is CamCourse good for beginners?
                <i class="fa-solid fa-angle-down transition-transform"></i>
              </button>
              <p id="faq-1" class="hidden mt-4 leading-7 text-slate-600">
                Yes. Many paths start from beginner level and include guided projects
                before moving to advanced topics.
              </p>
            </article>
            <article class="rounded-lg border border-slate-200 bg-white p-5 shadow-sm" data-reveal>
              <button
                class="flex w-full items-center justify-between gap-4 text-left text-lg font-bold text-campus-navy"
                type="button"
                data-accordion-trigger="#faq-2"
                aria-expanded="false"
              >
                Will I receive certificates after completion?
                <i class="fa-solid fa-angle-down transition-transform"></i>
              </button>
              <p id="faq-2" class="hidden mt-4 leading-7 text-slate-600">
                Yes. Eligible courses and paths provide completion certificates for
                your portfolio and job applications.
              </p>
            </article>
            <article class="rounded-lg border border-slate-200 bg-white p-5 shadow-sm" data-reveal>
              <button
                class="flex w-full items-center justify-between gap-4 text-left text-lg font-bold text-campus-navy"
                type="button"
                data-accordion-trigger="#faq-3"
                aria-expanded="false"
              >
                Can I switch between role paths?
                <i class="fa-solid fa-angle-down transition-transform"></i>
              </button>
              <p id="faq-3" class="hidden mt-4 leading-7 text-slate-600">
                Absolutely. You can move between web, data, AI, cloud, and security
                paths at any time.
              </p>
            </article>
          </div>
        </div>
      </section>
      <section class="border-b border-b-slate-200 bg-white px-4 py-12">
        <div class="mx-auto w-[94%] lg:w-[78%]">
          <div class="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div data-reveal>
              <p class="text-sm font-bold uppercase text-campus-cyan">Invest in your career</p>
              <h2 class="mt-3 text-3xl font-black text-campus-navy">
                Get unlimited access to top courses
              </h2>
              <p class="mt-4 leading-7 text-slate-600">
                Choose a CamCourse plan and get access to our full catalog, guided projects, and professional certificates. Start learning today and accelerate your tech career.
              </p>
              <a href="./src/pages/subscription/plans.html" class="mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-campus-blue px-6 py-3 font-semibold text-white hover:bg-campus-navy transition-colors">
                View Plans & Pricing
                <i class="fa-solid fa-arrow-right"></i>
              </a>
            </div>
            <div class="rounded-xl border border-slate-200 bg-campus-sky p-8" data-reveal>
              <h3 class="text-xl font-bold text-campus-navy">Premium Plan</h3>
              <p class="mt-2 text-sm text-slate-600">Best for dedicated learners</p>
              <div class="mt-4 flex items-baseline gap-2">
                <span class="text-4xl font-black text-campus-navy">$14.99</span>
                <span class="text-slate-600">/ month</span>
              </div>
              <ul class="mt-6 grid gap-3 text-sm text-campus-ink">
                <li class="flex items-center gap-2"><i class="fa-solid fa-check text-campus-cyan"></i> Unlimited access to all courses</li>
                <li class="flex items-center gap-2"><i class="fa-solid fa-check text-campus-cyan"></i> Earn professional certificates</li>
                <li class="flex items-center gap-2"><i class="fa-solid fa-check text-campus-cyan"></i> Real-world projects & labs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section class="border-b border-b-campus-navy bg-campus-sky px-4 py-16">
        <div class="mx-auto w-[94%] text-center lg:w-[78%]" data-reveal>
          <h2 class="text-3xl font-black text-campus-navy">Join learners worldwide</h2>
          <p class="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            CamCourse is the trusted platform for university students and professionals looking to build modern technology skills.
          </p>
          <div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div class="rounded-lg bg-campus-sky p-6 shadow-sm border border-slate-400">
              <p class="text-4xl font-black text-campus-navy">100K+</p>
              <p class="mt-2 font-semibold text-campus-navy">Active Learners</p>
            </div>
            <div class="rounded-lg bg-campus-sky p-6 shadow-sm border border-slate-400">
              <p class="text-4xl font-black text-campus-navy">80+</p>
              <p class="mt-2 font-semibold text-campus-navy">Career Programs</p>
            </div>
            <div class="rounded-lg bg-campus-sky p-6 shadow-sm border border-slate-400">
              <p class="text-4xl font-black text-campus-navy">12</p>
              <p class="mt-2 font-semibold text-campus-navy">University Partners</p>
            </div>
            <div class="rounded-lg bg-campus-sky p-6 shadow-sm border border-slate-400">
              <p class="text-4xl font-black text-campus-navy">96%</p>
              <p class="mt-2 font-semibold text-campus-navy">Career Outcomes</p>
            </div>
          </div>
        </div>
      </section>

      <section class="border-b border-b-slate-200 bg-campus-navy px-4 py-16 text-center text-white">
        <div class="mx-auto w-[94%] lg:w-[60%]" data-reveal>
          <h2 class="text-4xl font-black">Start your tech journey today</h2>
          <p class="mt-5 text-lg text-blue-100">
            Join CamCourse and start building the skills that companies are hiring for.
          </p>
          <a href="./src/pages/signup.html" class="mt-8 inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 font-bold text-campus-blue hover:bg-campus-blue hover:text-campus-sky transition-colors">
            Start Learning for Free
          </a>
        </div>
      </section>

      <section class="bg-white px-4 py-12">
        <div class="mx-auto w-[94%] rounded-lg border border-slate-200 bg-campus-sky p-6 lg:w-[78%]" data-reveal>
          <div class="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p class="text-sm font-bold uppercase text-campus-cyan">Stay updated</p>
              <h2 class="mt-3 text-3xl font-black text-campus-navy">
                Get new courses and scholarship updates.
              </h2>
              <p class="mt-3 max-w-xl leading-7 text-slate-600">
                Receive monthly updates about role paths, new courses, and learning events.
              </p>
            </div>
            <form class="grid gap-3" data-newsletter-form>
              <input
                class="rounded-lg border border-slate-300 bg-campus-sky px-4 py-3 text-campus-navy outline-none focus:border-campus-blue"
                type="email"
                placeholder="Enter your email"
                required
              />
              <button
                class="inline-flex items-center justify-center gap-2 rounded-lg bg-campus-blue px-5 py-3 font-semibold text-campus-sky hover:bg-campus-navy"
                type="submit"
              >
                Subscribe
                <i class="fa-solid fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>

    <footer class="bg-white py-8 text-campus-navy">
      <div
        class="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 sm:grid-cols-2 sm:px-12 lg:grid-cols-4 lg:px-16"
      >
        <div>
          <a href="./index.html" class="text-2xl font-bold">&lt;/&gt;CamCourses</a>
          <p class="mt-4 leading-7 text-slate-600">
            Practical technology education for learners in Cambodia and beyond.
          </p>
        </div>
        <div>
          <h3 class="text-xl font-bold">Explore</h3>
          <ul class="mt-4 space-y-2">
            <li><a class="hover:text-campus-blue" href="./src/pages/course.html">Course catalog</a></li>
            <li><a class="hover:text-campus-blue" href="./src/pages/degree.html">Degrees</a></li>
            <li><a class="hover:text-campus-blue" href="./src/pages/about.html">About us</a></li>
          </ul>
        </div>
        <div>
          <h3 class="text-xl font-bold">Support</h3>
          <ul class="mt-4 space-y-2">
            <li><a class="hover:text-campus-blue" href="./src/pages/policyAndPrivacy.html">Privacy policy</a></li>
            <li><a class="hover:text-campus-blue" href="./src/pages/termOfService.html">Terms of service</a></li>
            <li><a class="hover:text-campus-blue" href="./src/pages/login.html">Learner login</a></li>
          </ul>
        </div>
        <div>
          <h3 class="text-xl font-bold">Contact</h3>
          <ul class="mt-4 space-y-2">
            <li><i class="fa-solid fa-envelope"></i> camcourses@gmail.com</li>
            <li><i class="fa-solid fa-phone"></i> +855 12 345 678</li>
            <li><i class="fa-solid fa-location-dot"></i> Phnom Penh, Cambodia</li>
          </ul>
        </div>
      </div>
      <hr class="mx-auto mt-8 max-w-[75%] border-campus-navy" />
      <div class="mx-auto mt-4 flex max-w-[75%] justify-center">
        <p class="text-sm text-campus-navy sm:text-base">
          © 2026 CamCourses. All rights reserved.
        </p>
      </div>
    </footer>

    <div class="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      <div
        id="contact-panel"
        class="contact-card hidden w-80 rounded-lg border border-slate-200 bg-white p-5 shadow-lg"
      >
        <div class="flex items-start justify-between gap-4">
          <div>
            <p class="text-lg font-bold text-campus-navy">Contact CamCourse</p>
            <p class="mt-1 text-sm text-slate-600">
              Ask about courses, plans, or certificates.
            </p>
          </div>
          <button
            id="contact-close"
            class="nav-icon text-campus-ink hover:text-campus-blue"
            type="button"
            aria-label="Close contact panel"
          >
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
        <div class="mt-4 grid gap-3">
          <a class="contact-link" href="mailto:camcourses@gmail.com">
            <i class="fa-solid fa-envelope"></i> camcourses@gmail.com
          </a>
          <a class="contact-link" href="tel:+85512345678">
            <i class="fa-solid fa-phone"></i> +855 12 345 678
          </a>
          <a class="contact-link" href="#">
            <i class="fa-brands fa-telegram"></i> Telegram support
          </a>
        </div>
      </div>
      <button
        id="contact-toggle"
        class="inline-flex items-center gap-2 rounded-lg bg-campus-blue px-5 py-3 font-semibold text-white shadow-lg hover:bg-campus-navy"
        type="button"
        aria-expanded="false"
        aria-controls="contact-panel"
      >
        <i class="fa-solid fa-message"></i> Contact
      </button>
      <button
        id="scroll-top"
        class="hidden h-11 w-11 items-center justify-center rounded-lg border border-slate-200 bg-white text-campus-blue shadow-lg hover:bg-campus-sky"
        type="button"
        aria-label="Back to top"
      >
        <i class="fa-solid fa-arrow-up"></i>
      </button>
    </div>

    <div
      id="toast"
      class="toast pointer-events-none fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-lg bg-campus-navy px-5 py-3 font-semibold text-white opacity-0 shadow-lg"
      role="status"
      aria-live="polite"
    ></div>
    
    <script src="./js/main.js"></script>
  </body>
</html>

`