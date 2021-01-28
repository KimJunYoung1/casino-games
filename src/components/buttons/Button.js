import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { ButtonIcon } from '../../assets/ButtonIcon';

export const Button = ({ variant, color, Icon, children }) => {
    
    const theme = {
        default: '#00990f',
        first: '#c92200',
        second: '#0600a8',
        disabled: '#cfd1cf',
        cf: 'white'
    }

    return (
        <ThemeProvider theme={theme}>
            <BaseButton variant={variant} color={color}>
                <ContainerWrapper>
                    {Icon ? 
                    <IconWrapper><ButtonIcon /></IconWrapper> 
                    : <></>}
                    <TextWrapper>{children}</TextWrapper>
                </ContainerWrapper>
            </BaseButton>
        </ThemeProvider>
    )
}
// variant = contained/outlined/text , color = default, primary, secondary, disabled , children = children

const IconWrapper = styled.div`
    padding-right: 5px;
`
const TextWrapper = styled.div`
    
`
const ContainerWrapper = styled.div`
    display: flex;
    justify-content: center;    
`

const renderTextColor = (variant, color, changeColor) =>{
    if(variant === "contained"){
        return changeColor.cf
    } else if(color === "default"){
        return changeColor.default
    } else if(color === "primary"){
        return changeColor.first
    } else if(color === "secondary"){
        return changeColor.second
    } else if(color === "disabled"){
        return changeColor.disabled
    }
}

const renderBorderColor = (variant, color, changeColor) => {
    if(variant === "text" || variant === "contained"){
        return "none";
    } 
    else if(variant === "outlined"){
        if(color === "default"){
            return `1px solid ${changeColor.default}`
        } else if(color === "primary"){
            return `1px solid ${changeColor.first}`
        } else if(color === "secondary"){
            return `1px solid ${changeColor.second}`
        } else if(color === "disabled"){
            return `1px solid ${changeColor.disabled}`
        }
    } 
}

const renderBackgroundColor = (variant, color, changeColor) => {
    if(color === "default" && variant === "contained"){
        return changeColor.default
    } else if(color === "primary" && variant === "contained"){
        return changeColor.first
    } else if(color === "secondary" && variant === "contained"){
        return changeColor.second
    } else if(color === "disabled" && variant === "contained"){
        return changeColor.disabled
    } else {
        return changeColor.cf
    }
}

const renderHoverColor = (color, changeColor) => {
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
    background-color: ${props => renderBackgroundColor(props.variant, props.color, props.theme)};  
    color: ${props => renderTextColor(props.variant, props.color, props.theme)};  
    border: ${props => renderBorderColor(props.variant, props.color, props.theme)};   
    padding: 20px;
    margin: 5px;
    border-radius: 50px;
    cursor: ${props => props.color === "disabled" ? "not-allowed" : "pointer"};
    pointer-events: ${props => props.color === "disabled" ? "none" : "auto"};
    outline: none;
    &:hover {
        background: ${props => renderHoverColor(props.color, props.theme)}
    }
`