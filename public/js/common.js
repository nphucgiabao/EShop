const contentJson = 'application/json; charset=utf-8';
const contentDefault = 'application/x-www-form-urlencoded; charset=UTF-8';
var placeholderElement;
var options = {
    'backdrop': 'static',
    'keyboard': true,
    'show': true,
    'focus': false
};


const configHeader = (form) => {
    let token = $('input[name="_csrf"]', form).val();
    let headers = {};
    headers['X-CSRF-Token'] = token;
    return headers;
}

function postData(url, data, headers, contentType) {
    return new Promise((resolve, reject) => {
        $.ajax({
            type: 'POST',
            url,
            data,
            headers,
            contentType,
            dataType: 'json',
            success: function(response) {
                resolve(response);
            },
            error: function(err) {
                reject(err);
            }
        });
    });
}

function showPopup(url) {
    $.get(url).done(function (data) {
        placeholderElement.html(data);
        placeholderElement.find('.modal').modal(options);
    });
}