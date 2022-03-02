import { List } from '../components/List';
import { Card } from '../components/Card';
import { Controls } from '../components/Controls';


export const HomePage = ({ setCountries, countries }) => {

	return (
		<>
			<Controls />
			<List>
				{countries.map(c => {

					const countryInfo = {
						img: c.flags.png,
						name: c.name,
						info: [
							{
								title: 'Population',
								description: c.population.toLocaleString()
							},
							{
								title: 'Region',
								description: c.region
							},
							{
								title: 'Capital',
								description: c.capital
							}
						]
					};
					return (
						<Card key={c.name} onClick={() => push(`/country/${c.name}`)} {...countryInfo} />
					)
				})}
			</List>
		</>
	)
}