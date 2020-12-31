/* Required files */

const years = require(`../data/years`)
const express = require('express');
const router = express.Router();

/* Helper Functions */

const thisYear = () => (new Date).getFullYear()

// returns years between start and end date
const getSolstices = (start = thisYear(), end = start + 4) => {
  console.log(start, end);
  const data = {}
  for (var i = start; i < end + 1; i++) {
    years[i] && (data[i] = years[i])
  }
  return data
}

/* GET solstice listings */

router.get('/', function(req, res, next) {
  // get query params, parse to integers
  for (key in req.query) req.query[key] = parseInt(req.query[key])
  let {year, start, end} = req.query

  year && res.json(getSolstices(year, year))
  start && res.json(getSolstices(start, end))
  end && res.json(getSolstices(thisYear(), end))
  res.json(getSolstices())
});

module.exports = router;
