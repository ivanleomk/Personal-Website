import React from "react";

const CodeBlock = (props) => {
  // TODO: Fix up syntax highlighting at some point
  const { children, className: language } = props;

  return (
    <div className="my-4 mx-5 lg:w-6/12 bg-gray-800 shadow-2xl rounded-lg overflow-hidden">
      <div id="header-buttons" className="py-3 px-4 flex">
        <div className="rounded-full w-3 h-3 bg-red-500 mr-2"></div>
        <div className="rounded-full w-3 h-3 bg-yellow-500 mr-2"></div>
        <div className="rounded-full w-3 h-3 bg-green-500"></div>
      </div>
      <div id="code-area" className="py-4 px-4 mt-1 text-white text-md">
        {children}
      </div>
    </div>
  );
};

export default CodeBlock;
