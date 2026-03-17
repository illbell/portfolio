import { createStore } from 'zustand/vanilla'

export type AnimateState = {
  heroAnimated: boolean
  skillsAnimated: boolean
  experienceAnimated: boolean
}

export type AnimateActions = {
  heroHasAnimated: () => void
  skillsHasAnimated: () => void
  experienceHasAnimated: () => void
}

export type AnimateStore = AnimateState & AnimateActions

export const defaultInitState: AnimateState = {
  heroAnimated: false,
  skillsAnimated:false,
  experienceAnimated:false
}

export const createAnimateStore = (
  initState: AnimateState = defaultInitState,
) => {
  return createStore<AnimateStore>()((set) => ({
    ...initState,
    heroHasAnimated: () => set((state) => ({ heroAnimated: true })),
    skillsHasAnimated: () => set((state) => ({ skillsAnimated: true })),
    experienceHasAnimated: () => set((state) => ({ experienceAnimated: true })),
  }))
}