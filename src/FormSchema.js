import * as yup from 'yup';

export default yup.object().shape({
    name: yup.string()
    .required('We need your name')
    .min(3, "Your name must be 3 characters or longer")
});