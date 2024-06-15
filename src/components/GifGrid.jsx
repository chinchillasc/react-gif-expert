import { GifGridItem } from "./GifGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { PropTypes } from 'prop-types'

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

GifGrid.propType = {
    categoria: PropTypes.string.isRequired
}