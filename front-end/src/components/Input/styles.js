import styled from 'styled-components'

export const Container = styled.div`

    display: flex;
    width: 100%;
    align-items: center;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    border-radius: 10px;
    margin-bottom: 8px;

    color: ${({ theme }) => theme.COLORS.GRAY_300};

    > svg {
            margin-left: 16px;
        }
        
    > input {
        width: 100%;
        height: 56px;
        padding: 20px 16px;
        border: none;
        background: transparent;
        color: ${({ theme }) => theme.COLORS.WHITE};

        &placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY_300};
        }
    }

    input:-webkit-autofill {
        -webkit-box-shadow: 0 0 0 30px ${({ theme }) => theme.COLORS.BACKGROUND_900} inset !important;
        -webkit-text-fill-color: ${({ theme }) => theme.COLORS.GRAY_300} !important;
}
`