import { ReactNode } from "react";

export type WrapperBox = {
  children: ReactNode;
  dir?: "row" | "col";
  align?: "start" | "end" | "center";
  justify?: "start" | "end" | "center";
  wrap?: "wrap" | "nowrap";
  padding?: string;
  stylex?: string;
};

export type todoTitle = {
  todo_title: string;
};

export type todo = {
  id: number;
  title: string;
  isCompleted: boolean;
  isStarred: boolean;
  created_at: string;
};

export type DeleteModalType = {
  isOpen: boolean | undefined;
  onOpenChange: () => void;
  itemId: number | string;
  setAnimateOnDelete: React.Dispatch<React.SetStateAction<boolean>>;
};

export type EditModalType = {
  isOpen: boolean | undefined;
  onOpenChange: () => void;
  itemId: number | string;
};
