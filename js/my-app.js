// Initialize your app
var myApp = new Framework7({
	root:'#app',
	theme: 'md', //ios, md, auto
    modalTitle: 'Framework7', 	//title for modals
	panel: {
    	swipe: 'left',
  	},
	cache:false,
	pushState:false,
	swipeBackPage:true,
	material: true,
	routes: [
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
  		},
		{
		path: '/productos/',
    	url: 'productos.html',
    	name: 'productos',
  		},
		{
		path: '/producto/',
    	url: 'producto.html',
    	name: 'producto',
  		},{
		path: '/producto2/',
    	url: 'producto2.html',
    	name: 'producto2',
  		}
	]
});

// Export selectors engine
var $$ = Dom7;





 

