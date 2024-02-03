import React from 'react'
import { useFormik } from 'formik'
import { basicSchema } from '../../schema/basicSchema'
import './MyForm.css'
export const MyForm = () => {
  const onSubmit = async (values, actions) => {
    console.log(values);
  }
  const { values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      userName: '',
      email: '',
      password: '',
      confirmPassword: '',
      checkbox1: false,
    },
    validationSchema: basicSchema,
    onSubmit,
  })

  return (
    <form className='form' onSubmit={handleSubmit} autoComplete='off'>
      <label htmlFor="userName">Username</label>
      <input
        value={values.userName}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder='Enter your username'
        id='userName'
        type="text"
      />
      {errors.userName && touched.userName && <p >{errors.userName}</p>}

      <label htmlFor="email">email</label>
      <input
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder='Enter your email'
        id='email'
        type="email"
      />
      {errors.email && touched.email && <p >{errors.email}</p>}

      <label htmlFor="password">Password</label>
      <input
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder='Enter your password'
        id='password'
        type="password"
      />
      {errors.password && touched.password && <p >{errors.password}</p>}

      <label htmlFor="confirmPassword">Confirm password</label>
      <input
        value={values.confirmPassword}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder='Confrim password'
        id='confirmPassword'
        type="password"
      />
      {errors.confirmPassword && touched.confirmPassword && <p >{errors.confirmPassword}</p>}

      <label htmlFor="checkbox1">
        <input
          id="checkbox1"
          type="checkbox"
          name="checkbox1"
          onChange={handleChange}
          checked={values.checkbox1}
        />
        CheckBox</label>
      <button disabled={isSubmitting} type='submit'>Submit</button>
    </form>
  )
}