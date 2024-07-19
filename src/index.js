import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

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
  return (
    <div class="skill-list">
      <Skill name="HTML+CSS" level="beginner" color="red" />
      <Skill name="JavaScript" level="beginner" color="green" />
      <Skill name="Vue.js" level="beginner" color="orange" />
      <Skill name="Docker" level="beginner" color="gray" />
      <Skill name="React.js" level="beginner" color="pink" />
      <Skill name="Java" level="intermediate" color="blue" />
    </div>
  );
}

function Skill(props) {
  return (
    <div class="skill" style={{ backgroundColor: props.color }}>
      <p>{props.name}:</p>
      <span>{props.level}</span>
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
