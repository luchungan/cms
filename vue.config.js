module.exports={
    publicPath: './',
    configureWebpack:{
        devServer:{
            before(app){
                app.get('/api/table',(req,res)=>{
                    res.json({
                       code:0,
                       data:{
                        "list": [{
                                "id": 1,
                                "name": "张三",
                                "money": 123,
                                "address": "广东省东莞市长安镇",
                                "state": "成功",
                                "date": "2019-11-1",
                                "thumb": "https://lin-xin.gitee.io/images/post/wms.png"
                            },
                            {
                                "id": 2,
                                "name": "李四",
                                "money": 456,
                                "address": "广东省广州市白云区",
                                "state": "成功",
                                "date": "2019-10-11",
                                "thumb": "https://lin-xin.gitee.io/images/post/node3.png"
                            },
                            {
                                "id": 3,
                                "name": "王五",
                                "money": 789,
                                "address": "湖南省长沙市",
                                "state": "失败",
                                "date": "2019-11-11",
                                "thumb": "https://lin-xin.gitee.io/images/post/parcel.png"
                            },
                            {
                                "id": 4,
                                "name": "赵六",
                                "money": 1011,
                                "address": "福建省厦门市鼓浪屿",
                                "state": "成功",
                                "date": "2019-10-20",
                                "thumb": "https://lin-xin.gitee.io/images/post/notice.png"
                            }
                        ],
                        "pageTotal": 4
                    } 
                    })
                })
            }
        }
    }

}