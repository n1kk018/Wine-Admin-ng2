import {Component, Input, OnInit} from '@angular/core';
import { EntityDashboard } from '../../../entities/entityDashboard';

import {UsersMapService} from './usersMap.service';

@Component({
  selector: 'users-map',
  templateUrl: './usersMap.html',
  styleUrls: ['./usersMap.scss']
})
export class UsersMap {
  @Input() dashInitVars: EntityDashboard
  mapData:Object;

  constructor(private _usersMapService:UsersMapService) {

  }
  ngOnInit() {
    if (this.dashInitVars) {
      this.mapData = this._usersMapService.getData(this.dashInitVars);
    }
  }

}
