import { Editor } from "@tiptap/react";
import {
  Bold,
  Code,
  CodepenIcon,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  Italic,
  List,
  ListOrdered,
  Quote,
  Redo,
  Strikethrough,
  Undo,
} from "lucide-react";
import React from "react";

type Props = {
  editor: Editor;
};

const TipTapMenuBar = (props: Props) => {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => props.editor.chain().focus().toggleBold().run()}
        disabled={!props.editor.can().chain().focus().toggleBold().run()}
        className={props.editor.isActive("bold") ? "is-active" : ""}
      >
        <Bold className="w-6 h-6" />
      </button>
      <button
        onClick={() => props.editor.chain().focus().toggleItalic().run()}
        disabled={!props.editor.can().chain().focus().toggleItalic().run()}
        className={props.editor.isActive("italic") ? "is-active" : ""}
      >
        <Italic className="w-6 h-6" />
      </button>
      <button
        onClick={() => props.editor.chain().focus().toggleStrike().run()}
        disabled={!props.editor.can().chain().focus().toggleStrike().run()}
        className={props.editor.isActive("strike") ? "is-active" : ""}
      >
        <Strikethrough className="w-6 h-6" />
      </button>
      <button
        onClick={() => props.editor.chain().focus().toggleCode().run()}
        disabled={!props.editor.can().chain().focus().toggleCode().run()}
        className={props.editor.isActive("code") ? "is-active" : ""}
      >
        <Code className="w-6 h-6" />
      </button>
      <button
        onClick={() =>
          props.editor.chain().focus().toggleHeading({ level: 1 }).run()
        }
        className={
          props.editor.isActive("heading", { level: 1 }) ? "is-active" : ""
        }
      >
        <Heading1 className="w-6 h-6" />
      </button>
      <button
        onClick={() =>
          props.editor.chain().focus().toggleHeading({ level: 2 }).run()
        }
        className={
          props.editor.isActive("heading", { level: 2 }) ? "is-active" : ""
        }
      >
        <Heading2 className="w-6 h-6" />
      </button>
      <button
        onClick={() =>
          props.editor.chain().focus().toggleHeading({ level: 3 }).run()
        }
        className={
          props.editor.isActive("heading", { level: 3 }) ? "is-active" : ""
        }
      >
        <Heading3 className="w-6 h-6" />
      </button>
      <button
        onClick={() =>
          props.editor.chain().focus().toggleHeading({ level: 4 }).run()
        }
        className={
          props.editor.isActive("heading", { level: 4 }) ? "is-active" : ""
        }
      >
        <Heading4 className="w-6 h-6" />
      </button>
      <button
        onClick={() =>
          props.editor.chain().focus().toggleHeading({ level: 5 }).run()
        }
        className={
          props.editor.isActive("heading", { level: 5 }) ? "is-active" : ""
        }
      >
        <Heading5 className="w-6 h-6" />
      </button>
      <button
        onClick={() =>
          props.editor.chain().focus().toggleHeading({ level: 6 }).run()
        }
        className={
          props.editor.isActive("heading", { level: 6 }) ? "is-active" : ""
        }
      >
        <Heading6 className="w-6 h-6" />
      </button>
      <button
        onClick={() => props.editor.chain().focus().toggleBulletList().run()}
        className={props.editor.isActive("bulletList") ? "is-active" : ""}
      >
        <List className="w-6 h-6" />
      </button>
      <button
        onClick={() => props.editor.chain().focus().toggleOrderedList().run()}
        className={props.editor.isActive("orderedList") ? "is-active" : ""}
      >
        <ListOrdered className="w-6 h-6" />
      </button>
      <button
        onClick={() => props.editor.chain().focus().toggleCodeBlock().run()}
        className={props.editor.isActive("codeBlock") ? "is-active" : ""}
      >
        <CodepenIcon className="w-6 h-6" />
      </button>
      <button
        onClick={() => props.editor.chain().focus().toggleBlockquote().run()}
        className={props.editor.isActive("blockquote") ? "is-active" : ""}
      >
        <Quote className="w-6 h-6" />
      </button>
      <button
        onClick={() => props.editor.chain().focus().undo().run()}
        disabled={!props.editor.can().chain().focus().undo().run()}
      >
        <Undo className="w-6 h-6" />
      </button>
      <button
        onClick={() => props.editor.chain().focus().redo().run()}
        disabled={!props.editor.can().chain().focus().redo().run()}
      >
        <Redo className="w-6 h-6" />
      </button>
    </div>
  );
};

export default TipTapMenuBar;
