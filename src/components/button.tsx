interface IButton {
	label: string;
	onClick?: () => void;
	className?: string;
}

//TODO: JSDoc

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
