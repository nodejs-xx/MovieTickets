var mongoose = require('mongoose');
var dbConnectionString = 'mongodb://localhost/tickets';
mongoose.connect(dbConnectionString);
var schedule = require('node-schedule');

var Ticket = require('./ticket');
var Movie = require('./movie');

schedule.scheduleJob('0 * * * * *', Movie.updateMovies);

schedule.scheduleJob('0 * * * * *', Ticket.updateTickets);
