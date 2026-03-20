import { getShortUrl } from "../dao/shortUrl.js";
import {
  shortUrlServiceWithoutUserId,
  shortUrlServiceWithUserId,
} from "../services/shortUrl.service.js";
import { BadRequestError } from "../utils/errorHandler.js";
import wrapAsync from "./../utils/trycatchwrapper.js";

export const createShortUrl = wrapAsync(async (req, res) => {
  const data = req.body;
  let shortUrl;

  if (req.user) {
    shortUrl = await shortUrlServiceWithUserId(
      data.url,
      req.user._id,
      data.slug,
    );
  } else {
    shortUrl = await shortUrlServiceWithoutUserId(data.url);
  }

  res.status(201).json({ shortUrl: process.env.APP_URL + shortUrl });
});

export const redirectFromShortUrl = wrapAsync(async (req, res) => {
  const { id } = req.params;
  const url = await getShortUrl(id);

  if (!url) throw new BadRequestError("Short URL not found");

  res.redirect(url.full_url);
});
