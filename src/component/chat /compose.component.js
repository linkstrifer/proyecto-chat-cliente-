import { useState } from "react";

import { API } from  "./constants";

function Compose({onSuccess}) {
    const [value, setValue] = useState ('');
    
    return (
    <form 
    onSubmit={(event) => {
        event.preventDefault();
    
        if (value !== '') {
        fetch(`${ API }/channel/general`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                    user: "kelly",
                    text: value,
                }),
            })
            .then(()=> {
                onSuccess();
                setValue('')
            })
            .catch((error) => console.error(error));
        }        
    }}
    > 
        <input  value= {value} onChange={(event) => setValue(event.
            target.value)}/>
        <button className="enviar"> Enviar</button>
        </form>
   
    )
    
}

export default Compose;