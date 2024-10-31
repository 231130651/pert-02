import { Container, Typography } from '@mui/material'
import React from 'react'

export function BannerCustom() {
  return (
    <Container
    disableGutters
    maxWidth="sm"
    component="main"
    sx={{pt: 8, pb:6}}
    >
        <Typography
            component="h1"
            variant='h2'
            align='center'
            color='text.primary'
            gutterBottom
        >
            Pricing
        </Typography>
        <Typography
            component="h1"
            variant='h2'
            align='center'
            color='text.primary'
            gutterBottom
        >
            Quickly build an effective pricing table for your potential customers
            with this layout. It&apos;s built with default MUI components with
            little customization.
        </Typography>
    </Container>
  )
}

export default BannerCustom
