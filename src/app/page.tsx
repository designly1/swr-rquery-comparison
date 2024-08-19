import React from "react";
import Link from "next/link";

export default function MainPage() {
  return (
    <div className="flex flex-col gap-6 w-full max-w-xl mx-auto py-20 border-2 px-4">
      <h1 className="text-2xl font-bold text-center">SWR vs React Query</h1>
      <div className="flex flex-col gap-2">
        <Link href="/swr">SWR Example</Link>
        <Link href="/react-query">React Query Example</Link>
      </div>
    </div>
  );
}
