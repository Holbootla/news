import { FC, memo, SVGProps } from 'react';
import { classNames } from '@/shared/lib';
import classes from './Icon.module.scss';

export type IconSize = 's' | 'm' | 'l';

interface IconProps {
    className?:string;
    Svg:FC<SVGProps<SVGSVGElement>>;
    size?:IconSize;
}

export const Icon = memo(({ className, Svg, size = 'm' }:IconProps) => {
    let width = 32;
    let height = 32;

    switch (size) {
    case 'l':
        width = 64;
        height = 64;
        break;
    case 's':
        width = 16;
        height = 16;
        break;
    default:
        break;
    }

    return (
        <Svg
            data-testid="Icon"
            className={classNames(classes.Icon, {}, [className])}
            width={width}
            height={height}
        />
    );
});
