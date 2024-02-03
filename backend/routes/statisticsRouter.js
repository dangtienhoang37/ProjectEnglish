const router = require("express").Router();
const statisticsController = require('../controllers/statisticsController');
const { authentication } = require("../middlewares/authenticationMiddleware");
const { checkAdmin } = require("../middlewares/authorizationMiddleware");

router.get('/count-user', authentication, statisticsController.countUser);
router.get('/count-word', authentication, statisticsController.countWord);
router.get('/count-listening', authentication, statisticsController.countListening);
router.get('/count-quiz', authentication, statisticsController.countQuiz);
router.get('/count-grammar', authentication, statisticsController.countGrammar);
module.exports = router;
