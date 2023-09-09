import { useState } from "react";
function David({ cor }){
    const [texto, setTexto] = useState("Titulo inicial")
    const [inputText, setInputText] = useState("");
    function clicou(){
        setTexto(inputText);
    }
return(
    <div>
        <h3 style={{color: cor}}>{texto}</h3>
        <input type="text" value={inputText} onChange={(e) =>{setInputText(e.target.value)}}/>
        <button onClick={clicou}>Mudar escrevendo</button>
        <button onClick={() => {setTexto("Mudei clicando")}}>Mudar clicando</button>
    </div>
)
}

export default David