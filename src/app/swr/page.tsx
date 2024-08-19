"use client";

import React from "react";
import Link from "next/link";

import useSWR from "swr";

const url = "https://jsonplaceholder.typicode.com/todos";

export default function SwrPage() {
  const { data, error } = useSWR(url, async (url) => {
    const response = await fetch(url);
    return response.json();
  });

  return (
    <div className="flex flex-col gap-6 w-full max-w-xl mx-auto border-2 p-6 my-20 overflow-x-scroll">
      <h1 className="text-2xl font-bold text-center">SWR Example</h1>
      <Link href="/">Back to Main</Link>
      <pre>{data ? JSON.stringify(data, null, 2) : "Loading..."}</pre>
    </div>
  );
}
