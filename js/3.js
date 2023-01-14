var dom = document.getElementById('gai');
var myChart = echarts.init(dom, null, {
    renderer: 'canvas',
    useDirtyRect: false
});
var app = {};

var option;

option = {

    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    legend: {
        data: [ '2021年', '2020年', '2019年'],
        itemStyle: {
            color: "rgba(184, 112, 112, 1)"
        }
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            data: ['1月',
                '2月',
                '3月',
                '4月',
                '5月',
                '6月',
                '7月',
                '8月',
                '9月',
                '10月',
                '11月',
                '12月']
        }
    ],
    yAxis: [
        {
            type: 'value'

        },
    ],
    series: [



        {
            name: '2019年',
            type: 'line',

            stack: 'Total',
            color:"#ef9c99",
            areaStyle: {color:'#ef9c99'},
            emphasis: {
                focus: 'series'
            },
            data: [2, 4, 7, 2, 16, 17, 12, 14, 11, 4, 7, 13]
        },
        {
            name: '2020年',
            type: 'line',
            stack: 'Total',
            color:"#e86c68",
            areaStyle: {color:'#e05a59'},
            emphasis: {
                focus: 'series'
            },
            data: [23, 26, 33, 28, 38, 26, 31, 63, 117, 143, 120, 65]
        },
        {
            name: '2021年',
            type: 'line',
            stack: 'Total',
            color:"#c3393b",
            areaStyle: {color:'#c3393b'},
            emphasis: {
                focus: 'series'
            },
            data:[73, 71, 112, 125, 71, 101, 77, 78, 71, 25, 19, 9]

        },





    ]


};

if (option && typeof option === 'object') {
    myChart.setOption(option);
}

window.addEventListener('resize', myChart.resize);



if (option && typeof option === 'object') {
    myChart.setOption(option);
}

window.addEventListener('resize', myChart.resize);


if (option && typeof option === 'object') {
    myChart.setOption(option);
}

window.addEventListener('resize', myChart.resize);


if (option && typeof option === 'object') {
    myChart.setOption(option);
}

window.addEventListener('resize', myChart.resize);