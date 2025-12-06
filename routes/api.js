const express = require('express');
const router = express.Router();


router.get('/books', function (req, res, next) {

  const search   = req.query.search;
  const minprice = req.query.minprice;
  const maxprice = req.query.maxprice;
  const sort     = req.query.sort;

  let sqlquery = "SELECT * FROM books";
  const conditions = [];
  const params = [];

  if (search && search.trim() !== '') {
    conditions.push("(name LIKE ? OR author LIKE ?)");
    params.push('%' + search + '%', '%' + search + '%');
  }

  if (minprice) {
    conditions.push("price >= ?");
    params.push(minprice);
  }

  if (maxprice) {
    conditions.push("price <= ?");
    params.push(maxprice);
  }

  if (conditions.length > 0) {
    sqlquery += " WHERE " + conditions.join(" AND ");
  }

  if (sort === 'name') {
    sqlquery += " ORDER BY name";
  } else if (sort === 'price') {
    sqlquery += " ORDER BY price";
  }

  db.query(sqlquery, params, (err, result) => {
    if (err) {
      res.json(err);
      next(err);
    } else {
      res.json(result);
    }
  });
});

module.exports = router;
