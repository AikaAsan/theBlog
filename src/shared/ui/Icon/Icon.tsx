import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classnames/classNames';
import cls from './Icon.module.scss';

interface IconProps {
    className?: string;
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const Icon: FC<IconProps> = memo((props: IconProps) => {
    const { className , Svg} = props;

    return <Svg className={classNames(cls.icon, {}, [className])} />;
});
