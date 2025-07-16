import React from 'react';
import { CheckCircle, Package, Truck, Home } from 'lucide-react';

const OrderSuccessPage = ({ onNavigate }) => {
  const orderNumber = Math.random().toString(36).substr(2, 9).toUpperCase();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8 text-center">
        <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-6" />
        
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Order Confirmed!</h1>
        
        <p className="text-gray-600 mb-6">
          Thank you for your order! We've received your payment and will start preparing your fresh guavas right away.
        </p>
        
        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <p className="text-sm text-gray-600 mb-2">Order Number</p>
          <p className="text-lg font-semibold text-gray-900">{orderNumber}</p>
        </div>
        
        <div className="space-y-4 mb-8">
          <div className="flex items-center space-x-3">
            <Package className="h-5 w-5 text-green-600" />
            <span className="text-sm text-gray-600">Order processing within 2 hours</span>
          </div>
          <div className="flex items-center space-x-3">
            <Truck className="h-5 w-5 text-green-600" />
            <span className="text-sm text-gray-600">Delivery within 24-48 hours</span>
          </div>
        </div>
        
        <div className="space-y-3">
          <button
            onClick={() => onNavigate('home')}
            className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
          >
            <Home className="h-4 w-4" />
            <span>Continue Shopping</span>
          </button>
          
          <p className="text-sm text-gray-500">
            A confirmation email has been sent to your email address with order details and tracking information.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccessPage;