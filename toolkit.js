/*
 *    toolkit.js for tools_swarmsim.
 *    Copyright 2016 by Dustin Pfister (GPL v3)
 *
 */

// Swarm Sim Tools
var ssTools = (function () {

    var pubAPI = {

        // ssTools version
        version : '1.1.15',

        // current status of production of bug of interest (drones, queens, ... , Neural Clusters, ect)
        //bpr : 22.5579 * Math.pow(10, 30), // bug production rate of bug of interest
        //bpl : 134 * Math.pow(10, 6), // bugs per larva

        // bpr for all meat units
        meatUnits : [],

        // energy tab status
        m : 19, // swarm warp minutes
        s : 25, // swarm warp seconds
        larvaPerC : 435.019 * Math.pow(10, 24), // larva per cone

        /*    swarmwarp:
         *
         *    return total production per 1000e if swarmwarp
         *    where bpr is the bug production rate per second
         *    and m, and s are minutes and seconds.
         */
        warp : function (mui) {

            return this.meatUnits[mui].bpr * (60 * this.m + this.s) / 2;

        },

        /*    cloning:
         *
         *    return total production per 1000e if cloning
         *    where bpl is the bug production per larva, and larvaPerC is the
         *    larva production per clone
         */
        clone : function (mui) {

            return this.meatUnits[mui].bpl * this.larvaPerC / 12;

        },

        // do i clone or warp?
        what : function () {

            /*
            if (this.clone() > this.warp()) {

            return 'clone';

            } else {

            return 'warp'

            }

             */

        },

        meat : function () {

            // go to meat tab
            toTab(0);

            this.meatUnits = [],
            self = this;

            loopUnits.loop(function (unit) {

                unit.click();

                var pro = document.querySelector('div.ng-binding.ng-scope'),
                text,
                num,

                meatUnit = {

                    label : unit.innerText,
                    bpr : 0,
                    bpl : 1

                };

                console.log(unit.innerText);

                if (pro) {

                    text = pro.children[0].innerText;

                    num = text.split(' ')[0].split('E');

                    if (num.length === 1) {

                        meatUnit.bpr = Number(num[0].replace(/,/g, ''));

                    } else {

                        meatUnit.bpr = num[0] * Math.pow(10, num[1]);

                    }

                }

                text = document.querySelector('form.form-inline');

                if (text) {
                    text = text.children[2].innerText;

                    console.log('bpl:')

                    if (text.indexOf('twins') != -1) {

                        text = text.substr(2, text.length).split(' ')[0];

                        text = text.split('E');

                        if (text.length === 1) {

                            meatUnit.bpl = Number(text[0]);

                        } else {

                            meatUnit.bpl = text[0] * Math.pow(10, text[1]);

                        }

                    } else {

                        meatUnit.bpl = 1;

                    }

                }

                self.meatUnits.push(meatUnit);

            },

                function () {

                pubAPI.meatUnits.forEach(function (unit, index) {

                    unit.clone = self.clone(index);
                    unit.warp = self.warp(index);

                });

                console.log(pubAPI.meatUnits);

            });

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

    },

    // tab elements
    tabs = [],

    // to tab helper ( index 0 ==  meat tab, 1 == larva tab, ...)
    toTab = function (index) {

        tabs[index].click();

    },

    loopUnits = (function () {

        var i,
        len,
        units = [],

        api = function (forUnit) {

            api.reset();

            forUnit = forUnit === undefined ? function (unit) {
                console.log(unit)
            }
             : forUnit;
            while (i < len) {

                forUnit(units[i]);

                i += 1;

            }

        };

        api.getUnits = function () {

            units = document.querySelectorAll('.unselectedlist-label,.list-label');

        };

        api.reset = function () {

            api.getUnits();

            i = 0;

            len = units.length;

        };

        // if i is less then i call given forUnit step i and return true, else return false
        api.step = function (forUnit) {

            forUnit = forUnit === undefined ? function (unit) {
                console.log(unit)
            }
             : forUnit;

            if (i < len) {

                forUnit(units[i]);

                i += 1;

                return true;

            }

            return false;

        };

        api.loop = function (forUnit, done, time) {

            forUnit = forUnit === undefined ? function (unit) {
                console.log(unit)
            }
             : forUnit;

            done = done === undefined ? function () {

                console.log('loop done');

            }
             : done;

            time = time === undefined ? 1000 : time;

            api.reset();

            var loop = function () {

                if (api.step(forUnit)) {

                    setTimeout(loop, time);

                } else {

                    done();

                }

            };

            loop();

        }

        api.reset();

        return api;

    }
        ()),

    updateMeat = function () {};

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

    // return public api
    return pubAPI;

}
    ());
