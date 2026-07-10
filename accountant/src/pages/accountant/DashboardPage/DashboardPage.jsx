import React from 'react';
import Finance from '../../../components/accountant/FinanceDasboard/FinanceDasboard';
import KPI from '../../../components/accountant/KPI/KPI';
import Charts from '../../../components/accountant/Charts/Charts';
import Recent from '../../../components/accountant/Recent transaction/Recent transaction';

const DashboardPage = () => (
  <>
    <Finance />
    <KPI />
    <Charts />
    <Recent />
  </>
);

export default DashboardPage;
