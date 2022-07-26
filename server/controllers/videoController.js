import { createError } from "../middleware/error.js";
import UserModel from "../models/UserModel.js";
import VideoModel from "../models/VideoModel.js";

export const addVideo = async (req, res, next) => {
  const newVideo = new VideoModel({ userId: req.user.id, ...req.body });
  try {
    const savedVideo = await newVideo.save();
    res.status(200).json(savedVideo);
  } catch (err) {
    next(err);
  }
};

export const updateVideo = async (req, res, next) => {
  try {
    const video = await VideoModel.findById(req.params.id);
    if (!video) return next(createError(404, "Video Not Found"));
    if (req.user.id === video.userId) {
      const updatedVideo = await VideoModel.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedVideo);
    } else {
      return next(createError(403, "You Can Update Only Your Video"));
    }
  } catch (err) {
    next(err);
  }
};

export const deleteVideo = async (req, res, next) => {
  try {
    const video = await VideoModel.findById(req.params.id);
    if (!video) return next(createError(404, "Video Not Found"));
    if (req.user.id === video.userId) {
      await VideoModel.findByIdAndDelete(req.params.id);
      res.status(200).json("Video has been deleted");
    } else {
      return next(createError(403, "You Can Delete Only Your Video"));
    }
  } catch (err) {
    next(err);
  }
};

export const getVideo = async (req, res, next) => {
  try {
    const video = await VideoModel.findById(req.params.id);
    res.status(200).json(video);
  } catch (err) {
    next(err);
  }
};
export const addView = async (req, res, next) => {
  try {
    await VideoModel.findByIdAndUpdate(req.params.id, { $inc: { views: 1 } });
    res.status(200).json("The View has been increased");
  } catch (err) {
    next(err);
  }
};
export const random = async (req, res, next) => {
  try {
    const videos = await VideoModel.aggregate([{ $sample: { size: 40 } }]);
    res.status(200).json(videos);
  } catch (err) {
    next(err);
  }
};

export const trend = async (req, res, next) => {
  try {
    const videos = await VideoModel.find().sort({ views: 1 });
    res.status(200).json(videos);
  } catch (err) {
    next(err);
  }
};

export const sub = async (req, res, next) => {
  try {
    const user = await UserModel.findById(req.user.id);
    const subscribedChannels = user.subscribedUsers;
    const list = await Promise.all(
      subscribedChannels.map((channelId) => {
        return VideoModel.find({ userId: channelId });
      })
    );
    res.status(200).json(list.flat().sort((a, b) => b.createdAt - a.createdAt));
  } catch (err) {
    next(err);
  }
};

export const getByTag = async (req, res, next) => {
  const tags = req.query.tags.split(",");
  try {
    const videos = await VideoModel.find({ tags: { $in: tags } }).limit(20);
    res.status(200).json(videos);
  } catch (err) {
    next(err);
  }
};
export const search = async (req, res, next) => {
  const query = req.query.q;
  try {
    const videos = await VideoModel.find({
      title: { $regex: query, $options: "i" },
    }).limit(40);
    res.status(200).json(videos);
  } catch (err) {
    next(err);
  }
};
