import { ThemeProvider } from '@emotion/react'
import { createTheme } from '@mui/material'
import './App.css'

import Sidebar from './components/Sidebar'
import AppState from './Contexts/AppState'

const theme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: 'Barlow, sans-serif',
        },
      },
    },
  },
})

function App() {
  return (
    <><div className='Header'>
      <a href='https://github.com/Jagadeesh-Kumar-Initial-Is-S' target='_blank' alt='header'>Submitted and coded by Jagadeesh Kumar . S, you may send mail to my email address which is jagadeesh_2k17@proton.me, you may contribute some money to my Indian Unified Payment Interface (UPI) which is jagadeesh-kumar@ybl .</a>
    </div><ThemeProvider theme={theme}>
        <AppState>
          <div className="App">
            <Sidebar />
          </div>
        </AppState>
      </ThemeProvider><div className='Footer'>
        <a href='https://github.com/Jagadeesh-Kumar-Initial-Is-S' target='_blank' alt='header'>Submitted and coded by Jagadeesh Kumar . S, you may send mail to my email address which is jagadeesh_2k17@proton.me, you may contribute some money to my Indian Unified Payment Interface (UPI) which is jagadeesh-kumar@ybl .</a>
      </div></>
  )
}

export default App
