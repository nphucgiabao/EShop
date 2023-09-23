
async function insertCart(id) {
    let result = await postData('/cart/add', {id, quantity: 1}, contentDefault);
    $('#quantity').html(`(${result.quantity})`);
}