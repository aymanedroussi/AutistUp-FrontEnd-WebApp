import { Component, OnInit } from '@angular/core';
import { Chart,registerables } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
chart:any;
  constructor() { }

  ngOnInit(): void {
    this.chart=document.getElementById("myChart");

    Chart.register(...registerables);
    this.loadChart();

  }
  loadChart():void{

    new Chart(this.chart,
      {
        type: 'line',
        data: {
          datasets:[{ 
            data :[12,22,21,40,50,150],
            backgroundColor: 
            'rgb(65,105,225)'
            ,
            borderColor: 'rgb(65,105,225)',
            label: 'Parents inscrits',
            
                  }]

                  ,
                  labels : [
                    'January',
                    'February',
                    'March',
                    'April',
                    'May',
                    'June',
                  ],
                 
                }  
                 
      }
      )

}
}