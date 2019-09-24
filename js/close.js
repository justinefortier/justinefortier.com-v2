$('body').click(function (event) {
    if (!$(event.target).closest('.modal').length && !$(event.target).is('.modal')) {
        $("#modal").hide();
    }
});