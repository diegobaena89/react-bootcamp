	class App extends React.Component{
		render() {
			return (
				<div>
					<NumPicker />
					<JSXDemo />
				</div>
			)
		}
	}
	ReactDOM.render(<App/>, document.getElementById('root'));