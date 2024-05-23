import "./App.css";
import BarraFerramentas from "./components/BarraFerramentas";
import Contador from "./components/Contador";
import ExibirPostagens from "./components/ExibirPostagens";
{
  /*import Counter from "./components/Counter";
import CounterInterval from "./components/CounterInterval";*/
}
import FormularioLogin from "./components/FormularioLogin";
{
  /*import Greeting from "./components/Greeting";*/
}
import ListaDeCompras from "./components/ListaDeCompras";
import UseCustomHook from "./components/UseCustomHook";
import { TemaProvider } from "./contexts/TemaContext";
{
  /*import TextInput from "./components/TextInput";*/
}

function App() {
  return (
    <>
      {/*1 - Componente funcional com TS 
      <Greeting name={"Caio"} />
      2 - Hooks com tipos 
      <Counter />
      3 - Manipulação de eventos com tipos
      <TextInput />
      4 - Custom hooks com TS
      <CounterInterval />
      {/*Exercicios */}
      <h3>Exercícios</h3>
      <FormularioLogin />
      <ListaDeCompras />
      <UseCustomHook />
      {/*6 - useReducer com TS */}
      <Contador />
      {/*7 - Context API com TS */}
      <TemaProvider>
        <BarraFerramentas />
      </TemaProvider>
      {/*8 - Requisição de APIs com Axios e TS  */}
      <ExibirPostagens />
    </>
  );
}

export default App;
