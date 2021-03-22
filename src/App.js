import "./App.scss";
import Header from "./components/Header/Header";
import SearchCats from "./containers/SearchCats/SearchCats";
import Footer from '../src/components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchCats />
      <Footer />
     
      
    </div>
  );
}

export default App;
