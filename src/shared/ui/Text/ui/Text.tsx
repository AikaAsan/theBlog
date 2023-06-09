import { memo } from 'react';
import { classNames } from 'shared/lib/classnames/classNames';
import cls from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    INVERTED = 'inverted',
    ERROR = 'error',
}

export enum TextAlign {
    RIGHT = 'right',
    LEFT = 'left',
    CENTER = 'center',
}

export enum TextSize {
    S = 'size_s',
    M = 'size_m',
    L = 'size_l',
}
interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
    align?: TextAlign;
    size?: TextSize;
}

type HeadingTagType = 'h1' | 'h2' | 'h3';

const mapSizeToHeadingTag: Record<TextSize, HeadingTagType> = {
    [TextSize.S]: 'h3',
    [TextSize.M]: 'h2',
    [TextSize.L]: 'h1',
};

export const Text = memo((props: TextProps) => {
    const {
        className,
        title,
        text,
        theme = TextTheme.PRIMARY,
        align = TextAlign.LEFT,
        size = TextSize.M,
    } = props;

    const HeadingTag = mapSizeToHeadingTag[size];

    const modes = { [cls[theme]]: true, [cls[align]]: true, [cls[size]]: true };

    return (
        <div className={classNames(cls.Text, modes, [className])}>
            {title && <HeadingTag className={cls.title}>{title}</HeadingTag>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
});
