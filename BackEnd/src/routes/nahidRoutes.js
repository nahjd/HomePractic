const router = require("express").Router();
const nahidControllers = require("./../controllers/nahidControllers");

router.get("/nahid", nahidControllers.getAllNahid);
router.post("/nahid", nahidControllers.postNahid);
router.get("/nahid/:id", nahidControllers.getNahidById);
router.delete("/nahid/:id", nahidControllers.deleteNahid);
router.put("/nahid/:id", nahidControllers.putNahid);
router.patch("/nahid/:id", nahidControllers.updateNahid);

module.exports = router;
