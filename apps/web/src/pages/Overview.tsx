import React from 'react';
import { PageHeader, Card, Badge } from '@nexus/shared';

export const Overview: React.FC = () => {
  const kpis = [
    { label: 'Total Sites', value: '24', change: '+12%', trend: 'up' },
    { label: 'Active Leads', value: '156', change: '+23%', trend: 'up' },
    { label: 'Uptime', value: '99.8%', change: '+0.2%', trend: 'up' },
    { label: 'Monthly Revenue', value: '$12,450', change: '+18%', trend: 'up' },
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
                <Badge variant="success">{kpi.change}</Badge>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Recent Activity">
          <div className="space-y-4">
            <div className="flex items-center justify-between py-2 border-b border-gray-100">
              <div>
                <p className="text-sm font-medium text-gray-900">New lead captured</p>
                <p className="text-xs text-gray-500">Miami Plumbing - 5 min ago</p>
              </div>
              <Badge variant="info">New</Badge>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-gray-100">
              <div>
                <p className="text-sm font-medium text-gray-900">Site ranking improved</p>
                <p className="text-xs text-gray-500">Dallas HVAC - 1 hour ago</p>
              </div>
              <Badge variant="success">SEO</Badge>
            </div>
            <div className="flex items-center justify-between py-2">
              <div>
                <p className="text-sm font-medium text-gray-900">Uptime alert resolved</p>
                <p className="text-xs text-gray-500">Austin Roofing - 3 hours ago</p>
              </div>
              <Badge variant="default">Resolved</Badge>
            </div>
          </div>
        </Card>

        <Card title="Top Performing Sites">
          <div className="space-y-4">
            {['Miami Plumbing Services', 'Dallas HVAC Repair', 'Austin Roofing Pro'].map((site, index) => (
              <div key={site} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                <div className="flex items-center gap-3">
                  <span className="text-lg font-bold text-gray-400">#{index + 1}</span>
                  <p className="text-sm font-medium text-gray-900">{site}</p>
                </div>
                <Badge variant="success">Active</Badge>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};
