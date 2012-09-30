Ext.onReady(function() {
    var drag, drop;
    drag = {
        ddGroup: 'ddBoxes',
        getDragData: function(e) {
            var t = e.getTarget('div.box');
            if(t) {
                return {ddel: t};
            }
        }
    };
    drop = {
        ddGroup: 'ddBoxes',
        onContainerOver: function() {
            return Ext.dd.DropZone.prototype.dropAllowed;
        },
        onContainerDrop: function(source, e, data) {
            this.getEl().appendChild(data.ddel);
            Ext.fly(data.ddel).highlight();
        }
    };
    new Ext.dd.DragZone('BOXES', drag);
    new Ext.dd.DragZone('DROPZONE', drag);
    new Ext.dd.DropZone('BOXES', drop);
    new Ext.dd.DropZone('DROPZONE', drop);
});
