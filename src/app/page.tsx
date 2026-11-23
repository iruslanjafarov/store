import Container from '@/components/container';
import MainItem from '@/components/main/item';

//TODO: Добавить реальные данные, пока мок. JSDoc

const Main = () => {
	return (
		<main>
			<Container className='my-12 max-w-250!'>
				<div className='flex flex-wrap justify-between gap-x-6 gap-y-40'>
					{Array.from({ length: 24 }).map((_, index) => (
						<MainItem key={index} />
					))}
				</div>
			</Container>
		</main>
	);
};

export default Main;
