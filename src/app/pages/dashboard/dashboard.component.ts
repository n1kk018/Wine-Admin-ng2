import { Component,Injectable,OnInit } from '@angular/core';
import { InitDashboardService } from '../../service/init-dashboard.service';
import { EntityDashboard } from '../../entities/entityDashboard';
import { ParseUtile } from './utile/parse.utile';

@Component({
  selector: 'dashboard',
  styleUrls: ['./dashboard.scss'],
  templateUrl: './dashboard.html'
})
export class Dashboard implements OnInit {

  dashInitVars: EntityDashboard;

  constructor(
    private initDashboardService: InitDashboardService
  ) {}

  ngOnInit(): void {
    this.initDashboard();
  }

  initDashboard():void {
    if (localStorage.getItem('currentAdmin')) {
       this.initDashboardService.initDashboard()
        .then(initVars => this.dashInitVars = initVars);
    }
  }
}
