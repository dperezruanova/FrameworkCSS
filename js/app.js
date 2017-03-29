//document.getElementById('app').innerHTML = '<h2 id="title">Hola Quico</h2>';


// ReactDOM.render(
  // <h1>Hello, world!</h1>,
  // document.getElementById('app')
// );


// Error
// const el = document.createElement('h1');
// el.setAttibute('id','title');
// el.textContent = 'Hola mundo';
// document.getElementById('app').appendChild(el);


// const el = React.createElement('h3',{id:'title'},'Hola mundo');
// ReactDOM.render(el,document.getElementById('app'));


// const user = 'Quico';
// const el = <span>Hola <b>{user}</b></span>;
// ReactDOM.render(el,document.getElementById('app'));


// function Saludar(props){
	// return <h1>{props.name}</h1>
// }
// 
// ReactDOM.render(
	// <div>
		// <Saludar name='Quico' />
		// <Saludar name='Alexys' />
	// </div>,
	// document.getElementById('app')
	// );


// const User = props => {
	// return (
		// <figure>
			// <img src={props.img} alt={props.name} />
			// <figcaption>{props.name}</figcaption>
		// </figure>
	// )
// };

// ReactDOM.render(
	// <User img="http://fakeimg.pl/100x120/" name="Daniel" />,
	// document.getElementById('app')
// );



const UserImg = props => <img src={props.user.img} alt={props.user.name} />;
const UserName = props => <figcaption>{props.user.name}</figcaption>;

const User = props => {
	return (
		<figure>
			<UserImg user={props.user} />
			<UserName user={props.user} />
		</figure>
	)
};

const user = {
	name: 'Quico',
	img: 'http://fakeimg.pl/100x120/'
};

ReactDOM.render(<User user="{user}" />,document.getElementById('app'));
