import { ChangeEvent, memo, useMemo } from 'react';
import { classNames, Modes } from 'shared/lib/classnames/classNames';
import cls from './Select.module.scss';

export interface SelectOption {
    value: string;
    content: string;
}
interface SelectProps {
    className?: string;
    label?: string;
    options?: SelectOption[];
    value?: string;
    onChange?: (value: string) => void;
}

export const Select = memo((props: SelectProps) => {
    const { className, label, options, value, onChange } = props;

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        if (onChange) {
            onChange(e.target.value);
        }
    };

    const optionsList = useMemo(
        () =>
            options?.map((opt) => (
                <option
                    className={cls.option}
                    value={opt.value}
                    key={opt.value}
                >
                    {opt.content}
                </option>
            )),
        [options]
    );

    const modes: Modes = {};

    return (
        <div className={classNames(cls.Wrapper, modes, [className])}>
            {label && <span className={cls.label}>{`${label}>`}</span>}
            <select
                className={cls.select}
                onChange={onChangeHandler}
                value={value}
            >
                {optionsList}
            </select>
        </div>
    );
});
