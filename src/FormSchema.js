import * as yup from 'yup';

export default yup.object().shape({
    name: yup.string()
    .required('We need your name')
    .min(3, "Your name must be 3 characters or longer"),
    size: yup.string()
    .required('Give us a size'),
    sausage: yup.boolean(),
    pepperoni: yup.boolean(),
    mushrooms: yup.boolean(),
    pineapple: yup.boolean(),
    instructions: yup.string(),
});