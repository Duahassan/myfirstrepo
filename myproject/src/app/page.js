
import { CounterProvider} from "./Context/Counter";
import App from "./components/App";


export default function Home() {
  // const[name, setName]= useState("Dua")

  // const Rename=()=>{
  //   setName("Learn here")

  // }
  // const Innercomponent= ()=>{
  //   return(

  //     <h1>Innercomponent</h1>
  //   )
  // }
  return (<>
    <main className={""}>
      <CounterProvider>
      {/* <h1>Events , functions and states {name}</h1> */}
      {/* <Innercomponent/> */}
      {/* <button onClick={()=>Rename()}>Click me</button> */}
     <App/>
     </CounterProvider>

    </main>
    </>
  );
}
