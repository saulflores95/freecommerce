import '../styles/sign-in-and-sign-up.scss'
import SignIn from '../../../components/sign-in/containers/sign-in'
import SignUp from '../../../components/sign-up/containers/sign-up'

const SignInAndSignUpPage = () => (
    <div className='sign-in-and-sign-up'>
        <SignIn />
        <SignUp />
    </div>
)

export default SignInAndSignUpPage