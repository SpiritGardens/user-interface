import './CustomTextInput.css';

const CustomTextInput = (props) => {

    const { onInputChange } = props;
    return (
        <input type="text" className="text-input" onChange={(input) => onInputChange(input.target.value)} />
    )
}; 

export default CustomTextInput;