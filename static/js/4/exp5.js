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

        //a connection outside this will invalidate the circuit
        var allowed_connections = [
            {
                "source": "ld1",
                "target": "ld3"
            },
            {
                "source": "ld3",
                "target": "ld1"
            }
        ];

        var actual_connections = instance.getAllConnections();


        var is_connected_1_3 = false;
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

            if (!unallowed_connection_present) {
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }
        });

        //short cut can be used for debugging
        if (is_connected_1_3 && !unallowed_connection_present) {
            alert("Alert ! Correct connection proceed to take reading.");
            document.getElementById("check-button").disabled = true;
            document.getElementById("connection-table").innerHTML = "";
            rightconnection = true;
            disable_all();
            setTimeout(function () {
                alert("Now turn on the power supply");
            }, 2000);
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
                clearBtn = jsPlumb.getSelector("#anim-clear"),
                addBtn = jsPlumb.getSelector("#add");
        });
    });
}


var mcboffstate = true;

function mcbonoff() {
    if (rightconnection == true) {

        if (mcboffstate == true) {

            mcboffstate = false;
            document.getElementById('myimage').src = '/static/images/mcbon.png';
            document.getElementById('myimage1').src = '/static/images/push2.png';
            document.getElementById('myimage2').src = '/static/images/push2.png';
            document.getElementById('myimage3').src = '/static/images/push2.png';

            rangeChange();
        }

        else {
            return;
        }
    }
    else {
        alert("Alert ! Please complete the circuit or remove wrong connections");
    }
}

var rangeMeter = document.getElementById('range');

var rangeShow1 = document.getElementById("show01");
var rangeShow2 = document.getElementById("show02");
var rangeShow3 = document.getElementById("show03");

var meterShow1 = document.getElementById("show1");
var meterShow2 = document.getElementById("show2");
var meterShow3 = document.getElementById("show3");

var rangeClock1 = document.getElementById('meter1');
var rangeClock2 = document.getElementById('meter2');

var table = document.getElementById('table');


const supply_voltage = [210, 212, 211, 212, 214, 215, 216];
const supply_current = [2.5, 2.4, 2.3, 2.2, 2.1, 2.0, 1.9];
const s1 = [4.8, 4.8, 4.8, 4.6, 4.1, 3.9, 3.7];
const s2 = [0.9, 0.8, 0.9, 0.8, 0.8, 0.8, 0.8];
const speed = [1296, 1321, 1333, 1388, 1444, 1471, 1515];


var counter = 6;
rangeMeter.addEventListener('input', rangeChange);
function rangeChange() {
    const val = +rangeMeter.value;
    rangeShow3.value = val;

    meterShow1.value = supply_voltage[6 - val];
    rangeClock1.style.transform = 'rotate(' + (-62 + (+meterShow1.value / 3)) + 'deg)';
    meterShow2.value = supply_current[6 - val];
    rangeClock2.style.transform = 'rotate(' + (-62 + (+meterShow2.value * 10)) + 'deg)';

    rangeShow1.value = s1[6 - val];
    rangeShow2.value = s2[6 - val];

    meterShow3.value = speed[6 - val];
    document.getElementById('cirmover').style.animation = `rotation ${(1600 - +meterShow3.value) / 500}s infinite linear`;
    if (val == counter) {
        range.disabled = true;
        add.disabled = false;
    }
}

function addToTable() {
    const row = table.insertRow(7 - counter);
    const cell1 = row.insertCell(0);
    cell1.setAttribute('style', 'text-align: center; height: 40px; font-size: 18px; font-weight: bold;');
    const cell2 = row.insertCell(1);
    cell2.setAttribute('style', 'text-align: center; height: 40px; font-size: 18px; font-weight: bold;');
    const cell3 = row.insertCell(2);
    cell3.setAttribute('style', 'text-align: center; height: 40px; font-size: 18px; font-weight: bold;');
    const cell4 = row.insertCell(3);
    cell4.setAttribute('style', 'text-align: center; height: 40px; font-size: 18px; font-weight: bold;');
    const cell5 = row.insertCell(4);
    cell5.setAttribute('style', 'text-align: center; height: 40px; font-size: 18px; font-weight: bold;');
    const cell6 = row.insertCell(5);
    cell6.setAttribute('style', 'text-align: center; height: 40px; font-size: 18px; font-weight: bold;');


    cell1.innerHTML = 7 - counter;
    cell2.innerHTML = supply_voltage[6 - counter];
    cell3.innerHTML = supply_current[6 - counter];
    cell4.innerHTML = speed[6 - counter];
    cell5.innerHTML = s1[6 - counter];
    cell6.innerHTML = s2[6 - counter];


    trace1.x.push(cell3.innerHTML);
    trace1.y.push(cell4.innerHTML);

    range.disabled = false;
    add.disabled = true;
    counter--;
    if (counter == -1) {
        range.disabled = true;
        graph.disabled = false;
    }
}

var trace1 = {
    x: [],
    y: [],
    z: [],
    type: 'scatter'
};

function drawgraph() {
    var data = [trace1];
    var layout = {
        xaxis: {
            title: {
                text: 'Current(A)',
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
                text: 'Speed(rpm)',
                font:
                {
                    family: 'Courier New, monoscope',
                    size: 18,
                    color: '#ff0000'
                }
            },
        }
    };
    Plotly.newPlot('myDiv', data, layout, { showSendToCloud: true });
    document.getElementById("graph").disabled = true;
}