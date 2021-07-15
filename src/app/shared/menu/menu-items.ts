export interface RouteInfo {
    path: string;
    title: string;
    type: string;
    icontype: string;
    collapse?: string;
    isCollapsed?: boolean;
    isCollapsing?: any;
    children?: ChildrenItems[];
}

export interface ChildrenItems {
    path: string;
    title: string;
    type?: string;
    collapse?: string;
    children?: ChildrenItems2[];
    isCollapsed?: boolean;
}
export interface ChildrenItems2 {
    path?: string;
    title?: string;
    type?: string;
}

// Menu Items
export const ROUTES: RouteInfo[] = [
  {
    path: '/admin/dashboard',
    title: 'Dashboard',
    type: 'link',
    icontype: 'fas fa-home text-dark'
  },
  {
    path: '/admin/budgeting-planning',
    title: 'Budgeting & Planning',
    type: 'sub',
    icontype: 'fas fa-road text-dark',
    collapse: 'budgeting-planning',
    isCollapsed: true,
    children: [
      { path: 'budgeting', title: 'Budgeting & Planning', type: 'link' },
      { path: 'planning', title: 'Planning & Tracking Budget', type: 'link' },
      { path: 'currency', title: 'Currency', type: 'link' },
      { path: 'analysis', title: 'Analysis Budget', type: 'link' },
      { path: 'document', title: 'Document Management', type: 'link' },
      { path: 'report', title: 'Report', type: 'link' },
    ]
  },
  {
    path: '/admin/lease-admin',
    title: 'Lease Admin',
    type: 'sub',
    icontype: 'fas fa-list text-dark',
    collapse: 'lease-admin',
    isCollapsed: true,
    children: [
      { path: 'lease', title: 'Lease Admin', type: 'link' },
      { path: 'data-tracking', title: 'Data Tracking', type: 'link' },
      { path: 'tenant', title: 'Tenant Application', type: 'link' },
      { path: 'renew-dashboard', title: 'Renewal Dashboard', type: 'link' },
      // { path: 'renew-lease', title: 'Renewal Lease', type: 'link' },
      // { path: 'report', title: 'Report', type: 'link' },
    ]
  },
  {
    path: '/admin/project-template',
    title: 'Project Template',
    type: 'sub',
    icontype: 'fab fa-rocketchat text-dark',
    collapse: 'project-template',
    isCollapsed: true,
    children: [
      { path: 'project', title: 'Project Template', type: 'link' },
      { path: 'assessment', title: 'Assessment', type: 'link' },
    ]
  },
  {
    path: '/admin/property-maintenance',
    title: 'Property Maintenance',
    type: 'sub',
    icontype: 'fas fa-pencil-ruler text-dark',
    collapse: 'property-maintenance',
    isCollapsed: true,
    children: [
      { path: 'property', title: 'Property Maintenance', type: 'link' },
      { path: 'asset', title: 'Asset Placement', type: 'link' },
      { path: 'work-order', title: 'Work Order', type: 'link' },
      // { path: 'iventory', title: 'Iventory', type: 'link' },
      // { path: 'report', title: 'Report', type: 'link' },
    ]
  },
  {
    path: '/admin/screen-design',
    title: 'Screen Design',
    type: 'link',
    icontype: 'fas fa-desktop text-dark'
  },
  {
    path: '/admin/preventive-maintenance',
    title: 'Preventive Maintenance',
    type: 'link',
    icontype: 'fas fa-business-time text-dark'
  },
  {
    path: '/admin/contract-management',
    title: 'Contract Management',
    type: 'sub',
    icontype: 'fas fa-handshake text-dark',
    collapse: 'contract-management',
    isCollapsed: true,
    children: [
      { path: 'contract', title: 'Contract', type: 'link' },
      { path: 'failure-code', title: 'Failure Code Master List', type: 'link' },
    ]
  },
  {
    path: '/admin/asset-management',
    title: 'Asset Management',
    type: 'link',
    icontype: 'fas fa-money-bill-wave text-dark'
  },
  // {
  //   path: '/admin/construction-project-management',
  //   title: 'Construction Project Management',
  //   type: 'sub',
  //   icontype: 'fas fa-building text-dark',
  //   collapse: 'construction-project-management',
  //   isCollapsed: true,
  //   children: [
  //     { path: 'plan-schedule', title: 'Project Planning & Schedulling', type: 'link' },
  //     { path: 'procurement', title: 'Procurement', type: 'link' },
  //   ]
  // },
  // {
  //   path: '/admin/safety-health',
  //   title: 'Safety Health',
  //   type: 'sub',
  //   icontype: '	fas fa-ambulance text-dark',
  //   collapse: 'safety-health',
  //   isCollapsed: true,
  //   children: [
  //     { path: 'training', title: 'Training Management', type: 'link' },
  //     { path: 'licensing', title: 'Licensing Management', type: 'link' },
  //     { path: 'occupational', title: 'Occupational Incident Management', type: 'link' },
  //     { path: 'contractor', title: 'Contractor Management', type: 'link' },
  //   ]
  // },
  // {
  //   path: '/admin/property-investment',
  //   title: 'Property Investment',
  //   type: 'sub',
  //   icontype: 'fas fa-chart-line text-dark',
  //   collapse: 'property-investment',
  //   isCollapsed: true,
  //   children: [
  //     { path: 'data-room', title: 'Data room', type: 'link' },
  //     { path: 'fact-sheet', title: 'Fast Sheet', type: 'link' },
  //     { path: 'market', title: 'Market Intellingence', type: 'link' },
  //     { path: 'analytical', title: 'Analytical Dashboard', type: 'link' },
  //   ]
  // },

  // {
  //   path: '/admin/management',
  //   title: 'Management',
  //   type: 'sub',
  //   icontype: 'fas fa-file-invoice text-pink',
  //   collapse: 'management',
  //   isCollapsed: true,
  //   children: [
  //     { path: 'audit-trails', title: 'Audit Trails', type: 'link' },
  //     { path: 'user', title: 'User', type: 'link' },
  //   ]
  // },
  // {
  //   path: '/admin/report',
  //   title: 'Reporting',
  //   type: 'link',
  //   icontype: 'fas fa-chart-bar text-red'
  // },
  /*
  {
    path: '/helpdesk',
    title: 'Helpdesk',
    type: 'link',
    icontype: 'fas fa-life-ring text-blue'
  },
  {
    path: '/audit',
    title: 'Audit Trail',
    type: 'link',
    icontype: 'fas fa-braille text-indigo'
  }
  */
];

export const ROUTESUSER: RouteInfo[] = [
  {
    path: '/dashboard',
    title: 'Dashboard',
    type: 'link',
    icontype: 'fas fa-desktop text-warning'
  },
  {
    path: '/applications',
    title: 'Applications',
    type: 'link',
    icontype: 'fas fa-file-invoice text-pink'
  },
  {
    path: '/houses',
    title: 'Houses',
    type: 'link',
    icontype: 'fas fa-home text-purple'
  },
  {
    path: '/management',
    title: 'Management',
    type: 'link',
    icontype: 'fas fa-tasks text-red'
  },
  {
    path: '/report',
    title: 'Report',
    type: 'link',
    icontype: 'fas fa-chart-bar text-green'
  },
  {
    path: '/helpdesk',
    title: 'Helpdesk',
    type: 'link',
    icontype: 'fas fa-life-ring text-blue'
  },
  {
    path: '/audit',
    title: 'Audit Trail',
    type: 'link',
    icontype: 'fas fa-braille text-indigo'
  }/*,
  {
    path: '/maintenance',
    title: 'Maintenance',
    type: 'link',
    icontype: 'fas fa-cogs text-orange'
  }*/
  /*{
    path: '/settings',
    title: 'Settings',
    type: 'link',
    icontype: 'fas fa-sliders-h text-blue'
  }*/
];