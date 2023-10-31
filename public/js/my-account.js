
$(document).ready(function() {
    placeholderElement = $('#modal-placeholder');
});

function viewOrderDetails(orderId) {
    showPopup(`/order/details?orderId=${orderId}`);
}

function editAddress(id) {
    showPopup(`/user/edit-address?id=${id}`);
}

function updatePassword(form){
    return false;
}