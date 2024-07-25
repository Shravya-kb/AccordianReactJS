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
      <AccordianComponent/>
    </div>
  );
}
function AccordianComponent(){
  return(
    <div className="bg-blue-300 h-screen flex justify-center items-center flex-col gap-4">
      {
      faqs.map((faq,i)=>(
        <Modal title={faq.title} text={faq.text} key={i} index={i}/>
      ))
      }
    </div>
  );
}



function Modal({title,text,index}) {
  return (
    <div >
      <div className="bg-white min-h-[100px] max-h-[500px] w-[500px] flex flex-col gap-2 p-4 rounded-lg cursor-pointer shadow-lg shadow-green-500">
        <div className="flex justify-between">
          <p>{index +1}</p>
          <p>{title}</p>
          <p>-</p>
        </div>

        <p>{text}</p>
      </div>
    </div>
  );
}
export default App;
