// Import server package
import express, { Router } from "express"

// Import routes into main route
import images from "./api/images";

// Initialise router object
const routes: Router = express.Router();

// Set endpoint
routes.get("/", (req: express.Request, res: express.Response): void => {
  res.send(
    "Welcome to Image Processing API, please provide the image file name, width and height as parameters to resize your image. An example localhost:3000/images?filename=file&width=10&height=10\n"
  );
});

// Additional route to use
routes.use("/images", images);

// Export routes
export default routes;