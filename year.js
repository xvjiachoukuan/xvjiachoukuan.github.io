var myChart = echarts.init(document.getElementById('myYearChart'));
var dataset = {
    dimensions: ["年龄段", "人数"],
    source: [
        { 年龄段: "0-20", 人数: 282 },
        { 年龄段: "21-30", 人数: 367 },
        { 年龄段: "31-40", 人数: 191 },
        { 年龄段: "41-50", 人数: 55 },
        { 年龄段: "51-60", 人数: 28 },
        { 年龄段: "61-70", 人数: 9 },
        { 年龄段: "71-80", 人数: 6 }
    ]
}
function series(){
    const s = []
    for (var i = 0; i < dataset.dimensions.length-1; i++) {
        const dim = dataset.dimensions[(i+1)]
        s.push({
            type: 'scatter',
            symbolSize: function (data) {
                const size = Math.sqrt(data[dim])
                let retSize = 0
                if(size < 500){
                    retSize = size
                }else{
                    retSize = size
                }
                //  控制散点大小
                return retSize>=200?200:retSize<20?retSize+5:retSize
            },
            emphasis: {
                label: {
                    show: true,
                    position: 'top'
                }
            },
            itemStyle: {
                shadowBlur: 10,
                shadowOffsetY: 5,
                shadowOffsetX: -5,
            }
        })
    }
    return s
}

option = {
    xAxis: {
        type: 'category'
    },
    yAxis: {
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        },
        scale: true
    },
    legend:{
        right: 10
    },
    // tooltip:{trigger:'axis'},
    dataset: dataset,
    series: series()
};
myChart.setOption(option, true);

window.onresize = function(){
    myChart.resize();}