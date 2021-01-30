import React from 'react';
import styled from 'styled-components';
import { Colors } from '../Colors';

export const Button = ({ variant, color, icon, children }) => {    
    return (
            <BaseButton variant={variant} color={color}>
                <ContainerWrapper>
                    {icon ? 
                    <IconWrapper>{icon}</IconWrapper> 
                    : <></>}
                    <TextWrapper>{children}</TextWrapper>
                </ContainerWrapper>
            </BaseButton>
    )
}

const IconWrapper = styled.div`
    padding-right: 5px;
`
const TextWrapper = styled.div``
const ContainerWrapper = styled.div`
    display: flex;
    justify-content: center;    
`

const renderTextColor = (variant, color) => {
    if(variant === "contained"){
        return Colors["white"]
    } else {
        return Colors[color]
    }
}

const renderBorderColor = (variant, color) => {
    if(variant === "text" || variant === "contained"){
        return "none";
    } else if(variant === "outlined"){
        return `1px solid ${Colors[color]}`        
    } 
}

const renderBackgroundColor = (variant, color) => {
    if(variant === "contained"){
        return Colors[color]
    } else {
        return Colors["white"];
    }
}

const renderHoverColor = (color) => {
    if(color === "default"){
        return "#bbfcbd"
    } else if(color === "primary"){
        return "#fabbbf"
    } else if(color === "secondary"){
        return "#b9b7f7"
    } 
}

const BaseButton = styled.button`
    width: 180px;
    height: 60px;
    font-weight: bold;
    background-color: ${props => renderBackgroundColor(props.variant, props.color)};  
    color: ${props => renderTextColor(props.variant, props.color)};  
    border: ${props => renderBorderColor(props.variant, props.color)};   
    padding: 20px;
    margin: 5px;
    border-radius: 50px;
    cursor: ${props => props.color === "disabled" ? "not-allowed" : "pointer"};
    pointer-events: ${props => props.color === "disabled" ? "none" : "auto"};
    outline: none;
    &:hover {
        background: ${props => renderHoverColor(props.color)}
    }
`