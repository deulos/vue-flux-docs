<template>
	<div class="demo">
		<demo
			:options="options"
			:transitions="transitions"
			:complements="complements"
			:numImages="12" />

		<h3>Options</h3>

		<label>
			<span>Columns:</span>
			<vue-slider v-model.number="cols" :min="4" :max="30" tooltip="always" />
		</label>

		<label>
			<span>Tile duration:</span>
			<vue-slider v-model.number="tileDuration" :min="constants.minTileDuration" :max="constants.maxTileDuration" tooltip="always" />
		</label>

		<label>
			<span>Tile delay:</span>
			<vue-slider v-model.number="tileDelay" :min="constants.minTileDelay" :max="constants.maxTileDelay" tooltip="always" />
		</label>

		<label>
			<span>Easing:</span>
			<input type="text" v-model="easing" />
		</label>

		<h3>Source</h3>
		<div class="language-js extra-class">
			<pre v-html="source" class="language-js" />
		</div>
	</div>
</template>

<script>
	const Prism = require('prismjs');
	import Demo from '../../Demo.vue';
	import VueSlider from 'vue-slider-component/dist-css/vue-slider-component.umd.min.js';
	import * as constants from '../../constants';

	export default {
		name: 'demos-transitions-wave',

		components: {
			Demo,
			VueSlider,
		},

		data: () => ({
			constants,
			cols: 8,
			tileDuration: 900,
			tileDelay: 110,
			easing: 'cubic-bezier(0.3, -0.3, 0.735, 0.285)',
			options: {
				autohideTime: 0,
				path: '../../img/slides/',
			},
			complements: {
				preloader: true,
				controls: true,
			},
		}),

		computed: {
			transitions() {
				return [{
					name: 'wave',
					options: {
						cols: this.cols,
						tileDuration: this.tileDuration,
						tileDelay: this.tileDelay,
						easing: this.easing,
					},
				}];
			},

			source() {
				let code = '';
				code += 'const transitions = [{\n';
				code += '   name: \'wave\',\n';
				code += '   options: {\n';
				code += '      cols: ' + this.cols +',\n';
				code += '      tileDuration: '+ this.tileDuration +',\n';
				code += '      tileDelay: '+ this.tileDelay +',\n';
				code += '      easing: \''+ this.easing +'\',\n';
				code += '   }\n';
				code += '}]';

				return Prism.highlight(code, Prism.languages.javascript, 'javascript');
			},
		},
	};
</script>
