import './App.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import Demo from './components/Demo'
import Hero from './components/Hero'

const  queryClient = new QueryClient({});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <main>
        <div className="main">
          <div className="gradient"></div>
        </div>
        
        <div className="app">
          <Hero />
          <Demo />
        </div>
      </main>
    </QueryClientProvider>
  )
}

export default App

//http://webcache.googleusercontent.com/search?q=cache:http://example.com/ 