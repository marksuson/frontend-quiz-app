import { useState, useEffect } from "react";
import quizData from "../data.json";
import Score from "./Score";

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

const QuestionPage: React.FC<QuestionPageProps> = ({
  selectedSubject,
  setSelectedSubject,
}) => {
  const [subject, setSubject] = useState<Quiz | null>(null);
  const [step, setStep] = useState<number>(0);
  const [quizCompleted, setQuizCompleted] = useState<boolean>(false);

  useEffect(() => {
    const subjectData = quizData.quizzes.find(
      (quiz) => quiz.title === selectedSubject
    );

    if (subjectData) {
      setSubject(subjectData);
    }
  }, []);

  const handleNext = () => {
    if (subject && step === subject.questions.length - 1) {
      handleCompleteQuiz();
      return;
    }
    setStep(step + 1);
  };

  const handleCompleteQuiz = () => {
    setQuizCompleted(true);
    // calculate score
    // display score
  };

  return (
    <main className="min-h-screen bg-background flex flex-col items-center justify-center font-rubik p-4">
      {quizCompleted ? (
        <Score />
      ) : (
        <>
          <button onClick={() => setSelectedSubject("")}>{`<`}</button>
          <section>
            <h1>
              {subject ? subject.title : "There was an error with your subject"}
            </h1>
            <div>
              <h2>{subject?.questions[step].question}</h2>
            </div>
          </section>
          <button onClick={handleNext}>
            {subject && step === subject.questions.length - 1
              ? "Submit"
              : "Next"}
          </button>
        </>
      )}
    </main>
  );
};

export default QuestionPage;
