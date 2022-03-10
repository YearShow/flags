import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { selectRegion, setRegion } from './controls-slice';
import { CustomSelect } from './CustomSelect';
import { Search } from './Search';
import { useRegion } from './use-region';

const optionsMap = {
	'Africa': { value: 'Africa', label: 'Africa' },
	'America': { value: 'America', label: 'America' },
	'Asia': { value: 'Asia', label: 'Asia' },
	'Europe': { value: 'Europe', label: 'Europe' },
	'Oceania': { value: 'Oceania', label: 'Oceania' }
};

const options = Object.values(optionsMap);

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media (min-width: 767px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
`

export const Controls = () => {
	const [region, handleSelect] = useRegion();

	return (
		<Wrapper>
			<Search />
			<CustomSelect
				options={options}
				placeholder='Filter by region'
				isClearable
				isSearchable={false}
				value={optionsMap[region]}
				onChange={handleSelect}
			/>
		</Wrapper>
	)
}