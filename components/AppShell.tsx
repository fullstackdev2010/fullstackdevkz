'use client';

import Header from "@/components/Header";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
          <Header />
          {children}
    </QueryClientProvider>
  );
}
