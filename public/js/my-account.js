
$(document).ready(function() {
    placeholderElement = $('#modal-placeholder');
});

function viewOrderDetails(orderId) {
    showPopup(`/order/details?orderId=${orderId}`);
}

function editAddress(id) {
    showPopup(`/user/edit-address?id=${id}`);
}

function updateAddress(form) {
    let headers = configHeader(form);
    let model = $(form).serializeJSON();
    console.log(form.action);
    postData(form.action, JSON.stringify(model), headers, contentJson).then((result) => {
        placeholderElement.find('.modal').modal('hide');
        if (result.success)
            toastr.success(result.message);
        else
            toastr.error(result.message);
    });
    return false;
}

function updateAccount(form){
    return false;
}

function updatePassword(form){
    return false;
}