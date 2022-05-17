import PropTypes from 'prop-types'
import style from './SearchInput.module.css'

const SearchInput = (props) => {
    return (
        <form className={style.form} onSubmit={props.onSubmit} >
            <input
                onChange={props.onChange}
                value={props.value}
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