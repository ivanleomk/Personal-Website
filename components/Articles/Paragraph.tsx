import React from "react";

type ParagraphProps = {
  children: any;
};

const Paragraph = ({ children }) => {
  return <div className="py-4 text-md ">{children}</div>;
};

export default Paragraph;
