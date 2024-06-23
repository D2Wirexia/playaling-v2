import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface IUserState {
  isGuest: boolean
}

const initialState: IUserState = {
  isGuest: true,
}

export const userReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser: (state: IUserState, action: PayloadAction<IUserState>): IUserState => ({
      ...state,
      ...action.payload,
    }),
  },
})

export const userActions = userReducer.actions

export default userReducer.reducer
