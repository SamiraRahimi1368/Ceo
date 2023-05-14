const questions = [
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
];
const Faq = () => {
  return (
    <div>
      {questions.map((item) => (
        <div>{item.question}</div>
      ))}
    </div>
  );
};

export default Faq;
