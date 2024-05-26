import { useState } from "react"
import {PropTypes} from 'prop-types'

export const AddCategory = ({onNewCategory}) => {
    
    const [inputValue, setInputValue] = useState('');

    const onImputChange = ({target}) => {
        setInputValue(target.value);
    }
    
    const onSubmit = (event) => { 
        event.preventDefault();
        onNewCategory(inputValue);   
        setInputValue('');        
    }

    return (
        <form onSubmit={onSubmit} aria-label="form">
            <input 
                type="text" 
                placeholder="Buscar gif"
                value={inputValue}
                onChange={onImputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired, 
};