var dom = document.getElementById('liyou');
var myChart = echarts.init(dom, null, {
    renderer: 'canvas',
    useDirtyRect: false
});
var app = {};

var option;



var option;


var category= [
    {
        name: "感冒发烧",
        value: 26
    },
    {
        name: "肾脏疾病",
        value: 9
    },
    {
        name: "白血病",
        value: 8
    },
    {
        name: "抑郁症",
        value: 7
    },
    {
        name: "阑尾炎",
        value: 6
    },
    {
        name: "胃病",
        value: 6
    },
    {
        name: "癌症",
        value: 5
    },
    {
        name: "长痘",
        value: 4
    },
    {
        name: "渐冻症",
        value: 3
    },
    {
        name: "残疾",
        value: 2
    }
] // 类别
var total = 0; // 数据总数

category.forEach(item=>{
    total += item.value;
})
total = 29; // 数据总数
var totalList = [];
// var totalList = this.echartData.length;

var datas = [];
category.forEach(value => {
    datas.push(value.value);
    totalList.push(total);
});
option = {
    xAxis: {
        max: total,
        splitLine: {
            show: false
        },
        axisLabel: {
            show: false,
            // fontSize: 10,
            // color: '#cacdd5',
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
    },
    grid: {
        left: 95,
        top: 5, // 设置条形图的边距
        right: 65,
        bottom: 5,
        containLabel: true
    },
    yAxis: [{
        type: "category",
        inverse: true,
        data: category,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
    }],
    series: [
        {
            // 内
            type: "bar",
            barWidth: 16,
            silent: true,
            itemStyle: {
                normal: {
                    color: "#ae3139"
                }
            },
            label: {
                normal: {
                    formatter: "{b}",
                    textStyle: {
                        color: "#6f7178",
                        fontSize: 14
                    },
                    position: 'left',
                    distance: 10, // 向右偏移位置
                    show: true
                }
            },
            data: category,
            z: 1,
            animationEasing: "elasticOut"
        },
        {
            // 分隔
            type: "pictorialBar",
            itemStyle: {
                normal: {
                    color: "#fff"
                }
            },
            symbolRepeat: "fixed",
            symbolMargin: 2,
            symbol: "rect",
            symbolClip: true,
            symbolSize: [3, 16],
            symbolPosition: "start",
            symbolOffset: [1, -1],
            symbolBoundingData: this.total,
            data: totalList,
            z: 2,
            animationEasing: "elasticOut",
        },
        {
            // label
            type: "pictorialBar",
            symbolBoundingData: total,
            itemStyle: {
                normal: {
                    color: "none"
                }
            },
            label: {
                normal: {
                    formatter: (params) => {
                        var text;
                        text = '{f| ' + params.data  + '}';
                        return text;
                    },
                    rich: {
                        f: {
                            color: "#ae3139",
                            fontSize: 16
                        }
                    },
                    position: 'right',
                    distance: 5, // 向右偏移位置
                    show: true
                }
            },
            data: datas,
            z: 0,

        },
        {
            name: "外框",
            type: "bar",
            barGap: "-111%", // 设置外框粗细
            data: totalList,
            barWidth: 20,
            itemStyle: {
                normal: {
                    // barBorderRadius: [5，5，5，5],
                    color: "transparent", // 填充色
                    barBorderColor: "#ae3139", // 边框色
                    barBorderWidth: 1, // 边框宽度
                }
            },
            z: 3
        },

    ]
};

option && myChart.setOption(option);


if (option && typeof option === 'object') {
    myChart.setOption(option);
}

window.addEventListener('resize', myChart.resize);