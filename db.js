const { Pool } = require ('pg');
require('.env').config();

const pool = new Pool