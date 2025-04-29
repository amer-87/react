import Side from './Side';
import Center from './Center';
import Academy from './Academy';
import Header from './Header';
import './App.css';

function App() {


 


  return (<>   
    <Header/> 
    <div className="budy">
      <div className='Academy'><Academy/></div>  
      <div className='Center'>  <Center/></div>
      <div className='siditem'> 




      <Side><>from children</></Side>
     
      </div>  
    
   
   
    </div>
    </>
  );
}

export default App;
