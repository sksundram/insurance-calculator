import React, { Component } from 'react';
import 'chartjs-plugin-datalabels';
import 'chartjs-plugin-deferred';
import { Bar } from 'react-chartjs-2';

class Chart extends Component {
  state = {
    chartData: {
      labels: ['Estimated Cost today', 'Estimated Cost in 10 years'],
      datasets: [
        {
          label: 'Cost',
          data: [359000, 467000],
          backgroundColor: ['#49DCFA', '#00B5E1']
        }
      ]
    }
  };

  render() {
    return (
      <div className="chart" style={{ maxWidth: '600px' }}>
        <Bar
          data={this.state.chartData}
          options={{
            legend: {
              display: false
            },
            barThickness: '121',
            tooltips: false,
            plugins: {
              deferred: {
                delay: 3000
              },
              datalabels: {
                display: true,
                color: '#2A3536',
                anchor: 'end',
                align: 'end',
                offset: 4,
                formatter: function(value) {
                  return `$${value}`;
                }
              }
            },
            title: {
              text: 'Assumptions',
              display: true,
              position: 'bottom',
              fontColor: '#02B6E1'
            },
            maintainAspectRatio: true,
            scales: {
              xAxes: [
                {
                  maxBarThickness: 121
                }
              ],
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                    stepSize: 100000,
                    max: 500000,
                    callback: function(value) {
                      let ranges = [
                        { divider: 1e6, suffix: 'M' },
                        { divider: 1e3, suffix: 'k' }
                      ];
                      function formatNumber(n) {
                        for (let i = 0; i < ranges.length; i++) {
                          if (n >= ranges[i].divider) {
                            return (
                              (n / ranges[i].divider).toString() +
                              ranges[i].suffix
                            );
                          }
                        }
                        return n;
                      }
                      return '$' + formatNumber(value);
                    }
                  }
                }
              ]
            }
          }}
        />

        <p>
          A serious illness with recovery lasting 12 months could put your
          finances down by $359,000 today and by $467,000 in 10 years.
        </p>
      </div>
    );
  }
}

export default Chart;
