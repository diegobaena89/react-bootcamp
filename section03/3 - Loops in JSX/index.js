	class App extends React.Component{
		render() {
			return (
				<div>
					<Friend 
					name="Elton"
					hobbies={['Piano', 'Singin', 'Dancing']}
					/>
					<Friend 
					name="Cher"
					hobbies={['Boxing', 'Drawing', 'Hicking']}
					/>
				</div>
			)
		}
	}
	ReactDOM.render(<App/>, document.getElementById('root'));