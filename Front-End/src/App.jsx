import './App.css';
import { DataProvider } from './components/user/form 2/Context';
import { Navigation } from './routes/Navigation';

const App = () => {

  return (
      <DataProvider>

      <Navigation /> 
    
      </DataProvider>
  );
};

export default App;


