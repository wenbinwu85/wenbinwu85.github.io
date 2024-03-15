import { Component, OnInit } from "@angular/core";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatIconModule } from "@angular/material/icon";
import { PriceMovementChartsComponent } from "../../shared/components/charts/price-movement-charts/price-movement-charts.component";
import { DataService } from "../../shared/services/data.service";
import { InfoCardComponent } from "../../shared/components/info-card/info-card.component";
import { DatePipe, NgFor, NgIf } from "@angular/common";
import { StockCorporateEventsComponent } from "../../shared/components/#junk/stock-corporate-events/stock-corporate-events.component";

@Component({
  selector: "app-portfolio-main",
  templateUrl: "./portfolio-main.component.html",
  styleUrls: ["./portfolio-main.component.css"],
  standalone: true,
  imports: [
    DatePipe,
    InfoCardComponent,
    MatExpansionModule,
    MatIconModule,
    NgIf,
    NgFor,
    PriceMovementChartsComponent,
    StockCorporateEventsComponent,
  ],
})
export class PortfolioMainComponent implements OnInit{
  portfolioHoldings: any;
  events: any = [];
  eventDates: any = [];
  mappedEvents: any = {};

  constructor(private dataService: DataService) { }
  
  ngOnInit() {
    this.dataService.getCorporateEvents('DVN').subscribe(data => { 
      console.log('!!!')
      console.log(data)
    })
    const stocks = Object.values(this.dataService.portfolioData).filter((stock: any) => stock.calendarEvents);
    this.portfolioHoldings = Object.values(this.dataService.portfolioHoldings);
    stocks.forEach((stock: any) => {
      const calEvents = stock.calendarEvents;
      const earnings = stock.earnings.earningsChart;
      const position = this.dataService.portfolioHoldings[stock.symbol];

      if (calEvents.exDividendDate) {
        const divYield = (stock.dividendYield * 100).toFixed(2);
        this.events.push({
          name: stock.shortName,
          date: new Date(calEvents.exDividendDate).valueOf(),
          event: "Ex-Dividend",
          icon: "rule",
          color: "sienna",
          detail: `Yield: ${divYield}%`,
        });
      }

      if (calEvents.dividendDate) {
        const dividendValue = (stock.lastDividendValue * position.sharesOwned).toFixed(2);
        this.events.push({
          name: stock.shortName,
          date: new Date(calEvents.dividendDate).valueOf(),
          event: "Dividend",
          icon: "attach_money",
          color: "darkcyan",
          detail: `Income: $${dividendValue}`
        });
      }

      if (calEvents.earnings.earningsDate[0]) {
        const estimate = `${earnings.currentQuarterEstimateDate} estimate: ${earnings.currentQuarterEstimate}`
        this.events.push({
          name: stock.shortName,
          date: new Date(calEvents.earnings?.earningsDate[0]?.slice(0, -2)).valueOf(),
          event: "Earnings",
          icon: "insights",
          color: "slategrey",
          detail: estimate,
        });
      }
    })

    this.events = this.events.filter((event: any) => event.date >= new Date().valueOf());
    this.events.sort((event1: any, event2: any) => event1.date - event2.date);
    this.events.forEach((event: any) => {
      this.eventDates.push(event.date)
    })
    this.eventDates = new Set(this.eventDates);
    this.eventDates = Array.from(this.eventDates);
    this.eventDates.forEach((date: any) => {
      this.mappedEvents[date] = this.events.filter((event: any) => event.date === date);
    })
    this.mappedEvents = Object.entries(this.mappedEvents);
  }
}
