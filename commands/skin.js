const discord = require("discord.js");
let snekfetch = require("snekfetch")

module.exports.run = async (bot, message, arguments) => {
    if (message.author.bot) return;

    var weapon = arguments[0]
    var skin = arguments[1]
    var durability = arguments[2]

    if (!skin) {
        return message.channel.send("Use: !skin <weapon> <skin> <state>");

        //Durability
    };
    if (durability === "fieldtested") {
        var durability = "Field-Tested"
    }
    if (durability === "minimalwear") {
        var durability = "Minimal%20Wear"
    };
    if (durability === "battlescarred") {
        var durability = "Battle-Scarred"
    };
    if (durability === "wellworn") {
        var durability = "Well-Worn"
    };
    if (durability === "factorynew") {
        var durability = "Factory%20New"
    };
    if (!durability) {
        var durability = "Factory%20New"
    };

    //Weapon

    if (weapon === "awp") {
        var weapon = "AWP"
    };
    if (weapon === "ak47") {
        var weapon = "AK-47"
    };
    if (weapon === "czauto") {
        var weapon = "CZ75-Auto"
    };
    if (weapon === "cz75") {
        var weapon = "CZ75-Auto"
    };
    if (weapon === "deserteagle") {
        var weapon = "Desert%20Eagle"
    };
    if (weapon === "deagle") {
        var weapon = "Desert%20Eagle"
    };
    if (weapon === "dualbarettas") {
        var weapon = "Dual%20Berettas"
    };
    if (weapon === "dualboritos") {
        var weapon = "Dual%20Berettas"
    };
    if (weapon === "famas") {
        var weapon = "FAMAS"
    };
    if (weapon === "usps") {
        var weapon = "USP-S"
    };
    if (weapon === "usp-s") {
        var weapon = "USP-S"
    };
    if (weapon === "usp") {
        var weapon = "USP-S"
    };
    //Skin
    if (skin === "atheris") {
        var skin = "Atheris"
    };
    if (skin === "wildfire") {
        var skin = "Wildfire"
    };
    if (skin === "neonoir") {
        var skin = "Neo-Noir"
    };
    if (skin === "onitaiji") {
        var skin = "Oni%20Taiji"
    };
    if (skin === "hyperbeast") {
        var skin = "Hyper%20Beast"
    };
    if (skin === "manowar") {
        var skin = "Man-o%27-war"
    };
    if (skin === "asiimov") {
        var skin = "Asiimov"
    };
    if (skin === "medusa") {
        var skin = "Medusa"
    };
    if (skin === "lightningstrike") {
        var skin = "Lightning%20Strike"
    };
    if (skin === "dragonlore") {
        var skin = "Dragon%20Lore"
    };
    if (skin === "mortis") {
        var skin = "Mortis"
    };
    if (skin === "feverdream") {
        var skin = "Fever%20Dream"
    };
    if (skin === "elitebuild") {
        var skin = "Elite%20Build"
    };
    if (skin === "corticera") {
        var skin = "Corticera"
    };
    if (skin === "redline") {
        var skin = "Redline"
    };
    if (skin === "boom") {
        var skin = "BOOM"
    };
    if (skin === "graphite") {
        var skin = "Graphite"
    };
    if (skin === "electrichive") {
        var skin = "Electric%20Hive"
    };
    if (skin === "paw") {
        var skin = "PAW"
    };
    if (skin === "phobos") {
        var skin = "Phobos"
    };
    if (skin === "wormgod") {
        var skin = "Worm%20God"
    };
    if (skin === "pinkddpat") {
        var skin = "Pink%20DDPAT"
    };
    if (skin === "pitviper") {
        var skin = "0Pit%20Viper"
    };
    if (skin === "safarimesh") {
        var skin = "Safari%20Mesh"
    };
    if (skin === "suninleo") {
        var skin = "Sun%20in%20Leo"
    };
    if (skin === "snakecamo") {
        var skin = "Snake%20Camo"
    };
    if (skin === "acheron") {
        var skin = "Acheron"
    };
    if (skin === "neonrider") {
        var skin = "Neon%20Rider"
    };

    if (skin === "theempress") {
        var skin = "The%20Empress"
    };

    if (skin === "bloodsport") {
        var skin = "Bloodsport"
    };

    if (skin === "neonrevolution") {
        var skin = "Neon%20Revolution"
    };

    if (skin === "fuelinjector") {
        var skin = "Fuel%20Injector"
    };

    if (skin === "aquamarinerevenge") {
        var skin = "Aquamarine%20Revenge"
    };

    if (skin === "wastelandrebel") {
        var skin = "Wasteland%20Rebel"
    };

    if (skin === "jaguar") {
        var skin = "Jaguar"
    };

    if (skin === "vulcan") {
        var skin = "Vulcan"
    };

    if (skin === "fireserpent") {
        var skin = "Fire%20Serpent"
    };

    if (skin === "pointdisarray") {
        var skin = "Point%20Disarray"
    };

    if (skin === "frontsidemisty") {
        var skin = "Frontside%20Misty"
    };

    if (skin === "cartel") {
        var skin = "Cartel"
    };

    if (skin === "redlaminate") {
        var skin = "Red%20Laminate"
    };

    if (skin === "casehardend") {
        var skin = "Case%20Hardened"
    };

    if (skin === "hydroponic") {
        var skin = "Hydroponic"
    };

    if (skin === "jetset") {
        var skin = "Jet%20Set"
    };

    if (skin === "orbitmk01") {
        var skin = "Orbit%20Mk01"
    };

    if (skin === "bluelaminate") {
        var skin = "Blue%20Laminate"
    };

    if (skin === "safetynet") {
        var skin = "Safety%20Net"
    };

    if (skin === "firstclass") {
        var skin = "First%20Class"
    };

    if (skin === "emeraldpinstripe") {
        var skin = "Emerald%20Pinstripe"
    };

    if (skin === "uncharted") {
        var skin = "Uncharted"
    };

    if (skin === "blacklaminate") {
        var skin = "Black%20Laminate"
    };

    if (skin === "junglespray") {
        var skin = "Jungle%20Spray"
    };

    if (skin === "predator") {
        var skin = "Predator"
    };
    if (skin === "victoria") {
        var skin = "Victoria"
    };
    if (skin === "xiangliu") {
        var skin = "Xiangliu"
    };
    if (skin === "yellowjacket") {
        var skin = "Yellow%20Jacket"
    };
    if (skin === "thefuschiaisnow") {
        var skin = "The%20Fuschia%20Is%20Now"
    };
    if (skin === "eco") {
        var skin = "Eco"
    };
    if (skin === "atheris") {
        var skin = "Atheris"
    };
    if (skin === "tacticat") {
        var skin = "Tacticat"
    };
    if (skin === "redastor") {
        var skin = "Red%20Astor"
    };
    if (skin === "poleposition") {
        var skin = "Pole%20Position"
    };
    if (skin === "tigris") {
        var skin = "Tigris"
    };
    if (skin === "treadplate") {
        var skin = "Tread%20Plate"
    };
    if (skin === "chalice") {
        var skin = "Chalice"
    };
    if (skin === "polymer") {
        var skin = "Polymer"
    };
    if (skin === "imprint") {
        var skin = "Imprint"
    };
    if (skin === "hexane") {
        var skin = "Hexane"
    };
    if (skin === "twist") {
        var skin = "Twist"
    };
    if (skin === "poisondart") {
        var skin = "Poison%20Dart"
    };
    if (skin === "crimsonweb") {
        var skin = "Crimson%20Web"
    };
    if (skin === "emerald") {
        var skin = "Emerald"
    };
    if (skin === "nitro") {
        var skin = "Nitro"
    };
    if (skin === "tuxedo") {
        var skin = "Tuxedo"
    };
    if (skin === "armysheen") {
        var skin = "Army%20Sheen"
    };
    if (skin === "greenplaid") {
        var skin = "Green%20Plaid"
    };
    if (skin === "codered") {
        var skin = "Code%20Red"
    };
    if (skin === "goldenkoi") {
        var skin = "Golden%20Koi"
    };
    if (skin === "mechaindustries") {
        var skin = "Mecha%20Industries"
    };
    if (skin === "conspiracy") {
        var skin = "Conspiracy"
    };
    if (skin === "kumichodragon") {
        var skin = "Kumicho%20Dragon"
    };
    if (skin === "disruption") {
        var skin = "Disruption"
    };
    if (skin === "hypnotic") {
        var skin = "Hypnotic"
    };
    if (skin === "naga") {
        var skin = "Naga"
    };
    if (skin === "directive") {
        var skin = "Directive"
    };
    if (skin === "heirloom") {
        var skin = "Heirloom"
    };
    if (skin === "sunsetstorm") {
        var skin = "Sunset%20Storm"
    };
    if (skin === "blaze") {
        var skin = "Blaze"
    };
    if (skin === "pilot") {
        var skin = "Pilot"
    };
    if (skin === "handcannon") {
        var skin = "Hand%20Cannon"
    };
    if (skin === "oxideblaze") {
        var skin = "Oxide%20Blaze"
    };
    if (skin === "safarimesh") {
        var skin = "Safari%20Mesh"
    };
    if (skin === "corinthian") {
        var skin = "Corinthian"
    };
    if (skin === "bronzedeco") {
        var skin = "Bronze%20Deco"
    };
    if (skin === "meteorite") {
        var skin = "Meteorite"
    };
    if (skin === "urbanrubble") {
        var skin = "Urban%20Rubble"
    };
    if (skin === "night") {
        var skin = "Night"
    };
    if (skin === "mudder") {
        var skin = "Mudder"
    };
    if (skin === "urbanddpat") {
        var skin = "Urban%20DDPAT"
    };
    if (skin === "midnightstorm") {
        var skin = "Midnight%20Storm"
    };
    if (skin === "cobrastrike") {
        var skin = "Cobra%20Strike"
    };
    if (skin === "twinturbo") {
        var skin = "Twin%20Turbo"
    };
    if (skin === "royalconsorts") {
        var skin = "Royal%20Consorts"
    };
    if (skin === "urbanshock") {
        var skin = "Urban%20Shock"
    };
    if (skin === "marina") {
        var skin = "marina"
    };
    if (skin === "cobaltquartz") {
        var skin = "Cobalt%20Quartz"
    };
    if (skin === "duelist") {
        var skin = "Duelist"
    };
    if (skin === "demolition") {
        var skin = "Demolition"
    };
    if (skin === "hemoglobin") {
        var skin = "Hemoglobin"
    };
    if (skin === "elite") {
        var skin = "Elite"
    };
    if (skin === "shred") {
        var skin = "Shred"
    };
    if (skin === "ventilators") {
        var skin = "Ventilators"
    };
    if (skin === "cartel") {
        var skin = "Cartel"
    };
    if (skin === "dualingdragons") {
        var skin = "Dualing%20Dragons"
    };
    if (skin === "panther") {
        var skin = "Panther"
    };
    if (skin === "retribution") {
        var skin = "Retribution"
    };
    if (skin === "anodized%20navy") {
        var skin = "Anodized%20Navy"
    };
    if (skin === "stained") {
        var skin = "Stained"
    };
    if (skin === "mooninlibra") {
        var skin = "Moon%20in%20Libra"
    };
    if (skin === "colony") {
        var skin = "Colony"
    };
    if (skin === "contractor") {
        var skin = "Contractor"
    };
    if (skin === "briar") {
        var skin = "Briar"
    };
    if (skin === "commemoration"){
        var skin = "Commemoration"
    };
if (skin === "rollcage"){
        var skin = "Roll%20Cage"
    };
	if (skin === "eyeofathena"){
        var skin = "Eye%20of%20Athena"
    };
	if (skin === "djinn"){
        var skin = "Djinn"
    };
	if (skin === "mechaindustries"){
        var skin = "Mecha%20Industries"
    };
	if (skin === "neuralnet"){
        var skin = "Neural%20Net"
    };
	if (skin === "valence"){
        var skin = "Valence"
    };
	if (skin === "afterimage"){
        var skin = "Afterimage"
    };
	if (skin === "styx"){
        var skin = "Styx"
    };
	if (skin === "Sergeant"){
        var skin = "Sergeant"
    };
	if (skin === "pulse"){
        var skin = "Pulse"
    };
	if (skin === "sergeant"){
        var skin = "Sergeant"
    };
	if (skin === "crypsis"){
        var skin = "Crypsis"
    };
	if (skin === "spitfire"){
        var skin = "Spitfire"
    };
	if (skin === "hexane"){
        var skin = "Hexane"
    };
	if (skin === "survivor"){
        var skin = "Survivor"
    };
	if (skin === "macabre"){
        var skin = "Macabre"
    };
	if (skin === "cyanospatter"){
        var skin = "Cyanospatter"
    };
	if (skin === "teardown"){
        var skin = "Teardown"
    };
	if (skin === "contrastspray"){
        var skin = "Contrast%20Spray"
    };
	if (skin === "colony"){
        var skin = "Colony"
    };
	if (skin === "killconfirmed"){
        var skin = "Kill%20Confirmed"
    };
if (skin === "cortex"){
        var skin = "Cortex"
    };
if (skin === "caiman"){
        var skin = "Caiman"
    };
if (skin === "orion"){
        var skin = "Orion"
    };
if (skin === "cyrex"){
        var skin = "Cyrex"
    };
if (skin === "flashback"){
        var skin = "Flashback"
    };
if (skin === "serum"){
        var skin = "Serum"
    };
if (skin === "guardian"){
        var skin = "Guardian"
    };
if (skin === "overgrowth"){
        var skin = "Overgrowth"
    };
if (skin === "darkwater"){
        var skin = "Dark%20Water"
    };
if (skin === "leadconduit"){
        var skin = "Lead%20Conduit"
    };
if (skin === "blueprint"){
        var skin = "Blueprint"
    };
if (skin === "roadrash"){
        var skin = "Road%20Rash"
    };
if (skin === "torque"){
        var skin = "Torque"
    };
if (skin === "bloodtiger"){
        var skin = "Blood%20Tiger"
    };
if (skin === "stainless"){
        var skin = "Stainless"
    };
if (skin === "checkengine"){
        var skin = "Check%20Engine"
    };
if (skin === "businessclass"){
        var skin = "Business%20Class"
    };
if (skin === "nightops"){
        var skin = "Night%20Ops"
    };
if (skin === "paragreen"){
        var skin = "Para%20Green"
    };
if (skin === "royalblue"){
        var skin = "Royal%20Blue"
    };
if (skin === "forestleaves"){
        var skin = "Forest%20Leaves"
    };



    let url = "https://steamcommunity.com/market/listings/730/" + weapon + "%20%7C%20" + skin + "%20%28" + durability + "%29"

    return message.channel.send("https://steamcommunity.com/market/listings/730/" + weapon + "%20%7C%20" + skin + "%20%28" + durability + "%29");

};

module.exports.help = {
    name: "skin"
};