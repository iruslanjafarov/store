import Container from '@/components/container';
import Filter from '@/sections/main/filter';
import MainItem from '@/components/main/item';

//TODO: Добавить реальные данные, пока мок. JSDoc

const Main = () => {
	return (
		<main>
			<Container className='max-w-250! my-12 flex w-full gap-4'>
				<Filter />
				<div className='flex flex-wrap gap-x-7 gap-y-40'>
					{Array.from({ length: 25 }).map((_, index) => (
						<MainItem key={index} />
					))}
				</div>
			</Container>
		</main>
	);
};

export default Main;
