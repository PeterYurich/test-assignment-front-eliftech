import { InfinitySpin, BallTriangle } from 'react-loader-spinner';
import { useTheme } from '@emotion/react';

export const LoaderInfinity = () => {
    const { palette } = useTheme()

    return (
            <InfinitySpin 
                height="60"
                width="120"
                color={palette.primary.main}
                visible={true}
            />
    );
};

export const LoaderBallTriangle = () => {
    const { palette } = useTheme()

    return (
            <BallTriangle 
                height="60"
                width="120"
                color={palette.primary.main}
                visible={true}
            />
    );
};