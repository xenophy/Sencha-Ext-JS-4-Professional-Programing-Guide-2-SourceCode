Ext.onReady(function() {

    Ext.define('Division', {
        extend: 'Ext.data.Model',
        fields: ['name', 'data1', 'data2', 'data3', 'data4', 'data5']
    });

    var getCost = function() {
        return Math.floor(Math.max((Math.random() * 1000000), 20));
    };

    var store = Ext.create('Ext.data.Store', {
        model: 'Division',
        data: [{
            name: '1月',
            data1: getCost(),
            data2: getCost(),
            data3: getCost(),
            data4: getCost(),
            data5: getCost()
        }, {
            name: '2月',
            data1: getCost(),
            data2: getCost(),
            data3: getCost(),
            data4: getCost(),
            data5: getCost()
        }, {
            name: '3月',
            data1: getCost(),
            data2: getCost(),
            data3: getCost(),
            data4: getCost(),
            data5: getCost()
        }, {
            name: '4月',
            data1: getCost(),
            data2: getCost(),
            data3: getCost(),
            data4: getCost(),
            data5: getCost()
        }, {
            name: '5月',
            data1: getCost(),
            data2: getCost(),
            data3: getCost(),
            data4: getCost(),
            data5: getCost()
        }, {
            name: '6月',
            data1: getCost(),
            data2: getCost(),
            data3: getCost(),
            data4: getCost(),
            data5: getCost()
        }, {
            name: '7月',
            data1: getCost(),
            data2: getCost(),
            data3: getCost(),
            data4: getCost(),
            data5: getCost()
        }, {
            name: '8月',
            data1: getCost(),
            data2: getCost(),
            data3: getCost(),
            data4: getCost(),
            data5: getCost()
        }, {
            name: '9月',
            data1: getCost(),
            data2: getCost(),
            data3: getCost(),
            data4: getCost(),
            data5: getCost()
        }, {
            name: '10月',
            data1: getCost(),
            data2: getCost(),
            data3: getCost(),
            data4: getCost(),
            data5: getCost()
        }, {
            name: '11月',
            data1: getCost(),
            data2: getCost(),
            data3: getCost(),
            data4: getCost(),
            data5: getCost()
        }, {
            name: '12月',
            data1: getCost(),
            data2: getCost(),
            data3: getCost(),
            data4: getCost(),
            data5: getCost()
        }]
    });

    Ext.create('Ext.chart.Chart', {
        renderTo: Ext.getBody(),
        width: 1200,
        height: 500,
        store: store,
        legend: {
            position: 'bottom'
        },
        axes: [{
            type    : 'Category',
            position: 'bottom',
            fields  : ['name'],
            title   : '月',
            grid    : true,
            label   : {
                rotate: {
                    degrees: 315
                }
            }
        }, {
            type: 'Numeric',
            position: 'left',
            fields: ['data1', 'data2', 'data3', 'data4', 'data5' ],
            title: '支出額',
            grid: true
        }],
        series: [{
            type: 'area',
            highlight: false,
            axis: 'left',
            xField: 'name',
            yField: ['data1', 'data2', 'data3', 'data4', 'data5'],
            title: ['経理部', '総務部', '開発部', '人事部', '広報部']
        }]
    });

});
