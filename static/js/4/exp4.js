var not_reversed = true;
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
        endpoint4 = {
            anchor: [0.5, 0.5, -5, -6.5],
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
            e10 = prepare1("ld10"),
            e11 = prepare2("ld11"),
            e12 = prepare3("ld12"),
            e13 = prepare1("ld13"),
            e14 = prepare2("ld14"),
            e15 = prepare3("ld15"),
            e16 = prepare4("ld16"),
            e17 = prepare2("ld17"),
            e18 = prepare3("ld18"),
            e19 = prepare1("ld19"),
            e20 = prepare2("ld20"),
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

        var correct_connections_1_5 = [
            {
                "source": "ld1",
                "target": "ld5"
            },

            {
                "source": "ld5",
                "target": "ld1"
            }
        ];
        var correct_connections_2_6 = [
            {
                "source": "ld2",
                "target": "ld6"
            },

            {
                "source": "ld6",
                "target": "ld2"
            }
        ];
        var correct_connections_3_7 = [
            {
                "source": "ld3",
                "target": "ld7"
            },

            {
                "source": "ld7",
                "target": "ld3"
            }
        ];
        var correct_connections_4_8 = [
            {
                "source": "ld4",
                "target": "ld8"
            },

            {
                "source": "ld8",
                "target": "ld4"
            }
        ];
        var correct_connections_9_11 = [
            {
                "source": "ld9",
                "target": "ld11"
            },

            {
                "source": "ld11",
                "target": "ld9"
            }
        ];
        var correct_connections_10_12 = [
            {
                "source": "ld10",
                "target": "ld12"
            },

            {
                "source": "ld12",
                "target": "ld10"
            }
        ];
        var correct_connections_11_13 = [
            {
                "source": "ld11",
                "target": "ld13"
            },

            {
                "source": "ld13",
                "target": "ld11"
            }
        ];
        var correct_connections_11_14 = [
            {
                "source": "ld11",
                "target": "ld14"
            },

            {
                "source": "ld14",
                "target": "ld11"
            }
        ];
        var correct_connections_14_15 = [
            {
                "source": "ld14",
                "target": "ld15"
            },

            {
                "source": "ld15",
                "target": "ld14"
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
        var correct_connections_16_19 = [
            {
                "source": "ld16",
                "target": "ld19"
            },

            {
                "source": "ld19",
                "target": "ld16"
            }
        ];
        var correct_connections_20_12 = [
            {
                "source": "ld20",
                "target": "ld12"
            },

            {
                "source": "ld12",
                "target": "ld20"
            }
        ];
        var correct_connections_19_17 = [
            {
                "source": "ld19",
                "target": "ld17"
            },

            {
                "source": "ld17",
                "target": "ld19"
            }
        ];
        var correct_connections_20_18 = [
            {
                "source": "ld20",
                "target": "ld18"
            },

            {
                "source": "ld18",
                "target": "ld20"
            }
        ];
        //a connection outside this will invalidate the circuit
        var allowed_connections = [
            {
                "source": "ld1",
                "target": "ld5"
            },

            {
                "source": "ld5",
                "target": "ld1"
            },
            {
                "source": "ld2",
                "target": "ld6"
            },

            {
                "source": "ld6",
                "target": "ld2"
            },
            {
                "source": "ld3",
                "target": "ld7"
            },

            {
                "source": "ld7",
                "target": "ld3"
            },
            {
                "source": "ld4",
                "target": "ld8"
            },

            {
                "source": "ld8",
                "target": "ld4"
            },
            {
                "source": "ld9",
                "target": "ld11"
            },

            {
                "source": "ld11",
                "target": "ld9"
            },
            {
                "source": "ld10",
                "target": "ld12"
            },

            {
                "source": "ld12",
                "target": "ld10"
            },
            {
                "source": "ld11",
                "target": "ld13"
            },

            {
                "source": "ld13",
                "target": "ld11"
            },
            {
                "source": "ld11",
                "target": "ld14"
            },

            {
                "source": "ld14",
                "target": "ld11"
            },
            {
                "source": "ld14",
                "target": "ld15"
            },

            {
                "source": "ld15",
                "target": "ld14"
            },
            {
                "source": "ld13",
                "target": "ld15"
            },

            {
                "source": "ld15",
                "target": "ld13"
            },
            {
                "source": "ld16",
                "target": "ld19"
            },

            {
                "source": "ld19",
                "target": "ld16"
            },
            {
                "source": "ld20",
                "target": "ld12"
            },

            {
                "source": "ld12",
                "target": "ld20"
            },
            {
                "source": "ld19",
                "target": "ld17"
            },

            {
                "source": "ld17",
                "target": "ld19"
            },
            {
                "source": "ld20",
                "target": "ld18"
            },

            {
                "source": "ld18",
                "target": "ld20"
            },
        ];

        var actual_connections = instance.getAllConnections();

        var is_connected_1_5 = false;
        var is_connected_2_6 = false;
        var is_connected_3_7 = false;
        var is_connected_4_8 = false;
        var is_connected_9_11 = false;
        var is_connected_10_12 = false;
        var is_connected_11_13 = false;
        var is_connected_11_14 = false;
        var is_connected_14_15 = false;
        var is_connected_13_15 = false;
        var is_connected_16_19 = false;
        var is_connected_20_12 = false;
        var is_connected_19_17 = false;
        var is_connected_20_18 = false;

        var unallowed_connection_present = false;

        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if (!is_connected_1_5) {
                is_connected_1_5 = correct_connections_1_5.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!is_connected_2_6) {
                is_connected_2_6 = correct_connections_2_6.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!is_connected_3_7) {
                is_connected_3_7 = correct_connections_3_7.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!is_connected_4_8) {
                is_connected_4_8 = correct_connections_4_8.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
            if (!is_connected_9_11) {
                is_connected_9_11 = correct_connections_9_11.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
            if (!is_connected_10_12) {
                is_connected_10_12 = correct_connections_10_12.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
            if (!is_connected_11_13) {
                is_connected_11_13 = correct_connections_11_13.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
            if (!is_connected_11_14) {
                is_connected_11_14 = correct_connections_11_14.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
            if (!is_connected_14_15) {
                is_connected_14_15 = correct_connections_14_15.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
            if (!is_connected_13_15) {
                is_connected_13_15 = correct_connections_13_15.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
            if (!is_connected_16_19) {
                is_connected_16_19 = correct_connections_16_19.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
            if (!is_connected_20_12) {
                is_connected_20_12 = correct_connections_20_12.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
            if (!is_connected_19_17) {
                is_connected_19_17 = correct_connections_19_17.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }
            if (!is_connected_20_18) {
                is_connected_20_18 = correct_connections_20_18.find(function (conn) {
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
        if (not_reversed && is_connected_1_5 && is_connected_2_6 && is_connected_3_7 && is_connected_4_8 && is_connected_9_11 && is_connected_10_12 && is_connected_11_13 && !is_connected_11_14 && is_connected_14_15 && !is_connected_13_15 && is_connected_16_19 && is_connected_20_12 && is_connected_19_17 && is_connected_20_18 && !unallowed_connection_present) {
            alert("𝐀𝐥𝐞𝐫𝐭 ! 𝐂𝐨𝐫𝐫𝐞𝐜𝐭 𝐜𝐨𝐧𝐧𝐞𝐜𝐭𝐢𝐨𝐧 𝐩𝐫𝐨𝐜𝐞𝐞𝐝 𝐭𝐨 𝐭𝐚𝐤𝐞 𝐫𝐞𝐚𝐝𝐢𝐧𝐠.");
            document.getElementById("check-button").disabled = true;
            rightconnection = true;
            disable_all_nr();
            document.querySelector("#connection-table").innerHTML = ``;
            document.querySelector("#wrapper").style.top = "10px";
            document.getElementById('wrapper').scrollIntoView();
        }
        else if (!not_reversed && is_connected_1_5 && is_connected_2_6 && is_connected_3_7 && is_connected_4_8 && is_connected_9_11 && is_connected_10_12 && !is_connected_11_13 && is_connected_11_14 && !is_connected_14_15 && is_connected_13_15 && is_connected_16_19 && is_connected_20_12 && is_connected_19_17 && is_connected_20_18 && !unallowed_connection_present) {
            alert("𝐀𝐥𝐞𝐫𝐭 ! 𝐂𝐨𝐫𝐫𝐞𝐜𝐭 𝐜𝐨𝐧𝐧𝐞𝐜𝐭𝐢𝐨𝐧 𝐩𝐫𝐨𝐜𝐞𝐞𝐝 𝐭𝐨 𝐭𝐚𝐤𝐞 𝐫𝐞𝐚𝐝𝐢𝐧𝐠.");
            document.getElementById("check-button").disabled = true;
            rightconnection = true;
            disable_all_r();
            document.querySelector("#connection-table").innerHTML = ``;
            document.querySelector("#wrapper").style.top = "10px";
            document.getElementById('wrapper').scrollIntoView();
        }
        else {
            alert("𝐀𝐥𝐞𝐫𝐭 ! 𝐈𝐧𝐜𝐨𝐫𝐫𝐞𝐜𝐭 𝐜𝐨𝐧𝐧𝐞𝐜𝐭𝐢𝐨𝐧.");

            return;
        }
    });
});

function disable_all_nr() {
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
                //e11 = prepare2("ld11"),
                e12 = prepare3("ld12"),
                //e13 = prepare1("ld13"),
                e14 = prepare2("ld14"),
                e15 = prepare3("ld15"),
                e16 = prepare1("ld16"),
                e17 = prepare2("ld17"),
                e18 = prepare3("ld18"),
                e19 = prepare1("ld19"),
                e20 = prepare2("ld20"),
                clearBtn = jsPlumb.getSelector("#anim-clear"),
                addBtn = jsPlumb.getSelector("#add");
        });
    });
}


function disable_all_r() {
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
                e13 = prepare1("ld13"),
                e14 = prepare2("ld14"),
                e15 = prepare3("ld15"),
                e16 = prepare1("ld16"),
                e17 = prepare2("ld17"),
                e18 = prepare3("ld18"),
                e19 = prepare1("ld19"),
                e20 = prepare2("ld20"),
                clearBtn = jsPlumb.getSelector("#anim-clear"),
                addBtn = jsPlumb.getSelector("#add");
        });
    });
}


var datapoints1 = [];
var mcboffstate = true;

var speed_vals = [500, 802, 955, 1154, 1300];
var nr_terminal_voltage_vals = [100, 119, 149, 170, 185];
var r_terminal_voltage_vals = [99, 120, 148, 165, 178];

var nr_lc = [0.0, 0.0, 0.66, 1.32, 2.15];
var nr_tv = [0.0, 185, 176, 164, 152];

var r_lc = [0.0, 0.0, 0.66, 1.32, 2.15];
var r_tv = [0.0, 178, 172, 166, 160];

var init_idx = 0;

function mcbonoff() {
    if (rightconnection == true) {
        if (mcboffstate == true) {
            mcboffstate = false;
            document.getElementById('myimage').src = '/static/images/mcbon.png';
            document.getElementById('myimage1').src = '/static/images/push2.png';
            document.getElementById('myimage2').src = '/static/images/push2.png';
            document.getElementById('myimage3').src = '/static/images/push2.png';

            document.getElementById("line1").style.backgroundColor = "green";
            document.getElementById("line2").style.backgroundColor = "green";
            document.getElementById("line3").style.backgroundColor = "green";
            document.getElementById("line4").style.backgroundColor = "green";

            document.getElementById("range1").disabled = false;
            rangeMeter1.value = 1;
            rangeShow1.value = 1;

            rangeShow01.value = `${speed_vals[init_idx]} RPM`;
            document.getElementById('cirmover').style.animation = `rotation ${(1500 - speed_vals[init_idx]) / 200}s infinite linear`;

            rangeShow03.value = not_reversed ? nr_terminal_voltage_vals[init_idx] : r_terminal_voltage_vals[init_idx];
            rangeClock2.style.transform = 'rotate(' + (-62 + rangeShow03.value / 3.5) + 'deg)';

            init_idx++;
            document.getElementById("check-button").disabled = true;
        }
        else if (mcboffstate == false && not_reversed == true) {
            rightconnection = false;
            mcboffstate = true;
            not_reversed = false;
            document.getElementById('myimage').src = '/static/images/mcboff.png';
            document.getElementById('myimage1').src = '/static/images/push1.png';
            document.getElementById('myimage2').src = '/static/images/push1.png';
            document.getElementById('myimage3').src = '/static/images/push1.png';

            document.getElementById("line1").style.backgroundColor = "red";
            document.getElementById("line2").style.backgroundColor = "red";
            document.getElementById("line3").style.backgroundColor = "red";
            document.getElementById("line4").style.backgroundColor = "red";

            document.getElementById('cirmover').style.animation = `rotation 0s infinite linear`;

            rangeMeter1.value = 0;
            rangeMeter2.value = 0;

            init_idx = 0;

            rangeShow1.value = 0;
            rangeShow2.value = 0;

            rangeShow01.value = 0;
            rangeShow02.value = 0;
            rangeShow03.value = 0;

            rangeClock1.style.transform = 'rotate(' + (-62) + 'deg)';
            rangeClock2.style.transform = 'rotate(' + (-62) + 'deg)';

            document.getElementById("graph").disabled = true;
            document.getElementById("addToTable").disabled = true;

            document.getElementById("check-button").disabled = false;

            document.getElementById("range1").disabled = true;
            document.getElementById("range2").disabled = true;

            setTimeout(function () {
                alert("Click on number '13(SE1)' and '14(SE2)' to remove these connections.\nThen make new connection by REVERSING THE SERIES FIELD TERMINALS as instructed");
            }, 1000);
        }
        else {
            return;
        }
    }
    else {
        alert("Alert ! Please complete the circuit or remove wrong connections");
    }
}

var count = 1;

var rangeMeter1 = document.querySelector('#range1');
var rangeMeter2 = document.querySelector('#range2');

var rangeShow1 = document.querySelector("#show1");
var rangeShow2 = document.querySelector("#show2");

var rangeShow01 = document.querySelector("#show01");
var rangeShow02 = document.querySelector("#show02");
var rangeShow03 = document.querySelector("#show03");


var rangeClock1 = document.querySelector('#meter1');
var rangeClock2 = document.querySelector('#meter2');

var table1 = document.getElementById("table1");
var table2 = document.getElementById("table2");

var clickcounter_nr = 1;
var clickcounter_r = 1;

rangeMeter1.addEventListener('input', rangeChange);
function rangeChange() {
    init_idx = rangeMeter1.value;

    rangeShow1.value = rangeMeter1.value;
    rangeShow01.value = speed_vals[init_idx];

    rangeShow03.value = not_reversed ? nr_terminal_voltage_vals[init_idx] : r_terminal_voltage_vals[init_idx];
    rangeClock2.style.transform = 'rotate(' + (-62 + rangeShow03.value / 3.5) + 'deg)';

    rangeShow01.value = `${speed_vals[init_idx]} RPM`;
    document.getElementById('cirmover').style.animation = `rotation ${(1500 - speed_vals[init_idx]) / 200}s infinite linear`;

    if (init_idx == 4) {
        document.getElementById("range1").disabled = true;
        setTimeout(function () {
            alert("Required speed achived! Start increasing the load current till 100% rated load is achived by increasing the load value!");
        }, 500);
        document.getElementById("range2").disabled = false;
        rangeMeter2.value = 1;
        rangeShow2.value = 1;

        if (not_reversed) {
            rangeShow02.value = nr_lc[rangeMeter2.value];
            rangeClock1.style.transform = 'rotate(' + (-62 + rangeShow02.value * 20) + 'deg)';

            rangeShow03.value = nr_tv[rangeMeter2.value];
            rangeClock2.style.transform = 'rotate(' + (-62 + rangeShow03.value / 3.5) + 'deg)';

            var y = table1.insertRow(clickcounter_nr++);
            var cell1 = y.insertCell(0);
            cell1.setAttribute('style', 'text-align: center;');
            var cell2 = y.insertCell(1);
            cell2.setAttribute('style', 'text-align: center;');
            var cell3 = y.insertCell(2);
            cell3.setAttribute('style', 'text-align: center;');
            var cell4 = y.insertCell(3);
            cell4.setAttribute('style', 'text-align: center;');

            cell1.innerHTML = count++;
            cell2.innerHTML = 1300;
            cell3.innerHTML = rangeShow02.value;
            cell4.innerHTML = rangeShow03.value;
        }
        else {
            rangeShow02.value = r_lc[rangeMeter2.value];
            rangeClock1.style.transform = 'rotate(' + (-62 + rangeShow02.value * 20) + 'deg)';

            rangeShow03.value = r_tv[rangeMeter2.value];
            rangeClock2.style.transform = 'rotate(' + (-62 + rangeShow03.value / 3.5) + 'deg)';

            var y = table2.insertRow(clickcounter_r++);
            var cell1 = y.insertCell(0);
            cell1.setAttribute('style', 'text-align: center;');
            var cell2 = y.insertCell(1);
            cell2.setAttribute('style', 'text-align: center;');
            var cell3 = y.insertCell(2);
            cell3.setAttribute('style', 'text-align: center;');
            var cell4 = y.insertCell(3);
            cell4.setAttribute('style', 'text-align: center;');

            cell1.innerHTML = count++;
            cell2.innerHTML = 1300;
            cell3.innerHTML = rangeShow02.value;
            cell4.innerHTML = rangeShow03.value;
        }
    }
    init_idx++;
}

rangeMeter2.addEventListener('input', rangeChange2);
function rangeChange2() {
    rangeShow2.value = rangeMeter2.value;

    if (not_reversed) {
        rangeShow02.value = nr_lc[rangeMeter2.value];
        rangeClock1.style.transform = 'rotate(' + (-62 + rangeShow02.value * 20) + 'deg)';

        rangeShow03.value = nr_tv[rangeMeter2.value];
        rangeClock2.style.transform = 'rotate(' + (-62 + rangeShow03.value / 3.5) + 'deg)';

        if (rangeMeter2.value == clickcounter_nr) {
            document.getElementById("range2").disabled = true;
            document.getElementById("addToTable").disabled = false;
        }
    }
    else {
        rangeShow02.value = r_lc[rangeMeter2.value];
        rangeClock1.style.transform = 'rotate(' + (-62 + rangeShow02.value * 20) + 'deg)';

        rangeShow03.value = r_tv[rangeMeter2.value];
        rangeClock2.style.transform = 'rotate(' + (-62 + rangeShow03.value / 3.5) + 'deg)';

        if (rangeMeter2.value == clickcounter_r) {
            document.getElementById("range2").disabled = true;
            document.getElementById("addToTable").disabled = false;
        }
    }
}


addToTable.addEventListener('click', () => {
    if (rangeMeter2.value < 4) {
        document.getElementById("range2").disabled = false;
    }
    document.getElementById("addToTable").disabled = true;
    if (not_reversed) {
        if (clickcounter_nr <= 4) {
            var y = table1.insertRow(clickcounter_nr++);
            var cell1 = y.insertCell(0);
            cell1.setAttribute('style', 'text-align: center;');
            var cell2 = y.insertCell(1);
            cell2.setAttribute('style', 'text-align: center;');
            var cell3 = y.insertCell(2);
            cell3.setAttribute('style', 'text-align: center;');
            var cell4 = y.insertCell(3);
            cell4.setAttribute('style', 'text-align: center;');

            cell1.innerHTML = count++;
            cell2.innerHTML = 1300;
            cell3.innerHTML = rangeShow02.value;
            cell4.innerHTML = rangeShow03.value;
        }
        else {
            alert("Only 4 readings are allowed.");

        }
        if (clickcounter_nr != 1) {
            trace1.y.push(cell4.innerHTML);
            trace1.x.push(cell3.innerHTML);
        }
        if (rangeMeter2.value == 4) {
            setTimeout(function () {
                alert("Now turn off the MCB");
            }, 500);
            document.querySelector("#connection-table").innerHTML = `<B>Step 1: </B>Make the proper connection by clicking the node as instructed below. If the wire is
            misplaced, click the node number to deattach the nodes' wire. <br>
            <table>
            <tr>
            <b>series field terminals reversed</b>
        </tr>
        <tr>
            <td><B>From</B></td>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>9</td>
            <td>10</td>
            <td><b>11</b></td>
            <td><b>13</b></td>
            <td>16</td>
            <td>20</td>
            <td>19</td>
            <td>20</td>
        </tr>
        <tr>
            <td><B>To</B></td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
            <td>8</td>
            <td>11</td>
            <td>12</td>
            <td><b>14</b></td>
            <td><b>15</b></td>
            <td>19</td>
            <td>12</td>
            <td>17</td>
            <td>18</td>
        </tr>
            </table>`;
        }
        document.getElementById('wrapper').scrollIntoView();
    }
    else {
        if (clickcounter_r <= 4) {
            var y = table2.insertRow(clickcounter_r++);
            var cell1 = y.insertCell(0);
            cell1.setAttribute('style', 'text-align: center;');
            var cell2 = y.insertCell(1);
            cell2.setAttribute('style', 'text-align: center;');
            var cell3 = y.insertCell(2);
            cell3.setAttribute('style', 'text-align: center;');
            var cell4 = y.insertCell(3);
            cell4.setAttribute('style', 'text-align: center;');

            cell1.innerHTML = count++;
            cell2.innerHTML = 1300;
            cell3.innerHTML = rangeShow02.value;
            cell4.innerHTML = rangeShow03.value;
        }
        else {
            alert("Only 4 readings are allowed.");
        }
        if (rangeMeter2.value == 4) {
            document.getElementById("graph").disabled = false;
            setTimeout(function () {
                alert("Now click on 'Graph' button to obtain the 'Load Current' VS 'Terminal Voltage' graph");
            }, 500);
        }
        if (clickcounter_r != 1) {
            trace2.y.push(cell4.innerHTML);
            trace2.x.push(cell3.innerHTML);
        }
    }

});



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
    if (clickcounter_nr < 4 || clickcounter_r < 4) {
        alert("Alert ! Please take 4 readings for each experiment.");
    }
    else {
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
                        color: '#ff0000'
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
                        color: '#ff0000'
                    }
                },
            }
        };
        Plotly.newPlot('myDiv2', data2, layout2, { showSendToCloud: true });
    }
    document.getElementById("graph").disabled = true;
}