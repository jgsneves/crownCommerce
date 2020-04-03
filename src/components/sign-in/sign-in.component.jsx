import React from 'react';
import './sign-in.style.scss';
import FormInput from '../form-input/form-input.component';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({email: '', password: ''});
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({[name]: value});
    }

    render() {
        return (
            <div className='sign-in'>
                <h2 className=''>Já tenho uma conta:</h2>
                <span>Utilize seu e-mail para fazer login.</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name="email" 
                        type="email"
                        handleChange={this.handleChange} 
                        value={this.state.email} 
                        label="email"
                        required 
                    />
                    
                    <FormInput 
                        name="password" 
                        type="password"
                        handleChange={this.handleChange} 
                        value={this.state.password}
                        label="password" 
                        required 
                    />
                    

                    <input type="submit" value='Submit Form'/>
                </form>
            </div>
        );
    }
}

export default SignIn;