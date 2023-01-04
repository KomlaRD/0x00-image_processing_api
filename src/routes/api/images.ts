/* eslint-disable @typescript-eslint/no-inferrable-types */
// Import modules
import express, { Router } from "express";
import fs from "fs";
import path from "path";
import resizeImage  from "../../image-processor";

// Declare and initialise router object
const images: Router = express.Router();
// Set api endpoint for images
images.get("/", async (req: express.Request, res: express.Response): Promise<void> => {
  // Query parameters
  const filename: string = req.query.filename as string;
  const width: number = parseInt(req.query.width as string);
  const height: number = parseInt(req.query.height as string);

  // Source and destination directories for images
  const filePathImages: string = `${path.join("images/") + filename}.jpg`;
  const destinationPathImages: string = `${path.join(
    "thumbs/"
  )} ${filename}_${width}_${height}.jpg`;

  // Check for existence of image file
  try {
    await fs.promises.readFile(filePathImages);
  } catch (err) {
    res
      .status(404)
      .send("Image requested does not exist on this server, try again");
  }

  // Resize image if new else send cached image
  try {
    if (fs.existsSync(destinationPathImages)) {
       res.sendFile(destinationPathImages, { root: "." });
       console.log("Cache image sent successfully");
    } else {
        await resizeImage(filePathImages, width, height, destinationPathImages);
        res.sendFile(destinationPathImages, { root: "." });
        console.log("New image resized")
    }
  } catch (err) {
    if (!res.headersSent) {
      res.send(
        "Image could not be resized as requested, check your query parameters"
      );
    }
    console.log(`Image could not be resized as requested: ${err}`);
  }
});

export default images;
