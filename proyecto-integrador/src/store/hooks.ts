// Usa los siguientes hooks en la app en vez de los `useDispatch` y `useSelector` planos de Redux
import { type TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { type AppDispatch, type RootState } from '@/store/store'

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
