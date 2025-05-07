import Greetings from "./Greetings"

function App() {
 return(
  <>
  <Greetings isLogged={true} username="MZ"/>
  <Greetings isLogged={false} username="She" />
  <Greetings isLogged={true} />
  </>
 );
}

export default App
