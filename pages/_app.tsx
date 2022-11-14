import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Store } from '../redux/store'
import { Provider } from 'react-redux'
import { MyThemeContextProvider } from "../store/ThemeProvider";

const queryClient = new QueryClient()


export default function MyApp({ Component, pageProps }: AppProps) {


  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={Store}>
        <MyThemeContextProvider>
            <Component {...pageProps} />
        </MyThemeContextProvider>
      </Provider>
    </QueryClientProvider>

  )
}


