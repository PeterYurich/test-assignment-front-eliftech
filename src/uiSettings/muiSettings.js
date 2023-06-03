export const palette = {
    type: 'light',
    primary: {
        main: '#204000',
        light: '#499300'
    },
    secondary: {
        main: '#FFFFFF',
        contrastText: '#000000',
    },
    background: {
        default: '#f2fbff',
        paper: '#f2fbff',
    },
    warning: {
        main: '#ff1800',
    },
    info: {
        main: '#3091EB',
    },
    text: {
        primary: '#000',
        secondary: '#535353',
        contrast: '#FFFFFF',
        hint: 'rgba(0,0,0,0.39)',
        label: 'rgba(17, 17, 17, 0.6)',
    },
};

export const ThemeOptions = {
    palette,
    typography: {
        fontFamily: 'Nunito',
        fontSize: 16,
        body1: {
            fontWeight: 300,
        },
        subtitle1: {
            fontWeight: 600,
            fontSize: 16,
            lineHeight: 1.35,
            marginBottom: 15,
        },

        h2: {

        },
        h5: {
            fontSize: 20,
            fontWeight: 700,
            lineHeight: 1.35,
            marginBottom: 15
        },
        button: {
            fontSize: 20,
            lineHeight: 1.37,
            borderRadius: 20,
            textTransform: 'capitalize',
            margin: 4,
            hover: {
                backgroundColor: palette.primary.light,
                color: palette.secondary.light,
            },
        },
    },
    shape: {
        borderRadius: 14,
    },

    components: {
        MuiButton: {
            variants: [
                {
                    props: { variant: 'outlined' },
                    style: {
                        border: `2px solid ${palette.primary.main}`,
                        backgroundColor: palette.background.paper,
                        color: palette.text.primary,
                        '&:hover': {
                            backgroundColor: palette.primary.light,
                            border: `2px solid ${palette.primary.light}`,
                            color: palette.text.contrast,
                        },
                    },
                },
                {
                    props: { variant: 'contained' },
                    style: {
                        backgroundColor: palette.primary.light,
                        color: palette.text.contrast,
                        '&:hover': {
                            backgroundColor: palette.secondary.main,
                            color: palette.primary.main,
                        },
                    },
                },
            ],
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 319.98,
            md: 767.98,
            lg: 1279.98,
            xl: 1535.98,
            modal: 608,
        },
    },
};