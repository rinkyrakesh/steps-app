import { useState } from "react";

const messages = ["Learn React", "Apply for jobs", "Invest your new income"];

function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  function handlePrevious() {
    if (step > 1) setStep(step - 1);
  }
  function handleNext() {
    if (step < 3) setStep(step + 1);
  }
  return (
    <>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <StepMessage className="message">
            Step{step}: {messages[step - 1]}
          </StepMessage>
          <div className="buttons">
            <Button bgColor="blue" textColor="white" onClick={handlePrevious}>
              <span>⬅️</span>Previous
            </Button>
            <Button bgColor="blue" textColor="white" onClick={handleNext}>
              Next<span>➡️</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;

function Button({ bgColor, textColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function StepMessage({ children }) {
  return <p className="message">{children}</p>;
}
