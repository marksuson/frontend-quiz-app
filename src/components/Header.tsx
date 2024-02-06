import React from "react";

type HeaderProps = {
  subject: string;
  icon: string;
  iconBgColor: string;
};

const Header: React.FC<HeaderProps> = ({ subject, icon, iconBgColor }) => {
  return (
    <section>
      <section className="flex justify-center items-center">
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
    </section>
  );
};
export default Header;
