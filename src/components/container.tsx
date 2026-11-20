import { ReactNode } from 'react';

/**
 * Свойства компонента Container.
 *
 * @property {string} [className] - Дополнительные CSS-классы.
 * @property {ReactNode} children - Дочерние элементы контейнера.
 */

interface IContainer {
	className?: string;
	children: ReactNode;
}

/**
 * Универсальный контейнер для ограничения ширины содержимого
 * и его центрирования по горизонтали.
 *
 * @param {ContainerProps} props - Свойства компонента.
 * @returns {JSX.Element} Компонент контейнера.
 */

const Container = ({ className, children }: IContainer) => {
	return (
		<div className={`${className} max-w-450 w-full mx-auto`}>{children}</div>
	);
};

export default Container;
