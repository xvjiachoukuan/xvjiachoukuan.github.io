var dom = document.getElementById('zhanbi');
var myChart = echarts.init(dom, null, {
    renderer: 'canvas',
    useDirtyRect: false
});
var app = {};

var option;



var option;

option = {
    backgroundColor: 'rgba(255,255,255)',
    tooltip: {
        trigger: 'item',
    },
    grid: {
        left: '10%',
        top: '5%',
        right: '5%',
        bottom: '30%',
    },
    xAxis: [{
        data: ["患病", "满足虚荣心", "其他", "意义不明"],
        axisLabel: {
            textStyle: {
                color: '#999898',
                fontSize:14
            },
            margin: 30, //刻度标签与轴线之间的距离。
        },

        axisLine: {
            show: false, //不显示x轴
            lineStyle: {
                color: 'rgba(53,65,95,1)',
            }
        },
        axisTick: {
            show: true //不显示刻度
        },
        boundaryGap: true,
        splitLine: {
            show: false
        }
    }],
    yAxis: [{
        splitLine: {
            show: true,
            lineStyle: {
                color: '#e3dede',
                type: 'dashed'
            }
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            textStyle: {
                color: '#ae3139',
                fontSize:14
            },
        }
    }],
    series: [
        {//柱底圆片
            name: "",
            type: "pictorialBar",
            symbolSize: [43, 20],//调整截面形状
            symbolOffset: [0, 10],
            z: 12,
            itemStyle: {
                "normal": {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: "#ae3139"
                    },
                        {
                            offset: 1,
                            color: "#ae3139"
                        }
                    ],false)
                }
            },
            data: ["50", "75", "105","130"]
        },

        //柱体
        {
            name: '',
            type: 'bar',
            barWidth: 43,
            itemStyle: {
                // shadowOffsetX: 200,
                // shadowOffsetY: 200,
                "normal": {
                    "color": {
                        "x": 0,
                        "y": 0,
                        "x2": 0,
                        "y2": 1,
                        "type": "linear",
                        "global": false,
                        "colorStops": [{//第一节下面
                            "offset": 0,
                            "color": "#f35e5a"
                        }, {
                            "offset": 1,
                            "color": "#ae3139"
                        }]
                    }
                }
            },
            data: ["607", "140", "379","650"]
        },

        //柱顶圆片
        {
            name: "",
            type: "pictorialBar",
            symbolSize: [43, 21],//调整截面形状
            symbolOffset: [0, -10],
            z: 12,
            symbolPosition: "end",
            "itemStyle": {
                "normal": {
                    color: new echarts.graphic.LinearGradient(0,0,0,1,
                        [{
                            offset: 0,
                            color: "#f35e5a"
                        },
                            {
                                offset: 1,
                                color: "#ae3139"
                            }
                        ],
                        false
                    ),
                }
            },
            data: ["607", "140", "379","650"]
        }
    ]
};
option && myChart.setOption(option);



if (option && typeof option === 'object') {
    myChart.setOption(option);
}

window.addEventListener('resize', myChart.resize);