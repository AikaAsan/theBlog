import { classNames } from '@/shared/lib/classnames/classNames';
import './Loader.scss';

interface LoaderProps {
    className?: string;
}

export const Loader = ({ className }: LoaderProps) => {
    return (
        <div className={classNames('loadingio-spinner-ellipsis-l5qqijt9br')}>
            <div className={classNames('ldio-3m0w5j0l1z1')}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};
