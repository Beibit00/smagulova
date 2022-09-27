import Main from "./components/main";
import DataProvider from "./components/context";



function App() {
  return (
    <div className="App">
      <DataProvider>
        <Main/>
      </DataProvider>
    </div>
  );
}

export default App;
