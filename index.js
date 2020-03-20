var data = [
    ['java', 1, '降', '-0.01%'],
    ['C', 2, '升', '+2.44%'],
    ['Python', 3, '升', '+1.41%'],
    ['C++', 4, '降', '-2.58%'],
    ['C#', 5, '升', '+2.07%'],
    ['Visual Basic .NET', 6,'降', '-1.17%'],
    ['JavaScript', 7, '降', '-0.85%'],
  ];
  
  var container = document.getElementById('example');
  var hot = new Handsontable(container, {
    data: data,
    filters: true,
    colWidths: [160,160,160,160],
    rowHeights: [50,50,50,50,50,50,50,50],
    manualColumnResize: true,
    manualRowResize: true,
    colHeaders:['语言名称', '排名', '升或降', '变化幅度'],
    className: "htCenter htMiddle"
  });


  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('main'));

  // 指定图表的配置项和数据
  var option = {
      title: {
          text: 'JavaScript语言排名变化'
      },
      tooltip: {},
      legend: {
          
      },
      xAxis: {
          data: [2000,2005,2010,2015,2020]
      },
      yAxis: {},
      series: [{
          type: 'line',
          data: [6,9,8,8,7]
      }]
  };
  myChart.setOption(option);