import styled from 'styled-components'

export const Container = styled.button`
    width: 100%;
    height: 112px;
    border-radius: 10px;
    background: ${({theme}) => theme.COLORS.BACKGROUND_700};

    padding: 16px 22px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    h2 {
        color: ${({theme}) => theme.COLORS.WHITE};
        margin-bottom: 24px;
    }
`