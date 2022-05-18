import PropTypes from 'prop-types'
import classNames from 'classnames';
import style from './Todos.module.css';
import minusIcon from '../../assets/minus-icon.svg';
import plusIcon from '../../assets/plus-icon.svg';

const Todos = (props) => {
    return (
        <div className="todos" >
            {props.todos.map((todo, index, arr) => {
                return (
                    <div key={index}
                        // className={`todo ${!(arr.length === index + 1) && 'todo-divider'}`} 
                        // menggunakan library classnames
                        className={classNames(style.todo, {
                            [style.todoDivider]: !(arr.length === index + 1)
                        })}
                    >
                        {todo.title}

                        <div className={style.todoIconWrapper} >
                            <div className={style.todoCount} > {todo.count} </div>

                            <button onClick={() => props.onSubstraction(index)} className={style.todoActionButton} >
                                <img src={minusIcon} alt="Minus Icon" />
                            </button>

                            <button onClick={() => props.onAddition(index)} className={style.todoActionButton} >
                                <img src={plusIcon} alt="Plus Icon" />
                            </button>

                        </div>
                    </div>
                )
            })}
        </div>
    )
}

Todos.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        count: PropTypes.number
    })),
    onSubstraction: PropTypes.func,
    onAddition: PropTypes.func
}

export default Todos