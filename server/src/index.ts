import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // For JSON body parsing

app.get('/', (req, res) => {
  res.send('Hello from Express + TypeScript!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
