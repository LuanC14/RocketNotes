import styled from 'styled-components'

export const Container = styled.textarea`
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
    color: ${({theme}) => theme.COLORS.WHITE};

    width: 100%;
    height: 150px;
    border-radius: 10px;
    padding: 16px;
    border: none;
    resize: none;


`