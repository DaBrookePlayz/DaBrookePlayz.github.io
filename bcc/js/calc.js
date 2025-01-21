function calc() {
	var hs0 = document.getElementById("class0").value,
		hs = document.getElementById("class").value,
		hs09 = document.getElementById("class09").value,
		hs08 = document.getElementById("class08").value,
		hs07 = document.getElementById("class07").value,
		hs06 = document.getElementById("class06").value,
		hs05 = document.getElementById("class05").value,
		hs04 = document.getElementById("class04").value,
		hs03 = document.getElementById("class03").value,
		hs02 = document.getElementById("class02").value,
		hs01 = document.getElementById("class01").value,
		hs00 = document.getElementById("class00").value,
		hs9 = document.getElementById("class9").value,
		hs90 = document.getElementById("class90").value,
		hs91 = document.getElementById("class91").value,
		hs92 = document.getElementById("class92").value,
		hs93 = document.getElementById("class93").value,
		hs94 = document.getElementById("class94").value,
		hs95 = document.getElementById("class95").value,
		hs96 = document.getElementById("class96").value,
		hs8 = document.getElementById("class8").value,
		hs80 = document.getElementById("class80").value,
		hs81 = document.getElementById("class81").value,
		hs82 = document.getElementById("class82").value,
		hs83 = document.getElementById("class83").value,
		hs84 = document.getElementById("class84").value,
		hs85 = document.getElementById("class85").value,
		hs86 = document.getElementById("class86").value,
		hs7 = document.getElementById("class7").value,
		hs70 = document.getElementById("class70").value,
		hs71 = document.getElementById("class71").value,
		hs72 = document.getElementById("class72").value,
		hs73 = document.getElementById("class73").value,
		hs74 = document.getElementById("class74").value,
		hs75 = document.getElementById("class75").value,
		hs76 = document.getElementById("class76").value,
		hs6 = document.getElementById("class6").value,
		hs60 = document.getElementById("class60").value,
		hs61 = document.getElementById("class61").value,
		hs62 = document.getElementById("class62").value,
		hs63 = document.getElementById("class63").value,
		hs64 = document.getElementById("class64").value,
		hs65 = document.getElementById("class65").value,
		hs66 = document.getElementById("class66").value,
		hs4 = document.getElementById("class4").value,
		hs40 = document.getElementById("class40").value,
		hs41 = document.getElementById("class41").value,
		hs42 = document.getElementById("class42").value,
		hs3 = document.getElementById("class3").value,
		hs30 = document.getElementById("class30").value,
		hs31 = document.getElementById("class31").value,
		hs32 = document.getElementById("class32").value,
		hs33 = document.getElementById("class33").value,
		hs34 = document.getElementById("class34").value,
		hs35 = document.getElementById("class35").value,
		hs36 = document.getElementById("class36").value,
		hs1 = document.getElementById("class1").value,
		hs10 = document.getElementById("class10").value,
		hs11 = document.getElementById("class11").value,
		hs12 = document.getElementById("class12").value,
		hs13 = document.getElementById("class13").value,
		hs14 = document.getElementById("class14").value,
		hs15 = document.getElementById("class15").value,
		hs16 = document.getElementById("class16").value,
		hs5 = document.getElementById("class5").value,
		hs50 = document.getElementById("class50").value,
		hs51 = document.getElementById("class51").value,
		hs52 = document.getElementById("class52").value,
		hs53 = document.getElementById("class53").value,
		hs54 = document.getElementById("class54").value,
		hs55 = document.getElementById("class55").value,
		hs56 = document.getElementById("class56").value,
		hs57 = document.getElementById("class57").value,
		hs58 = document.getElementById("class58").value,
		hs59 = document.getElementById("class59").value,
		hs5a = document.getElementById("class5a").value,
		hs5b = document.getElementById("class5b").value,
		hs5c = document.getElementById("class5c").value,
		hs5d = document.getElementById("class5d").value,
		hs5e = document.getElementById("class5e").value,
		hs2 = document.getElementById("class2").value,
		hs20 = document.getElementById("class20").value,
		hs21 = document.getElementById("class21").value,
		hs22 = document.getElementById("class22").value,
		hs23 = document.getElementById("class23").value,
		hs24 = document.getElementById("class24").value,
		hs25 = document.getElementById("class25").value,
		hs26 = document.getElementById("class26").value,
		hs27 = document.getElementById("class27").value,
		hs28 = document.getElementById("class28").value,
		hs29 = document.getElementById("class29").value,
		hs2a = document.getElementById("class2a").value,
		hs2b = document.getElementById("class2b").value,
		hs2c = document.getElementById("class2c").value,
		hs2d = document.getElementById("class2d").value,
		hs2e = document.getElementById("class2e").value,
		hs2f = document.getElementById("class2f").value,
		hs2g = document.getElementById("class2g").value,
		hs2h = document.getElementById("class2h").value,
		hs2i = document.getElementById("class2i").value,
		hs2j = document.getElementById("class2j").value,
		hs2k = document.getElementById("class2k").value,
		hs2l = document.getElementById("class2l").value,
		hs2m = document.getElementById("class2m").value,
		f00 = document.getElementById("filler00").value,
		f01 = document.getElementById("filler01").value,
		f02 = document.getElementById("filler02").value,
		f03 = document.getElementById("filler03").value,
		f04 = document.getElementById("filler04").value,
		f10 = document.getElementById("filler10").value,
		f11 = document.getElementById("filler11").value,
		f12 = document.getElementById("filler12").value,
		f13 = document.getElementById("filler13").value,
		f14 = document.getElementById("filler14").value,
		f20 = document.getElementById("filler20").value,
		f21 = document.getElementById("filler21").value,
		f22 = document.getElementById("filler22").value,
		f23 = document.getElementById("filler23").value,
		f24 = document.getElementById("filler24").value,
		f30 = document.getElementById("filler30").value,
		f31 = document.getElementById("filler31").value,
		f32 = document.getElementById("filler32").value,
		f33 = document.getElementById("filler33").value,
		f34 = document.getElementById("filler34").value,
		dctotal12 = 0,
		hstotal12 = 0,
		unit12 = 0,
		dctotal11 = 0,
		hstotal11 = 0,
		unit11 = 0,
		dctotal10 = 0,
		hstotal10 = 0,
		unit10 = 0,
		dctotal9 = 0,
		hstotal9 = 0,
		unit9 = 0, //totals for grades
		req9 = "",
		req10 = "",
		req11 = "",
		req12 = "",
		reqtotal = "",
		req1ela = "",
		req2ela = "",
		req3ela = "",
		perf = "",
		reqmath1 = "",
		reqmath2 = "",
		reqmath3 = "",
		sci1req = "",
		sci3req = "",
		sci2req = "",
		ss1req = "",
		ss2req = "",
		ss3req = "",
		healreq = "",
		capreq = "",
		reqsubela = "",
		reqsubmath = "",
		reqsubsci = "",
		reqsubss = "",
		reqsubpe = "",
		reqsublang = "",
		reqsubart = "", //recommendations
		reqmath = 3,
		reqsci = 3,
		reqlang = 0,
		sub9 = 0,
		sub8 = 0,
		sub7 = 0,
		sub6 = 0,
		sub5 = 0,
		sub4 = 0,
		sub3 = 0,
		sub2 = 0,
		overflowsci = 0,
		overflowela = 0, //requirements for endorsements and all the subject totals
		temp9 = 0,
		temp8 = 0,
		temp7 = 0,
		temp6 = 0,
		temp5 = 0,
		temp4 = 0,
		temp3 = 0, //overflows
		endorsement = document.getElementById("selection").value,
		mscredit = 0,
		total = 0,
		totalu = 0,
		totalt = 0; //more totals, etc
	if (hs0 == "Chemistry 106") {
		dctotal12 = (4 + dctotal12);
		hstotal12 = (1 + hstotal12);
		unit12 = (2 + unit12);
		sub2 = (sub2 + 1);
	} else if (hs0 == "Online/Other" || hs0 == "Math College Algebra" || hs0 == "English Composition" || hs0 == "Intro to Literature" || hs0 == "Introduction to Welding") {
		hstotal12 = (0.75 + hstotal12);
		dctotal12 = (3 + dctotal12);
		unit12 = (1 + unit12);
		sub2 = (sub2 + 0.75);
	}
	if (hs == "Chemistry 106") {
		dctotal12 = (4 + dctotal12);
		hstotal12 = (1 + hstotal12);
		unit12 = (2 + unit12);
		sub2 = (sub2 + 1);
	} else if (hs == "Online/Other" || hs == "Math College Algebra" || hs == "English Composition" || hs == "Intro to Literature" || hs == "Introduction to Welding") {
		hstotal12 = (0.75 + hstotal12);
		dctotal12 = (3 + dctotal12);
		unit12 = (1 + unit12);
		sub2 = (sub2 + 0.75);
	}
	if (hs09 == "Chemistry 106") {
		dctotal12 = (4 + dctotal12);
		hstotal12 = (1 + hstotal12);
		unit12 = (2 + unit12);
		sub2 = (sub2 + 1);
	} else if (hs09 == "Online/Other" || hs09 == "Math College Algebra" || hs09 == "English Composition" || hs09 == "Intro to Literature" || hs09 == "Introduction to Welding") {
		hstotal12 = (0.75 + hstotal12);
		dctotal12 = (3 + dctotal12);
		unit12 = (1 + unit12);
		sub2 = (sub2 + 0.75);
	}
	if (hs08 == "Chemistry 106") {
		dctotal12 = (4 + dctotal12);
		hstotal12 = (1 + hstotal12);
		unit12 = (2 + unit12);
		sub2 = (sub2 + 1);
	} else if (hs08 == "Online/Other" || hs08 == "Math College Algebra" || hs08 == "English Composition" || hs08 == "Intro to Literature" || hs08 == "Introduction to Welding") {
		hstotal12 = (0.75 + hstotal12);
		dctotal12 = (3 + dctotal12);
		unit12 = (1 + unit12);
		sub2 = (sub2 + 0.75);
	}
	if (hs07 == "Chemistry 106") {
		dctotal12 = (4 + dctotal12);
		hstotal12 = (1 + hstotal12);
		unit12 = (2 + unit12);
		sub2 = (sub2 + 1);
	} else if (hs07 == "Online/Other" || hs07 == "Math College Algebra" || hs07 == "English Composition" || hs07 == "Intro to Literature" || hs07 == "Introduction to Welding") {
		hstotal12 = (0.75 + hstotal12);
		dctotal12 = (3 + dctotal12);
		unit12 = (1 + unit12);
		sub2 = (sub2 + 0.75);
	}
	if (hs06 == "Chemistry 106") {
		dctotal12 = (4 + dctotal12);
		hstotal12 = (1 + hstotal12);
		unit12 = (2 + unit12);
		sub2 = (sub2 + 1);
	} else if (hs06 == "Online/Other" || hs06 == "Math College Algebra" || hs06 == "English Composition" || hs06 == "Intro to Literature" || hs06 == "Introduction to Welding") {
		hstotal12 = (0.75 + hstotal12);
		dctotal12 = (3 + dctotal12);
		unit12 = (1 + unit12);
		sub2 = (sub2 + 0.75);
	}
	if (hs05 == "Chemistry 106") {
		dctotal11 = (4 + dctotal11);
		hstotal11 = (1 + hstotal11);
		unit11 = (2 + unit11);
		sub2 = (sub2 + 1);
	} else if (hs05 == "Online/Other" || hs05 == "Introduction to Welding") {
		hstotal11 = (0.75 + hstotal11);
		dctotal11 = (3 + dctotal11);
		unit11 = (1 + unit11);
		sub2 = (sub2 + 0.75);
	}
	if (hs04 == "Chemistry 106") {
		dctotal11 = (4 + dctotal11);
		hstotal11 = (1 + hstotal11);
		unit11 = (2 + unit11);
		sub2 = (sub2 + 1);
	} else if (hs04 == "Online/Other" || hs04 == "Introduction to Welding") {
		hstotal11 = (0.75 + hstotal11);
		dctotal11 = (3 + dctotal11);
		unit11 = (1 + unit11);
		sub2 = (sub2 + 0.75);
	}
	if (hs03 == "Chemistry 106") {
		dctotal11 = (4 + dctotal11);
		hstotal11 = (1 + hstotal11);
		unit11 = (2 + unit11);
		sub2 = (sub2 + 1);
	} else if (hs03 == "Online/Other" || hs03 == "Introduction to Welding") {
		hstotal11 = (0.75 + hstotal11);
		dctotal11 = (3 + dctotal11);
		unit11 = (1 + unit11);
		sub2 = (sub2 + 0.75);
	}
	if (hs02 == "Chemistry 106") {
		dctotal11 = (4 + dctotal11);
		hstotal11 = (1 + hstotal11);
		unit11 = (2 + unit11);
		sub2 = (sub2 + 1);
	} else if (hs02 == "Online/Other" || hs02 == "Introduction to Welding") {
		hstotal11 = (0.75 + hstotal11);
		dctotal11 = (3 + dctotal11);
		unit11 = (1 + unit11);
		sub2 = (sub2 + 0.75);
	}
	if (hs01 == "Chemistry 106") {
		dctotal11 = (4 + dctotal11);
		hstotal11 = (1 + hstotal11);
		unit11 = (2 + unit11);
		sub2 = (sub2 + 1);
	} else if (hs01 == "Online/Other" || hs01 == "Introduction to Welding") {
		hstotal11 = (0.75 + hstotal11);
		dctotal11 = (3 + dctotal11);
		unit11 = (1 + unit11);
		sub2 = (sub2 + 0.75);
	}
	if (hs00 == "Chemistry 106") {
		dctotal11 = (4 + dctotal11);
		hstotal11 = (1 + hstotal11);
		unit11 = (2 + unit11);
		sub2 = (sub2 + 1);
	} else if (hs00 == "Online/Other" || hs00 == "Introduction to Welding") {
		hstotal11 = (0.75 + hstotal11);
		dctotal11 = (3 + dctotal11);
		unit11 = (1 + unit11);
		sub2 = (sub2 + 0.75);
	}
	if (hs9 == "English I" || hs9 == "Honors English I" || hs9 == "Strategic Reading") {
		hstotal9 = (1 + hstotal9);
		unit9 = (2 + unit9);
		sub9 = (sub9 + 1);
	}
	if (hs95 == "English I" || hs95 == "Honors English I" || hs95 == "Strategic Reading") {
		hstotal9 = (1 + hstotal9);
		unit9 = (2 + unit9);
		sub9 = (sub9 + 1);
	}
	if (hs90 == "English II + Speech" || hs90 == "Honors English II + Speech" || hs90 == "Strategic Reading") {
		hstotal10 = (1 + hstotal10);
		unit10 = (2 + unit10);
		sub9 = (sub9 + 1);
	} else if (hs90 == "Debate I" || hs90 == "Debate II") {
		hstotal10 = (0.5 + hstotal10);
		unit10 = (1 + unit10);
		sub9 = (sub9 + 0.5);
	}
	if (hs96 == "English II + Speech" || hs96 == "Honors English II + Speech" || hs96 == "Strategic Reading") {
		hstotal10 = (1 + hstotal10);
		unit10 = (2 + unit10);
		sub9 = (sub9 + 1);
	} else if (hs96 == "Debate I" || hs96 == "Debate II") {
		hstotal10 = (0.5 + hstotal10);
		unit10 = (1 + unit10);
		sub9 = (sub9 + 0.5);
	}
	if (hs91 == "English III" || hs91 == "Honors English III" || hs91 == "Strategic Reading") {
		hstotal11 = (1 + hstotal11);
		unit11 = (2 + unit11);
		sub9 = (sub9 + 1);
	} else if (hs91 == "Creative Writing" || hs91 == "Debate I" || hs91 == "Debate II") {
		hstotal11 = (0.5 + hstotal11);
		unit11 = (1 + unit11);
		sub9 = (sub9 + 0.5);
	}
	if (hs92 == "English III" || hs92 == "Honors English III" || hs92 == "Strategic Reading") {
		hstotal11 = (1 + hstotal11);
		unit11 = (2 + unit11);
		sub9 = (sub9 + 1);
	} else if (hs92 == "Creative Writing" || hs92 == "Debate I" || hs92 == "Debate II") {
		hstotal11 = (0.5 + hstotal11);
		unit11 = (1 + unit11);
		sub9 = (sub9 + 0.5);
	}
	if (hs93 == "English IV" || hs93 == "Senior Literature" || hs93 == "Strategic Reading" || hs93 == "Research and Communications Writing") {
		hstotal12 = (1 + hstotal12);
		unit12 = (2 + unit12);
		sub9 = (sub9 + 1);
	} else if (hs93 == "Creative Writing" || hs93 == "Debate I" || hs93 == "Debate II") {
		hstotal12 = (0.5 + hstotal12);
		unit12 = (1 + unit12);
		sub9 = (sub9 + 0.5);
	}
	if (hs94 == "English IV" || hs94 == "Senior Literature" || hs94 == "Strategic Reading" || hs93 == "Research and Communications Writing") {
		hstotal12 = (1 + hstotal12);
		unit12 = (2 + unit12);
		sub9 = (sub9 + 1);
	} else if (hs94 == "Creative Writing" || hs94 == "Debate I" || hs94 == "Debate II") {
		hstotal12 = (0.5 + hstotal12);
		unit12 = (1 + unit12);
		sub9 = (sub9 + 0.5);
	}
	if (hs8 == "Pre-Algebra" || hs8 == "Algebra I Lab" || hs8 == "Algebra I" || hs8 == "Geometry" || hs8 == "Accelerated Geometry" || hs8 == "Algebra II" || hs8 == "Accelerated Algebra II") {
		hstotal9 = (1 + hstotal9);
		unit9 = (2 + unit9);
		sub8 = (sub8 + 1);
	}
	if (hs85 == "Pre-Algebra" || hs85 == "Algebra I Lab" || hs85 == "Algebra I" || hs85 == "Geometry" || hs85 == "Accelerated Geometry" || hs85 == "Algebra II" || hs85 == "Accelerated Algebra II") {
		hstotal9 = (1 + hstotal9);
		unit9 = (2 + unit9);
		sub8 = (sub8 + 1);
	}
	if (hs80 == "Algebra I" || hs80 == "Geometry" || hs80 == "Accelerated Geometry" || hs80 == "Algebra II" || hs80 == "Accelerated Algebra II") {
		hstotal10 = (1 + hstotal10);
		unit10 = (2 + unit10);
		sub8 = (sub8 + 1);
	}
	if (hs86 == "Algebra I" || hs86 == "Geometry" || hs86 == "Accelerated Geometry" || hs86 == "Algebra II" || hs86 == "Accelerated Algebra II") {
		hstotal10 = (1 + hstotal10);
		unit10 = (2 + unit10);
		sub8 = (sub8 + 1);
	}
	if (hs81 == "Algebra I" || hs81 == "Geometry" || hs81 == "Accelerated Geometry" || hs81 == "Algebra II" || hs81 == "Accelerated Algebra II" || hs81 == "Consumer Math" || hs81 == "Honors Pre-Calculus") {
		hstotal11 = (1 + hstotal11);
		unit11 = (2 + unit11);
		sub8 = (sub8 + 1);
	} else if (hs81 == "Statistics and Probability" || hs81 == "Trigonometry") {
		hstotal11 = (0.5 + hstotal11);
		unit11 = (1 + unit11);
		sub8 = (sub8 + 0.5);
	}
	if (hs82 == "Algebra I" || hs82 == "Geometry" || hs82 == "Accelerated Geometry" || hs82 == "Algebra II" || hs82 == "Accelerated Algebra II" || hs81 == "Consumer Math" || hs82 == "Honors Pre-Calculus") {
		hstotal11 = (1 + hstotal11);
		unit11 = (2 + unit11);
		sub8 = (sub8 + 1);
	} else if (hs82 == "Statistics and Probability" || hs82 == "Trigonometry") {
		hstotal11 = (0.5 + hstotal11);
		unit11 = (1 + unit11);
		sub8 = (sub8 + 0.5);
	}
	if (hs83 == "Algebra I" || hs83 == "Geometry" || hs83 == "Accelerated Geometry" || hs83 == "Algebra II" || hs83 == "Accelerated Algebra II" || hs83 == "Consumer Math" || hs83 == "AP Statistics" || hs83 == "AP Calculus AB" || hs83 == "Honors Pre-Calculus") {
		hstotal12 = (1 + hstotal12);
		unit12 = (2 + unit12);
		sub8 = (sub8 + 1);
	} else if (hs83 == "Statistics and Probability" || hs83 == "Trigonometry") {
		hstotal12 = (0.5 + hstotal12);
		unit12 = (1 + unit12);
		sub8 = (sub8 + 0.5);
	}
	if (hs84 == "Algebra I" || hs84 == "Geometry" || hs84 == "Accelerated Geometry" || hs84 == "Algebra II" || hs84 == "Accelerated Algebra II" || hs84 == "Consumer Math" || hs84 == "AP Statistics" || hs84 == "AP Calculus AB" || hs84 == "Honors Pre-Calculus") {
		hstotal12 = (1 + hstotal12);
		unit12 = (2 + unit12);
		sub8 = (sub8 + 1);
	} else if (hs84 == "Statistics and Probability" || hs84 == "Trigonometry") {
		hstotal12 = (0.5 + hstotal12);
		unit12 = (1 + unit12);
		sub8 = (sub8 + 0.5);
	}
	if (hs7 == "Physical Science" || hs7 == "Biology" || hs7 == "Honors Biology") {
		hstotal9 = (1 + hstotal9);
		unit9 = (2 + unit9);
		sub7 = (sub7 + 1);
	}
	if (hs75 == "Physical Science" || hs75 == "Biology" || hs75 == "Honors Biology") {
		hstotal9 = (1 + hstotal9);
		unit9 = (2 + unit9);
		sub7 = (sub7 + 1);
	}
	if (hs70 == "Chemistry" || hs70 == "Honors Chemistry" || hs70 == "Biology" || hs70 == "Honors Biology") {
		hstotal10 = (1 + hstotal10);
		unit10 = (2 + unit10);
		sub7 = (sub7 + 1);
	}
	if (hs76 == "Chemistry" || hs76 == "Honors Chemistry" || hs76 == "Biology" || hs76 == "Honors Biology") {
		hstotal10 = (1 + hstotal10);
		unit10 = (2 + unit10);
		sub7 = (sub7 + 1);
	}
	if (hs71 == "Chemistry" || hs71 == "Honors Chemistry" || hs71 == "Physics" || hs71 == "Honors Physics" || hs71 == "Anatomy/Physiology") {
		hstotal11 = (1 + hstotal11);
		unit11 = (2 + unit11);
		sub7 = (sub7 + 1);
	} else if (hs71 == "Environmental Science" || hs71 == "Astrology") {
		hstotal11 = (0.5 + hstotal11);
		unit11 = (1 + unit11);
		sub7 = (sub7 + 0.5);
	}
	if (hs72 == "Chemistry" || hs72 == "Honors Chemistry" || hs72 == "Physics" || hs72 == "Honors Physics" || hs72 == "Anatomy/Physiology") {
		hstotal11 = (1 + hstotal11);
		unit11 = (2 + unit11);
		sub7 = (sub7 + 1);
	} else if (hs72 == "Environmental Science" || hs72 == "Astrology") {
		hstotal11 = (0.5 + hstotal11);
		unit11 = (1 + unit11);
		sub7 = (sub7 + 0.5);
	}
	if (hs73 == "Anatomy/Physiology" || hs73 == "Physics" || hs73 == "Honors Physics") {
		hstotal12 = (1 + hstotal12);
		unit12 = (2 + unit12);
		sub7 = (sub7 + 1);
	} else if (hs73 == "Environmental Science" || hs73 == "Astrology") {
		hstotal12 = (0.5 + hstotal12);
		unit12 = (1 + unit12);
		sub7 = (sub7 + 0.5);
	}
	if (hs74 == "Anatomy/Physiology" || hs74 == "Physics" || hs74 == "Honors Physics") {
		hstotal12 = (1 + hstotal12);
		unit12 = (2 + unit12);
		sub7 = (sub7 + 1);
	} else if (hs74 == "Environmental Science" || hs74 == "Astrology") {
		hstotal12 = (0.5 + hstotal12);
		unit12 = (1 + unit12);
		sub7 = (sub7 + 0.5);
	}
	if (hs6 == "World History/Geography" || hs6 == "Honors World History/Geography") {
		hstotal9 = (1 + hstotal9);
		unit9 = (2 + unit9);
		sub6 = (sub6 + 1);
	}
	if (hs65 == "World History/Geography" || hs65 == "Honors World History/Geography") {
		hstotal9 = (1 + hstotal9);
		unit9 = (2 + unit9);
		sub6 = (sub6 + 1);
	}
	if (hs60 == "American History" || hs60 == "AP American History") {
		hstotal10 = (1 + hstotal10);
		unit10 = (2 + unit10);
		sub6 = (sub6 + 1);
	} else if (hs60 == "Criminal Justice Today" || hs60 == "African American History") {
		hstotal10 = (0.5 + hstotal10);
		unit10 = (1 + unit10);
		sub6 = (sub6 + 0.5);
	}
	if (hs66 == "American History" || hs66 == "AP American History") {
		hstotal10 = (1 + hstotal10);
		unit10 = (2 + unit10);
		sub6 = (sub6 + 1);
	} else if (hs66 == "Criminal Justice Today" || hs66 == "African American History") {
		hstotal10 = (0.5 + hstotal10);
		unit10 = (1 + unit10);
		sub6 = (sub6 + 0.5);
	}
	if (hs61 == "AP Psychology" || hs61 == "AP American History") {
		hstotal11 = (1 + hstotal11);
		unit11 = (2 + unit11);
		sub6 = (sub6 + 1);
	} else if (hs61 == "Criminal Justice Today" || hs61 == "African American History" || hs61 == "Psychology" || hs61 == "Sociology" || hs61 == "International Affairs" || hs61 == "American History and Film" || hs61 == "Government" || hs61 == "Civics") {
		hstotal11 = (0.5 + hstotal11);
		unit11 = (1 + unit11);
		sub6 = (sub6 + 0.5);
	}
	if (hs62 == "AP Psychology" || hs62 == "AP American History") {
		hstotal11 = (1 + hstotal11);
		unit11 = (2 + unit11);
		sub6 = (sub6 + 1);
	} else if (hs62 == "Criminal Justice Today" || hs62 == "African American History" || hs62 == "Psychology" || hs62 == "Sociology" || hs62 == "International Affairs" || hs62 == "American History and Film" || hs62 == "Government" || hs62 == "Civics") {
		hstotal11 = (0.5 + hstotal11);
		unit11 = (1 + unit11);
		sub6 = (sub6 + 0.5);
	}
	if (hs63 == "AP Psychology" || hs63 == "AP American History") {
		hstotal12 = (1 + hstotal12);
		unit12 = (2 + unit12);
		sub6 = (sub6 + 1);
	} else if (hs63 == "Criminal Justice Today" || hs63 == "African American History" || hs63 == "Psychology" || hs63 == "Sociology" || hs63 == "International Affairs" || hs63 == "American History and Film" || hs63 == "Government" || hs63 == "Civics") {
		hstotal12 = (0.5 + hstotal12);
		unit12 = (1 + unit12);
		sub6 = (sub6 + 0.5);
	}
	if (hs64 == "AP Psychology" || hs64 == "AP American History") {
		hstotal12 = (1 + hstotal12);
		unit12 = (2 + unit12);
		sub6 = (sub6 + 1);
	} else if (hs64 == "Criminal Justice Today" || hs64 == "African American History" || hs64 == "Psychology" || hs64 == "Sociology" || hs64 == "International Affairs" || hs64 == "American History and Film" || hs64 == "Government" || hs64 == "Civics") {
		hstotal12 = (0.5 + hstotal12);
		unit12 = (1 + unit12);
		sub6 = (sub6 + 0.5);
	}
	if (hs5 == "Symphonic Band" || hs5 == "Concert Choir" || hs5 == "Treble Choir" || hs5 == "Tenor Bass Choir" || hs5 == "Music Appreciation") {
		hstotal9 = (1 + hstotal9);
		unit9 = (2 + unit9);
		sub5 = (sub5 + 1);
	} else if (hs5 == "Intro to Art I" || hs5 == "Intro to Art II" || hs5 == "Drawing I" || hs5 == "Drawing II" || hs5 == "Photography") {
		hstotal9 = (0.5 + hstotal9);
		unit9 = (1 + unit9);
		sub5 = (sub5 + 0.5);
	}
	if (hs50 == "Symphonic Band" || hs50 == "Concert Band" || hs50 == "Concert Choir" || hs50 == "Treble Choir" || hs50 == "Tenor Bass Choir" || hs50 == "Music Appreciation") {
		hstotal9 = (1 + hstotal9);
		unit9 = (2 + unit9);
		sub5 = (sub5 + 1);
	} else if (hs50 == "Intro to Art I" || hs50 == "Intro to Art II" || hs50 == "Drawing I" || hs50 == "Drawing II" || hs50 == "Photography") {
		hstotal9 = (0.5 + hstotal9);
		unit9 = (1 + unit9);
		sub5 = (sub5 + 0.5);
	}
	if (hs51 == "Symphonic Band" || hs51 == "Concert Band" || hs51 == "Concert Choir" || hs51 == "Treble Choir" || hs51 == "Tenor Bass Choir" || hs51 == "Music Appreciation") {
		hstotal9 = (1 + hstotal9);
		unit9 = (2 + unit9);
		sub5 = (sub5 + 1);
	} else if (hs51 == "Intro to Art I" || hs51 == "Intro to Art II" || hs51 == "Drawing I" || hs51 == "Drawing II" || hs51 == "Photography" || hs51 == "Drama I") {
		hstotal9 = (0.5 + hstotal9);
		unit9 = (1 + unit9);
		sub5 = (sub5 + 0.5);
	}
	if (hs52 == "Symphonic Band" || hs52 == "Concert Band" || hs52 == "Concert Choir" || hs52 == "Treble Choir" || hs52 == "Tenor Bass Choir" || hs52 == "Music Appreciation") {
		hstotal9 = (1 + hstotal9);
		unit9 = (2 + unit9);
		sub5 = (sub5 + 1);
	} else if (hs52 == "Intro to Art I" || hs52 == "Intro to Art II" || hs52 == "Drawing I" || hs52 == "Drawing II" || hs52 == "Photography" || hs52 == "Drama I") {
		hstotal9 = (0.5 + hstotal9);
		unit9 = (1 + unit9);
		sub5 = (sub5 + 0.5);
	}
	if (hs53 == "Symphonic Band" || hs53 == "Concert Band" || hs53 == "Concert Choir" || hs53 == "Treble Choir" || hs53 == "Tenor Bass Choir" || hs53 == "Music Appreciation") {
		hstotal10 = (1 + hstotal10);
		unit10 = (2 + unit10);
		sub5 = (sub5 + 1);
	} else if (hs53 == "Intro to Art I" || hs53 == "Intro to Art II" || hs53 == "Drawing I" || hs53 == "Drawing II" || hs53 == "Photography" || hs53 == "Painting II" || hs53 == "Pottery I" || hs53 == "Pottery II" || hs53 == "Painting I" || hs53 == "Drama I") {
		hstotal10 = (0.5 + hstotal10);
		unit10 = (1 + unit10);
		sub5 = (sub5 + 0.5);
	}
	if (hs54 == "Symphonic Band" || hs54 == "Concert Band" || hs54 == "Concert Choir" || hs54 == "Treble Choir" || hs54 == "Tenor Bass Choir" || hs54 == "Music Appreciation") {
		hstotal10 = (1 + hstotal10);
		unit10 = (2 + unit10);
		sub5 = (sub5 + 1);
	} else if (hs54 == "Intro to Art I" || hs54 == "Intro to Art II" || hs54 == "Drawing I" || hs54 == "Drawing II" || hs54 == "Photography" || hs54 == "Painting II" || hs54 == "Pottery I" || hs54 == "Pottery II" || hs54 == "Painting I" || hs54 == "Drama I") {
		hstotal10 = (0.5 + hstotal10);
		unit10 = (1 + unit10);
		sub5 = (sub5 + 0.5);
	}
	if (hs55 == "Symphonic Band" || hs55 == "Concert Band" || hs55 == "Concert Choir" || hs55 == "Treble Choir" || hs55 == "Tenor Bass Choir" || hs55 == "Music Appreciation") {
		hstotal10 = (1 + hstotal10);
		unit10 = (2 + unit10);
		sub5 = (sub5 + 1);
	} else if (hs55 == "Intro to Art I" || hs55 == "Intro to Art II" || hs55 == "Drawing I" || hs55 == "Drawing II" || hs55 == "Photography" || hs55 == "Painting II" || hs55 == "Pottery I" || hs55 == "Pottery II" || hs55 == "Painting I" || hs55 == "Drama I") {
		hstotal10 = (0.5 + hstotal10);
		unit10 = (1 + unit10);
		sub5 = (sub5 + 0.5);
	}
	if (hs56 == "Symphonic Band" || hs56 == "Concert Band" || hs56 == "Concert Choir" || hs56 == "Treble Choir" || hs56 == "Tenor Bass Choir" || hs56 == "Music Appreciation") {
		hstotal10 = (1 + hstotal10);
		unit10 = (2 + unit10);
		sub5 = (sub5 + 1);
	} else if (hs56 == "Intro to Art I" || hs56 == "Intro to Art II" || hs56 == "Drawing I" || hs56 == "Drawing II" || hs56 == "Photography" || hs56 == "Painting II" || hs56 == "Pottery I" || hs56 == "Pottery II" || hs56 == "Painting I" || hs56 == "Drama I") {
		hstotal10 = (0.5 + hstotal10);
		unit10 = (1 + unit10);
		sub5 = (sub5 + 0.5);
	}
	if (hs57 == "Symphonic Band" || hs57 == "Concert Band" || hs57 == "Concert Choir" || hs57 == "Treble Choir" || hs57 == "Tenor Bass Choir" || hs57 == "Music Appreciation" || hs57 == "Art Portfolio") {
		hstotal11 = (1 + hstotal11);
		unit11 = (2 + unit11);
		sub5 = (sub5 + 1);
	} else if (hs57 == "Intro to Art I" || hs57 == "Intro to Art II" || hs57 == "Drawing I" || hs57 == "Drawing II" || hs57 == "Photography" || hs57 == "Painting II" || hs57 == "Pottery I" || hs57 == "Pottery II" || hs57 == "Painting I" || hs57 == "Drama I") {
		hstotal11 = (0.5 + hstotal11);
		unit11 = (1 + unit11);
		sub5 = (sub5 + 0.5);
	}
	if (hs58 == "Symphonic Band" || hs58 == "Concert Band" || hs58 == "Concert Choir" || hs58 == "Treble Choir" || hs58 == "Tenor Bass Choir" || hs58 == "Music Appreciation" || hs58 == "Art Portfolio") {
		hstotal11 = (1 + hstotal11);
		unit11 = (2 + unit11);
		sub5 = (sub5 + 1);
	} else if (hs58 == "Intro to Art I" || hs58 == "Intro to Art II" || hs58 == "Drawing I" || hs58 == "Drawing II" || hs58 == "Photography" || hs58 == "Painting II" || hs58 == "Pottery I" || hs58 == "Pottery II" || hs58 == "Painting I" || hs58 == "Drama I") {
		hstotal11 = (0.5 + hstotal11);
		unit11 = (1 + unit11);
		sub5 = (sub5 + 0.5);
	}
	if (hs59 == "Symphonic Band" || hs59 == "Concert Band" || hs59 == "Concert Choir" || hs59 == "Treble Choir" || hs59 == "Tenor Bass Choir" || hs59 == "Music Appreciation" || hs59 == "Art Portfolio") {
		hstotal11 = (1 + hstotal11);
		unit11 = (2 + unit11);
		sub5 = (sub5 + 1);
	} else if (hs59 == "Intro to Art I" || hs59 == "Intro to Art II" || hs59 == "Drawing I" || hs59 == "Drawing II" || hs59 == "Photography" || hs59 == "Painting II" || hs59 == "Pottery I" || hs59 == "Pottery II" || hs59 == "Painting I" || hs59 == "Drama I") {
		hstotal11 = (0.5 + hstotal11);
		unit11 = (1 + unit11);
		sub5 = (sub5 + 0.5);
	}
	if (hs5a == "Symphonic Band" || hs5a == "Concert Band" || hs5a == "Concert Choir" || hs5a == "Treble Choir" || hs5a == "Tenor Bass Choir" || hs5a == "Music Appreciation" || hs5a == "Art Portfolio") {
		hstotal11 = (1 + hstotal11);
		unit11 = (2 + unit11);
		sub5 = (sub5 + 1);
	} else if (hs5a == "Intro to Art I" || hs5a == "Intro to Art II" || hs5a == "Drawing I" || hs5a == "Drawing II" || hs5a == "Photography" || hs5a == "Painting II" || hs5a == "Pottery I" || hs5a == "Pottery II" || hs5a == "Painting I" || hs5a == "Drama I") {
		hstotal11 = (0.5 + hstotal11);
		unit11 = (1 + unit11);
		sub5 = (sub5 + 0.5);
	}
	if (hs5b == "Symphonic Band" || hs5b == "Concert Band" || hs5b == "Concert Choir" || hs5b == "Treble Choir" || hs5b == "Tenor Bass Choir" || hs5b == "Music Appreciation" || hs5b == "Art Portfolio") {
		hstotal12 = (1 + hstotal12);
		unit12 = (2 + unit12);
		sub5 = (sub5 + 1);
	} else if (hs5b == "Intro to Art I" || hs5b == "Intro to Art II" || hs5b == "Drawing I" || hs5b == "Drawing II" || hs5b == "Photography" || hs5b == "Painting II" || hs5b == "Pottery I" || hs5b == "Pottery II" || hs5b == "Painting I" || hs5b == "Drama I") {
		hstotal12 = (0.5 + hstotal12);
		unit12 = (1 + unit12);
		sub5 = (sub5 + 0.5);
	}
	if (hs5c == "Symphonic Band" || hs5c == "Concert Band" || hs5c == "Concert Choir" || hs5c == "Treble Choir" || hs5c == "Tenor Bass Choir" || hs5c == "Music Appreciation" || hs5c == "Art Portfolio") {
		hstotal12 = (1 + hstotal12);
		unit12 = (2 + unit12);
		sub5 = (sub5 + 1);
	} else if (hs5c == "Intro to Art I" || hs5c == "Intro to Art II" || hs5c == "Drawing I" || hs5c == "Drawing II" || hs5c == "Photography" || hs5c == "Painting II" || hs5c == "Pottery I" || hs5c == "Pottery II" || hs5c == "Painting I" || hs5c == "Drama I") {
		hstotal12 = (0.5 + hstotal12);
		unit12 = (1 + unit12);
		sub5 = (sub5 + 0.5);
	}
	if (hs5d == "Symphonic Band" || hs5d == "Concert Band" || hs5d == "Concert Choir" || hs5d == "Treble Choir" || hs5d == "Tenor Bass Choir" || hs5d == "Music Appreciation" || hs5d == "Art Portfolio") {
		hstotal12 = (1 + hstotal12);
		unit12 = (2 + unit12);
		sub5 = (sub5 + 1);
	} else if (hs5d == "Intro to Art I" || hs5d == "Intro to Art II" || hs5d == "Drawing I" || hs5d == "Drawing II" || hs5d == "Photography" || hs5d == "Painting II" || hs5d == "Pottery I" || hs5d == "Pottery II" || hs5d == "Painting I" || hs5d == "Drama I") {
		hstotal12 = (0.5 + hstotal12);
		unit12 = (1 + unit12);
		sub5 = (sub5 + 0.5);
	}
	if (hs5e == "Symphonic Band" || hs5e == "Concert Band" || hs5e == "Concert Choir" || hs5e == "Treble Choir" || hs5e == "Tenor Bass Choir" || hs5e == "Music Appreciation" || hs5e == "Art Portfolio") {
		hstotal12 = (1 + hstotal12);
		unit12 = (2 + unit12);
		sub5 = (sub5 + 1);
	} else if (hs5e == "Intro to Art I" || hs5e == "Intro to Art II" || hs5e == "Drawing I" || hs5e == "Drawing II" || hs5e == "Photography" || hs5e == "Painting II" || hs5e == "Pottery I" || hs5e == "Pottery II" || hs5e == "Painting I" || hs5e == "Drama I") {
		hstotal12 = (0.5 + hstotal12);
		unit12 = (1 + unit12);
		sub5 = (sub5 + 0.5);
	}
	if (hs4 == "Spanish I" || hs4 == "ASL I" || hs4 == "German I") {
		hstotal9 = (1 + hstotal9);
		unit9 = (2 + unit9);
		sub4 = (sub4 + 1);
	}
	if (hs40 == "Spanish I" || hs40 == "ASL I" || hs40 == "Spanish II" || hs40 == "ASL II" || hs40 == "German I" || hs40 == "German II") {
		hstotal10 = (1 + hstotal10);
		unit10 = (2 + unit10);
		sub4 = (sub4 + 1);
	}
	if (hs41 == "Spanish I" || hs41 == "ASL I" || hs41 == "Spanish II" || hs41 == "ASL II" || hs41 == "Spanish III" || hs41 == "ASL III" || hs41 == "German I" || hs41 == "German II") {
		hstotal11 = (1 + hstotal11);
		unit11 = (2 + unit11);
		sub4 = (sub4 + 1);
	}
	if (hs42 == "Spanish I" || hs42 == "ASL I" || hs42 == "Spanish II" || hs42 == "ASL II" || hs42 == "Spanish III" || hs42 == "Spanish IV" || hs42 == "ASL III" || hs42 == "ASL IV" || hs42 == "German I" || hs42 == "German II") {
		hstotal12 = (1 + hstotal12);
		unit12 = (2 + unit12);
		sub4 = (sub4 + 1);
	}
	if (hs3 == "Health" || hs3 == "PE" || hs3 == "Cardio") {
		hstotal9 = (0.5 + hstotal9);
		unit9 = (1 + unit9);
		sub3 = (sub3 + 0.5);
	}
	if (hs30 == "Health" || hs30 == "PE" || hs30 == "Cardio") {
		hstotal9 = (0.5 + hstotal9);
		unit9 = (1 + unit9);
		sub3 = (sub3 + 0.5);
	}
	if (hs31 == "Health" || hs31 == "PE" || hs31 == "Cardio") {
		hstotal10 = (0.5 + hstotal10);
		unit10 = (1 + unit10);
		sub3 = (sub3 + 0.5);
	} else if (hs31 == "Fitness and Conditioning") {
		hstotal10 = (1 + hstotal10);
		unit10 = (2 + unit10);
		sub3 = (sub3 + 1);
	}
	if (hs32 == "Health" || hs32 == "PE" || hs32 == "Cardio") {
		hstotal10 = (0.5 + hstotal10);
		unit10 = (1 + unit10);
		sub3 = (sub3 + 0.5);
	} else if (hs32 == "Fitness and Conditioning") {
		hstotal10 = (1 + hstotal10);
		unit10 = (2 + unit10);
		sub3 = (sub3 + 1);
	}
	if (hs33 == "Health" || hs33 == "PE" || hs33 == "Cardio") {
		hstotal11 = (0.5 + hstotal11);
		unit11 = (1 + unit11);
		sub3 = (sub3 + 0.5);
	} else if (hs33 == "Fitness and Conditioning") {
		hstotal11 = (1 + hstotal11);
		unit11 = (2 + unit11);
		sub3 = (sub3 + 1);
	}
	if (hs34 == "Health" || hs34 == "PE" || hs34 == "Cardio") {
		hstotal11 = (0.5 + hstotal11);
		unit11 = (1 + unit11);
		sub3 = (sub3 + 0.5);
	} else if (hs34 == "Fitness and Conditioning") {
		hstotal11 = (1 + hstotal11);
		unit11 = (2 + unit11);
		sub3 = (sub3 + 1);
	}
	if (hs35 == "Health" || hs35 == "PE" || hs35 == "Cardio") {
		hstotal12 = (0.5 + hstotal12);
		unit12 = (1 + unit12);
		sub3 = (sub3 + 0.5);
	} else if (hs35 == "Fitness and Conditioning") {
		hstotal12 = (1 + hstotal12);
		unit12 = (2 + unit12);
		sub3 = (sub3 + 1);
	}
	if (hs36 == "Health" || hs36 == "PE" || hs36 == "Cardio") {
		hstotal12 = (0.5 + hstotal12);
		unit12 = (1 + unit12);
		sub3 = (sub3 + 0.5);
	} else if (hs36 == "Fitness and Conditioning") {
		hstotal12 = (1 + hstotal12);
		unit12 = (2 + unit12);
		sub3 = (sub3 + 1);
	}
	if (hs2 == "Introduction to Building Trades" || hs2 == "Intro to Business" || hs2 == "Nutrition and Wellness" || hs2 == "Nutrition Sciences" || hs2 == "Human Development I" || hs2 == "Human Development II" || hs2 == "Business Computer Applications" || hs2 == "Exploration of Information Technology" || hs2 == "Computer Science Principles I" || hs2 == "Computer Science Principles II" || hs2 == "Exploration of Media Arts I" || hs2 == "Exploration of Media Arts II" || hs2 == "Interior Design I" || hs2 == "Interior Design II" || hs2 == "Welding Tech I" || hs2 == "Welding Tech II" || hs2 == "Intro to Construction" || hs2 == "Intro to AFNR" || hs2 == "Fundamental Plant Science" || hs2 == "Advanced Plant Science" || hs2 == "Fundamental Animal Science" || hs2 == "Advanced Animal Science" || hs2 == "Wildlife and Fisheries" || hs2 == "Fundamental Ag Mechanical Technologies" || hs2 == "Agribusiness Management" || hs2 == "Carrer Explorations" || hs2 == "Principles of Marketing" || hs2 == "Sports Marketing Strategies" || hs2 == "Fundamental Horticulture" || hs2 == "Advanced Horticulture") {
		hstotal9 = (0.5 + hstotal9);
		unit9 = (1 + unit9);
		sub2 = (sub2 + 0.5);
	}
	if (hs20 == "Introduction to Building Trades" || hs20 == "Intro to Business" || hs20 == "Nutrition and Wellness" || hs20 == "Nutrition Sciences" || hs20 == "Human Development I" || hs20 == "Human Development II" || hs20 == "Business Computer Applications" || hs20 == "Exploration of Information Technology" || hs20 == "Computer Science Principles I" || hs20 == "Computer Science Principles II" || hs20 == "Exploration of Media Arts I" || hs20 == "Exploration of Media Arts II" || hs20 == "Interior Design I" || hs20 == "Interior Design II" || hs20 == "Welding Tech I" || hs20 == "Welding Tech II" || hs20 == "Intro to Construction" || hs20 == "Intro to AFNR" || hs20 == "Fundamental Plant Science" || hs20 == "Advanced Plant Science" || hs20 == "Fundamental Animal Science" || hs20 == "Advanced Animal Science" || hs2 == "Wildlife and Fisheries" || hs20 == "Fundamental Ag Mechanical Technologies" || hs20 == "Agribusiness Management" || hs20 == "Carrer Explorations" || hs20 == "Principles of Marketing" || hs20 == "Sports Marketing Strategies" || hs20 == "Fundamental Horticulture" || hs20 == "Advanced Horticulture") {
		hstotal9 = (0.5 + hstotal9);
		unit9 = (1 + unit9);
		sub2 = (sub2 + 0.5);
	}
	if (hs21 == "Introduction to Building Trades" || hs21 == "Intro to Business" || hs21 == "Nutrition and Wellness" || hs21 == "Nutrition Sciences" || hs21 == "Human Development I" || hs21 == "Human Development II" || hs21 == "Business Computer Applications" || hs21 == "Exploration of Information Technology" || hs21 == "Computer Science Principles I" || hs21 == "Computer Science Principles II" || hs21 == "Exploration of Media Arts I" || hs21 == "Exploration of Media Arts II" || hs21 == "Interior Design I" || hs21 == "Interior Design II" || hs21 == "Welding Tech I" || hs21 == "Welding Tech II" || hs21 == "Intro to Construction" || hs21 == "Intro to AFNR" || hs21 == "Fundamental Plant Science" || hs21 == "Advanced Plant Science" || hs21 == "Fundamental Animal Science" || hs21 == "Advanced Animal Science" || hs2 == "Wildlife and Fisheries" || hs21 == "Fundamental Ag Mechanical Technologies" || hs21 == "Agribusiness Management" || hs21 == "Carrer Explorations" || hs21 == "Principles of Marketing" || hs21 == "Sports Marketing Strategies" || hs21 == "Fundamental Horticulture" || hs21 == "Advanced Horticulture") {
		hstotal9 = (0.5 + hstotal9);
		unit9 = (1 + unit9);
		sub2 = (sub2 + 0.5);
	}
	if (hs22 == "Introduction to Building Trades" || hs22 == "Intro to Business" || hs22 == "Nutrition and Wellness" || hs22 == "Nutrition Sciences" || hs22 == "Human Development I" || hs22 == "Human Development II" || hs22 == "Business Computer Applications" || hs22 == "Exploration of Information Technology" || hs22 == "Computer Science Principles I" || hs22 == "Computer Science Principles II" || hs22 == "Exploration of Media Arts I" || hs22 == "Exploration of Media Arts II" || hs22 == "Interior Design I" || hs22 == "Interior Design II" || hs22 == "Welding Tech I" || hs22 == "Welding Tech II" || hs22 == "Intro to Construction" || hs22 == "Intro to AFNR" || hs22 == "Fundamental Plant Science" || hs22 == "Advanced Plant Science" || hs22 == "Fundamental Animal Science" || hs22 == "Advanced Animal Science" || hs2 == "Wildlife and Fisheries" || hs22 == "Fundamental Ag Mechanical Technologies" || hs22 == "Agribusiness Management" || hs22 == "Carrer Explorations" || hs22 == "Principles of Marketing" || hs22 == "Sports Marketing Strategies" || hs22 == "Fundamental Horticulture" || hs22 == "Advanced Horticulture") {
		hstotal9 = (0.5 + hstotal9);
		unit9 = (1 + unit9);
		sub2 = (sub2 + 0.5);
	}
	if (hs23 == "Introduction to Building Trades" || hs23 == "Intro to Business" || hs23 == "Nutrition and Wellness" || hs23 == "Nutrition Sciences" || hs23 == "Human Development I" || hs23 == "Human Development II" || hs23 == "Business Computer Applications" || hs23 == "Exploration of Information Technology" || hs23 == "Computer Science Principles I" || hs23 == "Computer Science Principles II" || hs23 == "Exploration of Media Arts I" || hs23 == "Exploration of Media Arts II" || hs23 == "Interior Design I" || hs23 == "Interior Design II" || hs23 == "Welding Tech I" || hs23 == "Welding Tech II" || hs23 == "Intro to Construction" || hs23 == "Intro to AFNR" || hs23 == "Fundamental Plant Science" || hs23 == "Advanced Plant Science" || hs23 == "Fundamental Animal Science" || hs23 == "Advanced Animal Science" || hs2 == "Wildlife and Fisheries" || hs23 == "Fundamental Ag Mechanical Technologies" || hs23 == "Agribusiness Management" || hs23 == "Carrer Explorations" || hs23 == "Principles of Marketing" || hs32 == "Sports Marketing Strategies" || hs23 == "Fundamental Horticulture" || hs23 == "Advanced Horticulture") {
		hstotal9 = (0.5 + hstotal9);
		unit9 = (1 + unit9);
		sub2 = (sub2 + 0.5);
	}
	if (hs24 == "Introduction to Building Trades" || hs24 == "Intro to Business" || hs24 == "Nutrition and Wellness" || hs24 == "Nutrition Sciences" || hs24 == "Human Development I" || hs24 == "Human Development II" || hs24 == "Business Computer Applications" || hs24 == "Exploration of Information Technology" || hs24 == "Computer Science Principles I" || hs24 == "Computer Science Principles II" || hs24 == "Exploration of Media Arts I" || hs24 == "Exploration of Media Arts II" || hs24 == "Interior Design I" || hs24 == "Interior Design II" || hs24 == "Welding Tech I" || hs24 == "Welding Tech II" || hs24 == "Intro to Construction" || hs24 == "Intro to AFNR" || hs24 == "Fundamental Plant Science" || hs24 == "Advanced Plant Science" || hs24 == "Fundamental Animal Science" || hs24 == "Advanced Animal Science" || hs2 == "Wildlife and Fisheries" || hs24 == "Fundamental Ag Mechanical Technologies" || hs24 == "Agribusiness Management" || hs24 == "Carrer Explorations" || hs24 == "Principles of Marketing" || hs24 == "Sports Marketing Strategies" || hs24 == "Fundamental Horticulture" || hs24 == "Advanced Horticulture") {
		hstotal9 = (0.5 + hstotal9);
		unit9 = (1 + unit9);
		sub2 = (sub2 + 0.5);
	}
	if (hs25 == "Intro to Business" || hs25 == "Nutrition and Wellness" || hs25 == "Nutrition Sciences" || hs25 == "Human Development I" || hs25 == "Human Development II" || hs25 == "Business Computer Applications" || hs25 == "Exploration of Information Technology" || hs25 == "Computer Science Principles I" || hs25 == "Computer Science Principles II" || hs25 == "Exploration of Media Arts I" || hs25 == "Exploration of Media Arts II" || hs25 == "Interior Design I" || hs25 == "Interior Design II" || hs25 == "Welding Tech I" || hs25 == "Welding Tech II" || hs25 == "Cybersecurity I" || hs25 == "Cybersecurity II" || hs25 == "Accounting I" || hs25 == "Business Law" || hs25 == "Media Design and Broadcasting I" || hs25 == "Media Design and Broadcasting II" || hs25 == "Welding Tech III" || hs25 == "Introduction to Building Trades" || hs25 == "Entrepreneurship" || hs25 == "Intro to Construction" || hs25 == "Intro to AFNR" || hs25 == "Fundamental Plant Science" || hs25 == "Advanced Plant Science" || hs25 == "Fundamental Animal Science" || hs25 == "Advanced Animal Science" || hs25 == "Wildlife and Fisheries" || hs25 == "Fundamental Ag Mechanical Technologies" || hs25 == "Agribusiness Management" || hs25 == "Carrer Explorations" || hs25 == "Principles of Marketing" || hs25 == "Sports Marketing Strategies" || hs25 == "Fundamental Horticulture" || hs25 == "Advanced Horticulture" || hs25 == "Agricultural Leadership and Communications") {
		hstotal10 = (0.5 + hstotal10);
		unit10 = (1 + unit10);
		sub2 = (sub2 + 0.5);
	} else if (hs25 == "Welding Tech IV") {
		hstotal10 = (1 + hstotal10);
		unit10 = (2 + unit10);
		sub2 = (sub2 + 1);
	}
	if (hs26 == "Intro to Business" || hs26 == "Nutrition and Wellness" || hs26 == "Nutrition Sciences" || hs26 == "Human Development I" || hs26 == "Human Development II" || hs26 == "Business Computer Applications" || hs26 == "Exploration of Information Technology" || hs26 == "Computer Science Principles I" || hs26 == "Computer Science Principles II" || hs26 == "Exploration of Media Arts I" || hs26 == "Exploration of Media Arts II" || hs26 == "Interior Design I" || hs26 == "Interior Design II" || hs26 == "Welding Tech I" || hs26 == "Welding Tech II" || hs26 == "Cybersecurity I" || hs26 == "Cybersecurity II" || hs26 == "Accounting I" || hs26 == "Business Law" || hs26 == "Media Design and Broadcasting I" || hs26 == "Media Design and Broadcasting II" || hs26 == "Welding Tech III" || hs26 == "Introduction to Building Trades" || hs26 == "Entrepreneurship" || hs26 == "Intro to Construction" || hs26 == "Intro to AFNR" || hs26 == "Fundamental Plant Science" || hs26 == "Advanced Plant Science" || hs26 == "Fundamental Animal Science" || hs26 == "Advanced Animal Science" || hs26 == "Wildlife and Fisheries" || hs26 == "Fundamental Ag Mechanical Technologies" || hs26 == "Agribusiness Management" || hs26 == "Carrer Explorations" || hs26 == "Principles of Marketing" || hs26 == "Sports Marketing Strategies" || hs26 == "Fundamental Horticulture" || hs26 == "Advanced Horticulture" || hs26 == "Agricultural Leadership and Communications") {
		hstotal10 = (0.5 + hstotal10);
		unit10 = (1 + unit10);
		sub2 = (sub2 + 0.5);
	} else if (hs26 == "Welding Tech IV") {
		hstotal10 = (1 + hstotal10);
		unit10 = (2 + unit10);
		sub2 = (sub2 + 1);
	}
	if (hs27 == "Intro to Business" || hs27 == "Nutrition and Wellness" || hs27 == "Nutrition Sciences" || hs27 == "Human Development I" || hs27 == "Human Development II" || hs27 == "Business Computer Applications" || hs27 == "Exploration of Information Technology" || hs27 == "Computer Science Principles I" || hs27 == "Computer Science Principles II" || hs27 == "Exploration of Media Arts I" || hs27 == "Exploration of Media Arts II" || hs27 == "Interior Design I" || hs27 == "Interior Design II" || hs27 == "Welding Tech I" || hs27 == "Welding Tech II" || hs27 == "Cybersecurity I" || hs27 == "Cybersecurity II" || hs27 == "Accounting I" || hs27 == "Business Law" || hs27 == "Media Design and Broadcasting I" || hs27 == "Media Design and Broadcasting II" || hs27 == "Welding Tech III" || hs27 == "Introduction to Building Trades" || hs27 == "Entrepreneurship" || hs27 == "Intro to Construction" || hs27 == "Intro to AFNR" || hs27 == "Fundamental Plant Science" || hs27 == "Advanced Plant Science" || hs27 == "Fundamental Animal Science" || hs27 == "Advanced Animal Science" || hs27 == "Wildlife and Fisheries" || hs27 == "Fundamental Ag Mechanical Technologies" || hs27 == "Agribusiness Management" || hs27 == "Carrer Explorations" || hs27 == "Principles of Marketing" || hs27 == "Sports Marketing Strategies" || hs27 == "Fundamental Horticulture" || hs27 == "Advanced Horticulture" || hs27 == "Agricultural Leadership and Communications") {
		hstotal10 = (0.5 + hstotal10);
		unit10 = (1 + unit10);
		sub2 = (sub2 + 0.5);
	} else if (hs27 == "Welding Tech IV") {
		hstotal10 = (1 + hstotal10);
		unit10 = (2 + unit10);
		sub2 = (sub2 + 1);
	}
	if (hs28 == "Intro to Business" || hs28 == "Nutrition and Wellness" || hs28 == "Nutrition Sciences" || hs28 == "Human Development I" || hs28 == "Human Development II" || hs28 == "Business Computer Applications" || hs28 == "Exploration of Information Technology" || hs28 == "Computer Science Principles I" || hs28 == "Computer Science Principles II" || hs28 == "Exploration of Media Arts I" || hs28 == "Exploration of Media Arts II" || hs28 == "Interior Design I" || hs28 == "Interior Design II" || hs28 == "Welding Tech I" || hs28 == "Welding Tech II" || hs28 == "Cybersecurity I" || hs28 == "Cybersecurity II" || hs28 == "Accounting I" || hs28 == "Business Law" || hs28 == "Media Design and Broadcasting I" || hs28 == "Media Design and Broadcasting II" || hs28 == "Welding Tech III" || hs28 == "Introduction to Building Trades" || hs28 == "Entrepreneurship" || hs28 == "Intro to Construction" || hs28 == "Intro to AFNR" || hs28 == "Fundamental Plant Science" || hs28 == "Advanced Plant Science" || hs28 == "Fundamental Animal Science" || hs28 == "Advanced Animal Science" || hs28 == "Wildlife and Fisheries" || hs28 == "Fundamental Ag Mechanical Technologies" || hs28 == "Agribusiness Management" || hs28 == "Carrer Explorations" || hs28 == "Principles of Marketing" || hs28 == "Sports Marketing Strategies" || hs28 == "Fundamental Horticulture" || hs28 == "Advanced Horticulture" || hs28 == "Agricultural Leadership and Communications") {
		hstotal10 = (0.5 + hstotal10);
		unit10 = (1 + unit10);
		sub2 = (sub2 + 0.5);
	} else if (hs28 == "Welding Tech IV") {
		hstotal10 = (1 + hstotal10);
		unit10 = (2 + unit10);
		sub2 = (sub2 + 1);
	}
	if (hs29 == "Intro to Business" || hs29 == "Nutrition and Wellness" || hs29 == "Nutrition Sciences" || hs29 == "Human Development I" || hs29 == "Human Development II" || hs29 == "Business Computer Applications" || hs29 == "Exploration of Information Technology" || hs29 == "Computer Science Principles I" || hs29 == "Computer Science Principles II" || hs29 == "Exploration of Media Arts I" || hs29 == "Exploration of Media Arts II" || hs29 == "Interior Design I" || hs29 == "Interior Design II" || hs29 == "Welding Tech I" || hs29 == "Welding Tech II" || hs29 == "Cybersecurity I" || hs29 == "Cybersecurity II" || hs29 == "Accounting I" || hs29 == "Business Law" || hs29 == "Media Design and Broadcasting I" || hs29 == "Media Design and Broadcasting II" || hs29 == "Welding Tech III" || hs29 == "Introduction to Building Trades" || hs29 == "Entrepreneurship" || hs29 == "Intro to Construction" || hs29 == "Intro to AFNR" || hs29 == "Fundamental Plant Science" || hs29 == "Advanced Plant Science" || hs29 == "Fundamental Animal Science" || hs29 == "Advanced Animal Science" || hs29 == "Wildlife and Fisheries" || hs29 == "Fundamental Ag Mechanical Technologies" || hs29 == "Agribusiness Management" || hs29 == "Carrer Explorations" || hs29 == "Principles of Marketing" || hs29 == "Sports Marketing Strategies" || hs29 == "Fundamental Horticulture" || hs29 == "Advanced Horticulture" || hs29 == "Agricultural Leadership and Communications") {
		hstotal10 = (0.5 + hstotal10);
		unit10 = (1 + unit10);
		sub2 = (sub2 + 0.5);
	} else if (hs29 == "Welding Tech IV") {
		hstotal10 = (1 + hstotal10);
		unit10 = (2 + unit10);
		sub2 = (sub2 + 1);
	}
	if (hs2a == "Intro to Business" || hs2a == "Nutrition and Wellness" || hs2a == "Nutrition Sciences" || hs2a == "Human Development I" || hs2a == "Human Development II" || hs2a == "Business Computer Applications" || hs2a == "Exploration of Information Technology" || hs2a == "Computer Science Principles I" || hs2a == "Computer Science Principles II" || hs2a == "Exploration of Media Arts I" || hs2a == "Exploration of Media Arts II" || hs2a == "Interior Design I" || hs2a == "Interior Design II" || hs2a == "Welding Tech I" || hs2a == "Welding Tech II" || hs2a == "Cybersecurity I" || hs2a == "Cybersecurity II" || hs2a == "Accounting I" || hs2a == "Business Law" || hs2a == "Media Design and Broadcasting I" || hs2a == "Media Design and Broadcasting II" || hs2a == "Welding Tech III" || hs2a == "Introduction to Building Trades" || hs2a == "Entrepreneurship" || hs2a == "Intro to Construction" || hs2a == "Intro to AFNR" || hs2a == "Fundamental Plant Science" || hs2a == "Advanced Plant Science" || hs2a == "Fundamental Animal Science" || hs2a == "Advanced Animal Science" || hs2a == "Wildlife and Fisheries" || hs2a == "Fundamental Ag Mechanical Technologies" || hs2a == "Agribusiness Management" || hs2a == "Carrer Explorations" || hs2a == "Principles of Marketing" || hs2a == "Sports Marketing Strategies" || hs2a == "Fundamental Horticulture" || hs2a == "Advanced Horticulture" || hs2a == "Agricultural Leadership and Communications") {
		hstotal10 = (0.5 + hstotal10);
		unit10 = (1 + unit10);
		sub2 = (sub2 + 0.5);
	} else if (hs2a == "Welding Tech IV") {
		hstotal10 = (1 + hstotal10);
		unit10 = (2 + unit10);
		sub2 = (sub2 + 1);
	}
	if (hs2b == "Intro to Business" || hs2b == "Nutrition and Wellness" || hs2b == "Nutrition Sciences" || hs2b == "Human Development I" || hs2b == "Human Development II" || hs2b == "Business Computer Applications" || hs2b == "Exploration of Information Technology" || hs2b == "Computer Science Principles I" || hs2b == "Computer Science Principles II" || hs2b == "Exploration of Media Arts I" || hs2b == "Exploration of Media Arts II" || hs2b == "Interior Design I" || hs2b == "Interior Design II" || hs2b == "Welding Tech I" || hs2b == "Welding Tech II" || hs2b == "Cybersecurity I" || hs2b == "Cybersecurity II" || hs2b == "Accounting I" || hs2b == "Business Law" || hs2b == "Media Design and Broadcasting I" || hs2b == "Media Design and Broadcasting II" || hs2b == "Welding Tech III" || hs2b == "Introduction to Building Trades" || hs2b == "Entrepreneurship" || hs2b == "Medical Interventions" || hs2b == "Intro to Construction" || hs2b == "Welding Tech V" || hs2b == "Intro to AFNR" || hs2b == "Fundamental Plant Science" || hs2b == "Advanced Plant Science" || hs2b == "Fundamental Animal Science" || hs2b == "Advanced Animal Science" || hs2b == "Wildlife and Fisheries" || hs2b == "Fundamental Ag Mechanical Technologies" || hs2b == "Agribusiness Management" || hs2b == "Carrer Explorations" || hs2b == "Principles of Marketing" || hs2b == "Sports Marketing Strategies" || hs2b == "Fundamental Horticulture" || hs2b == "Advanced Horticulture" || hs2b == "Agricultural Leadership and Communications" || hs2b == "Welding VI" || hs2b == "Residential Construction") {
		hstotal11 = (0.5 + hstotal11);
		unit11 = (1 + unit11);
		sub2 = (sub2 + 0.5);
	} else if (hs2b == "Human Body Systems" || hs2b == "Welding Tech IV") {
		hstotal11 = (1 + hstotal11);
		unit11 = (2 + unit11);
		sub2 = (sub2 + 1);
	}
	if (hs2c == "Intro to Business" || hs2c == "Nutrition and Wellness" || hs2c == "Nutrition Sciences" || hs2c == "Human Development I" || hs2c == "Human Development II" || hs2c == "Business Computer Applications" || hs2c == "Exploration of Information Technology" || hs2c == "Computer Science Principles I" || hs2c == "Computer Science Principles II" || hs2c == "Exploration of Media Arts I" || hs2c == "Exploration of Media Arts II" || hs2c == "Interior Design I" || hs2c == "Interior Design II" || hs2c == "Welding Tech I" || hs2c == "Welding Tech II" || hs2c == "Cybersecurity I" || hs2c == "Cybersecurity II" || hs2c == "Accounting I" || hs2c == "Business Law" || hs2c == "Media Design and Broadcasting I" || hs2c == "Media Design and Broadcasting II" || hs2c == "Welding Tech III" || hs2c == "Introduction to Building Trades" || hs2c == "Entrepreneurship" || hs2c == "Medical Interventions" || hs2c == "Intro to Construction" || hs2c == "Welding Tech V" || hs2c == "Intro to AFNR" || hs2c == "Fundamental Plant Science" || hs2c == "Advanced Plant Science" || hs2c == "Fundamental Animal Science" || hs2c == "Advanced Animal Science" || hs2c == "Wildlife and Fisheries" || hs2c == "Fundamental Ag Mechanical Technologies" || hs2c == "Agribusiness Management" || hs2c == "Carrer Explorations" || hs2c == "Principles of Marketing" || hs2c == "Sports Marketing Strategies" || hs2c == "Fundamental Horticulture" || hs2c == "Advanced Horticulture" || hs2c == "Agricultural Leadership and Communications" || hs2c == "Welding VI" || hs2c == "Residential Construction") {
		hstotal11 = (0.5 + hstotal11);
		unit11 = (1 + unit11);
		sub2 = (sub2 + 0.5);
	} else if (hs2c == "Human Body Systems" || hs2c == "Welding Tech IV") {
		hstotal11 = (1 + hstotal11);
		unit11 = (2 + unit11);
		sub2 = (sub2 + 1);
	}
	if (hs2d == "Intro to Business" || hs2d == "Nutrition and Wellness" || hs2d == "Nutrition Sciences" || hs2d == "Human Development I" || hs2d == "Human Development II" || hs2d == "Business Computer Applications" || hs2d == "Exploration of Information Technology" || hs2d == "Computer Science Principles I" || hs2d == "Computer Science Principles II" || hs2d == "Exploration of Media Arts I" || hs2d == "Exploration of Media Arts II" || hs2d == "Interior Design I" || hs2d == "Interior Design II" || hs2d == "Welding Tech I" || hs2d == "Welding Tech II" || hs2d == "Cybersecurity I" || hs2d == "Cybersecurity II" || hs2d == "Accounting I" || hs2d == "Business Law" || hs2d == "Media Design and Broadcasting I" || hs2d == "Media Design and Broadcasting II" || hs2d == "Welding Tech III" || hs2d == "Introduction to Building Trades" || hs2d == "Entrepreneurship" || hs2d == "Medical Interventions" || hs2d == "Intro to Construction" || hs2d == "Welding Tech V" || hs2d == "Intro to AFNR" || hs2d == "Fundamental Plant Science" || hs2d == "Advanced Plant Science" || hs2d == "Fundamental Animal Science" || hs2d == "Advanced Animal Science" || hs2d == "Wildlife and Fisheries" || hs2d == "Fundamental Ag Mechanical Technologies" || hs2d == "Agribusiness Management" || hs2d == "Carrer Explorations" || hs2d == "Principles of Marketing" || hs2d == "Sports Marketing Strategies" || hs2d == "Fundamental Horticulture" || hs2d == "Advanced Horticulture" || hs2d == "Agricultural Leadership and Communications" || hs2d == "Welding VI" || hs2d == "Residential Construction") {
		hstotal11 = (0.5 + hstotal11);
		unit11 = (1 + unit11);
		sub2 = (sub2 + 0.5);
	} else if (hs2d == "Human Body Systems" || hs2d == "Welding Tech IV") {
		hstotal11 = (1 + hstotal11);
		unit11 = (2 + unit11);
		sub2 = (sub2 + 1);
	}
	if (hs2e == "Intro to Business" || hs2e == "Nutrition and Wellness" || hs2e == "Nutrition Sciences" || hs2e == "Human Development I" || hs2e == "Human Development II" || hs2e == "Business Computer Applications" || hs2e == "Exploration of Information Technology" || hs2e == "Computer Science Principles I" || hs2e == "Computer Science Principles II" || hs2e == "Exploration of Media Arts I" || hs2e == "Exploration of Media Arts II" || hs2e == "Interior Design I" || hs2e == "Interior Design II" || hs2e == "Welding Tech I" || hs2e == "Welding Tech II" || hs2e == "Cybersecurity I" || hs2e == "Cybersecurity II" || hs2e == "Accounting I" || hs2e == "Business Law" || hs2e == "Media Design and Broadcasting I" || hs2e == "Media Design and Broadcasting II" || hs2e == "Welding Tech III" || hs2e == "Introduction to Building Trades" || hs2e == "Entrepreneurship" || hs2e == "Medical Interventions" || hs2e == "Intro to Construction" || hs2e == "Welding Tech V" || hs2e == "Intro to AFNR" || hs2e == "Fundamental Plant Science" || hs2e == "Advanced Plant Science" || hs2e == "Fundamental Animal Science" || hs2e == "Advanced Animal Science" || hs2e == "Wildlife and Fisheries" || hs2e == "Fundamental Ag Mechanical Technologies" || hs2e == "Agribusiness Management" || hs2e == "Carrer Explorations" || hs2e == "Principles of Marketing" || hs2e == "Sports Marketing Strategies" || hs2e == "Fundamental Horticulture" || hs2e == "Advanced Horticulture" || hs2e == "Agricultural Leadership and Communications" || hs2e == "Welding VI" || hs2e == "Residential Construction") {
		hstotal11 = (0.5 + hstotal11);
		unit11 = (1 + unit11);
		sub2 = (sub2 + 0.5);
	} else if (hs2e == "Human Body Systems" || hs2e == "Welding Tech IV") {
		hstotal11 = (1 + hstotal11);
		unit11 = (2 + unit11);
		sub2 = (sub2 + 1);
	}
	if (hs2f == "Intro to Business" || hs2f == "Nutrition and Wellness" || hs2f == "Nutrition Sciences" || hs2f == "Human Development I" || hs2f == "Human Development II" || hs2f == "Business Computer Applications" || hs2f == "Exploration of Information Technology" || hs2f == "Computer Science Principles I" || hs2f == "Computer Science Principles II" || hs2f == "Exploration of Media Arts I" || hs2f == "Exploration of Media Arts II" || hs2f == "Interior Design I" || hs2f == "Interior Design II" || hs2f == "Welding Tech I" || hs2f == "Welding Tech II" || hs2f == "Cybersecurity I" || hs2f == "Cybersecurity II" || hs2f == "Accounting I" || hs2f == "Business Law" || hs2f == "Media Design and Broadcasting I" || hs2f == "Media Design and Broadcasting II" || hs2f == "Welding Tech III" || hs2f == "Introduction to Building Trades" || hs2f == "Entrepreneurship" || hs2f == "Medical Interventions" || hs2f == "Intro to Construction" || hs2f == "Welding Tech V" || hs2f == "Intro to AFNR" || hs2f == "Fundamental Plant Science" || hs2f == "Advanced Plant Science" || hs2f == "Fundamental Animal Science" || hs2f == "Advanced Animal Science" || hs2f == "Wildlife and Fisheries" || hs2f == "Fundamental Ag Mechanical Technologies" || hs2f == "Agribusiness Management" || hs2f == "Carrer Explorations" || hs2f == "Principles of Marketing" || hs2f == "Sports Marketing Strategies" || hs2f == "Fundamental Horticulture" || hs2f == "Advanced Horticulture" || hs2f == "Agricultural Leadership and Communications" || hs2f == "Welding VI" || hs2f == "Residential Construction") {
		hstotal11 = (0.5 + hstotal11);
		unit11 = (1 + unit11);
		sub2 = (sub2 + 0.5);
	} else if (hs2f == "Human Body Systems" || hs2f == "Welding Tech IV") {
		hstotal11 = (1 + hstotal11);
		unit11 = (2 + unit11);
		sub2 = (sub2 + 1);
	}
	if (hs2g == "Intro to Business" || hs2g == "Nutrition and Wellness" || hs2g == "Nutrition Sciences" || hs2g == "Human Development I" || hs2g == "Human Development II" || hs2g == "Business Computer Applications" || hs2g == "Exploration of Information Technology" || hs2g == "Computer Science Principles I" || hs2g == "Computer Science Principles II" || hs2g == "Exploration of Media Arts I" || hs2g == "Exploration of Media Arts II" || hs2g == "Interior Design I" || hs2g == "Interior Design II" || hs2g == "Welding Tech I" || hs2g == "Welding Tech II" || hs2g == "Cybersecurity I" || hs2g == "Cybersecurity II" || hs2g == "Accounting I" || hs2g == "Business Law" || hs2g == "Media Design and Broadcasting I" || hs2g == "Media Design and Broadcasting II" || hs2g == "Welding Tech III" || hs2g == "Introduction to Building Trades" || hs2g == "Entrepreneurship" || hs2g == "Medical Interventions" || hs2g == "Intro to Construction" || hs2g == "Welding Tech V" || hs2g == "Intro to AFNR" || hs2g == "Fundamental Plant Science" || hs2g == "Advanced Plant Science" || hs2g == "Fundamental Animal Science" || hs2g == "Advanced Animal Science" || hs2g == "Wildlife and Fisheries" || hs2g == "Fundamental Ag Mechanical Technologies" || hs2g == "Agribusiness Management" || hs2g == "Carrer Explorations" || hs2g == "Principles of Marketing" || hs2g == "Sports Marketing Strategies" || hs2g == "Fundamental Horticulture" || hs2g == "Advanced Horticulture" || hs2g == "Agricultural Leadership and Communications" || hs2g == "Welding VI" || hs2g == "Residential Construction") {
		hstotal11 = (0.5 + hstotal11);
		unit11 = (1 + unit11);
		sub2 = (sub2 + 0.5);
	} else if (hs2g == "Human Body Systems" || hs2g == "Welding Tech IV") {
		hstotal11 = (1 + hstotal11);
		unit11 = (2 + unit11);
		sub2 = (sub2 + 1);
	}
	if (hs2h == "Intro to Business" || hs2h == "Nutrition and Wellness" || hs2h == "Nutrition Sciences" || hs2h == "Human Development I" || hs2h == "Human Development II" || hs2h == "Business Computer Applications" || hs2h == "Exploration of Information Technology" || hs2h == "Computer Science Principles I" || hs2h == "Computer Science Principles II" || hs2h == "Exploration of Media Arts I" || hs2h == "Exploration of Media Arts II" || hs2h == "Interior Design I" || hs2h == "Interior Design II" || hs2h == "Welding Tech I" || hs2h == "Welding Tech II" || hs2h == "Cybersecurity I" || hs2h == "Cybersecurity II" || hs2h == "Accounting I" || hs2h == "Business Law" || hs2h == "Media Design and Broadcasting I" || hs2h == "Media Design and Broadcasting II" || hs2h == "Welding Tech III" || hs2h == "Introduction to Building Trades" || hs2h == "Entrepreneurship" || hs2h == "Medical Interventions" || hs2h == "Intro to Construction" || hs2h == "Welding Tech V" || hs2h == "Intro to AFNR" || hs2h == "Fundamental Plant Science" || hs2h == "Advanced Plant Science" || hs2h == "Fundamental Animal Science" || hs2h == "Advanced Animal Science" || hs2h == "Wildlife and Fisheries" || hs2h == "Fundamental Ag Mechanical Technologies" || hs2h == "Agribusiness Management" || hs2h == "Carrer Explorations" || hs2h == "Principles of Marketing" || hs2h == "Sports Marketing Strategies" || hs2h == "Fundamental Horticulture" || hs2h == "Advanced Horticulture" || hs2h == "Agricultural Leadership and Communications" || hs2h == "Welding VI" || hs2h == "Residential Construction") {
		hstotal12 = (0.5 + hstotal12);
		unit12 = (1 + unit12);
		sub2 = (sub2 + 0.5);
	} else if (hs2h == "Human Body Systems" || hs2h == "Welding Tech IV") {
		hstotal12 = (1 + hstotal12);
		unit12 = (2 + unit12);
		sub2 = (sub2 + 1);
	}
	if (hs2i == "Intro to Business" || hs2i == "Nutrition and Wellness" || hs2i == "Nutrition Sciences" || hs2i == "Human Development I" || hs2i == "Human Development II" || hs2i == "Business Computer Applications" || hs2i == "Exploration of Information Technology" || hs2i == "Computer Science Principles I" || hs2i == "Computer Science Principles II" || hs2i == "Exploration of Media Arts I" || hs2i == "Exploration of Media Arts II" || hs2i == "Interior Design I" || hs2i == "Interior Design II" || hs2i == "Welding Tech I" || hs2i == "Welding Tech II" || hs2i == "Cybersecurity I" || hs2i == "Cybersecurity II" || hs2i == "Accounting I" || hs2i == "Business Law" || hs2i == "Media Design and Broadcasting I" || hs2i == "Media Design and Broadcasting II" || hs2i == "Welding Tech III" || hs2i == "Introduction to Building Trades" || hs2i == "Entrepreneurship" || hs2i == "Medical Interventions" || hs2i == "Intro to Construction" || hs2i == "Welding Tech V" || hs2i == "Intro to AFNR" || hs2i == "Fundamental Plant Science" || hs2i == "Advanced Plant Science" || hs2i == "Fundamental Animal Science" || hs2i == "Advanced Animal Science" || hs2i == "Wildlife and Fisheries" || hs2i == "Fundamental Ag Mechanical Technologies" || hs2i == "Agribusiness Management" || hs2i == "Carrer Explorations" || hs2i == "Principles of Marketing" || hs2i == "Sports Marketing Strategies" || hs2i == "Fundamental Horticulture" || hs2i == "Advanced Horticulture" || hs2i == "Agricultural Leadership and Communications" || hs2i == "Welding VI" || hs2i == "Residential Construction") {
		hstotal12 = (0.5 + hstotal12);
		unit12 = (1 + unit12);
		sub2 = (sub2 + 0.5);
	} else if (hs2i == "Human Body Systems" || hs2i == "Welding Tech IV") {
		hstotal12 = (1 + hstotal12);
		unit12 = (2 + unit12);
		sub2 = (sub2 + 1);
	}
	if (hs2j == "Intro to Business" || hs2j == "Nutrition and Wellness" || hs2j == "Nutrition Sciences" || hs2j == "Human Development I" || hs2j == "Human Development II" || hs2j == "Business Computer Applications" || hs2j == "Exploration of Information Technology" || hs2j == "Computer Science Principles I" || hs2j == "Computer Science Principles II" || hs2j == "Exploration of Media Arts I" || hs2j == "Exploration of Media Arts II" || hs2j == "Interior Design I" || hs2j == "Interior Design II" || hs2j == "Welding Tech I" || hs2j == "Welding Tech II" || hs2j == "Cybersecurity I" || hs2j == "Cybersecurity II" || hs2j == "Accounting I" || hs2j == "Business Law" || hs2j == "Media Design and Broadcasting I" || hs2j == "Media Design and Broadcasting II" || hs2j == "Welding Tech III" || hs2j == "Introduction to Building Trades" || hs2j == "Entrepreneurship" || hs2j == "Medical Interventions" || hs2j == "Intro to Construction" || hs2j == "Welding Tech V" || hs2j == "Intro to AFNR" || hs2j == "Fundamental Plant Science" || hs2j == "Advanced Plant Science" || hs2j == "Fundamental Animal Science" || hs2j == "Advanced Animal Science" || hs2j == "Wildlife and Fisheries" || hs2j == "Fundamental Ag Mechanical Technologies" || hs2j == "Agribusiness Management" || hs2j == "Carrer Explorations" || hs2j == "Principles of Marketing" || hs2j == "Sports Marketing Strategies" || hs2j == "Fundamental Horticulture" || hs2j == "Advanced Horticulture" || hs2j == "Agricultural Leadership and Communications" || hs2j == "Welding VI" || hs2j == "Residential Construction") {
		hstotal12 = (0.5 + hstotal12);
		unit12 = (1 + unit12);
		sub2 = (sub2 + 0.5);
	} else if (hs2j == "Human Body Systems" || hs2j == "Welding Tech IV") {
		hstotal12 = (1 + hstotal12);
		unit12 = (2 + unit12);
		sub2 = (sub2 + 1);
	}
	if (hs2k == "Intro to Business" || hs2k == "Nutrition and Wellness" || hs2k == "Nutrition Sciences" || hs2k == "Human Development I" || hs2k == "Human Development II" || hs2k == "Business Computer Applications" || hs2k == "Exploration of Information Technology" || hs2k == "Computer Science Principles I" || hs2k == "Computer Science Principles II" || hs2k == "Exploration of Media Arts I" || hs2k == "Exploration of Media Arts II" || hs2k == "Interior Design I" || hs2k == "Interior Design II" || hs2k == "Welding Tech I" || hs2k == "Welding Tech II" || hs2k == "Cybersecurity I" || hs2k == "Cybersecurity II" || hs2k == "Accounting I" || hs2k == "Business Law" || hs2k == "Media Design and Broadcasting I" || hs2k == "Media Design and Broadcasting II" || hs2k == "Welding Tech III" || hs2k == "Introduction to Building Trades" || hs2k == "Entrepreneurship" || hs2k == "Medical Interventions" || hs2k == "Intro to Construction" || hs2k == "Welding Tech V" || hs2k == "Intro to AFNR" || hs2k == "Fundamental Plant Science" || hs2k == "Advanced Plant Science" || hs2k == "Fundamental Animal Science" || hs2k == "Advanced Animal Science" || hs2k == "Wildlife and Fisheries" || hs2k == "Fundamental Ag Mechanical Technologies" || hs2k == "Agribusiness Management" || hs2k == "Carrer Explorations" || hs2k == "Principles of Marketing" || hs2k == "Sports Marketing Strategies" || hs2k == "Fundamental Horticulture" || hs2k == "Advanced Horticulture" || hs2k == "Agricultural Leadership and Communications" || hs2k == "Welding VI" || hs2k == "Residential Construction") {
		hstotal12 = (0.5 + hstotal12);
		unit12 = (1 + unit12);
		sub2 = (sub2 + 0.5);
	} else if (hs2k == "Human Body Systems" || hs2k == "Welding Tech IV") {
		hstotal12 = (1 + hstotal12);
		unit12 = (2 + unit12);
		sub2 = (sub2 + 1);
	}
	if (hs2l == "Intro to Business" || hs2l == "Nutrition and Wellness" || hs2l == "Nutrition Sciences" || hs2l == "Human Development I" || hs2l == "Human Development II" || hs2l == "Business Computer Applications" || hs2l == "Exploration of Information Technology" || hs2l == "Computer Science Principles I" || hs2l == "Computer Science Principles II" || hs2l == "Exploration of Media Arts I" || hs2l == "Exploration of Media Arts II" || hs2l == "Interior Design I" || hs2l == "Interior Design II" || hs2l == "Welding Tech I" || hs2l == "Welding Tech II" || hs2l == "Cybersecurity I" || hs2l == "Cybersecurity II" || hs2l == "Accounting I" || hs2l == "Business Law" || hs2l == "Media Design and Broadcasting I" || hs2l == "Media Design and Broadcasting II" || hs2l == "Welding Tech III" || hs2l == "Introduction to Building Trades" || hs2l == "Entrepreneurship" || hs2l == "Medical Interventions" || hs2l == "Intro to Construction" || hs2l == "Welding Tech V" || hs2l == "Intro to AFNR" || hs2l == "Fundamental Plant Science" || hs2l == "Advanced Plant Science" || hs2l == "Fundamental Animal Science" || hs2l == "Advanced Animal Science" || hs2l == "Wildlife and Fisheries" || hs2l == "Fundamental Ag Mechanical Technologies" || hs2l == "Agribusiness Management" || hs2l == "Carrer Explorations" || hs2l == "Principles of Marketing" || hs2l == "Sports Marketing Strategies" || hs2l == "Fundamental Horticulture" || hs2l == "Advanced Horticulture" || hs2l == "Agricultural Leadership and Communications" || hs2l == "Welding VI" || hs2l == "Residential Construction") {
		hstotal12 = (0.5 + hstotal12);
		unit12 = (1 + unit12);
		sub2 = (sub2 + 0.5);
	} else if (hs2l == "Human Body Systems" || hs2l == "Welding Tech IV") {
		hstotal12 = (1 + hstotal12);
		unit12 = (2 + unit12);
		sub2 = (sub2 + 1);
	}
	if (hs2m == "Intro to Business" || hs2m == "Nutrition and Wellness" || hs2m == "Nutrition Sciences" || hs2m == "Human Development I" || hs2m == "Human Development II" || hs2m == "Business Computer Applications" || hs2m == "Exploration of Information Technology" || hs2m == "Computer Science Principles I" || hs2m == "Computer Science Principles II" || hs2m == "Exploration of Media Arts I" || hs2m == "Exploration of Media Arts II" || hs2m == "Interior Design I" || hs2m == "Interior Design II" || hs2m == "Welding Tech I" || hs2m == "Welding Tech II" || hs2m == "Cybersecurity I" || hs2m == "Cybersecurity II" || hs2m == "Accounting I" || hs2m == "Business Law" || hs2m == "Media Design and Broadcasting I" || hs2m == "Media Design and Broadcasting II" || hs2m == "Welding Tech III" || hs2m == "Introduction to Building Trades" || hs2m == "Entrepreneurship" || hs2m == "Medical Interventions" || hs2m == "Intro to Construction" || hs2m == "Welding Tech V" || hs2m == "Intro to AFNR" || hs2m == "Fundamental Plant Science" || hs2m == "Advanced Plant Science" || hs2m == "Fundamental Animal Science" || hs2m == "Advanced Animal Science" || hs2m == "Wildlife and Fisheries" || hs2m == "Fundamental Ag Mechanical Technologies" || hs2m == "Agribusiness Management" || hs2m == "Carrer Explorations" || hs2m == "Principles of Marketing" || hs2m == "Sports Marketing Strategies" || hs2m == "Fundamental Horticulture" || hs2m == "Advanced Horticulture" || hs2m == "Agricultural Leadership and Communications" || hs2m == "Welding VI" || hs2m == "Residential Construction") {
		hstotal12 = (0.5 + hstotal12);
		unit12 = (1 + unit12);
		sub2 = (sub2 + 0.5);
	} else if (hs2m == "Human Body Systems" || hs2m == "Welding Tech IV") {
		hstotal12 = (1 + hstotal12);
		unit12 = (2 + unit12);
		sub2 = (sub2 + 1);
	}
	if (hs1 == "Intro to Journalism") {
		hstotal9 = (1 + hstotal9);
		unit9 = (2 + unit9);
		sub2 = (sub2 + 1);
	} else if (hs1 == "Study Hall") {
		unit9 = (1 + unit9);
	}
	if (hs10 == "Intro to Journalism") {
		hstotal9 = (1 + hstotal9);
		unit9 = (2 + unit9);
		sub2 = (sub2 + 1);
	} else if (hs10 == "Study Hall") {
		unit9 = (1 + unit9);
	}
	if (hs11 == "Intro to Journalism" || hs11 == "Yearbook/Journalism") {
		hstotal10 = (1 + hstotal10);
		unit10 = (2 + unit10);
		sub2 = (sub2 + 1);
	} else if (hs11 == "Standardized Test Prep") {
		hstotal10 = (0.5 + hstotal10);
		unit10 = (1 + unit10);
		sub2 = (sub2 + 0.5);
	} else if (hs11 == "Study Hall") {
		unit10 = (1 + unit10);
	}
	if (hs12 == "Intro to Journalism" || hs12 == "Yearbook/Journalism") {
		hstotal10 = (1 + hstotal10);
		unit10 = (2 + unit10);
		sub2 = (sub2 + 1);
	} else if (hs12 == "Standardized Test Prep") {
		hstotal10 = (0.5 + hstotal10);
		unit10 = (1 + unit10);
		sub2 = (sub2 + 0.5);
	} else if (hs12 == "Study Hall") {
		unit10 = (1 + unit10);
	}
	if (hs13 == "Intro to Journalism" || hs13 == "Yearbook/Journalism") {
		hstotal11 = (1 + hstotal11);
		unit11 = (2 + unit11);
		sub2 = (sub2 + 1);
	} else if (hs13 == "Mentoring" || hs13 == "Personal Finance" || hs13 == "Standardized Test Prep") {
		hstotal11 = (0.5 + hstotal11);
		unit11 = (1 + unit11);
		sub2 = (sub2 + 0.5);
	} else if (hs13 == "Study Hall") {
		unit11 = (1 + unit11);
	}
	if (hs14 == "Intro to Journalism" || hs14 == "Yearbook/Journalism") {
		hstotal11 = (1 + hstotal11);
		unit11 = (2 + unit11);
		sub2 = (sub2 + 1);
	} else if (hs14 == "Mentoring" || hs14 == "Personal Finance" || hs14 == "Standardized Test Prep") {
		hstotal11 = (0.5 + hstotal11);
		unit11 = (1 + unit11);
		sub2 = (sub2 + 0.5);
	} else if (hs12 == "Study Hall") {
		unit11 = (1 + unit11);
	}
	if (hs15 == "Intro to Journalism" || hs15 == "Yearbook/Journalism" || hs15 == "Youth Internships") {
		hstotal12 = (1 + hstotal12);
		unit12 = (2 + unit12);
		sub2 = (sub2 + 1);
	} else if (hs15 == "Mentoring" || hs15 == "Personal Finance") {
		hstotal12 = (0.5 + hstotal12);
		unit12 = (1 + unit12);
		sub2 = (sub2 + 0.5);
	} else if (hs15 == "Study Hall") {
		unit12 = (1 + unit12);
	} else if (hs15 == "Senior Experience") {
		hstotal12 = (1 + hstotal12);
		sub2 = (sub2 + 1);
	}
	if (hs16 == "Intro to Journalism" || hs16 == "Yearbook/Journalism" || hs16 == "Youth Internships") {
		hstotal12 = (1 + hstotal12);
		unit12 = (2 + unit12);
		sub2 = (sub2 + 1);
	} else if (hs16 == "Mentoring" || hs16 == "Personal Finance") {
		hstotal12 = (0.5 + hstotal12);
		unit12 = (1 + unit12);
		sub2 = (sub2 + 0.5);
	} else if (hs16 == "Study Hall") {
		unit12 = (1 + unit12);
	} else if (hs16 == "Senior Experience") {
		hstotal12 = (1 + hstotal12);
		sub2 = (sub2 + 1);
	}
	
	if (f00 == "8th grade") {
		if (f01 == "CTE / Other") {
			if (f03 == "0.25 hs credits") {
				total += 0.25;
				sub2 += 0.25;
			} else if (f03 == "0.5 hs credits") {
				total += 0.5;
				sub2 += 0.5;
			} else if (f03 == "0.75 hs credits") {
				total += 0.75;
				sub2 += 0.75;
			} else if (f03 == "1 hs credit") {
				total++;
				sub2++;
			}
		}
		if (f01 == "Language") {
			if (f03 == "0.25 hs credits") {
				total += 0.25;
				sub4 += 0.25;
			} else if (f03 == "0.5 hs credits") {
				total += 0.5;
				sub4 += 0.5;
			} else if (f03 == "0.75 hs credits") {
				total += 0.75;
				sub4 += 0.75;
			} else if (f03 == "1 hs credit") {
				total++;
				sub4++;
			}
		}
		if (f01 == "Arts") {
			if (f03 == "0.25 hs credits") {
				total += 0.25;
				sub5 += 0.25;
			} else if (f03 == "0.5 hs credits") {
				total += 0.5;
				sub5 += 0.5;
			} else if (f03 == "0.75 hs credits") {
				hstotal9 += 0.75;
				sub5 += 0.75;
			} else if (f03 == "1 hs credit") {
				total++;
				sub5++;
			}
		}
		if (f04 == "3 dual credits") {
			dctotal11 += 3;
		} else if (f04 == "4 dual credits") {
			dctotal11 += 4;
		}
	}
	if (f00 == "9th grade") {
		if (f01 == "CTE / Other") {
			if (f03 == "0.25 hs credits") {
				hstotal9 += 0.25;
				sub2 += 0.25;
			} else if (f03 == "0.5 hs credits") {
				hstotal9 += 0.5;
				sub2 += 0.5;
			} else if (f03 == "0.75 hs credits") {
				hstotal9 += 0.75;
				sub2 += 0.75;
			} else if (f03 == "1 hs credit") {
				hstotal9++;
				sub2++;
			}
		}
		if (f01 == "Language") {
			if (f03 == "0.25 hs credits") {
				hstotal9 += 0.25;
				sub4 += 0.25;
			} else if (f03 == "0.5 hs credits") {
				hstotal9 += 0.5;
				sub4 += 0.5;
			} else if (f03 == "0.75 hs credits") {
				hstotal9 += 0.75;
				sub4 += 0.75;
			} else if (f03 == "1 hs credit") {
				hstotal9++;
				sub4++;
			}
		}
		if (f01 == "Arts") {
			if (f03 == "0.25 hs credits") {
				hstotal9 += 0.25;
				sub5 += 0.25;
			} else if (f03 == "0.5 hs credits") {
				hstotal9 += 0.5;
				sub5 += 0.5;
			} else if (f03 == "0.75 hs credits") {
				hstotal9 += 0.75;
				sub5 += 0.75;
			} else if (f03 == "1 hs credit") {
				hstotal9++;
				sub5++;
			}
		}
		if (f04 == "3 dual credits") {
			dctotal11 += 3;
		} else if (f04 == "4 dual credits") {
			dctotal11 += 4;
		}
		if (f02 == "1 unit") {
			unit9++;
		} else if (f02 == "2 units") {
			unit9 += 2;
		}
	}
	if (f00 == "10th grade") {
		if (f01 == "CTE / Other") {
			if (f03 == "0.25 hs credits") {
				hstotal10 += 0.25;
				sub2 += 0.25;
			} else if (f03 == "0.5 hs credits") {
				hstotal10 += 0.5;
				sub2 += 0.5;
			} else if (f03 == "0.75 hs credits") {
				hstotal10 += 0.75;
				sub2 += 0.75;
			} else if (f03 == "1 hs credit") {
				hstotal10++;
				sub2++;
			}
		}
		if (f01 == "Language") {
			if (f03 == "0.25 hs credits") {
				hstotal10 += 0.25;
				sub4 += 0.25;
			} else if (f03 == "0.5 hs credits") {
				hstotal10 += 0.5;
				sub4 += 0.5;
			} else if (f03 == "0.75 hs credits") {
				hstotal10 += 0.75;
				sub4 += 0.75;
			} else if (f03 == "1 hs credit") {
				hstotal10++;
				sub4++;
			}
		}
		if (f01 == "Arts") {
			if (f03 == "0.25 hs credits") {
				hstotal10 += 0.25;
				sub5 += 0.25;
			} else if (f03 == "0.5 hs credits") {
				hstotal10 += 0.5;
				sub5 += 0.5;
			} else if (f03 == "0.75 hs credits") {
				hstotal10 += 0.75;
				sub5 += 0.75;
			} else if (f03 == "1 hs credit") {
				hstotal10++;
				sub5++;
			}
		}
		if (f04 == "3 dual credits") {
			dctotal11 += 3;
		} else if (f04 == "4 dual credits") {
			dctotal11 += 4;
		}
		if (f02 == "1 unit") {
			unit10++;
		} else if (f02 == "2 units") {
			unit10 += 2;
		}
	}
	if (f00 == "11th grade") {
		if (f01 == "CTE / Other") {
			if (f03 == "0.25 hs credits") {
				hstotal11 += 0.25;
				sub2 += 0.25;
			} else if (f03 == "0.5 hs credits") {
				hstotal11 += 0.5;
				sub2 += 0.5;
			} else if (f03 == "0.75 hs credits") {
				hstotal11 += 0.75;
				sub2 += 0.75;
			} else if (f03 == "1 hs credit") {
				hstotal11++;
				sub2++;
			}
		}
		if (f01 == "Language") {
			if (f03 == "0.25 hs credits") {
				hstotal11 += 0.25;
				sub4 += 0.25;
			} else if (f03 == "0.5 hs credits") {
				hstotal11 += 0.5;
				sub4 += 0.5;
			} else if (f03 == "0.75 hs credits") {
				hstotal11 += 0.75;
				sub4 += 0.75;
			} else if (f03 == "1 hs credit") {
				hstotal11++;
				sub4++;
			}
		}
		if (f01 == "Arts") {
			if (f03 == "0.25 hs credits") {
				hstotal11 += 0.25;
				sub5 += 0.25;
			} else if (f03 == "0.5 hs credits") {
				hstotal11 += 0.5;
				sub5 += 0.5;
			} else if (f03 == "0.75 hs credits") {
				hstotal11 += 0.75;
				sub5 += 0.75;
			} else if (f03 == "1 hs credit") {
				hstotal11++;
				sub5++;
			}
		}
		if (f04 == "3 dual credits") {
			dctotal11 += 3;
		} else if (f04 == "4 dual credits") {
			dctotal11 += 4;
		}
		if (f02 == "1 unit") {
			unit11++;
		} else if (f02 == "2 units") {
			unit11 += 2;
		}
	}
	if (f00 == "12th grade") {
		if (f01 == "CTE / Other") {
			if (f03 == "0.25 hs credits") {
				hstotal10 += 0.25;
				sub2 += 0.25;
			} else if (f03 == "0.5 hs credits") {
				hstotal10 += 0.5;
				sub2 += 0.5;
			} else if (f03 == "0.75 hs credits") {
				hstotal10 += 0.75;
				sub2 += 0.75;
			} else if (f03 == "1 hs credit") {
				hstotal10++;
				sub2++;
			}
		}
		if (f01 == "Language") {
			if (f03 == "0.25 hs credits") {
				hstotal10 += 0.25;
				sub4 += 0.25;
			} else if (f03 == "0.5 hs credits") {
				hstotal10 += 0.5;
				sub4 += 0.5;
			} else if (f03 == "0.75 hs credits") {
				hstotal10 += 0.75;
				sub4 += 0.75;
			} else if (f03 == "1 hs credit") {
				hstotal10++;
				sub4++;
			}
		}
		if (f01 == "Arts") {
			if (f03 == "0.25 hs credits") {
				hstotal12 += 0.25;
				sub5 += 0.25;
			} else if (f03 == "0.5 hs credits") {
				hstotal12 += 0.5;
				sub5 += 0.5;
			} else if (f03 == "0.75 hs credits") {
				hstotal12 += 0.75;
				sub5 += 0.75;
			} else if (f03 == "1 hs credit") {
				hstotal12++;
				sub5++;
			}
		}
		if (f04 == "3 dual credits") {
			dctotal12 += 3;
		} else if (f04 == "4 dual credits") {
			dctotal12 += 4;
		}
		if (f02 == "1 unit") {
			unit12++;
		} else if (f02 == "2 units") {
			unit12 += 2;
		}
	}
	if (f30 == "8th grade") {
		if (f31 == "CTE / Other") {
			if (f33 == "0.25 hs credits") {
				total += 0.25;
				sub2 += 0.25;
			} else if (f33 == "0.5 hs credits") {
				total += 0.5;
				sub2 += 0.5;
			} else if (f33 == "0.75 hs credits") {
				total += 0.75;
				sub2 += 0.75;
			} else if (f33 == "1 hs credit") {
				total++;
				sub2++;
			}
		}
		if (f31 == "Language") {
			if (f33 == "0.25 hs credits") {
				total += 0.25;
				sub4 += 0.25;
			} else if (f33 == "0.5 hs credits") {
				total += 0.5;
				sub4 += 0.5;
			} else if (f33 == "0.75 hs credits") {
				total += 0.75;
				sub4 += 0.75;
			} else if (f33 == "1 hs credit") {
				total++;
				sub4++;
			}
		}
		if (f31 == "Arts") {
			if (f33 == "0.25 hs credits") {
				total += 0.25;
				sub5 += 0.25;
			} else if (f33 == "0.5 hs credits") {
				total += 0.5;
				sub5 += 0.5;
			} else if (f33 == "0.75 hs credits") {
				hstotal9 += 0.75;
				sub5 += 0.75;
			} else if (f33 == "1 hs credit") {
				total++;
				sub5++;
			}
		}
		if (f34 == "3 dual credits") {
			dctotal11 += 3;
		} else if (f34 == "4 dual credits") {
			dctotal11 += 4;
		}
	}
	if (f30 == "9th grade") {
		if (f31 == "CTE / Other") {
			if (f33 == "0.25 hs credits") {
				hstotal9 += 0.25;
				sub2 += 0.25;
			} else if (f33 == "0.5 hs credits") {
				hstotal9 += 0.5;
				sub2 += 0.5;
			} else if (f33 == "0.75 hs credits") {
				hstotal9 += 0.75;
				sub2 += 0.75;
			} else if (f33 == "1 hs credit") {
				hstotal9++;
				sub2++;
			}
		}
		if (f31 == "Language") {
			if (f33 == "0.25 hs credits") {
				hstotal9 += 0.25;
				sub4 += 0.25;
			} else if (f33 == "0.5 hs credits") {
				hstotal9 += 0.5;
				sub4 += 0.5;
			} else if (f33 == "0.75 hs credits") {
				hstotal9 += 0.75;
				sub4 += 0.75;
			} else if (f33 == "1 hs credit") {
				hstotal9++;
				sub4++;
			}
		}
		if (f31 == "Arts") {
			if (f33 == "0.25 hs credits") {
				hstotal9 += 0.25;
				sub5 += 0.25;
			} else if (f33 == "0.5 hs credits") {
				hstotal9 += 0.5;
				sub5 += 0.5;
			} else if (f33 == "0.75 hs credits") {
				hstotal9 += 0.75;
				sub5 += 0.75;
			} else if (f33 == "1 hs credit") {
				hstotal9++;
				sub5++;
			}
		}
		if (f34 == "3 dual credits") {
			dctotal11 += 3;
		} else if (f34 == "4 dual credits") {
			dctotal11 += 4;
		}
		if (f32 == "1 unit") {
			unit9++;
		} else if (f32 == "2 units") {
			unit9 += 2;
		}
	}
	if (f30 == "10th grade") {
		if (f31 == "CTE / Other") {
			if (f33 == "0.25 hs credits") {
				hstotal10 += 0.25;
				sub2 += 0.25;
			} else if (f33 == "0.5 hs credits") {
				hstotal10 += 0.5;
				sub2 += 0.5;
			} else if (f33 == "0.75 hs credits") {
				hstotal10 += 0.75;
				sub2 += 0.75;
			} else if (f33 == "1 hs credit") {
				hstotal10++;
				sub2++;
			}
		}
		if (f31 == "Language") {
			if (f33 == "0.25 hs credits") {
				hstotal10 += 0.25;
				sub4 += 0.25;
			} else if (f33 == "0.5 hs credits") {
				hstotal10 += 0.5;
				sub4 += 0.5;
			} else if (f33 == "0.75 hs credits") {
				hstotal10 += 0.75;
				sub4 += 0.75;
			} else if (f33 == "1 hs credit") {
				hstotal10++;
				sub4++;
			}
		}
		if (f31 == "Arts") {
			if (f33 == "0.25 hs credits") {
				hstotal10 += 0.25;
				sub5 += 0.25;
			} else if (f33 == "0.5 hs credits") {
				hstotal10 += 0.5;
				sub5 += 0.5;
			} else if (f33 == "0.75 hs credits") {
				hstotal10 += 0.75;
				sub5 += 0.75;
			} else if (f33 == "1 hs credit") {
				hstotal10++;
				sub5++;
			}
		}
		if (f34 == "3 dual credits") {
			dctotal11 += 3;
		} else if (f34 == "4 dual credits") {
			dctotal11 += 4;
		}
		if (f32 == "1 unit") {
			unit10++;
		} else if (f32 == "2 units") {
			unit10 += 2;
		}
	}
	if (f30 == "11th grade") {
		if (f31 == "CTE / Other") {
			if (f33 == "0.25 hs credits") {
				hstotal11 += 0.25;
				sub2 += 0.25;
			} else if (f33 == "0.5 hs credits") {
				hstotal11 += 0.5;
				sub2 += 0.5;
			} else if (f33 == "0.75 hs credits") {
				hstotal11 += 0.75;
				sub2 += 0.75;
			} else if (f33 == "1 hs credit") {
				hstotal11++;
				sub2++;
			}
		}
		if (f31 == "Language") {
			if (f33 == "0.25 hs credits") {
				hstotal11 += 0.25;
				sub4 += 0.25;
			} else if (f33 == "0.5 hs credits") {
				hstotal11 += 0.5;
				sub4 += 0.5;
			} else if (f33 == "0.75 hs credits") {
				hstotal11 += 0.75;
				sub4 += 0.75;
			} else if (f33 == "1 hs credit") {
				hstotal11++;
				sub4++;
			}
		}
		if (f31 == "Arts") {
			if (f33 == "0.25 hs credits") {
				hstotal11 += 0.25;
				sub5 += 0.25;
			} else if (f33 == "0.5 hs credits") {
				hstotal11 += 0.5;
				sub5 += 0.5;
			} else if (f33 == "0.75 hs credits") {
				hstotal11 += 0.75;
				sub5 += 0.75;
			} else if (f33 == "1 hs credit") {
				hstotal11++;
				sub5++;
			}
		}
		if (f34 == "3 dual credits") {
			dctotal11 += 3;
		} else if (f34 == "4 dual credits") {
			dctotal11 += 4;
		}
		if (f32 == "1 unit") {
			unit11++;
		} else if (f32 == "2 units") {
			unit11 += 2;
		}
	}
	if (f30 == "12th grade") {
		if (f31 == "CTE / Other") {
			if (f33 == "0.25 hs credits") {
				hstotal10 += 0.25;
				sub2 += 0.25;
			} else if (f33 == "0.5 hs credits") {
				hstotal10 += 0.5;
				sub2 += 0.5;
			} else if (f33 == "0.75 hs credits") {
				hstotal10 += 0.75;
				sub2 += 0.75;
			} else if (f33 == "1 hs credit") {
				hstotal10++;
				sub2++;
			}
		}
		if (f31 == "Language") {
			if (f33 == "0.25 hs credits") {
				hstotal10 += 0.25;
				sub4 += 0.25;
			} else if (f33 == "0.5 hs credits") {
				hstotal10 += 0.5;
				sub4 += 0.5;
			} else if (f33 == "0.75 hs credits") {
				hstotal10 += 0.75;
				sub4 += 0.75;
			} else if (f33 == "1 hs credit") {
				hstotal10++;
				sub4++;
			}
		}
		if (f31 == "Arts") {
			if (f33 == "0.25 hs credits") {
				hstotal12 += 0.25;
				sub5 += 0.25;
			} else if (f33 == "0.5 hs credits") {
				hstotal12 += 0.5;
				sub5 += 0.5;
			} else if (f33 == "0.75 hs credits") {
				hstotal12 += 0.75;
				sub5 += 0.75;
			} else if (f33 == "1 hs credit") {
				hstotal12++;
				sub5++;
			}
		}
		if (f34 == "3 dual credits") {
			dctotal12 += 3;
		} else if (f34 == "4 dual credits") {
			dctotal12 += 4;
		}
		if (f32 == "1 unit") {
			unit12++;
		} else if (f32 == "2 units") {
			unit12 += 2;
		}
	}
	if (f10 == "8th grade") {
		if (f11 == "CTE / Other") {
			if (f13 == "0.25 hs credits") {
				total += 0.25;
				sub2 += 0.25;
			} else if (f13 == "0.5 hs credits") {
				total += 0.5;
				sub2 += 0.5;
			} else if (f13 == "0.75 hs credits") {
				total += 0.75;
				sub2 += 0.75;
			} else if (f13 == "1 hs credit") {
				total++;
				sub2++;
			}
		}
		if (f11 == "Language") {
			if (f13 == "0.25 hs credits") {
				total += 0.25;
				sub4 += 0.25;
			} else if (f13 == "0.5 hs credits") {
				total += 0.5;
				sub4 += 0.5;
			} else if (f13 == "0.75 hs credits") {
				total += 0.75;
				sub4 += 0.75;
			} else if (f13 == "1 hs credit") {
				total++;
				sub4++;
			}
		}
		if (f11 == "Arts") {
			if (f13 == "0.25 hs credits") {
				total += 0.25;
				sub5 += 0.25;
			} else if (f13 == "0.5 hs credits") {
				total += 0.5;
				sub5 += 0.5;
			} else if (f13 == "0.75 hs credits") {
				hstotal9 += 0.75;
				sub5 += 0.75;
			} else if (f13 == "1 hs credit") {
				total++;
				sub5++;
			}
		}
		if (f14 == "3 dual credits") {
			dctotal11 += 3;
		} else if (f14 == "4 dual credits") {
			dctotal11 += 4;
		}
	}
	if (f10 == "9th grade") {
		if (f11 == "CTE / Other") {
			if (f13 == "0.25 hs credits") {
				hstotal9 += 0.25;
				sub2 += 0.25;
			} else if (f13 == "0.5 hs credits") {
				hstotal9 += 0.5;
				sub2 += 0.5;
			} else if (f13 == "0.75 hs credits") {
				hstotal9 += 0.75;
				sub2 += 0.75;
			} else if (f13 == "1 hs credit") {
				hstotal9++;
				sub2++;
			}
		}
		if (f11 == "Language") {
			if (f13 == "0.25 hs credits") {
				hstotal9 += 0.25;
				sub4 += 0.25;
			} else if (f13 == "0.5 hs credits") {
				hstotal9 += 0.5;
				sub4 += 0.5;
			} else if (f13 == "0.75 hs credits") {
				hstotal9 += 0.75;
				sub4 += 0.75;
			} else if (f13 == "1 hs credit") {
				hstotal9++;
				sub4++;
			}
		}
		if (f11 == "Arts") {
			if (f13 == "0.25 hs credits") {
				hstotal9 += 0.25;
				sub5 += 0.25;
			} else if (f13 == "0.5 hs credits") {
				hstotal9 += 0.5;
				sub5 += 0.5;
			} else if (f13 == "0.75 hs credits") {
				hstotal9 += 0.75;
				sub5 += 0.75;
			} else if (f13 == "1 hs credit") {
				hstotal9++;
				sub5++;
			}
		}
		if (f14 == "3 dual credits") {
			dctotal11 += 3;
		} else if (f14 == "4 dual credits") {
			dctotal11 += 4;
		}
		if (f12 == "1 unit") {
			unit9++;
		} else if (f12 == "2 units") {
			unit9 += 2;
		}
	}
	if (f10 == "10th grade") {
		if (f11 == "CTE / Other") {
			if (f13 == "0.25 hs credits") {
				hstotal10 += 0.25;
				sub2 += 0.25;
			} else if (f13 == "0.5 hs credits") {
				hstotal10 += 0.5;
				sub2 += 0.5;
			} else if (f13 == "0.75 hs credits") {
				hstotal10 += 0.75;
				sub2 += 0.75;
			} else if (f13 == "1 hs credit") {
				hstotal10++;
				sub2++;
			}
		}
		if (f11 == "Language") {
			if (f13 == "0.25 hs credits") {
				hstotal10 += 0.25;
				sub4 += 0.25;
			} else if (f13 == "0.5 hs credits") {
				hstotal10 += 0.5;
				sub4 += 0.5;
			} else if (f13 == "0.75 hs credits") {
				hstotal10 += 0.75;
				sub4 += 0.75;
			} else if (f13 == "1 hs credit") {
				hstotal10++;
				sub4++;
			}
		}
		if (f11 == "Arts") {
			if (f13 == "0.25 hs credits") {
				hstotal10 += 0.25;
				sub5 += 0.25;
			} else if (f13 == "0.5 hs credits") {
				hstotal10 += 0.5;
				sub5 += 0.5;
			} else if (f13 == "0.75 hs credits") {
				hstotal10 += 0.75;
				sub5 += 0.75;
			} else if (f13 == "1 hs credit") {
				hstotal10++;
				sub5++;
			}
		}
		if (f14 == "3 dual credits") {
			dctotal11 += 3;
		} else if (f14 == "4 dual credits") {
			dctotal11 += 4;
		}
		if (f12 == "1 unit") {
			unit10++;
		} else if (f12 == "2 units") {
			unit10 += 2;
		}
	}
	if (f10 == "11th grade") {
		if (f11 == "CTE / Other") {
			if (f13 == "0.25 hs credits") {
				hstotal11 += 0.25;
				sub2 += 0.25;
			} else if (f13 == "0.5 hs credits") {
				hstotal11 += 0.5;
				sub2 += 0.5;
			} else if (f13 == "0.75 hs credits") {
				hstotal11 += 0.75;
				sub2 += 0.75;
			} else if (f13 == "1 hs credit") {
				hstotal11++;
				sub2++;
			}
		}
		if (f11 == "Language") {
			if (f13 == "0.25 hs credits") {
				hstotal11 += 0.25;
				sub4 += 0.25;
			} else if (f13 == "0.5 hs credits") {
				hstotal11 += 0.5;
				sub4 += 0.5;
			} else if (f13 == "0.75 hs credits") {
				hstotal11 += 0.75;
				sub4 += 0.75;
			} else if (f13 == "1 hs credit") {
				hstotal11++;
				sub4++;
			}
		}
		if (f11 == "Arts") {
			if (f13 == "0.25 hs credits") {
				hstotal11 += 0.25;
				sub5 += 0.25;
			} else if (f13 == "0.5 hs credits") {
				hstotal11 += 0.5;
				sub5 += 0.5;
			} else if (f13 == "0.75 hs credits") {
				hstotal11 += 0.75;
				sub5 += 0.75;
			} else if (f13 == "1 hs credit") {
				hstotal11++;
				sub5++;
			}
		}
		if (f14 == "3 dual credits") {
			dctotal11 += 3;
		} else if (f14 == "4 dual credits") {
			dctotal11 += 4;
		}
		if (f12 == "1 unit") {
			unit11++;
		} else if (f12 == "2 units") {
			unit11 += 2;
		}
	}
	if (f10 == "12th grade") {
		if (f11 == "CTE / Other") {
			if (f13 == "0.25 hs credits") {
				hstotal10 += 0.25;
				sub2 += 0.25;
			} else if (f13 == "0.5 hs credits") {
				hstotal10 += 0.5;
				sub2 += 0.5;
			} else if (f13 == "0.75 hs credits") {
				hstotal10 += 0.75;
				sub2 += 0.75;
			} else if (f13 == "1 hs credit") {
				hstotal10++;
				sub2++;
			}
		}
		if (f11 == "Language") {
			if (f13 == "0.25 hs credits") {
				hstotal10 += 0.25;
				sub4 += 0.25;
			} else if (f13 == "0.5 hs credits") {
				hstotal10 += 0.5;
				sub4 += 0.5;
			} else if (f13 == "0.75 hs credits") {
				hstotal10 += 0.75;
				sub4 += 0.75;
			} else if (f13 == "1 hs credit") {
				hstotal10++;
				sub4++;
			}
		}
		if (f11 == "Arts") {
			if (f13 == "0.25 hs credits") {
				hstotal12 += 0.25;
				sub5 += 0.25;
			} else if (f13 == "0.5 hs credits") {
				hstotal12 += 0.5;
				sub5 += 0.5;
			} else if (f13 == "0.75 hs credits") {
				hstotal12 += 0.75;
				sub5 += 0.75;
			} else if (f13 == "1 hs credit") {
				hstotal12++;
				sub5++;
			}
		}
		if (f14 == "3 dual credits") {
			dctotal12 += 3;
		} else if (f14 == "4 dual credits") {
			dctotal12 += 4;
		}
		if (f12 == "1 unit") {
			unit12++;
		} else if (f12 == "2 units") {
			unit12 += 2;
		}
	}
	if (f20 == "8th grade") {
		if (f21 == "CTE / Other") {
			if (f23 == "0.25 hs credits") {
				total += 0.25;
				sub2 += 0.25;
			} else if (f23 == "0.5 hs credits") {
				total += 0.5;
				sub2 += 0.5;
			} else if (f23 == "0.75 hs credits") {
				total += 0.75;
				sub2 += 0.75;
			} else if (f23 == "1 hs credit") {
				total++;
				sub2++;
			}
		}
		if (f21 == "Language") {
			if (f23 == "0.25 hs credits") {
				total += 0.25;
				sub4 += 0.25;
			} else if (f23 == "0.5 hs credits") {
				total += 0.5;
				sub4 += 0.5;
			} else if (f23 == "0.75 hs credits") {
				total += 0.75;
				sub4 += 0.75;
			} else if (f23 == "1 hs credit") {
				total++;
				sub4++;
			}
		}
		if (f21 == "Arts") {
			if (f23 == "0.25 hs credits") {
				total += 0.25;
				sub5 += 0.25;
			} else if (f23 == "0.5 hs credits") {
				total += 0.5;
				sub5 += 0.5;
			} else if (f23 == "0.75 hs credits") {
				hstotal9 += 0.75;
				sub5 += 0.75;
			} else if (f23 == "1 hs credit") {
				total++;
				sub5++;
			}
		}
		if (f24 == "3 dual credits") {
			dctotal11 += 3;
		} else if (f24 == "4 dual credits") {
			dctotal11 += 4;
		}
	}
	if (f20 == "9th grade") {
		if (f21 == "CTE / Other") {
			if (f23 == "0.25 hs credits") {
				hstotal9 += 0.25;
				sub2 += 0.25;
			} else if (f23 == "0.5 hs credits") {
				hstotal9 += 0.5;
				sub2 += 0.5;
			} else if (f23 == "0.75 hs credits") {
				hstotal9 += 0.75;
				sub2 += 0.75;
			} else if (f23 == "1 hs credit") {
				hstotal9++;
				sub2++;
			}
		}
		if (f21 == "Language") {
			if (f23 == "0.25 hs credits") {
				hstotal9 += 0.25;
				sub4 += 0.25;
			} else if (f23 == "0.5 hs credits") {
				hstotal9 += 0.5;
				sub4 += 0.5;
			} else if (f23 == "0.75 hs credits") {
				hstotal9 += 0.75;
				sub4 += 0.75;
			} else if (f23 == "1 hs credit") {
				hstotal9++;
				sub4++;
			}
		}
		if (f21 == "Arts") {
			if (f23 == "0.25 hs credits") {
				hstotal9 += 0.25;
				sub5 += 0.25;
			} else if (f23 == "0.5 hs credits") {
				hstotal9 += 0.5;
				sub5 += 0.5;
			} else if (f23 == "0.75 hs credits") {
				hstotal9 += 0.75;
				sub5 += 0.75;
			} else if (f23 == "1 hs credit") {
				hstotal9++;
				sub5++;
			}
		}
		if (f24 == "3 dual credits") {
			dctotal11 += 3;
		} else if (f24 == "4 dual credits") {
			dctotal11 += 4;
		}
		if (f22 == "1 unit") {
			unit9++;
		} else if (f22 == "2 units") {
			unit9 += 2;
		}
	}
	if (f20 == "10th grade") {
		if (f21 == "CTE / Other") {
			if (f23 == "0.25 hs credits") {
				hstotal10 += 0.25;
				sub2 += 0.25;
			} else if (f23 == "0.5 hs credits") {
				hstotal10 += 0.5;
				sub2 += 0.5;
			} else if (f23 == "0.75 hs credits") {
				hstotal10 += 0.75;
				sub2 += 0.75;
			} else if (f23 == "1 hs credit") {
				hstotal10++;
				sub2++;
			}
		}
		if (f21 == "Language") {
			if (f23 == "0.25 hs credits") {
				hstotal10 += 0.25;
				sub4 += 0.25;
			} else if (f23 == "0.5 hs credits") {
				hstotal10 += 0.5;
				sub4 += 0.5;
			} else if (f23 == "0.75 hs credits") {
				hstotal10 += 0.75;
				sub4 += 0.75;
			} else if (f23 == "1 hs credit") {
				hstotal10++;
				sub4++;
			}
		}
		if (f21 == "Arts") {
			if (f23 == "0.25 hs credits") {
				hstotal10 += 0.25;
				sub5 += 0.25;
			} else if (f23 == "0.5 hs credits") {
				hstotal10 += 0.5;
				sub5 += 0.5;
			} else if (f23 == "0.75 hs credits") {
				hstotal10 += 0.75;
				sub5 += 0.75;
			} else if (f23 == "1 hs credit") {
				hstotal10++;
				sub5++;
			}
		}
		if (f24 == "3 dual credits") {
			dctotal11 += 3;
		} else if (f24 == "4 dual credits") {
			dctotal11 += 4;
		}
		if (f22 == "1 unit") {
			unit10++;
		} else if (f22 == "2 units") {
			unit10 += 2;
		}
	}
	if (f20 == "11th grade") {
		if (f21 == "CTE / Other") {
			if (f23 == "0.25 hs credits") {
				hstotal11 += 0.25;
				sub2 += 0.25;
			} else if (f23 == "0.5 hs credits") {
				hstotal11 += 0.5;
				sub2 += 0.5;
			} else if (f23 == "0.75 hs credits") {
				hstotal11 += 0.75;
				sub2 += 0.75;
			} else if (f23 == "1 hs credit") {
				hstotal11++;
				sub2++;
			}
		}
		if (f21 == "Language") {
			if (f23 == "0.25 hs credits") {
				hstotal11 += 0.25;
				sub4 += 0.25;
			} else if (f23 == "0.5 hs credits") {
				hstotal11 += 0.5;
				sub4 += 0.5;
			} else if (f23 == "0.75 hs credits") {
				hstotal11 += 0.75;
				sub4 += 0.75;
			} else if (f23 == "1 hs credit") {
				hstotal11++;
				sub4++;
			}
		}
		if (f21 == "Arts") {
			if (f23 == "0.25 hs credits") {
				hstotal11 += 0.25;
				sub5 += 0.25;
			} else if (f23 == "0.5 hs credits") {
				hstotal11 += 0.5;
				sub5 += 0.5;
			} else if (f23 == "0.75 hs credits") {
				hstotal11 += 0.75;
				sub5 += 0.75;
			} else if (f23 == "1 hs credit") {
				hstotal11++;
				sub5++;
			}
		}
		if (f24 == "3 dual credits") {
			dctotal11 += 3;
		} else if (f24 == "4 dual credits") {
			dctotal11 += 4;
		}
		if (f22 == "1 unit") {
			unit11++;
		} else if (f22 == "2 units") {
			unit11 += 2;
		}
	}
	if (f20 == "12th grade") {
		if (f21 == "CTE / Other") {
			if (f23 == "0.25 hs credits") {
				hstotal10 += 0.25;
				sub2 += 0.25;
			} else if (f23 == "0.5 hs credits") {
				hstotal10 += 0.5;
				sub2 += 0.5;
			} else if (f23 == "0.75 hs credits") {
				hstotal10 += 0.75;
				sub2 += 0.75;
			} else if (f23 == "1 hs credit") {
				hstotal10++;
				sub2++;
			}
		}
		if (f21 == "Language") {
			if (f23 == "0.25 hs credits") {
				hstotal10 += 0.25;
				sub4 += 0.25;
			} else if (f23 == "0.5 hs credits") {
				hstotal10 += 0.5;
				sub4 += 0.5;
			} else if (f23 == "0.75 hs credits") {
				hstotal10 += 0.75;
				sub4 += 0.75;
			} else if (f23 == "1 hs credit") {
				hstotal10++;
				sub4++;
			}
		}
		if (f21 == "Arts") {
			if (f23 == "0.25 hs credits") {
				hstotal12 += 0.25;
				sub5 += 0.25;
			} else if (f23 == "0.5 hs credits") {
				hstotal12 += 0.5;
				sub5 += 0.5;
			} else if (f23 == "0.75 hs credits") {
				hstotal12 += 0.75;
				sub5 += 0.75;
			} else if (f23 == "1 hs credit") {
				hstotal12++;
				sub5++;
			}
		}
		if (f24 == "3 dual credits") {
			dctotal12 += 3;
		} else if (f24 == "4 dual credits") {
			dctotal12 += 4;
		}
		if (f22 == "1 unit") {
			unit12++;
		} else if (f22 == "2 units") {
			unit12 += 2;
		}
	}
	localStorage.setItem('msclass', document.getElementById('msclass').checked);
	checked = JSON.parse(localStorage.getItem('msclass'));
	if (checked) {
		mscredit++;
		sub8++;
	}
	localStorage.setItem('msclass0', document.getElementById('msclass0').checked);
	checked0 = JSON.parse(localStorage.getItem('msclass0'));
	if (checked0) {
		mscredit += 0.5;
		sub3 += 0.5;
	}
	localStorage.setItem('msclass1', document.getElementById('msclass1').checked);
	checked1 = JSON.parse(localStorage.getItem('msclass1'));
	if (checked1) {
		mscredit += 0.5;
		sub2 += 0.5;
	}
	total = hstotal9 + hstotal10 + hstotal11 + hstotal12 + mscredit;
	totalt = dctotal11 + dctotal12;
	totalu = unit9 + unit10 + unit11 + unit12;
	if (endorsement == "Advanced Honors Endorsement") {
		reqmath = 4;
		reqsci = 4;
		reqlang = 1;
	}
	if (hs9 != "English I" && hs9 != "Honors English I") {
		req1ela = "You do not have the required class: English I.";
	}
	if (hs90 != "English II + Speech" && hs90 != "Honors English II + Speech") {
		req2ela = "You do not have the required class: English II.";
	}
	if (hs91 !== "English III" && hs91 !== "Honors English III" && hs92 != "English III" && hs92 != "Honors English III") {
		req3ela = "You do not have the required class: English III.";
	}
	if (hs15 !== "Personal Finance" && hs16 !== "Personal Finance" && hs13 != "Personal Finance" && hs14 != "Personal Finance") {
		perf = "You do not have the required class: Personal Finance.";
	}
	if (hs80 !== "Algebra II" && hs81 !== "Algebra II" && hs82 !== "Algebra II" && hs83 != "Algebra II" && hs84 != "Algebra II" && hs80 !== "Accelerated Algebra II" && hs81 !== "Accelerated Algebra II" && hs82 !== "Accelerated Algebra II" && hs83 != "Accelerated Algebra II" && hs84 != "Accelerated Algebra II") {
		reqmath1 = "You do not have the required class: Algebra II.";
	}
	if (hs8 !== "Geometry" && hs80 !== "Geometry" && hs81 !== "Geometry" && hs82 !== "Geometry" && hs83 != "Geometry" && hs84 != "Geometry" && hs8 !== "Accelerated Geometry" && hs80 !== "Accelerated Geometry" && hs81 !== "Accelerated Geometry" && hs82 !== "Accelerated Geometry" && hs83 != "Accelerated Geometry" && hs84 != "Accelerated Geometry") {
		reqmath2 = "You do not have the required class: Geometry.";
	}
	if (hs8 !== "Algebra I" && !checked) {
		reqmath3 = "You do not have the required class: Algebra.";
	}
	if (hs7 !== "Biology" && hs7 !== "Honors Biology" && hs7 !== "Physical Science") {
		sci1req = "You do not have the required class: Biology.";
	}
	if (hs70 !== "Chemistry" && hs70 !== "Honors Chemistry") {
		sci2req = "You do not have the required class: Chemistry.";
	}
	if (hs71 !== "Physics" && hs72 !== "Physics" && hs71 !== "Honors Physics" && hs72 !== "Honors Physics") {
		sci3req = "You do not have the required class: Physics.";
	}
	if (hs6 !== "World History/Geography" && hs6 !== "Honors World History/Geography") {
		ss1req = "You do not have the required class: Honors World History/Geography.";
	}
	if (hs60 !== "American History" && hs60 !== "AP American History" && hs61 !== "AP American History" && hs62 !== "AP American History") {
		ss2req = "You do not have the required class: American History.";
	}
	if (hs61 !== "Government" && hs62 !== "Government" && hs63 !== "Government" && hs64 !== "Government") {
		ss3req = "You do not have the required class: Government.";
	}
	if (!checked0 && hs3 !== "Health" && hs30 !== "Health") {
		healreq = "You do not have the required class: Health.";
	}
	if (hs15 !== "Senior Experience" && hs16 !== "Senior Experience" && hs15 !== "Youth Internships" && hs16 !== "Youth Internships") {
		capreq = "You do not have enough credits in the subject: Capstone.";
	}
	if (hs00 == "Chemistry 106" || hs01 == "Chemistry 106" || hs02 == "Chemistry 106" || hs03 == "Chemistry 106" || hs04 == "Chemistry 106" || hs05 == "Chemistry 106" || hs06 == "Chemistry 106" || hs07 == "Chemistry 106" || hs08 == "Chemistry 106" || hs09 == "Chemistry 106" || hs0 == "Chemistry 106" || hs == "Chemistry 106") {
		overflowsci = 1;
	}
	if (hs06 == "English Composition" || hs07 == "English Composition" || hs08 == "English Composition" || hs09 == "English Composition" || hs0 == "English Composition" || hs == "English Composition") {
		overflowela = 1;
	}
	overflowela = overflowela + sub9;
	overflowsci = overflowsci + sub7;
	if (4 < sub9) {
		temp9 = sub9 - 4;
		sub9 -= temp9;
		sub2 += temp9;
	}
	if (reqmath < sub8) {
		temp8 = sub8 - reqmath;
		sub8 -= temp8;
		sub2 += temp8;
	}
	if (reqsci < sub7) {
		temp7 = sub7 - reqsci;
		sub7 -= temp7;
		sub2 += temp7;
	}
	if (3 < sub6) {
		temp6 = sub6 - 3;
		sub6 -= temp6;
		sub2 += temp6;
	}
	if (1 < sub5) {
		temp5 = sub5 - 1;
		sub5 -= temp5;
		sub2 += temp5;
	}
	if (reqlang < sub4) {
		temp4 = reqlang;
		sub4 -= temp4;
		sub2 += temp4;
	}
	if (1 < sub3) {
		temp3 = sub3 - 1;
		sub3 -= temp3;
		sub2 += temp3;
	}
	if (overflowela < 4) {
		reqsubela = "You do not meet the credit requirements for ELA (Unless you make up for it in Online/Other).";
	}
	if (sub8 < reqmath) {
		reqsubmath = "You do not meet the credit requirements for math (Unless you make up for it in Online/Other).";
	}
	if (overflowsci < reqsci) {
		reqsubsci = "You do not meet the credit requirements for science (Unless you make up for it in Online/Other).";
	}
	if (sub6 < 3) {
		reqsubss = "You do not meet the credit requirements for social studies (Unless you make up for it in Online/Other).";
	}
	if (sub5 < 1) {
		reqsubart = "You do not meet the credit requirements for art.";
	}
	if (sub4 < reqlang) {
		reqsublang = "You do not meet the credit requirements for language.";
	}
	if (sub3 < 1) {
		reqsubpe = "You do not meet the credit requirements for physical education.";
	}
	if (unit9 != 14) {
		req9 = "You have too much or too little units for grade 9.";
	}
	if (unit10 != 14) {
		req10 = "You have too much or too little units for grade 10.";
	}
	if (unit11 != 14) {
		req11 = "You have too much or too little units for grade 11.";
	}
	if (unit12 < 5 || unit12 > 14) {
		req12 = "You have too much or too little units for grade 12.";
	}
	if (total < 24) {
		reqtotal = "You don't have enough credits to pass high school.";
	}
	document.getElementById("total11dc").innerHTML = dctotal11;
	document.getElementById("total12dc").innerHTML = dctotal12;
	document.getElementById("total9hs").innerHTML = hstotal9;
	document.getElementById("total10hs").innerHTML = hstotal10;
	document.getElementById("total11hs").innerHTML = hstotal11;
	document.getElementById("total12hs").innerHTML = hstotal12;
	document.getElementById("9unit").innerHTML = unit9;
	document.getElementById("10unit").innerHTML = unit10;
	document.getElementById("11unit").innerHTML = unit11;
	document.getElementById("12unit").innerHTML = unit12;
	document.getElementById("totes").innerHTML = total;
	document.getElementById("totest").innerHTML = totalt;
	document.getElementById("totesu").innerHTML = totalu;
	document.getElementById("9sub").innerHTML = sub9;
	document.getElementById("8sub").innerHTML = sub8;
	document.getElementById("7sub").innerHTML = sub7;
	document.getElementById("6sub").innerHTML = sub6;
	document.getElementById("5sub").innerHTML = sub5;
	document.getElementById("4sub").innerHTML = sub4;
	document.getElementById("3sub").innerHTML = sub3;
	document.getElementById("2sub").innerHTML = sub2;
	document.getElementById("required9").innerHTML = req9;
	document.getElementById("required10").innerHTML = req10;
	document.getElementById("required11").innerHTML = req11;
	document.getElementById("required12").innerHTML = req12;
	document.getElementById("totesr").innerHTML = reqtotal;
	document.getElementById("elareq1").innerHTML = req1ela;
	document.getElementById("elareq2").innerHTML = req2ela;
	document.getElementById("elareq3").innerHTML = req3ela;
	document.getElementById("perfi").innerHTML = perf;
	document.getElementById("req1math").innerHTML = reqmath1;
	document.getElementById("req2math").innerHTML = reqmath2;
	document.getElementById("req3math").innerHTML = reqmath3;
	document.getElementById("scireq1").innerHTML = sci1req;
	document.getElementById("scireq2").innerHTML = sci2req;
	document.getElementById("scireq3").innerHTML = sci3req;
	document.getElementById("ssreq1").innerHTML = ss1req;
	document.getElementById("ssreq2").innerHTML = ss2req;
	document.getElementById("ssreq3").innerHTML = ss3req;
	document.getElementById("reqheal").innerHTML = healreq;
	document.getElementById("reqcap").innerHTML = capreq;
	document.getElementById("2sub").innerHTML = sub2;
	document.getElementById("9sub").innerHTML = sub9;
	document.getElementById("8sub").innerHTML = sub8;
	document.getElementById("7sub").innerHTML = sub7;
	document.getElementById("6sub").innerHTML = sub6;
	document.getElementById("5sub").innerHTML = sub5;
	document.getElementById("4sub").innerHTML = sub4;
	document.getElementById("3sub").innerHTML = sub3;
	document.getElementById("subela").innerHTML = reqsubela;
	document.getElementById("submath").innerHTML = reqsubmath;
	document.getElementById("subsci").innerHTML = reqsubsci;
	document.getElementById("subss").innerHTML = reqsubss;
	document.getElementById("subart").innerHTML = reqsubart;
	document.getElementById("sublang").innerHTML = reqsublang;
	document.getElementById("subpe").innerHTML = reqsubpe;
}
