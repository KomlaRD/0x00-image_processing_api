// Import modules
import sharp from "sharp";

// Function to resize image requested
const resizeImage = async (filename: string, width: number, height: number, destinationPath: string): Promise<void>  => {
    try{
        await sharp(filename)
         .resize(width, height)
         .toFile(destinationPath);
    } catch (err) {
        console.log(`Image could not be resized, ${err}`);
    }
};

export default resizeImage;