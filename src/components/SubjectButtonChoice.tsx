import { useState } from "react";
import type { Quiz } from "./QuestionPage";

type SubjectButtonChoiceProps = {
  subject: Quiz;
  setSelectedSubject: (subject: string) => void;
};

const SubjectButtonChoice: React.FC<SubjectButtonChoiceProps> = ({
  subject,
  setSelectedSubject,
}) => {
  const [mouseDown, setMouseDown] = useState(false);

  const handleMouseDown = () => {
    setMouseDown(true);
  };

  const handleMouseUp = () => {
    setMouseDown(false);
  };

  const onHandleSubjectChoice = () => {
    setSelectedSubject(subject.title);
  };

  return (
    <button
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onClick={onHandleSubjectChoice}
      style={{
        borderColor: mouseDown ? subject.iconBgColorActive : "transparent",
        borderWidth: "3px",
        borderStyle: "solid",
      }}
      className="grayscale text-[28px] w-full h-auto p-5 rounded-3xl flex items-center justify-start mb-4 border-[3px] border-transparent bg-white text-secondary border-white transition-all hover:grayscale-0"
    >
      <figure className="w-14 h-14 mr-8 flex items-center justify-center">
        <img
          style={{
            backgroundColor: mouseDown
              ? subject.iconBgColorActive
              : subject.iconBgColor,
            borderRadius: "10px",
          }}
          src={mouseDown ? subject.iconActive ?? "" : subject.icon ?? ""}
          alt="Subject Icon"
        />
      </figure>
      {subject.title}
    </button>
  );
};

export default SubjectButtonChoice;
