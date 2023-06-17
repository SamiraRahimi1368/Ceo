"use client";
import { useState, useEffect } from "react";

const Faq = () => {
  const [open, setOpen] = useState(false);
  const [questions, setQuestions] = useState([
    {
      id: 1,
      question: "why",
      answer: "because",
      open: false,
    },
    {
      id: 2,
      question: "how",
      answer: "like that",
      open: false,
    },
  ]);
  const openItem = (item) => {
    setQuestions((previousQuestions) => {
      return previousQuestions.map((question) => {
        if (question.id === item.id) {
          return {
            ...question,
            open: true,
          };
        } else {
          return {
            ...question,
            open: false,
          };
        }
      });
    });
  };
  
  useEffect(() => {
    console.log(questions);
  }, [questions]);

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
      {questions.map((item, index) => (
        <div onClick={() => openItem(item)} key={index}>
          {item.question}
          {item.open && <div>{item.answer}</div>}
        </div>
      ))}
      <button
        onClick={() => {
          setOpen(!open);
        }}
      >
        Add More
      </button>
      {open && <div>Something</div>}
    </div>
  );
};

export default Faq;
