import React from 'react';
import { PageHeader, Card, Table, Badge, Button } from '@nexus/shared';

export const Leads: React.FC = () => {
  const columns = [
    { key: 'name', header: 'Name' },
    { key: 'email', header: 'Email' },
    { key: 'phone', header: 'Phone' },
    { key: 'site', header: 'Site' },
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

  const data = [
    { name: 'John Smith', email: 'john@example.com', phone: '555-0101', site: 'Miami Plumbing', status: 'New', date: '2026-02-11' },
    { name: 'Sarah Johnson', email: 'sarah@example.com', phone: '555-0102', site: 'Dallas HVAC', status: 'Contacted', date: '2026-02-10' },
    { name: 'Mike Wilson', email: 'mike@example.com', phone: '555-0103', site: 'Austin Roofing', status: 'Converted', date: '2026-02-09' },
    { name: 'Emily Brown', email: 'emily@example.com', phone: '555-0104', site: 'Houston Locksmith', status: 'New', date: '2026-02-11' },
  ];

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
