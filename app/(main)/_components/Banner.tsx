"use client";

import { ConfirmModal } from "@/components/models/ConfirmModels";
import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useMutation } from "convex/react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface BannerProps {
  documentId: Id<"documents">;
}

const Banner = ({ documentId }: BannerProps) => {
  const remove = useMutation(api.documents.remove);
  const restore = useMutation(api.documents.restore);
  const router = useRouter();
  const onRemove = () => {
    const promise = remove({ id: documentId });

    toast.promise(promise, {
      loading: "Deleting a note...",
      success: "Delete Note Successfully",
      error: "Failed to delete a note",
    });
    router.push("/documents");
  };

  const onRestore = () => {
    const promise = restore({ id: documentId });

    toast.promise(promise, {
      loading: "restoring a note...",
      success: "Restore Note Successfully",
      error: "Failed to restore a note",
    });
  };

  return (
    <div className="w-full bg-rose-500 text-center flex items-center text-sm p-2 text-white gap-x-2 justify-center">
      <p>This is page is in trash</p>
      <Button
        size="sm"
        variant="outline"
        className="border-white bg-transparent hover:bg-primary/5 text-white hover:text-white p-1 h-auto font-normal"
        onClick={onRestore}
      >
        Restore page
      </Button>
      <ConfirmModal onConfirm={onRemove}>
        <Button
          size="sm"
          variant="outline"
          className="border-white bg-transparent hover:bg-primary/5 text-white hover:text-white p-1 h-auto font-normal"
        >
          Delete forever
        </Button>
      </ConfirmModal>
    </div>
  );
};

export default Banner;
