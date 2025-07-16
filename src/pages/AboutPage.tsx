import React from 'react';
import { Users, Calendar, Award, Heart } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">BioOrg</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Three generations of passion, dedication, and love for growing the finest guavas. 
            From our family farm to your table, we're committed to quality and sustainability.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
            <p className="text-gray-700 leading-relaxed">
              GreenHarvest Farm began in 1985 when our founder, Maria Gonzalez, planted her first guava tree 
              with a simple dream: to grow the sweetest, most nutritious guavas while caring for the land.
            </p>
            <p className="text-gray-700 leading-relaxed">
              What started as a small family operation has grown into a thriving sustainable farm, but our 
              core values remain the same. We believe in organic farming practices, treating our workers 
              fairly, and providing our customers with the freshest, highest-quality guavas possible.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Today, led by Maria's son Carlos and granddaughter Sofia, we continue to innovate while 
              honoring traditional farming methods passed down through generations. Every guava we grow 
              is a testament to our commitment to excellence.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/2132180/pexels-photo-2132180.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
              alt="Farm landscape"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg"></div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">39+</h3>
            <p className="text-gray-600">Years of Experience</p>
          </div>
          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">500+</h3>
            <p className="text-gray-600">Happy Customers</p>
          </div>
          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">15</h3>
            <p className="text-gray-600">Awards Won</p>
          </div>
          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">100%</h3>
            <p className="text-gray-600">Family Owned</p>
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Sustainability</h3>
              <p className="text-gray-600">
                We're committed to protecting our environment through organic farming practices, 
                water conservation, and renewable energy use.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Quality</h3>
              <p className="text-gray-600">
                Every guava is hand-picked at peak ripeness and carefully inspected to ensure 
                you receive only the finest quality fruit.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Community</h3>
              <p className="text-gray-600">
                We believe in supporting our local community through fair employment, 
                educational programs, and community partnerships.
              </p>
            </div>
          </div>
        </div>

        {/* Meet the Team */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Meet the Family</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Maria Gonzalez</h3>
              <p className="text-green-600 mb-2">Founder</p>
              <p className="text-gray-600 text-sm">
                Started the farm in 1985 with a passion for growing the perfect guava.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Carlos Gonzalez</h3>
              <p className="text-green-600 mb-2">Farm Manager</p>
              <p className="text-gray-600 text-sm">
                Brings innovation and modern farming techniques to the family business.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Sofia Gonzalez</h3>
              <p className="text-green-600 mb-2">Operations Director</p>
              <p className="text-gray-600 text-sm">
                Leads our online operations and customer experience initiatives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;