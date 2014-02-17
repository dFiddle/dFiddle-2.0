define(['plugins/dialog'], function (dialog) {
    var CustomModal = function (title, model) {
        this.title = title;
        this.model = model;
    };

    CustomModal.prototype.ok = function() {
         dialog.close(this, this.model);
     };

    CustomModal.prototype.show = function(){
       return dialog.show(this);
    };

    return CustomModal;
});