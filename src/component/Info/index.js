import PropTypes from 'prop-types'

import style from './Info.module.css'

const Info = ({ todosLength, totalCounts, onDelete }) => {
    return (
        <div className={style.info}>
            <div className={style.infoTotal} >
                <p>{`Total List : ${todosLength}`}</p>
            </div>
            <div className={style.infoTotal} >
                <p>{`Total Counts : ${totalCounts} `}</p>
            </div>
            <button onClick={onDelete} className={style.deleteAllButton} >
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