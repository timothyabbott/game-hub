const getCroppedImageUrl = (url: string) => {
  const target = "media/";
  //   find the position at which to add the crop string
  // It was found that not all images have a cropped image, this is a short term fix while completing the sort selector.
  if (!url) return "";
  const index = url.indexOf(target) + target.length;

  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default getCroppedImageUrl;
