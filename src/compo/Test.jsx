import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';

const Test = (props) => {
  const [data, setData] = useState('No result');

  return (
    <>
      <QrReader
      className='small'
        onResult={(result, error) => {
          if (!!result) {
              const a=result?.text;
              const b=a.slice(0,6)
              console.log(b);
            // ideal data is normal and un diabetic
                if(b==="normaD"){
                    //normal + diabetic
                    setData("50% match");

                }else if(b==="normal"){
                    //100 normal

                    setData("100% match");
                }else if(a==="oD"){
                        setData("dieased")
                }else if(a==="o"){
                    setData("50% match")
            }
                else{
                    setData("qr is wrong");
                    
                }

              


              
          }

          if (!!error) {
            console.info(error);
          }
        }}
        
      />
      <p className='center'>{data}</p>
    </>
  );
};
export default Test;