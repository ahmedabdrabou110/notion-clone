"use client";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useMutation } from "convex/react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontalIcon, Trash } from "lucide-react";
import { useUser } from "@clerk/clerk-react";
import { Skeleton } from "@/components/ui/skeleton";
interface MenuProps {
  documentId: Id<"documents">;
}
const Menu = ({ documentId }: MenuProps) => {
  const remove = useMutation(api.documents.remove);
  const router = useRouter();
  const { user } = useUser();
  const onArchieve = () => {
    const promise = remove({ id: documentId });
    toast.promise(promise, {
      loading: "Deleting a note...",
      success: "Deleting a note Successfully ",
      error: "faild to delete a note",
    });

    router.push("/documents");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="sm" variant="ghost">
          <MoreHorizontalIcon className="w-4 h-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-60"
        align="end"
        alignOffset={8}
        forceMount
      >
        <DropdownMenuItem onClick={onArchieve} className="cursor-pointer ">
          <Trash className="h-4 w-4 mr-2 " />
          Delete
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <div className="text-sm text-muted-foreground p-2 ">
          Last Edited By : {user?.fullName}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

Menu.Skeleton = function MenuSkeleton() {
  return <Skeleton className="w-4 h-4 " />;
};
export default Menu;
