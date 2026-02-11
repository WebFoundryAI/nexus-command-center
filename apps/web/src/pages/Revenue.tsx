import React from 'react';
import { PageHeader, Card, Table } from '@nexus/shared';

export const Revenue: React.FC = () => {
  const columns = [
    { key: 'site', header: 'Site' },
    { key: 'client', header: 'Client' },
    { key: 'monthly', header: 'Monthly Rate' },
    { key: 'ytd', header: 'YTD Revenue' },
    { key: 'status', header: 'Payment Status' },
  ];

  const data: Record<string, string>[] = [];

  return (
    <div>
      <PageHeader 
        title="Revenue" 
        description="Track your rental income and payments"
      />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <div className="flex flex-col">
            <span className="text-sm text-gray-500">Monthly Revenue</span>
            <span className="text-3xl font-bold text-gray-900 mt-2">$0</span>
            <span className="text-xs text-gray-500 mt-1">--</span>
          </div>
        </Card>
        <Card>
          <div className="flex flex-col">
            <span className="text-sm text-gray-500">YTD Revenue</span>
            <span className="text-3xl font-bold text-gray-900 mt-2">$0</span>
          </div>
        </Card>
        <Card>
          <div className="flex flex-col">
            <span className="text-sm text-gray-500">Active Rentals</span>
            <span className="text-3xl font-bold text-gray-900 mt-2">0</span>
          </div>
        </Card>
        <Card>
          <div className="flex flex-col">
            <span className="text-sm text-gray-500">Avg Rate/Site</span>
            <span className="text-3xl font-bold text-gray-900 mt-2">$0</span>
          </div>
        </Card>
      </div>

      <Card>
        <Table columns={columns} data={data} />
      </Card>
    </div>
  );
};
