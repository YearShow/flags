import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Container } from './Container';
import { clearControls } from '../store/controls/controls-actions';
import { ThemeSwitcher } from '../features/theme/ThemeSwitcher';

const HeaderEl = styled.header`
    box-shadow: var(--shadow);
    background-color: (--colors-ui-base);
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
`;

const Title = styled(Link).attrs({
	to: '/',
})`
    color: var(--colors-text);
    font-size: var(--fs-md);
    text-decoration: none;
    font-weight: var(--fw-bold);
`;

export const Header = () => {
	const dispatch = useDispatch();

	const cleanUp = () => dispatch(clearControls())

	return (
		<HeaderEl>
			<Container>
				<Wrapper>
					<Title onClick={cleanUp}>FLAGS.</Title>
					<ThemeSwitcher />
				</Wrapper>
			</Container>
		</HeaderEl>
	);
};