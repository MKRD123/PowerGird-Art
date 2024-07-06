const CoreFrontline = extend(CoreBlock, "前锋核心", {
	canBreak(tile) {
		return Vars.state.teams.cores(tile.team()).size > 1;
	},
	canReplace(other) {
		return other.alwaysReplace;
	},
	canPlaceOn(tile, team, rotation) {
		return Vars.state.teams.cores(team).size < 5;
	}
});

CoreFrontline.buildType = prov(() => {
	let kill = false, num = 1, time = 60 * num;
	return extend(CoreBlock.CoreBuild, CoreFrontline, {
		updateTile() {
			this.super$updateTile();
			if (Vars.state.teams.cores(this.team).size > 5) kill = true;
			if (kill) {
				this.kill();
			}
		}
	})
});