const contentJson = 'application/json; charset=utf-8';
const contentDefault = 'application/x-www-form-urlencoded; charset=UTF-8';

function postData(url, data, contentType) {
    return new Promise((resolve, reject) => {
        $.ajax({
            type: 'POST',
            url,
            data,
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