const path = require("path");
const router = require("express").Router();

router.get("/", (req, res) => {
 // edit final path res.sendFile(path.join(__dirname, "../../public/"));
});

router.get("/sign up", (req, res) => {
    // edit final path res.sendFile(path.join(__dirname, "../../public/"));
   });

router.get("/login", (req, res) => {
 // edit final path res.sendFile(path.join(__dirname, "../../public/"));
});

router.get("/ratepark", (req, res) => {
    // edit final path res.sendFile(path.join(__dirname, "../../public/"));
   });

router.get("*", (req, res) => {
 // edit final path res.sendFile(path.join(__dirname, './public/index.html'));
});

module.exports = router;