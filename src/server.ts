import app from './app';

const PORT = Number(process.env.PORT) || 4000; // Convert to number or default to 4000

app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
});