import express from 'express';
import cors from 'cors';
import "dotenv/config";
import pool from './src/Repository/connection.js';


// To criando o servidor Express
const server = express();
// To habilitando o Cors
server.use(cors());
// To habilitando fazer requisições com formato JSON
server.use(express.json());


server.get('/ping', async (req, res) => {
  try {
    const resultado = await pool.query('SELECT NOW()');
    res.json({ db_time: resultado.rows[0] });
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
});

// To iniciando o servidor
server.listen(process.env.PORT, () => console.log(` A Braba Ta On Na Porta ${process.env.PORT}`));