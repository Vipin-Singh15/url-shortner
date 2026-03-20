import { generateNanoId } from "../utils/helper.js";
import { getCustomShortUrl, saveShortUrl } from "../dao/shortUrl.js";

export const shortUrlServiceWithoutUserId = async (url) => {
  const shortUrl = generateNanoId(7);
  if (!shortUrl) throw new Error("Failed to generate short URL");
  await saveShortUrl(shortUrl, url);

  return shortUrl;
};

export const shortUrlServiceWithUserId = async (url, userId, slug = null) => {
  const shortUrl = slug || generateNanoId(7);

  if (!shortUrl) throw new Error("Failed to generate short URL");
  const exists = await getCustomShortUrl(slug);

  if (exists) throw new Error("Custom URL already exists");

  await saveShortUrl(shortUrl, url, userId);

  return shortUrl;
};
