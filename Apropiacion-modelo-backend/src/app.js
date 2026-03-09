import express from 'express';
const app = express();
import pqrsRoutes from './routes/pqrsRoutes.js';

app.use(express.urlencoded());

app.use('/api', pqrsRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});