Evenements = new Mongo.Collection('evenements');
Meteor.methods({
	insertEvent: function(evenement){
		newWaiters = Evenements.insert({titre: evenement.titre, desc: evenement.desc, date: evenement.date, type: evenement.type}, function(error, result){});
		return newWaiters;
	},
	updateEvent: function(evenement){
		var events = Evenements.update({_id:evenement._id}, {$inc:{shares:1}});
		return events;
	},
	removeEvent: function(id){
		Evenements.remove(id);
	},
	findEvent: function(id){
		eventF = Evenements.findOne(id);
	}
})