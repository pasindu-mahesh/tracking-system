import { Button } from "@/components/ui/button"
import { Card, CardContent } from "../components/ui/card"
import { Train, MapPin, Users, Clock } from 'lucide-react'
import { Link } from "react-router-dom"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-red-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="bg-[#B11226] p-2 rounded-lg">
                <Train className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">RailTrack LK</span>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="text-gray-700 hover:text-[#B11226]">
                Login
              </Button>
              <Button className="bg-[#B11226] hover:bg-[#8B0E1F] text-white">Sign Up</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                  Track Your Journey
                  <span className="block text-[#B11226]">Across Sri Lanka</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Real-time train tracking, route planning, and seamless travel experience across the beautiful island
                  of Sri Lanka.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-[#B11226] hover:bg-[#8B0E1F] text-white px-8 py-3">
                  Get Started
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#B11226] text-[#B11226] hover:bg-[#B11226] hover:text-white px-8 py-3"
                >
                  Learn More
                </Button>
              </div>

              {/* Social Login */}
              <div className="space-y-4">
                <p className="text-sm text-gray-500">Or continue with</p>
                <div className="flex gap-3">
                  <Button variant="outline" className="flex-1 border-gray-300">
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="currentColor"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="currentColor"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="currentColor"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </svg>
                    Google
                  </Button>
                  <Button variant="outline" className="flex-1 border-gray-300">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                    Facebook
                  </Button>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-[#B11226] to-[#8B0E1F] rounded-2xl p-8 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=500&h=400&fit=crop&crop=center"
                  alt="Sri Lankan Train"
                  className="rounded-lg w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose RailTrack LK?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the future of train travel in Sri Lanka with our comprehensive tracking system
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-red-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="bg-[#B11226] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Real-time Tracking</h3>
                <p className="text-gray-600">
                  Track trains in real-time across Sri Lanka with precise location updates
                </p>
              </CardContent>
            </Card>

            <Card className="border-red-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="bg-[#B11226] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Schedule Updates</h3>
                <p className="text-gray-600">
                  Get instant notifications about delays, cancellations, and schedule changes
                </p>
              </CardContent>
            </Card>

            <Card className="border-red-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="bg-[#B11226] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Multi-Role Access</h3>
                <p className="text-gray-600">Dedicated dashboards for passengers, drivers, and administrators</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#B11226] to-[#8B0E1F]">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Transform Your Journey?</h2>
          <p className="text-xl text-red-100 mb-8">Join thousands of travelers already using RailTrack LK</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/passenger">
              <Button size="lg" className="bg-white text-[#B11226] hover:bg-gray-100 px-8 py-3">
                Passenger Dashboard
              </Button>
            </Link>
            <Link to="/driver">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#B11226] px-8 py-3"
              >
                Driver Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="bg-[#B11226] p-2 rounded-lg">
                  <Train className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold">RailTrack LK</span>
              </div>
              <p className="text-gray-400">
                Revolutionizing train travel across Sri Lanka with real-time tracking and smart solutions.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Services</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
                <li><a href="#" className="hover:text-white">Support</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Dashboards</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/passenger" className="hover:text-white">Passenger</Link></li>
                <li><Link to="/driver" className="hover:text-white">Driver</Link></li>
                <li><Link to="/admin" className="hover:text-white">Admin</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contact Info</h3>
              <div className="space-y-2 text-gray-400">
                <p>Email: info@railtrack.lk</p>
                <p>Phone: +94 11 234 5678</p>
                <p>Address: Colombo, Sri Lanka</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 RailTrack LK. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
