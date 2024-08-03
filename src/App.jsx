import { useState } from "react";

/* eslint-disable react/prop-types */
const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Our chairs are assembled in our state-of-the-art facility located in Germany, ensuring the highest quality and craftsmanship.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "You have 30 days from the date of delivery to return your chair for a full refund, provided it is in its original condition.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Yes, we ship to many countries outside the EU. Please check our shipping policy for more details on international shipping.",
  },
];

function App() {
  return (
    <div>
      <AccordianComponent />
    </div>
  );
}
function AccordianComponent() {
  return (
    <div className="bg-blue-300 h-screen flex justify-center items-center flex-col gap-4">
      {faqs.map((faq, i) => (
        <Modal title={faq.title} text={faq.text} key={i} index={i} />
      ))}
    </div>
  );
}

function Modal({ title, text, index }) {
  const [isOpen, setIsOpen] = useState(false);
  function handleIsOpen() {
    setIsOpen((isOpen) => !isOpen);
  }
  return (
    <div>
      <div
        className={` bg-white  w-[500px] flex flex-col gap-2 p-4 rounded-lg cursor-pointer shadow-lg shadow-green-500 text-center font-semibold  ${isOpen ? "border-green-400  border-t-8": null}`}
        onClick={handleIsOpen}
      >
        <div className="flex justify-between px-4 py-2">
          <p>{index + 1}</p>
           <p className={isOpen? `text-green-400  `: `text-black` }>{title}</p>
          {/* // <p>{title}</p> */}
          <p>{isOpen ? "-" : "+"}</p>
        </div>
        {isOpen ? <p className="border-gray-400 border-t pt-4">{text}</p> : null}
      </div>
    </div>
  );
}
export default App;
