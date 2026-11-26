import Bag from '@/assets/icons/bag.svg';
import User from '@/assets/icons/user.svg';
import Check from '@/assets/icons/check.svg';

const icons = {
	bag: Bag,
	user: User,
	check: Check,
};

/**
 * Свойства компонента Icon.
 *
 * @property {'bag' | 'user'} name - Название иконки.
 * @property {string} [className] - Дополнительные CSS-классы.
 */

interface IconProps {
	name: keyof typeof icons;
	className?: string;
}

/**
 * Универсальный компонент для отображения SVG-иконок.
 *
 * @param {IconProps} props - Свойства компонента.
 * @returns {JSX.Element} Компонент иконки.
 */

const Icon = ({ name, className }: IconProps) => {
	const Icon = icons[name];

	return <Icon className={className} />;
};

export default Icon;
