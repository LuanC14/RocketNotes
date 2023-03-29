import styled from 'styled-components'
import BackgroundImg from '../../assets/background.png'

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;
`

export const Form = styled.form`
padding: 0 136px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;

h1 {
    font-size: 48px;
    color: ${({ theme }) => theme.COLORS.ORANGE}
}

h2 {
    font-size: 24px;
    margin: 35px 0 30px;
}

p {
        font-size: 14px;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
}



 > a {
        margin-top: 25px;
        color: ${({ theme }) => theme.COLORS.ORANGE};
    }
`

export const Background = styled.div`
    flex: 1;
    background: url(${BackgroundImg}) no-repeat center;
    background-size: cover;
    opacity: calc(0.5);
`