
import './styles.css'


export const TextInput = (searchValue, handleChange) => {
        return(
            <input
            value={searchValue} 
            onChange={handleChange}
            type='search'/>
        )
    }
