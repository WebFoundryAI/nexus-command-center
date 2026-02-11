import React from 'react';
import { PageHeader, Card, Table, Badge, Button } from '@nexus/shared';

export const Leads: React.FC = () => {
  const columns = [
    { key: 'site', header: 'Site' },
    { key: 'url', header: 'URL' },
    { key: 'name', header: 'Name' },
    { key: 'email', header: 'Email' },
    { key: 'phone', header: 'Phone' },
    {
      key: 'status',
      header: 'Status',
      render: (value: string) => {
        const variant = value === 'New' ? 'info' : value === 'Contacted' ? 'warning' : 'success';
        return <Badge variant={variant}>{value}</Badge>;
      }
    },
    { key: 'date', header: 'Date' },
  ];

  const data: Record<string, string>[] = [];

  return (
    <div>
      <PageHeader 
        title="Leads" 
        description="Track and manage your incoming leads"
        actions={<Button>Export Leads</Button>}
      />

      <Card>
        <Table columns={columns} data={data} />
      </Card>
    </div>
  );
};
