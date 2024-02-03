import React from 'react'
import { useFormik } from 'formik'
import { basicSchema } from '../../schema/basicSchema'
import { sendRequest } from '../../helpers/sendRequest'
import { useDispatch } from 'react-redux'
import { createHandle, addUser } from '../../store/slices/appSlice'
import './MyForm.css'
export const MyForm = () => {
  const dispatch = useDispatch();

  const onSubmit = async (values, actions) => {
    console.log(values);
    let res = await sendRequest('POST', 'http://localhost:3001/users', values)
    console.log('here ');
    console.log('res is',res);
    actions.resetForm()
  }
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      userName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: basicSchema,
    onSubmit,
  })
  console.log(errors);
  return (
    <form className='form' onSubmit={handleSubmit} autoComplete='off'>
      <button onClick={() => dispatch(createHandle({ createClick: false }))} className='closeBtn'>X</button>
      <label htmlFor="userName">Username</label>
      <input
        value={values.userName}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder='Enter your username'
        id='userName'
        type="text"
      />
      {errors.userName && touched.userName && <p className='error'>{errors.userName}</p>}

      <label htmlFor="email">email</label>
      <input
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder='Enter your email'
        id='email'
        type="email"
      />
      {errors.email && touched.email && <p className='error'>{errors.email}</p>}

      <label htmlFor="password">Password</label>
      <input
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        autoComplete='off'
        placeholder='Enter your password'
        id='password'
        type="password"
      />
      {errors.password && touched.password && <p className='error'>{errors.password}</p>}

      <label htmlFor="confirmPassword">Confirm password</label>
      <input
        value={values.confirmPassword}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder='Confrim password'
        autoComplete='off'
        id='confirmPassword'
        type="password"
      />
      {errors.confirmPassword && touched.confirmPassword && <p className='error'>{errors.confirmPassword}</p>}

      <button className='submitBtn' type='submit'>Submit</button>
    </form>
  )
}