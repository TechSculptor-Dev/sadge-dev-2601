"use client"

import WorkExperienceCard from "@/components/molecules/WorkExperienceCard";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


export default function Home() {

  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
      <a href="#content" className="absolute left-0 top-0 block -translate-x-full rounded bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600 px-4 py-3 text-sm font-bold uppercase tracking-widest text-white focus-visible:translate-x-0">Skip to Content</a>
      <div className="lg:flex lg:justify-between lg:gap-4">
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
              <a href="/">Sadashiv Rane</a>
            </h1>
            <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">Senior Software Engineer</h2>
            <nav className="nav hidden lg:block" aria-label="In-page jump links">
              <ul className="mt-16 w-max">
                <li>
                  <a className="group flex items-center py-3 active" href="#about"><span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span><span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">About</span></a>
                </li>
                <li>
                  <a className="group flex items-center py-3 " href="#experience"><span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span><span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Experience</span></a>
                </li>
              </ul>
            </nav>
          </div>
          <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
            <li className="mr-5 shrink-0 text-xs">
              <a className="block hover:text-slate-200" href="https://github.com/TechSculptor-Dev" target="_blank" rel="noreferrer noopener" aria-label="GitHub (opens in a new tab)" title="GitHub">
                <span className="sr-only">GitHub</span>
                <FaGithub size={30} />
              </a>
            </li>
            <li className="mr-5 shrink-0 text-xs">
              <a className="block hover:text-slate-200" href="https://www.linkedin.com/in/sadashiv26/" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn (opens in a new tab)" title="LinkedIn">
                <span className="sr-only">LinkedIn</span>
                <FaLinkedin size={30} />
              </a>
            </li>
          </ul>
        </header>
        <main id="content" className="pt-24 lg:w-[52%] lg:py-24">
          <section id="about" aria-label="About me" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">About</h2>
            </div>
            <div>
              <p className="mb-4">As a Software Engineer is to design, develop, and maintain high-quality software solutions while ensuring scalability,
                performance, and maintainability. They lead technical projects, mentor junior engineers, and collaborate with cross-
                functional teams to implement complex systems that align with business goals. Senior engineers are responsible for
                making key architectural decisions, optimizing existing codebases, and ensuring best practices in coding, testing, and
                deployment.
              </p>
              <p>
                They also stay updated with emerging technologies, contribute to improving development processes, and
                help drive innovation within the team. Additionally, they focus on delivering robust solutions that meet user needs and
                business requirements while ensuring code quality, security, and performance.
              </p>
            </div>
          </section>
          <section id="experience" aria-label="Work Experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Experience</h2>
            </div>
            <div>
              <ol className="group/list">
                <li className="mb-12">
                  <WorkExperienceCard designation="Senior Software Engineer - Cratas Techno Solutions PVT LTD" timePeriod="Aug-2024 to present" aboutExperience={["Developed a high-performance payment gateway backend using NestJS, Jenkins, and Docker in a microservicesarchitecture, leveraging TypeScript for scalable, maintainable code.", "Developed a high-performance, component-based architecture to meet frontend requirements and ensurescalability, utilizing Next.js, Zustand for state management, dynamic forms, and robust role-based access controlfor permissions.", "Ensured optimal code quality and performance through rigorous code optimization and comprehensive unit testing for both frontend and backend, utilizing Jest for effective test automation."]} technologiesUsed={["Javascript", "Next Js", "React Js", "Typescript", "Mongo Db", "Nest Js", "Rest Api"]} />
                </li>
                <li className="mb-12">
                  <WorkExperienceCard designation="Software Developer - Boppo Technologies" timePeriod="March-2022 to Aug-2024" aboutExperience={[
                    "Created and maintained a high-end, SEO-friendly eCommerce website using Next.js as the frontend framework and NestJS with TypeScript for the backend as Microservices.",
                    "It also leverages Docker for containerization and integrates AWS services such as SNS (Simple Notification Service), SES (Simple Email Service), and S3 (Simple Storage Service) to enhance reliability, scalability, and overall performance.",
                    "The platform incorporates advanced eCommerce features, including third-party shipping integrations, seamless payment gateway integrations, and innovative discounting mechanisms.",
                    "It also provides users with robust CMS capabilities for flexible content management, along with advanced order subscription flows and streamlined inventory management.",
                    "Also worked on Android and iOS app development using React Native, including the end-to-end process of building, testing, and successfully publishing the apps on their respective app stores."
                  ]} technologiesUsed={["Javascript", "Next Js", "React Js", "Typescript", "Mongo Db", "Nest Js", "Rest Api", "React Native", "Express", "SQL", "Docker"]} />
                </li>
              </ol>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
