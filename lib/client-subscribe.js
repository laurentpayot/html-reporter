// Receive data from server-side (ex. process.env.NODE_ENV)
Meteor.subscribe('velocityReporter');

// Collection that 'velocityReporter' subscription writes to
VelocityReporter = new Meteor.Collection('velocityReporter')
