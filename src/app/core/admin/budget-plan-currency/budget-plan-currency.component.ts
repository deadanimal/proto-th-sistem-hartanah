import {
  Component,
  OnInit,
  NgZone,
  OnDestroy,
  TemplateRef,
} from "@angular/core";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_dataviz from "@amcharts/amcharts4/themes/dataviz";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import swal from "sweetalert2";
import { any } from "@amcharts/amcharts4/.internal/core/utils/Array";

export enum SelectionType {
  single = "single",
  multi = "multi",
  multiClick = "multiClick",
  cell = "cell",
  checkbox = "checkbox",
}

@Component({
  selector: "app-budget-plan-currency",
  templateUrl: "./budget-plan-currency.component.html",
  styleUrls: ["./budget-plan-currency.component.scss"],
})
export class BudgetPlanCurrencyComponent implements OnInit, OnDestroy {
  // Chart
  private chart1: any;
  private chart2: any;
  private chart3: any;
  private chart4: any;

  //table
  entries: number = 5;
  selected: any[] = [];
  temp = [];
  activeRow: any;
  rows: any = [
    {
      accNo: "ACC-719-MOX",
      debit: "849.19",
      credit: "754.16",
      netMove: "595.03",
      date: "2011/04/25",
      salary: "$320,800",
      type: "RFI",
      category: "Category 1",
      status: "opened",
      duedate: "2019/06/25",
      coin: "23",
      remark: "Need to improve the design",
    },
    {
      accNo: "ACC-119-VLJ",
      debit: "785.51",
      credit: "795.16",
      netMove: "314.71",
      date: "2011/07/25",
      salary: "$170,750",
      type: "RFP",
      category: "Category 3",
      status: "opened",
      duedate: "2015/03/21",
      coin: "73",
      remark: "Done successfully",
    },
    {
      accNo: "ACC-635-KDJ",
      debit: "107",
      credit: "22.37",
      netMove: "426.32",
      date: "2009/01/12",
      salary: "$86,000",
      type: "RFQ",
      category: "Category 2",
      status: "archived",
      duedate: "2011/07/25",
      coin: "30",
      remark: "This project postponed due to pandemic Covid19",
    },
  ];
  SelectionType = SelectionType;

  constructor(private zone: NgZone) {
    this.temp = this.rows.map((prop, key) => {
      return {
        ...prop,
        id: key,
      };
    });
  }

  ngOnInit() {
    this.getCharts();
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart1) {
        console.log("Chart disposed");
        this.chart1.dispose();
      }
      if (this.chart2) {
        console.log("Chart disposed");
        this.chart2.dispose();
      }
      if (this.chart3) {
        console.log("Chart disposed");
        this.chart3.dispose();
      }
      if (this.chart4) {
        console.log("Chart disposed");
        this.chart4.dispose();
      }
    });
  }

  getCharts() {
    this.zone.runOutsideAngular(() => {
      this.getChartBudgetPlanCurrency1();
      this.getChartBudgetPlanCurrency2();
    });
  }

  getChartBudgetPlanCurrency1() {
    am4core.useTheme(am4themes_dataviz);
    am4core.useTheme(am4themes_animated);
    // Themes end

    let chart = am4core.create(
      "chartdivadminbugetplancurrency1",
      am4charts.XYChart
    );

    let data = [];
    let value = 50;
    for (var i = 0; i < 300; i++) {
      let date = new Date();
      date.setHours(0, 0, 0, 0);
      date.setDate(i);
      value -= Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
      data.push({ date: date, value: value });
    }

    chart.data = data;

    // Create axes
    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.minGridDistance = 60;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

    // Create series
    let series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.valueY = "value";
    series.dataFields.dateX = "date";
    series.tooltipText = "{value}";

    series.tooltip.pointerOrientation = "vertical";

    chart.cursor = new am4charts.XYCursor();
    chart.cursor.snapToSeries = series;
    chart.cursor.xAxis = dateAxis;

    //chart.scrollbarY = new am4core.Scrollbar();
    chart.scrollbarX = new am4core.Scrollbar();

    this.chart1 = chart;
  }

  getChartBudgetPlanCurrency2() {
    am4core.useTheme(am4themes_dataviz);
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chart = am4core.create(
      "chartdivadminbugetplancurrency2",
      am4charts.XYChart
    );

    // Add data
    chart.data = [
      {
        date: "2019-07-27",
        value: 13,
      },
      {
        date: "2019-07-28",
        value: 11,
      },
      {
        date: "2019-07-29",
        value: 15,
      },
      {
        date: "2019-07-30",
        value: 16,
      },
      {
        date: "2019-07-31",
        value: 18,
      },
      {
        date: "2019-08-01",
        value: 13,
      },
      {
        date: "2019-08-02",
        value: 22,
      },
      {
        date: "2019-08-03",
        value: 23,
      },
      {
        date: "2019-08-04",
        value: 20,
      },
      {
        date: "2019-08-05",
        value: 17,
      },
      {
        date: "2019-08-06",
        value: 16,
      },
      {
        date: "2019-08-07",
        value: 18,
      },
      {
        date: "2019-08-08",
        value: 21,
      },
      {
        date: "2019-08-09",
        value: 26,
      },
      {
        date: "2019-08-10",
        value: 24,
      },
      {
        date: "2019-08-11",
        value: 29,
      },
      {
        date: "2019-08-12",
        value: 32,
      },
      {
        date: "2019-08-13",
        value: 18,
      },
      {
        date: "2019-08-14",
        value: 24,
      },
      {
        date: "2019-08-15",
        value: 22,
      },
      {
        date: "2019-08-16",
        value: 18,
      },
      {
        date: "2019-08-17",
        value: 19,
      },
      {
        date: "2019-08-18",
        value: 14,
      },
      {
        date: "2019-08-19",
        value: 15,
      },
      {
        date: "2019-08-20",
        value: 12,
      },
      {
        date: "2019-08-21",
        value: 8,
      },
      {
        date: "2019-08-22",
        value: 9,
      },
      {
        date: "2019-08-23",
        value: 8,
      },
      {
        date: "2019-08-24",
        value: 7,
      },
      {
        date: "2019-08-25",
        value: 5,
      },
      {
        date: "2019-08-26",
        value: 11,
      },
      {
        date: "2019-08-27",
        value: 13,
      },
      {
        date: "2019-08-28",
        value: 18,
      },
      {
        date: "2019-08-29",
        value: 20,
      },
      {
        date: "2019-08-30",
        value: 29,
      },
      {
        date: "2019-08-31",
        value: 33,
      },
      {
        date: "2019-09-01",
        value: 42,
      },
      {
        date: "2019-09-02",
        value: 35,
      },
      {
        date: "2019-09-03",
        value: 31,
      },
      {
        date: "2019-09-04",
        value: 47,
      },
      {
        date: "2019-09-05",
        value: 52,
      },
      {
        date: "2019-09-06",
        value: 46,
      },
      {
        date: "2019-09-07",
        value: 41,
      },
      {
        date: "2019-09-08",
        value: 43,
      },
      {
        date: "2019-09-09",
        value: 40,
      },
      {
        date: "2019-09-10",
        value: 39,
      },
      {
        date: "2019-09-11",
        value: 34,
      },
      {
        date: "2019-09-12",
        value: 29,
      },
      {
        date: "2019-09-13",
        value: 34,
      },
      {
        date: "2019-09-14",
        value: 37,
      },
      {
        date: "2019-09-15",
        value: 42,
      },
      {
        date: "2019-09-16",
        value: 49,
      },
      {
        date: "2019-09-17",
        value: 46,
      },
      {
        date: "2019-09-18",
        value: 47,
      },
      {
        date: "2019-09-19",
        value: 55,
      },
      {
        date: "2019-09-20",
        value: 59,
      },
      {
        date: "2019-09-21",
        value: 58,
      },
      {
        date: "2019-09-22",
        value: 57,
      },
      {
        date: "2019-09-23",
        value: 61,
      },
      {
        date: "2019-09-24",
        value: 59,
      },
      {
        date: "2019-09-25",
        value: 67,
      },
      {
        date: "2019-09-26",
        value: 65,
      },
      {
        date: "2019-09-27",
        value: 61,
      },
      {
        date: "2019-09-28",
        value: 66,
      },
      {
        date: "2019-09-29",
        value: 69,
      },
      {
        date: "2019-09-30",
        value: 71,
      },
      {
        date: "2019-10-01",
        value: 67,
      },
      {
        date: "2019-10-02",
        value: 63,
      },
      {
        date: "2019-10-03",
        value: 46,
      },
      {
        date: "2019-10-04",
        value: 32,
      },
      {
        date: "2019-10-05",
        value: 21,
      },
      {
        date: "2019-10-06",
        value: 18,
      },
      {
        date: "2019-10-07",
        value: 21,
      },
      {
        date: "2019-10-08",
        value: 28,
      },
      {
        date: "2019-10-09",
        value: 27,
      },
      {
        date: "2019-10-10",
        value: 36,
      },
      {
        date: "2019-10-11",
        value: 33,
      },
      {
        date: "2019-10-12",
        value: 31,
      },
      {
        date: "2019-10-13",
        value: 30,
      },
      {
        date: "2019-10-14",
        value: 34,
      },
      {
        date: "2019-10-15",
        value: 38,
      },
      {
        date: "2019-10-16",
        value: 37,
      },
      {
        date: "2019-10-17",
        value: 44,
      },
      {
        date: "2019-10-18",
        value: 49,
      },
      {
        date: "2019-10-19",
        value: 53,
      },
      {
        date: "2019-10-20",
        value: 57,
      },
      {
        date: "2019-10-21",
        value: 60,
      },
      {
        date: "2019-10-22",
        value: 61,
      },
      {
        date: "2019-10-23",
        value: 69,
      },
      {
        date: "2019-10-24",
        value: 67,
      },
      {
        date: "2019-10-25",
        value: 72,
      },
      {
        date: "2019-10-26",
        value: 77,
      },
      {
        date: "2019-10-27",
        value: 75,
      },
      {
        date: "2019-10-28",
        value: 70,
      },
      {
        date: "2019-10-29",
        value: 72,
      },
      {
        date: "2019-10-30",
        value: 70,
      },
      {
        date: "2019-10-31",
        value: 72,
      },
      {
        date: "2019-11-01",
        value: 73,
      },
      {
        date: "2019-11-02",
        value: 67,
      },
      {
        date: "2019-11-03",
        value: 68,
      },
      {
        date: "2019-11-04",
        value: 65,
      },
      {
        date: "2019-11-05",
        value: 71,
      },
      {
        date: "2019-11-06",
        value: 75,
      },
      {
        date: "2019-11-07",
        value: 74,
      },
      {
        date: "2019-11-08",
        value: 71,
      },
      {
        date: "2019-11-09",
        value: 76,
      },
      {
        date: "2019-11-10",
        value: 77,
      },
      {
        date: "2019-11-11",
        value: 81,
      },
      {
        date: "2019-11-12",
        value: 83,
      },
      {
        date: "2019-11-13",
        value: 80,
      },
      {
        date: "2019-11-14",
        value: 81,
      },
      {
        date: "2019-11-15",
        value: 87,
      },
      {
        date: "2019-11-16",
        value: 82,
      },
      {
        date: "2019-11-17",
        value: 86,
      },
      {
        date: "2019-11-18",
        value: 80,
      },
      {
        date: "2019-11-19",
        value: 87,
      },
      {
        date: "2019-11-20",
        value: 83,
      },
      {
        date: "2019-11-21",
        value: 85,
      },
      {
        date: "2019-11-22",
        value: 84,
      },
      {
        date: "2019-11-23",
        value: 82,
      },
      {
        date: "2019-11-24",
        value: 73,
      },
      {
        date: "2019-11-25",
        value: 71,
      },
      {
        date: "2019-11-26",
        value: 75,
      },
      {
        date: "2019-11-27",
        value: 79,
      },
      {
        date: "2019-11-28",
        value: 70,
      },
      {
        date: "2019-11-29",
        value: 73,
      },
      {
        date: "2019-11-30",
        value: 61,
      },
      {
        date: "2019-12-01",
        value: 62,
      },
      {
        date: "2019-12-02",
        value: 66,
      },
      {
        date: "2019-12-03",
        value: 65,
      },
      {
        date: "2019-12-04",
        value: 73,
      },
      {
        date: "2019-12-05",
        value: 79,
      },
      {
        date: "2019-12-06",
        value: 78,
      },
      {
        date: "2019-12-07",
        value: 78,
      },
      {
        date: "2019-12-08",
        value: 78,
      },
      {
        date: "2019-12-09",
        value: 74,
      },
      {
        date: "2019-12-10",
        value: 73,
      },
      {
        date: "2019-12-11",
        value: 75,
      },
      {
        date: "2019-12-12",
        value: 70,
      },
      {
        date: "2019-12-13",
        value: 77,
      },
      {
        date: "2019-12-14",
        value: 67,
      },
      {
        date: "2019-12-15",
        value: 62,
      },
      {
        date: "2019-12-16",
        value: 64,
      },
      {
        date: "2019-12-17",
        value: 61,
      },
      {
        date: "2019-12-18",
        value: 59,
      },
      {
        date: "2019-12-19",
        value: 53,
      },
      {
        date: "2019-12-20",
        value: 54,
      },
      {
        date: "2019-12-21",
        value: 56,
      },
      {
        date: "2019-12-22",
        value: 59,
      },
      {
        date: "2019-12-23",
        value: 58,
      },
      {
        date: "2019-12-24",
        value: 55,
      },
      {
        date: "2019-12-25",
        value: 52,
      },
      {
        date: "2019-12-26",
        value: 54,
      },
      {
        date: "2019-12-27",
        value: 50,
      },
      {
        date: "2019-12-28",
        value: 50,
      },
      {
        date: "2019-12-29",
        value: 51,
      },
      {
        date: "2019-12-30",
        value: 52,
      },
      {
        date: "2019-12-31",
        value: 58,
      },
      {
        date: "2020-01-01",
        value: 60,
      },
      {
        date: "2020-01-02",
        value: 67,
      },
      {
        date: "2020-01-03",
        value: 64,
      },
      {
        date: "2020-01-04",
        value: 66,
      },
      {
        date: "2020-01-05",
        value: 60,
      },
      {
        date: "2020-01-06",
        value: 63,
      },
      {
        date: "2020-01-07",
        value: 61,
      },
      {
        date: "2020-01-08",
        value: 60,
      },
      {
        date: "2020-01-09",
        value: 65,
      },
      {
        date: "2020-01-10",
        value: 75,
      },
      {
        date: "2020-01-11",
        value: 77,
      },
      {
        date: "2020-01-12",
        value: 78,
      },
      {
        date: "2020-01-13",
        value: 70,
      },
      {
        date: "2020-01-14",
        value: 70,
      },
      {
        date: "2020-01-15",
        value: 73,
      },
      {
        date: "2020-01-16",
        value: 71,
      },
      {
        date: "2020-01-17",
        value: 74,
      },
      {
        date: "2020-01-18",
        value: 78,
      },
      {
        date: "2020-01-19",
        value: 85,
      },
      {
        date: "2020-01-20",
        value: 82,
      },
      {
        date: "2020-01-21",
        value: 83,
      },
      {
        date: "2020-01-22",
        value: 88,
      },
      {
        date: "2020-01-23",
        value: 85,
      },
      {
        date: "2020-01-24",
        value: 85,
      },
      {
        date: "2020-01-25",
        value: 80,
      },
      {
        date: "2020-01-26",
        value: 87,
      },
      {
        date: "2020-01-27",
        value: 84,
      },
      {
        date: "2020-01-28",
        value: 83,
      },
      {
        date: "2020-01-29",
        value: 84,
      },
      {
        date: "2020-01-30",
        value: 81,
      },
    ];

    // Set input format for the dates
    chart.dateFormatter.inputDateFormat = "yyyy-MM-dd";

    // Create axes
    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

    // Create series
    let series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.valueY = "value";
    series.dataFields.dateX = "date";
    series.tooltipText = "{value}";
    series.strokeWidth = 2;
    series.minBulletDistance = 15;

    // Drop-shaped tooltips
    series.tooltip.background.cornerRadius = 20;
    series.tooltip.background.strokeOpacity = 0;
    series.tooltip.pointerOrientation = "vertical";
    series.tooltip.label.minWidth = 40;
    series.tooltip.label.minHeight = 40;
    series.tooltip.label.textAlign = "middle";
    series.tooltip.label.textValign = "middle";

    // Make bullets grow on hover
    let bullet = series.bullets.push(new am4charts.CircleBullet());
    bullet.circle.strokeWidth = 2;
    bullet.circle.radius = 4;
    bullet.circle.fill = am4core.color("#fff");

    let bullethover = bullet.states.create("hover");
    bullethover.properties.scale = 1.3;

    // Make a panning cursor
    chart.cursor = new am4charts.XYCursor();
    chart.cursor.behavior = "panXY";
    chart.cursor.xAxis = dateAxis;
    chart.cursor.snapToSeries = series;

    // Create vertical scrollbar and place it before the value axis
    chart.scrollbarY = new am4core.Scrollbar();
    chart.scrollbarY.parent = chart.leftAxesContainer;
    chart.scrollbarY.toBack();

    // Create a horizontal scrollbar with previe and place it underneath the date axis
    chart.scrollbarX = new am4charts.XYChartScrollbar();
    let wasd = chart.scrollbarX as any;
    wasd.series.push(series);
    chart.scrollbarX.parent = chart.bottomAxesContainer;

    dateAxis.start = 0.79;
    dateAxis.keepSelection = true;

    this.chart2 = chart;
  }

  successSwal(task) {
    swal.fire({
      title: "Success",
      text: "Successfully " + task + "!",
      type: "success",
      buttonsStyling: false,
      confirmButtonClass: "btn btn-success",
    });
    // this.modalRef.hide();
    // this.ngOnDestroy();
  }

  entriesChange($event) {
    this.entries = $event.target.value;
  }
  filterTable($event) {
    let val = $event.target.value;
    this.temp = this.rows.filter(function (d) {
      for (var key in d) {
        if (d[key].toLowerCase().indexOf(val) !== -1) {
          return true;
        }
      }
      return false;
    });
  }
  onActivate(event) {
    this.activeRow = event.row;
  }

  delete() {
    swal
      .fire({
        title: "Confirmation",
        text: "Are you sure want to delete this data?",
        type: "info",
        buttonsStyling: false,
        confirmButtonClass: "btn btn-info",
        confirmButtonText: "Confirm",
        showCancelButton: true,
        cancelButtonClass: "btn btn-danger",
        cancelButtonText: "Cancel",
      })
      .then((result) => {
        if (result.value) {
          this.doneDelete();
        }
      });
  }

  doneDelete() {
    swal.fire({
      title: "Success",
      text: "The data has been deleted!",
      type: "success",
      buttonsStyling: false,
      confirmButtonClass: "btn btn-success",
      confirmButtonText: "Close",
    });
  }
}
