"use client";

import React from "react";
import ReactQueryView from "./View";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function ReactQueryPage() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryView />
    </QueryClientProvider>
  );
}
