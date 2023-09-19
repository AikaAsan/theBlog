import { JSXElementConstructor, ReactElement, ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
    children?:
        | ReactNode
        | ReactElement<any, string | JSXElementConstructor<any>>;
    element?: HTMLElement;
}

export const Portal = (props: PortalProps) => {
    const { children, element = document.body } = props;
    return createPortal(children, element);
};
