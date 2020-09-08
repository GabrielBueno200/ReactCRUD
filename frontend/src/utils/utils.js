import React from 'react';

export function getChildrenOfType(props, type){
    return React.Children.map(props.children, child => {
        if (child.type === type)
            
            return React.cloneElement(child, { 
                ...props, ...child.props
            })
        
        return
    })
}