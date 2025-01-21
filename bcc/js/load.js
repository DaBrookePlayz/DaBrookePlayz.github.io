document.addEventListener('DOMContentLoaded', function() {
	document.getElementById("msclass").checked = checked;
	document.getElementById("msclass0").checked = checked0;
	document.getElementById("msclass1").checked = checked1;
	var inputs = document.getElementById('selection'),
		input = document.getElementById('class'),
		input0 = document.getElementById('class0'),
		input09 = document.getElementById('class09'),
		input08 = document.getElementById('class08'),
		input07 = document.getElementById('class07'),
		input06 = document.getElementById('class06'),
		input05 = document.getElementById('class05'),
		input04 = document.getElementById('class04'),
		input03 = document.getElementById('class03'),
		input02 = document.getElementById('class02'),
		input01 = document.getElementById('class01'),
		input00 = document.getElementById('class00'),
		input1 = document.getElementById('class1'),
		input10 = document.getElementById('class10'),
		input11 = document.getElementById('class11'),
		input12 = document.getElementById('class12'),
		input13 = document.getElementById('class13'),
		input14 = document.getElementById('class14'),
		input15 = document.getElementById('class15'),
		input16 = document.getElementById('class16'),
		input2 = document.getElementById('class2'),
		input20 = document.getElementById('class20'),
		input21 = document.getElementById('class21'),
		input22 = document.getElementById('class22'),
		input23 = document.getElementById('class23'),
		input24 = document.getElementById('class24'),
		input25 = document.getElementById('class25'),
		input26 = document.getElementById('class26'),
		input27 = document.getElementById('class27'),
		input28 = document.getElementById('class28'),
		input29 = document.getElementById('class29'),
		input2a = document.getElementById('class2a'),
		input2b = document.getElementById('class2b'),
		input2c = document.getElementById('class2c'),
		input2d = document.getElementById('class2d'),
		input2e = document.getElementById('class2e'),
		input2f = document.getElementById('class2f'),
		input2g = document.getElementById('class2g'),
		input2h = document.getElementById('class2h'),
		input2i = document.getElementById('class2i'),
		input2j = document.getElementById('class2j'),
		input2k = document.getElementById('class2k'),
		input2l = document.getElementById('class2l'),
		input2m = document.getElementById('class2m'),
		input3 = document.getElementById('class3'),
		input30 = document.getElementById('class30'),
		input31 = document.getElementById('class31'),
		input32 = document.getElementById('class32'),
		input33 = document.getElementById('class33'),
		input34 = document.getElementById('class34'),
		input35 = document.getElementById('class35'),
		input36 = document.getElementById('class36'),
		input4 = document.getElementById('class4'),
		input40 = document.getElementById('class40'),
		input41 = document.getElementById('class41'),
		input42 = document.getElementById('class42'),
		input5 = document.getElementById('class5'),
		input50 = document.getElementById('class50'),
		input51 = document.getElementById('class51'),
		input52 = document.getElementById('class52'),
		input53 = document.getElementById('class53'),
		input54 = document.getElementById('class54'),
		input55 = document.getElementById('class55'),
		input56 = document.getElementById('class56'),
		input57 = document.getElementById('class57'),
		input58 = document.getElementById('class58'),
		input59 = document.getElementById('class59'),
		input5a = document.getElementById('class5a'),
		input5b = document.getElementById('class5b'),
		input5c = document.getElementById('class5c'),
		input5d = document.getElementById('class5d'),
		input5e = document.getElementById('class5e'),
		input6 = document.getElementById('class6'),
		input65 = document.getElementById('class65'),
		input60 = document.getElementById('class60'),
		input66 = document.getElementById('class66'),
		input61 = document.getElementById('class61'),
		input62 = document.getElementById('class62'),
		input63 = document.getElementById('class63'),
		input64 = document.getElementById('class64'),
		input7 = document.getElementById('class7'),
		input75 = document.getElementById('class75'),
		input70 = document.getElementById('class70'),
		input76 = document.getElementById('class76'),
		input71 = document.getElementById('class71'),
		input72 = document.getElementById('class72'),
		input73 = document.getElementById('class73'),
		input74 = document.getElementById('class74'),
		input8 = document.getElementById('class8'),
		input85 = document.getElementById('class85'),
		input80 = document.getElementById('class80'),
		input86 = document.getElementById('class86'),
		input81 = document.getElementById('class81'),
		input82 = document.getElementById('class82'),
		input83 = document.getElementById('class83'),
		input84 = document.getElementById('class84'),
		input9 = document.getElementById('class9'),
		input95 = document.getElementById('class95'),
		input90 = document.getElementById('class90'),
		input96 = document.getElementById('class96'),
		input91 = document.getElementById('class91'),
		input92 = document.getElementById('class92'),
		input93 = document.getElementById('class93'),
		input94 = document.getElementById('class94'),
		fill00 = document.getElementById('filler00'),
		fill01 = document.getElementById('filler01'),
		fill02 = document.getElementById('filler02'),
		fill03 = document.getElementById('filler03'),
		fill04 = document.getElementById('filler04'),
		fill10 = document.getElementById('filler10'),
		fill11 = document.getElementById('filler11'),
		fill12 = document.getElementById('filler12'),
		fill13 = document.getElementById('filler13'),
		fill14 = document.getElementById('filler14'),
		fill20 = document.getElementById('filler20'),
		fill21 = document.getElementById('filler21'),
		fill22 = document.getElementById('filler22'),
		fill23 = document.getElementById('filler23'),
		fill24 = document.getElementById('filler24'),
		fill30 = document.getElementById('filler30'),
		fill31 = document.getElementById('filler31'),
		fill32 = document.getElementById('filler32'),
		fill33 = document.getElementById('filler33'),
		fill34 = document.getElementById('filler34');
	if (localStorage['selection']) {
		inputs.value = localStorage['selection'];
	}
	if (localStorage['filler00']) {
		fill00.value = localStorage['filler00'];
	}
	if (localStorage['filler01']) {
		fill01.value = localStorage['filler01'];
	}
	if (localStorage['filler02']) {
		fill02.value = localStorage['filler02'];
	}
	if (localStorage['filler03']) {
		fill03.value = localStorage['filler03'];
	}
	if (localStorage['filler04']) {
		fill04.value = localStorage['filler04'];
	}
	if (localStorage['filler10']) {
		fill10.value = localStorage['filler10'];
	}
	if (localStorage['filler11']) {
		fill11.value = localStorage['filler11'];
	}
	if (localStorage['filler12']) {
		fill12.value = localStorage['filler12'];
	}
	if (localStorage['filler13']) {
		fill13.value = localStorage['filler13'];
	}
	if (localStorage['filler14']) {
		fill14.value = localStorage['filler14'];
	}
	if (localStorage['filler20']) {
		fill20.value = localStorage['filler20'];
	}
	if (localStorage['filler21']) {
		fill21.value = localStorage['filler21'];
	}
	if (localStorage['filler22']) {
		fill22.value = localStorage['filler22'];
	}
	if (localStorage['filler23']) {
		fill23.value = localStorage['filler23'];
	}
	if (localStorage['filler24']) {
		fill24.value = localStorage['filler24'];
	}
	if (localStorage['filler30']) {
		fill30.value = localStorage['filler30'];
	}
	if (localStorage['filler31']) {
		fill31.value = localStorage['filler31'];
	}
	if (localStorage['filler32']) {
		fill32.value = localStorage['filler32'];
	}
	if (localStorage['filler33']) {
		fill33.value = localStorage['filler33'];
	}
	if (localStorage['filler34']) {
		fill34.value = localStorage['filler34'];
	}
	if (localStorage['class']) {
		input.value = localStorage['class'];
	}
	if (localStorage['class0']) {
		input0.value = localStorage['class0'];
	}
	if (localStorage['class09']) {
		input09.value = localStorage['class09'];
	}
	if (localStorage['class08']) {
		input08.value = localStorage['class08'];
	}
	if (localStorage['class07']) {
		input07.value = localStorage['class07'];
	}
	if (localStorage['class06']) {
		input06.value = localStorage['class06'];
	}
	if (localStorage['class05']) {
		input05.value = localStorage['class05'];
	}
	if (localStorage['class04']) {
		input04.value = localStorage['class04'];
	}
	if (localStorage['class03']) {
		input03.value = localStorage['class03'];
	}
	if (localStorage['class02']) {
		input02.value = localStorage['class02'];
	}
	if (localStorage['class01']) {
		input01.value = localStorage['class01'];
	}
	if (localStorage['class00']) {
		input00.value = localStorage['class00'];
	}
	if (localStorage['class1']) {
		input1.value = localStorage['class1'];
	}
	if (localStorage['class10']) {
		input10.value = localStorage['class10'];
	}
	if (localStorage['class11']) {
		input11.value = localStorage['class11'];
	}
	if (localStorage['class12']) {
		input12.value = localStorage['class12'];
	}
	if (localStorage['class13']) {
		input13.value = localStorage['class13'];
	}
	if (localStorage['class14']) {
		input14.value = localStorage['class14'];
	}
	if (localStorage['class15']) {
		input15.value = localStorage['class15'];
	}
	if (localStorage['class16']) {
		input16.value = localStorage['class16'];
	}
	if (localStorage['class2']) {
		input2.value = localStorage['class2'];
	}
	if (localStorage['class20']) {
		input20.value = localStorage['class20'];
	}
	if (localStorage['class21']) {
		input21.value = localStorage['class21'];
	}
	if (localStorage['class22']) {
		input22.value = localStorage['class22'];
	}
	if (localStorage['class23']) {
		input23.value = localStorage['class23'];
	}
	if (localStorage['class24']) {
		input24.value = localStorage['class24'];
	}
	if (localStorage['class25']) {
		input25.value = localStorage['class25'];
	}
	if (localStorage['class26']) {
		input26.value = localStorage['class26'];
	}
	if (localStorage['class27']) {
		input27.value = localStorage['class27'];
	}
	if (localStorage['class28']) {
		input28.value = localStorage['class28'];
	}
	if (localStorage['class29']) {
		input29.value = localStorage['class29'];
	}
	if (localStorage['class2a']) {
		input2a.value = localStorage['class2a'];
	}
	if (localStorage['class2b']) {
		input2b.value = localStorage['class2b'];
	}
	if (localStorage['class2c']) {
		input2c.value = localStorage['class2c'];
	}
	if (localStorage['class2d']) {
		input2d.value = localStorage['class2d'];
	}
	if (localStorage['class2e']) {
		input2e.value = localStorage['class2e'];
	}
	if (localStorage['class2f']) {
		input2f.value = localStorage['class2f'];
	}
	if (localStorage['class2g']) {
		input2g.value = localStorage['class2g'];
	}
	if (localStorage['class2h']) {
		input2h.value = localStorage['class2h'];
	}
	if (localStorage['class2i']) {
		input2i.value = localStorage['class2i'];
	}
	if (localStorage['class2j']) {
		input2j.value = localStorage['class2j'];
	}
	if (localStorage['class2k']) {
		input2k.value = localStorage['class2k'];
	}
	if (localStorage['class2l']) {
		input2l.value = localStorage['class2l'];
	}
	if (localStorage['class2m']) {
		input2m.value = localStorage['class2m'];
	}
	if (localStorage['class3']) {
		input3.value = localStorage['class3'];
	}
	if (localStorage['class30']) {
		input30.value = localStorage['class30'];
	}
	if (localStorage['class31']) {
		input31.value = localStorage['class31'];
	}
	if (localStorage['class32']) {
		input32.value = localStorage['class32'];
	}
	if (localStorage['class33']) {
		input33.value = localStorage['class33'];
	}
	if (localStorage['class34']) {
		input34.value = localStorage['class34'];
	}
	if (localStorage['class35']) {
		input35.value = localStorage['class35'];
	}
	if (localStorage['class36']) {
		input36.value = localStorage['class36'];
	}
	if (localStorage['class4']) {
		input4.value = localStorage['class4'];
	}
	if (localStorage['class40']) {
		input40.value = localStorage['class40'];
	}
	if (localStorage['class41']) {
		input41.value = localStorage['class41'];
	}
	if (localStorage['class42']) {
		input42.value = localStorage['class42'];
	}
	if (localStorage['class5']) {
		input5.value = localStorage['class5'];
	}
	if (localStorage['class50']) {
		input50.value = localStorage['class50'];
	}
	if (localStorage['class51']) {
		input51.value = localStorage['class51'];
	}
	if (localStorage['class52']) {
		input52.value = localStorage['class52'];
	}
	if (localStorage['class53']) {
		input53.value = localStorage['class53'];
	}
	if (localStorage['class54']) {
		input54.value = localStorage['class54'];
	}
	if (localStorage['class55']) {
		input55.value = localStorage['class55'];
	}
	if (localStorage['class56']) {
		input56.value = localStorage['class56'];
	}
	if (localStorage['class57']) {
		input57.value = localStorage['class57'];
	}
	if (localStorage['class58']) {
		input58.value = localStorage['class58'];
	}
	if (localStorage['class59']) {
		input59.value = localStorage['class59'];
	}
	if (localStorage['class5a']) {
		input5a.value = localStorage['class5a'];
	}
	if (localStorage['class5b']) {
		input5b.value = localStorage['class5b'];
	}
	if (localStorage['class5c']) {
		input5c.value = localStorage['class5c'];
	}
	if (localStorage['class5d']) {
		input5d.value = localStorage['class5d'];
	}
	if (localStorage['class5e']) {
		input5e.value = localStorage['class5e'];
	}
	if (localStorage['class6']) {
		input6.value = localStorage['class6'];
	}
	if (localStorage['class65']) {
		input65.value = localStorage['class65'];
	}
	if (localStorage['class60']) {
		input60.value = localStorage['class60'];
	}
	if (localStorage['class66']) {
		input66.value = localStorage['class66'];
	}
	if (localStorage['class61']) {
		input61.value = localStorage['class61'];
	}
	if (localStorage['class62']) {
		input62.value = localStorage['class62'];
	}
	if (localStorage['class63']) {
		input63.value = localStorage['class63'];
	}
	if (localStorage['class64']) {
		input64.value = localStorage['class64'];
	}
	if (localStorage['class7']) {
		input7.value = localStorage['class7'];
	}
	if (localStorage['class75']) {
		input75.value = localStorage['class75'];
	}
	if (localStorage['class70']) {
		input70.value = localStorage['class70'];
	}
	if (localStorage['class76']) {
		input76.value = localStorage['class76'];
	}
	if (localStorage['class71']) {
		input71.value = localStorage['class71'];
	}
	if (localStorage['class72']) {
		input72.value = localStorage['class72'];
	}
	if (localStorage['class73']) {
		input73.value = localStorage['class73'];
	}
	if (localStorage['class74']) {
		input74.value = localStorage['class74'];
	}
	if (localStorage['class8']) {
		input8.value = localStorage['class8'];
	}
	if (localStorage['class85']) {
		input85.value = localStorage['class85'];
	}
	if (localStorage['class80']) {
		input80.value = localStorage['class80'];
	}
	if (localStorage['class86']) {
		input86.value = localStorage['class86'];
	}
	if (localStorage['class81']) {
		input81.value = localStorage['class81'];
	}
	if (localStorage['class82']) {
		input82.value = localStorage['class82'];
	}
	if (localStorage['class83']) {
		input83.value = localStorage['class83'];
	}
	if (localStorage['class84']) {
		input84.value = localStorage['class84'];
	}
	if (localStorage['class9']) {
		input9.value = localStorage['class9'];
	}
	if (localStorage['class95']) {
		input95.value = localStorage['class95'];
	}
	if (localStorage['class90']) {
		input90.value = localStorage['class90'];
	}
	if (localStorage['class96']) {
		input96.value = localStorage['class96'];
	}
	if (localStorage['class91']) {
		input91.value = localStorage['class91'];
	}
	if (localStorage['class92']) {
		input92.value = localStorage['class92'];
	}
	if (localStorage['class93']) {
		input93.value = localStorage['class93'];
	}
	if (localStorage['class94']) {
		input94.value = localStorage['class94'];
	}
	inputs.onchange = function() {
		localStorage['selection'] = this.value;
	};
	fill00.onchange = function() {
		localStorage['filler00'] = this.value;
	};
	fill01.onchange = function() {
		localStorage['filler01'] = this.value;
	};
	fill02.onchange = function() {
		localStorage['filler02'] = this.value;
	};
	fill03.onchange = function() {
		localStorage['filler03'] = this.value;
	};
	fill04.onchange = function() {
		localStorage['filler04'] = this.value;
	};
	fill10.onchange = function() {
		localStorage['filler10'] = this.value;
	};
	fill11.onchange = function() {
		localStorage['filler11'] = this.value;
	};
	fill12.onchange = function() {
		localStorage['filler12'] = this.value;
	};
	fill13.onchange = function() {
		localStorage['filler13'] = this.value;
	};
	fill14.onchange = function() {
		localStorage['filler14'] = this.value;
	};
	fill20.onchange = function() {
		localStorage['filler20'] = this.value;
	};
	fill21.onchange = function() {
		localStorage['filler21'] = this.value;
	};
	fill22.onchange = function() {
		localStorage['filler22'] = this.value;
	};
	fill23.onchange = function() {
		localStorage['filler23'] = this.value;
	};
	fill24.onchange = function() {
		localStorage['filler24'] = this.value;
	};
	fill30.onchange = function() {
		localStorage['filler30'] = this.value;
	};
	fill31.onchange = function() {
		localStorage['filler31'] = this.value;
	};
	fill32.onchange = function() {
		localStorage['filler32'] = this.value;
	};
	fill33.onchange = function() {
		localStorage['filler33'] = this.value;
	};
	fill34.onchange = function() {
		localStorage['filler34'] = this.value;
	};
	input.onchange = function() {
		localStorage['class'] = this.value;
	};
	input0.onchange = function() {
		localStorage['class0'] = this.value;
	};
	input09.onchange = function() {
		localStorage['class09'] = this.value;
	};
	input08.onchange = function() {
		localStorage['class08'] = this.value;
	};
	input07.onchange = function() {
		localStorage['class07'] = this.value;
	};
	input06.onchange = function() {
		localStorage['class06'] = this.value;
	};
	input05.onchange = function() {
		localStorage['class05'] = this.value;
	};
	input04.onchange = function() {
		localStorage['class04'] = this.value;
	};
	input03.onchange = function() {
		localStorage['class03'] = this.value;
	};
	input02.onchange = function() {
		localStorage['class02'] = this.value;
	};
	input01.onchange = function() {
		localStorage['class01'] = this.value;
	};
	input00.onchange = function() {
		localStorage['class00'] = this.value;
	};
	input1.onchange = function() {
		localStorage['class1'] = this.value;
	};
	input10.onchange = function() {
		localStorage['class10'] = this.value;
	};
	input11.onchange = function() {
		localStorage['class11'] = this.value;
	};
	input12.onchange = function() {
		localStorage['class12'] = this.value;
	};
	input13.onchange = function() {
		localStorage['class13'] = this.value;
	};
	input14.onchange = function() {
		localStorage['class14'] = this.value;
	};
	input15.onchange = function() {
		localStorage['class15'] = this.value;
	};
	input16.onchange = function() {
		localStorage['class16'] = this.value;
	};
	input2.onchange = function() {
		localStorage['class2'] = this.value;
	};
	input20.onchange = function() {
		localStorage['class20'] = this.value;
	};
	input21.onchange = function() {
		localStorage['class21'] = this.value;
	};
	input22.onchange = function() {
		localStorage['class22'] = this.value;
	};
	input23.onchange = function() {
		localStorage['class23'] = this.value;
	};
	input24.onchange = function() {
		localStorage['class24'] = this.value;
	};
	input25.onchange = function() {
		localStorage['class25'] = this.value;
	};
	input26.onchange = function() {
		localStorage['class26'] = this.value;
	};
	input27.onchange = function() {
		localStorage['class27'] = this.value;
	};
	input28.onchange = function() {
		localStorage['class28'] = this.value;
	};
	input29.onchange = function() {
		localStorage['class29'] = this.value;
	};
	input2a.onchange = function() {
		localStorage['class2a'] = this.value;
	};
	input2b.onchange = function() {
		localStorage['class2b'] = this.value;
	};
	input2c.onchange = function() {
		localStorage['class2c'] = this.value;
	};
	input2d.onchange = function() {
		localStorage['class2d'] = this.value;
	};
	input2e.onchange = function() {
		localStorage['class2e'] = this.value;
	};
	input2f.onchange = function() {
		localStorage['class2f'] = this.value;
	};
	input2g.onchange = function() {
		localStorage['class2g'] = this.value;
	};
	input2h.onchange = function() {
		localStorage['class2h'] = this.value;
	};
	input2i.onchange = function() {
		localStorage['class2i'] = this.value;
	};
	input2j.onchange = function() {
		localStorage['class2j'] = this.value;
	};
	input2k.onchange = function() {
		localStorage['class2k'] = this.value;
	};
	input2l.onchange = function() {
		localStorage['class2l'] = this.value;
	};
	input2m.onchange = function() {
		localStorage['class2m'] = this.value;
	};
	input3.onchange = function() {
		localStorage['class3'] = this.value;
	};
	input30.onchange = function() {
		localStorage['class30'] = this.value;
	};
	input31.onchange = function() {
		localStorage['class31'] = this.value;
	};
	input32.onchange = function() {
		localStorage['class32'] = this.value;
	};
	input33.onchange = function() {
		localStorage['class33'] = this.value;
	};
	input34.onchange = function() {
		localStorage['class34'] = this.value;
	};
	input35.onchange = function() {
		localStorage['class35'] = this.value;
	};
	input36.onchange = function() {
		localStorage['class36'] = this.value;
	};
	input4.onchange = function() {
		localStorage['class4'] = this.value;
	};
	input40.onchange = function() {
		localStorage['class40'] = this.value;
	};
	input41.onchange = function() {
		localStorage['class41'] = this.value;
	};
	input42.onchange = function() {
		localStorage['class42'] = this.value;
	};
	input5.onchange = function() {
		localStorage['class5'] = this.value;
	};
	input50.onchange = function() {
		localStorage['class50'] = this.value;
	};
	input51.onchange = function() {
		localStorage['class51'] = this.value;
	};
	input52.onchange = function() {
		localStorage['class52'] = this.value;
	};
	input53.onchange = function() {
		localStorage['class53'] = this.value;
	};
	input54.onchange = function() {
		localStorage['class54'] = this.value;
	};
	input55.onchange = function() {
		localStorage['class55'] = this.value;
	};
	input56.onchange = function() {
		localStorage['class56'] = this.value;
	};
	input57.onchange = function() {
		localStorage['class57'] = this.value;
	};
	input58.onchange = function() {
		localStorage['class58'] = this.value;
	};
	input59.onchange = function() {
		localStorage['class59'] = this.value;
	};
	input5a.onchange = function() {
		localStorage['class5a'] = this.value;
	};
	input5b.onchange = function() {
		localStorage['class5b'] = this.value;
	};
	input5c.onchange = function() {
		localStorage['class5c'] = this.value;
	};
	input5d.onchange = function() {
		localStorage['class5d'] = this.value;
	};
	input5e.onchange = function() {
		localStorage['class5e'] = this.value;
	};
	input6.onchange = function() {
		localStorage['class6'] = this.value;
	};
	input65.onchange = function() {
		localStorage['class65'] = this.value;
	};
	input60.onchange = function() {
		localStorage['class60'] = this.value;
	};
	input66.onchange = function() {
		localStorage['class66'] = this.value;
	};
	input61.onchange = function() {
		localStorage['class61'] = this.value;
	};
	input62.onchange = function() {
		localStorage['class62'] = this.value;
	};
	input63.onchange = function() {
		localStorage['class63'] = this.value;
	};
	input64.onchange = function() {
		localStorage['class64'] = this.value;
	};
	input7.onchange = function() {
		localStorage['class7'] = this.value;
	};
	input75.onchange = function() {
		localStorage['class75'] = this.value;
	};
	input70.onchange = function() {
		localStorage['class70'] = this.value;
	};
	input76.onchange = function() {
		localStorage['class76'] = this.value;
	};
	input71.onchange = function() {
		localStorage['class71'] = this.value;
	};
	input72.onchange = function() {
		localStorage['class72'] = this.value;
	};
	input73.onchange = function() {
		localStorage['class73'] = this.value;
	};
	input74.onchange = function() {
		localStorage['class74'] = this.value;
	};
	input8.onchange = function() {
		localStorage['class8'] = this.value;
	};
	input85.onchange = function() {
		localStorage['class85'] = this.value;
	};
	input80.onchange = function() {
		localStorage['class80'] = this.value;
	};
	input86.onchange = function() {
		localStorage['class86'] = this.value;
	};
	input81.onchange = function() {
		localStorage['class81'] = this.value;
	};
	input82.onchange = function() {
		localStorage['class82'] = this.value;
	};
	input83.onchange = function() {
		localStorage['class83'] = this.value;
	};
	input84.onchange = function() {
		localStorage['class84'] = this.value;
	};
	input9.onchange = function() {
		localStorage['class9'] = this.value;
	};
	input95.onchange = function() {
		localStorage['class95'] = this.value;
	};
	input90.onchange = function() {
		localStorage['class90'] = this.value;
	};
	input96.onchange = function() {
		localStorage['class96'] = this.value;
	};
	input91.onchange = function() {
		localStorage['class91'] = this.value;
	};
	input92.onchange = function() {
		localStorage['class92'] = this.value;
	};
	input93.onchange = function() {
		localStorage['class93'] = this.value;
	};
	input94.onchange = function() {
		localStorage['class94'] = this.value;
	};
	document.getElementById("rec").defaultChecked;
	calc();
});
