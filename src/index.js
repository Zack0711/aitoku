import React from 'react'
import { createRoot } from 'react-dom/client'

import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'

import theme from './theme'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <h1>Hello World!</h1>
    </ThemeProvider>
  )
}

const root = document.getElementById('root')
createRoot(root).render(<App/>)