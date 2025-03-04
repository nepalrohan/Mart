import CommonForm from '@/components/common/form';
import { registerFormControls } from '@/config';
import { registerUser } from '@/store/auth-slice';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { toast } from "sonner"

const initialState= {
  userName:'',
  email:'',
  password:'',
}

function Register() {

const [formData, setFormData] = useState(initialState);
const dispatch = useDispatch();
const {  isLoading } = useSelector((state) => state.auth);

const navigate = useNavigate();
function onSubmit (e){
  e.preventDefault();
  dispatch(registerUser(formData)).then((data)=> {if(data?.payload?.success){
    toast.success(data?.payload?.message);

    navigate('/auth/login')

  }else{
    toast.error(data?.payload?.message );
  }});

}

  return (
    <div className='mx-auto w-full max-w-md space-y-6 '>

<div className='text-center'>
<h1 className='text-3xl font-bold tracking-tight text-foreground'>Create new account</h1>
<p className='mt-2 mb-8'>Already have an account? <Link className=' hover:underline font-medium text-primary ' to='/auth/login'>Login</Link> </p>
</div>
<CommonForm  
formControls={registerFormControls}
buttonText={'Sign Up'}
formData={formData}
setFormData={setFormData}
onSubmit={onSubmit}
isLoading={isLoading}

/>
    </div>
  )
}

export default Register