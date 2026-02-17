import { Github, Linkedin, Mail } from "lucide-react";
import "./app.css";
import profile from "./assets/profile.jpg";

export default function App(){

const projects = [
{
title:"TrackFusion",
desc:"Designed a meta-learning–driven multi-tracker fusion framework that dynamically selects the most reliable tracker per frame using a reliability scoring model based on IoU, temporal stability, and trajectory smoothness. Integrated multiple OpenCV trackers and trained an XGBoost meta-model to reduce drift and occlusion failures, achieving higher precision on benchmark datasets compared to standalone trackers.",
tech:"Python • OpenCV • XGBoost",
link:"https://github.com/josnajohn15/MMLT"
},
{
title:"SparkSaver",
desc:"Built a full-stack AI energy analytics platform that detects appliances from images using vision models and estimates power consumption for automated usage profiling. Implemented real-time analytics, historical trend visualization, and weather-aware optimization suggestions to help users reduce energy consumption through data-driven insights.",
tech:"React • Node • MongoDB",
link:"https://github.com/josnajohn15/Sparksaver"
},
{
title:"Campus Connect",
desc:"Developed a real-time student collaboration platform with scalable socket-based communication supporting chat, announcements, and event management. Engineered custom reconnection logic and efficient state synchronization to ensure stable messaging under unstable network conditions, improving reliability of real-time interactions.",
tech:"React Native • Socket.io",
link:"https://github.com/josnajohn15/campusconnectweb"
},
{
title:"eSchool",
desc:"Created an offline Android school management system with a structured SQLite persistence layer supporting student, subject, timetable, and enrollment modules. Optimized UI performance using custom adapters and implemented efficient CRUD operations with validation logic to ensure data integrity and smooth navigation.",
tech:"Java • SQLite",
link:"https://github.com/josnajohn15/eSchool"
}
];

return(
<div>

{/* NAVBAR */}
<nav className="nav">

<div>
<a href="#projects">Projects</a>
<a href="#skills">Skills</a>
<a href="#contact">Contact</a>
</div>
</nav>


{/* HERO */}
<section className="hero">

<img 
  src={profile} 
  alt="profile"
  className="profile-img"
/>
<h1>Josna John</h1>
<p>Full-Stack + AI Engineer building scalable intelligent systems</p>

<div className="icons">
<Github/>
<Linkedin/>
<Mail/>
</div>
</section>


{/* PROJECTS */}
<section id="projects">
<h2>Featured Projects</h2>

<div className="grid">
{projects.map((p,i)=>(
<div className="card" key={i}>
<h3>{p.title}</h3>
<p>{p.desc}</p>
<span>{p.tech}</span><br/>
<a href={p.link}>View Project →</a>
</div>
))}
</div>
</section>


{/* SKILLS */}
<section id="skills">
<h2>Tech Stack</h2>

<div className="skills">
<span>Python</span>
<span>Java</span>
<span>C++</span>
<span>JavaScript</span>
<span>React</span>
<span>Node.js</span>
<span>Angular</span>
<span>MongoDB</span>
<span>OpenCV</span>
<span>TensorFlow</span>
<span>SQL</span>

</div>
</section>

{/* INTERNSHIPS */}
<section id="internships">

<h2>Internships</h2>

<div className="timeline">

<div className="intern-card">
<h3>Frontend Developer Intern</h3>
<span>Nest Digital</span>
<p>Built reusable Angular components, optimized UI performance and implemented modular SCSS architecture.</p>
</div>

<div className="intern-card">
<h3>AI/ML Intern</h3>
<span>Logix Space Technologies</span>
<p>Developed ML pipelines including preprocessing, training and evaluation using regression and classification models.</p>
</div>

<div className="intern-card">
<h3>Android Developer Intern</h3>
<span>Logix Space Technologies</span>
<p>Built multi-screen Android applications with structured navigation and SQLite CRUD functionality.</p>
</div>

</div>

</section>

{/* CONTACT */}
<section id="contact" className="contact">

<h2>Contact Me</h2>
<p>I’d love to hear from you</p>

<form action="https://formsubmit.co/josnajohn153@gmail.com" method="POST">

<input type="text" name="name" placeholder="Your Name" required />

<input type="email" name="email" placeholder="Your Email" required />

<textarea name="message" placeholder="Your Message" required></textarea>

<button type="submit" className="btn">Send Message</button>

</form>

</section>

</div>
);
}
