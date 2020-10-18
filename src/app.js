// with babel
const template = (<div><h1>My First Reactssss</h1>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, iusto. Dolore, praesentium illum esse cum quae atque asperiores dolorem ratione eligendi earum quas a in cupiditate rem nihil adipisci doloribus!</p></div>);
// without using babel
const templateWithoutBabel = React.createElement('h1', null, 'without babel')

ReactDOM.render(template, document.getElementById('root'))