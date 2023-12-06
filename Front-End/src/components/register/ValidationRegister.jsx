import * as Yup from 'yup'

export const ValidationRegister = Yup.object().shape({
    name: Yup.string().min(3).required(),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required').min(8),
});