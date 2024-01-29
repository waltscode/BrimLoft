const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();

chai.use(chaiHttp);

const expect = chai.expect;

const serverUrl = 'http://localhost:3001';

describe('Checkout functionality', () => {
  it('should make a POST request to create a new order', (done) => {
    // Mock the fetch function
    global.fetch = chai.request('http://localhost:3001'),

    // Mock the sessionStorage
    global.sessionStorage = {
      getItem: () => JSON.stringify([{ product_id: 1, quantity: 1 }]), // Mocked cart data
    };

    // Mock the renderOrderSummary function
    global.renderOrderSummary = (orderData) => {
      // Add assertions here based on the expected orderData
      expect(orderData).to.have.property('order');
      expect(orderData).to.have.property('orderItems');
      done();
    };

    // Require the checkout.js file after setting up mocks
    const checkout = require('../public/js/checkout');

    // Call the createOrder function
    checkout.createOrder();
  });

});
