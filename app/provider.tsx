'use client'

import {NextUIProvider} from "@nextui-org/react";
import { ChakraProvider } from '@chakra-ui/react'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'



const queryClient = new QueryClient()

export function Providers({ children }: { children: React.ReactNode }) {
  return <QueryClientProvider client={queryClient}>
    <NextUIProvider>
      <ChakraProvider>
        {children}
      </ChakraProvider>
    </NextUIProvider>
  </QueryClientProvider>
}