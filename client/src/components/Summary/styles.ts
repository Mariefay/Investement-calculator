import styled from 'styled-components'
import theme from '../../theme'

export const StyledSummary = styled.div`
    width: 60%;
    margin-top: ${theme.space['5']};
    float: right;

    h2 {
        margin-bottom: ${theme.space['3']};
        font-weight: ${theme.fontWeights.medium};
        color: ${theme.colors.blue600};
    }
`
