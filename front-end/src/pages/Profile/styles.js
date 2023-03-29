import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    
    header {
        width: 100%;
        height: 130px;

        background: ${({ theme }) => theme.COLORS.BACKGROUND_900};

        display: flex;
        align-items: center;
        padding: 0 124px;

        svg {
            color: ${({ theme }) => theme.COLORS.GRAY_100};
            font-size: 24px;
        }

        button {
            background: none;
            border: none;
        }
    }
`

export const Form = styled.form`
    max-width: 340px;
    margin: 30px auto 0;

    > div:nth-child(4) {
        margin-top: 24px;
    }

    button {
        margin-top: 8px;
    }

    @media(max-height: 768px) {
        > div:nth-child(4) {
        margin-top: 12px;
    } 
    }
`

export const Avatar = styled.div`
    position: relative;
    margin: -120px auto 32px;
    width: 186px;
    height: 186px;

    @media(max-height: 700px) {
        margin: -140px auto 8px;
    }

  >  img {
        width: 166px;
        height: 166px;
        border-radius: 50%;
    }

  >  label {
        width: 46px;
        height: 46px;
        border-radius: 50%;
        position: absolute;
        background-color:  ${({ theme }) => theme.COLORS.ORANGE};

        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        bottom: 10px;
        right: 10px;

        input {
            display: none;
        }

        svg {
            width: 20px;
            height: 20px;
            color: ${({ theme }) => theme.COLORS.BACKGROUND_800}
        }
    }
`