import PropTypes from "prop-types"
import style from "./Container.module.css";

const Container = (props) => {
    return (
        <section className={style.container} >
            {props.children}
        </section>
    )
}

Container.propTypes = {
    children: PropTypes.node
}

export default Container