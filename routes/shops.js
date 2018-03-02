var moment = require('moment');

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/list', function (req, res, next) {
    let {
        order,//descend ascend
        field,
        name,
        startData,
    } = req.query;
    let result = 1;
    if (field) {
    }
    let data = new Array(10).fill(1).map((item, key) => ({
        shop: {
            name: `${key}name`,
            num: key % 5 === 0 ? 2 : 1,
            price: key * Math.pow(10, Math.random() * 10) * Math.random() * 100,
        },
        startTime: moment().valueOf(),
        lastChangeTime: moment().valueOf(),
    }))
    res.send(
        {
            msg: '得到列表成功',
            data,
            result,
        }
    );
});

router.get('/add?edit', function (req, res, next) {
    let result = 1,data={};
    res.send({
        msg: '操作成功',
        data,
        result: 1
    })
});

router.get('/delete/:ids?', function (req, res, next) {
    console.log(req.params)
    let { ids } = req.params;
    let idArr = ids.split(',');

    res.send(new Array(10).fill(1).map((item, key) => ({
        shop: {
            name: `${key}name`,
            num: key % 5 === 0 ? 2 : 1,
            price: key * Math.pow(10, Math.random() * 10) * Math.random() * 100,
        },
        startTime: moment().valueOf(),
        lastChangeTime: moment().valueOf(),
    })));
});
module.exports = router;