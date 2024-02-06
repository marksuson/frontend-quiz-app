import { useState, useEffect } from "react";
import quizData from "../data.json";
import Score from "./Score";
import checkmarkIcon from "/assets/images/fluent_checkmark-circle-16-regular.svg";
import dismissIcon from "/assets/images/fluent_dismiss-circle-16-regular.svg";
import Header from "./Header";

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

type QuestionPageProps = {
  selectedSubject: string;
  setSelectedSubject: (subject: string) => void;
};

const QuestionPage: React.FC<QuestionPageProps> = ({ selectedSubject }) => {
  const [subject, setSubject] = useState<Quiz | null>(null);
  const [step, setStep] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [quizCompleted, setQuizCompleted] = useState<boolean>(false);
  const [correctAnswers, setCorrectAnswers] = useState<number>(0);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);

  const correctAnswer = subject?.questions[step].answer;

  useEffect(() => {
    const subjectData = quizData.quizzes.find(
      (quiz) => quiz.title === selectedSubject
    );

    if (subjectData) {
      setSubject(subjectData);
    }
  }, []);

  const onHandleAnswerChoice = (option: string) => {
    if (!isAnswerSubmitted) {
      setSelectedOption(option);
    }
  };

  const handleNext = () => {
    if (subject) {
      if (selectedOption === correctAnswer) {
        setCorrectAnswers(correctAnswers + 1);
      }

      if (step < subject.questions.length - 1) {
        setStep(step + 1);
      } else {
        handleCompleteQuiz();
      }
    }

    setIsAnswerSubmitted(false);
    setSelectedOption("");
  };

  const handleCompleteQuiz = () => {
    setQuizCompleted(true);
  };

  const checkAnswer = (option: string) => {
    if (option === correctAnswer) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  return (
    <section>
      {quizCompleted ? (
        <Score
          correctAnswers={correctAnswers}
          totalQuestions={subject?.questions.length || 0}
          subject={subject?.title || ""}
          icon={subject?.icon || ""}
          iconBgColor={subject?.iconBgColor || ""}
        />
      ) : (
        <section className="min-h-screen bg-background font-rubik p-4">
          <header className="flex justify-start mb-12 ml-[140px] mt-10">
            <Header
              subject={subject?.title || ""}
              icon={subject?.icon || ""}
              iconBgColor={subject?.iconBgColor || ""}
            />
          </header>
          <section className="flex flex-col items-center justify-center">
            <section className="flex gap-10 w-full max-w-[1160px] drop-shadow-3xl text-secondary font-rubik">
              <section className="w-1/2 h-[410px] flex flex-col justify-between">
                <section className="w-[465px]">
                  <p className="mb-7 text-2xl text-gray-navy leading-extra-loose font-normal italic">
                    Question {step + 1} of 10
                  </p>
                  <h1 className="text-[36px] text-dark-navy leading-lose font-medium">
                    {subject?.questions[step].question}
                  </h1>
                </section>
                <section className="w-[465px]">
                  <div className="h-4 rounded-full bg-white">
                    <div
                      className="h-4 rounded-full bg-bright-purple transition-all"
                      style={{ width: `${((step + 1) / 10) * 100}%` }}
                    ></div>
                  </div>
                </section>
              </section>
              <section className="w-1/2">
                {subject &&
                  subject.questions[step].options.map((option, i) => (
                    <section key={option}>
                      <button
                        onClick={() => onHandleAnswerChoice(option)}
                        style={{
                          borderColor:
                            isAnswerSubmitted &&
                            selectedOption === option &&
                            isCorrect
                              ? "#4CAF50"
                              : isAnswerSubmitted &&
                                selectedOption === option &&
                                !isCorrect
                              ? "#F44336"
                              : selectedOption === option
                              ? "#A729F5"
                              : "transparent",
                          borderWidth: "3px",
                          borderStyle: "solid",
                          filter:
                            selectedOption === option ||
                            (option === correctAnswer && isAnswerSubmitted)
                              ? "grayscale(0%)"
                              : "",
                        }}
                        className="grayscale text-2xl text-dark-navy font-medium w-full h-auto p-3 rounded-3xl flex items-center justify-start mb-4 border-[3px] border-transparent bg-white text-secondary border-white transition-all hover:grayscale-0"
                      >
                        <figure
                          style={{
                            backgroundColor:
                              isAnswerSubmitted &&
                              selectedOption === option &&
                              isCorrect
                                ? "#4CAF50"
                                : isAnswerSubmitted &&
                                  selectedOption === option &&
                                  !isCorrect
                                ? "#F44336"
                                : selectedOption === option
                                ? "#A729F5"
                                : "#F6E7FF",
                            color: "#FFFFFF",
                            borderRadius: "10px",
                            filter:
                              isAnswerSubmitted &&
                              option === correctAnswer &&
                              !isCorrect
                                ? "grayscale(100%)"
                                : "",
                          }}
                          className="w-14 h-14 mr-8 grid place-items-center"
                        >
                          <span
                            style={{
                              color: selectedOption === option ? "#FFFFFF" : "",
                            }}
                            className="w-14 h-14 text-[28px] text-bright-purple font-medium flex items-center justify-center"
                          >
                            {i === 0
                              ? "A"
                              : i === 1
                              ? "B"
                              : i === 2
                              ? "C"
                              : "D"}
                          </span>
                        </figure>
                        <span className="flex-grow">{option}</span>
                        {isAnswerSubmitted && (
                          <section>
                            <figure className="grayscale-0">
                              {selectedOption === option && !isCorrect && (
                                <img
                                  src={dismissIcon}
                                  alt="Incorrect"
                                  className="w-10 h-10"
                                />
                              )}
                              {option === correctAnswer && (
                                <img
                                  src={checkmarkIcon}
                                  alt="Correct"
                                  className="w-10 h-10"
                                />
                              )}
                            </figure>
                          </section>
                        )}
                      </button>
                    </section>
                  ))}
                <button
                  onClick={() => {
                    if (!isAnswerSubmitted) {
                      setIsAnswerSubmitted(true);
                      checkAnswer(selectedOption);
                    } else {
                      handleNext();
                    }
                  }}
                  className="text-2xl text-white font-medium w-full h-auto p-6 rounded-3xl flex items-center justify-center border-[3px] border-transparent bg-bright-purple hover:opacity-50 disabled:grayscale"
                  disabled={!selectedOption}
                >
                  {isAnswerSubmitted
                    ? step < (subject?.questions.length || 0) - 1
                      ? "Next"
                      : "Complete Quiz"
                    : "Submit"}
                </button>
              </section>
            </section>
          </section>
        </section>
      )}
    </section>
  );
};

export default QuestionPage;
