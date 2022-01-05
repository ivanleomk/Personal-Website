import React from "react";

type MainButtonProps = {
  text: string;
  onClick: any;
};

const MainButton = ({ text, onClick }: MainButtonProps) => {
  return (
    <div className="rounded-md shadow">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
      >
        {text}
      </button>
    </div>
  );
};

export default MainButton;
