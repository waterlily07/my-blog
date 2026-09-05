import { useMemo, useState } from "react";

const projects = [
  { title: "Campus Connect", type: "Web app", description: "A clean notice board concept for students to find events, clubs, and useful campus updates.", stack: ["HTML", "CSS", "JavaScript"], accent: "coral" },
  { title: "CGPA Companion", type: "Python utility", description: "A beginner-friendly Python calculator that turns semester grades into a quick CGPA estimate.", stack: ["Python", "CLI", "Validation"], accent: "lime" },
  { title: "Pocket Expense Notes", type: "Python utility", description: "A small command-line experiment for grouping daily spending and spotting simple patterns.", stack: ["Python", "Lists", "Files"], accent: "blue" },
];
const skills = ["Python", "JavaScript", "HTML & CSS", "Git & GitHub", "Problem solving", "Teamwork"];

function calculateCgpa(subjects) {
  const validSubjects = subjects.filter(({ grade }) => grade >= 0 && grade <= 10);
  if (!validSubjects.length) return "0.00";
  const credits = validSubjects.reduce((sum, subject) => sum + subject.credits, 0);
  const points = validSubjects.reduce((sum, subject) => sum + subject.grade * subject.credits, 0);
  return (points / credits).toFixed(2);
}

function App() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [subjects, setSubjects] = useState([
    { name: "Programming", grade: 8, credits: 4 },
    { name: "Mathematics", grade: 7, credits: 4 },
    { name: "Communication", grade: 9, credits: 3 },
  ]);
  const filters = ["All", "Web app", "Python utility"];
  const visibleProjects = useMemo(() => activeFilter === "All" ? projects : projects.filter((project) => project.type === activeFilter), [activeFilter]);
  const cgpa = calculateCgpa(subjects);

  function updateSubject(index, field, value) {
    setSubjects((current) => current.map((subject, subjectIndex) => subjectIndex === index ? { ...subject, [field]: field === "name" ? value : Number(value) } : subject));
  }

  return (
    <div className="site-shell">
      <header className="topbar"><a className="brand" href="#top" aria-label="Mansha Mehra home"><span>MM</span> / portfolio</a><nav className="nav-links" aria-label="Main navigation"><a href="#work">Work</a><a href="#python-lab">Python lab</a><a href="#about">About</a></nav><a className="contact-link" href="mailto:manshamehra3@gmail.com">Let's talk <span aria-hidden="true">↗</span></a></header>
      <main id="top">
        <section className="hero section-wrap"><div className="hero-copy"><p className="kicker">BCA student / builder in progress</p><h1>Curious mind,<br /><em>useful things.</em></h1><p className="hero-intro">I'm Mansha, a first-year BCA student learning how ideas become simple, thoughtful digital experiences.</p><div className="hero-actions"><a className="button button-dark" href="#work">See my work <span>↓</span></a><a className="text-link" href="mailto:manshamehra3@gmail.com">Get in touch <span>↗</span></a></div></div><div className="hero-art" aria-label="Abstract illustration of a laptop and learning notes" role="img"><div className="sun-disc" /><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="note-card"><span>01</span><strong>learn</strong><small>→ make → share</small></div><div className="mini-window"><i /><i /><i /><b>print("hello")</b></div><div className="spark">✳</div></div></section>
        <section className="marquee" aria-label="Current focus"><div>LEARNING BY BUILDING <span>✳</span> PYTHON + FRONTEND <span>✳</span> OPEN TO COLLABORATE <span>✳</span></div></section>
        <section className="section-wrap work-section" id="work"><div className="section-heading"><div><p className="kicker">Selected experiments</p><h2>Things I've been <em>making.</em></h2></div><span className="section-number">01 / 03</span></div><div className="filter-row" aria-label="Filter projects">{filters.map((filter) => <button key={filter} className={activeFilter === filter ? "filter active" : "filter"} onClick={() => setActiveFilter(filter)}>{filter}</button>)}</div><div className="project-grid">{visibleProjects.map((project, index) => <article className={`project-card ${project.accent}`} key={project.title}><div className="project-visual"><span>0{index + 1}</span><div className="visual-lines" /><strong>{project.type === "Python utility" ? "py" : "web"}</strong></div><div className="project-content"><p className="project-type">{project.type}</p><h3>{project.title}</h3><p>{project.description}</p><div className="stack">{project.stack.map((item) => <span key={item}>{item}</span>)}</div></div></article>)}</div></section>
        <section className="lab-section" id="python-lab"><div className="section-wrap lab-layout"><div className="lab-copy"><p className="kicker">A tiny Python-inspired tool</p><h2>Make the numbers<br /><em>less intimidating.</em></h2><p>I'm practising the fundamentals by building useful little utilities. This CGPA estimator mirrors the weighted-average logic in <code>python/cgpa_calculator.py</code>.</p><div className="code-pill"><span>def</span> calculate_cgpa(subjects):</div></div><div className="calculator" aria-label="CGPA estimator"><div className="calculator-header"><div><span className="window-dots">● ● ●</span><h3>CGPA estimator</h3></div><strong>{cgpa}</strong></div><div className="subject-list">{subjects.map((subject, index) => <div className="subject-row" key={`${subject.name}-${index}`}><input aria-label={`Subject ${index + 1} name`} value={subject.name} onChange={(event) => updateSubject(index, "name", event.target.value)} /><input aria-label={`Subject ${index + 1} grade`} type="number" min="0" max="10" value={subject.grade} onChange={(event) => updateSubject(index, "grade", event.target.value)} /><input aria-label={`Subject ${index + 1} credits`} type="number" min="1" max="8" value={subject.credits} onChange={(event) => updateSubject(index, "credits", event.target.value)} /></div>)}</div><div className="calculator-foot"><span>subject&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; grade&nbsp; credits</span><button onClick={() => setSubjects((current) => [...current, { name: "New subject", grade: 8, credits: 3 }])}>+ add subject</button></div></div></div></section>
        <section className="section-wrap about-section" id="about"><div className="section-heading"><div><p className="kicker">A little context</p><h2>Still learning,<br /><em>already building.</em></h2></div><span className="section-number">02 / 03</span></div><div className="about-grid"><p className="about-lead">My first year of BCA is giving me the best kind of challenge: enough fundamentals to understand the “why”, and enough curiosity to keep asking “what if?”.</p><div><p>I enjoy the space where logic meets good communication. Right now I'm strengthening my Python and JavaScript foundations, making small projects, and learning to use Git as part of the process.</p><p>Outside code, you'll find me collecting references, writing notes, and asking too many questions about how people actually use the things we build.</p></div></div><div className="skills-row">{skills.map((skill) => <span key={skill}>{skill} <b>↗</b></span>)}</div></section>
      </main>
      <footer className="footer section-wrap"><p>Let's make something worth opening.</p><div><a href="mailto:manshamehra3@gmail.com">Email</a><a href="https://github.com/" target="_blank" rel="noreferrer">GitHub ↗</a><span>© 2026 Mansha Mehra</span></div></footer>
    </div>
  );
}

export default App;
