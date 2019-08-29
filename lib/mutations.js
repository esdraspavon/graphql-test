"use strict";

const connectDB = require("./db");
const { ObjectID } = require("mongodb");

module.exports = {
  createCourse: async (root, { input }) => {
    let db;
    let course;
    try {
      db = connectDB();
      course = await db.collection("courses").insertOne(input);
    } catch (error) {
      console.error(error);
    }
    return course;
  }
};
