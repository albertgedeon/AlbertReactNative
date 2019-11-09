//
//  GraphView.swift
//  RNMobile
//
//  Created by Albert Gedeon on 11/8/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

import Foundation
import Charts
import UIKit

class GraphView: UIView{
  var chartView = BarChartView();
  @objc var yValues:[Double] = []
  @objc var xValues:[String] = []
  
  override init(frame: CGRect) {
    super.init(frame: frame)
  }
  
  required init?(coder: NSCoder) {
    fatalError("init(coder:) has not been implemented")
  }
  
  override public func layoutSubviews() {
    super.layoutSubviews()
    chartView.frame = CGRect(x: 0, y: 0, width: self.frame.width, height: self.frame.height)

    self.setupChart()
  }
  
  func setupChart() {
    var dataEntries: [BarChartDataEntry] = []

    for i in 0..<yValues.count {
      let dataEntry = BarChartDataEntry(x: Double(i), y: yValues[i])
      dataEntries.append(dataEntry)
    }

    let chartDataSet = BarChartDataSet(entries: dataEntries, label: "Revenue");
    let chartData = BarChartData(dataSet: chartDataSet)
    chartView.xAxis.valueFormatter = IndexAxisValueFormatter(values: xValues)
    chartView.data = chartData;
    chartView.animate(xAxisDuration: 2.0, yAxisDuration: 2.0)
    self.addSubview(chartView)
  }
}
