import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.header`
width: 100%;
height: 106px;

border-bottom-width: 1px;
border-bottom-style: solid;
border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

display: flex;
justify-content: space-between;

padding-inline: 45px 40px;

> button {
    border: none;
    background: none;
}

`

export const Profile = styled(Link)`
    
    display: flex;
    align-items: center;
    gap: 10px;

    > img {
        width: 56px;
        height: 56px;
        border-radius: 50%;
    }

    > div {
        display: flex;
        flex-direction: column;

        span {
            font-size: 14px;
            color: ${({ theme }) => theme.COLORS.GRAY_100}
        }

        strong {
            font-size: 18px;
            color: ${({ theme }) => theme.COLORS.WHITE}
            
        }
    }
`

export const Logout = styled.button`
    border: none;
    background: none;

    > svg {
        color: ${({theme}) => theme.COLORS.GRAY_100};
        font-size: 24px;
    }
`