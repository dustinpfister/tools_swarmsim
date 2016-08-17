/*
 *    toolkit.js for tools_swarmsim.
 *    Copyright 2016 by Dustin Pfister (GPL v3)
 *
 */

// Swarm Sim Tools
var ssTools = {

    // ssTools version
    version : '1.0.0',

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

    }

};

/*    swarmwarp:
 *
 *    return total production per 1000e if swarmwarp
 *    where bpr is the bug production rate per second
 *    and m, and s are minutes and seconds.
 */
//var swarmwarp = function(bpr, m, s){

//    return bpr * (60 * m + s) / 2;

//};

// example:
// swarmwarp(872 * Math.pow(10,27),20,8);


/*    cloning:
 *
 *    return total production per 1000e if cloning
 *    where bpl is the bug production per larva, and larvaPerC is the
 *    larva production per clone
 */

//var cloning = function(bpl, larvaPerC ){

//    return bpl * larvaPerC / 12;

//};

// example: (67.1 million Neural Cluster per larva, and 63.6 septillion larva per clone)
// cloning( 67.1 * Math.pow(10,6) , 63.6 * Math.pow(10,24) );
