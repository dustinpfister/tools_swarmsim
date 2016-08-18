/*
 *    toolkit.js for tools_swarmsim.
 *    Copyright 2016 by Dustin Pfister (GPL v3)
 *
 */

// Swarm Sim Tools
var ssTools = (function () {

    // tab elements
    var tabs = [],

    // to tab helper ( index 0 ==  meat tab, 1 == larva tab, ...)
    toTab = function (index) {

        tabs[index].click();

    },

    loopUnits = function (forUnit) {

        var units = document.querySelectorAll('.unselectedlist-label,.list-label'),
        i = 0,
        len = units.length;

        forUnit = forUnit === undefined ? function (unit) {console.log(unit);}: forUnit;

        while (i < len) {

            forUnit(units[i]);

            i += 1;

        }

    },

    updateMeat = function () {

        var classNames = 'meat,drone,queen,nest,greaterqueen,hive,hivequeen,empress,prophet,goddess,pantheon,pantheon2,pantheon3,pantheon4'.split(','),

        unit,
        i,
        len;

        // go to meat tab
        toTab(0);

        len = classNames.length;
        i = len;

        var loop = function () {

            if (i > 1) {

                setTimeout(loop, 1000);

            }

            i -= 1;

            //units[i].children[0].click();
            //console.log(units[i]);

            unit = document.getElementsByClassName('label-' + classNames[i])[0];
            unit.click();

            console.log('.label-' + classNames[i]);
            //console.log(document.getElementsByClassName('label-' + classNames[i]));

            //console.log(document.getElementsByClassName('.lable-'+classNames[i])[0]);

        };

        loop();

    };

    // setup
    (function () {

        // get tabs
        var links = document.getElementsByTagName('a'),
        i = 0,
        len = links.length;
        while (i < len) {

            if (links[i].className === 'ng-binding') {

                tabs.push(links[i]);

            }

            i += 1;

        }

    }
        ());

    // public api
    return {

        // ssTools version
        version : '1.1.4',

        // current status of production of bug of interest (drones, queens, ... , Neural Clusters, ect)
        bpr : 22.5579 * Math.pow(10, 30), // bug production rate of bug of interest
        bpl : 134 * Math.pow(10, 6), // bugs per larva

        // energy tab status
        m : 19, // swarm warp minutes
        s : 0, // swarm warp seconds
        larvaPerC : 422.456 * Math.pow(10, 24), // larva per cone

        /*    swarmwarp:
         *
         *    return total production per 1000e if swarmwarp
         *    where bpr is the bug production rate per second
         *    and m, and s are minutes and seconds.
         */
        warp : function () {

            return this.bpr * (60 * this.m + this.s) / 2;

        },

        /*    cloning:
         *
         *    return total production per 1000e if cloning
         *    where bpl is the bug production per larva, and larvaPerC is the
         *    larva production per clone
         */
        clone : function () {

            return this.bpl * this.larvaPerC / 12;

        },

        // do i clone or warp?
        what : function () {

            if (this.clone() > this.warp()) {

                return 'clone';

            } else {

                return 'warp'

            }

        },

        meat : function () {

            updateMeat();

        },

        toTab : function (index) {

            toTab(index);
            console.log(document.getElementsByClassName('unit-table'));

        },

        // grab values from dom
        grab : function () {

            //console.log(document.body);

            //    var appElement = document.querySelector('[ng-app=swarmApp]');
            //appScope = angular.element(appElement).scope();

            // class 'tab-icon-meat'


            //  console.log(document.querySelector('[ng-app=swarmApp]'));
            //  console.log(document.getElementsByClassName('tab-icon-meat'));
            //  console.log(document.getElementsByClassName('ng-binding'));

            // get the unit table
            //  console.log(document.getElementsByClassName('unit-table'));
            //  console.log(document.getElementsByTagName('tbody'));

        }

    };

}
    ());
