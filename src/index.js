import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  {
    skill:"HTML+CSS",
    level:"beginner",
    color:"red" 
  },
  {
    skill:"JavaScript",
    level:"beginner",
    color:"green" 
  },
  {
    skill:"Vue.js",
    level:"beginner",
    color:"orange" 
  },
  {
    skill:"Docker",
    level:"beginner",
    color:"gray" 
  },
  {
    skill:"React.js",
    level:"beginner",
    color:"pink" 
  },
  {
    skill:"Java",
    level:"beginner",
    color:"blue" 
  },
  {
    skill:"C",
    level:"beginner",
    color:"cyan"
  }
]

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="avatar.jpg" alt="avatar"></img>;
}

function Intro() {
  return (
    <div>
      <h1>Student at Texas Christian University</h1>
      <p>
        I am a aspiring web developer with a passion in full-stack development.
        This business card is my personal project and a learning experience in
        React.js development. I hope you like this!
      </p>
    </div>
  );
}

function SkillList() {
  const skillData = skills
  return (
    <div class="skill-list">
      <h2>My technical skills</h2>
      <ul>
        {skillData.map((skill) => (
          <Skill skillObj={skill} key={skill.skill} />
        ))}
      </ul>
    </div>
  );
}

function Skill({skillObj}) {
  return (
    <div class="skill" style={{ backgroundColor: skillObj.color }}>
      <p>{skillObj.skill}:</p>
      <span>{skillObj.level}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
