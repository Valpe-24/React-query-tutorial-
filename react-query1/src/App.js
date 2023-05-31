import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query-devtools';
import { Repositories } from './Repositories';

function App() {
  return (
    <QueryClientProvider client={QueryClient}>
      <Repositories />
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
    
  );
}

export default App;
