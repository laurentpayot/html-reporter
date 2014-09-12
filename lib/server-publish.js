Meteor.publish('velocityReporter', function () {
  var self = this,
      isDev = ('development' === process.env.NODE_ENV);
  
  //console.log('[VelocityReporter] isDev', isDev);

  self.added("velocityReporter", 1, {isDevelopment: isDev});
  self.ready();
});
