import jwt from "jsonwebtoken";
import mongoose from "mongoose";

export type jwtPayloadOverride = jwt.JwtPayload & {
  username: string;
  ownerId: any;
  tokenId: any;
};

export interface TPost {
  _id: mongoose.Types.ObjectId;
  poster: string;
  title: string;
  content: string | undefined;
  likes: number;
};

export interface PostDoc extends mongoose.Document {
  posterId: mongoose.Types.ObjectId;
  guildId: mongoose.Types.ObjectId;
  poster: string;
  guild: string;
  title: string;
  content: string | undefined;
  likedBy: mongoose.Types.ObjectId[];
};

export interface GuildDoc extends mongoose.Document {
  owner: mongoose.Types.ObjectId;
  name: string;
};
