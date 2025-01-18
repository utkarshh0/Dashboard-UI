import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  authors: [
    {
      id: 1,
      name: 'John Michael',
      email: 'john@creative-tim.com',
      function: 'Manager Organization',
      status: 'ONLINE',
      employed: '23/04/18',
    },
    {
      id: 2,
      name: 'Alexa Liras',
      email: 'alexa@creative-tim.com',
      function: 'Programator Developer',
      status: 'OFFLINE',
      employed: '11/01/19',
    },
    {
      id: 3,
      name: 'Laurent Perrier',
      email: 'laurent@creative-tim.com',
      function: 'Executive Projects',
      status: 'ONLINE',
      employed: '19/09/17',
    },
    {
      id: 4,
      name: 'Michael Levi',
      email: 'michael@creative-tim.com',
      function: 'Programator Developer',
      status: 'ONLINE',
      employed: '24/12/08',
    },
    {
      id: 5,
      name: 'Richard Gran',
      email: 'richard@creative-tim.com',
      function: 'Manager Executive',
      status: 'OFFLINE',
      employed: '04/10/21',
    },
    {
      id: 6,
      name: 'Miriam Eric',
      email: 'miriam@creative-tim.com',
      function: 'Programator Developer',
      status: 'OFFLINE',
      employed: '14/09/20',
    },
  ],
}

const authorsSlice = createSlice({
  name: 'authors',
  initialState,
  reducers: {
    updateAuthor(state, action) {
      const { id, updatedData } = action.payload
      console.log('uD---', updatedData)
      const index = state.authors.findIndex((author) => author.id === id)
      if (index !== -1) {
        state.authors[index] = { ...state.authors[index], ...updatedData }
      }
    },

    removeAuthor(state, action) {
      state.authors = state.authors.filter((author) => author.id !== action.payload)
    },
  },
})

export const { updateAuthor, removeAuthor } = authorsSlice.actions

export default authorsSlice.reducer
