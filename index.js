const mongoose = require("mongoose");
const schema = mongoose.Schema;

const chapterSchema = schema(
  {
    title: String,
    nbrOfLesson: Number,
    index: Number,
    active: Boolean,
  },
  {
    timestamps: true,
  }
);

const Chapters = mongoose.model("chapters", chapterSchema);

mongoose
  .connect("mongodb+srv://naji:naji1410@cluster0.2mlqv2t.mongodb.net/", {})
  .then(() => {
    console.log("Connected");

    const newChapter = new Chapters({
      title: "react",
      nbrOfLesson: 15,
      active: true,
    });

    newChapter.save();
  })
  .catch((err) => {
    console.log(err);
  });
