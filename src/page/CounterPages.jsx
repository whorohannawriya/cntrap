import { useState } from 'react';
import { Buttons } from '../Components/Buttons'
import {Message} from '../Components/Message'

 export const CounterPage=()=>{
   const[count, setCount]= useState(0);
    // let count=0;
    const updateCount=(val)=>{
        
       if(val==='+'){
       setCount(count+1);
       }
       else{
        setCount(count-1);
       }
       console.log("count is ", count)
    }
    return(
        <div className='container'>
            <Message className="alert alert-info" msg='Counter App'/>
            <Message className="alert alert-danger" value={count} msg='Counter Value'/>
            <div className="d-grid gap-2 col-6 mx-auto"> {/* Center aligns the buttons */}
        <Buttons type="button" fn={updateCount} val='+' className="btn btn-danger btn-lg mx-2" style={{ width: '150px' }} /> {/* mx-2 adds horizontal margin */}
        <Buttons type="button" fn={updateCount} val='-' className="btn btn-info btn-lg mx-2" style={{ width: '150px' }} />
      </div>
        </div>
    )
}
