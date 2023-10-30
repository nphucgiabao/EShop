
async function deleteCart(id, e) {
    let xacNhan = confirm('Are you sure?');
    if (xacNhan) {
        let headers = configHeader($('form'));
        let result = await postData('/cart/delete', { id }, headers, contentDefault);
        if (result.success) {
            $(e).parents('tr').remove();
            $('#quantity').html(`(${result.quantity})`);
        }
    }
}

async function updateCart() {
    let id = $('#tblCart > tbody > tr > td:nth-child(4)').find('input[type="hidden"]');
    let qty = $('#tblCart > tbody > tr > td:nth-child(4)').find('input[type="text"]');
    let productId = id.map((index, item) => item.value);
    let quantity = qty.map((index, item) => item.value);
    let data = {};
    let x = [...productId];
    for(var i = 0; i<x.length; i++){
        data[x[i]] = quantity[i]; 
    }
    let headers = configHeader($('form'));
    let result = await postData('/cart/update', {data: JSON.stringify(data)}, headers, contentDefault);
    if(result.success) {
        alert('update success');
        $('#quantity').html(`(${result.quantity})`);
    }
}

async function applyCoupon() {
    let coupon = $('#txtcoupon').val();
    let headers = configHeader($('form'));
    let result = await postData('/cart/applyCoupon', {coupon}, headers, contentDefault).catch(e=>alert(e));
    alert(result.success);
}