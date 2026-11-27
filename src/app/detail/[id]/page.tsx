'use client';

import { useParams } from 'next/navigation';

const Detail = () => {
	const params = useParams<{ id: string }>();

	return <h1>detail page, id: {params?.id}</h1>;
};

export default Detail;
