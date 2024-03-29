import PropTypes from "prop-types";

//...extraPropsを使うことで、必ず必要なもの以外のpropsは...extraPropsを使う
export default function Input({
    className,
    Icon,
    value,
    onChange,
    type,
    ...extraProps
}) {
    return (
        <div className={className}>
            {Icon && Icon}
            <input
                type={type}
                id={value}
                name={value}
                value={value}
                onChange={onChange}
                {...extraProps}
            />
        </div>
    );
}

Input.propTypes = {
    className: PropTypes.string,
    Icon: PropTypes.object,
    value: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    required: PropTypes.string,
};
