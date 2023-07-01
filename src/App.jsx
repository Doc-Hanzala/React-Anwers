import { useState } from "react";
import Title from "./Component/Title";
import questions from "./data";

function App() {
  const [selectedId, setSelectedId] = useState(null);

  const showAnswer = (id) => {
    setSelectedId(id);
  };

  return (
    <section>
      <Title text="react answers to questions" />
      <div className="questions">
        {questions.map((question) => {
          return (
            <div
              key={question.id}
              onClick={() => showAnswer(question.id)}
              className="question"
              style={
                question.id === selectedId
                  ? { background: "red" }
                  : { background: "" }
              }
            >
              {question.id === selectedId ? question.answer : question.question}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default App;
