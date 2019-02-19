var Flight = require('../models/flight');

module.exports = {
    new: newFlight,
    create,
    index,
    show

}

function index(req, res) {
    Flight.find({}, function(err, flights) {
      res.render('flights/index', { flights });
    });
 }

function newFlight(req, res) {
    res.render('flights/new');
}

function create(req, res) {
    var flight = new Flight(req.body);
    console.log(req.body);
    flight.save(function(err) {
      // one way to handle errors
      if (err) return res.render('flights/new');
      console.log(flight);
      // for now, redirect right back to new.ejs
      res.redirect('/flights');
    });
  }

  function show(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        res.render('flights/show', {
            flight
        })
    });
  }
