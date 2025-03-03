import CommonForm from '@/components/common/form';
import { registerFormControls } from '@/config';
import React from 'react'
import { Link } from 'react-router-dom'

const initialState= {
  username:'',
  email:'',
  password:'',
}

function Register() {

const [formData, setFormData] = React.useState(initialState);
function onSubmit (){

}

  return (
    <div className='mx-auto w-full max-w-md space-y-6 '>

<div className='text-center'>
<h1 className='text-3xl font-bold tracking-tight text-foreground'>Create new account</h1>
<p className='mt-2'>Already have an account? <Link className=' hover:underline font-medium text-primary ' to='/auth/login'>Login</Link> </p>
</div>
<CommonForm  
formControls={registerFormControls}
buttonText={'Sign Up'}
formData={formData}
setFormData={setFormData}
onSubmit={onSubmit}

/>
    </div>
  )
}

export default Register