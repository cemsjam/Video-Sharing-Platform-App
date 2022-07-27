import CommentModel from "../models/CommentModel.js";
import VideoModel from "../models/VideoModel.js";

import { createError } from "../middleware/error.js";

export const addComment = async (req, res, next) => {
  const newComment = new CommentModel({ ...req.body, userId: req.user.id });
  try {
    const savedComment = await newComment.save();
    res.status(200).json(savedComment);
  } catch (err) {
    next(err);
  }
};

export const deleteComment = async (req, res, next) => {
  try {
    const comment = await CommentModel.findById(req.params.id);
    const video = await VideoModel.findById(req.params.id);
    if (req.user.id === comment.userId || req.user.id === video.userId) {
      await CommentModel.findByIdAndDelete(req.params.id);
      res.status(200).json("the comment has been deleted");
    } else {
      return next(createError(403, "You can delete only your comment "));
    }
  } catch (err) {
    next(err);
  }
};

export const getComments = async (req, res, next) => {
  try {
    const comments = await CommentModel.find({ videoId: req.params.videoId });
    res.status(200).json(comments);
  } catch (err) {
    next(err);
  }
};
