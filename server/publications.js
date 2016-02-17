Meteor.publish('evenements', function () {
	return Evenements.find({}, {fields: {'titre':1, 'desc':1, 'date':1, 'type':1}});
});