"use strict";

// with babel
var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "My First Reactssss"), /*#__PURE__*/React.createElement("p", null, "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, iusto. Dolore, praesentium illum esse cum quae atque asperiores dolorem ratione eligendi earum quas a in cupiditate rem nihil adipisci doloribus!")); // without using babel

var templateWithoutBabel = React.createElement('h1', null, 'without babel');
ReactDOM.render(template, document.getElementById('root'));
