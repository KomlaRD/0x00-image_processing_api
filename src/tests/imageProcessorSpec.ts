/* eslint-disable @typescript-eslint/no-inferrable-types */
import path from "path";
import resizeImage from "../image-processor";

// Test for resize image sent to destination path
it("expect resizeImage(filePathImages, width, height, destinationPathImagesTest) to successfully write resized image into destination path", () => {
    const fullImage: string = "fjord";
    const testImage: string = "fjord_250_250"
    const filePathImages: string = `${path.join("images/") + fullImage}.jpg`;
    const destinationPathImagesTest: string = `${path.join("thumbs_test/")} ${testImage}.jpg`;

    // Resize an image sample
    expect(resizeImage(filePathImages, 250, 250, destinationPathImagesTest)).toBeTrue;
 });
