/**
 * Компонент Spinner, отображающий индикатор загрузки.
 * Использует CSS-анимацию для непрерывного вращения, показывая состояние загрузки.
 *
 * @returns Компонент спиннера для отображения во время загрузки.
 */

const Spinner = () => {
	return (
		<div className='w-16 h-16 border-4 border-t-white border-r-white rounded-full animate-spin' />
	);
};

export default Spinner;
