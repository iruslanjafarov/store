import { ComponentProps } from 'react';

/**
 * Универсальный компонент кнопки.
 *
 * @param {ComponentProps<'button'>} props - Свойства кнопки
 * @returns {JSX.Element} Компонент кнопки
 */

const Button = ({
	children,
	onClick,
	className,
	...props
}: ComponentProps<'button'>) => {
	return (
		<button
			onClick={onClick}
			className={`py-3 border border-white bg-black text-white cursor-pointer w-full ${className}`}
			{...props}
		>
			{children}
		</button>
	);
};

export default Button;
