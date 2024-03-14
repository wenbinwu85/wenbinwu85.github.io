import { CurrencyPipe, NgIf, PercentPipe } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatIconModule } from "@angular/material/icon";
import { MatSliderModule } from "@angular/material/slider";
import { MatTooltipModule } from "@angular/material/tooltip";
import { Color, NgxChartsModule } from "@swimlane/ngx-charts";
import { InfoCardComponent } from "../../../shared/components/info-card/info-card.component";
import { DataService } from "../../../shared/services/data.service";

@Component({
  selector: "portfolio-summary",
  templateUrl: "./portfolio-summary.component.html",
  styleUrls: ["./portfolio-summary.component.css"],
  standalone: true,
  imports: [
    CurrencyPipe,
    InfoCardComponent,
    MatButtonModule,
    MatDividerModule,
    MatExpansionModule,
    MatIconModule,
    MatSliderModule,
    MatTooltipModule,
    NgIf,
    NgxChartsModule,
    PercentPipe,
  ],
})
export class PortfolioSummaryComponent implements OnInit {
  portfolioHoldings: any;
  portfolioData: any;
  portfolioSymbols: any;
  passiveIncomeTarget = 12000;
  passiveIncomeGoalPercentage = 0;
  portfolioValueTarget = 0;
  portfolioValueGoalPercentage = 0;

  sectorsData: any = [];
  allMarketValueData: any[] = [];
  allPortfolioPercentData: any = [];
  allUnrealizedGainData: any[] = [];
  allDividendData: any[] = [];
  allYocData: any[] = [];
  portfolioPercentBarChartData: any = [];
  portfolioPercentBarChartColorScheme = { domain: ['lightsteelblue'] } as Color;
  marketValueBarChartData: any[] = [];
  unrealizedGainBarChartData: any[] = [];
  dividendBarChartData: any[] = [];
  yocBarChartData: any[] = [];

  showResetButton = false;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.portfolioHoldings = this.dataService.portfolioHoldings;
    this.portfolioData = this.dataService.portfolioData;
    this.portfolioSymbols = this.dataService.portfolioSymbols;
    this.passiveIncomeGoalPercentage = this.portfolioHoldings?.portfolioDividendIncome / this.passiveIncomeTarget;
    this.portfolioValueTarget = this.passiveIncomeTarget / this.portfolioHoldings?.portfolioYieldOnCost;
    this.portfolioValueGoalPercentage = this.portfolioHoldings?.portfolioMarketValue / this.portfolioValueTarget;

    let market_sectors: any = {};
    this.portfolioSymbols?.forEach((symbol: any) => {
      const position = this.portfolioHoldings[symbol];
      const stockData = this.portfolioData[symbol];
      const sector = stockData.profile?.sector || "ETF";

      if (market_sectors[stockData.profile?.sector]) {
        market_sectors[stockData.profile.sector] += position.marketValue;
      } else {
        market_sectors[stockData.profile.sector] = position.marketValue;
      }

      this.allMarketValueData.push({
        name: stockData.symbol,
        series: [
          {
            name: "Cost Basis",
            value: position.totalCost,
          },
          {
            name: "Unrealized Gain",
            value: position.unrealizedGain,
          },
        ],
        sector: sector,
      });
      this.allPortfolioPercentData.push({
        name: stockData.symbol,
        value: (position.marketValue / this.portfolioHoldings.portfolioMarketValue) * 100,
        sector: sector,
      });
      this.allUnrealizedGainData.push({
        name: stockData.symbol,
        value: position.unrealizedGainPercent * 100 || 0,
        sector: sector,
      });
      this.allDividendData.push({
        name: stockData.symbol,
        value: position.dividendIncome,
        sector: sector,
      });
      this.allYocData.push({
        name: stockData.symbol,
        value: position.yieldOnCost * 100,
        sector: sector,
      });
    });
    market_sectors["ETF"] = market_sectors["undefined"];
    delete market_sectors["undefined"];
    Object.entries(market_sectors).forEach(([sector, value]) => {
      this.sectorsData.push({
        name: sector,
        value: value,
      });
    });
    this.sectorsData.sort((a: any, b: any) => b.value - a.value);
    this.allMarketValueData.sort(
      (a: any, b: any) => this.portfolioHoldings[a.name].marketValue - this.portfolioHoldings[b.name].marketValue
    )
    this.allPortfolioPercentData.sort(
      (a: any, b: any) => this.portfolioHoldings[a.name].marketValue - this.portfolioHoldings[b.name].marketValue
    )
    this.allUnrealizedGainData.sort(
      (a: any, b: any) =>this.portfolioHoldings[a.name].unrealizedGainPercent - this.portfolioHoldings[b.name].unrealizedGainPercent
    )
    this.allDividendData.sort(
      (a: any, b: any) => this.portfolioHoldings[a.name].dividendIncome - this.portfolioHoldings[b.name].dividendIncome
    )
    this.allYocData.sort(
      (a: any, b: any) => this.portfolioHoldings[a.name].yieldOnCost - this.portfolioHoldings[b.name].yieldOnCost
    )
    this.marketValueBarChartData = this.allMarketValueData;
    this.portfolioPercentBarChartData = this.allPortfolioPercentData;
    this.unrealizedGainBarChartData = this.allUnrealizedGainData;
    this.dividendBarChartData = this.allDividendData;
    this.yocBarChartData = this.allYocData;
  }

  filterBySector(event: any) {
    if (event.name === "all") {
      this.portfolioPercentBarChartData = this.allPortfolioPercentData;
      this.marketValueBarChartData = this.allMarketValueData;
      this.unrealizedGainBarChartData = this.allUnrealizedGainData;
      this.dividendBarChartData = this.allDividendData;
      this.yocBarChartData = this.allYocData;
      this.showResetButton = false;
      return;
    }

    this.showResetButton = true;
    this.portfolioPercentBarChartData = this.allPortfolioPercentData.filter(
      (data: any) => data.sector === event.name
    );
    this.marketValueBarChartData = this.allMarketValueData.filter(
      (data) => data.sector === event.name
    );
    this.unrealizedGainBarChartData = this.allUnrealizedGainData.filter(
      (data) => data.sector === event.name
    );
    this.dividendBarChartData = this.allDividendData.filter(
      (data) => data.sector === event.name
    );
    this.yocBarChartData = this.allYocData.filter(
      (data) => data.sector === event.name
    );
  }

  getTooltip(kind: string) {
    if (kind === "passive") {
      return `Progress: ${(this.passiveIncomeGoalPercentage * 100).toFixed(4)}%`;
    } else if (kind === "investment") {
      return `Progress: ${(this.portfolioValueGoalPercentage * 100).toFixed(4)}%`;
    } else {
      return "";
    }
  }
}
