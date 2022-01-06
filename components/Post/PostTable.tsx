import React from "react";
import { AST_NODE } from "../../types/posts";
import PostRow from "./PostRow";
// const people = [
//   {
//     name: "Jane Cooper",
//     title: "Regional Paradigm Technician",
//     role: "Admin",
//     email: "jane.cooper@example.com",
//   },
//   {
//     name: "Cody Fisher",
//     title: "Product Directives Officer",
//     role: "Owner",
//     email: "cody.fisher@example.com",
//   },
//   // More people...
// ];

type PostTableProps = {
  ast: AST_NODE;
};

const people = [];

const PostTable = ({ ast }: PostTableProps) => {
  if (ast.type !== "table") {
    return null;
  }

  const { headers, rows } = ast;
  console.log(headers);
  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  {headers.map((item) => (
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {item}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((item, index) => (
                  <PostRow item={item} index={index} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostTable;
