import CommonForm from '@/components/common/form';
import { loginFormControls } from '@/config';
import React from 'react'
import { Link } from 'react-router-dom'

const initialState= {
  email:'',
  password:'',
}

function Login() {

const [formData, setFormData] = React.useState(initialState);
function onSubmit (){

}

  return (
    <div className='mx-auto w-full max-w-md space-y-6 '>

<div className='text-center'>
<h1 className='text-3xl font-bold tracking-tight text-foreground'>Login to your account</h1>
<p className='mt-2'>Don't have an account? <Link className=' hover:underline font-medium text-primary ' to='/auth/signup'>Signup</Link> </p>
</div>
<CommonForm  
formControls={loginFormControls}
buttonText={'Log In'}
formData={formData}
setFormData={setFormData}
onSubmit={onSubmit}

/>
    </div>
  )
}

export default Login