// @ts-nocheck
import mongoose from "mongoose";

async function startDBConnection() {
  const db = await mongoose.connect("mongodb://db:27017/test");
}

export default startDBConnection;
