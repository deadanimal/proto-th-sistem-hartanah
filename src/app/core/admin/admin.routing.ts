import { Routes } from '@angular/router';
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

export const AdminRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'budgeting-planning',
                children: [
                    {
                        path: 'budgeting',
                        component: BudgetPlanMainComponent
                    },
                    {
                        path: 'planning',
                        component: BudgetPlanPlanTrackingComponent
                    },
                    {
                        path: 'currency',
                        component: BudgetPlanCurrencyComponent
                    },
                    {
                        path: 'analysis',
                        component: BudgetPlanAnalysisComponent
                    },
                    {
                        path: 'document',
                        component: BudgetPlanDocumentComponent
                    },
                    {
                        path: 'report',
                        component: BudgetPlanReportComponent
                    },
                ]
            },
            {
                path: 'lease-admin',
                children: [
                    {
                        path: 'lease',
                        component: LeaseAdminMainComponent
                    },
                    {
                        path: 'data-tracking',
                        component: LeaseAdminDataTrackComponent
                    },
                    {
                        path: 'tenant',
                        component: LeaseAdminTenantComponent
                    },
                    {
                        path: 'renew-dashboard',
                        component: LeaseAdminRenewDashComponent
                    },
                    {
                        path: 'renew-lease',
                        component: LeaseAdminRenewLeaseComponent
                    },
                    {
                        path: 'report',
                        component: LeaseAdminReportComponent
                    },
                ]
            },
            {
                path: 'project-template',
                children: [
                    {
                        path: 'project',
                        component: ProjectTemplateMainComponent
                    },
                    {
                        path: 'assessment',
                        component: ProjectTemplateAsessmentComponent
                    },
                ]
            },
            {
                path: 'property-maintenance',
                children: [
                    {
                        path: 'property',
                        component: ProjectMaintenanceMainComponent
                    },
                    {
                        path: 'asset',
                        component: ProjectMaintenanceAssetComponent
                    },
                    {
                        path: 'work-order',
                        component: ProjectMaintenanceWorkOrderComponent
                    },
                    {
                        path: 'iventory',
                        component: ProjectMaintenanceIventoryComponent
                    },
                    {
                        path: 'report',
                        component: ProjectMaintenanceReportComponent
                    },
                ]
            },
            {
                path: 'screen-design',
                component: ScreenDesignComponent
            },
            {
                path: 'preventive-maintenance',
                component: PreventiveMaintenanceComponent
            },
            {
                path: 'contract-management',
                children: [
                    {
                        path: 'contract',
                        component: ContractManagementMainComponent
                    },
                    {
                        path: 'failure-code',
                        component: ContractManagementFailureCodeComponent
                    },
                ]
            },
            {
                path: 'asset-management',
                component: AssetManagementComponent
            },
            {
                path: 'construction-project-management',
                children: [
                    {
                        path: 'plan-schedule',
                        component: ConstructionPlanScheduleComponent
                    },
                    {
                        path: 'procurement',
                        component: ConstructionProcurementComponent
                    },
                ]
            },
            {
                path: 'safety-health',
                children: [
                    {
                        path: 'training',
                        component: SafetyTrainingComponent
                    },
                    {
                        path: 'licensing',
                        component: SafetyLicensingComponent
                    },
                    {
                        path: 'occupational',
                        component: SafetyOccupationalComponent
                    },
                    {
                        path: 'contractor',
                        component: SafetyContractorComponent
                    },
                ]
            },
            {
                path: 'property-investment',
                children: [
                    {
                        path: 'data-room',
                        component: PropertyDataRoomComponent
                    },
                    {
                        path: 'fact-sheet',
                        component: PropertyFactSheetComponent
                    },
                    {
                        path: 'market',
                        component: PropertyMarketComponent
                    },
                    {
                        path: 'analytical',
                        component: PropertyAnalyticalComponent
                    },
                ]
            },
            

            {
                path: 'management',
                children: [
                    {
                        path: 'audit-trails',
                        component: ManagementAuditComponent
                    },
                    {
                        path: 'user',
                        component: ManagementUserComponent
                    }
                ]
            },
            {
                path: 'report',
                component: ReportComponent
            }
        ]
    }
]