import Student from "./Student"

function App() {
  return (
    <>
      <Student name="Muhammad" age={23} isQualified={true} />
      <Student name="Muaad" age={19} isQualified={false}/>
      <Student name="mz"/>
    </>
  );
}

export default App
