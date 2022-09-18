export const fetchArtworksService = async (
  favouriteID: number
): Promise<any> => {
  return await (
    await fetch(`https://api.artic.edu/api/v1/artworks/${favouriteID}`)
  ).json();
};
