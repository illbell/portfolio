'use client'

import { createAnimateStore, AnimateStore } from '@/stores/animate-store'
import { type ReactNode, createContext, useState, useContext } from 'react'
import { useStore } from 'zustand'


export type AnimateStoreApi = ReturnType<typeof createAnimateStore>

export const AnimateStoreContext = createContext<AnimateStoreApi | undefined>(
  undefined,
)

export interface AnimateStoreProviderProps {
  children: ReactNode
}

export const AnimateStoreProvider = ({
  children,
}: AnimateStoreProviderProps) => {
  const [store] = useState(() => createAnimateStore())
  return (
    <AnimateStoreContext.Provider value={store}>
      {children}
    </AnimateStoreContext.Provider>
  )
}

export const useAnimateStore = <T,>(
  selector: (store: AnimateStore) => T,
): T => {
  const animateStoreContext = useContext(AnimateStoreContext)
  if (!animateStoreContext) {
    throw new Error(`useAnimateStore must be used within AnimateStoreProvider`)
  }

  return useStore(animateStoreContext, selector)
}