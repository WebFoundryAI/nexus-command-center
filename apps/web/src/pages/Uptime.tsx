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

  const data = [
    { site: 'Miami Plumbing Services', status: 'Up', uptime: '99.9%', responseTime: '245ms', lastChecked: '2 min ago' },
    { site: 'Dallas HVAC Repair', status: 'Up', uptime: '99.8%', responseTime: '312ms', lastChecked: '1 min ago' },
    { site: 'Austin Roofing Pro', status: 'Up', uptime: '100%', responseTime: '189ms', lastChecked: '3 min ago' },
    { site: 'Houston Locksmith', status: 'Up', uptime: '99.5%', responseTime: '278ms', lastChecked: '2 min ago' },
  ];

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
            <span className="text-3xl font-bold text-gray-900 mt-2">99.8%</span>
            <span className="text-xs text-gray-500 mt-1">Last 30 days</span>
          </div>
        </Card>
        <Card>
          <div className="flex flex-col">
            <span className="text-sm text-gray-500">Avg Response Time</span>
            <span className="text-3xl font-bold text-gray-900 mt-2">256ms</span>
            <span className="text-xs text-gray-500 mt-1">Across all sites</span>
          </div>
        </Card>
        <Card>
          <div className="flex flex-col">
            <span className="text-sm text-gray-500">Sites Monitored</span>
            <span className="text-3xl font-bold text-gray-900 mt-2">24</span>
            <span className="text-xs text-gray-500 mt-1">All operational</span>
          </div>
        </Card>
      </div>

      <Card>
        <Table columns={columns} data={data} />
      </Card>
    </div>
  );
};
