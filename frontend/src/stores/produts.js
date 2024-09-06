import { defineStore } from 'pinia'

export const productsStore = defineStore('products', {
  state: () => ({
    products: [],
    cart: []
  }),

  actions: {
    async fetchProductsFromDB() {
      try {
        const res = await fetch('https://dummyjson.com/products');
        const json = await res.json();
        this.products = json.products;
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    },

    addToCart(product) {
      const existingItem = this.cart.find(item => item.id === product.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        this.cart.push({ ...product, quantity: 1 });
      }
    },

    removeFromCart(id) {
      this.cart = this.cart.filter(item => item.id !== id);
    },

    increaseQuantity(id) {
      const item = this.cart.find(item => item.id === id);
      if (item) {
        item.quantity++;
      }
    },

    decreaseQuantity(id) {
      const item = this.cart.find(item => item.id === id);
      if (item) {
        if (item.quantity > 1) {
          item.quantity--;
        } else {
          this.removeFromCart(id);
        }
      }
    }
  },

  getters: {
    cartTotalPrice: (state) => {
      return state.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    },

    cartItemCount: (state) => {
      return state.cart.reduce((count, item) => count + item.quantity, 0);
    }
  }
})
