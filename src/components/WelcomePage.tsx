import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface WelcomePageProps {
  username: string;
  onLogout: () => void;
}

const WelcomePage: React.FC<WelcomePageProps> = ({ username, onLogout }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="w-full max-w-2xl space-y-8">
        {/* Welcome Card */}
        <Card className="border-border shadow-xl bg-gradient-to-br from-card to-card/90">
          <CardHeader className="text-center space-y-4 pb-8">
            <div className="mx-auto w-24 h-24 bg-primary rounded-full flex items-center justify-center mb-4">
              <span className="text-4xl">🎉</span>
            </div>
            <CardTitle className="text-4xl font-bold text-foreground">
              Welcome Mr. {username.charAt(0).toUpperCase() + username.slice(1)}!
            </CardTitle>
            <p className="text-xl text-muted-foreground">
              {username === 'hacker' ? 
                "You magnificent digital wizard! 🧙‍♂️ Ready to hack the mainframe?" :
                "You've successfully logged into the Arab United Company for Konafa system!"
              }
            </p>
          </CardHeader>
          <CardContent className="text-center space-y-6">
            {username === 'hacker' && (
              <div className="bg-muted/50 p-6 rounded-lg border border-border">
                <p className="text-lg font-mono text-accent-foreground mb-2">
                  ACCESS GRANTED 🔓
                </p>
                <p className="text-muted-foreground">
                  Welcome to the matrix, Neo... I mean, {username}! 
                  <br />
                  Your hacking skills are legendary! 🚀
                </p>
              </div>
            )}
            
            <div className="space-y-4">
              <p className="text-foreground">
                You are now connected to the Konafa management system.
              </p>
              <Button 
                onClick={onLogout}
                variant="outline" 
                size="lg"
                className="border-border text-foreground hover:bg-accent"
              >
                Logout
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Company Info */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground p-4 rounded-lg">
            <h2 className="text-lg font-semibold">Arab United Company for Konafa</h2>
            <p className="text-primary-foreground/90 text-sm">
              Serving the finest konafa since forever
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;