const express = require("express");
const router = express.Router();

const Review = require("../models/Review");

router.get("/test", (req, res) => res.send("review route testing!"));

router.get("/", (req, res) => {
  Review.find()
    .then((items) => res.json(items))
    .catch((err) => res.status(404).json({ noreviewfound: "No Review found" }));
});

router.get("/:id", (req, res) => {
  Review.findById(req.params.id)
    .then((item) => res.json(item))
    .catch((err) => res.status(404).json({ noreviewfound: "No reviewfound" }));
});

router.post("/save", (req, res) => {
  Review.create(req.body)
    .then((item) => res.json({ msg: "Review  added successfully" }))
    .catch((err) =>
      res.status(400).json({ error: "Unable to add this review" })
    );
});

router.put("/:id", (req, res) => {
  Review.findByIdAndUpdate(req.params.id, req.body)
    .then((item) => res.json({ msg: "Updated successfully" }))
    .catch((err) =>
      res.status(400).json({ error: "Unable to update the Database" })
    );
});

router.delete("/:id", (req, res) => {
  Review.findByIdAndRemove(req.params.id, req.body)
    .then((item) => res.json({ msg: "review deleted successfully" }))
    .catch((err) => res.status(404).json({ error: "No such a review" }));
});

module.exports = router;