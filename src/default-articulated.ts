import Articulated from "Objects/articulated";
import FileSystem from "Files/file-system";

function generateDefaultArticulated(): Articulated {
  const currentRawArticulated = JSON.stringify(
    require("../shapes/articulated.json")
  );

  return FileSystem.loadArticulated(currentRawArticulated);
}

export default generateDefaultArticulated;
