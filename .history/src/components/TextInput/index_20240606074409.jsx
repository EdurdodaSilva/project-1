
import './styles.css'


export const TextInput = ({searchValue, handleChange}) => {
        return(
            <input
            className='text-input'
            placeholder='Buscar post'
            value={searchValue} 
            onChange={handleChange}
            type='search'/>
        )
    }
