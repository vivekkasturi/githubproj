import logo from './logo.svg';
import './App.css';
import { Grid } from './Grid/Grid';
import { useState } from 'react';
function App() {



const [size, setSize ] = useState(0);
  return (

    
    <div className="App">
      <input type="number" onChange={(x)=> setSize(x.target.value)} />
    <Grid size={size}/>
    </div>
  );
}

export default App;
