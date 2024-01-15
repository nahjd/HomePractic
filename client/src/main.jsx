import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store } from './redux/store.js'
// import {createStore} from "redux"
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
{/* <Box sx={{ flexGrow: 1 }}>
<Grid container spacing={12}>
    <Grid xs={4}>

    </Grid>
</Grid>
</Box> */}