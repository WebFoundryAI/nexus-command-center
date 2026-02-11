import React from 'react';
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

  const data: Record<string, string | number>[] = [];

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
