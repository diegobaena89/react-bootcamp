	class App extends React.Component{
		render() {
			return (
				<div>
					<Hello 
						to="Ringo" 
						from="Paul" 
						bangs={4}
						img="https://www.zero3games.com.br/loja/assets/0082_l.jpg"
					/>
				</div>
			)
		}
	}
	ReactDOM.render(<App/>, document.getElementById('root'));