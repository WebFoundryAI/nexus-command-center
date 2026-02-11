import React from 'react';
import { PageHeader, Card } from '@nexus/shared';

export const Overview: React.FC = () => {
  const kpis = [
    { label: 'Total Sites', value: '0', change: '--', trend: 'up' },
    { label: 'Active Leads', value: '0', change: '--', trend: 'up' },
    { label: 'Uptime', value: '--', change: '--', trend: 'up' },
    { label: 'Monthly Revenue', value: '$0', change: '--', trend: 'up' },
  ];

  return (
    <div>
      <PageHeader 
        title="Overview" 
        description="Monitor your key performance indicators and site metrics"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {kpis.map((kpi) => (
          <Card key={kpi.label}>
            <div className="flex flex-col">
              <span className="text-sm text-gray-500">{kpi.label}</span>
              <span className="text-3xl font-bold text-gray-900 mt-2">{kpi.value}</span>
              <div className="flex items-center mt-2">
                <span className="text-sm text-gray-400">{kpi.change}</span>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Recent Activity">
          <div className="space-y-4">
            <p className="text-sm text-gray-500">No recent activity</p>
          </div>
        </Card>

        <Card title="Top Performing Sites">
          <div className="space-y-4">
            <p className="text-sm text-gray-500">No sites yet</p>
          </div>
        </Card>
      </div>
    </div>
  );
};
