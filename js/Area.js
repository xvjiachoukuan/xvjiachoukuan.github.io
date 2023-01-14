var myChart = echarts.init(document.getElementById('myAreaChart'))
var option = {
    title: {
        text: '',
        left: 40,
        textStyle: {
            color:'#000'
        }
    },
    color: ['#ae3139'],
    backgroundColor: '#fff',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
            z: 0
        },
        showContent: false
    },
    dataZoom: {
        show: true,
        type: 'slider',
        realtime: true,
        height: 20,
        start: 0,
        end: 50,
        textStyle:false,
    },
    xAxis: [{
        type: 'category',
        axisTick: {
            show: false,
            alignWithLabel: true
        },
        axisLabel: {
            color: '#000',
            interval: 0
        },
        axisLine: {
            lineStyle: {
                color: '#2b386a',
                fontSize: 16
            }
        },
        data: ['北京','天津','河北','山西','内蒙古','上海','山东','江苏','安徽','江西','浙江','福建','湖北','湖南','河南','广东','广西','海南','重庆','四川','贵州','云南','西藏','陕西','甘肃','宁夏','新疆','青海','黑龙江','吉林','辽宁',]
    }],
    yAxis: [{
        type: 'value',
        boundaryGap: ['0%', '10%'],
        splitLine: {
            show: false
        },
        axisLabel: {
            color: '#000',
            fontSize: 16
        },
        axisLine: {
            lineStyle: {
                color: '#000'
            }
        }
    }],
    series: [{
        name: '直接访问',
        type: 'bar',
        barWidth: 20,
        emphasis: {
            label: {
                show: true,
                position: 'top',
                distance: 5,
                textStyle: {
                    color: '#000',
                    fontSize: 18
                }
            }
        },
        itemStyle: {
            normal: {
                show: true,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#391922'
                },
                    {
                        offset: 1,
                        color: '#ae3139'
                    }
                ])
            }
        },
        data: [{
            name: '北京',
            value: 9
        },
            {
                name: '天津',
                value: 4

            },
            {
                name: '河北',
                value: 36
            },
            {
                name: '山西',
                value: 25
            },
            {
                name: '内蒙古',
                value: 6
            }, {
                name: '上海',
                value: 5
            },
            {
                name: '山东',
                value: 68
            },
            {
                name: '江苏',
                value: 32
            },
            {
                name: '安徽',
                value: 39
            },
            {
                name: '江西',
                value: 48
            },
            {
                name: '浙江',
                value: 25
            },
            {
                name: '福建',
                value: 28
            },
            {
                name: '湖北',
                value: 25
            },
            {
                name: '湖南',
                value: 59
            },
            {
                name: '河南',
                value: 53
            },
            {
                name: '广东',
                value: 103
            },
            {
                name: '广西',
                value: 55
            },
            {
                name: '海南',
                value: 5
            },
            {
                name: '重庆',
                value: 17
            },
            {
                name: '四川',
                value: 65
            },
            {
                name: '贵州',
                value: 44
            },
            {
                name: '云南',
                value: 1
            },
            {
                name: '西藏',
                value: 1
            },
            {
                name: '陕西',
                value: 30
            },
            {
                name: '甘肃',
                value: 26
            },
            {
                name: '宁夏',
                value: 4
            },
            {
                name: '新疆',
                value: 17
            },
            {
                name: '青海',
                value: 6
            },
            {
                name: '黑龙江',
                value: 17
            },
            {
                name: '吉林',
                value: 13
            },
            {
                name: '辽宁',
                value: 21
            },
        ]
    }]
};
myChart.setOption(option)