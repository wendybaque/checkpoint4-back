const connection = require('../db-config');

const db = connection.promise();

const findAllStadiums = () => db.query('SELECT * FROM stadium');

const findOneStadium = (id) => db.query('SELECT * FROM stadium WHERE id = ?', [id]);

module.exports = {
    findAllStadiums,
    findOneStadium,
  };