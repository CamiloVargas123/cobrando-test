import { ChakraProvider } from '@chakra-ui/react'
import { QueryClientProvider, QueryClient } from "@tanstack/react-query"
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import store from './redux/store'
import './config/axios.config'
import { ThemeProvider } from '@mui/material'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5// milisegundo * segundo * minutos
    }
  }
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <Provider store={store}>
            <App />
        </Provider>
      </ChakraProvider>

    </QueryClientProvider>
  </React.StrictMode>
)
