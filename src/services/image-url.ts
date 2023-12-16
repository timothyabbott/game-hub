import react from "../assets/react.svg";

const getCroppedImageUrl = (url: string) => {
  const target = "media/";
  // Display the react image if no url is returned
  if (!url) return react;
  const index = url.indexOf(target) + target.length;

  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default getCroppedImageUrl;
