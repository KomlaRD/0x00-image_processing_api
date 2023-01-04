// Import modules
import express from "express";
import routes from "./routes/index";

// Initialise application object
const app: express.Application = express();

// Initialise port
const port = 3000;

// Use routes 
app.use("/", routes);

// Check for port 
app.listen(port, () => {
    console.log(`Server started at localhost:${port}`)
});

export default app;