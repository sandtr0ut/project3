const router = require("express").Router();
const reviewsRoutes = require("./reviews");

// Review routes
router.use("/reviews", reviewsRoutes);

module.exports = router;
