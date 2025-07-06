"use client";

import { Button } from "@/components/ui/button";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <div className="m-auto text-center p-3 space-y-6">
      <h1 className="text-3xl font-medium">
        Something went wrong with numbers!
      </h1>
      <Button size="lg" onClick={reset}>
        Try again
      </Button>
    </div>
  );
}
