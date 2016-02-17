Router.route('/', function () {
  this.render('home');

},
{
  	name:'home'
 });

Router.route('/delete/:_id', function(){
	var params = this.params;
	//console.log(params._id);
	Meteor.call('removeEvent', params._id, function (error, result) {
			if(result){
				console.log(result);
			}
		});
	//this.render('home');
return Router.go('home');
});


Router.route('/affiche/:_id', function(){
	var item = Evenements.findOne({_id: this.params._id});
	this.render('more', {data: item});
	//return Router.go('home');
});

Router.route('/edit/:_id', function(){
	var item = Evenements.findOne({_id: this.params._id});
	this.render('edit', {data: item});
	//return Router.go('home');
});



