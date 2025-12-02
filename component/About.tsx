import { firaCode, newRocker, syne } from "@/app/fonts";
import { BriefcaseBusiness, Download, GraduationCap } from "lucide-react";

const About = () => {
  // Education Array
  const educationData = [
    {
      year: "2022",
      title: "Frontend & JavaScript Foundations",
      institute: "freeCodeCamp",
      description:
        "Strengthened frontend fundamentals through certifications in Responsive Web Design and JavaScript Algorithms, improving UI structure, problem-solving, and core development skills.",
    },
    {
      year: "2023",
      title: "Full Stack Web Development",
      institute: "Udemy",
      description:
        "Built MERN-based full-stack applications with REST APIs, authentication workflows, and scalable project structures while improving backend logic and frontend integration.",
    },
    {
      year: "2022 – 2025",
      title: "Bachelor of Computer Applications (BCA)",
      institute: "Kalinga University, Raipur",
      description:
        "Studied core CS fundamentals, databases, basic DSA concepts, and software development principles, gaining a strong foundation for building full-stack applications.",
    },
  ];
  // Edperience Data
  const experineceData = [
    {
      year: "May 2023 – Aug 2024",
      title: "Frontend Developer",
      company: "Freelance",
      description:
        "Delivered multiple client projects involving responsive landing pages, business portfolios, and clean frontend interfaces while ensuring usability, clarity, and stable performance.",
    },
    {
      year: "Aug 2024 – Apr 2025",
      title: "Frontend Developer",
      company: "Vertex Suite IT Solution, Bhilai",
      description:
        "Developed modular UI components, dashboards, and user-facing features while improving code structure, performance, and overall frontend consistency across projects.",
    },
    {
      year: "Apr 2025 – Present",
      title: "Full Stack Developer",
      company: "Vertex Suite IT Solution, Bhilai",
      description:
        "Building full-stack features using MERN, Next.js, and TypeScript, working on APIs, backend workflows, and scalable system components for production environments.",
    },
  ];

  return (
    <section
      id="about"
      className={`flex flex-col min-h-screen mt-10 lg:px-10 ${firaCode.className}`}
    >
      <h2
        className={`text-center text-4xl font-bold mb-10 dark:text-white tracking-widest ${newRocker.className}`}
      >
        About
      </h2>

      {/* About Data */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 px-4">
        {/* Card 1 */}
        <div className="about-card">
          <h3 className={`about-card-h3 ${syne.className}`}>40+</h3>
          <p className="about-card-p">Happy client</p>
        </div>
        {/* Card 2 */}
        <div className="about-card">
          <h3 className={`about-card-h3 ${syne.className}`}>2.5+</h3>
          <p className="about-card-p">Year Of Experience</p>
        </div>
        {/* Card 3 */}
        <div className="about-card">
          <h3 className={`about-card-h3 ${syne.className}`}>50+</h3>
          <p className="about-card-p">Project Done</p>
        </div>
      </div>
      {/* Content Text */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        <div className="lg:col-span-2 space-y-6">
          <p className="text-gray-600 dark:text-white text-[15px] leading-relaxed">
            I’m a MERN Stack and Next.js developer who builds fast, structured,
            and scalable web experiences. My work spans frontend engineering,
            backend architecture, and full-stack product delivery. I’ve
            completed multiple freelance projects end-to-end, consistently
            delivering clean interfaces, reliable APIs, and production-ready
            features that solve real problems.
          </p>
          <p className="text-gray-600 dark:text-white text-[15px] leading-relaxed">
            I specialize in TypeScript, modern UI frameworks, and efficient
            workflows that keep codebases fast and maintainable. My approach
            blends problem-solving and product thinking, whether I’m crafting
            pixel-perfect interfaces or building full-stack systems. I focus on
            clarity, quality, and results that matter.
          </p>
        </div>
        {/* Right Colounm */}
        <div className={`lg:col-span-1 space-y-4 ${syne.className}`}>
          <div>
            <p className="text-gray-500 dark:text-white/60 text-sm font-medium mb-1">
              Name
            </p>
            <p className="text-gray-800 dark:text-white text-xl font-semibold">
              Lokendra Nath
            </p>
          </div>
          <div>
            <p className="text-gray-500 dark:text-white/60 text-sm font-medium mb-1">
              Phone
            </p>
            <p className="text-gray-800 dark:text-white text-xl font-semibold">
              +91 8269869510
            </p>
          </div>
          <div>
            <p className="text-gray-500 dark:text-white/60 text-sm font-medium mb-1">
              Email
            </p>
            <p className="text-gray-800 dark:text-white text-xl font-semibold">
              lokendraverma225@gmail.com
            </p>
          </div>
          <div>
            <p className="text-gray-500 dark:text-white/60 text-sm font-medium mb-1">
              Location
            </p>
            <p className="text-gray-800 dark:text-white text-xl font-semibold">
              Raipur, Chhattisgarh, India
            </p>
          </div>
        </div>
      </div>
      {/* Work And Eduction Section */}
      {/* TimeLine Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 space-y-12 mt-15">
        {/* Education */}
        <div>
          <h3
            className={`text-xl md:text-2xl font-bold text-content mb-8 dark:text-secondary ${syne.className}`}
          >
            My Education
          </h3>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-linear-to-b from-cyan-400 to-cyan-500 opacity-60"></div>
            <div>
              {educationData.map((item, index) => (
                <div
                  className="relative flex items-start space-x-6 pb-8"
                  key={index}
                >
                  <div className="relative shrink-0">
                    <div className="w-8 h-8 bg-linear-to-b from-cyan-400 to-cyan-500 rounded-full flex items-center justify-center">
                      <GraduationCap className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-sm font-medium text-cyan-400 bg-cyan-50 px-2 py-1 dark:bg-dark-base/50 dark:border dark:border-secondary/80 rounded-lg">
                        {item.year}
                      </span>
                    </div>
                    <h4 className="text-lg font-semibold text-content dark:text-white">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 mb-2 dark:text-white/90">
                      {item.institute}
                    </p>
                    <p className="text-gray-700 text-xs dark:text-white/80">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Work Experience */}
        <div>
          <h3
            className={`text-xl md:text-2xl font-bold text-content mb-8 dark:text-secondary ${syne.className}`}
          >
            Work Experience
          </h3>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-linear-to-b from-cyan-400 to-cyan-500 opacity-60"></div>
            <div>
              {experineceData.map((item, index) => (
                <div
                  className="relative flex items-start space-x-6 pb-8"
                  key={index}
                >
                  <div className="relative shrink-0">
                    <div className="w-8 h-8 bg-linear-to-b from-cyan-400 to-cyan-500 rounded-full flex items-center justify-center">
                      <BriefcaseBusiness className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-sm font-medium text-cyan-400 bg-cyan-50 px-2 py-1 dark:bg-dark-base/50 dark:border dark:border-secondary/80 rounded-lg">
                        {item.year}
                      </span>
                    </div>
                    <h4 className="text-lg font-semibold text-content dark:text-white">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 mb-2 dark:text-white/90">
                      {item.company}
                    </p>
                    <p className="text-gray-700 text-xs dark:text-white/80">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
