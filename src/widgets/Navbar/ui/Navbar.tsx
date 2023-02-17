import { FC } from 'react';
import { classNames } from '@/shared/lib';
import classes from './Navbar.module.scss';

interface NavbarProps {
    className?:string;
}

export const Navbar:FC<NavbarProps> = ({ className }) => (
    <div className={classNames(classes.Navbar, {}, [className])} />
);
