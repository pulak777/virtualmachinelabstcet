var rightconnection = false;
jsPlumb.ready(function () {

    var initAnimation = function (elId) {
        var el = document.getElementById(elId);

        instance.on(el, 'click', function (e, ui) {
            if (el.className.indexOf("jsPlumb_dragged") > -1) {
                jsPlumb.removeClass(elId, "jsPlumb_dragged");
                return;
            }

        });
    },
        endpoint1 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth: 4, stroke: "rgba(0,0,255)" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        endpoint2 = {
            anchor: [0.5, 0.5, 0, -2],
            connectorStyle: { strokeWidth: 4, stroke: "rgba(255,0,0)" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        endpoint3 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth: 4, stroke: "rgba(0,255,0)" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        endpoint4 = {
            anchor: [0.5, 0.5, 1, -3.5],
            connectorStyle: { strokeWidth: 4, stroke: "rgba(0,0,255)" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare1 = function (elId) {
            initAnimation(elId);

            return instance.addEndpoint(elId, endpoint1);
        },
        prepare2 = function (elId) {
            initAnimation(elId);

            return instance.addEndpoint(elId, endpoint2);
        },
        prepare3 = function (elId) {
            initAnimation(elId);

            return instance.addEndpoint(elId, endpoint3);
        },
        prepare4 = function (elId) {
            initAnimation(elId);

            return instance.addEndpoint(elId, endpoint4);
        },


        // get a jsPlumb instance, setting some appropriate defaults and a Container.
        instance = jsPlumb.getInstance({
            DragOptions: { cursor: 'wait', zIndex: 20 },
            Endpoint: ["Image", { url: "/static/images/littledot.png" }],
            Connector: ["Bezier", { curviness: -20 }],
            Container: "canvas"
        });

    // suspend drawing and initialise.
    instance.batch(function () {
        var e1 = prepare1("ld1"),
            e2 = prepare2("ld2"),
            e3 = prepare3("ld3"),
            e4 = prepare4("ld4"),
            e5 = prepare2("ld5"),
            e6 = prepare3("ld6"),
            e7 = prepare1("ld7"),
            e8 = prepare2("ld8"),
            e9 = prepare3("ld9"),
            e10 = prepare4("ld10"),
            e11 = prepare2("ld11"),
            e12 = prepare4("ld12"),
            e13 = prepare3("ld13"),
            e14 = prepare2("ld14"),
            e15 = prepare3("ld15"),
            e16 = prepare4("ld16"),
            e17 = prepare3("ld17"),
            e18 = prepare1("ld18"),
            e19 = prepare2("ld19"),
            e20 = prepare1("ld20"),
            e21 = prepare3("ld21"),
            e22 = prepare2("ld22"),

            clearBtn = jsPlumb.getSelector("#anim-clear"),
            addBtn = jsPlumb.getSelector("#add");

        var detachLinks = jsPlumb.getSelector(".littledot .detach");
        instance.on(detachLinks, "click", function (e) {
            instance.deleteConnectionsForElement(this.getAttribute("rel"));
            jsPlumbUtil.consume(e);
        });

        instance.on(document.getElementById("clear"), "click", function (e) {
            instance.detachEveryConnection();
            showConnectionInfo("");
            jsPlumbUtil.consume(e);
        });
    });

    jsPlumb.fire("jsPlumbDemoLoaded", instance);
    //event listener on check button
    document.getElementById("check-button").addEventListener("click", function () {

        var correct_connections_1_7 = [
            {
                "source": "ld1",
                "target": "ld7"
            },

            {
                "source": "ld7",
                "target": "ld1"
            }
        ];
        var correct_connections_2_8 = [
            {
                "source": "ld2",
                "target": "ld8"
            },

            {
                "source": "ld8",
                "target": "ld2"
            }
        ];
        var correct_connections_3_9 = [
            {
                "source": "ld3",
                "target": "ld9"
            },

            {
                "source": "ld9",
                "target": "ld3"
            }
        ];
        var correct_connections_4_10 = [
            {
                "source": "ld4",
                "target": "ld10"
            },

            {
                "source": "ld10",
                "target": "ld4"
            }
        ];
        var correct_connections_5_11 = [
            {
                "source": "ld5",
                "target": "ld11"
            },

            {
                "source": "ld11",
                "target": "ld5"
            }
        ];
        var correct_connections_6_15 = [
            {
                "source": "ld6",
                "target": "ld15"
            },

            {
                "source": "ld15",
                "target": "ld6"
            }
        ];
        var correct_connections_16_12 = [
            {
                "source": "ld16",
                "target": "ld12"
            },

            {
                "source": "ld12",
                "target": "ld16"
            }
        ];
        var correct_connections_13_17 = [
            {
                "source": "ld13",
                "target": "ld17"
            },

            {
                "source": "ld17",
                "target": "ld13"
            }
        ];
        var correct_connections_14_19 = [
            {
                "source": "ld14",
                "target": "ld19"
            },

            {
                "source": "ld19",
                "target": "ld14"
            }
        ];
        var correct_connections_18_20 = [
            {
                "source": "ld20",
                "target": "ld18"
            },

            {
                "source": "ld18",
                "target": "ld20"
            }
        ];
        var correct_connections_21_19 = [
            {
                "source": "ld21",
                "target": "ld19"
            },

            {
                "source": "ld19",
                "target": "ld21"
            }
        ];
        var correct_connections_22_20 = [
            {
                "source": "ld22",
                "target": "ld20"
            },

            {
                "source": "ld20",
                "target": "ld22"
            }
        ];
        //a connection outside this will invalidate the circuit
        var allowed_connections = [
            {
                "source": "ld1",
                "target": "ld7"
            },

            {
                "source": "ld7",
                "target": "ld1"
            },
            {
                "source": "ld2",
                "target": "ld8"
            },

            {
                "source": "ld8",
                "target": "ld2"
            },
            {
                "source": "ld3",
                "target": "ld9"
            },

            {
                "source": "ld9",
                "target": "ld3"
            },
            {
                "source": "ld4",
                "target": "ld10"
            },

            {
                "source": "ld10",
                "target": "ld4"
            },
            {
                "source": "ld5",
                "target": "ld11"
            },

            {
                "source": "ld11",
                "target": "ld5"
            },
            {
                "source": "ld6",
                "target": "ld15"
            },

            {
                "source": "ld15",
                "target": "ld6"
            },
            {
                "source": "ld16",
                "target": "ld12"
            },

            {
                "source": "ld12",
                "target": "ld16"
            },
            {
                "source": "ld13",
                "target": "ld17"
            },

            {
                "source": "ld17",
                "target": "ld13"
            },
            {
                "source": "ld14",
                "target": "ld19"
            },
            {
                "source": "ld19",
                "target": "ld14"
            },
            {
                "source": "ld20",
                "target": "ld18"
            },
            {
                "source": "ld18",
                "target": "ld20"
            },
            {
                "source": "ld21",
                "target": "ld19"
            },
            {
                "source": "ld19",
                "target": "ld21"
            },
            {
                "source": "ld22",
                "target": "ld20"
            },
            {
                "source": "ld20",
                "target": "ld22"
            },
        ];

        var actual_connections = instance.getAllConnections();

        var is_connected_1_7 = false;
        var is_connected_2_8 = false;
        var is_connected_3_9 = false;
        var is_connected_4_10 = false;
        var is_connected_5_11 = false;
        var is_connected_6_15 = false;
        var is_connected_16_12 = false;
        var is_connected_13_17 = false;
        var is_connected_14_19 = false;
        var is_connected_18_20 = false;
        var is_connected_21_19 = false;
        var is_connected_22_20 = false;
        var unallowed_connection_present = false;

        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if (!is_connected_1_7) {
                is_connected_1_7 = correct_connections_1_7.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!is_connected_2_8) {
                is_connected_2_8 = correct_connections_2_8.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!is_connected_3_9) {
                is_connected_3_9 = correct_connections_3_9.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!is_connected_4_10) {
                is_connected_4_10 = correct_connections_4_10.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!is_connected_5_11) {
                is_connected_5_11 = correct_connections_5_11.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!is_connected_6_15) {
                is_connected_6_15 = correct_connections_6_15.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!is_connected_16_12) {
                is_connected_16_12 = correct_connections_16_12.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }


            if (!is_connected_13_17) {
                is_connected_13_17 = correct_connections_13_17.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!is_connected_14_19) {
                is_connected_14_19 = correct_connections_14_19.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!is_connected_18_20) {
                is_connected_18_20 = correct_connections_18_20.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!is_connected_21_19) {
                is_connected_21_19 = correct_connections_21_19.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!is_connected_22_20) {
                is_connected_22_20 = correct_connections_22_20.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!unallowed_connection_present) {
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }
        });

        //short cut can be used for debugging
        if (is_connected_1_7 && is_connected_2_8 && is_connected_3_9 && is_connected_4_10 && is_connected_5_11 && is_connected_6_15 && is_connected_14_19 && is_connected_16_12 && is_connected_18_20 && is_connected_21_19 && is_connected_22_20 && is_connected_13_17 && !unallowed_connection_present) {
            alert("𝐀𝐥𝐞𝐫𝐭 ! 𝐂𝐨𝐫𝐫𝐞𝐜𝐭 𝐜𝐨𝐧𝐧𝐞𝐜𝐭𝐢𝐨𝐧 𝐩𝐫𝐨𝐜𝐞𝐞𝐝 𝐭𝐨 𝐭𝐚𝐤𝐞 𝐫𝐞𝐚𝐝𝐢𝐧𝐠.");
            document.getElementById("check-button").disabled = true;
            rightconnection = true;
            disable_all();
            document.getElementById("connection-table").innerHTML = "";
            document.getElementById("wrapper").style.top = "10px";
        }
        else {
            alert("𝐀𝐥𝐞𝐫𝐭 ! 𝐈𝐧𝐜𝐨𝐫𝐫𝐞𝐜𝐭 𝐜𝐨𝐧𝐧𝐞𝐜𝐭𝐢𝐨𝐧.");

            return;
        }
    });
});

function disable_all() {
    jsPlumb.ready(function () {

        var initAnimation = function (elId) {
            var el = document.getElementById(elId);

            instance.on(el, 'click', function (e, ui) {
                if (el.className.indexOf("jsPlumb_dragged") > -1) {
                    jsPlumb.removeClass(elId, "jsPlumb_dragged");
                    return;
                }

            });
        },
            endpoint1 = {
                anchor: [0.5, 0.5, 0, -1],
                connectorStyle: { strokeWidth: 4, stroke: "rgba(0,0,255)" },
                endpointsOnTop: true,
                isSource: false,
                maxConnections: 10,
                isTarget: true,
                dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
            },
            endpoint2 = {
                anchor: [0.5, 0.5, 0, -1],
                connectorStyle: { strokeWidth: 4, stroke: "rgba(255,0,0)" },
                endpointsOnTop: true,
                isSource: false,
                maxConnections: 10,
                isTarget: true,
                dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
            },
            endpoint3 = {
                anchor: [0.5, 0.5, 0, -1],
                connectorStyle: { strokeWidth: 4, stroke: "rgba(0,255,0)" },
                endpointsOnTop: true,
                isSource: false,
                maxConnections: 10,
                isTarget: true,
                dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
            },
            prepare1 = function (elId) {
                initAnimation(elId);

                return instance.addEndpoint(elId, endpoint1);
            },
            prepare2 = function (elId) {
                initAnimation(elId);

                return instance.addEndpoint(elId, endpoint2);
            },
            prepare3 = function (elId) {
                initAnimation(elId);

                return instance.addEndpoint(elId, endpoint3);
            },

            // get a jsPlumb instance, setting some appropriate defaults and a Container.
            instance = jsPlumb.getInstance({
                DragOptions: { cursor: 'wait', zIndex: 20 },
                Endpoint: ["Image", { url: "/static/images/littledot.png" }],
                Connector: ["Bezier", { curviness: 90 }],
                Container: "canvas"
            });

        // suspend drawing and initialise.
        instance.batch(function () {
            var e1 = prepare1("ld1"),
                e2 = prepare2("ld2"),
                e3 = prepare3("ld3"),
                e4 = prepare1("ld4"),
                e5 = prepare2("ld5"),
                e6 = prepare3("ld6"),
                e7 = prepare1("ld7"),
                e8 = prepare2("ld8"),
                e9 = prepare3("ld9"),
                e10 = prepare1("ld10"),
                e11 = prepare2("ld11"),
                e12 = prepare3("ld12"),
                e13 = prepare3("ld13"),
                e14 = prepare2("ld14"),
                e15 = prepare3("ld15"),
                e16 = prepare1("ld16"),
                e17 = prepare3("ld17"),
                e18 = prepare3("ld18"),
                e19 = prepare1("ld19"),
                e20 = prepare2("ld20"),
                e21 = prepare3("ld21"),
                e22 = prepare1("ld22"),
                clearBtn = jsPlumb.getSelector("#anim-clear"),
                addBtn = jsPlumb.getSelector("#add");
        });
    });
}


var rangeMeter1 = document.getElementById('range1');
var rangeMeter2 = document.getElementById('range2');

var rangeShow1 = document.getElementById("show1");
var rangeShow2 = document.getElementById("show2");

var meterShow1 = document.getElementById("show01");
var meterShow2 = document.getElementById("show02");
var meterShow3 = document.getElementById("show03");
var meterShow4 = document.getElementById("show04");

var rangeClock1 = document.getElementById('meter1');
var rangeClock2 = document.getElementById('meter2');
var rangeClock3 = document.getElementById('meter3');

var table1 = document.getElementById('table1');

const int_speed = [0, 200, 400, 600, 800, 1000];
const field_curr = [0, 0.12, 0.23, 0.41, 0.56, 0.7];
const inc_field_curr = 0.7;
const load_curr = [0, 0.3, 0.58, 0.8, 1.05, 1.25, 1.5, 1.7, 1.92, 2.15];


const terminal_voltage = [128, 122, 118, 114, 109, 107, 105, 103, 101, 100];


let mcboffstate = true;

function mcbonoff() {
    if (rightconnection == true) {

        if (mcboffstate == true) {

            mcboffstate = false;
            document.getElementById('myimage').src = '/static/images/mcbon.png';
            document.getElementById('myimage1').src = '/static/images/push2.png';
            document.getElementById('myimage2').src = '/static/images/push2.png';
            document.getElementById('myimage3').src = '/static/images/push2.png';

            document.getElementById("line1").style.backgroundColor = '#006400';
            document.getElementById("line2").style.backgroundColor = '#006400';
            document.getElementById("line3").style.backgroundColor = '#006400';
            document.getElementById("line4").style.backgroundColor = '#006400';

            rotaronoff();
        }
        else {
            return;
        }
    }
    else {
        alert("𝐀𝐥𝐞𝐫𝐭 ! 𝐏𝐥𝐞𝐚𝐬𝐞 𝐜𝐨𝐦𝐩𝐥𝐞𝐭𝐞 𝐭𝐡𝐞 𝐜𝐢𝐫𝐜𝐮𝐢𝐭 𝐨𝐫 𝐫𝐞𝐦𝐨𝐯𝐞 𝐰𝐫𝐨𝐧𝐠 𝐜𝐨𝐧𝐧𝐞𝐜𝐭𝐢𝐨𝐧𝐬");
    }
}


var rotoroffstate = true;
function rotaronoff() {
    if (mcboffstate == false) {
        if (rotoroffstate == true) {
            rangeMeter1.disabled = false;
            rangeMeter1.value = 1;
            rangeShow1.value = rangeMeter1.value;

            meterShow1.value = int_speed[rangeMeter1.value];
            document.getElementById('cirmover').style.animation = `rotation ${(1500 - meterShow1.value) / 200}s infinite linear`;
        }
        else {
            return;
        }
    }
    else {
        return;
    }
}

var sliderValue = 0;

rangeMeter1.addEventListener('input', rangeChange1);
function rangeChange1() {
    const val = rangeMeter1.value;
    rangeShow1.value = val;
    meterShow1.value = int_speed[val];
    meterShow2.value = field_curr[val];
    document.getElementById('cirmover').style.animation = `rotation ${(1500 - meterShow1.value) / 400}s infinite linear`;
    rangeClock1.style.transform = 'rotate(' + (-62 + (meterShow2.value * 30)) + 'deg)';

    if (val === "5") {
        document.getElementById("range1").disabled = true;
        document.getElementById("range2").disabled = false;
        setTimeout(function () {
            alert("𝐍𝐨𝐰 start changing 'Resistive load Box' value");
        }, 1000);
        addToTable();
        meterShow3.value = load_curr[0];
        meterShow4.value = terminal_voltage[0];
        rangeClock2.style.transform = 'rotate(' + (-62 + (meterShow3.value * 30)) + 'deg)';
        rangeClock3.style.transform = 'rotate(' + (-62 + ((meterShow4.value - 90) * 2)) + 'deg)';
    }
}

rangeMeter2.addEventListener('input', rangeChange2);
function rangeChange2() {
    rangeShow2.value = rangeMeter2.value;

    meterShow3.value = load_curr[rangeMeter2.value];
    rangeClock2.style.transform = 'rotate(' + (-62 + (meterShow3.value * 30)) + 'deg)';
    meterShow4.value = terminal_voltage[rangeMeter2.value];
    rangeClock3.style.transform = 'rotate(' + (-62 + ((meterShow4.value - 90) * 2)) + 'deg)';
    if (+rangeMeter2.value + 1 == +clickCounter) {
        document.getElementById("add").disabled = false;
        document.getElementById("range2").disabled = true;
    }
}

const trace1 = {
    x: [],
    y: [],
    type: 'scatter'
};

const trace2 = {
    x: [],
    y: [],
    type: 'scatter'
};


var clickCounter = 1;
function addToTable() {
    const val = rangeMeter2.value;
    const y = table1.insertRow(clickCounter);
    const cell1 = y.insertCell(0);
    cell1.setAttribute('style', 'text-align: center;');
    const cell2 = y.insertCell(1);
    cell2.setAttribute('style', 'text-align: center;');
    const cell3 = y.insertCell(2);
    cell3.setAttribute('style', 'text-align: center;');
    const cell4 = y.insertCell(3);
    cell4.setAttribute('style', 'text-align: center;');
    const cell5 = y.insertCell(4);
    cell5.setAttribute('style', 'text-align: center;');

    cell1.innerHTML = clickCounter;
    cell2.innerHTML = 1000;
    cell3.innerHTML = inc_field_curr;
    cell4.innerHTML = load_curr[val];
    cell5.innerHTML = terminal_voltage[val];
    trace1.x.push(load_curr[val]);
    trace1.y.push(terminal_voltage[val]);

    clickCounter++;

    document.getElementById("add").disabled = true;
    document.getElementById("range2").disabled = false;
    if (val == 9) {
        setTimeout(function () {
            alert("𝐍𝐨𝐰 click on 'Graph' button to generate Load Current vs Terminal Voltage graph");
        }, 1000);
        document.getElementById("graph").disabled = false;
        rangeMeter2.disabled = true;
    }
}

function drawgraph() {
    document.getElementById("graph").disabled = true;
    const data1 = [trace1];
    const data2 = [trace2];

    const layout1 = {
        xaxis: {
            title: {
                text: 'Load Current(A)',
                font:
                {
                    family: 'Courier New, monoscope',
                    size: 18,
                    color: '#0000ff'
                }
            },
        },
        yaxis: {
            title: {
                text: 'Terminal Voltage(V)',
                font:
                {
                    family: 'Courier New, monoscope',
                    size: 18,
                    color: '#0000ff'
                }
            },
        }
    };

    const layout2 = {
        xaxis: {
            title: {
                text: 'Field Current(A)',
                font:
                {
                    family: 'Courier New, monoscope',
                    size: 18,
                    color: '#ff0000'
                }
            },
        },
        yaxis: {
            title: {
                text: 'Induced Emf(V)',
                font:
                {
                    family: 'Courier New, monoscope',
                    size: 18,
                    color: '#ff0000'
                }
            },
        }
    };

    Plotly.newPlot('myDiv1', data1, layout1, { showSendToCloud: true });
    Plotly.newPlot('myDiv2', data2, layout2, { showSendToCloud: true });

}