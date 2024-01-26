import quizData from "../data.json";
import QuestionPage from "./QuestionPage";
import SubjectButtonChoice from "./SubjectButtonChoice";
import { useState } from "react";

const StartPage = () => {
  const [selectedSubject, setSelectedSubject] = useState<string>("");
  const { quizzes } = quizData;

  return (
    <main className="min-h-screen bg-background flex flex-col items-center justify-center font-rubik p-4">
      {selectedSubject ? (
        <>
          <section>
            <QuestionPage
              setSelectedSubject={setSelectedSubject}
              selectedSubject={selectedSubject}
            />
          </section>
        </>
      ) : (
        <>
          <section className="flex flex-col-2 justify-between w-full max-w-[1160px] drop-shadow-3xl text-secondary font-rubik">
            <section className="md:w-1/2">
              <h1 className="text-4xl leading-[4rem] drop-shadow-3xl font-light mb-2">
                Welcome to the
              </h1>
              <h2 className="text-4xl leading-[4rem] drop-shadow-3xl font-medium mb-12">
                {`${selectedSubject ? selectedSubject : "Frontend"} Quiz!`}
              </h2>
              <p className="text-2xl leading-extra-loose font-normal italic">
                Pick a subject to get started.
              </p>
            </section>
            <section className="md:w-1/2 flex flex-col">
              {quizzes.map((subject) => (
                <SubjectButtonChoice
                  setSelectedSubject={setSelectedSubject}
                  subject={subject}
                  key={subject.title}
                />
              ))}
            </section>
          </section>
        </>
      )}
    </main>
  );
};

export default StartPage;
