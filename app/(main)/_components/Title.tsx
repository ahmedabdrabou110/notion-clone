"use client";

import { Doc } from "@/convex/_generated/dataModel";

interface TitleProps {
  initialData: Doc<"documents">;
}
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useState, useRef, ChangeEvent, KeyboardEvent } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

const Title = ({ initialData }: TitleProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isEditing, setIsEditing] = useState(false);
  const update = useMutation(api.documents.update);
  const [title, setTitle] = useState(initialData.title || "Untitled");
  const enabledInput = () => {
    setTitle(initialData.title);
    setIsEditing(true);
    setTimeout(() => {
      inputRef.current?.focus();
      inputRef.current?.setSelectionRange(0, inputRef.current.value.length);
    }, 0);
  };

  const disabledInput = () => {
    setIsEditing(false);
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
    update({
      id: initialData._id,
      title: event.target.value || "Untitled",
    });
  };

  const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      disabledInput();
    }
  };

  return (
    <div className="flex items-center gap-x-1">
      {!!initialData.icon && <p>{initialData.icon}</p>}
      {isEditing ? (
        <Input
          className="h-7 px-2 focus-visible:ring-transparent "
          ref={inputRef}
          onChange={onChange}
          onBlur={disabledInput}
          onClick={enabledInput}
          onKeyDown={onKeyDown}
          value={title}
        />
      ) : (
        <Button
          onClick={enabledInput}
          variant="ghost"
          size="sm"
          className=" font-normal h-auto p-1 "
        >
          <span className="truncate">{initialData.title}</span>
        </Button>
      )}
    </div>
  );
};

Title.Skeleton = function TitleSkeleton() {
  return <Skeleton className="h-4 w-20 rounded-md" />;
};

export default Title;
