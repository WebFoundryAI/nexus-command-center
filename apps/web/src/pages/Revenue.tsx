import { PageHeader, Card, Table } from '@nexus/shared';

export const Revenue: React.FC = () => {
  const columns = [
    { key: 'site', header: 'Site' },
    { key: 'client', header: 'Client' },
    { key: 'monthly', header: 'Monthly Rate' },
    { key: 'ytd', header: 'YTD Revenue' },
    { key: 'status', header: 'Payment Status' },
  ];

  const data = [
    { site: 'Miami Plumbing Services', client: 'ABC Plumbing LLC', monthly: '$800', ytd: '$1,600', status: 'Paid' },
    { site: 'Dallas HVAC Repair', client: 'Cool Air Systems', monthly: '$750', ytd: '$1,500', status: 'Paid' },
    { site: 'Austin Roofing Pro', client: 'Elite Roofing Inc', monthly: '$900', ytd: '$1,800', status: 'Pending' },
    { site: 'Houston Locksmith', client: 'Quick Lock Services', monthly: '$650', ytd: '$1,300', status: 'Paid' },
  ];

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
            <span className="text-3xl font-bold text-gray-900 mt-2">$12,450</span>
            <span className="text-xs text-green-600 mt-1">+18% from last month</span>
          </div>
        </Card>
        <Card>
          <div className="flex flex-col">
            <span className="text-sm text-gray-500">YTD Revenue</span>
            <span className="text-3xl font-bold text-gray-900 mt-2">$24,900</span>
          </div>
        </Card>
        <Card>
          <div className="flex flex-col">
            <span className="text-sm text-gray-500">Active Rentals</span>
            <span className="text-3xl font-bold text-gray-900 mt-2">24</span>
          </div>
        </Card>
        <Card>
          <div className="flex flex-col">
            <span className="text-sm text-gray-500">Avg Rate/Site</span>
            <span className="text-3xl font-bold text-gray-900 mt-2">$519</span>
          </div>
        </Card>
      </div>

      <Card>
        <Table columns={columns} data={data} />
      </Card>
    </div>
  );
};
