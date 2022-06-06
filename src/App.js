import "./App.css";
import { ApiProvider } from "./context";

function App() {
  return (
    <div className="App">
      {
        return(
          <ApiProvider>
            <Router>
              <div>
                <NavBar/>
                <switch>
                  <Route path="/" exact component={Dashboard}/>
                  <Route path="/create" component={Create}/>
                  <Route path="/view" component={View}/>
                </switch>
              </div>
            </Router>
          </ApiProvider>
        
        
      
    </div>
  );
}

export default App;
