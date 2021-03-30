import React, { Component } from 'react'
import FromInput  from '../../components/form-input/components/form-input'
import CustomButton from '../../components/custom-button/components/custom-button'
import ImgUploader from '../img-uploader/img-uploader.component'

import './seller-registration.scss'

const SANTANDER = 'SANTANDER'
const BANREGIO = 'BANREGIO'
const HSBC = 'HSBC'
const BBVA = 'BBVA'


export default class SellerRegistration extends Component {
    constructor(props) {
        super(props)
        this.state = {
            slug: '',
            email:'',
            address:'',
            companyLogo: '',
            companyName: '',
            banks: {
                SANTANDER: 'Santander',
                BANREGIO: 'Banregio',
                HSBC,
                BBVA
            },
            bankDetails: {
                socialReason: '',
                rfc: '',
                bankName: SANTANDER
            },
            type: '',
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
        const { email, password } = this.state;
    }   

    render() {
        return (
            <div className='seller-registration'>
                <h2>Setup your seller account</h2>
                <span>This will be associaeted to your current logged in account</span>
                <form onSubmit={this.handleSubmit}>
                <ImgUploader />
                <FromInput 
                        name='companyName' 
                        type='text' 
                        label='Company Name'
                        required 
                        handleChange={this.handleChange}
                        value={this.state.companyName} />
                    <FromInput 
                        name='slug' 
                        type='text' 
                        label='Slug of Company'
                        required 
                        handleChange={this.handleChange}
                        value={this.state.slug} />
                    <FromInput 
                        name='socialReason' 
                        type='text' 
                        label='Social Reason'
                        required 
                        handleChange={this.handleChange}
                        value={this.state.bankDetails.socialReason} />
                    <FromInput 
                        name='bankName' 
                        type='text' 
                        label='Bank Name'
                        required 
                        handleChange={this.handleChange}
                        value={this.state.bankDetails.bankName} />
                    <FromInput 
                        name='rfc' 
                        type='text' 
                        label='RFC'
                        required 
                        handleChange={this.handleChange}
                        value={this.state.bankDetails.rfc} />
                        
                    <FromInput 
                        name='email' 
                        type='email' 
                        label='email'
                        required 
                        handleChange={this.handleChange}
                        value={this.state.email} />
                    <FromInput 
                        name='address' 
                        type='type' 
                        label='Company Address'
                        handleChange={this.handleChange}
                        required 
                        value={this.state.address} />
                    <div className='buttons'>
                        <CustomButton type="submit"> 
                            Submit
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}