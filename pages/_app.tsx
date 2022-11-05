import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Store } from '../redux/store' 
import {Provider} from 'react-redux'


const queryClient = new QueryClient()

export default function MyApp({ Component, pageProps }: AppProps) {
  

  return (  
  <QueryClientProvider client={queryClient}>
    <Provider store={Store}>
    <Component {...pageProps} />
    </Provider>
  </QueryClientProvider>  
  )
}


