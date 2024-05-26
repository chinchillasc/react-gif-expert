import { render,screen } from "@testing-library/react";
import { GifGridItem } from "../../src/components/GifGridItem";

describe('Prueba en <GifGridItem/>', () => {

    const title = 'Goku';
    const url = 'https://dragon-ball.com/goku.gif';

    test('Debe hacer match con el snapshot', () => { 
        const {container} = render(<GifGridItem title={title} url={url} />);
        expect(container).toMatchSnapshot();
     });

     test('Debe mostrar la imagen con el url y el Alt indicado', () => { 
        render(<GifGridItem title={title} url={url} />);
        const {src,alt} = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
     });
    
     test('Debe mostrar el titulo en nuestro componente', () => { 
        render(<GifGridItem title={title} url={url} />);
        expect(screen.getByText(title)).toBeTruthy();
     });
});