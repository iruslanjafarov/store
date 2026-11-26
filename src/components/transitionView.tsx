import type { ReactNode } from 'react';

import { motion } from 'motion/react';

/**
 * Свойства компонента анимированного отображения элементов.
 *
 * @property {ReactNode} children - Дочерние элементы компонента
 * @property {number} index - Индекс элемента для расчёта задержки анимации
 * @property {string} [className] - Дополнительные CSS-классы
 * @property {boolean} [animate] - Определяет, должна ли применяться начальная анимация
 * @property {() => void} [onAnimationComplete] - Функция, вызываемая после завершения анимации
 */

interface ITransitionView {
	children: ReactNode;
	index: number;
	className?: string;
	animate?: boolean;
	onAnimationComplete?: () => void;
}

/**
 * Компонент плавного появления дочерних элементов с эффектом затухания и смещения.
 * Задержка анимации зависит от индекса элемента.
 *
 * @param {ITransitionView} props - Свойства компонента
 * @returns {JSX.Element} Компонент анимированной обёртки
 */

const TransitionView = ({
	children,
	index,
	className,
	animate,
	onAnimationComplete,
}: ITransitionView) => {
	return (
		<motion.div
			custom={index}
			initial={animate ? 'hidden' : false}
			animate='visible'
			exit='hidden'
			onAnimationComplete={onAnimationComplete}
			className={className}
			variants={{
				hidden: { opacity: 0, y: 10 },
				visible: {
					opacity: 1,
					y: 0,
					transition: { duration: 0.3, ease: 'easeOut', delay: index * 0.1 },
				},
			}}
		>
			{children}
		</motion.div>
	);
};

export default TransitionView;
