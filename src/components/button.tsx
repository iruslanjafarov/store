interface IButton {
	label: string;
	className?: string;
}

//TODO: Добавить событие и JSDoc

const Button = ({ label, className }: IButton) => {
	return (
		<button
			className={`py-3 border border-white bg-black text-white cursor-pointer w-full ${className}`}
		>
			{label}
		</button>
	);
};

export default Button;
