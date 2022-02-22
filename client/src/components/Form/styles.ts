import styled from 'styled-components'
import theme from '../../theme'

export const StyledForm = styled.form`
    background: ${theme.colors.white};
    border: ${theme.space.px} solid ${theme.colors.grey4};
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    min-width: 30%;
    padding: ${theme.space['10']} ${theme.space['14']};

    input {
        border: ${theme.space['0.5']} solid ${theme.colors.inputBorder};
        border-radius: ${theme.space['2']};
        box-sizing: border-box;
        padding: ${theme.space['1']};
        width: 100%;
        margin-bottom: ${theme.space['2']};
    }

    label {
        color: ${theme.colors.blue600};
        display: block;
        font-family: sans-serif;
        font-size: ${theme.fontSizes.sm};
        font-weight: ${theme.fontWeights.medium};
        margin-bottom: ${theme.space['1']};
    }
`
