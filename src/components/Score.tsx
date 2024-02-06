import React from "react";
import Header from "./Header";

type ScoreProps = {
  correctAnswers: number;
  totalQuestions: number;
  subject: string;
  icon: string;
  iconBgColor: string;
};

const Score: React.FC<ScoreProps> = ({
  correctAnswers,
  totalQuestions,
  subject,
  icon,
  iconBgColor,
}) => {
  return (
    <main>
      <section className="min-h-screen bg-background font-rubik p-4">
        <header className="flex justify-start mb-12 ml-[140px] mt-10">
          <Header
            subject={subject || ""}
            icon={icon || ""}
            iconBgColor={iconBgColor || ""}
          />
        </header>
        <section className="flex flex-col items-center justify-center">
          <section className="flex flex-col-2 justify-between w-full max-w-[1160px] drop-shadow-3xl text-secondary font-rubik">
            <section className="w-1/2 items-start">
              <h1 className="text-4xl leading-[4rem] drop-shadow-3xl font-light mb-2">
                Quiz Completed!
              </h1>
              <h2 className="text-4xl leading-[4rem] drop-shadow-3xl font-medium mb-12">
                You Scored...
              </h2>
            </section>
            <section className="w-1/2 flex flex-col">
              <section className="w-full flex flex-col bg-white p-12 rounded-3xl mb-8">
                <section className="flex justify-center items-center mb-10">
                  <img
                    style={{
                      backgroundColor: iconBgColor,
                      borderRadius: "10px",
                    }}
                    src={icon}
                    alt="Subject Icon"
                  />
                  <h1 className="ml-6 text-[28px] text-dark-navy">{subject}</h1>
                </section>
                <section className="flex flex-col justify-center items-center">
                  <h2 className="text-[144px] text-dark-navy font-medium">
                    {correctAnswers}
                  </h2>
                  <p className="text-[24px] text-gray-navy font-extralight">
                    out of {totalQuestions}
                  </p>
                </section>
              </section>
              <button
                onClick={() => {
                  window.location.reload();
                }}
                className="text-2xl text-white font-medium w-full h-auto p-6 rounded-3xl flex items-center justify-center border-[3px] border-transparent bg-bright-purple hover:opacity-50 disabled:grayscale"
              >
                Play Again
              </button>
            </section>
          </section>
        </section>
      </section>
    </main>
  );
};
export default Score;
