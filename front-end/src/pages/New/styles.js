import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;

     .main-scroll {
        overflow-y: auto;
        max-height: 82vh;
    }

    @media(max-height: 768px) {
        .main-scroll {
            max-height: 74vh;
        }
    }

`

export const Form = styled.form`
    max-width: 550px;
    margin: 38px auto 0;

    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 36px;

        a {
            color: ${({ theme }) => theme.COLORS.GRAY_300};
        }
    }

    section {
        margin-top: 26px;
        margin-bottom: ${({ title }) => title = "Marcadores" ? "26px" : 0};
    }

    .tags {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;

        > div {
            min-width: 270px;
        }
    }
`