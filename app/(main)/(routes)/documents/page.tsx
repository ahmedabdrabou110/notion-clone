"use client";
import Image from "next/image";
import React from "react";
import { useUser } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

const DocumentPage = () => {
  const { user } = useUser();
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
        Welcomt to {user?.firstName}&apos;s Notion
      </h2>
      <Button>
        <PlusCircle className="w-4 h-4 mr-2" />
        Create a Note
      </Button>
    </div>
  );
};

export default DocumentPage;
