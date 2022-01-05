import React from "react";

type SecondaryButtonProps = {
  text: string;
  onClick: any;
};

const SecondaryButton = ({ text, onClick }: SecondaryButtonProps) => {
  return (
    <div className="mt-3 sm:mt-0 sm:ml-3">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
      >
        {text}
      </button>
    </div>
  );
};

export default SecondaryButton;
