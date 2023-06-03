import { styled } from '@mui/material/styles';
import { Field } from 'formik';

export const StyledInput = styled(Field)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  height: '40px',
  border: `1px solid ${theme.palette.primary.light}`,
  borderRadius: theme.shape.borderRadius,
  padding: '0 12px',
  marginBottom: '10px',
  fontSize: '18px',

  '&::placeholder': {
    fontWeight: '400',
    fontSize: '14px',
    color: theme.palette.text.label,
  },

}));