
async function deleteCart(id, e) {
    let xacNhan = confirm('Are you sure?');
    if (xacNhan) {
        let result = await postData('/cart/delete', {id}, contentDefault);
        if(result.success) {
            $(e).parents('tr').remove();
            $('#quantity').html(`(${result.quantity})`);
        }
    }
}