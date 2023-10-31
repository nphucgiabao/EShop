function placeOrders(e){
    e.preventDefault();
    if($('#shipto').is(':checked')) {
        if(!e.target.checkValidity()){
            return e.target.reportValidity();
        }
    }
    e.target.submit();
}