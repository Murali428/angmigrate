import { Component } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';

import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angmigrate';
  myImg:any

  constructor() {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }



  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = [['Download', 'Sales'], ['In', 'Store', 'Sales'], 'Mail Sales'];
  public pieChartData: SingleDataSet = [600, 500, 100];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];



  timePeriods = [
    'Bronze age',
    'Iron age',
    'Middle ages',
    'Early modern period',
    'Long nineteenth century'
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.timePeriods, event.previousIndex, event.currentIndex);
  }

  zoomin(){
    this. myImg = document.getElementById("map");
    var currWidth = this.myImg.clientWidth;
    if(currWidth == 2500) 
    return false;
     else{
       return  this.myImg.style.width = (currWidth + 100) + "px";
         
    } 
}
 zoomout(){
   this.myImg = document.getElementById("map");
    var currWidth = this.myImg.clientWidth;
    if(currWidth == 100) return false;
 else{
       return this.myImg.style.width = (currWidth - 100) + "px";
    }
}

    drops(ev:any) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    console.log("d",data)
    ev.target.appendChild(document.getElementById(data));
  }

  allowDrop(ev:any) {
    ev.preventDefault();
  }

  drag(ev:any) {
    ev.dataTransfer.setData("text", ev.target.id);
  }

}

