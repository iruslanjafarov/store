import type { Metadata } from 'next';
import { Roboto_Flex } from 'next/font/google';

import Header from '@/sections/header';

import '@/styles/style.css';

/**
 * Метаданные приложения для поисковых систем и браузера.
 */

export const metadata: Metadata = {
	title: {
		default: 'Jafarov — Интернет-магазин',
		template: '%s | Jafarov',
	},
	description:
		'Jafarov — современный интернет-магазин с тщательно подобранным ассортиментом товаров. Удобный поиск, приятные цены и комфортные покупки онлайн.',
	keywords: [
		'Jafarov',
		'интернет-магазин',
		'онлайн-покупки',
		'каталог товаров',
	],
};

const robotoMono = Roboto_Flex({ subsets: ['latin'] });

/**
 * Корневой layout приложения.
 *
 * Определяет общую структуру страниц, подключает глобальные стили,
 * шрифты и компоненты, используемые на всех страницах.
 *
 * @param {LayoutProps<'/'>} props - Свойства корневого layout.
 * @returns {JSX.Element} Корневой layout приложения.
 */

const RootLayout = ({ children }: LayoutProps<'/'>) => {
	return (
		<html
			lang='en'
			className={`${robotoMono?.className} h-full antialiased`}
		>
			<body className='min-h-full flex flex-col'>
				<Header />
				{children}
			</body>
		</html>
	);
};

export default RootLayout;
