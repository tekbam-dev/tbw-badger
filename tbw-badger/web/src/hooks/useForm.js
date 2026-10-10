import { useState } from "react";

function useFrom(intialStates){

  const [values,setValues]= useState(intialStates);


  function handleChange(event){

    const {name,value,type,checked} = event.target;

     setValues((current) => ({

    ...current, 
    [name] : type === "checkbox" ? checked : value,
  }));

}

return {values,handleChange};
 


}

export default useFrom;