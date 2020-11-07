import React, { Component } from 'react'
import '../styles/sign-up.scss'
import FromInput  from '../../form-input/components/form-input'
import CustomButton from '../../custom-button/components/custom-button'
import { auth, createUserProfileDocument } from '../../../firebase/firebase.utils'

export default class SignUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({
            [name]:value
        })
    }

    handleSubmit = async event => {
        event.preventDefault()
        const {
            displayName,
            email,
            password,
            confirmPassword
        } = this.state

        if(password !== confirmPassword) {
            alert("passwords don't match")
            return
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password)
            await createUserProfileDocument(user, {displayName})
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        } catch (error) {
            console.error(error)
        }
    }   

    render() {
        const {
            displayName,
            email,
            password,
            confirmPassword
        } = this.state
        return (
            <div className='sign-up'>
                <h2 className='title'>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FromInput 
                        name='displayName' 
                        type='text' 
                        label='Display Name'
                        required 
                        handleChange={this.handleChange}
                        value={displayName} />
                    <FromInput 
                        name='email' 
                        type='email' 
                        label='email'
                        handleChange={this.handleChange}
                        required 
                        value={email} />
                    <FromInput 
                        name='password' 
                        type='password' 
                        label='password'
                        handleChange={this.handleChange}
                        required 
                        value={password} />
                    <FromInput 
                        name='confirmPassword' 
                        type='password' 
                        label='confirm password'
                        handleChange={this.handleChange}
                        required 
                        value={confirmPassword} />
                    <div className='buttons'>
                        <CustomButton type="submit"> 
                            Sign Up
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}