"use client"
import React, { useEffect, useRef, useState } from 'react';
import Vizzu from 'vizzu';

const Barchert = () => {

  // 初回表示
  const chartRef = useRef(null);
  const [sorted, setSorted] = useState(false);

  const data = {
    series: [
      { name: 'x', values: ['A', 'B', 'C', 'D', 'E'] },
      { name: 'y', values: [5, 10, 7, 3, 6] }
    ]
  };

  useEffect(() => {
    if (!chartRef.current) {
      const vizzuChart = new Vizzu('chart');
      chartRef.current = vizzuChart;

      vizzuChart.animate({
        data,
        config: {
          channels: {
            x: { set: 'y' },
            y: { set: 'x' }
          }
        },
        style: {
          logo: { width: 0 }
        }
      });
    }
  }, []);

  // 並び替え
  const handleSort = () => {
    if (!chartRef.current) return;

    const sortedIndices = [...data.series[1].values]
      .map((value, index) => ({ value, index }))
      .sort((a, b) => sorted ? a.value - b.value : b.value - a.value)
      .map(item => item.index);

    const sortedData = {
      series: [
        { name: 'x', values: sortedIndices.map(i => data.series[0].values[i]) },
        { name: 'y', values: sortedIndices.map(i => data.series[1].values[i]) }
      ]
    };
    setSorted(!sorted);

    chartRef.current.animate({
      data: sortedData,
      config: {
        channels: {
          x: { set: 'y' },
          y: { set: 'x' }
        }
      }
    });
  };

  // 画面描画
  return (
    <div>
      <button 
        onClick={handleSort}
        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
      >
        並び替え
      </button>
      <div id="chart" style={{ width: '600px', height: '400px' }}></div>
    </div>
  );
};

export default Barchert;