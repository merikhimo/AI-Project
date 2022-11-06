import {
    ButtonHTMLAttributes,
    DetailedHTMLProps,
    ForwardRefExoticComponent,
    ReactNode,
    RefAttributes,
} from 'react';

export type ButtonElementProps = DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
>;

export type ButtonProps = ButtonElementProps &
    RefAttributes<HTMLButtonElement> & {
        prefix?: ReactNode;
        postfix?: ReactNode;
    };

export type ButtonComponent = ForwardRefExoticComponent<ButtonProps>;
