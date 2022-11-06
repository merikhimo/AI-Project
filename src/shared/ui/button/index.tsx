import { forwardRef } from 'react';
import cn from 'classnames';

import { ButtonComponent } from '$shared/ui/button/types';

import classes from './styles.module.css';

export const Button: ButtonComponent = forwardRef(({ children, className, ...proxyProps }, ref) => (
    <button type="button" {...proxyProps} ref={ref} className={cn(className, classes.button)}>
        {children}
    </button>
));
