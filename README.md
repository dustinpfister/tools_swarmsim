## tools_swarmsim

This is a toolkit for the incremental game ["Swarm Simulator"](https://swarmsim.github.io/), by [Evan Rosson](https://github.com/erosson), released under the terms of GNU GPL v2. The source code of the project can be found here on gitHub at [https://github.com/swarmsim/swarm](https://github.com/swarmsim/swarm).

( this readme reflects ssTools v1.1.17 )

# what the tool kit does.

As of this writing the toolkit helps a player make an informed decision if it is better to 'clone' or 'warp'. If you do not know what that means take a moment to play the game.

# getting started

Before you get started with ssTools take a moment to play the game for a bit until you unlock energy, cloning, and swarmwarp, there is no point to using ssTools until you reach this point.

# update data at the energy tab

As of 1.1.17 the process of updating these values must be done by editing the source code.

To update the values m, s , and larvaPerC click the energy tab. For swarmwarp update m, and s to the minutes and seconds values stated in the sentence "Warp time around your swarm. Instantly travel into the future, gaining 19:00 of production. Does not produce energy.", in this example we have m : 19, and s : 0. For cloning we are interested in how many larva we get per clone. So if you see "allowing you to clone up to 422.456E24 larvae", then we want larvaPerC :  422.456 * Math.pow(10, 24).

In toolkit.js update the values in the pubAPI object to reflect the current game state.

Once you have everything set in chrome open up the javascript console by pressing ctrl + shift + j to open the dev tools menu, and make sure you are in the console tab, copy and paste the code in toolkit.js into the console and hit eneter. You can now use the ssTools api as follows.

# ssTools.meat();

For now this is the only method of interest. Before you use it make sure that you have "Engineering" set for the number format in the options menu as that process is not yet automated. When you are ready just call ssTools.meat() in the console and if all goes well it should build an array of meatUnit objects that can be accessed via ssTools.meatUnits. Just look at the what property of an object of a bug of interest to know if it is better to spend energy on cloning for larva that you will then spend on buying more of that bug, or just simply swarm warping with respect to the current rate of production per second.