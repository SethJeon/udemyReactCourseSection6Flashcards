import { useState } from "react";
import "./index.css";

export default function App() {
  return (
    <div className="App">
      <FlashCards />
    </div>
  );
}

//사용할 리스트
const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element",
  },
];

function FlashCards() {
  //State를 사용할 세가지 Step!

  //먼저 useState()를 사용하여 default value와 작동 함수명 설정하기!
  const [selectedId, setSelectedId] = useState(null);

  function handleClick(id) {
    // id !== selectedId ? id : null 를 해석 하면 id 가 selectedId와 같지 않다면 id값을 return! else return null! 반대로 말하면 같다면 null 값을 return 한다!
    setSelectedId(id !== selectedId ? id : null);
  }

  return (
    <div className="flashcards">
      {/* Map method를 이용하여 Array의 갯수만큼 <div>엘리먼트를 생성하기!  */}
      {questions.map((question) => (
        <div
          //JSX에서는 key value를 무조건 설정해주어야한다
          key={question.id}
          // div 클릭시 handClick()에 해당 id 값을 전달하고 함수 실행하기
          onClick={() => handleClick(question.id)}
          // 선택된 id 값에 따라 css style 부여하기
          className={question.id === selectedId ? "selected" : ""}
        >
          <p>
            {/* 선택된 아이디 값에 때라 해당 요소를 return 하기 */}
            {question.id === selectedId ? question.answer : question.question}
          </p>
        </div>
      ))}
    </div>
  );
}
