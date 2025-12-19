import ProjectTemplate from './ProjectTemplate';
import './BlazyBot.css';
export default function BlazyBot() {


    const projectData = {
        title: "Blazy Bot",
        subtitle: "A Complete RPG Inside Discord",
        tags: ["Discord Bot", "Python", "RPG", "Game Development",],
        githubUrl: "https://github.com/rmac-silva/blazy-bot",
        // liveUrl: "https://your-demo-url.com", // Optional

        // Add custom styles for <p> elements


        sections: [
            {
                title: "Overview",
                content: (
                    <>
                        <p className="mb-3">
                            Blazy Bot is a discord bot I developed after needing a system for voting on who would win Eurovision that year between my friends. And somehow that shifted into a very hopeful conversation between myself and one of my friends (<i>who has a great mind for game design and an exceptional creativity</i>).
                            The idea was, "What if we had an idle game inside Discord, but make it an RPG where you can fight monsters and level up...".
                        </p>
                        <p className="mb-3">
                            And so there I went, fueled by this brand new idea I got started on learning how to use Discord's python library for making a bot, and after testing out a few things for a few days and learning the
                            overall structure around discord's API, I started working on the core systems of the bot.
                        </p>
                        <p className="mb-3">
                            The bot in its current state allows you to go on delves with your character. It features three different zones you can explore, each with their own set of monsters and special events that can ocur during your exploration.
                            As you defeat monsters and complete events you earn experience which you can use to level up your character, increasing your stats (STR, DEX, INT, CON) which influence
                            not only your health and damage, but also the type of equipment you can use.
                        </p>
                    </>
                ),
                images: ["/projects/blazy-bot/EarlyDev.png", "/projects/blazy-bot/EarlyInventory.png", "/projects/blazy-bot/EarlyStatsPanel.png"] // Optional
            },
            {
                title: "Combat",
                content: (
                    <>
                        <p>
                            This is where it all started. I developed a turn-based combat system where players would face off against monsters in a series of turns.
                            Each turn the player attacked and then the monster, simple as that!
                        </p>
                        <p>
                            To select which monsters would appear I created a system that handled selecting the next opponent (which would then later include bosses and events).
                            This system allows a developer or designer to define which monsters appear for a given zone, and with which probabilities (all through editing a .csv).
                            This way, adding new monsters or tweaking existing ones is as simple as updating a spreadsheet.
                        </p>
                    </>
                ),
                images: [
                    "/projects/blazy-bot/FinishedFightPanel.png",

                ]
            },
            {
                title: "Inventory",
                content: (
                    <>
                        <p>
                            Why do players delve and explore? To find loot of course. And players need a way to store all that loot, in this case an inventory.
                            The inventory started out pretty basic, listing the items the player had, and how much of each item they had.
                        </p>
                        <p>
                            But as players got more and more loot, the list became cumbersome and discord itself has a limit on how many entries you can
                            have in an embed. For this I implemented pages, allowing players to navigate through their inventory in chunks.
                            To quickly find what users were looking for, I also added filtering options, allowing players to filter their inventory by item type or slot (weapons, headgear, consumables, etc), rarity or which items are equipped.
                        </p>
                    </>
                ),
                images: [
                    "/projects/blazy-bot/FinishedInventory.png",
                    "/projects/blazy-bot/FinishedInventoryFilters.png",
                ]
            },
            {
                title: "Status Effects",
                content: (
                    <>
                        <p>
                            To add more depth to the game's combat, we thought of the classic RPG status effects, like burning, poison, freezing, etc.
                            These affects traditionally deal damage over time, apply debuffs or buffs, cheat death and much more.
                        </p>
                        <p>
                            I implemented a system, mostly class hierarchy, that allows us to design new status effects, determining what happens when the effect is
                            triggered and allow us to set parameters (value, duration, chance to trigger, how many times to trigger, etc...) through our good old friend the .csv file.
                        </p>
                        <p>
                            This led to quite a flexible but confusing system. The .csv files on items with lots of effects now look like a mess of parameters, which will soon be moved to the ol' faithful JSON for readability
                            and editablity through an online interface (likely a small web app).
                        </p>
                        <p>
                            <h1 className='text-3xl font-semibold  pb-2'>Example</h1>
                            Here we have The One Ring, a legendary item that has two effects: BRITTLE and INVISIBLE.
                            <p className='p-2 rounded-md bg-neutral-800'>
                                <code>
                                    <i>#name,chance,value,duration,applyToEnemy,num_triggers</i>
                                    <br></br>The One Ring;BRITTLE,0,0,0,0,0;INVISIBLE,100,30,-1,0,1
                                </code>

                            </p>
                            In this case, the BRITTLE effect has no parameters, it's just there to indicate the condition of the item (<i>another bad case of where this system got messy</i>).
                            Whenever a player wearing a brittle item dies, that item is deleted from their inventory. This meant I had to create a status effect to represent this condition on items (
                            <i>where with a JSON it could have been just another parameter</i>).

                            The INVISIBLE effect has a 100% chance to trigger (field 1), with a value of 30 (field 2, which in this case is the bonus to the player's dodge chance). This
                            effect lasts indefinitely (field 3 is -1), and is applied to the player (field 4 is 0), and can trigger once per turn (field 5 is 1).
                        </p>
                        <p>
                            With this system we implemented a variety of effects, from damage over time (BURN, POISON, BLEED), to buffs and debuffs (STUN, STAT_BUFFS, ENRAGED, CALM...) to unique effects like DEATHWARD (preventing death once) and Artifact (preventing a debuff), shamelessly stolen from <a className='font-semibold underline' href='https://store.steampowered.com/app/646570/Slay_the_Spire/' >StS</a>.
                        </p>
                    </>
                ),
                images: [

                ]
            },
            {
                title: "Monsters",
                content: (
                    <>
                        <p>
                            Our players needed something to fight against, and in this case our universe doesn't lack monsters to fight against.
                            I created a system that once again through a single .csv file, allows us to define new monsters and their stats.
                        </p>
                        <p>
                            Each monster has its own set of stats (HP, STR, DEX, INT, CON), as well as a list of status effects it can apply during combat.
                            This allows us to create a variety of monsters, from simple goblins that just attack, to more complex monsters that can apply debuffs or heal themselves.
                        </p>
                        <p>
                            <h1 className='font-semibold text-3xl pb-2'>Example</h1>
                            Back to our faithful .csv file, we can see how a monster is defined:
                            <p className='mt-2 mb-2 bg-neutral-800 p-2 rounded-md'>
                                <code>
                                    <i>Monsters.csv</i>
                                    <br></br>#NAME(Mandatory TEXT);DESC(TEXT);STAT_NAME(Mandatory TEXT);VALUE(Mandatory INTEGER);
                                    <br></br>Troll;NO DESC;HP;100;ATK;20~60
                                </code>
                            </p>
                            Here we have a Troll, with a description of "NO DESC" (<i>description writing is always postponed...</i>), with 100 HP and an attack that deals between 20 and 60 damage. Simple enough!
                            This Troll however has a special condition, it regenerates health every turn, like all proper trolls do. This is also however defined in a separate .csv file...
                            <p className='mt-2 mb-2 bg-neutral-800 p-2 rounded-md'>
                                <code>
                                    <i>MonsterEffects.csv</i>
                                    <br></br>#name,chance,value,duration,applyToEnemy,num_triggers;
                                    <br></br>Troll;HP_REGEN,100,10,-1,0,1
                                </code>
                            </p>
                            <p>
                                Hopefully by now you can understand my regret and naivety in trying to use a .csv for every single item definition in the game. While it does allow
                                me to quickly edit values and add new items (<i>without needing to create a JSON object or a web app that does it for me</i>), in the late stages of development it becomes a real hassle to manage, especially since even
                                I start forgetting what each field means and what order they are in.
                            </p>
                            <p>
                                Anyways, in this case our Troll has a 100% chance to trigger a health regeneration effect that has a value of 10. In our case, the healing regen works similar to the one seen in <a className='font-semibold underline' href='https://store.steampowered.com/app/646570/Slay_the_Spire/' >StS</a>, where the healing starts at 10 but goes down
                                at every tick. So the Troll will heal 10 HP on the first turn, 9 on the second, 8 on the third, and so on.
                            </p>
                        </p>
                        <p>
                            <h1 className='font-semibold text-3xl pb-2'>Monster Loot</h1>
                            <p>
                                Monsters drop loot. Everyone knows if you kill a goblin he will magically turn into dust and
                                leave a small brown sack behind with some gold and maybe a rusty sword.
                            </p>
                            <p>
                                Initially the loot was once again just line entries in a .csv file, defining the item, the drop chance and the amount dropped by the monster. The system
                                would load all these up into a table, and roll for what item was given to the player upon defeating a monster.
                                This worked fine initially, but when my friend started asking for "Oh what if we want the monster to drop materials,
                                that will mean the player will lose out on loot just to get a chunk of iron scrap. These should be separate loot tables".
                            </p>
                            <p>
                                And with only a small amount of developer depression I implemented the current system (<i>which is in fact, much better. But once again, I wish I had used JSON for everything </i>😭).
                                Currently, and not easily, we can define as many loot tables as we want for each monster:
                                <p className='mt-2 mb-2 bg-neutral-800 p-2 rounded-md'>
                                    <code>
                                        <i>MonsterLoot.csv</i>
                                        <br></br>Goblin;[
                                        <br></br>Gold;101;15
                                        <br></br>XP;101;13
                                        <br></br>Rusted Iron Helmet;4
                                        <br></br>Rusted Iron Greaves;4
                                        <br></br>]
                                        <br></br>[
                                        <br></br>Healing Potion;5
                                        <br></br>Goblin Tooth;30;1
                                        <br></br>Goblin Tooth;20;2
                                        <br></br>Goblin Tooth;5;3
                                        <br></br>]
                                    </code>
                                </p>
                                Currently our Goblin has two loot tables. The first one contains common drops like gold and XP which are guaranteed to drop (101% chance),
                                as well as a small chance to drop some rusted iron equipment. The second loot table contains some uncommon drops, like healing potions and goblin teeth (<i>the crafting materials</i>).
                            </p>
                            <p>
                                I would also like an opportunity to defend or contemplate my use of .csv files for all these definitions (<i>we do learn best from our mistakes!</i>), I have since grown and realized from this
                                experience that using .csv files for such complex data structures was really a bad idea. I don't know why I thought in the first place that it would be a good idea, maybe we were using
                                .csv files during my third year of university.
                            </p>
                        </p>

                    </>
                ),
                images: [

                ]
            },
            {
                title: "Monster Encounters (And Conditions)",
                content: (
                    <>
                        <p>
                            So. You have monsters, you have combat, you have loot. But how do we manage where every monster "lives"? Should a goblin appear deep in an underground dwarven fortress?
                            Probably not...
                        </p>
                        <p>Initially (<i>and as I mentioned previously in the combat section</i>) we simply defined which monsters appeared for which zones with a given probability.</p>
                        <p>But alas my friend came along and started dreaming up more features (<i>I do enjoy his creativity, pushing this project much farther than if I were to do it alone</i>)
                            imagining a world where we could control these encounters through <b>Conditions</b>!</p>
                        <p>
                            Returning back to the "The One Ring" item. We thought it would be cool if a special monster appeared when the player had this item equipped (much like in LOTR).
                            For this I created a flexible system of TAGS, allowing us to modify the probability of an encounter ocurring:
                            <p className='mt-2 mb-2 bg-neutral-800 p-2 rounded-md'>
                                <code>
                                    Ocurrence | 999 ; HAS Thornblade EQUIPPED # Means if the player has the Thornblade equipped, a multiplier of 999 will be applied
                                    <br></br>Ocurrence | 0 ; STAT INT BELOW 5 # If the player has less than 5 intelligence (inclusive) this ocurrence will never happen
                                </code>
                            </p>
                            It is pretty self explanatory (<i>finally...</i>) but still contains a lot of flexibility. 
                            <p className='mt-2 mb-2 bg-neutral-800 p-2 rounded-md'>
                                <code>
                                    
                                    Possible Conditions:
                                    <br></br>Weight ; (NOT) HAS (ITEM) (EQUIPPED)
                                    <br></br>Weight ; (NOT) TAGGED (TAG) 
                                    <br></br>Weight ; (NOT) IS (EFFECT)
                                    <br></br>Weight ; (NOT) STAT (Statistic) (ABOVE / BELOW) (AMOUNT)
                                    <br></br>Weight ; KILLED (MONSTER) (TODO)

                                    <br></br>Naming Convention:
                                    <br></br>STAT - One of these: STR DEX INT CON
                                    <br></br>EFFECT - Names specified in Effects.csv
                                    <br></br>ITEM - Item name as is specified in the Items.csv
                                    <br></br>TAG - Tag name as is specified in the Tags.csv
                                </code>
                            </p>
                        </p>

                    </>
                ),
                images: [

                ]
            },
            {
                title: "Weapon Upgrading",
                content: (
                    <>
                        <p className='mb-2'>
                            To add more depth to the items added to the game, we designed a system where players could upgrade their weapons for gold, depending on the rarity of the item.
                            This went through many iterations, where players could upgrade legendary items up to 9 times, with each upgrade increasing in cost and benefits.
                        </p>
                        <p className='mb-2'>
                            We had one issue, how much should we charge for an upgrade for each item? Initially the idea of individually setting prices for each item and for each upgrade tier
                            was considered, but this would quickly become unmanageable and somewhat difficulty to balance. We ended up creating a formula that would:
                            <p>

                                <li className='ml-6 mb-1 mt-1'>Look at the area where this item is looted (which monster drops this item, and what areas do they spawn in).</li>
                                <li className='ml-6 mb-1'>Then we calculated the average gold value we acquired from each delve to that zone (based on the gold dropped by each monster multiplied by their chance of appearing).
                                    This prevents a monster that appears 1% on every delve but drops 999 gold from skewing the average gold per delve too high.</li>
                                <li className='ml-6 mb-1'>Finally we use these average gold values / zone to set the upgrade costs for items looted inside these zones. Allowing us to still scale the prices
                                    through multipliers based on rarity and upgrade tier, but simplifying the initial upgrade cost.</li>
                                <li className='ml-6 mb-1'>It's to note that the entire calculations for the average gold cost were achieved through a single query, saving a lot of time in creating a new python function or module to handle
                                    those calculations. The query itself can be seen below for those interested:
                                    <p className='mt-2 mb-2 bg-neutral-800 p-2 rounded-md'>
                                        <code className=''>
                                            SELECT ZoneOcurrences.zone_id, SUM(amount * (ZoneOcurrences.chance / 100) ) * Zones.nr_stages
                                            <br></br>FROM ZoneOcurrences INNER JOIN MonsterLoot ON ocurrence_id = monster_id INNER JOIN Zones ON ZoneOcurrences.zone_id = Zones.zone_id
                                            <br></br>WHERE item_id = 0 AND amount != 0 AND type != "B"
                                            <br></br>GROUP BY ZoneOcurrences.zone_id;
                                        </code>
                                    </p>
                                </li>
                            </p>
                        </p>
                        <p className='mb-2'>
                            Additionally I thought it was essential for players to see what their weapon was upgrading into, showing a preview of all the status effects the weapon would have at the next level.
                            This includes <b>Status</b> <b>Effects</b> (like burning, poison, etc). To allow for higher customization for item creation, the system
                            allows for the specification of each tier of each item. That means that I can turn a sword into a sword +1 that now lights enemies on fire!
                        </p>
                        <h1 className='text-3xl font-semibold pb-2'>Example</h1>
                        <p className='mb-2 mt-2'>
                            An example of a weapon upgrade definition can be seen below (and bear with me here, this is a bit complex):
                            <p className='mt-2 mb-2 bg-neutral-800 p-2 rounded-md'>
                                <code>
                                    <i>#name,chance,value,duration,applyToEnemy,num_triggers</i>
                                    <br></br>Lava Whip;BURN,35,20,3,1,-1;CURSE,100,2,-1,1,-1;
                                    <br></br>Lava Whip +5;BURN,35,45,3,1,-1;CURSE,100,7,-1,1,-1
                                </code>
                            </p>
                            This defines a weapon that has two main effects, BURN and CURSE. The fields following are: <b>Chance</b> (to apply the effect), <b>Value</b> (the intensity of the effect), <b>Duration</b> (in turns), <b>ApplyToEnemy</b> (1 for yes, 0 for no) and <b>NumTriggers</b> (how many times the effect can trigger, -1 for infinite).
                            <p>
                                Meaning the Lava Whip has a 35% chance to apply a burning effect that deals 20 damage over 3 turns to an enemy, and a 100% chance to apply a curse that damages the enemy by 2 for 2 turns (this lasts indefinitely).
                            </p>
                            <p>
                                In the +5 upgrade, the Lava Whip has a 35% chance to apply a burning effect <b>that now deals 45 damage</b> over 3 turns to an enemy, and a 100% chance to apply a curse that damages the enemy <b>by 7 for 2 turns</b>.
                            </p>
                        </p>

                    </>
                ),
                images: [
                    "/projects/blazy-bot/SmithyPanel.png",
                ]
            },

        ],

        technologies: [
            "Python",
            "Discord.py (Lib)",
            "Sqlite3",
        ],

        // Optional: additional custom links
        links: [

        ]
    };

    return <ProjectTemplate projectData={projectData} />;
}