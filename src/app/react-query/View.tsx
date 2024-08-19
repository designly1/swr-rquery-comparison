"use client";

import React from "react";
import Link from "next/link";

import { useQuery, useQueryClient } from "@tanstack/react-query";

const url = "https://jsonplaceholder.typicode.com/todos";

export default function ReactQueryView() {
  const queryClient = useQueryClient();

  const getTodos = async () => {
    const response = await fetch(url);
    return response.json();
  };

  const query = useQuery({ queryKey: ["todos"], queryFn: getTodos });

  return (
    <div className="flex flex-col gap-6 w-full max-w-xl mx-auto border-2 p-6 my-20 overflow-x-scroll">
      <h1 className="text-2xl font-bold text-center">React Query Example</h1>
      <Link href="/">Back to Main</Link>
      <pre>
        {query.data ? JSON.stringify(query.data, null, 2) : "Loading..."}
      </pre>
    </div>
  );
}
