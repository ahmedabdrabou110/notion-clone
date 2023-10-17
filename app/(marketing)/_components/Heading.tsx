"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useConvexAuth } from "convex/react";
import Spinner from "@/components/Spinner";
import { SignInButton } from "@clerk/clerk-react";

const Heading = () => {
  const { isLoading, isAuthenticated } = useConvexAuth();
  return (
    <div className="max-w-full space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Your Ideas , Documents , & plans . Unified , welcome to{" "}
        <span className="underline">Jotion</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        Jotion is the connected workspace where <br />
        better , faster work happens.
      </h3>
      {isLoading && (
        <div className="w-full flex justify-center items-center">
          <Spinner />
        </div>
      )}
      {isAuthenticated && !isLoading && (
        <Button asChild>
          <Link href="/documents">
            Enter Jotion
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </Button>
      )}

      {!isAuthenticated && !isLoading && (
        <>
          <SignInButton>
            <Button>Enter Jotion</Button>
          </SignInButton>
        </>
      )}
    </div>
  );
};

export default Heading;
