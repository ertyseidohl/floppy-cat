
export class CatSpriteManager {
	private CAT_SPRITES = {
		"brown": {
			"cat_head": "brown-head.png",
			"cat_belly": "brown-belly.png",
			"cat_chest": "brown-chest.png",
			"cat_butt": "brown-butt.png",
			"cat_tail_0": "brown-tail-medium.png",
			"cat_tail_1": "brown-tail-medium.png",
			"cat_tail_2": "brown-tail-large.png",
			"cat_tail_3": "brown-tail-large.png",
			"cat_tail_4": "brown-tail-medium.png",
			"cat_tail_5": "brown-tail-medium.png",
			"cat_tail_6": "brown-tail-small.png",
			"cat_tail_7": "brown-tail-end.png",
			"cat_left_back_foot": "brown-left-back-foot.png",
			"cat_left_back_shin": "brown-left-back-shin.png",
			"cat_left_back_thigh": "brown-left-back-thigh.png",
			"cat_left_back_toe": "brown-left-back-toe.png",
			"cat_right_back_foot": "brown-right-back-foot.png",
			"cat_right_back_shin": "brown-right-back-shin.png",
			"cat_right_back_thigh": "brown-right-back-thigh.png",
			"cat_right_back_toe": "brown-right-back-toe.png",
			"cat_left_front_shin": "brown-left-front-shin.png",
			"cat_left_front_thigh": "brown-left-front-thigh.png",
			"cat_left_front_toe": "brown-left-front-toe.png",
			"cat_right_front_shin": "brown-right-front-shin.png",
			"cat_right_front_thigh": "brown-right-front-thigh.png",
			"cat_right_front_toe": "brown-right-front-toe.png"
		},
		"orange" : {
			"cat_head": "orange-head.png",
			"cat_belly": "orange-belly.png",
			"cat_chest": "orange-chest.png",
			"cat_butt": "orange-butt.png",
			"cat_tail_0": "orange-tail-medium-dark.png",
			"cat_tail_1": "orange-tail-medium-light.png",
			"cat_tail_2": "orange-tail-large-dark.png",
			"cat_tail_3": "orange-tail-large-light.png",
			"cat_tail_4": "orange-tail-medium-dark.png",
			"cat_tail_5": "orange-tail-medium-light.png",
			"cat_tail_6": "orange-tail-medium-dark.png",
			"cat_tail_7": "orange-tail-end.png",
			"cat_left_back_foot": "orange-left-back-foot.png",
			"cat_left_back_shin": "orange-left-back-shin.png",
			"cat_left_back_thigh": "orange-left-back-thigh.png",
			"cat_left_back_toe": "orange-back-toe.png",
			"cat_right_back_foot": "orange-right-back-foot.png",
			"cat_right_back_shin": "orange-right-back-shin.png",
			"cat_right_back_thigh": "orange-right-back-thigh.png",
			"cat_right_back_toe": "orange-back-toe.png",
			"cat_left_front_shin": "orange-left-front-shin.png",
			"cat_left_front_thigh": "orange-left-front-thigh.png",
			"cat_left_front_toe": "orange-front-toe.png",
			"cat_right_front_shin": "orange-right-front-shin.png",
			"cat_right_front_thigh": "orange-right-front-thigh.png",
			"cat_right_front_toe": "orange-front-toe.png"
		},
		"fat": {
			"cat_head": "fat-head.png",
			"cat_belly": "fat-belly.png",
			"cat_chest": "fat-chest.png",
			"cat_butt": "fat-butt.png",
			"cat_tail_0": "fat-tail-medium.png",
			"cat_tail_1": "fat-tail-medium.png",
			"cat_tail_2": "fat-tail-large.png",
			"cat_tail_3": "fat-tail-large.png",
			"cat_tail_4": "fat-tail-medium.png",
			"cat_tail_5": "fat-tail-medium.png",
			"cat_tail_6": "fat-tail-medium.png",
			"cat_tail_7": "fat-tail-end.png",
			"cat_left_back_foot": "fat-left-back-foot.png",
			"cat_left_back_shin": "fat-left-back-shin.png",
			"cat_left_back_thigh": "fat-left-back-thigh.png",
			"cat_left_back_toe": "fat-left-toe.png",
			"cat_right_back_foot": "fat-right-back-foot.png",
			"cat_right_back_shin": "fat-right-back-shin.png",
			"cat_right_back_thigh": "fat-right-back-thigh.png",
			"cat_right_back_toe": "fat-right-toe.png",
			"cat_left_front_shin": "fat-left-front-shin.png",
			"cat_left_front_thigh": "fat-left-front-thigh.png",
			"cat_left_front_toe": "fat-left-toe.png",
			"cat_right_front_shin": "fat-right-front-shin.png",
			"cat_right_front_thigh": "fat-right-front-thigh.png",
			"cat_right_front_toe": "fat-right-toe.png"
		},
		"calico": {
			"cat_head": "calico-head.png",
			"cat_belly": "calico-belly.png",
			"cat_chest": "calico-chest.png",
			"cat_butt": "calico-butt.png",
			"cat_tail_0": "calico-tail-medium-light.png",
			"cat_tail_1": "calico-tail-medium-light.png",
			"cat_tail_2": "calico-tail-large.png",
			"cat_tail_3": "calico-tail-large.png",
			"cat_tail_4": "calico-tail-medium-dark.png",
			"cat_tail_5": "calico-tail-medium-dark.png",
			"cat_tail_6": "calico-tail-small.png",
			"cat_tail_7": "calico-tail-end.png",
			"cat_left_back_foot": "calico-left-back-foot.png",
			"cat_left_back_shin": "calico-left-back-shin.png",
			"cat_left_back_thigh": "calico-left-back-thigh.png",
			"cat_left_back_toe": "calico-left-paw.png",
			"cat_right_back_foot": "calico-right-back-foot.png",
			"cat_right_back_shin": "calico-right-back-shin.png",
			"cat_right_back_thigh": "calico-right-back-thigh.png",
			"cat_right_back_toe": "calico-right-paw.png",
			"cat_left_front_shin": "calico-left-front-shin.png",
			"cat_left_front_thigh": "calico-left-front-thigh.png",
			"cat_left_front_toe": "calico-left-paw.png",
			"cat_right_front_shin": "calico-right-front-shin.png",
			"cat_right_front_thigh": "calico-right-front-thigh.png",
			"cat_right_front_toe": "calico-right-paw.png"
		},
		"black": {
			"cat_head": "black-head.png",
			"cat_belly": "black-belly.png",
			"cat_chest": "black-chest.png",
			"cat_butt": "black-butt.png",
			"cat_tail_0": "black-tail-medium.png",
			"cat_tail_1": "black-tail-medium.png",
			"cat_tail_2": "black-tail-large.png",
			"cat_tail_3": "black-tail-large.png",
			"cat_tail_4": "black-tail-medium.png",
			"cat_tail_5": "black-tail-medium.png",
			"cat_tail_6": "black-tail-small.png",
			"cat_tail_7": "black-tail-end.png",
			"cat_left_back_foot": "black-left-back-foot.png",
			"cat_left_back_shin": "black-left-back-shin.png",
			"cat_left_back_thigh": "black-left-back-thigh.png",
			"cat_left_back_toe": "black-left-paw.png",
			"cat_right_back_foot": "black-right-back-foot.png",
			"cat_right_back_shin": "black-right-back-shin.png",
			"cat_right_back_thigh": "black-right-back-thigh.png",
			"cat_right_back_toe": "black-right-paw.png",
			"cat_left_front_shin": "black-left-front-shin.png",
			"cat_left_front_thigh": "black-left-front-thigh.png",
			"cat_left_front_toe": "black-left-paw.png",
			"cat_right_front_shin": "black-right-front-shin.png",
			"cat_right_front_thigh": "black-right-front-thigh.png",
			"cat_right_front_toe": "black-right-paw.png"
		},
		"hairless": {
			"cat_head": "hairless-head.png",
			"cat_belly": "hairless-belly.png",
			"cat_chest": "hairless-chest.png",
			"cat_butt": "hairless-butt.png",
			"cat_tail_0": "hairless-tail-0.png",
			"cat_tail_1": "hairless-tail-1.png",
			"cat_tail_2": "hairless-tail-2.png",
			"cat_tail_3": "hairless-tail-3.png",
			"cat_tail_4": "hairless-tail-4.png",
			"cat_tail_5": "hairless-tail-5.png",
			"cat_tail_6": "hairless-tail-6.png",
			"cat_tail_7": "hairless-tail-7.png",
			"cat_left_back_foot": "hairless-left-back-foot.png",
			"cat_left_back_shin": "hairless-left-back-shin.png",
			"cat_left_back_thigh": "hairless-left-back-thigh.png",
			"cat_left_back_toe": "hairless-left-paw.png",
			"cat_right_back_foot": "hairless-right-back-foot.png",
			"cat_right_back_shin": "hairless-right-back-shin.png",
			"cat_right_back_thigh": "hairless-right-back-thigh.png",
			"cat_right_back_toe": "hairless-right-paw.png",
			"cat_left_front_shin": "hairless-left-front-shin.png",
			"cat_left_front_thigh": "hairless-left-front-thigh.png",
			"cat_left_front_toe": "hairless-left-paw.png",
			"cat_right_front_shin": "hairless-right-front-shin.png",
			"cat_right_front_thigh": "hairless-right-front-thigh.png",
			"cat_right_front_toe": "hairless-right-paw.png"
		}
	};

	private game: Phaser.Game;

	public constructor(game: Phaser.Game) {
		this.game = game;
	}

	public loadSpritesForCat(catname:string): void {
		let cat = this.CAT_SPRITES[catname];
		for (let key in cat) {
			if (cat.hasOwnProperty(key)) {
				this.game.load.image(catname + "/" + key, "cat-parts/" + cat[key]);
			}
		}
	}
}
