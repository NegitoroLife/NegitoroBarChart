"use client"
import React, { useEffect } from 'react';
import Vizzu from 'vizzu';

const Barchart = () => {
  useEffect(() => {
    const chart = new Vizzu('chart');

    const data = {
      series: [
        { name: 'x', values: ['A', 'B', 'C'] },
        { name: 'y', values: [5, 10, 7] }
      ]
    };

    chart.animate({
      data: data,
      config: {
        channels: {
          x: { set: 'x' },
          y: { set: 'y' }
        }
      }
    });
  }, []);

  return (
    <div>
      <div id="chart" style={{ width: '600px', height: '400px' }}></div>
    </div>
  );
};

export default Barchart;