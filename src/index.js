// import React from "react";
// const App=()=>{
//   return (
//     <>
//     <h1>Hello Js</h1>
//     </>
//   )
// }
// export default App;


import ReactDOM  from 'react-dom';
import App from './App';


const div=(document.querySelector('#root'));
const root=ReactDOM.createRoot(div);
root.render(<App/>);

