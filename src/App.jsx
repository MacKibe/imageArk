import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
//
// Import any actions required for transformations.
// import {fill} from "@cloudinary/url-gen/actions/resize";

import "./App.css";

function App() {
  //
  // Create a Cloudinary instance and set your cloud name.
  const cld = new Cloudinary({
    cloud: {
      cloudName: "dj1bxpjqt",
    },
  });
  // 3. Get your image
  //===================

  // Instantiate a CloudinaryImage object for the image with the public ID, 'docs/models'.
  const myImage = cld.image(
    "mashamba/COPIES Title - deeds OTHERS/1/cqkobi1pymugtwm2axmo"
  );
  return (
    <div>
      <h1>hi World</h1>
      <AdvancedImage cldImg={myImage} />
    </div>
  );
}

export default App;
