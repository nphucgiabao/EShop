let socket = io();

function postReview() {
    let name = $('#name').val();
    let email = $('#email').val();
    let review = $('#review').val();
    socket.emit('review', { name, email, review });
}

socket.on('review', (msg) => {
    let html = `<div class="reviews-submitted">
    <div class="reviewer">${msg.name} - <span>01 Jan 2020</span></div>
    <div class="ratting">
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
    </div>
    <p>
        ${msg.review}
    </p>
</div>`;
    $('#reviews').prepend(html);
});

async function addToCart(id) {
    let quantity = document.getElementById('unit').value;
    let result = await postData('/cart/add', {id, quantity}, contentDefault).catch(err => console.log(err));
    $('#quantity').html(`(${result.quantity})`);
}