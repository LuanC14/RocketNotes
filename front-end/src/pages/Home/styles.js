import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
display: flex;
height: 100vh;
`

export const Menu = styled.div`
min-width: 250px;
max-width: 250px;
background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
min-height: 100vh;

display: flex;
flex-direction: column;

ul {
   margin-top: 64px;
   text-align: center;
   color: ${({ theme }) => theme.COLORS.GRAY_100} ;
}

li + li {
   margin-top: 24px;
}
`

export const CreateNote = styled(Link)`
   height: 80px;
   background: ${({ theme }) => theme.COLORS.ORANGE};
   color: ${({theme}) => theme.COLORS.BACKGROUND_900};
   font-size: 20px;
   max-width: 250px;
   min-width: 250px;
   position: fixed;
   bottom: 0;
   display: flex;
   justify-content: center;
   align-items: center;

   svg {
      margin-right: 8px;
      font-size: 24px;
   }
`

export const Logo = styled.div`
border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
height: 106px;
font-size: 14px;
font-weight: 700;
text-align: center;
justify-content: center;
align-items: center;
display: flex;
color: ${({ theme }) => theme.COLORS.ORANGE};
`

export const Content = styled.div`
width: 100%;

main {
   padding: 64px;
   display: flex;
   flex-direction: column;
   gap: 64px ;
}

@media(max-height: 768px) {
   main {
      padding-top: 36px;
      padding-bottom: 0px;
      gap: 28px;
   }
}
`

export const NoteList = styled.div`
overflow-y: auto;
max-height: 50vh;

button + button {
   margin-top: 38px;
}

@media(max-height: 768px) {
   max-height: 36vh;
}
`

