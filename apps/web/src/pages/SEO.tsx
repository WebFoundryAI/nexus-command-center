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

  const data: Record<string, string | number>[] = [];

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
            <span className="text-3xl font-bold text-gray-900 mt-2">0</span>
          </div>
        </Card>
        <Card>
          <div className="flex flex-col">
            <span className="text-sm text-gray-500">Avg Position</span>
            <span className="text-3xl font-bold text-gray-900 mt-2">--</span>
          </div>
        </Card>
        <Card>
          <div className="flex flex-col">
            <span className="text-sm text-gray-500">Total Traffic</span>
            <span className="text-3xl font-bold text-gray-900 mt-2">0</span>
          </div>
        </Card>
        <Card>
          <div className="flex flex-col">
            <span className="text-sm text-gray-500">Top 3 Rankings</span>
            <span className="text-3xl font-bold text-gray-900 mt-2">0</span>
          </div>
        </Card>
      </div>

      <Card>
        <Table columns={columns} data={data} />
      </Card>
    </div>
  );
};
