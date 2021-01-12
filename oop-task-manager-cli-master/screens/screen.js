class Screen {
    constructor(rl, state, previousScreen) {
        this.rl = rl;
        this.state = state;
        this.previousScreen = previousScreen;
    }

    printHeader(title) {
        console.clear();
        const header =
        console.log("********************************************");
        console.log(` ${title} `);
        console.log("********************************************");
        console.log();
    }

    printMenu(menuitems = []) {
        console.log("Please choose one of the following options:");
        menuitems.forEach((item, index) => {
            console.log(`${index + 1}. ${item}`);
        });
        console.log();
        console.log("X. Exit");
        console.log();
        console.log("Type a number to go to another screen. Type");
        console.log("an X to return to the main menu.");
    }
}

module.exports = {
    Screen
};

