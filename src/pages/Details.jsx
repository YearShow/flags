import { useHistory, useParams } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import { Button } from './../components/Button';
import { Info } from './../components/Info';

export const Details = () => {
	const { name } = useParams();

	return (
		<div>
			<Button onClick={goBack}>
				<IoArrowBack /> Back
			</Button>
			{currentCountry && <Info push={push} {...currentCountry} />}
		</div>
	);
};