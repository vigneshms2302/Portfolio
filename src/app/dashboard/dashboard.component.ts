import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import * as echarts from 'echarts';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';


// interface CustomNode extends Node {
//   color: string;
//   textColor: string;
// }

interface Project {
  name: string;
  description: string;
  category: string;
  status: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  nodes: any[] = [
    { id: 'node1', label: 'HTML', data: { color: '#4fcbeb', textColor: '#4fcbeb' } },
    { id: 'node2', label: 'CSS', data: { color: '#4fcbeb', textColor: '#4fcbeb' } },
    { id: 'node3', label: 'JavaScript', data: { color: '#4fcbeb', textColor: '#4fcbeb' } },
    { id: 'node4', label: 'Angular', data: { color: '#4fcbeb', textColor: '#4fcbeb' } },
    { id: 'node5', label: 'TypeScript', data: { color: '#4fcbeb', textColor: '#4fcbeb' } },
    { id: 'node6', label: 'UI/UX Design', data: { color: '#4fcbeb', textColor: '#4fcbeb' } }
  ];
  

  links: any[] = [
    { source: 'node1', target: 'node4' },
    { source: 'node2', target: 'node4' },
    { source: 'node3', target: 'node4' },
    { source: 'node3', target: 'node5' },
    { source: 'node6', target: 'node4' },
    { source: 'node6', target: 'node5' }
  ];
  
  displayedColumns: string[] = ['project', 'description', 'category', 'status'];
  dataSource!: MatTableDataSource<Project>;


  
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(@Inject(DOCUMENT) private doc: Document) {}
  ngOnInit() {
    const barChart = echarts.init(this.doc.getElementById('bar-chart') as HTMLElement);
    const pieChart = echarts.init(this.doc.getElementById('pie-chart') as HTMLElement);
    const areaChart = echarts.init(this.doc.getElementById('area-chart') as HTMLElement);
    const lineChart = echarts.init(this.doc.getElementById('line-chart') as HTMLElement);
    const pointChart = echarts.init(this.doc.getElementById('point-chart') as HTMLElement);
    const stackedChart = echarts.init(this.doc.getElementById('stacked-chart') as HTMLElement);
    const donutChart = echarts.init(this.doc.getElementById('donut-chart') as HTMLElement);
    const scatterChart = echarts.init(this.doc.getElementById('scatter-chart') as HTMLElement);
    const gaugeChart = echarts.init(this.doc.getElementById('gauge-chart') as HTMLElement);
    const polarChart = echarts.init(this.doc.getElementById('polar-chart') as HTMLElement);
    const treemapChart = echarts.init(this.doc.getElementById('treemap-chart') as HTMLElement);
    const stockChart = echarts.init(this.doc.getElementById('stock-chart') as HTMLElement);
    const financialChart = echarts.init(this.doc.getElementById('financial-chart') as HTMLElement);
    // const mapChart = echarts.init(this.doc.getElementById('map-chart') as HTMLElement);

 
// Create a new instance of the Map chart
// const mapChart = echarts.init(this.doc.getElementById('map-chart') as HTMLElement);

// Define the data for the map chart
// const mapData = [
//   { name: 'New York', value: 100 },
//   { name: 'Los Angeles', value: 80 },
//   { name: 'Chicago', value: 70 },
  // Add more data as needed
// ];

// Configure the options for the map chart
// const mapOptions = {
//   title: {
//     text: 'Map Data',
//     left: 'center',
//     textStyle: {
//       fontSize: 24
//     }
//   },
//   tooltip: {
//     trigger: 'item',
//     formatter: '{b}: {c}'
//   },
//   visualMap: {
//     min: 0,
//     max: 100,
//     left: 'left',
//     top: 'bottom',
//     text: ['High', 'Low'],
//     textStyle: {
//       color: '#777'
//     },
//     calculable: true
//   },
//   series: [
//     {
//       name: 'Map Data',
//       type: 'map',
      // map: 'usa', // Assuming you have loaded the 'usa' map data
      // data: mapData
    // }
  // ]
// };

// Set the options to the map chart
// mapChart.setOption(mapOptions);




    
// Create a new instance of the Financial chart


// Define the data for the financial chart
const financialData = [
  ['2019-01-01', 100, 120, 90, 110],
  ['2019-01-02', 110, 115, 95, 105],
  ['2019-01-03', 105, 130, 100, 125],
  // Add more data as needed
];

// Configure the options for the financial chart
const financialOptions = {
  title: {
    text: 'Financial Data',
    left: 'center',
    textStyle: {
      fontSize: 24
    }
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross'
    }
  },
  xAxis: {
    type: 'time',
    axisLabel: {
      formatter: '{value}',
      color: '#777'
    }
  },
  yAxis: {
    type: 'value',
    axisLabel: {
      formatter: '{value}',
      color: '#777'
    }
  },
  series: [
    {
      name: 'Financial Data',
      type: 'candlestick',
      data: financialData,
      itemStyle: {
        color: '#4fcbeb', // Adjust candlestick color
        color0: '#ff5757', // Adjust candlestick fill color for negative values
        borderColor: '#4fcbeb', // Adjust border color of candlestick
        borderColor0: '#ff5757' // Adjust border color of candlestick for negative values
      }
    }
  ]
};

// Set the options to the financial chart
financialChart.setOption(financialOptions);

    // Define the data for the stock chart
const stockData = [
  [2320.26, 2302.6, 2287.3, 2362.94],
  [2300, 2291.3, 2288.26, 2308.38],
  [2295.35, 2346.5, 2295.35, 2346.92],
  [2347.22, 2358.98, 2337.35, 2363.8],
  [2360.75, 2382.48, 2347.89, 2383.76],
  [2383.43, 2385.42, 2371.23, 2391.82],
  [2377.41, 2419.02, 2369.57, 2421.15],
  [2425.92, 2428.15, 2417.58, 2440.38],
  [2411, 2433.13, 2403.3, 2437.42],
  [2432.68, 2334.48, 2427.7, 2441.73],
  [2430.69, 2418.53, 2394.22, 2433.89],
  [2416.62, 2432.4, 2414.4, 2443.03],
  [2441.91, 2421.56, 2418.43, 2444.8],
  [2420.26, 2382.91, 2373.53, 2427.07],
  [2383.49, 2397.18, 2370.61, 2397.94],
  [2378.82, 2325.95, 2309.17, 2378.82],
  [2322.94, 2314.16, 2308.76, 2330.88],
  [2320.62, 2325.82, 2315.01, 2338.78],
  [2313.74, 2293.34, 2289.89, 2340.71],
  [2297.77, 2313.22, 2292.03, 2324.63],
  [2322.32, 2365.59, 2308.92, 2366.16],
  [2364.54, 2359.51, 2330.86, 2369.65],
  [2332.08, 2273.4, 2259.25, 2333.54],
  [2274.81, 2326.31, 2270.1, 2328.14],
  [2333.61, 2347.18, 2321.6, 2351.44],
  [2340.44, 2324.29, 2304.27, 2352.02],
  [2326.42, 2318.61, 2314.59, 2333.67],
  [2314.68, 2310.59, 2296.58, 2320.96],
  [2309.16, 2286.6, 2264.83, 2333.29],
  [2282.17, 2263.97, 2253.25, 2286.33],
  [2255.77, 2270.28, 2253.31, 2276.22],
];

// Configure the options for the stock chart
const stockOptions = {
  title: {
    text: 'Stock Chart',
    left: 'center',
    textStyle: {
      fontSize: 24
    }
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross'
    }
  },
  xAxis: {
    type: 'category',
    data: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7', 'Day 8', 'Day 9', 'Day 10',
           'Day 11', 'Day 12', 'Day 13', 'Day 14', 'Day 15', 'Day 16', 'Day 17', 'Day 18', 'Day 19', 'Day 20',
           'Day 21', 'Day 22', 'Day 23', 'Day 24', 'Day 25', 'Day 26', 'Day 27', 'Day 28', 'Day 29', 'Day 30'],
    axisLabel: {
      formatter: 'Day {value}'
    }
  },
  yAxis: {
    type: 'value',
    scale: true,
    splitArea: {
      show: true
    }
  },
  grid: {
    bottom: '15%'
  },
  series: [
    {
      type: 'candlestick',
      data: stockData,
      itemStyle: {
        color: '#ec0000', // Adjust color for stock items
        color0: '#00da3c', // Adjust color for stock items
        borderColor: '#8A0000', // Adjust color for stock borders
        borderColor0: '#008F28' // Adjust color for stock borders
      }
    }
  ]
};

// Create a new instance of the Stock chart
const stockChartElement = this.doc.getElementById('stock-chart');
if (stockChartElement) {
  const stockChart = echarts.init(stockChartElement);

  // Set the options to the Stock chart
  stockChart.setOption(stockOptions);
}

    // Configure the options for the treemap chart with different colors for each category
const treemapOptions = {
  title: {
    text: 'Treemap Chart',
    left: 'center',
    textStyle: {
      fontSize: 24
    }
  },
  tooltip: {
    trigger: 'item',
    formatter: '{b}: {c}'
  },
  series: [
    {
      type: 'treemap',
      data: [
        {
          name: 'Category 1',
          value: 30,
          itemStyle: {
            color: '#4fcbeb' // Adjust color for category 1
          }
        },
        {
          name: 'Category 2',
          value: 50,
          itemStyle: {
            color: '#ff8000' // Adjust color for category 2
          }
        },
        {
          name: 'Category 3',
          value: 20,
          itemStyle: {
            color: '#ff3333' // Adjust color for category 3
          }
        }
      ],
      label: {
        show: true,
        formatter: '{b}'
      }
    }
  ]
};

// Create a new instance of the Treemap chart
const treemapChartElement = this.doc.getElementById('treemap-chart');
if (treemapChartElement) {
  const treemapChart = echarts.init(treemapChartElement);

  // Set the options to the Treemap chart
  treemapChart.setOption(treemapOptions);
}


// Configure the options for the polar chart
const polarOptions = {
  title: {
    text: 'Polar Chart',
    left: 'center',
    textStyle: {
      fontSize: 24
    }
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross'
    }
  },
  polar: {
    radius: '70%'
  },
  angleAxis: {
    type: 'category',
    data: ['A', 'B', 'C', 'D', 'E', 'F'],
    boundaryGap: false,
    splitLine: {
      show: true,
      lineStyle: {
        color: '#999', // Adjust split line color
        type: 'dashed'
      }
    },
    axisLine: {
      show: false
    }
  },
  radiusAxis: {
    axisLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    axisLabel: {
      color: '#777' // Adjust axis label color
    }
  },
  series: [
    {
      type: 'bar',
      data: [40, 50, 60, 70, 80, 90],
      coordinateSystem: 'polar',
      name: 'Series 1',
      itemStyle: {
        color: '#4fcbeb' // Adjust bar color
      }
    }
  ]
};

// Create a new instance of the Polar chart
const polarChartElement = this.doc.getElementById('polar-chart');
if (polarChartElement) {
  const polarChart = echarts.init(polarChartElement);

  // Set the options to the Polar chart
  polarChart.setOption(polarOptions);
}


// Configure the options for the gauge chart
const gaugeOptions = {
  title: {
    text: 'Gauge Chart',
    left: 'center',
    textStyle: {
      fontSize: 24
    }
  },
  tooltip: {
    formatter: '{a} <br/>{b} : {c}%'
  },
  series: [
    {
      type: 'gauge',
      startAngle: 180,
      endAngle: 0,
      pointer: {
        show: false
      },
      axisLine: {
        lineStyle: {
          width: 20,
          color: [[0.3, '#4fcbeb'], [0.7, '#eee'], [1, '#999']] // Adjust gauge colors
        }
      },
      axisTick: {
        splitNumber: 10,
        length: 12,
        lineStyle: {
          color: 'auto'
        }
      },
      splitLine: {
        length: 20,
        lineStyle: {
          color: 'auto'
        }
      },
      axisLabel: {
        color: '#777',
        distance: -40,
        fontSize: 12
      },
      detail: {
        valueAnimation: true,
        formatter: '{value}%', // Display gauge value
        fontSize: 24,
        offsetCenter: [0, '60%']
      },
      data: [
        {
          value: 50, // Set initial value for the gauge
          name: 'Completion'
        }
      ]
    }
  ]
};

// Create a new instance of the Gauge chart
const gaugeChartElement = this.doc.getElementById('gauge-chart');
if (gaugeChartElement) {
  const gaugeChart = echarts.init(gaugeChartElement);

  // Set the options to the Gauge chart
  gaugeChart.setOption(gaugeOptions);
}






    // Define the data for the scatter chart
const scatterData = [
  [10.0, 8.04],
  [8.0, 6.95],
  [13.0, 7.58],
  [9.0, 8.81],
  [11.0, 8.33],
  [14.0, 9.96],
  [6.0, 7.24],
  [4.0, 4.26],
  [12.0, 10.84],
  [7.0, 4.82],
  [5.0, 5.68]
];

// Configure the options for the scatter chart
const scatterOptions = {
  title: {
    text: 'Scatter Chart',
    left: 'center',
    textStyle: {
      fontSize: 24
    }
  },
  tooltip: {
    trigger: 'item',
    formatter: '{c}'
  },
  xAxis: {
    type: 'value',
    axisLine: {
      lineStyle: {
        color: '#999' // Adjust x-axis line color
      }
    },
    axisLabel: {
      color: '#777' // Adjust x-axis label color
    }
  },
  yAxis: {
    type: 'value',
    axisLine: {
      lineStyle: {
        color: '#999' // Adjust y-axis line color
      }
    },
    axisLabel: {
      color: '#777' // Adjust y-axis label color
    }
  },
  series: [
    {
      symbolSize: 10, // Adjust symbol size
      data: scatterData,
      type: 'scatter',
      itemStyle: {
        color: '#4fcbeb' // Adjust symbol color
      }
    }
  ]
};

// Create a new instance of the Scatter chart
const scatterChartElement = this.doc.getElementById('scatter-chart');
if (scatterChartElement) {
  const scatterChart = echarts.init(scatterChartElement);

  // Set the options to the Scatter chart
  scatterChart.setOption(scatterOptions);
}


// Define the data for the donut chart
const donutData = [
  { value: 30, name: 'Category 1' },
  { value: 20, name: 'Category 2' },
  { value: 50, name: 'Category 3' },
];

// Configure the options for the donut chart
const donutOptions = {
  title: {
    text: 'Category Distribution',
    left: 'center',
    textStyle: {
      fontSize: 24
    }
  },
  tooltip: {
    trigger: 'item',
    formatter: '{b}: {c} ({d}%)'
  },
  series: [
    {
      name: 'Categories',
      type: 'pie',
      radius: ['50%', '70%'],
      center: ['50%', '50%'],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: '20',
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: donutData,
      color: ['#4fcbeb', '#ffcd56', '#00ff00'] // Update colors here
    }
  ]
};

// Create a new instance of the Donut chart
const donutChartOptions = echarts.init(this.doc.getElementById('donut-chart') as HTMLElement);

// Set the options to the Donut chart
donutChartOptions.setOption(donutOptions);

    
    // Define the data for the stacked chart
    const stackedData = [
      { year: '2015', value1: 100, value2: 80 },
      { year: '2016', value1: 120, value2: 100 },
      { year: '2017', value1: 140, value2: 120 },
      { year: '2018', value1: 160, value2: 140 },
      { year: '2019', value1: 180, value2: 160 },
      { year: '2020', value1: 200, value2: 180 },
      { year: '2021', value1: 220, value2: 200 },
    ];

    // Configure the options for the stacked chart
    const stackedOptions = {
      title: {
        text: 'Stacked Chart',
        left: 'center',
        textStyle: {
          fontSize: 24
        }
      },
      tooltip: {
        trigger: 'axis',
        formatter: '{b}: {c}',
        backgroundColor: 'rgba(50, 50, 50, 0.7)', // Adjust tooltip background color
        textStyle: {
          color: '#fff', // Adjust tooltip text color
        },
      },
      grid: {
        top: '15%', // Add some spacing from the top
        left: '3%',
        right: '3%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: stackedData.map(item => item.year),
        axisTick: {
          alignWithLabel: true, // Show axis ticks below the labels
        },
        axisLabel: {
          color: '#777', // Adjust x-axis label color
        },
      },
      yAxis: {
        type: 'value',
        axisLine: {
          lineStyle: {
            color: '#999', // Adjust y-axis line color
          },
        },
        axisLabel: {
          color: '#777', // Adjust y-axis label color
        },
      },
      series: [
        {
          name: 'Value 1',
          type: 'bar',
          stack: 'stacked',
          barWidth: '50%',
          data: stackedData.map(item => item.value1),
          itemStyle: {
            color: '#4fcbeb', // Adjust bar color
          },
        },
        {
          name: 'Value 2',
          type: 'bar',
          stack: 'stacked',
          barWidth: '50%',
          data: stackedData.map(item => item.value2),
          itemStyle: {
            color: '#ffcd56', // Adjust bar color
          },
        },
      ],
    };

    // Set the options to the stacked chart
    stackedChart.setOption(stackedOptions);


    // Define the data for the point chart
    const pointData = [
      { year: '2015', value: 100 },
      { year: '2016', value: 120 },
      { year: '2017', value: 140 },
      { year: '2018', value: 160 },
      { year: '2019', value: 180 },
      { year: '2020', value: 200 },
      { year: '2021', value: 220 },
    ];

    // Configure the options for the point chart
    const pointOptions = {
      title: {
        text: 'Point Chart',
        left: 'center',
        textStyle: {
          fontSize: 24
        }
      },
      tooltip: {
        trigger: 'axis',
        formatter: '{b}: {c}',
        backgroundColor: 'rgba(50, 50, 50, 0.7)', // Adjust tooltip background color
        textStyle: {
          color: '#fff', // Adjust tooltip text color
        },
      },
      grid: {
        top: '15%', // Add some spacing from the top
        left: '3%',
        right: '3%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: pointData.map(item => item.year),
        axisTick: {
          alignWithLabel: true, // Show axis ticks below the labels
        },
        axisLabel: {
          color: '#777', // Adjust x-axis label color
        },
      },
      yAxis: {
        type: 'value',
        axisLine: {
          lineStyle: {
            color: '#999', // Adjust y-axis line color
          },
        },
        axisLabel: {
          color: '#777', // Adjust y-axis label color
        },
      },
      series: [
        {
          name: 'Value',
          type: 'scatter',
          data: pointData.map(item => [item.year, item.value]),
          symbol: 'circle', // Show symbols at data points
          symbolSize: 8, // Adjust symbol size
          itemStyle: {
            color: '#4fcbeb', // Adjust symbol color
            borderColor: '#fff', // Adjust symbol border color
            borderWidth: 2, // Increase symbol border width
          },
        },
      ],
    };

    // Set the options to the point chart
    pointChart.setOption(pointOptions);

    // Define the data for the line chart
    const lineData = [
      { year: '2015', value: 100 },
      { year: '2016', value: 120 },
      { year: '2017', value: 140 },
      { year: '2018', value: 160 },
      { year: '2019', value: 180 },
      { year: '2020', value: 200 },
      { year: '2021', value: 220 },
    ];

    // Configure the options for the line chart
    const lineOptions = {
      title: {
        text: 'Line Chart',
        left: 'center',
        textStyle: {
          fontSize: 24
        }
      },
      tooltip: {
        trigger: 'axis',
        formatter: '{b}: {c}',
        backgroundColor: 'rgba(50, 50, 50, 0.7)', // Adjust tooltip background color
        textStyle: {
          color: '#fff', // Adjust tooltip text color
        },
      },
      grid: {
        top: '15%', // Add some spacing from the top
        left: '3%',
        right: '3%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: lineData.map(item => item.year),
        axisTick: {
          alignWithLabel: true, // Show axis ticks below the labels
        },
        axisLabel: {
          color: '#777', // Adjust x-axis label color
        },
      },
      yAxis: {
        type: 'value',
        axisLine: {
          lineStyle: {
            color: '#999', // Adjust y-axis line color
          },
        },
        axisLabel: {
          color: '#777', // Adjust y-axis label color
        },
      },
      series: [
        {
          name: 'Value',
          type: 'line',
          smooth: true,
          lineStyle: {
            color: '#4fcbeb', // Adjust line color
            width: 2, // Increase line width
          },
          data: lineData.map(item => item.value),
          symbol: 'circle', // Show symbols at data points
          symbolSize: 8, // Adjust symbol size
          itemStyle: {
            color: '#4fcbeb', // Adjust symbol color
            borderColor: '#fff', // Adjust symbol border color
            borderWidth: 2, // Increase symbol border width
          },
        },
      ],
    };

    // Set the options to the line chart
    lineChart.setOption(lineOptions);
    // Define the data for the bar chart
    const barData = [
      { value: 90, name: 'Project 1' },
      { value: 80, name: 'Project 2' },
      { value: 70, name: 'Project 3' },
      { value: 60, name: 'Project 4' },
      { value: 50, name: 'Project 5' }
    ];

    // Configure the options for the bar chart
    const barOptions = {
      title: {
        text: 'Projects',
        left: 'center',
        textStyle: {
          fontSize: 24
        }
      },
      tooltip: {
        trigger: 'item',
        formatter: '{b}: {c}'
      },
      xAxis: {
        type: 'category',
        data: ['Project 1', 'Project 2', 'Project 3', 'Project 4', 'Project 5']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: 'Projects',
          type: 'bar',
          data: barData,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          },
          itemStyle: {
            color: '#4fcbeb' // Match the color of the area chart
          }
        }
      ]
    };

    // Set the options to the bar chart
    barChart.setOption(barOptions);

// Define the data for the pie chart
const pieData = [
  { value: 25, name: 'HTML' },
  { value: 25, name: 'CSS' },
  { value: 25, name: 'JavaScript' },
  { value: 25, name: 'Python' },
  // { value: 10, name: 'Java' }
];

// Configure the options for the pie chart
const pieOptions = {
  title: {
    text: 'Programming Languages',
    left: 'center',
    textStyle: {
      fontSize: 24
    }
  },
  tooltip: {
    trigger: 'item',
    formatter: '{b}: {c} ({d}%)'
  },
  series: [
    {
      name: 'Languages',
      type: 'pie',
      radius: '70%',
      center: ['50%', '50%'],
      data: pieData,
      emphasis: {
        label: {
          textBorderColor: 'transparent',
        },
        itemStyle: {
          color: 'white' // Match the color of the area chart
        }
      },
      label: {
        formatter: '{b}: {c} ({d}%)',
        textStyle: {
          fontSize: 12,
          fontWeight: 'bold',
          color: '#fff' // Adjust label text color
        }
      },
      color: ['#00ff00', '#000000']








      // Update colors here
    }
  ]
};

// Set the options to the pie chart
pieChart.setOption(pieOptions);


    // Define the data for the area chart
    const areaData = [
      { year: '2015', value: 100 },
      { year: '2016', value: 120 },
      { year: '2017', value: 140 },
      { year: '2018', value: 160 },
      { year: '2019', value: 180 },
      { year: '2020', value: 200 },
      { year: '2021', value: 220 },
    ];

    // Configure the options for the area chart
    const areaOptions = {
      title: {
        text: 'Growth Over Time',
        left: 'center',
        textStyle: {
          fontSize: 24,
          fontWeight: 'bold', // Add font weight for emphasis
        },
      },
      tooltip: {
        trigger: 'axis',
        formatter: '{b}: {c}',
        backgroundColor: 'rgba(50, 50, 50, 0.7)', // Adjust tooltip background color
        textStyle: {
          color: '#fff', // Adjust tooltip text color
        },
      },
      grid: {
        top: '15%', // Add some spacing from the top
        left: '3%',
        right: '3%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: areaData.map(item => item.year),
        axisTick: {
          alignWithLabel: true, // Show axis ticks below the labels
        },
        axisLabel: {
          color: '#777', // Adjust x-axis label color
        },
      },
      yAxis: {
        type: 'value',
        axisLine: {
          lineStyle: {
            color: '#999', // Adjust y-axis line color
          },
        },
        axisLabel: {
          color: '#777', // Adjust y-axis label color
        },
      },
      series: [
        {
          name: 'Growth',
          type: 'line',
          smooth: true,
          areaStyle: {
            color: 'rgba(79, 203, 235, 0.4)', // Adjust area fill color and opacity
          },
          lineStyle: {
            color: '#4fcbeb', // Adjust line color
            width: 2, // Increase line width
          },
          data: areaData.map(item => item.value),
          symbol: 'circle', // Show symbols at data points
          symbolSize: 8, // Adjust symbol size
          itemStyle: {
            color: '#4fcbeb', // Adjust symbol color
            borderColor: '#fff', // Adjust symbol border color
            borderWidth: 2, // Increase symbol border width
          },
        },
      ],
    };

    // Set the options to the area chart
    areaChart.setOption(areaOptions);

    // Define the projects data
    const projects: Project[] = [
      {
        name: 'Project 1',
        description: 'Description of Project 1',
        category: 'Category 1',
        status: 'In Progress'
      },
      {
        name: 'Project 2',
        description: 'Description of Project 2',
        category: 'Category 2',
        status: 'Completed'
      },
      {
        name: 'Project 3',
        description: 'Description of Project 3',
        category: 'Category 1',
        status: 'In Progress'
      },
      {
        name: 'Project 4',
        description: 'Description of Project 4',
        category: 'Category 3',
        status: 'Completed'
      }
      // Add more projects as needed
    ];





    
    this.dataSource = new MatTableDataSource<Project>(projects);
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}









// import { Component, OnInit, Inject } from '@angular/core';
// import { DOCUMENT } from '@angular/common';
// import * as echarts from 'echarts';

// @Component({
//   selector: 'app-dashboard',
//   templateUrl: './dashboard.component.html',
//   styleUrls: ['./dashboard.component.css']
// })
// export class DashboardComponent implements OnInit {
//   constructor(@Inject(DOCUMENT) private doc: Document) {}

//   ngOnInit() {
//     const barChart = echarts.init(this.doc.getElementById('bar-chart') as HTMLElement);
//     const pieChart = echarts.init(this.doc.getElementById('pie-chart') as HTMLElement);

  
//     const barData = [
//       { value: 90, name: 'Project 1' },
//       { value: 80, name: 'Project 2' },
//       { value: 70, name: 'Project 3' },
//       { value: 60, name: 'Project 4' },
//       { value: 50, name: 'Project 5' }
//     ];

    
//     const barOptions = {
//       title: {
//         text: 'Projects',
//         left: 'center',
//         textStyle: {
//           fontSize: 24
//         }
//       },
//       tooltip: {
//         trigger: 'item',
//         formatter: '{b}: {c}'
//       },
//       xAxis: {
//         type: 'category',
//         data: ['Project 1', 'Project 2', 'Project 3', 'Project 4', 'Project 5']
//       },
//       yAxis: {
//         type: 'value'
//       },
//       series: [
//         {
//           name: 'Projects',
//           type: 'bar',
//           data: barData,
//           emphasis: {
//             itemStyle: {
//               shadowBlur: 10,
//               shadowOffsetX: 0,
//               shadowColor: 'rgba(0, 0, 0, 0.5)'
//             }
//           }
//         }
//       ]
//     };

    
//     barChart.setOption(barOptions);

  
//     const pieData = [
//       { value: 30, name: 'HTML' },
//       { value: 25, name: 'CSS' },
//       { value: 20, name: 'JavaScript' },
//       { value: 15, name: 'Python' },
//       { value: 10, name: 'Java' }
//     ];

    
// const pieOptions = {
//   title: {
//     text: 'Programming Languages',
//     left: 'center',
//     textStyle: {
//       fontSize: 24
//     }
//   },
//   tooltip: {
//     trigger: 'item',
//     formatter: '{b}: {c} ({d}%)'
//   },
//   series: [
//     {
//       name: 'Languages',
//       type: 'pie',
//       radius: '70%',
//       center: ['50%', '50%'],
//       data: pieData,
//       emphasis: {
//         label: {
//           textBorderColor: 'transparent',
      
//         },
//         itemStyle: {
          
//         }
//       },
//       label: {
//         formatter: '{b}: {c} ({d}%)',
//         textStyle: {
//           fontSize: 12,
//           fontWeight: 'bold'
//         }
//       }
//     }
//   ]
// };


   
//     pieChart.setOption(pieOptions);
//   }
// }






// import { Component, OnInit, Inject } from '@angular/core';
// import { DOCUMENT } from '@angular/common';
// import * as echarts from 'echarts';

// @Component({
//   selector: 'app-dashboard',
//   templateUrl: './dashboard.component.html',
//   styleUrls: ['./dashboard.component.css']
// })
// export class DashboardComponent implements OnInit {
//   constructor(@Inject(DOCUMENT) private doc: Document) {}

//   ngOnInit() {
//     const chart = echarts.init(this.doc.getElementById('programming-languages-chart') as HTMLElement);

//     // Define the data for the pie chart
//     const data = [
//       { value: 30, name: 'HTML' },
//       { value: 25, name: 'CSS' },
//       { value: 20, name: 'JavaScript' },
//       { value: 15, name: 'Python' },
//       { value: 10, name: 'Java' }
//     ];

//     // Configure the options for the pie chart
//     const options = {
//       title: {
//         text: 'Programming Languages',
//         left: 'center',
//         textStyle: {
//           fontSize: 24
//         }
//       },
//       tooltip: {
//         trigger: 'item',
//         formatter: '{b}: {c} ({d}%)'
//       },
//       series: [
//         {
//           name: 'Languages',
//           type: 'pie',
//           radius: '70%',
//           data: data,
//           emphasis: {
//             itemStyle: {
//               shadowBlur: 10,
//               shadowOffsetX: 0,
//               shadowColor: 'rgba(0, 0, 0, 0.5)'
//             }
//           },
//           label: {
//             formatter: '{b}: {c} ({d}%)'
//           }
//         }
//       ]
//     };

//     // Set the options to the chart
//     chart.setOption(options);
//   }
  
// }

// import { Component, OnInit, Inject } from '@angular/core';
// import { DOCUMENT } from '@angular/common';
// import * as echarts from 'echarts';

// @Component({
//   selector: 'app-dashboard',
//   templateUrl: './dashboard.component.html',
//   styleUrls: ['./dashboard.component.css']
// })
// export class DashboardComponent implements OnInit {
//   constructor(@Inject(DOCUMENT) private doc: Document) {}

//   ngOnInit() {
//     const programmingLanguagesChart = echarts.init(this.doc.getElementById('programming-languages-chart') as HTMLElement);
//     const programmingLanguagesOption = {
//       title: {
//         text: 'Programming Languages'
//       },
//       xAxis: {
//         type: 'category',
//         data: ['HTML', 'CSS', 'JavaScript', 'Python', 'Java'],
//         axisLabel: {
//           textStyle: {
//             fontWeight: 'normal'
//           }
//         }
//       },
//       yAxis: {
//         type: 'value',
//         axisLabel: {
//           textStyle: {
//             fontWeight: 'normal'
//           }
//         }
//       },
//       series: [{
//         data: [30, 25, 40, 20, 35],
//         type: 'bar'
//       }]
//     };

//     programmingLanguagesChart.setOption(programmingLanguagesOption);
//   }
// }
