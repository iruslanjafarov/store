import { useState } from 'react';

import { Checkbox as CheckboxComponent } from '@headlessui/react';

interface ICheckbox {
	label: string;
}

//TODO: JSDoc

const Checkbox = ({ label }: ICheckbox) => {
	const [active, setActive] = useState(false);

	return (
		<div
			className='flex cursor-pointer items-center gap-2'
			onClick={() => setActive((prev) => !prev)}
		>
			<CheckboxComponent
				checked={active}
				onChange={setActive}
				onClick={(e) => e.stopPropagation()}
				className='group flex size-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-white transition-all duration-200 outline-none data-checked:border-black data-checked:bg-black'
			/>
			<span className='text-sm text-gray-500 transition-colors'>{label}</span>
		</div>
	);
};

export default Checkbox;
