import ContactForm from "./questions/ContactForm";
import InputFocus from "./questions/InputFocus";
import Accordian from "./questions/Accordian";
import GuessTheNumber from "./questions/GuessTheNumber";
import ChipsInput from "./questions/ChipsInput";

const items = [
  {
    title: "JavaScript Basics",
    content: "Learn variables, functions, and loops in JavaScript.",
  },
  {
    title: "React.js Overview",
    content: "Understand components, state, and props in React.",
  },
  {
    title: "Node.js",
    content: "Basics of server-side development with Node.js.",
  },
  {
    title: "Full-Stack Development",
    content: "Build full-stack apps with React and Node.js.",
  },
];

function App() {
  return (
    <div>
      <h1>Problem Solving</h1>
      {/* <Accordian items={items} /> */}
      {/* <GuessTheNumber /> */}
      <ChipsInput />
    </div>
  );
}

export default App;
