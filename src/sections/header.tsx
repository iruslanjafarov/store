'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';

import Container from '@/components/container';
import Icon from '@/components/icon';

/**
 * Шапка.
 *
 * Содержит название и навигационные иконки
 *
 * @returns {JSX.Element} Компонент шапки сайта.
 */

const Header = () => {
	const router = useRouter();

	const handleUser = () => {
		router.push('/login');
	};

	return (
		<header className='sticky top-4 z-50'>
			<Container className='max-w-250!'>
				<div className='flex justify-between items-center px-5 py-3 rounded-full bg-white/30 border border-white/20 backdrop-blur-xs shadow-[0_0_25px_rgba(0,0,0,0.12)]'>
					<Link href='/'>
						<h1 className='text-xl font-bold tracking-tighter'>Jafarov</h1>
					</Link>
					<div className='flex items-center gap-2'>
						<Icon name='bag' className='size-6 cursor-not-allowed' />
						<Icon
							name='user'
							onClick={handleUser}
							className='size-6 cursor-pointer'
						/>
					</div>
				</div>
			</Container>
		</header>
	);
};

export default Header;
