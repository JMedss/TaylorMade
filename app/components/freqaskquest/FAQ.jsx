"use client"
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const FAQ = (props) => {
  const questions = props.questions[0];
  const [activeIndex, setActiveIndex] = useState(null);

  const handleOpen = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-[#FFFAFA] w-screen pt-[150px]">
      <div className="flex flex-col container items-center">
        <div className="flex flex-col">
          <h2 className="main">FREQUENTLY ASKED QUESTIONS</h2>
          <h3 className="subheading">Give Us A Call If You Have Any More Questions</h3>
        </div>
      </div>

      <div className="w-full flex flex-col mt-24 sm:container">
        <div className="flex flex-col">
          {questions.map((question, i) => (
            <div key={question.id} className="flex flex-col">
              <hr className="border-t-1 border-black" />
              <div className="flex items-center justify-between container py-4 h-[90px]">
                <h3 className="max-w-[80%]">{question.question}</h3>
                <button onClick={() => handleOpen(i)} className="flex items-center">
                  {activeIndex === i ? (
                    <FaMinus size={30} className="mr-2 hover:scale-125 transition duration-300 ease-in-out" />
                  ) : (
                    <FaPlus size={30} className="mr-2 hover:scale-125 transition duration-300 ease-in-out" />
                  )}
                </button>
              </div>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  activeIndex === i ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="container py-4">
                  <p>{question.answer}</p>
                </div>
              </div>
              <hr className={i === questions.length - 1 ? "border-t-1 border-black" : "hidden"} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
