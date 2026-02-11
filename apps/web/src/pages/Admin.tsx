import React from 'react';
import { PageHeader, Card, Table, Button, Badge } from '@nexus/shared';

export const Admin: React.FC = () => {
  const userColumns = [
    { key: 'name', header: 'Name' },
    { key: 'email', header: 'Email' },
    { 
      key: 'role', 
      header: 'Role',
      render: (value: string) => (
        <Badge variant={value === 'Admin' ? 'error' : 'info'}>{value}</Badge>
      )
    },
    { key: 'lastActive', header: 'Last Active' },
  ];

  const users = [
    { name: 'Admin User', email: 'admin@nexus.com', role: 'Admin', lastActive: '2 min ago' },
    { name: 'John Manager', email: 'john@nexus.com', role: 'Manager', lastActive: '1 hour ago' },
    { name: 'Sarah Viewer', email: 'sarah@nexus.com', role: 'Viewer', lastActive: '3 hours ago' },
  ];

  const activityColumns = [
    { key: 'user', header: 'User' },
    { key: 'action', header: 'Action' },
    { key: 'timestamp', header: 'Timestamp' },
  ];

  const activities = [
    { user: 'Admin User', action: 'Updated site settings', timestamp: '2026-02-11 12:30' },
    { user: 'John Manager', action: 'Added new lead', timestamp: '2026-02-11 11:45' },
    { user: 'Sarah Viewer', action: 'Viewed revenue report', timestamp: '2026-02-11 10:15' },
  ];

  return (
    <div>
      <PageHeader 
        title="Admin" 
        description="Manage users and system settings"
        actions={<Button>Add User</Button>}
      />

      <div className="space-y-6">
        <Card title="User Management">
          <Table columns={userColumns} data={users} />
        </Card>

        <Card title="System Activity Log">
          <Table columns={activityColumns} data={activities} />
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card title="System Status">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Database</span>
                <Badge variant="success">Healthy</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">API Server</span>
                <Badge variant="success">Running</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Background Jobs</span>
                <Badge variant="success">Active</Badge>
              </div>
            </div>
          </Card>

          <Card title="Storage & Resources">
            <div className="space-y-3">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-gray-600">Storage Used</span>
                  <span className="text-sm font-medium">2.4 GB / 10 GB</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '24%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-gray-600">API Calls (Monthly)</span>
                  <span className="text-sm font-medium">45,230 / 100,000</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '45%' }}></div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
