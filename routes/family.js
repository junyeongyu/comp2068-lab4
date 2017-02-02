var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	res.render('family/index');
});
router.get('/junyeong', function(req, res, next) {
	res.render('family/junyeong');
});
router.get('/jungmyo', function(req, res, next) {
	res.render('family/jungmyo');
});
router.get('/aeja', function(req, res, next) {
	res.render('family/aeja');
});
router.get('/jongrak', function(req, res, next) {
	res.render('family/jongrak');
});

module.exports = router;