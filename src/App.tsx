import React, { useState } from 'react';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Cart from './components/Cart';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import CheckoutPage from './pages/CheckoutPage';
import OrderSuccessPage from './pages/OrderSuccessPage';
import { Product } from './types/Product';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    setSelectedProduct(null);
  };

  const handleViewProduct = (product: Product) => {
    setSelectedProduct(product);
    setCurrentPage('product-detail');
  };

  const handleBackToProducts = () => {
    setCurrentPage('products');
    setSelectedProduct(null);
  };

  const handleCheckout = () => {
    setCurrentPage('checkout');
  };

  const handleOrderComplete = () => {
    setCurrentPage('order-success');
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} onViewProduct={handleViewProduct} />;
      case 'products':
        return <ProductsPage onViewProduct={handleViewProduct} />;
      case 'product-detail':
        return selectedProduct ? (
          <ProductDetailPage product={selectedProduct} onBack={handleBackToProducts} />
        ) : (
          <ProductsPage onViewProduct={handleViewProduct} />
        );
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      case 'checkout':
        return <CheckoutPage onBack={() => setCurrentPage('home')} onOrderComplete={handleOrderComplete} />;
      case 'order-success':
        return <OrderSuccessPage onNavigate={handleNavigate} />;
      default:
        return <HomePage onNavigate={handleNavigate} onViewProduct={handleViewProduct} />;
    }
  };

  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-50">
        <Header
          currentPage={currentPage}
          onNavigate={handleNavigate}
          onToggleCart={() => setIsCartOpen(!isCartOpen)}
        />
        
        <main>
          {renderCurrentPage()}
        </main>
        
        <Footer />
        
        <Cart
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          onCheckout={handleCheckout}
        />
      </div>
    </CartProvider>
  );
}

export default App;