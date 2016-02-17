Meteor.subscribe('evenements');


Template.evenements.helpers({
	evenements: function () {
		return Evenements.find({});
	}
});

Template.evenements.events({
	'click #more': function () {
		event.preventDefault();
		Router.go('/affiche/'+this._id);
	}
});


Template.form.events({
	'click #addEvent': function (event) {
		event.preventDefault();
		var titre = $('#titre').val();
		var desc = $('#desc').val();
		var date = $('#date').val();
		var type = $('#type').val();

		Meteor.call('insertEvent', {titre: titre, desc: desc, date:date, type:type}, function (error, result) {
			if(result){
				console.log(result);
			}
		});
	}
});

Template.edit.events({
	'click #update': function () {
		event.preventDefault();
		var titre = $('#titre').val();
		var desc = $('#desc').val();
		var date = $('#date').val();
		var type = $('#type').val();
		Evenements.update(this._id, {titre:titre, desc:desc, date:date, type:type});
		Router.go('home');
	}
});