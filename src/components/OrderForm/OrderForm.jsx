import * as yup from "yup";
import { Box, Button } from "@mui/material";
import { LoaderInfinity } from "components";
import { Formik, Form, ErrorMessage, useFormik, Field } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { selectCart, selectIsLoadingCart } from "redux/cart/cartSelectors";
import { css } from "./cssOrderForm";
import { addOrder } from "redux/cart/cartOperations";
import { StyledInput } from "./OrderForm.styled";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const validationSchema = yup.object().shape({
  name: yup.string().required(),
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
  phone: yup
    .string()
    .min(10)
    .max(13, 'Phone must be at most 13 characters, in format "+380000000000"')
    .matches(/^[+][3][8][0]+[0-9]*$/, 'Phone must be in format "+380000000000"')
    .required(),
  address: yup.string().required(),
});

export default function LoginForm() {
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);
  const isLoading = useSelector(selectIsLoadingCart);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
    },
    validationSchema,
  });

  const onSubmit = (values) => {
    dispatch(addOrder({ ...values, order: cart }));
    toast.success(`We've got you order! Wait for our call!`);
  };

  
  return (
    <Box>
      <Formik
        initialValues={formik.initialValues}
        validationSchema={formik.validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <Box sx={css.formBox}>
            <Box sx={{ position: "relative" }}>
              <StyledInput
                type="name"
                name="name"
                placeholder={"Enter name"}
                disableunderline="true"
              />
              <ErrorMessage name="name">
                {(msg) => <Box sx={css.errorText}>*{msg}</Box>}
              </ErrorMessage>
            </Box>
            <Box sx={{ position: "relative" }}>
              <StyledInput
                type="email"
                name="email"
                placeholder={"Enter email"}
                disableunderline="true"
              />
              <ErrorMessage name="email">
                {(msg) => <Box sx={css.errorText}>*{msg}</Box>}
              </ErrorMessage>
            </Box>
            <Box sx={{ position: "relative" }}>
              <StyledInput
                type="phone"
                name="phone"
                placeholder={"Enter your phone"}
                disableunderline="true"
              />
              <ErrorMessage name="phone">
                {(msg) => <Box sx={css.ErrorText}>*{msg}</Box>}
              </ErrorMessage>
            </Box>
            <Box sx={{ position: "relative" }}>
              <StyledInput
                type="address"
                name="address"
                placeholder={"Enter your address"}
                disableunderline="true"
              />
              <ErrorMessage name="address">
                {(msg) => <Box sx={css.ErrorText}>*{msg}</Box>}
              </ErrorMessage>
            </Box>
            <Button variant="contained" type="submit">
              {!isLoading ? "order" : <LoaderInfinity h="30" w="55" />}
            </Button>
          </Box>
        </Form>
      </Formik>
        <ToastContainer
            position="bottom-left"
            autoClose={10000}
            hideProgressBar={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
    </Box>
  );
}
