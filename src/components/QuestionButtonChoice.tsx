import { useState, useEffect } from "react";
import quizData from "../data.json";
import Score from "./Score";
// import SubjectButtonChoice from "./SubjectButtonChoice";

export type Quiz = {
  title: string;
  icon?: string;
  iconActive?: string;
  iconBgColor?: string;
  iconBgColorActive?: string;
  questions: {
    question: string;
    options: string[];
    answer: string;
  }[];
};

type QuestionButtonChoiceProps = {
  selectedSubject: string;
};

const QuestionButtonChoice: React.FC<QuestionButtonChoiceProps> = ({
  selectedSubject,
}) => {
  const [subject, setSubject] = useState<Quiz | null>(null);
  const [step, setStep] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [quizCompleted, setQuizCompleted] = useState<boolean>(false);

  useEffect(() => {
    const subjectData = quizData.quizzes.find(
      (quiz) => quiz.title === selectedSubject
    );

    if (subjectData) {
      setSubject(subjectData);
    }
  }, []);

  const onHandleAnswerChoice = (option: string) => {
    setSelectedOption(option);
  };

  const handleNext = () => {
    if (subject && step === subject.questions.length - 1) {
      handleCompleteQuiz();
      return;
    }
    setStep(step + 1);
  };

  // Score Section
  const handleCompleteQuiz = () => {
    setQuizCompleted(true);
    // calculate score
    // display score
  };

  // Score Section

  return (
    <section>
      {quizCompleted ? (
        <Score />
      ) : (
        <section className="min-h-screen bg-background flex flex-col items-center justify-center font-rubik p-4">
          <section className="flex gap-5 w-full max-w-[1160px] drop-shadow-3xl text-secondary font-rubik">
            <section className="w-1/2">
              <p className="text-2xl text-gray-navy leading-extra-loose font-normal italic">
                Question {step + 1} of 10
              </p>
              <h1 className="text-[36px] text-dark-navy leading-lose font-medium">
                {subject?.questions[step].question}
              </h1>
            </section>
            <section className="w-1/2">
              {subject &&
                subject.questions[step].options.map((option, i) => (
                  <section>
                    <button
                      key={option}
                      onClick={() => onHandleAnswerChoice(option)}
                      style={{
                        borderColor:
                          selectedOption === option ? "purple" : "transparent",
                        borderWidth: "3px",
                        borderStyle: "solid",
                        filter:
                          selectedOption === option ? "grayscale(0%)" : "",
                      }}
                      className="grayscale text-2xl text-dark-navy font-medium w-full h-auto p-3 rounded-3xl flex items-center justify-start mb-4 border-[3px] border-transparent bg-white text-secondary border-white transition-all hover:grayscale-0"
                    >
                      <figure
                        style={{
                          backgroundColor:
                            selectedOption === option ? "purple" : "#F6E7FF",
                          color:
                            selectedOption === option ? "#F6E7FF" : "#FFFFFF",
                          borderRadius: "10px",
                        }}
                        className="w-14 h-14 mr-8 grid place-items-center"
                      >
                        <span
                          style={{
                            color: selectedOption === option ? "#FFFFFF" : "",
                          }}
                          className="text-[28px] text-bright-purple font-medium"
                        >
                          {i === 0 ? "A" : i === 1 ? "B" : i === 2 ? "C" : "D"}
                        </span>
                      </figure>
                      {option}
                    </button>
                  </section>
                ))}
              <button
                onClick={handleNext}
                className="text-2xl text-white font-medium w-full h-auto p-6 rounded-3xl flex items-center justify-center border-[3px] border-transparent bg-bright-purple hover:opacity-50"
              >
                {subject && step === subject.questions.length - 1
                  ? "Complete Quiz"
                  : "Submit"}
              </button>
            </section>
          </section>
        </section>
      )}
    </section>
  );
};

export default QuestionButtonChoice;
