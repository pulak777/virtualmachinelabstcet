var rightconnection = false;
jsPlumb.ready(function () {

    var instance,
        discs = [],

        addDisc = function (evt) {
            var info = createDisc();
            var e = prepare(info.id);
            instance.draggable(info.id);
            discs.push(info.id);
            evt.stopPropagation();
            evt.preventDefault();
        },

        reset = function (e) {
            for (var i = 0; i < discs.length; i++) {
                var d = document.getElementById(discs[i]);
                if (d) d.parentNode.removeChild(d);
            }
            discs = [];
            e.stopPropagation();
            e.preventDefault();
        },

        initAnimation = function (elId) {
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
            anchor: [0.5, 0.5, 0, -1],
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


        // this is overridden by the YUI demo.
        createDisc = function () {
            var d = document.createElement("div");
            d.className = "bigdot";
            document.getElementById("animation-demo").appendChild(d);
            var id = '' + ((new Date().getTime()));
            d.setAttribute("id", id);
            var w = screen.width - 162, h = screen.height - 200;
            var x = (5 * w) + Math.floor(Math.random() * (10 * w));
            var y = (5 * h) + Math.floor(Math.random() * (10 * h));
            d.style.top = y + 'px';
            d.style.left = x + 'px';
            return { d: d, id: id };
        };

    // get a jsPlumb instance, setting some appropriate defaults and a Container.
    instance = jsPlumb.getInstance({
        DragOptions: { cursor: 'wait', zIndex: 20 },
        Endpoint: ["Image", { url: "/static/images/littledot.png" }],
        Connector: ["Bezier", { curviness: +90 }],
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
            e7 = prepare3("ld7"),
            e8 = prepare2("ld8"),
            e9 = prepare1("ld9"),
            e10 = prepare1("ld10"),
            e11 = prepare3("ld11"),
            e12 = prepare1("ld12"),
            e13 = prepare2("ld13"),
            e14 = prepare2("ld14"),
            e15 = prepare3("ld15"),
            e16 = prepare3("ld16"),
            e17 = prepare1("ld17"),
            e18 = prepare2("ld18"),
            e19 = prepare3("ld19"),
            e20 = prepare1("ld20"),
            e21 = prepare2("ld21"),
            clearBtn = jsPlumb.getSelector("anim-clear"),
            addBtn = jsPlumb.getSelector("add");

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

    document.getElementById("check-button").addEventListener("click", function () {

        var correct_connections_1_3 = [
            {
                "source": "ld1",
                "target": "ld3"
            },

            {
                "source": "ld3",
                "target": "ld1"
            }
        ];
        var correct_connections_4_6 = [
            {
                "source": "ld4",
                "target": "ld6"
            },

            {
                "source": "ld6",
                "target": "ld4"
            }
        ];
        var correct_connections_7_10 = [
            {
                "source": "ld7",
                "target": "ld10"
            },

            {
                "source": "ld10",
                "target": "ld7"
            }
        ];
        var correct_connections_6_8 = [
            {
                "source": "ld6",
                "target": "ld8"
            },

            {
                "source": "ld8",
                "target": "ld6"
            }
        ];
        var correct_connections_7_9 = [
            {
                "source": "ld7",
                "target": "ld9"
            },

            {
                "source": "ld9",
                "target": "ld7"
            }
        ];
        var correct_connections_11_16 = [
            {
                "source": "ld11",
                "target": "ld16"
            },

            {
                "source": "ld16",
                "target": "ld11"
            }
        ];
        var correct_connections_5_18 = [
            {
                "source": "ld5",
                "target": "ld18"
            },

            {
                "source": "ld18",
                "target": "ld5"
            }
        ];
        var correct_connections_19_20 = [
            {
                "source": "ld19",
                "target": "ld20"
            },

            {
                "source": "ld20",
                "target": "ld19"
            }
        ];
        var correct_connections_21_14 = [
            {
                "source": "ld21",
                "target": "ld14"
            },

            {
                "source": "ld14",
                "target": "ld21"
            }
        ];
        var correct_connections_2_15 = [
            {
                "source": "ld2",
                "target": "ld15"
            },

            {
                "source": "ld15",
                "target": "ld2"
            }
        ];
        var correct_connections_15_17 = [
            {
                "source": "ld15",
                "target": "ld17"
            },

            {
                "source": "ld17",
                "target": "ld15"
            }
        ];
        var correct_connections_12_14 = [
            {
                "source": "ld12",
                "target": "ld14"
            },

            {
                "source": "ld14",
                "target": "ld12"
            }
        ];
        var correct_connections_13_15 = [
            {
                "source": "ld13",
                "target": "ld15"
            },

            {
                "source": "ld15",
                "target": "ld13"
            }
        ];
        //a connection outside this will invalidate the circuit
        var allowed_connections = [
            {
                "source": "ld1",
                "target": "ld3"
            },

            {
                "source": "ld3",
                "target": "ld1"
            },
            {
                "source": "ld4",
                "target": "ld6"
            },

            {
                "source": "ld6",
                "target": "ld4"
            },
            {
                "source": "ld7",
                "target": "ld10"
            },

            {
                "source": "ld10",
                "target": "ld7"
            },
            {
                "source": "ld6",
                "target": "ld8"
            },
            {
                "source": "ld8",
                "target": "ld6"
            },
            {
                "source": "ld7",
                "target": "ld9"
            },

            {
                "source": "ld9",
                "target": "ld7"
            },
            {
                "source": "ld11",
                "target": "ld16"
            },
            {
                "source": "ld16",
                "target": "ld11"
            },
            {
                "source": "ld5",
                "target": "ld18"
            },
            {
                "source": "ld18",
                "target": "ld5"
            },
            {
                "source": "ld19",
                "target": "ld20"
            },
            {
                "source": "ld20",
                "target": "ld19"
            },
            {
                "source": "ld21",
                "target": "ld14"
            },
            {
                "source": "ld14",
                "target": "ld21"
            },
            {
                "source": "ld2",
                "target": "ld15"
            },
            {
                "source": "ld15",
                "target": "ld2"
            },
            {
                "source": "ld15",
                "target": "ld17"
            },

            {
                "source": "ld17",
                "target": "ld15"
            },

            {
                "source": "ld12",
                "target": "ld14"
            },
            {
                "source": "ld14",
                "target": "ld12"
            },
            {
                "source": "ld13",
                "target": "ld15"
            },
            {
                "source": "ld15",
                "target": "ld13"
            }
        ];

        var actual_connections = instance.getAllConnections();

        var is_connected_1_3 = false;
        var is_connected_4_6 = false;
        var is_connected_7_10 = false;
        var is_connected_6_8 = false;
        var is_connected_7_9 = false;
        var is_connected_11_16 = false;
        var is_connected_5_18 = false;
        var is_connected_19_20 = false;
        var is_connected_21_14 = false;
        var is_connected_2_15 = false;
        var is_connected_15_17 = false;
        var is_connected_12_14 = false;
        var is_connected_13_15 = false;
        var unallowed_connection_present = false;

        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if (!is_connected_1_3) {
                is_connected_1_3 = correct_connections_1_3.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!is_connected_4_6) {
                is_connected_4_6 = correct_connections_4_6.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!is_connected_7_10) {
                is_connected_7_10 = correct_connections_7_10.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!is_connected_6_8) {
                is_connected_6_8 = correct_connections_6_8.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!is_connected_7_9) {
                is_connected_7_9 = correct_connections_7_9.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!is_connected_11_16) {
                is_connected_11_16 = correct_connections_11_16.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!is_connected_5_18) {
                is_connected_5_18 = correct_connections_5_18.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!is_connected_19_20) {
                is_connected_19_20 = correct_connections_19_20.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!is_connected_21_14) {
                is_connected_21_14 = correct_connections_21_14.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!is_connected_2_15) {
                is_connected_2_15 = correct_connections_2_15.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!is_connected_15_17) {
                is_connected_15_17 = correct_connections_15_17.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!is_connected_12_14) {
                is_connected_12_14 = correct_connections_12_14.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!is_connected_13_15) {
                is_connected_13_15 = correct_connections_13_15.find(function (conn) {
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
        if (is_connected_1_3 && is_connected_4_6 && is_connected_7_10 && is_connected_6_8 && is_connected_7_9 && is_connected_11_16 && is_connected_5_18 && is_connected_19_20 && is_connected_21_14 && is_connected_2_15 && is_connected_15_17 && is_connected_12_14 && is_connected_13_15 && !unallowed_connection_present) {
            //if (is_connected_13_15 && !unallowed_connection_present) {
            alert("Alert ! Correct connection proceed to take reading.");
            document.getElementById("check-button").disabled = true;
            document.getElementById("connection-table").innerHTML = "";
            rightconnection = true;
            disable_all();
            setTimeout(function () {
                alert("Now turn on the power supply and wait for the reading to be taken by clicking 'add to table' button");
            }, 1000);
        }
        else {
            alert("Alert ! Incorrect connection.");

            return;
        }
    });
});




function disable_all() {
    jsPlumb.ready(function () {

        var instance,

            initAnimation = function (elId) {
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
                Connector: ["Bezier", { curviness: +90 }],
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
                e7 = prepare3("ld7"),
                e8 = prepare2("ld8"),
                e9 = prepare1("ld9"),
                e10 = prepare1("ld10"),
                e11 = prepare3("ld11"),
                e12 = prepare1("ld12"),
                e13 = prepare2("ld13"),
                e14 = prepare2("ld14"),
                e15 = prepare3("ld15"),
                e16 = prepare3("ld16"),
                e17 = prepare1("ld17"),
                e18 = prepare2("ld18"),
                e19 = prepare3("ld19"),
                e20 = prepare1("ld20"),
                e21 = prepare2("ld21"),
                clearBtn = jsPlumb.getSelector("anim-clear"),
                addBtn = jsPlumb.getSelector("add");
        });
    });
}

var mcboffstate = true;
var rangeMeter1 = document.getElementById('range1');
var rangeMeter2 = document.getElementById('range2');


var rangeShow1 = document.getElementById("show01");
var rangeShow2 = document.getElementById("show02");

var meterShow1 = document.getElementById("show1");
var meterShow2 = document.getElementById("show2");
var meterShow3 = document.getElementById("show3");
var meterShow4 = document.getElementById("show4");
var meterShow5 = document.getElementById("show5");

var rangeClock1 = document.getElementById('meter1');
var rangeClock2 = document.getElementById('meter2');
var rangeClock3 = document.getElementById('meter3');
var rangeClock4 = document.getElementById('meter4');

var table1 = document.getElementById('table1');
var table2 = document.getElementById('table2');


const field_current_frf = 0.25;
const armature_current_frf = [0.26, 0.26, 0.27, 0.27, 0.27, 0.28];
const armature_voltage_frf = [80, 100, 120, 140, 160, 180];
const voltage_across_rc = [148, 117, 98, 78, 56, 33];
const speed_frf = [696, 880, 1060, 1230, 1425, 1615];

const armature_current_arf = 0.27;
const armature_voltage_arf = 180;
const field_current_arf = [0.25, 0.23, 0.22, 0.21, 0.2, 0.19];
const speed_arf = [1615, 1635, 1670, 1710, 1740, 1760];



function mcbonoff() {
    if (rightconnection == true) {

        if (mcboffstate == true) {

            mcboffstate = false;
            document.getElementById('myimage').src = '/static/images/mcbon.png';
            document.getElementById('myimage1').src = '/static/images/push2.png';
            document.getElementById('myimage2').src = '/static/images/push2.png';
            document.getElementById('myimage3').src = '/static/images/push2.png';

            range1.disabled = false;
            rangeChange1();
        }
        else {
            return;
        }
    }
    else {
        alert("Alert ! Please complete the circuit or remove wrong connections");
    }
}

rangeMeter1.addEventListener('input', rangeChange1);
function rangeChange1() {
    const val = +rangeMeter1.value;
    rangeShow1.value = val;

    meterShow1.value = voltage_across_rc[5 - val];
    rangeClock1.style.transform = 'rotate(' + (-62 + (+meterShow1.value / 3)) + 'deg)';
    meterShow2.value = field_current_frf;
    rangeClock2.style.transform = 'rotate(' + (-62 + (+meterShow2.value * 100)) + 'deg)';
    meterShow3.value = armature_voltage_frf[5 - val];
    rangeClock3.style.transform = 'rotate(' + (-62 + (+meterShow3.value / 3)) + 'deg)';
    meterShow4.value = armature_current_frf[5 - val];
    rangeClock4.style.transform = 'rotate(' + (-82 + (+meterShow4.value * 100)) + 'deg)';

    meterShow5.value = speed_frf[5 - val];
    document.getElementById('cirmover').style.animation = `rotation ${(1800 - +meterShow5.value) / 500}s infinite linear`;
    if (val == counter_frf) {
        range1.disabled = true;
        add1.disabled = false;
    }
}

rangeMeter2.addEventListener('input', rangeChange2);
function rangeChange2() {
    const val = +rangeMeter2.value;
    rangeShow2.value = val;

    meterShow2.value = field_current_arf[val];
    rangeClock2.style.transform = 'rotate(' + (-62 + (+meterShow2.value * 100)) + 'deg)';
    meterShow3.value = armature_voltage_arf;
    rangeClock3.style.transform = 'rotate(' + (-62 + (+meterShow3.value / 3)) + 'deg)';
    meterShow4.value = armature_current_arf;
    rangeClock4.style.transform = 'rotate(' + (-82 + (+meterShow4.value * 100)) + 'deg)';


    meterShow5.value = speed_arf[val];
    document.getElementById('cirmover').style.animation = `rotation ${(1800 - +meterShow5.value) / 500}s infinite linear`;
    if (val == counter_arf) {
        range2.disabled = true;
        add2.disabled = false;
    }
}

var counter_frf = 5;
var counter_arf = 1;

function addToTable1() {
    const row = table1.insertRow(6 - counter_frf);
    const cell1 = row.insertCell(0);
    cell1.setAttribute('style', 'text-align: center; height: 50px; font-size: 20px; font-weight: bold;');
    const cell2 = row.insertCell(1);
    cell2.setAttribute('style', 'text-align: center; height: 50px; font-size: 20px; font-weight: bold;');
    const cell3 = row.insertCell(2);
    cell3.setAttribute('style', 'text-align: center; height: 50px; font-size: 20px; font-weight: bold;');
    const cell4 = row.insertCell(3);
    cell4.setAttribute('style', 'text-align: center; height: 50px; font-size: 20px; font-weight: bold;');
    const cell5 = row.insertCell(4);
    cell5.setAttribute('style', 'text-align: center; height: 50px; font-size: 20px; font-weight: bold;');
    const cell6 = row.insertCell(5);
    cell6.setAttribute('style', 'text-align: center; height: 50px; font-size: 20px; font-weight: bold;');
    const cell7 = row.insertCell(6);
    cell7.setAttribute('style', 'text-align: center; height: 50px; font-size: 20px; font-weight: bold;');


    cell1.innerHTML = 6 - counter_frf;
    cell2.innerHTML = field_current_frf;
    cell3.innerHTML = armature_current_frf[5 - counter_frf];
    cell4.innerHTML = armature_voltage_frf[5 - counter_frf];
    cell5.innerHTML = voltage_across_rc[5 - counter_frf];
    cell6.innerHTML = "";
    cell7.innerHTML = speed_frf[5 - counter_frf];

    trace1.x.push(cell4.innerHTML);
    trace1.y.push(cell7.innerHTML);

    range1.disabled = false;
    add1.disabled = true;
    counter_frf--;
    if (counter_frf == -1) {
        range1.disabled = true;
        setTimeout(function () {
            alert("Now keeping the armature rheostat to its zero resistance position, vary the field rheostat.");
        }, 1000);
        range2.disabled = false;
    }
}

function addToTable2() {
    const row = table2.insertRow(counter_arf);
    const cell1 = row.insertCell(0);
    cell1.setAttribute('style', 'text-align: center; height: 50px; font-size: 20px; font-weight: bold;');
    const cell2 = row.insertCell(1);
    cell2.setAttribute('style', 'text-align: center; height: 50px; font-size: 20px; font-weight: bold;');
    const cell3 = row.insertCell(2);
    cell3.setAttribute('style', 'text-align: center; height: 50px; font-size: 20px; font-weight: bold;');
    const cell4 = row.insertCell(3);
    cell4.setAttribute('style', 'text-align: center; height: 50px; font-size: 20px; font-weight: bold;');
    const cell5 = row.insertCell(4);
    cell5.setAttribute('style', 'text-align: center; height: 50px; font-size: 20px; font-weight: bold;');


    cell1.innerHTML = counter_arf;
    cell2.innerHTML = armature_current_arf;
    cell3.innerHTML = armature_voltage_arf;
    cell4.innerHTML = field_current_arf[counter_arf];
    cell5.innerHTML = speed_arf[counter_arf];

    trace2.x.push(cell4.innerHTML);
    trace2.y.push(cell5.innerHTML);

    range2.disabled = false;
    add2.disabled = true;
    counter_arf++;
    if (counter_arf == 6) {
        range2.disabled = true;
        document.getElementById("graph").disabled = false;
    }
}

var trace1 = {
    x: [],
    y: [],
    z: [],
    type: 'scatter'
};

var trace2 = {
    x: [],
    y: [],
    z: [],
    type: 'scatter'
}
function drawgraph() {
    console.log(trace1, trace2);
    var data = [trace1];
    var layout = {
        xaxis: {
            title: {
                text: 'Load Current',
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
                text: 'Terminal Voltage',
                font:
                {
                    family: 'Courier New, monoscope',
                    size: 18,
                    color: '#ff0000'
                }
            },
        }
    };
    Plotly.newPlot('myDiv1', data, layout, { showSendToCloud: true });

    var data2 = [trace2];
    var layout2 = {
        xaxis: {
            title: {
                text: 'Load Current',
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
                text: 'Terminal Current',
                font:
                {
                    family: 'Courier New, monoscope',
                    size: 18,
                    color: '#0000ff'
                }
            },
        }
    };
    Plotly.newPlot('myDiv2', data2, layout2, { showSendToCloud: true });
    document.getElementById("graph").disabled = true;
}