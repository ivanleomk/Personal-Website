import React from "react";

const ListContainer = (props) => {
  const { ordered } = props;

  if (ordered) {
    return <ol className="list-decimal pl-4">{props.children}</ol>;
  }

  return <ul className="list-disc pl-4">{props.children}</ul>;
};

export default ListContainer;
