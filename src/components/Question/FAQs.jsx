
import React, { useState } from "react";
import styles from "./accordian.module.css";


const FAQs = ({ title, answer }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  const toggleAccordion = () => {
    setAccordionOpen(!accordionOpen);
  };

  return (
    <div className={styles.container}>
      <button onClick={toggleAccordion} className={styles.button}>
        <span>{title}</span>
        
          {accordionOpen ? (
            <div className={styles.icons}>-</div>
            
          ) : (
            <div className={styles.icons}>+</div>
            
          )}
        
      </button>
      <div
        className={`${styles.gridContainer} ${
          accordionOpen ? styles.gridOpen : styles.gridClosed
        }`}
      >
        <div  className={`${styles.answer} ${!accordionOpen && styles.answerHidden}`}>{answer}</div>
      </div>
    </div>
  );
};

export default FAQs;
