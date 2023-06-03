import * as yup from 'yup';
import {Box, Button} from '@mui/material';
import { LoaderInfinity } from 'components';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { addOrder } from 'api/orderApi copy';
import { selectCart } from 'redux/cart/cartSelectors';
import { css } from './cssOrderForm';

const schema = yup.object().shape({
    email: yup
      .string()
      .min(8)
      .max(63)
      .matches(
        /^[^-n]+[a-zA-Z0-9.,!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9]+)*$/,
        'Email must not contain the "-" as a first or last character'
      )
      .email()
      .required(),
    password: yup
      .string()
      .min(7)
      .max(32)
      .matches(
        /^[a-zA-Z0-9]*$/,
        'Password must contain only latin letters and/or numbers'
      )
      .required(),
  });
  
  const initialValues = {
    name: '',
    email: '',
    phone: '',
    address: ''
  };
  
export default function LoginForm () {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectCart) // ***********
    const cart = useSelector(selectCart)
  
    const handleSubmit = values => {
    //   const { name, email, phone, address } = values;
      dispatch(addOrder({...values, order: cart}));
    };
  
    return (
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form>
          <Box sx={{ position: 'relative' }}>
            <Field
              type="email" name="email"
              placeholder={"Enter email"}
              disableunderline="true"
            />
            <ErrorMessage name="email">
              {msg => <Box sx={css.errorText}>*{msg}</Box>}
            </ErrorMessage>
          </Box>
          <Box sx={{ position: 'relative' }}>
            <Field
              type="phone" name="phone"
              placeholder={'Enter your phone'}
              disableunderline="true"
            />
            <ErrorMessage name="password">
              {msg => <Box sx={css.ErrorText}>*{msg}</Box>}
            </ErrorMessage>
          </Box>
          <Button variant="contained" type="submit">
            {!isLoading ? 'submit' : <LoaderInfinity />}
          </Button>
        </Form>
      </Formik>
    );
  };