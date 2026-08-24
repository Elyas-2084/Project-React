import React, { useState } from 'react'
import useFormFields from '../../../Utils/useFormFields'
import { useDispatch } from 'react-redux'
import { login } from '../../../store/Slices/Auth'
import fetchData from '../../../Utils/FetchData'
import { toast } from 'react-toastify'

export default function Register() {
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [errorMsg, setErrorMsg] = useState('')
    const [loading, setLoading] = useState(false)
    const [fields, handleChange] = useFormFields()
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        setErrorMsg('')

        // چک کنیم پسورد و تکرارش یکی باشن، قبل از اینکه اصلاً درخواست بفرستیم
        if (fields.password !== fields.confirmPassword) {
            setErrorMsg('Passwords do not match')
            return
        }

        setLoading(true);

        (async () => {
            try {
                const res = await fetchData('auth/local/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        username: fields.username,
                        email: fields.email,
                        password: fields.password,
                    }),
                })

                if (res.jwt) {
                    dispatch(login({ token: res.jwt, username: res.user.username }))
                    toast.success('Account created successfully')
                }
                else {
                    setErrorMsg(res.error?.message || 'Something went wrong')
                    toast.warning('Something went wrong')
                }
            }
            catch (error) {
                console.log(error)
                setErrorMsg('Something went wrong. Please try again.')
                toast.error('Something went wrong. Please try again.')
            }
            finally {
                setLoading(false)
            }
        })()
    }

    return (
        <form className='auth-form' onSubmit={handleSubmit}>

            {errorMsg && <div className='auth-error'>{errorMsg}</div>}

            <label className='auth-label'>Username</label>
            <div className='auth-input-wrap'>
                <i className='bi bi-person'></i>
                <input type='text' placeholder='John Doe' name='username' onChange={handleChange} />
            </div>

            <label className='auth-label'>Email Address</label>
            <div className='auth-input-wrap'>
                <i className='bi bi-envelope'></i>
                <input type='email' placeholder='hello@example.com' name='email' onChange={handleChange} />
            </div>

            <label className='auth-label'>Password</label>
            <div className='auth-input-wrap'>
                <i className='bi bi-lock'></i>
                <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder='Create a Strong password'
                    name='password'
                    onChange={handleChange}
                />
                <button type='button' className='toggle-password' onClick={() => setShowPassword((s) => !s)}>
                    <i className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'}`}></i>
                </button>
            </div>

            <label className='auth-label'>Confirm Password</label>
            <div className='auth-input-wrap'>
                <i className='bi bi-lock'></i>
                <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    placeholder='Confirm your password'
                    name='confirmPassword'
                    onChange={handleChange}
                />
                <button type='button' className='toggle-password' onClick={() => setShowConfirmPassword((s) => !s)}>
                    <i className={`bi ${showConfirmPassword ? 'bi-eye-slash' : 'bi-eye'}`}></i>
                </button>
            </div>

            <button type='submit' className='auth-submit-btn' disabled={loading}>
                {loading ? 'Creating account...' : <>Create Account <i className='bi bi-arrow-right'></i></>}
            </button>

            <div className='auth-divider'>
                <span>Or continue with</span>
            </div>

            <div className='auth-social-row'>
                <button type='button' className='social-btn'>
                    <i className='bi bi-google'></i> Google
                </button>
                <button type='button' className='social-btn'>
                    <i className='bi bi-facebook'></i> Facebook
                </button>
                <button type='button' className='social-btn'>
                    <i className='bi bi-apple'></i> Apple
                </button>
            </div>

            <p className='auth-terms'>
                By continuing, you agree to our Terms of Service and Privacy Policy.
            </p>
        </form>
    )
}