import { useState } from "react";

const faqs = [
  {
    question: "How to use?",
    answer:
      `1. Create Workout\n
      2. Add exercises\n
      3. Start Workout
      `
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4 w-full max-w-2xl mx-auto">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="rounded-lg border border-gray-200 bg-gray-50 overflow-hidden"
        >
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full flex items-center justify-between p-4 text-left"
          >
            <h2 className="text-lg font-medium text-gray-900">
              {faq.question}
            </h2>

            <svg
              className={`w-5 h-5 transition-transform duration-300 ${
                openIndex === index ? "rotate-180" : ""
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          <div
            className={`transition-all duration-300 overflow-hidden ${
              openIndex === index ? "max-h-40 p-4 pt-0" : "max-h-0"
            }`}
          >
            <p className="text-gray-700">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}