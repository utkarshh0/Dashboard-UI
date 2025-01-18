import { configureStore } from '@reduxjs/toolkit'
import activeTabReducer from './features/activeTabSlice'
import authors from './features/authorSlice'

const store = configureStore({

    reducer : {
        activeTab : activeTabReducer,
        authors : authors
    }
})

export default store