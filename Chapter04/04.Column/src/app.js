Ext.onReady(function() {

    Ext.define('Product', {
        extend: 'Ext.data.Model',
        fields: ['name', 'data']
    });

    var store = Ext.create('Ext.data.Store', {
        model: 'Product',
        data: [{
            name: '商品A', data: 1342
        }, {
            name: '商品B', data: 432
        }, {
            name: '商品C', data: 946
        }, {
            name: '商品D', data: 7461
        }, {
            name: '商品E', data: 4621
        }]
    });

    Ext.create('Ext.chart.Chart', {
        renderTo: Ext.getBody(),
        width: 1200,
        height: 500,
        store: store,
        axes: [{
            type    : 'Category',
            position: 'bottom',
            fields  : ['name'],
            title   : '商品名'
        }, {
            type: 'Numeric',
            position: 'left',
            fields: ['data'],
            title: '出荷数',
            grid: true
        }],
        series: [{
            type: 'column',
            xField: 'name',
            yField: 'data'
        }]
    });

});
