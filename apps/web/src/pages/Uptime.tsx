import React from 'react';
import { PageHeader, Card, Table, Badge } from '@nexus/shared';

export const Uptime: React.FC = () => {
  const columns = [
    { key: 'site', header: 'Site' },
    { 
      key: 'status', 
      header: 'Current Status',
      render: (value: string) => (
        <Badge variant={value === 'Up' ? 'success' : 'error'}>{value}</Badge>
      )
    },
    { key: 'uptime', header: 'Uptime (30d)' },
    { key: 'responseTime', header: 'Avg Response Time' },
    { key: 'lastChecked', header: 'Last Checked' },
  ];

  const data: Record<string, string>[] = [];

  return (
    <div>
      <PageHeader 
        title="Uptime Monitoring" 
        description="Monitor the uptime and performance of all your sites"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <div className="flex flex-col">
            <span className="text-sm text-gray-500">Overall Uptime</span>
            <span className="text-3xl font-bold text-gray-900 mt-2">--</span>
            <span className="text-xs text-gray-500 mt-1">Last 30 days</span>
          </div>
        </Card>
        <Card>
          <div className="flex flex-col">
            <span className="text-sm text-gray-500">Avg Response Time</span>
            <span className="text-3xl font-bold text-gray-900 mt-2">--</span>
            <span className="text-xs text-gray-500 mt-1">Across all sites</span>
          </div>
        </Card>
        <Card>
          <div className="flex flex-col">
            <span className="text-sm text-gray-500">Sites Monitored</span>
            <span className="text-3xl font-bold text-gray-900 mt-2">0</span>
            <span className="text-xs text-gray-500 mt-1">--</span>
          </div>
        </Card>
      </div>

      <Card>
        <Table columns={columns} data={data} />
      </Card>
    </div>
  );
};
