import { FC } from 'react';
import { Link } from 'atomic-router-react';

import { Button } from '../button';

import classes from './styles.module.css';

// TODO: Поправить ссылки
export const Header: FC = () => (
    <header className={classes.header}>
        <h1 className={classes.logo}>Granger</h1>
        <nav className={classes.nav}>
            <Link to="/" className={classes.navLink}>
                О нас
            </Link>
            <Link to="/" className={classes.navLink}>
                Новости
            </Link>
        </nav>

        <Button>Войти</Button>
    </header>
);
