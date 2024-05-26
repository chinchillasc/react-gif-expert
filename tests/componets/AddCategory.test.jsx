import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('Pruebas en <AddCategory/>', () => { 

    const inputValue = 'Dragon Ball';

    test('Debe de cambiar el valor de la caja de texto', () => {
          render(<AddCategory onNewCategory={ () => {} }/>);
          const input = screen.getByRole('textbox');
          fireEvent.input(input, {target:{value:inputValue}});
          expect(input.value).toBe(inputValue);
    });

    test('Debe de llamar onNewCategory si el imput tiene un valor', () => {
        render(<AddCategory onNewCategory={ () => {} }/>);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form'); //usa el aria-label por que o si no, no lo encuentra.

        fireEvent.input(input, {target:{value:inputValue}});
        fireEvent.submit(form);
        expect(input.value).toBe('');
  });

 });