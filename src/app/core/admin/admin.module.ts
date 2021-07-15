import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  AccordionModule,
  BsDropdownModule,
  ModalModule,
  ProgressbarModule, 
  TabsModule,
  TooltipModule
} from 'ngx-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { CdkStepperModule } from "@angular/cdk/stepper";
import { MatStepperModule } from "@angular/material/stepper"; 
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { QuillModule } from 'ngx-quill'

import { RouterModule } from '@angular/router';
import { AdminRoutes } from './admin.routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManagementAuditComponent } from './management-audit/management-audit.component';
import { ManagementUserComponent } from './management-user/management-user.component';
import { ReportComponent } from './report/report.component';
import { BudgetPlanMainComponent } from './budget-plan-main/budget-plan-main.component';
import { BudgetPlanPlanTrackingComponent } from './budget-plan-plan-tracking/budget-plan-plan-tracking.component';
import { BudgetPlanCurrencyComponent } from './budget-plan-currency/budget-plan-currency.component';
import { BudgetPlanAnalysisComponent } from './budget-plan-analysis/budget-plan-analysis.component';
import { BudgetPlanDocumentComponent } from './budget-plan-document/budget-plan-document.component';
import { BudgetPlanReportComponent } from './budget-plan-report/budget-plan-report.component';
import { LeaseAdminMainComponent } from './lease-admin-main/lease-admin-main.component';
import { LeaseAdminDataTrackComponent } from './lease-admin-data-track/lease-admin-data-track.component';
import { LeaseAdminTenantComponent } from './lease-admin-tenant/lease-admin-tenant.component';
import { LeaseAdminRenewDashComponent } from './lease-admin-renew-dash/lease-admin-renew-dash.component';
import { LeaseAdminRenewLeaseComponent } from './lease-admin-renew-lease/lease-admin-renew-lease.component';
import { LeaseAdminReportComponent } from './lease-admin-report/lease-admin-report.component';
import { ProjectTemplateComponent } from './project-template/project-template.component';
import { ProjectTemplateMainComponent } from './project-template-main/project-template-main.component';
import { ProjectTemplateAsessmentComponent } from './project-template-asessment/project-template-asessment.component';
import { ProjectMaintenanceMainComponent } from './project-maintenance-main/project-maintenance-main.component';
import { ProjectMaintenanceAssetComponent } from './project-maintenance-asset/project-maintenance-asset.component';
import { ProjectMaintenanceWorkOrderComponent } from './project-maintenance-work-order/project-maintenance-work-order.component';
import { ProjectMaintenanceIventoryComponent } from './project-maintenance-iventory/project-maintenance-iventory.component';
import { ProjectMaintenanceReportComponent } from './project-maintenance-report/project-maintenance-report.component';
import { ScreenDesignComponent } from './screen-design/screen-design.component';
import { PreventiveMaintenanceComponent } from './preventive-maintenance/preventive-maintenance.component';
import { ContractManagementMainComponent } from './contract-management-main/contract-management-main.component';
import { ContractManagementFailureCodeComponent } from './contract-management-failure-code/contract-management-failure-code.component';
import { AssetManagementComponent } from './asset-management/asset-management.component';
import { ConstructionPlanScheduleComponent } from './construction-plan-schedule/construction-plan-schedule.component';
import { ConstructionProcurementComponent } from './construction-procurement/construction-procurement.component';
import { SafetyTrainingComponent } from './safety-training/safety-training.component';
import { SafetyLicensingComponent } from './safety-licensing/safety-licensing.component';
import { SafetyOccupationalComponent } from './safety-occupational/safety-occupational.component';
import { SafetyContractorComponent } from './safety-contractor/safety-contractor.component';
import { PropertyDataRoomComponent } from './property-data-room/property-data-room.component';
import { PropertyFactSheetComponent } from './property-fact-sheet/property-fact-sheet.component';
import { PropertyMarketComponent } from './property-market/property-market.component';
import { PropertyAnalyticalComponent } from './property-analytical/property-analytical.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ManagementAuditComponent,
    ManagementUserComponent,
    ReportComponent,
    BudgetPlanMainComponent,
    BudgetPlanPlanTrackingComponent,
    BudgetPlanCurrencyComponent,
    BudgetPlanAnalysisComponent,
    BudgetPlanDocumentComponent,
    BudgetPlanReportComponent,
    LeaseAdminMainComponent,
    LeaseAdminDataTrackComponent,
    LeaseAdminTenantComponent,
    LeaseAdminRenewDashComponent,
    LeaseAdminRenewLeaseComponent,
    LeaseAdminReportComponent,
    ProjectTemplateComponent,
    ProjectTemplateMainComponent,
    ProjectTemplateAsessmentComponent,
    ProjectMaintenanceMainComponent,
    ProjectMaintenanceAssetComponent,
    ProjectMaintenanceWorkOrderComponent,
    ProjectMaintenanceIventoryComponent,
    ProjectMaintenanceReportComponent,
    ScreenDesignComponent,
    PreventiveMaintenanceComponent,
    ContractManagementMainComponent,
    ContractManagementFailureCodeComponent,
    AssetManagementComponent,
    ConstructionPlanScheduleComponent,
    ConstructionProcurementComponent,
    SafetyTrainingComponent,
    SafetyLicensingComponent,
    SafetyOccupationalComponent,
    SafetyContractorComponent,
    PropertyDataRoomComponent,
    PropertyFactSheetComponent,
    PropertyMarketComponent,
    PropertyAnalyticalComponent
  ],
  imports: [
    CommonModule,
    AccordionModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    ProgressbarModule.forRoot(),
    TabsModule.forRoot(),
    TooltipModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    LoadingBarModule,
    NgxDatatableModule,
    MatStepperModule,
    CdkStepperModule,
    LeafletModule,
    CarouselModule.forRoot(),
    RouterModule.forChild(AdminRoutes),
    QuillModule.forRoot(),
  ]
})
export class AdminModule { }
