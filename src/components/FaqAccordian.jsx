import { useState } from "react";
import { Container } from "reactstrap";
import Heading from "../UI_components/Heading";
import Button from "../UI_components/Button";
import { LuArrowRight, LuChevronRight, LuChevronDown } from "react-icons/lu";


const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    "Can I recover deleted files from desktop with this software?",
    "Can I recover deleted files from desktop with this software?",
    "Can I recover deleted files from desktop with this software?",
    "Can I recover deleted files from desktop with this software?",
    "Can I recover deleted files from desktop with this software?",
  ];

  return (
    <section className="faq-container">
      <Container fluid>

        <Heading
          subheading={"FAQ"}
          subheadingcolor={"var(--primary-color);"}
          mainHeading={"Frequent Ask Questions"}
          mainheadingcolor={"var(--text-dark-1)"}
          align="center"
        />


        <div className="faq-accordion">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
              onClick={() => toggleAccordion(index)}
            >
              <div className="faq-question">
                {faq}
                <span className="faq-arrow">
                  {activeIndex === index ? <LuChevronDown /> : <LuChevronRight />}
                </span>
              </div>
              {activeIndex === index && (
                <div className={"faq-answer"}>
                  <p>
                    {" The internet is the most creative and interactive innovation globally. It is the most helpful technology to share information from one part to the other part of the world. We are just a click away from knowing about the whole world. After the invention of the internet, it feels as if the world has narrowed down, and we are no more away from our close ones. Because of the internet, all official work and education could continue even during the pandemic."}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button color={"var(--blue-color)"} text={"Show more"} icon={<LuArrowRight />} />
        </div>

      </Container>

    </section>
  );
};

export default FAQAccordion; 