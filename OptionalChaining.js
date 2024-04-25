// In this example we are trying to check if a value for the city property is defined. However, the code can be simplified. How can we do that?
// const order = {};
// if (order && order.customer && order.customer.address && !order.customer.address.city) {
//   console.log('City is required');
// }
let order = {
  customer: {
    address: {
      // city: "Madrid"
    },
  },
};
if (
  order.customer.address &&
  !order.customer.address.city
) {
  console.log("City is required");
}