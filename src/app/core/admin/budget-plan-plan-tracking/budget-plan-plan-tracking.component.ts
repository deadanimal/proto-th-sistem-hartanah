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
import * as am4plugins_timeline from "@amcharts/amcharts4/plugins/timeline"; 
import * as am4plugins_bullets from "@amcharts/amcharts4/plugins/bullets";
import swal from "sweetalert2";
import { BsModalRef, BsModalService } from "ngx-bootstrap";

export enum SelectionType {
  single = "single",
  multi = "multi",
  multiClick = "multiClick",
  cell = "cell",
  checkbox = "checkbox",
}

@Component({
  selector: "app-budget-plan-plan-tracking",
  templateUrl: "./budget-plan-plan-tracking.component.html",
  styleUrls: ["./budget-plan-plan-tracking.component.scss"],
})
export class BudgetPlanPlanTrackingComponent implements OnInit, OnDestroy {
  // Chart
  private chart1: any;
  private chart2: any;
  private chart3: any;
  private chart4: any;

  // Modal
  modalRef: BsModalRef;
  modalRef1: BsModalRef;

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
      status: "draft",
      duedate: "2019/06/25",
      coin: "23",
      remark: "Need to improve the design",
      name: "Syafiq Ahmad",
      namepro: "Procurement System"
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
      name: "Sarah Hashim",
      namepro: "Company Facility Upgrade Project"
    },
    {
      accNo: "ACC-635-KDJ",
      debit: "507",
      credit: "22.37",
      netMove: "426.32",
      date: "2009/01/12",
      salary: "$86,000",
      type: "RFQ",
      category: "Category 2",
      status: "closed",
      duedate: "2011/07/25",
      coin: "30",
      remark: "This project postponed due to pandemic Covid19",
      name: "Joshua Sprite",
      namepro: "School for Poor Family Project"
    },
  ];
  SelectionType = SelectionType;

  constructor(private zone: NgZone, private modalService: BsModalService) {
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
      this.getChartBudgetPlanPlanTrackbudget1();
    });
  }

  getChartBudgetPlanPlanTrackbudget1() {
    am4core.useTheme(am4themes_dataviz);
    am4core.useTheme(am4themes_animated);
    // Themes end

    let chart = am4core.create("chartdivadminbugetplanplantrackbudget1", am4plugins_timeline.SerpentineChart);
    chart.curveContainer.padding(50, 20, 50, 20);
    chart.levelCount = 4;
    chart.yAxisRadius = am4core.percent(25);
    chart.yAxisInnerRadius = am4core.percent(-25);
    chart.maskBullets = false;

    let colorSet = new am4core.ColorSet();
    colorSet.saturation = 0.5;

    chart.data = [
      {
        category: "Module #1",
        start: "2019-01-10",
        end: "2019-01-13",
        color: colorSet.getIndex(0),
        task: "Gathering requirements",
      },
      {
        category: "Module #1",
        start: "2019-02-05",
        end: "2019-04-18",
        color: colorSet.getIndex(0),
        task: "Development",
      },
      {
        category: "Module #2",
        start: "2019-01-08",
        end: "2019-01-10",
        color: colorSet.getIndex(5),
        task: "Gathering requirements",
      },
      {
        category: "Module #2",
        start: "2019-01-12",
        end: "2019-01-15",
        color: colorSet.getIndex(5),
        task: "Producing specifications",
      },
      {
        category: "Module #2",
        start: "2019-01-16",
        end: "2019-02-05",
        color: colorSet.getIndex(5),
        task: "Development",
      },
      {
        category: "Module #2",
        start: "2019-02-10",
        end: "2019-02-18",
        color: colorSet.getIndex(5),
        task: "Testing and QA",
      },
      {
        category: "",
      },
      {
        category: "Module #3",
        start: "2019-01-01",
        end: "2019-01-19",
        color: colorSet.getIndex(9),
        task: "Gathering requirements",
      },
      {
        category: "Module #3",
        start: "2019-02-01",
        end: "2019-02-10",
        color: colorSet.getIndex(9),
        task: "Producing specifications",
      },
      {
        category: "Module #3",
        start: "2019-03-10",
        end: "2019-04-15",
        color: colorSet.getIndex(9),
        task: "Development",
      },
      {
        category: "Module #3",
        start: "2019-04-20",
        end: "2019-04-30",
        color: colorSet.getIndex(9),
        task: "Testing and QA",
        disabled2: false,
        image2: "/assets/img/default/avatar.png",
        location: 0,
      },
      {
        category: "Module #4",
        start: "2019-01-15",
        end: "2019-02-12",
        color: colorSet.getIndex(15),
        task: "Gathering requirements",
        disabled1: false,
        image1: "/assets/img/default/avatar.png",
      },
      {
        category: "Module #4",
        start: "2019-02-25",
        end: "2019-03-10",
        color: colorSet.getIndex(15),
        task: "Development",
      },
      {
        category: "Module #4",
        start: "2019-03-23",
        end: "2019-04-29",
        color: colorSet.getIndex(15),
        task: "Testing and QA",
      },
    ];

    chart.dateFormatter.dateFormat = "yyyy-MM-dd";
    chart.dateFormatter.inputDateFormat = "yyyy-MM-dd";
    chart.fontSize = 11;

    let dreit = chart.yAxes as any;
    let categoryAxis = dreit.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "category";
    categoryAxis.renderer.grid.template.disabled = true;
    categoryAxis.renderer.labels.template.paddingRight = 25;
    categoryAxis.renderer.minGridDistance = 10;
    categoryAxis.renderer.innerRadius = -60;
    categoryAxis.renderer.radius = 60;

    let gogogo = chart.xAxes as any;
    let dateAxis = gogogo.push(new am4charts.DateAxis());
    dateAxis.renderer.minGridDistance = 70;
    dateAxis.baseInterval = { count: 1, timeUnit: "day" };
    dateAxis.renderer.tooltipLocation = 0;
    dateAxis.startLocation = -0.5;
    dateAxis.renderer.line.strokeDasharray = "1,4";
    dateAxis.renderer.line.strokeOpacity = 0.6;
    dateAxis.tooltip.background.fillOpacity = 0.2;
    dateAxis.tooltip.background.cornerRadius = 5;
    dateAxis.tooltip.label.fill = new am4core.InterfaceColorSet().getFor(
      "alternativeBackground"
    );
    dateAxis.tooltip.label.paddingTop = 7;

    let labelTemplate = dateAxis.renderer.labels.template;
    labelTemplate.verticalCenter = "middle";
    labelTemplate.fillOpacity = 0.7;
    labelTemplate.background.fill = new am4core.InterfaceColorSet().getFor(
      "background"
    );
    labelTemplate.background.fillOpacity = 1;
    labelTemplate.padding(7, 7, 7, 7);

    let series = chart.series.push(new am4plugins_timeline.CurveColumnSeries());
    series.columns.template.height = am4core.percent(20);
    series.columns.template.tooltipText =
      "{task}: [bold]{openDateX}[/] - [bold]{dateX}[/]";

    series.dataFields.openDateX = "start";
    series.dataFields.dateX = "end";
    series.dataFields.categoryY = "category";
    series.columns.template.propertyFields.fill = "color"; // get color from data
    series.columns.template.propertyFields.stroke = "color";
    series.columns.template.strokeOpacity = 0;

    let bullet = series.bullets.push(new am4charts.CircleBullet());
    bullet.circle.radius = 3;
    bullet.circle.strokeOpacity = 0;
    bullet.propertyFields.fill = "color";
    bullet.locationX = 0;

    let bullet2 = series.bullets.push(new am4charts.CircleBullet());
    bullet2.circle.radius = 3;
    bullet2.circle.strokeOpacity = 0;
    bullet2.propertyFields.fill = "color";
    bullet2.locationX = 1;

    let imageBullet1 = series.bullets.push(new am4plugins_bullets.PinBullet());
    imageBullet1.disabled = true;
    imageBullet1.propertyFields.disabled = "disabled1";
    imageBullet1.locationX = 1;
    imageBullet1.circle.radius = 20;
    imageBullet1.propertyFields.stroke = "color";
    imageBullet1.background.propertyFields.fill = "color";
    imageBullet1.image = new am4core.Image();
    imageBullet1.image.propertyFields.href = "image1";

    let imageBullet2 = series.bullets.push(new am4plugins_bullets.PinBullet());
    imageBullet2.disabled = true;
    imageBullet2.propertyFields.disabled = "disabled2";
    imageBullet2.locationX = 0;
    imageBullet2.circle.radius = 20;
    imageBullet2.propertyFields.stroke = "color";
    imageBullet2.background.propertyFields.fill = "color";
    imageBullet2.image = new am4core.Image();
    imageBullet2.image.propertyFields.href = "image2";

    let eventSeries = chart.series.push(
      new am4plugins_timeline.CurveLineSeries()
    );
    eventSeries.dataFields.dateX = "eventDate";
    eventSeries.dataFields.categoryY = "category";
    eventSeries.data = [
      {
        category: "",
        eventDate: "2019-01-15",
        letter: "A",
        description: "Something happened here",
      },
      {
        category: "",
        eventDate: "2019-01-23",
        letter: "B",
        description: "Something happened here",
      },
      {
        category: "",
        eventDate: "2019-02-10",
        letter: "C",
        description: "Something happened here",
      },
      {
        category: "",
        eventDate: "2019-02-29",
        letter: "D",
        description: "Something happened here",
      },
      {
        category: "",
        eventDate: "2019-03-06",
        letter: "E",
        description: "Something happened here",
      },
      {
        category: "",
        eventDate: "2019-03-12",
        letter: "F",
        description: "Something happened here",
      },
      {
        category: "",
        eventDate: "2019-03-22",
        letter: "G",
        description: "Something happened here",
      },
    ];
    eventSeries.strokeOpacity = 0;

    let flagBullet = eventSeries.bullets.push(
      new am4plugins_bullets.FlagBullet()
    );
    flagBullet.label.propertyFields.text = "letter";
    flagBullet.locationX = 0;
    flagBullet.tooltipText = "{description}";

    chart.scrollbarX = new am4core.Scrollbar();
    chart.scrollbarX.align = "center";
    chart.scrollbarX.width = am4core.percent(85);

    let cursor = new am4plugins_timeline.CurveCursor();
    chart.cursor = cursor;
    cursor.xAxis = dateAxis;
    cursor.yAxis = categoryAxis;
    cursor.lineY.disabled = true;
    cursor.lineX.strokeDasharray = "1,4";
    cursor.lineX.strokeOpacity = 1;

    dateAxis.renderer.tooltipLocation2 = 0;
    categoryAxis.cursorTooltipEnabled = false;

    this.chart1 = chart;
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  openModal1(template: TemplateRef<any>) {
    this.modalRef1 = this.modalService.show(template, {class:"modal-lg"});
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
  successSwal1(task) {
    swal.fire({
      title: "Success",
      text: "Successfully " + task + "!",
      type: "success",
      buttonsStyling: false,
      confirmButtonClass: "btn btn-success",
    });
    this.modalRef.hide();
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
