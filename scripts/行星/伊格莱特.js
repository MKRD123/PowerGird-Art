const PGAlib = require("base/PGAlib");
const IGLET = new Planet("伊格莱特", Planets.sun, 1, 3);
IGLET.meshLoader = prov(() => new MultiMesh(
new HexMesh(IGLET, 9)));
IGLET.generator = extend(SerpuloPlanetGenerator, {
    getDefaultLoadout() {
        return Schematics.readBase64("bXNjaAF4nA3JMQ6AIBAAwQXFRr9i4XuMBR5XkCAYkP9LphwcbmLO/lHMwRq0SY3vF0sGluRvTQ17XoZNStU9d0na20gDduAHAc0Org==")
    }
});
IGLET.cloudMeshLoader = prov(() => new MultiMesh(
new HexSkyMesh(IGLET, 1, 0.62, 0.18, 6, Color.valueOf("b9c7f078"), 1, 0.42, 1, 0.43),
new HexSkyMesh(IGLET, 2, 0.28, 0.16, 6, Color.valueOf("8ba0d2a0"), 2, 0.42, 1.2, 0.45)));
IGLET.generator = new SerpuloPlanetGenerator();
IGLET.visible = IGLET.accessible = IGLET.alwaysUnlocked = true;
IGLET.clearSectorOnLose = true;
IGLET.tidalLock = false;
IGLET.localizedName = "伊格莱特";
IGLET.prebuildBase = false;
IGLET.bloom = false;
IGLET.startSector = 1;
IGLET.orbitRadius = 92;
IGLET.orbitTime = 150 * 60;
IGLET.rotateTime = 60 * 60;
IGLET.atmosphereRadIn = 0.02;
IGLET.atmosphereRadOut = 0.3;
IGLET.atmosphereColor = IGLET.lightColor = Color.valueOf("b9c7f078");
IGLET.iconColor = Color.valueOf("b9c7f0"),
IGLET.hiddenItems.addAll(Items.erekirItems)
    .removeAll(Items.serpuloItems);

const ShanGu = new SectorPreset("ShanGu", IGLET, 1);
ShanGu.description = "地处落星山脉上的一处山谷，铜铅资源丰富，且不会有大型单位来到此处。虽然可利用的矿物资源只有铜与铅，但对于不熟悉星球环境的我们来说是绝佳的降落地点。";
ShanGu.difficulty = 4;
ShanGu.alwaysUnlocked = false;
ShanGu.addStartingItems = true;
ShanGu.captureWave = 21;
ShanGu.localizedName = "落星山谷";
exports.ShanGu = ShanGu;
PGAlib.addToResearch(ShanGu, {
    parent: "groundZero",
    objectives: Seq.with(
    new Objectives.SectorComplete(SectorPresets.groundZero))
});

const XiaGu = new SectorPreset("XiaGu", IGLET, 2);
XiaGu.description = "离开落星山谷的两条道路之一，地形错综复杂，相比大路“漫漫长路”更近一些。\n我们原计划从大路离开，但雷达探测到大量T4单位信号源，为避免与其进行大规模交战，产生不必要的麻烦，我们选择这条“捷径峡谷”离开。\n途经此处时，雷达探测到大量多足类机甲靠近，我们才意识到敌人识破了我们的计划，已布置了大量敌人埋伏于此。\n“奇怪，是谁在这里的信息板上写着‘捷径峡谷’的？”我们队伍中那位好奇的队员说道。";
XiaGu.difficulty = 6;
XiaGu.alwaysUnlocked = false;
XiaGu.addStartingItems = true;
XiaGu.captureWave = 25;
XiaGu.localizedName = "绝径峡谷";
exports.XiaGu = XiaGu;
PGAlib.addToResearch(XiaGu, {
    parent: "ShanGu",
    objectives: Seq.with(
    new Objectives.SectorComplete(ShanGu))
});