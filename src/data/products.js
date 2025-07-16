// Auto-import all .jpg images from the assets folder
const images = import.meta.glob('../assets/*.jpg', { eager: true });

// Helper function to get image by filename
const getImage = (filename) => {
  return images[`../assets/${filename}`]?.default || '';
};

export const products = [
  {
    id: 1,
    name: "Fresh Organic Guava",
    description: "Sweet, juicy guavas grown with care on our family farm. Perfect for eating fresh or making preserves.",
    price:  8.99,
    image: getImage('guava1.jpg'),
    category: "Fresh Fruit",
    weight: "2 lbs",
    inStock: true,
    featured: true
  },
  {
    id: 2,
    name: "Premium Guava Selection",
    description: "Hand-picked premium guavas, carefully selected for their exceptional sweetness and texture.",
    price: 12.99,
    image: getImage('guava2.jpg'),
    category: "Fresh Fruit",
    weight: "3 lbs",
    inStock: true,
    featured: true
  },
  {
    id: 3,
    name: "Guava Variety Pack",
    description: "Mix of different guava varieties including pink, white, and red guavas from our sustainable farm.",
    price: 15.99,
    image: getImage('guava3.jpg'),
    category: "Fresh Fruit",
    weight: "4 lbs",
    inStock: true,
    featured: false
  },
  {
    id: 4,
    name: "Bulk Guava Box",
    description: "Perfect for families or small businesses. Fresh guavas packed with care for maximum freshness.",
    price: 24.99,
    image: getImage('guava4.jpg'),
    category: "Fresh Fruit",
    weight: "8 lbs",
    inStock: true,
    featured: false
  },
  {
    id: 5,
    name: "Organic Guava Smoothie Pack",
    description: "Pre-cut guava pieces perfect for smoothies and fruit bowls. Frozen for freshness.",
    price: 9.99,
    image: getImage('guava5.jpg'),
    category: "Processed",
    weight: "2 lbs",
    inStock: true,
    featured: false
  },
  {
    id: 6,
    name: "Guava Preserves Kit",
    description: "Everything you need to make delicious guava preserves at home, including recipe card.",
    price: 18.99,
    image: getImage('guava6.jpg'),
    category: "Gift Set",
    weight: "5 lbs",
    inStock: false,
    featured: true
  }
];
