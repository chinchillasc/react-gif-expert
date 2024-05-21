import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifts"

export const useFetchGifs = (categoria) => {

    const [gifs,setGifts] = useState([]); 
    const [isLoading,setIsLoading] = useState(true);   
    
    const obtenerImagenes = async() => {
        getGifs(categoria).then(giftsPorCategoria => {
            setGifts(giftsPorCategoria);
        });
        setIsLoading(false);
    }  
    useEffect(()=>{      
        obtenerImagenes();
    }, []);
    
    return {
        imagenes: gifs,
        isLoading: isLoading
    }
}
