import { CurrencyPipe, NgFor, NgIf } from "@angular/common";
import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  ViewChild,
} from "@angular/core";
import { MatDividerModule } from "@angular/material/divider";
import { MatSort, MatSortModule } from "@angular/material/sort";
import {
  MatTable,
  MatTableDataSource,
  MatTableModule,
} from "@angular/material/table";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { EChartsOption } from "echarts";
import { StockTickerNameComponent } from "../../../shared/components/stock/stock-ticker-name/stock-ticker-name.component";
import { DataService } from "../../../shared/services/data.service";
import { EchartComponent } from "../../../shared/components/charts/echart/echart.component";

@Component({
  selector: "portfolio-financials",
  templateUrl: "./portfolio-financials.component.html",
  styleUrls: ["./portfolio-financials.component.css"],
  standalone: true,
  imports: [
    CurrencyPipe,
    MatDividerModule,
    MatSortModule,
    MatTableModule,
    NgFor,
    NgIf,
    NgxChartsModule,
    StockTickerNameComponent,
    EchartComponent
  ],
})
export class PortfolioFinancialsComponent implements OnInit, AfterViewInit {
  @Input() transactions = "portfolio";
  @ViewChild(MatTable) table!: MatTable<any>;
  @ViewChild(MatSort) sort!: MatSort;
  echartOptions!: EChartsOption;
  echartUpdateOptions: any = {
    yAxis: {},
    xAxis: { data: [] },
    series: [{ data: [] }],
  };
  barChartData: any = [];
  allBarChartData: any = [];
  xAxisLabel: any = "";
  dataSource = new MatTableDataSource<any>();
  sortedEtfs: any[] = [];
  headers = [
    "Symbol",
    "Debt To Equity (MRQ)",
    "Current Ratio",
    "Earnings Growth (YOY)",
    "Revenue Growth (YOY)",
    "Profit Margins",
    "Forward PE",
    "Forward EPS",
    "PEG Ratio",
    "Total Cash / Share",
    "Revenue / Share",
    "FCF Yield",
    "FCF / Share",
    "Return On Assets",
    "Return On Equity",
    "EV / EBITDA",
    "EV / Revenue",
  ];
  columnDefs = [
    "symbol",
    "debtToEquity",
    "currentRatio",
    "earningsQuarterlyGrowth",
    "revenueGrowth",
    "profitMargins",
    "forwardPE",
    "forwardEps",
    "pegRatio",
    "totalCashPerShare",
    "revenuePerShare",
    "fcfYield",
    "fcfPerShare",
    "returnOnAssets",
    "returnOnEquity",
    "enterpriseToEbitda",
    "enterpriseToRevenue",
  ];
  etfHeaders = [
    "Symbol",
    "Expense Ratio",
    "Nav Price",
    "Trailing PE",
    "Trailing EPS",
    "YTD Return",
    "1 Month Return",
    "3 month Return",
    "1 Year Return",
    "3 Year Return",
    "5 year Return",
    "10 Year return",
    "3Y Beta",
    "Total Assets",
  ];
  etfColumnDefs = [
    "symbol",
    "annualReportExpenseRatio",
    "navPrice",
    "trailingPE",
    "epsTrailingTwelveMonths",
    "ytdReturn",
    "1monthReturn",
    "3monthReturn",
    "1YearReturn",
    "threeYearReturn",
    "fiveYearReturn",
    "tenYearReturn",
    "beta3Year",
    "totalAssets",
  ];

  cells: Function[] = [
    (stock: any) => "",
    (stock: any) => `${stock.debtToEquity?.toFixed(2)}%` || 0,
    (stock: any) => stock.currentRatio?.toFixed(2) || 0,
    (stock: any) =>
      stock.earningsQuarterlyGrowth
        ? `${(stock.earningsQuarterlyGrowth * 100).toFixed(2)}%`
        : "0%",
    (stock: any) => `${(stock.revenueGrowth * 100).toFixed(2)}%` || 0,
    (stock: any) => `${(stock.profitMargins * 100).toFixed(2)}%` || 0,
    (stock: any) => stock.forwardPE.toFixed(2) || 0,
    (stock: any) => stock.forwardEps.toFixed(2) || 0,
    (stock: any) => stock.pegRatio || 0,
    (stock: any) => `$${stock.totalCashPerShare}` || 0,
    (stock: any) => `$${stock.revenuePerShare}` || 0,
    (stock: any) => `${(stock.fcfYield * 100).toFixed(2)}%` || 0,
    (stock: any) => `$${stock.fcfPerShare.toFixed(2)}` || 0,
    (stock: any) => `${(stock.returnOnAssets * 100).toFixed(2)}%` || 0,
    (stock: any) => `${(stock.returnOnEquity * 100).toFixed(2)}%` || 0,
    (stock: any) => stock.enterpriseToEbitda || 0,
    (stock: any) => stock.enterpriseToRevenue || 0,
  ];

  etfCells: Function[] = [
    (etf: any) => "",
    (etf: any) =>
      (
        etf.profile.feesExpensesInvestment.annualReportExpenseRatio * 100
      ).toFixed(2) + "%",
    (etf: any) => `$${etf.navPrice.toFixed(2)}`,
    (etf: any) => etf.trailingPE.toFixed(2),
    (etf: any) => etf.epsTrailingTwelveMonths?.toFixed(2) || "N/A",
    (etf: any) =>
      (etf.fundPerformance.trailingReturns.ytd * 100).toFixed(2) + "%",
    (etf: any) =>
      (etf.fundPerformance.trailingReturns.oneMonth * 100).toFixed(2) + "%",
    (etf: any) =>
      (etf.fundPerformance.trailingReturns.threeMonth * 100).toFixed(2) + "%",
    (etf: any) =>
      (etf.fundPerformance.trailingReturns.oneYear * 100).toFixed(2) + "%",
    (etf: any) =>
      (etf.fundPerformance.trailingReturns.threeYear * 100).toFixed(2) + "%",
    (etf: any) =>
      (etf.fundPerformance.trailingReturns.fiveYear * 100).toFixed(2) + "%",
    (etf: any) =>
      (etf.fundPerformance.trailingReturns.tenYear * 100).toFixed(2) + "%",
    (etf: any) => etf.beta3Year,
    (etf: any) => etf.totalAssets,
  ];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    const stocks = Object.values(this.dataService.portfolioData).filter(
      (stock: any) => stock.quoteType === "EQUITY"
    );
    this.dataSource.data = this.sortStocks(stocks);
    const etfs = Object.values(this.dataService.portfolioData).filter(
      (stock: any) => stock.quoteType === "ETF"
    );
    this.sortedEtfs = this.sortEtfs(etfs);
    this.setChartData(1);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  sortStocks(data: any[]) {
    return data.sort((a: any, b: any) => a["52WeekChange"] - b["52WeekChange"]);
  }

  sortEtfs(data: any[]) {
    return data.sort((a: any, b: any) => a["ytdReturn"] - b["ytdReturn"]);
  }

  setChartData(index: number) {
    let options: any = {
      title: {
        text: "Financial Data",
      },
      legend: {
        data: [this.headers[index]],
      },
      tooltip: {},
      xAxis: {
        data: [],
        splitLine: {
          show: false,
        },
      },
      yAxis: {},
      series: [
        {
          name: this.headers[index],
          type: "bar",
          data: [],
          emphasis: {
            focus: "series",
          },
          animationDelay: function (idx: any) {
            return idx * 10;
          },
        },
      ],
      animationEasing: "elasticOut",
      animationDelayUpdate: function (idx: any) {
        return idx * 5;
      },
    };

    this.allBarChartData = [];
    this.xAxisLabel = this.headers[index];
    const dataPoint = this.columnDefs[index];
    this.dataSource.data
      .sort((a: any, b: any) => a[dataPoint] - b[dataPoint])
      .forEach((stock: any) => {
        options.xAxis.data.push(stock.symbol);
        options.series[0].data.push(stock[dataPoint] || 0);
        this.allBarChartData.push({
          name: stock.symbol,
          value: stock[dataPoint] || 0,
        });
      });

    console.log(this.allBarChartData)
    this.echartOptions = options;
    this.barChartData = this.allBarChartData;
  }

  getColor(index: number, stock: any) {
    const value = this.cells[index](stock);
    return value < 0 || value[0] === "-" || value[1] === "-"
      ? "tomato"
      : "#000000DE";
  }
}
