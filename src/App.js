import React from 'react'
import jumboData from './fixtures/jumbo'
import Jumbotron from './components/jumbotron'

export default function App() {
	return (
		<Jumbotron.Container>
			{jumboData.map(item => {
				return (
					<Jumbotron key={item.id} direction={item.direction}>
						<p>{item.title}</p>
            <p>{item.subTitle}</p>
						<p>{item.image}</p>
						<p>{item.alt}</p>
					</Jumbotron>
				)
			})}
		</Jumbotron.Container>
	)
}
