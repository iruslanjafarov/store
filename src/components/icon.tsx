import Bag from '@/assets/icons/bag.svg';
import User from '@/assets/icons/user.svg';

const icons = {
	bag: Bag,
	user: User,
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
	const SvgIcon = icons[name];

	return <SvgIcon className={className} />;
};

export default Icon;
