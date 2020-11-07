import React, { Component } from 'react'
import '../styles/sign-in.scss'
import FromInput  from '../../form-input/components/form-input'
import CustomButton from '../../custom-button/components/custom-button'
import { auth, signInWithGoogle } from '../../../firebase/firebase.utils'
export default class SignIn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({
            [name]:value
        })
    }

    handleSubmit = async (event) => {
        console.log("handleSubmit")
        event.preventDefault()
        const { email, password } = this.state
        try {
            console.log('try')
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({
                email: '',
                password:''
            })
        } catch (error ){
            console.error(error)
        }
    }   

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FromInput 
                        name='email' 
                        type='email' 
                        label='email'
                        required 
                        handleChange={this.handleChange}
                        value={this.state.email} />
                    <FromInput 
                        name='password' 
                        type='password' 
                        label='password'
                        handleChange={this.handleChange}
                        required 
                        value={this.state.password} />
                    <div className='buttons'>
                        <CustomButton type="submit"> 
                            Sign In 
                        </CustomButton>
                        <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn> 
                            SIGN IN WITH GOOGLE
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}