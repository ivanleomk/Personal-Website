import React from "react";

type PostRowProps = {
  item: string[];
  index: number;
};

const PostRow = ({ item, index }: PostRowProps) => {
  return (
    <tr className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
      {item.map((rowElem) => {
        return (
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
            {rowElem}
          </td>
        );
      })}
    </tr>
  );
};

export default PostRow;
