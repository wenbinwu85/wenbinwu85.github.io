import { NgFor, NgIf } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatTabsModule } from "@angular/material/tabs";
import { RouterLink, RouterOutlet } from "@angular/router";
import { PortfolioDetailsComponent } from "../../../pages/portfolio-details/portfolio-details.component";
import { PortfolioMainComponent } from "../../../pages/portfolio-main/portfolio-main.component";
import { ToolboxComponent } from "../../../pages/toolbox/toolbox.component";
import { DataService } from "../../services/data.service";
import { TvTickersWidgetComponent } from "../tradingview/tv-tickers-widget/tv-tickers-widget.component";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule,
    MatTabsModule,
    NgFor,
    NgIf,
    PortfolioDetailsComponent,
    PortfolioMainComponent,
    RouterLink,
    RouterOutlet,
    ToolboxComponent,
    TvTickersWidgetComponent,
  ],
})
export class HeaderComponent implements OnInit {
  navLinks = [
    {
      label: "Home",
      route: "",
    },
    {
      label: "Portfolio Details",
      route: "/portfolio",
    },
    {
      label: "Watchlists",
      route: "/watchlists",
    },
    {
      label: "Toolbox",
      route: "/toolbox",
    },
  ];
  activeLink = this.navLinks[0];
  showProgressBar = false;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.isLoadingData.subscribe((isLoading) => {
      this.showProgressBar = isLoading;
    });
  }

  refreshData() {
    this.showProgressBar = true;
    // this.dataService.updatePortfolioData(false);
    setTimeout(() => this.dataService.updatePortfolioTechnicalInsights(false),2000);
    setTimeout(() => this.dataService.updatePortfolioDividendHistory(false), 2000);
  }
}
