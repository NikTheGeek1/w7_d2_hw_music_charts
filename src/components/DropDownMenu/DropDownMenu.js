import './DropDownMenu.css';

const DropDownMenu = ({title, optionsArr, onChange, defaultValue}) => {

    const options = optionsArr.map((option, idx) => {
        return <option key={idx} value={option.value}>{option.value}</option>;
    });

    const onChangeHandler = event => {
        onChange(event.target.value);
    };

    return (
        <div className="DDM">
            <label htmlFor={title}>Select {title}: </label>
            <select name={title} id={title} onChange={onChangeHandler} defaultValue={defaultValue}>
                {options}
            </select>
        </div>
    );
};

export default DropDownMenu;