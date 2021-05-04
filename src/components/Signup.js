import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

// custome hooks
import { useForm } from '../hooks/useForm';
import { useAuth } from '../contexts/AuthContext';

// styled components
import { StyledInput } from '../styles/GlobalStyles';

const Signup = () => {
    const [{ email, password, passwordConfirm }, setInput] = useForm({
        email: '',
        password: '',
        passwordConfirm: '',
    });

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const { signup } = useAuth();
    const history = useHistory();

    const handleSubmit = async event => {
        event.preventDefault();

        if (password !== passwordConfirm) {
            setError('Passwords do not match');
        } else {
            try {
                setError('');
                setLoading(true);
                await signup(email, password);
                history.push('/');
            } catch (e) {
                setError('Failed to create account');
            } finally {
                setLoading(false);
            }
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <StyledInput
                        id="email"
                        name="email"
                        type="text"
                        value={email}
                        placeholder="e-mail"
                        onChange={setInput}
                    />
                </div>
                <div>
                    <StyledInput
                        id="password"
                        name="password"
                        type="password"
                        value={password}
                        onChange={setInput}
                    />
                </div>
                <div>
                    <StyledInput
                        id="passwordConfirm"
                        name="passwordConfirm"
                        type="password"
                        value={passwordConfirm}
                        onChange={setInput}
                    />
                </div>
                {error && <div>{error}</div>}
                <button type="submit" disabled={loading}>
                    Sign Up
                </button>
            </form>
            <div>
                Already have an account? <Link to="/login">Log in</Link>
            </div>
        </>
    );
};

export default Signup;
