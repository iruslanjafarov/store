import { Checkbox as CheckboxComponent, Field, Label } from '@headlessui/react';

import Icon from '@/components/icon';

/**
 * Свойства компонента чекбокса.
 *
 * @property {boolean} [checked] - Состояние чекбокса
 * @property {(state: boolean) => void} [onChange] - Обработчик изменения состояния
 * @property {string} label - Текст подписи чекбокса
 */

interface ICheckbox {
	checked?: boolean;
	onChange?: (state: boolean) => void;
	label: string;
}

/**
 * Компонент чекбокса с возможностью управления состоянием и отображением подписи.
 *
 * @param {ICheckbox} props - Свойства компонента
 * @returns {JSX.Element} Чекбокс с подписью
 */

const Checkbox = ({ checked, onChange, label }: ICheckbox) => {
	return (
		<Field className='flex items-center gap-2 cursor-pointer'>
			<CheckboxComponent
				checked={checked}
				onChange={onChange}
				onClick={(e) => e.stopPropagation()}
				className='group flex size-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-white transition-all duration-200 outline-none cursor-pointer data-checked:border-black data-checked:bg-black'
			>
				<Icon
					name='check'
					className='size-4 stroke-white opacity-0 transition-opacity group-data-checked:opacity-100'
				/>
			</CheckboxComponent>

			<Label className='text-sm text-gray-500 cursor-pointer transition-colors'>
				{label}
			</Label>
		</Field>
	);
};

export default Checkbox;
