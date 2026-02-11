import React from 'react';
import { PageHeader, Card, Table, Badge } from '@nexus/shared';

export const SEO: React.FC = () => {
  const columns = [
    { key: 'site', header: 'Site' },
    { key: 'ranking', header: 'Avg Ranking' },
    { key: 'keywords', header: 'Keywords Tracked' },
    { 
      key: 'trend', 
      header: 'Trend',
      render: (value: string) => {
        const variant = value === 'Up' ? 'success' : value === 'Down' ? 'error' : 'default';
        return <Badge variant={variant}>{value}</Badge>;
      }
    },
    { key: 'traffic', header: 'Organic Traffic' },
  ];

  const data = [
    { site: 'Miami Plumbing Services', ranking: '#2.4', keywords: 45, trend: 'Up', traffic: '2,450/mo' },
    { site: 'Dallas HVAC Repair', ranking: '#3.1', keywords: 38, trend: 'Up', traffic: '1,890/mo' },
    { site: 'Austin Roofing Pro', ranking: '#1.8', keywords: 52, trend: 'Stable', traffic: '3,120/mo' },
    { site: 'Houston Locksmith', ranking: '#4.2', keywords: 31, trend: 'Down', traffic: '1,230/mo' },
  ];

  return (
    <div>
      <PageHeader 
        title="SEO Performance" 
        description="Track keyword rankings and organic traffic"
      />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <div className="flex flex-col">
            <span className="text-sm text-gray-500">Total Keywords</span>
            <span className="text-3xl font-bold text-gray-900 mt-2">166</span>
          </div>
        </Card>
        <Card>
          <div className="flex flex-col">
            <span className="text-sm text-gray-500">Avg Position</span>
            <span className="text-3xl font-bold text-gray-900 mt-2">#2.9</span>
          </div>
        </Card>
        <Card>
          <div className="flex flex-col">
            <span className="text-sm text-gray-500">Total Traffic</span>
            <span className="text-3xl font-bold text-gray-900 mt-2">8.7k</span>
          </div>
        </Card>
        <Card>
          <div className="flex flex-col">
            <span className="text-sm text-gray-500">Top 3 Rankings</span>
            <span className="text-3xl font-bold text-gray-900 mt-2">124</span>
          </div>
        </Card>
      </div>

      <Card>
        <Table columns={columns} data={data} />
      </Card>
    </div>
  );
};
