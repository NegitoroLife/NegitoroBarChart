"use client"
import React, { useEffect, useState } from 'react';
import Vizzu from 'vizzu';

const Barchert = () => {

  // 初回表示
  const [chart, setChart] = useState(null);
  const [sorted, setSorted] = useState(false);

  useEffect(() => {
    const vizzuChart = new Vizzu('chart');
    setChart(vizzuChart);

    const data = {
      series: [
        { name: 'x', values: ['A', 'B', 'C'] },
        { name: 'y', values: [5, 10, 7] }
      ]
    };

    vizzuChart.animate({
      data: data,
      config: {
        channels: {
          x: { set: 'x' },
          y: { set: 'y' }
        }
      }
    });
  }, []);


  // 並び替え
  const handleSort = () => {
    if (!chart) return;

    const originalData = [
      { x: 'A', y: 5 },
      { x: 'B', y: 10 },
      { x: 'C', y: 7 }
    ];

    const sortedData = [...originalData].sort((a, b) => sorted ? a.y - b.y : b.y - a.y);
    setSorted(!sorted);

    chart.animate({
      data: {
        series: [
          { name: 'x', values: sortedData.map(item => item.x) },
          { name: 'y', values: sortedData.map(item => item.y) }
        ]
      },
      config: {
        channels: {
          x: { set: 'x' },
          y: { set: 'y' }
        }
      }
    });
  };

  //画面描画
  return (
    <div>
      <button 
        onClick={handleSort}
        className={`px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded `}>
        並び替え
      </button>
      <div id="chart" style={{ width: '600px', height: '400px' }}></div>
    </div>
  );
};

export default Barchert;
