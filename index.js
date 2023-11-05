const mongoose = require("mongoose");
const schema = mongoose.Schema;

const chapterSchema = schema({
  title: String,
  nbrOfLesson: Number,
  index: Number,
  active: Boolean,
});

const Chapters = mongoose.model("chapters", chapterSchema);

mongoose
  .connect("mongodb://naji:naji1410@127.0.0.1:27017/dyma?authSource=admin", {})
  .then(() => {
    console.log("Connected");
    return Chapters.find({}).limit(2).exec();
  })
  .then((documents) => {
    console.log(documents);
  })
  .catch((err) => {
    console.log(err);
  });
