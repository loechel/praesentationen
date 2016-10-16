
function balance() {
    var chart = new Highcharts.Chart({
        chart: {
            renderTo: 'balance_chart_container',
            type: 'column',
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false ,
            shadow : false,
            height: 618,
            width: 778,
            style: {
                fontSize: '30px',
            }
        },
        title: {
            text: 'Security vunarabilities per CMS',
            style: {
                color: '#000',//#3E576F',
                fontSize: '26px'
            },
        },
        credits: {
            enabled: false,
            text: "Source: metagenerator.info",
            href: "http://www.metagenerator.info/top-50.html",
            style: {
                fontSize: '24px',
            }
        },
        xAxis: {
            categories: ['Drupal', 'Plone', 'WordPress', 'Joomla!','Typo3'],
            style: {
                fontSize: '40px',
            },
        },
        yAxis: {
            min: 0,
            max: 60,
            title: {
                text: ''
            }
        },
        legend: {
            enabled: false
        },
        series: [{
            type: 'column',
            data: [24, 10, 46, 51, 57 ],
            stack: 'abs'
        }
        ] ,

    });
    var chart2 = new Highcharts.Chart({
        chart: {
            renderTo: 'balance_chart_container2',
            type: 'column',
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false ,
            shadow : false,
            height: 400,
            width: 300,
            style: {
                fontSize: '30px',
            }
        },
        title: {
            text: "core vs add'on vunrabilities",
            style: {
                color: '#000',//#3E576F',
                fontSize: '16px'
            },
        },
        xAxis: {
            categories: ['Drupal', 'Plone', 'WordPress', 'Joomla!','Typo3'],
            style: {
                fontSize: '40px',
            },
        },
        yAxis: {
            min: 0,
            max: 100,
            title: {
                text: ''
            }
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            column: {
                stacking: 'percent'
            }
        },
        series: [ {
            type: 'column',
            data: [95.83,  30, 80.12, 86.63,  86.25],
            color: '#008800'
        },{
            type: 'column',
            data: [4.17, 70, 19.88, 13.37, 13.75 ],
            color: '#990000'
        }

        ] ,

    });

	var chart2016 = new Highcharts.Chart({
        chart: {
            renderTo: 'chart2016_container',
            type: 'column',
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false ,
            shadow : false,
            height: 618,
            width: 778,
            style: {
                fontSize: '30px',
            }
        },
        title: {
            text: 'Security vunarabilities per CMS 2016 - BSI CMS Security Study 2016',
            style: {
                color: '#000',//#3E576F',
                fontSize: '26px'
            },
        },
        credits: {
            enabled: false,
            text: "BSI CMS-Security Study 2016",
            href: "http://bsi.bund.de/",
            style: {
                fontSize: '24px',
            }
        },
        xAxis: {
            categories: ['WordPress', 'Joomla!', 'Typo3', 'Plone', 'Liferay'],
            style: {
                fontSize: '40px',
            },
        },
        yAxis: {
            min: 0,
            max: 60,
            title: {
                text: ''
            }
        },
        plotOptions: {
            column: {
                stacking: 'normal'
            }
        },
        legend: {
            enabled: false
        },
        series: [{
            name: 'core low',
            data: [11, 2, 6, 14, 7],
            stack: 'core'
        }, {
            name: 'core medium',
            data: [3, 3, 7, 14, 8],
            stack: 'core'
        }, {
            name: 'core high',
            data: [0, 0, 1, 1, 2],
            stack: 'core'
        }, {
            name: 'plugin low',
            data: [8, 4, 3, 0, 1],
            stack: 'plugin'
        }, {
            name: 'plugin medium',
            data: [6, 5, 6, 1, 2],
            stack: 'plugin'
        }, {
            name: 'plugin high',
            data: [5, 5, 1, 0, 2],
            stack: 'plugins'
        }, {
            name: 'plugin very high',
            data: [0, 0, 1, 0, 0],
            stack: 'plugins'
        }, {
            name: 'hardening low',
            data: [0, 0, 8, 0, 4],
            stack: 'hardening'
        }, {
            name: 'hardening medium',
            data: [1, 0, 1, 0, 1],
            stack: 'hardening'
        },
        ],

    });



};