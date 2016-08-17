## tools_swarmsim

This is a toolkit for the incremental game ["Swarm Simulator"](https://swarmsim.github.io/), by [Evan Rosson](https://github.com/erosson), released under the terms of GNU GPL v2. The source code of the project can be found here on gitHub at [https://github.com/swarmsim/swarm](https://github.com/swarmsim/swarm).

( this readme reflects ssTools v1.0.0 )

# what the tool kit does.

As of this writing the toolkit helps a player make an informed decision if it is better to 'clone' or 'warp'. If you do not know what that means take a moment to play the game.

# getting started

Before you get started with ssTools take a moment to play the game for a bit until you unlock energy, cloning, and swarmwarp, as of 1.0.0 there is no point to using ssTools until you reach this point.

In chrome open up the javascript console by pressing ctrl + shift + j to open the dev tools menu, and make sure you are in the console tab, you use the toolkit by copying and pasting the code in toolkit.js into the console.

# update the status

To update the status of ssTools copy and past the source code into an editor and edit the following properties to reflect the current status of cloning and warping, as well as a bug of interest. The properties of interest should be up at the top of the ssTools object.

    // Swarm Sim Tools
    var ssTools = {

        // ssTools version
        version : 1.0.0,

        // current status of production of bug of interest (drones, queens, ... , Neural Clusters, ect)
        bpr : 22.5579 * Math.pow(10, 30), // bug production rate of bug of interest
        bpl : 134 * Math.pow(10, 6), // bugs per larva

        // energy tab status
        m : 19, // swarm warp minutes
        s : 0, // swarm warp seconds
        larvaPerC : 422.456 * Math.pow(10, 24), // larva per cone

        // ...methods...

    };

To know the current values to enter check out the more>options tap of the game and select "Engineering" for the number format. 

# update data at the energy tab

To update the values m, s , and larvaPerC click the energy tab. For swarmwarp update m, and s to the minutes and seconds values stated in the sentence "Warp time around your swarm. Instantly travel into the future, gaining 19:00 of production. Does not produce energy.", in this example we have m : 19, and s : 0. For cloning we are interested in how many larva we get per clone. So if you see "allowing you to clone up to 422.456E24 larvae", then we want larvaPerC :  422.456 * Math.pow(10, 24).

# update ssTools.bpr, and ssTools.bpl

Next update ssTools.bpr, and ssTools.bpl to current values of a bug of interest, by clicking on the meat tab, and then on a bug of interest (such as Neural Clusters in this example). where I see "You earn 22.5579E30 neural clusters per second.", I then update to bpr : 22.5579 * Math.pow(10, 30). I also want to know how many neural clusters i get per larva so where I see "neural cluster (×134E6 twins) will cost 3.48E18 meat", I then update bpl : 134 * Math.pow(10, 6).

# ssTools.what();

Once all data is updated calling ssTools.what will tell you if it is better to 'warp' of 'clone'

    ssTools.what(); // 'warp'

# ssTools.warp();

The warp method can be called manually to find bug production per 1000 energy, when buying a swarmwarp.

    ssTools.warp(); // 1.2858003000000001e+34

# ssTools.clone();

The clone method can be called to find the potential bug production when buying larva via cloning, assuming you have the max amount of larva cocooned in the larva tab, and you spend the larva on the bug of interest.

    ssTools.clone(); // 4.7174253333333334e+33
