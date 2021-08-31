import logo from './logo.svg';
import './App.css';
import Developer from './Componentes/Developer';

function App() {

  let Devs = {Gabriel: "Gabriel",
              Filipe: "Felipe",
              Mariana: "Mariana"
             }
  let idade = {Gabriel: 19,
               Filipe: 28,
               Mariana: 24
              }
  let pais = {Gabriel: "Brasil",
              Filipe: "Brasil",
              Mariana: "Itália"
             }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

          <div className = "BoxCards">

                <div className = "DeveloperCard">
                  <Developer name={Devs.Gabriel} age={idade.Gabriel} country={pais.Gabriel}/>
                </div>
                <div className = "DeveloperCard">
                  <Developer name={Devs.Filipe} age={idade.Filipe} country={pais.Filipe}/>
                </div>
                <div className = "DeveloperCard">
                  <Developer name={Devs.Mariana} age={idade.Mariana} country={pais.Mariana}/>
                </div>
            </div>
          
      </header>
    </div>
  );
}

export default App;
