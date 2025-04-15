const getCartFromLocalStorage = () => {
  const storedCartString = localStorage.getItem("cart");
  if (storedCartString) {
    const storedCart = JSON.parse(storedCartString);
    return storedCart;
  }
  return [];
};

const saveCart2localStorage = (cart) => {
  const cartStringified = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringified);
};

const addItem2CartLocalStorage = (id) => {
  const cart = getCartFromLocalStorage();
  // cart.push(id);  // below line is the same code like this.
  const newCart = [...cart, id];
  // save new cart to the local Storage;
  saveCart2localStorage(newCart);
};

const removeFromLocalStorage = (id) => {
  const storedCart = getCartFromLocalStorage();
  const remainingCart = storedCart.filter((storedid) => storedid !== id);
  saveCart2localStorage(remainingCart);
};

export {
  getCartFromLocalStorage as getStoreCart,
  addItem2CartLocalStorage as addId2StoreCart,
  removeFromLocalStorage as removeFromCart,
};

/* flow of execution

When addId2StoreCart() is called---

 s1/ bring data from local storage through getStoreCart()
 s2/ pushing new data to the previous data  --make an updated data. 
 s3/ then save updated data to the local storage as string format
     through saveCart2localStorage().

*/
