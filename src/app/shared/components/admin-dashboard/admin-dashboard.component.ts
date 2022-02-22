import { Component, OnDestroy, OnInit } from '@angular/core';
import { HelperService } from '../../../services/helper.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit, OnDestroy {

  public showAlert = false;
  public user: any = JSON.parse(localStorage.getItem('user'));
  public zones: any [] = [];
  public interval: any;

  public completados: number;
  public llamados: number;
  public current: any = {};
  public resume: any[] = [];

  public attention = [];
  public modalTurnResume : any;
  public overlayLoadingTemplate;
  public gridAttention;
  public loading = false;
  public dropdownSettings: any;
  public selectedZoneItems: any = [];
  constructor(
    private helper: HelperService,
    private modalService: NgbModal,

  ) {
   
    const self = this;

   

    this.overlayLoadingTemplate =
      "<span class='ag-overlay-loading-center'>Por favor espere mientras cargan los datos</span>";

    this.gridAttention.onGridReady = () => {
      self.gridAttention.api.sizeColumnsToFit();
      self.gridAttention.api.showLoadingOverlay();
    };
  }

  ngOnInit() {
  
  }
  getUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
 
  
  ngOnDestroy(): void {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  

}
