Ext.onReady(function() {

    Ext.define('SampleData', {
        extend: 'Ext.data.Model',
        fields: ['value']
    });

    var store = Ext.create('Ext.data.Store', {
        model: 'SampleData',
        data: [
            { 'value':80 }
        ]
    });

    Ext.create('Ext.chart.Chart', {
        renderTo: Ext.getBody(),
        width: 1200,
        height: 500,
        store: store,
        insetPadding: 30,
        axes: [{
            type: 'gauge',
            position: 'gauge',
            minimum: 0,
            maximum: 100,
            steps: 10
        }],
        series: [{
            type: 'gauge',
            field: 'value',
            donut: 80,
            colorSet: ['#0066cc', '#eee']
        }]
    });

});
