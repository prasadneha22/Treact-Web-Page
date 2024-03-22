import style from "./Question.module.css";
import FAQs from "./FAQs";


const Question = () => {
  
  return (
    <div className={style.mainContainer}>
      <div className={style.Image}>
        <img
          src="https://images.unsplash.com/photo-1579427421635-a0015b804b2e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80"
          alt=""
        />
      </div>
      <div className={style.content}>
        <h1>Questions</h1>
        <p>
          Here are some frequently asked questions about our hotels from our
          loving customers. Should you have any other questions, feel free to
          reach out via the contact form below.
        </p>
        <FAQs
        title="Is lunch provided free of cost?"
        answer="Yes, it is, if you have a membership with us. Otherwise it is charged as per the menu. Some limits do apply as to how much items can be included in your lunch. This limit is enough for any one person and merely exists to discourage abusal of the system."
      />
        <FAQs
        title="Do you have 2 Bedroom suites ?"
        answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />
        <FAQs
        title="Are Wi-Fi costs included in the price ?"
        answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />
        <FAQs
        title="Where I can reach you fpr support ?"
        answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />

        
      </div>
    </div>
  );
};

export default Question;
