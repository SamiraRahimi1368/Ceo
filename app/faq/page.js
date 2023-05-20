"use client";
import { useState, useEffect } from "react";

const Faq = () => {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      question: "why",
      answer: "because",
    },
    {
      id: 2,
      question: "how",
      answer: "like that",
    },
  ]);
  const openItem = (item) => {
    setQuestions((previousQuestions) => {
      for (var index in previousQuestions) {
        const question = previousQuestions[index];
        if (questions.id === item.id) {
          question.open = true;
        } else {
          question.open = false;
        }
      }
      return previousQuestions;
    });
  };

  const addMore = () => {
    setQuestions((previousQuestions) => {
      return [
        {
          id: 3,
          question: " where",
          answer: "here",
        },
        ...previousQuestions,
      ];
    });
  };
  return (
    <div>
      {questions.map((item) => (
        <div onClick={() => openItem(item)}>
          {item.question}
          {item.open && <div>{item.answer}</div>}
        </div>
      ))}
      <button onClick={addMore}> Add More </button>
    </div>
  );
};

export default Faq;
