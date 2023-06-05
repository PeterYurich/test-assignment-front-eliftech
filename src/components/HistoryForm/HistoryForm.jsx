import * as yup from "yup";
import { Box, Button } from "@mui/material";
import { Formik, Form, ErrorMessage, useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { css } from "../OrderForm/cssOrderForm";
import { StyledInput } from "../OrderForm/OrderForm.styled";
import { getOrdersHistory } from "redux/history/historyOperations";
import { selectIsLoadingHistory } from "redux/history/historySelectors";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const validationSchema = yup.object().shape({
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
  phone: yup.string().min(10).max(13).required(),
});

export default function HistoryForm() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoadingHistory);

  const formik = useFormik({
    initialValues: {
      email: "",
      phone: "",
    },
  });

  const onSubmit = (values) => {
    dispatch(getOrdersHistory(values));
  };

  return (
    <Box>
      <Formik
        initialValues={formik.initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <Box sx={css.formBox}>
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
                {(msg) => <Box sx={css.errorText}>*{msg}</Box>}
              </ErrorMessage>
            </Box>
            <Button
              variant="contained"
              type="submit"
              sx={{ maxWidth: 210 }}
              disabled={isLoading && true}
            >
              {!isLoading ? "watch my orders" : "loading..."}
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
