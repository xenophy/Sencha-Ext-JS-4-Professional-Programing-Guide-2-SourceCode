Ext.onReady(function() {

    Ext.define('ProductSales', {
        extend: 'Ext.data.Model',
        fields: ['name', 'data1', 'data2', 'data3']
    });

    var store = Ext.create('Ext.data.Store', {
        model: 'ProductSales',
        data: [
            { name: '商品A', data1: 1342, data2: 472, data3: 8311 },
            { name: '商品B', data1: 841,  data2: 831, data3: 4321 },
            { name: '商品C', data1: 374,  data2: 813, data3: 137 },
            { name: '商品D', data1: 1273, data2: 3217, data3: 651 },
            { name: '商品E', data1: 5321, data2: 3811, data3: 2137 }
        ]
    });

/*
    Ext.create('Ext.chart.Chart', {
        renderTo: Ext.getBody(),
        width: 1200,
        height: 500,
        store: store,
        series: [{
            type: 'pie',
            field: 'data1'
        }]
    });
*/

    Ext.create('Ext.chart.Chart', {
        renderTo: Ext.getBody(),
        width: 1200,
        height: 500,
        store: store,
        legend: {
            position: 'right'
        },
        series: [{
            type: 'pie',
            field: 'data1',
            showInLegend: true
        }]
    });

});
