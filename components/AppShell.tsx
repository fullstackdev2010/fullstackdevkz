'use client';

import Header from "@/components/Header";
import CollectModal from "@/components/CollectModal";
import { CollectModalProvider } from "@/hooks/useCollectModal";

import { WagmiConfig, createConfig, http } from 'wagmi';
import { mainnet } from 'wagmi/chains';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createPublicClient } from 'viem';

const publicClient = createPublicClient({
  chain: mainnet,
  transport: http(),
});

const wagmiConfig = createConfig({
  autoConnect: true,
  publicClient,
  chains: [mainnet],
});

const queryClient = new QueryClient();

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <WagmiConfig config={wagmiConfig}>
        <CollectModalProvider>
          <Header />
          {children}
          <CollectModal />
        </CollectModalProvider>
      </WagmiConfig>
    </QueryClientProvider>
  );
}
