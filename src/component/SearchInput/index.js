import PropTypes from 'prop-types'
import style from './SearchInput.module.css'

const SearchInput = ({ onSubmit, onChange, value }) => {
    return (
        <form className={style.form} onSubmit={onSubmit} >
            <input
                onChange={onChange}
                value={value}
                className={style.input}
                type="text"
                placeholder="List" />
            <button className={style.addButton} type="submit" >Add</button>
        </form>
    )
}

SearchInput.propTypes = {
    onSubmit: PropTypes.func,
    onChange: PropTypes.func,
    value: PropTypes.string
}

export default SearchInput