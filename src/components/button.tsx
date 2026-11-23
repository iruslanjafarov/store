interface IButton {
	label: string;
}

//TODO: Добавить событие и JSDoc

const Button = ({ label }: IButton) => {
	return (
		<button className='py-3 border border-white bg-black text-white cursor-pointer w-full'>
			{label}
		</button>
	);
};

export default Button;
