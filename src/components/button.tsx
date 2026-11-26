/**
 * Свойства универсальной кнопки.
 *
 * @property {string} label - Текст кнопки
 * @property {() => void} [onClick] - Обработчик нажатия
 * @property {string} [className] - Дополнительные CSS-классы
 */

interface IButton {
	label: string;
	onClick?: () => void;
	className?: string;
}

/**
 * Компонент универсальной кнопки.
 *
 * @param {IButton} props - Свойства компонента
 * @returns {JSX.Element} Компонент кнопки
 */

const Button = ({ label, onClick, className }: IButton) => {
	return (
		<button
			onClick={onClick}
			className={`py-3 border border-white bg-black text-white cursor-pointer w-full ${className}`}
		>
			{label}
		</button>
	);
};

export default Button;
