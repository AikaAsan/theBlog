import { CSSProperties, useMemo } from 'react';
import { classNames, Modes } from 'shared/lib/classnames/classNames';
import cls from './Avatar.module.scss';

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt: string;
}

export const Avatar = ({ className, src, size, alt }: AvatarProps) => {
    const modes: Modes = {};

    const styles = useMemo<CSSProperties>(() => {
        return {
            width: size || 100,
            height: size || 100,
        };
    }, [size]);

    return (
        <img
            alt={alt}
            src={src}
            className={classNames(cls.Avatar, modes, [className])}
            style={styles}
        />
    );
};
