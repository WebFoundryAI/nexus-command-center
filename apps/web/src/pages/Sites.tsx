import { PageHeader, Card, Table, Badge, Button } from '@nexus/shared';

export const Sites: React.FC = () => {
  const columns = [
    { key: 'name', header: 'Site Name' },
    { key: 'url', header: 'URL' },
    { 
      key: 'status', 
      header: 'Status',
      render: (value: string) => (
        <Badge variant={value === 'Active' ? 'success' : 'default'}>{value}</Badge>
      )
    },
    { key: 'leads', header: 'Leads' },
    { key: 'uptime', header: 'Uptime' },
  ];

  const data = [
    { name: 'Miami Plumbing Services', url: 'miami-plumbing.com', status: 'Active', leads: 23, uptime: '99.9%' },
    { name: 'Dallas HVAC Repair', url: 'dallas-hvac.com', status: 'Active', leads: 18, uptime: '99.8%' },
    { name: 'Austin Roofing Pro', url: 'austin-roofing.com', status: 'Active', leads: 15, uptime: '100%' },
    { name: 'Houston Locksmith', url: 'houston-locksmith.com', status: 'Active', leads: 12, uptime: '99.5%' },
  ];

  return (
    <div>
      <PageHeader 
        title="Sites" 
        description="Manage all your rank and rent websites"
        actions={<Button>Add New Site</Button>}
      />

      <Card>
        <Table columns={columns} data={data} />
      </Card>
    </div>
  );
};
