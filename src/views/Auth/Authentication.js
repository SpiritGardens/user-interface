import './Auth.css';
import InputFeedback from '../../components/InputFeedback';

const Auth = () => {
    return (
        <section className="auth-container">
            <h1>Sign in to continue to the Admin Dashboard.</h1>
            <InputFeedback inputStatus="default" size="small" inputType="password" />
        </section>
    )
};

export default Auth;