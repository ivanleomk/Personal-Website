export type PostObject = {
  id: string;
  title: string;
  description: string;
  date: string;
  categories: string[];
  children: AST_NODE[];
};

type position_reference = {
  line: number;
  column: number;
  offset: number;
} | null;

export type AST_NODE_TYPE =
  | "heading"
  | "text"
  | "paragraph"
  | "link"
  | "blockquote"
  | "code"
  | "list";

type AST_NODE_POSITION = {
  start: position_reference;
  end: position_reference;
};

type AST_NODE_DEPTH = 1 | 2 | 3 | 4 | 5 | 6;

export type AST_NODE =
  | {
      type: "heading";
      children: AST_NODE[];
      depth: AST_NODE_DEPTH;
      position: AST_NODE_POSITION;
    }
  | {
      type: "text";
      value: string;
      position: AST_NODE_POSITION;
    }
  | {
      type: "paragraph";
      children: AST_NODE[];
      position: AST_NODE_POSITION;
    }
  | {
      type: "link";
      url: string;
      title: string | null;
      children: AST_NODE[];
      position: AST_NODE_POSITION;
    }
  | {
      type: "blockquote";
      position: AST_NODE_POSITION;
      children: AST_NODE[];
    }
  | {
      type: "code";
      position: AST_NODE_POSITION;
      value: string;
      lang: string;
      meta: string | null;
    }
  | {
      type: "list";
      position: AST_NODE_POSITION;
      ordered: boolean;
      children: AST_NODE[];
      spread: false;
      start: number;
    };
