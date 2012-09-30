Ext.onReady(function() {
    new Ext.dd.DragZone('BOXES', {
        ddGroup: 'ddBoxes',
        getDragData: function(e) {
            var t = e.getTarget('div.box');
            if(t) {
                return {ddel: t};
            }
        }
    });
    new Ext.dd.DropZone('DROPZONE', {
        ddGroup: 'ddBoxes',
        onContainerOver: function() {
            return Ext.dd.DropZone.prototype.dropAllowed;
        },
        onContainerDrop: function(source, e, data) {
            this.getEl().appendChild(data.ddel);
            Ext.fly(data.ddel).highlight();
        }
    });
});
