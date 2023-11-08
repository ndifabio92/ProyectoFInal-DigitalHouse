import './App.css';
import { Navigation } from './routes/Navigation';
import { UserProvider } from "../../Front-End/src/components/user/form 2/UserContext"

const App = () => {
  return (
    <UserProvider> 
      <Navigation /> 
    
    </UserProvider>
  );
};

export default App;


