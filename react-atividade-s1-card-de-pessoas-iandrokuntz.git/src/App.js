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
            <div>
        
                  <Developer name={Devs.Gabriel} age={idade.Gabriel} pais={pais.Gabriel}/>

                  <Developer name={Devs.Filipe} age={idade.Filipe} pais={pais.Filipe}/>
                
                  <Developer name={Devs.Mariana} age={idade.Mariana} pais={pais.Mariana}/>
                
            </div>

    </div>
  );
}

export default App;
