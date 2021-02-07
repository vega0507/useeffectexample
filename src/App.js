import { useState, useEffect } from 'react';
import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import { Button } from '@material-ui/core';
function App() {
  
  const [openAlert, setOpenAlert] = useState(false);
  
  const [total, setTotal] = useState(0);
  const [totalChangeMessage, setTotalChangeMessage] = useState('');  
  const [everyRenderMessage, setEveryRenderMessage] = useState('');

  //Run at initial render 
  useEffect(() =>{
    console.log("Run at initial render ");   
    setOpenAlert(true);
  }, []); 


  //Run at initial render and every render if total has changed 
  useEffect(() =>{
    console.log("Total has changed to: "+total); 
    setTotalChangeMessage("Total has changed to: "+total); 
  }, [total]); 

  
  useEffect(() =>{    
    console.log("First time and after every render "); 
    if(total % 2 === 0){
      setEveryRenderMessage('It\'s even'); 
    }else{
      setEveryRenderMessage('It\'s odd'); 
    } 
  });


       

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenAlert(false);
  };
 

  return (    
    <div className="App">
      
      <h2>Total: {total}</h2>
      <Button color="primary" variant="contained" onClick={() => setTotal( (total +1) ) }>
        Add 1
      </Button>
      
      <h2>{totalChangeMessage}</h2>

      <h1>{everyRenderMessage}</h1>

      <Snackbar open={openAlert} autoHideDuration={6000} 
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        onClose={handleClose}>
        <Alert                 
          onClose={handleClose} severity="error" variant="filled" >
          Alert displayed on initial render
        </Alert>
      </Snackbar>


    </div>
  );
}


export default App;
