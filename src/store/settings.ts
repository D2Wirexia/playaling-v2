import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { DialectExtended } from '~/constants'

export interface ISettingsState {
  dialects: DialectExtended[]
}

const initialState: ISettingsState = {
  dialects: [],
}

export const settingsReducer = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    addDialects: (state: ISettingsState, action: PayloadAction<DialectExtended>): void => {
      state.dialects = [...state.dialects, action.payload]
    },
    removeDialects: (state: ISettingsState, action: PayloadAction<DialectExtended>): void => {
      state.dialects = state.dialects.filter(
        (dialect: DialectExtended) => dialect !== action.payload,
      )
    },
  },
})

export const settingsActions = settingsReducer.actions

export default settingsReducer.reducer
