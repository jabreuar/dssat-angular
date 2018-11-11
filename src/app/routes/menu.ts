const Dashboard = {
    text: 'Dashboard',
    link: '/dashboard/v1',
    icon: 'icon-speedometer'
};

const Monitor = {
    text: 'Add Monitor',
    link: '/monitor/standard',
    icon: 'icon-note'
};

const SearchMonitor = {
    text: 'SearchMonitor',
    link: '/search/standard',
    icon: 'icon-grid'
};

const headingMain = {
    text: 'Main Navigation',
    heading: true
};

const headingComponents = {
    text: 'Components',
    heading: true
};

export const menu = [
    headingMain,    
    Dashboard,
    headingComponents,
    Monitor,
    SearchMonitor
];
