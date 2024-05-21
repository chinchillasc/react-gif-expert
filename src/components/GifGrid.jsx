import { GifGridItem } from "./GifGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({categoria}) => {

    const {imagenes,isLoading} = useFetchGifs(categoria);

    return (
        <>
            <h3>{categoria}</h3>

            { isLoading && (<h2>Cargando...</h2>) }
            
            <div className="card-grid">
                {
                    imagenes.map((imagen) => (
                        <GifGridItem 
                            key={imagen.id} 
                            {...imagen}
                        />
                    ))
                }
            </div>    
        </>
    );
}