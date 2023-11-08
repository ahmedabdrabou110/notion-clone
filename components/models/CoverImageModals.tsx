import { useCoverImage } from "@/hooks/useCoverImage";
import { useState } from "react";
import { Dialog, DialogHeader, DialogContent } from "../ui/dialog";
import { useParams } from "next/navigation";
import { useEdgeStore } from "@/lib/edgestore";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { SingleImageDropzone } from "../single-image-dropzone";

const CoverImageModals = () => {
  const params = useParams();
  const update = useMutation(api.documents.update);
  const [file, setFile] = useState<File>();
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const { edgestore } = useEdgeStore();
  const coverImage = useCoverImage();

  const onClose = () => {
    setIsSubmitting(false);
    setFile(undefined);
    coverImage.onClose();
  };

  const onChange = async (file?: File) => {
    if (file) {
      setIsSubmitting(true);
      setFile(file);

      const res = await edgestore.publicFiles.upload({
        file,
      });

      await update({
        id: params.documentId as Id<"documents">,
        coverImage: res.url,
      });
    }
    onClose();
  };

  return (
    <Dialog open={coverImage.isOpen} onOpenChange={coverImage.onClose}>
      <DialogContent>
        <DialogHeader>
          <h2 className="text-center text-lg font-semibold">Cover Image</h2>
          <SingleImageDropzone
            className="w-full outline-none"
            disabled={isSubmitting}
            onChange={onChange}
            value={file}
          />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default CoverImageModals;
