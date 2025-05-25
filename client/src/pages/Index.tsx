
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Train, Users, Shield, Clock, Star } from 'lucide-react';
import { AuthModal } from '@/components/AuthModal';
import { DashboardSelector } from '@/components/DashboardSelector';

const Index = () => {
  const [authModal, setAuthModal] = useState<{ isOpen: boolean; mode: 'login' | 'register' }>({
    isOpen: false,
    mode: 'login'
  });
  const [showDashboard, setShowDashboard] = useState(false);

  if (showDashboard) {
    return <DashboardSelector onBack={() => setShowDashboard(false)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="bg-sl-red-950 p-2 rounded-lg">
                <Train className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">TrackLanka</h1>
                <p className="text-xs text-gray-500">Railway Tracking System</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                onClick={() => setAuthModal({ isOpen: true, mode: 'login' })}
                className="hidden sm:inline-flex"
              >
                Login
              </Button>
              <Button
                onClick={() => setAuthModal({ isOpen: true, mode: 'register' })}
                className="bg-sl-red-950 hover:bg-sl-red-800 text-white"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 hero-pattern">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-sl-red-950 text-white hover:bg-sl-red-800">
                  🚂 Real-time Train Tracking
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Track Sri Lankan
                  <span className="text-sl-red-950 block">Railways</span>
                  in Real-time
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Experience seamless railway tracking across Sri Lanka. Monitor train locations, 
                  check schedules, and manage your journey with our comprehensive tracking system.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  onClick={() => setShowDashboard(true)}
                  className="bg-sl-red-950 hover:bg-sl-red-800 text-white px-8 py-6 text-lg train-gradient"
                >
                  <Train className="mr-2 h-5 w-5" />
                  Start Tracking
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => setAuthModal({ isOpen: true, mode: 'login' })}
                  className="px-8 py-6 text-lg border-sl-red-950 text-sl-red-950 hover:bg-sl-red-50"
                >
                  View Demo
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-sl-red-950">150+</div>
                  <div className="text-sm text-gray-600">Active Trains</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-sl-red-950">50K+</div>
                  <div className="text-sm text-gray-600">Daily Users</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-sl-red-950">99.9%</div>
                  <div className="text-sm text-gray-600">Uptime</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Card className="p-8 glass-effect border-0 shadow-2xl">
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-gray-900">Live Train Status</h3>
                    <Badge className="bg-green-100 text-green-800 animate-pulse-red">Live</Badge>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-white rounded-lg border">
                      <div className="flex items-center space-x-3">
                        <div className="bg-sl-red-950 p-2 rounded-full">
                          <Train className="h-4 w-4 text-white" />
                        </div>
                        <div>
                          <div className="font-medium">Colombo Express</div>
                          <div className="text-sm text-gray-500">Route: CMB → KDY</div>
                        </div>
                      </div>
                      <Badge className="bg-green-100 text-green-800">On Time</Badge>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-white rounded-lg border">
                      <div className="flex items-center space-x-3">
                        <div className="bg-sl-gold-500 p-2 rounded-full">
                          <Train className="h-4 w-4 text-white" />
                        </div>
                        <div>
                          <div className="font-medium">Udarata Menike</div>
                          <div className="text-sm text-gray-500">Route: CMB → BDL</div>
                        </div>
                      </div>
                      <Badge className="bg-yellow-100 text-yellow-800">5 min delay</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Complete Railway Management Solution
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive platform serves passengers, drivers, and administrators 
              with tailored dashboards and real-time tracking capabilities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardContent className="space-y-4">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Passenger Dashboard</h3>
                <p className="text-gray-600">
                  Track trains in real-time, search routes, view schedules, and plan your journey efficiently.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Real-time train locations</li>
                  <li>• Route planning</li>
                  <li>• Schedule information</li>
                  <li>• Delay notifications</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardContent className="space-y-4">
                <div className="bg-sl-red-100 p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                  <Train className="h-8 w-8 text-sl-red-950" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Driver Dashboard</h3>
                <p className="text-gray-600">
                  Manage train status, update locations, set occupancy levels, and communicate with dispatch.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Location updates</li>
                  <li>• Occupancy management</li>
                  <li>• Route status</li>
                  <li>• Real-time communication</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardContent className="space-y-4">
                <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Admin Dashboard</h3>
                <p className="text-gray-600">
                  Comprehensive system overview with user management, analytics, and operational controls.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• System analytics</li>
                  <li>• User management</li>
                  <li>• Train fleet control</li>
                  <li>• Operational insights</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-sl-red-950 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <MapPin className="h-12 w-12 mx-auto mb-4 text-sl-gold-400" />
              <div className="text-4xl font-bold">25+</div>
              <div className="text-sl-red-100">Major Stations</div>
            </div>
            <div className="space-y-2">
              <Train className="h-12 w-12 mx-auto mb-4 text-sl-gold-400" />
              <div className="text-4xl font-bold">150+</div>
              <div className="text-sl-red-100">Active Trains</div>
            </div>
            <div className="space-y-2">
              <Clock className="h-12 w-12 mx-auto mb-4 text-sl-gold-400" />
              <div className="text-4xl font-bold">24/7</div>
              <div className="text-sl-red-100">Live Monitoring</div>
            </div>
            <div className="space-y-2">
              <Star className="h-12 w-12 mx-auto mb-4 text-sl-gold-400" />
              <div className="text-4xl font-bold">4.9/5</div>
              <div className="text-sl-red-100">User Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-sl-red-950 to-sl-red-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Ready to Transform Your Railway Experience?
            </h2>
            <p className="text-xl text-sl-red-100">
              Join thousands of users who trust TrackLanka for reliable railway tracking across Sri Lanka.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => setShowDashboard(true)}
                className="bg-white text-sl-red-950 hover:bg-gray-100 px-8 py-6 text-lg"
              >
                Access Dashboard
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => setAuthModal({ isOpen: true, mode: 'register' })}
                className="border-white text-white hover:bg-white hover:text-sl-red-950 px-8 py-6 text-lg"
              >
                Create Account
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="bg-sl-red-950 p-2 rounded-lg">
                <Train className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">TrackLanka</h3>
                <p className="text-sm text-gray-400">Railway Tracking System</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Connecting Sri Lanka through intelligent railway tracking and management.
            </p>
            <p className="text-sm text-gray-500">
              © 2024 TrackLanka. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      <AuthModal
        isOpen={authModal.isOpen}
        mode={authModal.mode}
        onClose={() => setAuthModal({ isOpen: false, mode: 'login' })}
        onModeChange={(mode) => setAuthModal({ ...authModal, mode })}
      />
    </div>
  );
};

export default Index;