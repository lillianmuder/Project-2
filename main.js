$(document).ready(function(){
    const table = $('#dt-table').DataTable();
    const tableData = getTableData(table);
    createHighcharts(tableData);
    setTableEvents(table);
    });

function getTableData(table) {
        const data = [],
        state = [],
        positive = [],
        death = [];
        table.rows({ search: "applied" }).every(function() {
        const data = this.data();
        state.push(data[0]);
        positive.push(parseInt(data[3].replace(/\,/g, "")));
        death.push(parseInt(data[5].replace(/\,/g, "")));
        });
        data.push(state, positive, death);
        return data;
        }

        function createHighcharts(data){
            Highcharts.chart('container', {

                chart: {
                    type: 'lollipop'
                },
            
                accessibility: {
                    point: {
                        valueDescriptionFormat: '{index}. {xDescription}, {point.y}.'
                    }
                },
            
                legend: {
                    enabled: false
                },
            
                subtitle: {
                    text: '2018'
                },
            
                title: {
                    text: 'FBIs Crime In the United States'
                },
            
                tooltip: {
                    shared: true
                },
            
                xAxis: {
                    type: 'category'
                },
            
                yAxis: {
                    title: {
                        text: 'Population'
                    }
                },
            
                series: [{
                    name: 'Category',
                    data: [{
                        name: 'Violent Crime',
                        low: 2361,2035
                    }, {
                        name: 'Murder',
                        low: 24,13
                    }, {
                        name: 'Rape',
                        low: 201,177
                    }, {
                        name: 'Robbery',
                        low: 274,203
                    }, {
                        name: 'Aggravated Assault',
                        low: 1862,1642
                    }, {
                        name: 'Property Crime',
                        low: 10710,9502
                    }, {
                        name: 'Burglary',
                        low: 1673,1299
                    }, {
                        name: 'Larency-Theft',
                        low: 7649,7111
                    }, {
                        name: 'Motor Vehicle Left',
                        low: 1388,1092
                    }, {
                        name: 'Arson',
                        low: 77,59
                    }]
                }]
            
            });

            let draw = false;
            function setTableEvents(table) {
            table.on("page", () => {
            draw = true;
            });
            table.on("draw", () => {
            if (draw) {
            draw = false;
            } else {
            const tableData = getTableData(table);
            createHighcharts(tableData);
            }
            });
            }
        