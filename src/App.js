import './App.css';
import Profile  from './profile/profile.js';
import photo from './profile/juve.jpg'
function App() {
  const alertfun = () => {
    return alert("Federico Chiesa");
  }
  return (
    <div className="App">
       < Profile fullName="Federico Chiesa" bio=" born 25 October 1997 is an Italian professional footballer who plays as a winger for Serie A club Juventus. " profession="Player Footall" alert={alertfun} img={photo} />
    </div>
  );
}

export default App;
