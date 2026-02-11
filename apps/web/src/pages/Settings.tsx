import { PageHeader, Card, Input, Button } from '@nexus/shared';

export const Settings: React.FC = () => {
  return (
    <div>
      <PageHeader 
        title="Settings" 
        description="Manage your API keys and integrations"
      />

      <div className="space-y-6">
        <Card title="API Keys">
          <div className="space-y-4">
            <Input 
              label="Google Analytics API Key"
              placeholder="Enter your Google Analytics API key"
              type="password"
            />
            <Input 
              label="Google Search Console API Key"
              placeholder="Enter your Search Console API key"
              type="password"
            />
            <Input 
              label="Ahrefs API Key"
              placeholder="Enter your Ahrefs API key"
              type="password"
            />
            <div className="pt-4">
              <Button>Save API Keys</Button>
            </div>
          </div>
        </Card>

        <Card title="Integrations">
          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b border-gray-200">
              <div>
                <h4 className="text-sm font-medium text-gray-900">Zapier</h4>
                <p className="text-xs text-gray-500">Connect to automate lead notifications</p>
              </div>
              <Button variant="outline" size="sm">Connect</Button>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-gray-200">
              <div>
                <h4 className="text-sm font-medium text-gray-900">Slack</h4>
                <p className="text-xs text-gray-500">Get real-time alerts in your workspace</p>
              </div>
              <Button variant="outline" size="sm">Connect</Button>
            </div>
            <div className="flex items-center justify-between py-3">
              <div>
                <h4 className="text-sm font-medium text-gray-900">Email Notifications</h4>
                <p className="text-xs text-gray-500">Receive updates via email</p>
              </div>
              <Button variant="outline" size="sm">Configure</Button>
            </div>
          </div>
        </Card>

        <Card title="Email Settings">
          <div className="space-y-4">
            <Input 
              label="Notification Email"
              placeholder="your@email.com"
              type="email"
            />
            <Input 
              label="SMTP Server"
              placeholder="smtp.example.com"
            />
            <Input 
              label="SMTP Port"
              placeholder="587"
              type="number"
            />
            <div className="pt-4">
              <Button>Save Email Settings</Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
