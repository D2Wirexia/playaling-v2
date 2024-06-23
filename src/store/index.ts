import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import ui, { uiActions } from './ui'
import admin, { userActions } from './user'

export const store = configureStore({
  reducer: {
    ui,
    admin,
  },
})

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const actions = {
  ui: uiActions,
  user: userActions,
}
