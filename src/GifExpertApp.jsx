import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
    const [categorias, setCategorias] = useState([]);  
    
    const onAddCategory = (nuevaCategoria) => {
        const categoria = nuevaCategoria.trim();
        if(categoria.length <= 0) return;
        if(categorias.includes(categoria)) return;
        setCategorias([categoria,...categorias]);
    }  

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory onNewCategory={onAddCategory}/>
            {categorias.map(categoria => (
                <GifGrid key={categoria} categoria={categoria}/>
            ))}          
        </>
    )
}