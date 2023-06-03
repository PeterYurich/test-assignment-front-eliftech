import { Box, Typography } from '@mui/material'
import React from 'react'

export default function NotFoundPage() {
  return (
    <Box sx={{
        width: "100vw",
        display: 'flex',
        justifyContent: 'center'
    }}>
        <Typography>This page doesn't exists.</Typography>
    </Box>
  )
}
