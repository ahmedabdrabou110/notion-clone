"use client";
import Image from "next/image";
import React from "react";
import { useUser } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";

const DocumentPage = () => {
  const { user } = useUser();
  const create = useMutation(api.documents.create);

  const createNote = () => {
    const promise = create({ title: "Untitled" });
    toast.promise(promise, {
      loading: "Creating a new Note...",
      success: "New note created",
      error: "Failed to create a new Note.",
    });
  };

  return (
    <div className="h-full flex flex-col justify-center items-center space-y-4">
      <Image
        className="dark:hidden"
        src="/empty.png"
        alt="empty image"
        width={350}
        height={350}
      />
      <Image
        className="hidden dark:block"
        src="/empty-dark.png"
        alt="empty image"
        width={350}
        height={350}
      />
      <h2 className="font-medium text-lg">
        Welcomt to {user?.firstName}&apos;s Notion Welcome {user?.fullName}
      </h2>
      <Button onClick={createNote}>
        <PlusCircle className="w-4 h-4 mr-2" />
        Create a Note
      </Button>
    </div>
  );
};

export default DocumentPage;
