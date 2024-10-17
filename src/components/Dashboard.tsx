import React from 'react';
import WorkStatus from './WorkStatus';
import CashFlow from './CashFlow';
import RewardPoints from './RewardPoints';
import Transactions from './Transactions';
import Affiliates from './Affiliates';

const Dashboard: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <WorkStatus />
      <CashFlow />
      <RewardPoints />
      <Transactions />
      <Affiliates />
    </div>
  );
};

export default Dashboard;