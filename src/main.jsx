//esta asociado al html
// se crea un elemento raiz
// se va importar desde react
import  './sass/indes.scss'
import ReactDOM from "react-dom/client";
import { App } from "./App"; 
console.log(ReactDOM);

const root = ReactDOM.createRoot(document.querySelector('#root'))
console.log(root);
///tiene el metodo render y con el se va a dibujar 
// crearemos componentes y los pondremos aqui
root.render(<App></App>)