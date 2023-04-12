import { CSSProperties } from 'react';
import { classNames } from '@/shared/lib';
import classes from './Skeleton.module.scss';

interface SkeletonProps {
    className?:string;
    width:string | number;
    height:string | number;
    borderRadius?:string | number;
}

export const Skeleton = ({
    className, width, height, borderRadius,
}:SkeletonProps) => {
    const styles:CSSProperties = {
        width,
        height,
        borderRadius,
    };

    return (
        <div
            data-testid="Skeleton"
            className={classNames(classes.Skeleton, {}, [className])}
            style={styles}
        />
    );
};
