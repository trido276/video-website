var express = require('express');
var router = express.Router();
const cors = require('cors')
/* GET home page. */
router.get('/', function(req, res, next) {
  throw Error(404)
  // res.render('index', { title: 'Express' });
});

const SOURCE = [
  {
    "id":"1",
    "title":"Avengers - Infinity War",
    "posterHor":"https://i.ytimg.com/vi/Uwq5XYedI_w/maxresdefault.jpg",
    "src":  "https://genk.mediacdn.vn/139269124445442048/2021/1/1/72HvFU6ZDHI-16094354084651079915194.mp4/master.m3u8",
    "trailer":  "https://genk.mediacdn.vn/139269124445442048/2021/1/1/72HvFU6ZDHI-16094354084651079915194.mp4/master.m3u8"
  },
  {
    "id":"2",
    "title":"Gundala",
    "posterHor":"https://www.wellgousa.com/sites/default/files/styles/hero_image/public/2020-05/812x1200.jpg",
    "src":  "https://genk.mediacdn.vn/2019/9/18/8rauD1vxMCw-1568796034538697073500.mp4/master.m3u8",
    "trailer":  "https://genk.mediacdn.vn/2019/9/18/8rauD1vxMCw-1568796034538697073500.mp4/master.m3u8"
  },
  {
    "id":"3",
    "title":"Avengers - Endgame",
    "posterHor":"https://genk.mediacdn.vn/139269124445442048/2020/7/22/2-15954109061752095734149.jpg",
    "src":  "https://genk.mediacdn.vn/139269124445442048/2020/4/29/TIAdu7OHAeo-1588167079585958954742.mp4/master.m3u8",
    "trailer":  "https://genk.mediacdn.vn/139269124445442048/2020/4/29/TIAdu7OHAeo-1588167079585958954742.mp4/master.m3u8"
  },
  {
    "id":"4",
    "title":"Murphy's Irish Stout - Last Orders",
    "posterHor":"https://i.gzn.jp/img/2018/01/17/last-orders/00.jpg",
    "src":  "https://genk.mediacdn.vn/b6ohy8vqjhgszgsw6ljke2uquhfr-z/2018/01/17/murphy-s-irish-stout-last-orders-1997-uk-1516155758668-351cc.mp4/master.m3u8",
    "trailer":  "https://genk.mediacdn.vn/b6ohy8vqjhgszgsw6ljke2uquhfr-z/2018/01/17/murphy-s-irish-stout-last-orders-1997-uk-1516155758668-351cc.mp4/master.m3u8"
  },
  {
    "id":"5",
    "title":"Attack on Titan Opening 6 — Final Season | My War",
    "logo": "https://images.squarespace-cdn.com/content/v1/5bfc2f03af20967c04dd3cb7/1552706321589-JHO663ZN310IEWOW2KC4/ke17ZwdGBToddI8pDm48kGriWbKM87yKft9gfUQrkQ1Zw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpxTFRHy9_jbmAPAUlBF0ZmRXIqe8gQm25-FK0lfuuj8MmHhqoToCk9JCW3J3XnuIUw/Attack+on+Titan+Logo.png",
    "description": "The last time fans saw Eren, Mikasa, Armin and the gang, Attack On Titan had just dropped its long-awaited basement reveal.",
    "posterBig":"//s3.us-east-1.amazonaws.com/dexerto-assets-production-cbbdf288/uploads/2020/05/30004846/attack-on-titan-season-4-release-date-trailer-more.jpg",
    "posterHor":"//i.ytimg.com/vi/Db1fj2pRFu8/hq720.jpg",
    "posterVer":"//i.ytimg.com/vi/Db1fj2pRFu8/hq720.jpg",
    "src":  "https://genk.mediacdn.vn/2019/3/22/CZ4MOBSx2xw-15532485710271579453076.mp4/master.m3u8",
    "trailer":  "https://genk.mediacdn.vn/2019/3/22/CZ4MOBSx2xw-15532485710271579453076.mp4/master.m3u8"
  },
  {
    "id":"6",
    "title":"Cyberpunk 2077",
    "logo": "//occ-0-395-64.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUR14OlYGF5VL4VioNxMh89cHeyG_8tk9HgUNrFoROI8imOI9ge-b6MQBE3ippxIxbGLIUkz7WHsP19XlYTuKl5OZXP2-pezbF78xJCxQSRq2JqkgahHRITWgvsaXnFW3vITq09cpCkOxRKgf2ysBj4W28V6vy3MbkFTFGmQ084Mcg.webp",
    "posterHor":"https://m10store.vn/wp-content/uploads/2020/12/Cyberpunk-2077-wall_01-1.jpg",
    "description": "A sword-wielding slayer, scorned by society, following a moral compass all his own. But not even a Witcher can fight destiny.",
    "src":  "https://genk.mediacdn.vn/2019/6/20/john-wick-hex-announcement-trailer-15610056741591268616358-13436.mp4/master.m3u8",
    "trailer":  "https://genk.mediacdn.vn/2019/6/20/john-wick-hex-announcement-trailer-15610056741591268616358-13436.mp4/master.m3u8"
  }
]

/* GET mylist*/
router.get('/mylist', cors(), function(req, res, next) {
  res.send(SOURCE.slice(0,4))
});

/* GET recommend*/
router.get('/recommend', cors(), function(req, res, next) {
  res.send(SOURCE.slice(4))
});

/* GET video*/
/*
TODO: query param, if id > video else video list, catch null or sth
*/
router.get('/videos', cors(), function(req, res, next) {
  let videos  = req.query.id ? SOURCE.find(src => src.id == req.query.id)
  : SOURCE.slice(0, req.query.limit > 0 ? req.query.limit : SOURCE.length)
  res.send(videos || {})
});

module.exports = router;
