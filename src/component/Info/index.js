import PropTypes from 'prop-types'

import style from './Info.module.css'

const Info = (props) => {
    return (
        <div className={style.info}>
            <div className={style.infoTotal} >
                <p>{`Total List : ${props.todosLength}`}</p>
            </div>
            <div className={style.infoTotal} >
                <p>{`Total Counts : ${props.totalCounts} `}</p>
            </div>
            <button onClick={props.onDelete} className={style.deleteAllButton} >
                Delete All List
            </button>
        </div>
    )
}

Info.propTypes = {
    todosLength: PropTypes.number,
    totalCounts: PropTypes.func,
    onDelete: PropTypes.func
}


export default Info