import {FaUser, FaLock, FaCheck } from 'react-icons/fa';
import {BiDotsHorizontalRounded} from 'react-icons/bi';
import './InputFeedback.css';

const InputFeedback = props => {

    const {inputStatus, size, inputType} = props;

    return (
        <div className={`feedback-container ${inputStatus} ${size}`}>
            { inputStatus === 'default' 
                ? inputType === 'email'
                    ? <FaUser />
                    : <FaLock />
                : inputStatus === 'invalid'
                    ? <BiDotsHorizontalRounded />
                    : <FaCheck />
            }
        </div>
    )
};

export default InputFeedback;