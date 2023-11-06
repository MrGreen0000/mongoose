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

    const newChapters = new Chapters({
      title: "flutter",
      nbrOfLesson: 40,
      index: 4,
      active: true,
    });

    return newChapters.save();
  })
  .then((documents) => {
    console.log("Inserted docment:", documents);
    return Chapters.find({}).exec();
  })
  .then((documents) => {
    console.log("All documents:", documents);
  })
  .catch((err) => {
    console.log(err);
  });
