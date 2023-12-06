import * as Yup from 'yup'

export const ValidationLogin = Yup.object().shape({
    name:Yup.string().max(20).required(),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required').min(8),
});