var data = [
	{
	    "description": "Special - Canonical NaN",
	    "input": "NaN"
	},
	{
	    "description": "Special - Negative NaN",
	    "input": "NaN",
	    "lossy": true
	},
	{
	    "description": "Special - Negative NaN",
	    "input": "-NaN"
	},
	{
	    "description": "Special - Negative NaN",
	    "expected": "NaN",
	    "input": "-NaN",
	    "lossy": true
	},
	{
	    "description": "Special - Canonical SNaN",
	    "input": "NaN",
	    "lossy": true
	},
	{
	    "description": "Special - Negative SNaN",
	    "input": "NaN",
	    "lossy": true
	},
	{
	    "description": "Special - NaN with a payload",
	    "input": "NaN",
	    "lossy": true
	},
	{
	    "description": "Special - Canonical Positive Infinity",
	    "input": "Infinity"
	},
	{
	    "description": "Special - Canonical Negative Infinity",
	    "input": "-Infinity"
	},
	{
	    "description": "Special - Invalid representation treated as 0",
	    "input": "0",
	    "lossy": true
	},
	{
	    "description": "Special - Invalid representation treated as -0",
	    "input": "-0",
	    "lossy": true
	},
	{
	    "description": "Special - Invalid representation treated as 0E3",
	    "input": "0E+3",
	    "lossy": true
	},
	{
	    "description": "Regular - Adjusted Exponent Limit",
	    "input": "{d: { $numberDecimal: 0.000001234567890123456789012345678901234 }}"
	},
	{
	    "description": "Regular - Smallest",
	    "input": "0.001234"
	},
	{
	    "description": "Regular - Smallest with Trailing Zeros",
	    "input": "0.00123400000"
	},
	{
	    "description": "Regular - 0.1",
	    "input": "0.1"
	},
	{
	    "description": "Regular - 0.1234567890123456789012345678901234",
	    "input": "0.1234567890123456789012345678901234"
	},
	{
	    "description": "Regular - 0",
	    "input": "0"
	},
	{
	    "description": "Regular - -0",
	    "input": "-0"
	},
	{
	    "description": "Regular - -0.0",
	    "input": "-0.0"
	},
	{
	    "description": "Regular - 2",
	    "input": "2"
	},
	{
	    "description": "Regular - 2.000",
	    "input": "2.000"
	},
	{
	    "description": "Regular - Largest",
	    "input": "1234567890123456789012345678901234"
	},
	{
	    "description": "Scientific - Tiniest",
	    "input": "9.999999999999999999999999999999999E-6143"
	},
	{
	    "description": "Scientific - Tiny",
	    "input": "1E-6176"
	},
	{
	    "description": "Scientific - Negative Tiny",
	    "input": "-1E-6176"
	},
	{
	    "description": "Scientific - Adjusted Exponent Limit",
	    "input": "{d: { $numberDecimal: 1.234567890123456789012345678901234E-7 }}"
	},
	{
	    "description": "Scientific - Fractional",
	    "input": "-1.00E-8"
	},
	{
	    "description": "Scientific - 0 with Exponent",
	    "input": "0E+6000"
	},
	{
	    "description": "Scientific - 0 with Negative Exponent",
	    "input": "0E-611"
	},
	{
	    "description": "Scientific - No Decimal with Signed Exponent",
	    "input": "1E+3"
	},
	{
	    "description": "Scientific - Trailing Zero",
	    "input": "1.050E+4"
	},
	{
	    "description": "Scientific - With Decimal",
	    "input": "1.05E+3"
	},
	{
	    "description": "Scientific - Full",
	    "input": "5192296858534827628530496329220095"
	},
	{
	    "description": "Scientific - Large",
	    "input": "1.000000000000000000000000000000000E+6144"
	},
	{
	    "description": "Scientific - Largest",
	    "input": "9.999999999999999999999999999999999E+6144"
	},
	{
	    "description": "Non-Canonical Parsing - Exponent Normalization",
	    "input": "-100E-10",
	    "expected": "-1.00E-8"
	},
	{
	    "description": "Non-Canonical Parsing - Unsigned Positive Exponent",
	    "input": "1E3",
	    "expected": "1E+3"
	},
	{
	    "description": "Non-Canonical Parsing - Lowercase Exponent Identifier",
	    "input": "1e+3",
	    "expected": "1E+3"
	},
	{
	    "description": "Non-Canonical Parsing - Long Significand with Exponent",
	    "input": "12345689012345789012345E+12",
	    "expected": "1.2345689012345789012345E+34"
	},
	{
	    "description": "Non-Canonical Parsing - Positive Sign",
	    "input": "+1234567890123456789012345678901234",
	    "expected": "1234567890123456789012345678901234"
	},
	{
	    "description": "Non-Canonical Parsing - Long Decimal String",
	    "input": ".000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001",
	    "expected": "1E-999"
	},
	{
	    "description": "Non-Canonical Parsing - nan",
	    "input": "nan",
	    "expected": "NaN"
	},
	{
	    "description": "Non-Canonical Parsing - nAn",
	    "input": "nAn",
	    "expected": "NaN"
	},
	{
	    "description": "Non-Canonical Parsing - +infinity",
	    "input": "+infinity",
	    "expected": "Infinity"
	},
	{
	    "description": "Non-Canonical Parsing - infinity",
	    "input": "infinity",
	    "expected": "Infinity"
	},
	{
	    "description": "Non-Canonical Parsing - infiniTY",
	    "input": "infiniTY",
	    "expected": "Infinity"
	},
	{
	    "description": "Non-Canonical Parsing - inf",
	    "input": "inf",
	    "expected": "Infinity"
	},
	{
	    "description": "Non-Canonical Parsing - inF",
	    "input": "inF",
	    "expected": "Infinity"
	},
	{
	    "description": "Non-Canonical Parsing - -infinity",
	    "input": "-infinity",
	    "expected": "-Infinity"
	},
	{
	    "description": "Non-Canonical Parsing - -infiniTy",
	    "input": "-infiniTy",
	    "expected": "-Infinity"
	},
	{
	    "description": "Non-Canonical Parsing - -Inf",
	    "input": "-Infinity",
	    "expected": "-Infinity"
	},
	{
	    "description": "Non-Canonical Parsing - -inf",
	    "input": "-inf",
	    "expected": "-Infinity"
	},
	{
	    "description": "Non-Canonical Parsing - -inF",
	    "input": "-inF",
	    "expected": "-Infinity"
	},
	{
	   "description": "Rounded Subnormal number",
	    "input": "10E-6177",
	   "expected": "1E-6176"
	},
	{
	   "description": "Clamped",
	    "input": "1E6112",
	   "expected": "1.0E+6112"
	},
	{
	   "description": "Exact rounding",
	    "input": "1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
	   "expected": "1.000000000000000000000000000000000E+999"
	},
	{
	   "description": "[decq021] Normality",
	   "input": "-1234567890123456789012345678901234"
	},
	{
	   "description": "[decq823] values around [u]int32 edges (zeros done earlier)",
	   "input": "-2147483649"
	},
	{
	   "description": "[decq822] values around [u]int32 edges (zeros done earlier)",
	   "input": "-2147483648"
	},
	{
	   "description": "[decq821] values around [u]int32 edges (zeros done earlier)",
	   "input": "-2147483647"
	},
	{
	   "description": "[decq820] values around [u]int32 edges (zeros done earlier)",
	   "input": "-2147483646"
	},
	{
	   "description": "[decq152] fold-downs (more below)",
	   "input": "-12345"
	},
	{
	   "description": "[decq154] fold-downs (more below)",
	   "input": "-1234"
	},
	{
	   "description": "[decq006] derivative canonical plain strings",
	   "input": "-750"
	},
	{
	   "description": "[decq164] fold-downs (more below)",
	   "input": "-123.45"
	},
	{
	   "description": "[decq156] fold-downs (more below)",
	   "input": "-123"
	},
	{
	   "description": "[decq008] derivative canonical plain strings",
	   "input": "-75.0"
	},
	{
	   "description": "[decq158] fold-downs (more below)",
	   "input": "-12"
	},
	{
	   "description": "[decq122] Nmax and similar",
	   "input": "-9.999999999999999999999999999999999E+6144"
	},
	{
	   "description": "[decq002] (mostly derived from the Strawman 4 document and examples)",
	   "input": "-7.50"
	},
	{
	   "description": "[decq004] derivative canonical plain strings",
	   "input": "-7.50E+3"
	},
	{
	   "description": "[decq018] derivative canonical plain strings",
	   "input": "-7.50E-7"
	},
	{
	   "description": "[decq125] Nmax and similar",
	   "input": "-1.234567890123456789012345678901234E+6144"
	},
	{
	   "description": "[decq131] fold-downs (more below)",
	   "input": "-1.230000000000000000000000000000000E+6144"
	},
	{
	   "description": "[decq162] fold-downs (more below)",
	   "input": "-1.23"
	},
	{
	   "description": "[decq176] Nmin and below",
	   "input": "-1.000000000000000000000000000000001E-6143"
	},
	{
	   "description": "[decq174] Nmin and below",
	   "input": "-1.000000000000000000000000000000000E-6143"
	},
	{
	   "description": "[decq133] fold-downs (more below)",
	   "input": "-1.000000000000000000000000000000000E+6144"
	},
	{
	   "description": "[decq160] fold-downs (more below)",
	   "input": "-1"
	},
	{
	   "description": "[decq172] Nmin and below",
	   "input": "-1E-6143"
	},
	{
	   "description": "[decq010] derivative canonical plain strings",
	   "input": "-0.750"
	},
	{
	   "description": "[decq012] derivative canonical plain strings",
	   "input": "-0.0750"
	},
	{
	   "description": "[decq014] derivative canonical plain strings",
	   "input": "-0.000750"
	},
	{
	   "description": "[decq016] derivative canonical plain strings",
	   "input": "-0.00000750"
	},
	{
	   "description": "[decq404] zeros",
	   "input": "0E-6176"
	},
	{
	   "description": "[decq424] negative zeros",
	   "input": "-0E-6176"
	},
	{
	   "description": "[decq407] zeros",
	   "input": "0.00"
	},
	{
	   "description": "[decq427] negative zeros",
	   "input": "-0.00"
	},
	{
	   "description": "[decq409] zeros",
	   "input": "0"
	},
	{
	   "description": "[decq428] negative zeros",
	   "input": "-0"
	},
	{
	   "description": "[decq700] Selected DPD codes",
	   "input": "0"
	},
	{
	   "description": "[decq406] zeros",
	   "input": "0.00"
	},
	{
	   "description": "[decq426] negative zeros",
	   "input": "-0.00"
	},
	{
	   "description": "[decq410] zeros",
	   "input": "0E+3"
	},
	{
	   "description": "[decq431] negative zeros",
	   "input": "-0E+3"
	},
	{
	   "description": "[decq419] clamped zeros...",
	   "input": "0E+6111"
	},
	{
	   "description": "[decq432] negative zeros",
	   "input": "-0E+6111"
	},
	{
	   "description": "[decq405] zeros",
	   "input": "0E-6176"
	},
	{
	   "description": "[decq425] negative zeros",
	   "input": "-0E-6176"
	},
	{
	   "description": "[decq508] Specials",
	   "input": "Infinity"
	},
	{
	   "description": "[decq528] Specials",
	   "input": "-Infinity"
	},
	{
	   "description": "[decq541] Specials",
	   "input": "NaN"
	},
	{
	   "description": "[decq074] Nmin and below",
	   "input": "1.000000000000000000000000000000000E-6143"
	},
	{
	   "description": "[decq602] fold-down full sequence",
	   "input": "1.000000000000000000000000000000000E+6144"
	},
	{
	   "description": "[decq604] fold-down full sequence",
	   "input": "1.00000000000000000000000000000000E+6143"
	},
	{
	   "description": "[decq606] fold-down full sequence",
	   "input": "1.0000000000000000000000000000000E+6142"
	},
	{
	   "description": "[decq608] fold-down full sequence",
	   "input": "1.000000000000000000000000000000E+6141"
	},
	{
	   "description": "[decq610] fold-down full sequence",
	   "input": "1.00000000000000000000000000000E+6140"
	},
	{
	   "description": "[decq612] fold-down full sequence",
	   "input": "1.0000000000000000000000000000E+6139"
	},
	{
	   "description": "[decq614] fold-down full sequence",
	   "input": "1.000000000000000000000000000E+6138"
	},
	{
	   "description": "[decq616] fold-down full sequence",
	   "input": "1.00000000000000000000000000E+6137"
	},
	{
	   "description": "[decq618] fold-down full sequence",
	   "input": "1.0000000000000000000000000E+6136"
	},
	{
	   "description": "[decq620] fold-down full sequence",
	   "input": "1.000000000000000000000000E+6135"
	},
	{
	   "description": "[decq622] fold-down full sequence",
	   "input": "1.00000000000000000000000E+6134"
	},
	{
	   "description": "[decq624] fold-down full sequence",
	   "input": "1.0000000000000000000000E+6133"
	},
	{
	   "description": "[decq626] fold-down full sequence",
	   "input": "1.000000000000000000000E+6132"
	},
	{
	   "description": "[decq628] fold-down full sequence",
	   "input": "1.00000000000000000000E+6131"
	},
	{
	   "description": "[decq630] fold-down full sequence",
	   "input": "1.0000000000000000000E+6130"
	},
	{
	   "description": "[decq632] fold-down full sequence",
	   "input": "1.000000000000000000E+6129"
	},
	{
	   "description": "[decq634] fold-down full sequence",
	   "input": "1.00000000000000000E+6128"
	},
	{
	   "description": "[decq636] fold-down full sequence",
	   "input": "1.0000000000000000E+6127"
	},
	{
	   "description": "[decq638] fold-down full sequence",
	   "input": "1.000000000000000E+6126"
	},
	{
	   "description": "[decq640] fold-down full sequence",
	   "input": "1.00000000000000E+6125"
	},
	{
	   "description": "[decq642] fold-down full sequence",
	   "input": "1.0000000000000E+6124"
	},
	{
	   "description": "[decq644] fold-down full sequence",
	   "input": "1.000000000000E+6123"
	},
	{
	   "description": "[decq646] fold-down full sequence",
	   "input": "1.00000000000E+6122"
	},
	{
	   "description": "[decq648] fold-down full sequence",
	   "input": "1.0000000000E+6121"
	},
	{
	   "description": "[decq650] fold-down full sequence",
	   "input": "1.000000000E+6120"
	},
	{
	   "description": "[decq652] fold-down full sequence",
	   "input": "1.00000000E+6119"
	},
	{
	   "description": "[decq654] fold-down full sequence",
	   "input": "1.0000000E+6118"
	},
	{
	   "description": "[decq656] fold-down full sequence",
	   "input": "1.000000E+6117"
	},
	{
	   "description": "[decq658] fold-down full sequence",
	   "input": "1.00000E+6116"
	},
	{
	   "description": "[decq660] fold-down full sequence",
	   "input": "1.0000E+6115"
	},
	{
	   "description": "[decq662] fold-down full sequence",
	   "input": "1.000E+6114"
	},
	{
	   "description": "[decq664] fold-down full sequence",
	   "input": "1.00E+6113"
	},
	{
	   "description": "[decq666] fold-down full sequence",
	   "input": "1.0E+6112"
	},
	{
	   "description": "[decq060] fold-downs (more below)",
	   "input": "1"
	},
	{
	   "description": "[decq670] fold-down full sequence",
	   "input": "1E+6110"
	},
	{
	   "description": "[decq668] fold-down full sequence",
	   "input": "1E+6111"
	},
	{
	   "description": "[decq072] Nmin and below",
	   "input": "1E-6143"
	},
	{
	   "description": "[decq076] Nmin and below",
	   "input": "1.000000000000000000000000000000001E-6143"
	},
	{
	   "description": "[decq036] fold-downs (more below)",
	   "input": "1.230000000000000000000000000000000E+6144"
	},
	{
	   "description": "[decq062] fold-downs (more below)",
	   "input": "1.23"
	},
	{
	   "description": "[decq034] Nmax and similar",
	   "input": "1.234567890123456789012345678901234E+6144"
	},
	{
	   "description": "[decq441] exponent lengths",
	   "input": "7"
	},
	{
	   "description": "[decq449] exponent lengths",
	   "input": "7E+5999"
	},
	{
	   "description": "[decq447] exponent lengths",
	   "input": "7E+999"
	},
	{
	   "description": "[decq445] exponent lengths",
	   "input": "7E+99"
	},
	{
	   "description": "[decq443] exponent lengths",
	   "input": "7E+9"
	},
	{
	   "description": "[decq842] VG testcase",
	   "input": "7.049000000000010795488000000000000E-3097"
	},
	{
	   "description": "[decq841] VG testcase",
	   "input": "8.000000000000000000E-1550"
	},
	{
	   "description": "[decq840] VG testcase",
	   "input": "8.81125000000001349436E-1548"
	},
	{
	   "description": "[decq701] Selected DPD codes",
	   "input": "9"
	},
	{
	   "description": "[decq032] Nmax and similar",
	   "input": "9.999999999999999999999999999999999E+6144"
	},
	{
	   "description": "[decq702] Selected DPD codes",
	   "input": "10"
	},
	{
	   "description": "[decq057] fold-downs (more below)",
	   "input": "12"
	},
	{
	   "description": "[decq703] Selected DPD codes",
	   "input": "19"
	},
	{
	   "description": "[decq704] Selected DPD codes",
	   "input": "20"
	},
	{
	   "description": "[decq705] Selected DPD codes",
	   "input": "29"
	},
	{
	   "description": "[decq706] Selected DPD codes",
	   "input": "30"
	},
	{
	   "description": "[decq707] Selected DPD codes",
	   "input": "39"
	},
	{
	   "description": "[decq708] Selected DPD codes",
	   "input": "40"
	},
	{
	   "description": "[decq709] Selected DPD codes",
	   "input": "49"
	},
	{
	   "description": "[decq710] Selected DPD codes",
	   "input": "50"
	},
	{
	   "description": "[decq711] Selected DPD codes",
	   "input": "59"
	},
	{
	   "description": "[decq712] Selected DPD codes",
	   "input": "60"
	},
	{
	   "description": "[decq713] Selected DPD codes",
	   "input": "69"
	},
	{
	   "description": "[decq714] Selected DPD codes",
	   "input": "70"
	},
	{
	   "description": "[decq715] Selected DPD codes",
	   "input": "71"
	},
	{
	   "description": "[decq716] Selected DPD codes",
	   "input": "72"
	},
	{
	   "description": "[decq717] Selected DPD codes",
	   "input": "73"
	},
	{
	   "description": "[decq718] Selected DPD codes",
	   "input": "74"
	},
	{
	   "description": "[decq719] Selected DPD codes",
	   "input": "75"
	},
	{
	   "description": "[decq720] Selected DPD codes",
	   "input": "76"
	},
	{
	   "description": "[decq721] Selected DPD codes",
	   "input": "77"
	},
	{
	   "description": "[decq722] Selected DPD codes",
	   "input": "78"
	},
	{
	   "description": "[decq723] Selected DPD codes",
	   "input": "79"
	},
	{
	   "description": "[decq056] fold-downs (more below)",
	   "input": "123"
	},
	{
	   "description": "[decq064] fold-downs (more below)",
	   "input": "123.45"
	},
	{
	   "description": "[decq732] Selected DPD codes",
	   "input": "520"
	},
	{
	   "description": "[decq733] Selected DPD codes",
	   "input": "521"
	},
	{
	   "description": "[decq740] DPD: one of each of the huffman groups",
	   "input": "777"
	},
	{
	   "description": "[decq741] DPD: one of each of the huffman groups",
	   "input": "778"
	},
	{
	   "description": "[decq742] DPD: one of each of the huffman groups",
	   "input": "787"
	},
	{
	   "description": "[decq746] DPD: one of each of the huffman groups",
	   "input": "799"
	},
	{
	   "description": "[decq743] DPD: one of each of the huffman groups",
	   "input": "877"
	},
	{
	   "description": "[decq753] DPD all-highs cases (includes the 24 redundant codes)",
	   "input": "888"
	},
	{
	   "description": "[decq754] DPD all-highs cases (includes the 24 redundant codes)",
	   "input": "889"
	},
	{
	   "description": "[decq760] DPD all-highs cases (includes the 24 redundant codes)",
	   "input": "898"
	},
	{
	   "description": "[decq764] DPD all-highs cases (includes the 24 redundant codes)",
	   "input": "899"
	},
	{
	   "description": "[decq745] DPD: one of each of the huffman groups",
	   "input": "979"
	},
	{
	   "description": "[decq770] DPD all-highs cases (includes the 24 redundant codes)",
	   "input": "988"
	},
	{
	   "description": "[decq774] DPD all-highs cases (includes the 24 redundant codes)",
	   "input": "989"
	},
	{
	   "description": "[decq730] Selected DPD codes",
	   "input": "994"
	},
	{
	   "description": "[decq731] Selected DPD codes",
	   "input": "995"
	},
	{
	   "description": "[decq744] DPD: one of each of the huffman groups",
	   "input": "997"
	},
	{
	   "description": "[decq780] DPD all-highs cases (includes the 24 redundant codes)",
	   "input": "998"
	},
	{
	   "description": "[decq787] DPD all-highs cases (includes the 24 redundant codes)",
	   "input": "999"
	},
	{
	   "description": "[decq053] fold-downs (more below)",
	   "input": "1234"
	},
	{
	   "description": "[decq052] fold-downs (more below)",
	   "input": "12345"
	},
	{
	   "description": "[decq792] Miscellaneous (testers' queries, etc.)",
	   "input": "30000"
	},
	{
	   "description": "[decq793] Miscellaneous (testers' queries, etc.)",
	   "input": "890000"
	},
	{
	   "description": "[decq824] values around [u]int32 edges (zeros done earlier)",
	   "input": "2147483646"
	},
	{
	   "description": "[decq825] values around [u]int32 edges (zeros done earlier)",
	   "input": "2147483647"
	},
	{
	   "description": "[decq826] values around [u]int32 edges (zeros done earlier)",
	   "input": "2147483648"
	},
	{
	   "description": "[decq827] values around [u]int32 edges (zeros done earlier)",
	   "input": "2147483649"
	},
	{
	   "description": "[decq828] values around [u]int32 edges (zeros done earlier)",
	   "input": "4294967294"
	},
	{
	   "description": "[decq829] values around [u]int32 edges (zeros done earlier)",
	   "input": "4294967295"
	},
	{
	   "description": "[decq830] values around [u]int32 edges (zeros done earlier)",
	   "input": "4294967296"
	},
	{
	   "description": "[decq831] values around [u]int32 edges (zeros done earlier)",
	   "input": "4294967297"
	},
	{
	   "description": "[decq022] Normality",
	   "input": "1111111111111111111111111111111111"
	},
	{
	   "description": "[decq020] Normality",
	   "input": "1234567890123456789012345678901234"
	},
	{
	   "description": "[decq550] Specials",
	   "input": "9999999999999999999999999999999999"
	},
	{
	   "description": "[basx066] strings without E cannot generate E in result",
	   "input": "-00345678.5432",
	   "expected": "-345678.5432"
	},
	{
	   "description": "[basx065] strings without E cannot generate E in result",
	   "input": "-0345678.5432",
	   "expected": "-345678.5432"
	},
	{
	   "description": "[basx064] strings without E cannot generate E in result",
	   "input": "-345678.5432"
	},
	{
	   "description": "[basx041] strings without E cannot generate E in result",
	   "input": "-76"
	},
	{
	   "description": "[basx027] conform to rules and exponent will be in permitted range).",
	   "input": "-9.999"
	},
	{
	   "description": "[basx026] conform to rules and exponent will be in permitted range).",
	   "input": "-9.119"
	},
	{
	   "description": "[basx025] conform to rules and exponent will be in permitted range).",
	   "input": "-9.11"
	},
	{
	   "description": "[basx024] conform to rules and exponent will be in permitted range).",
	   "input": "-9.1"
	},
	{
	   "description": "[dqbsr531] negatives (Rounded)",
	   "input": "-1.1111111111111111111111111111123450",
	   "expected": "-1.111111111111111111111111111112345"
	},
	{
	   "description": "[basx022] conform to rules and exponent will be in permitted range).",
	   "input": "-1.0"
	},
	{
	   "description": "[basx021] conform to rules and exponent will be in permitted range).",
	   "input": "-1"
	},
	{
	   "description": "[basx601] Zeros",
	   "input": "0.000000000",
	   "expected": "0E-9"
	},
	{
	   "description": "[basx622] Zeros",
	   "input": "-0.000000000",
	   "expected": "-0E-9"
	},
	{
	   "description": "[basx602] Zeros",
	   "input": "0.00000000",
	   "expected": "0E-8"
	},
	{
	   "description": "[basx621] Zeros",
	   "input": "-0.00000000",
	   "expected": "-0E-8"
	},
	{
	   "description": "[basx603] Zeros",
	   "input": "0.0000000",
	   "expected": "0E-7"
	},
	{
	   "description": "[basx620] Zeros",
	   "input": "-0.0000000",
	   "expected": "-0E-7"
	},
	{
	   "description": "[basx604] Zeros",
	   "input": "0.000000"
	},
	{
	   "description": "[basx619] Zeros",
	   "input": "-0.000000"
	},
	{
	   "description": "[basx605] Zeros",
	   "input": "0.00000"
	},
	{
	   "description": "[basx618] Zeros",
	   "input": "-0.00000"
	},
	{
	   "description": "[basx680] Zeros",
	   "input": "000000.",
	   "expected": "0"
	},
	{
	   "description": "[basx606] Zeros",
	   "input": "0.0000"
	},
	{
	   "description": "[basx617] Zeros",
	   "input": "-0.0000"
	},
	{
	   "description": "[basx681] Zeros",
	   "input": "00000.",
	   "expected": "0"
	},
	{
	   "description": "[basx686] Zeros",
	   "input": "+00000.",
	   "expected": "0"
	},
	{
	   "description": "[basx687] Zeros",
	   "input": "-00000.",
	   "expected": "-0"
	},
	{
	   "description": "[basx019] conform to rules and exponent will be in permitted range).",
	   "input": "-00.00",
	   "expected": "-0.00"
	},
	{
	   "description": "[basx607] Zeros",
	   "input": "0.000"
	},
	{
	   "description": "[basx616] Zeros",
	   "input": "-0.000"
	},
	{
	   "description": "[basx682] Zeros",
	   "input": "0000.",
	   "expected": "0"
	},
	{
	   "description": "[basx155] Numbers with E",
	   "input": "0.000e+0",
	   "expected": "0.000"
	},
	{
	   "description": "[basx130] Numbers with E",
	   "input": "0.000E-1",
	   "expected": "0.0000"
	},
	{
	   "description": "[basx290] some more negative zeros [systematic tests below]",
	   "input": "-0.000E-1",
	   "expected": "-0.0000"
	},
	{
	   "description": "[basx131] Numbers with E",
	   "input": "0.000E-2",
	   "expected": "0.00000"
	},
	{
	   "description": "[basx291] some more negative zeros [systematic tests below]",
	   "input": "-0.000E-2",
	   "expected": "-0.00000"
	},
	{
	   "description": "[basx132] Numbers with E",
	   "input": "0.000E-3",
	   "expected": "0.000000"
	},
	{
	   "description": "[basx292] some more negative zeros [systematic tests below]",
	   "input": "-0.000E-3",
	   "expected": "-0.000000"
	},
	{
	   "description": "[basx133] Numbers with E",
	   "input": "0.000E-4",
	   "expected": "0E-7"
	},
	{
	   "description": "[basx293] some more negative zeros [systematic tests below]",
	   "input": "-0.000E-4",
	   "expected": "-0E-7"
	},
	{
	   "description": "[basx608] Zeros",
	   "input": "0.00"
	},
	{
	   "description": "[basx615] Zeros",
	   "input": "-0.00"
	},
	{
	   "description": "[basx683] Zeros",
	   "input": "000.",
	   "expected": "0"
	},
	{
	   "description": "[basx630] Zeros",
	   "input": "0.00E+0",
	   "expected": "0.00"
	},
	{
	   "description": "[basx670] Zeros",
	   "input": "0.00E-0",
	   "expected": "0.00"
	},
	{
	   "description": "[basx631] Zeros",
	   "input": "0.00E+1",
	   "expected": "0.0"
	},
	{
	   "description": "[basx671] Zeros",
	   "input": "0.00E-1",
	   "expected": "0.000"
	},
	{
	   "description": "[basx134] Numbers with E",
	   "input": "0.00E-2",
	   "expected": "0.0000"
	},
	{
	   "description": "[basx294] some more negative zeros [systematic tests below]",
	   "input": "-0.00E-2",
	   "expected": "-0.0000"
	},
	{
	   "description": "[basx632] Zeros",
	   "input": "0.00E+2",
	   "expected": "0"
	},
	{
	   "description": "[basx672] Zeros",
	   "input": "0.00E-2",
	   "expected": "0.0000"
	},
	{
	   "description": "[basx135] Numbers with E",
	   "input": "0.00E-3",
	   "expected": "0.00000"
	},
	{
	   "description": "[basx295] some more negative zeros [systematic tests below]",
	   "input": "-0.00E-3",
	   "expected": "-0.00000"
	},
	{
	   "description": "[basx633] Zeros",
	   "input": "0.00E+3",
	   "expected": "0E+1"
	},
	{
	   "description": "[basx673] Zeros",
	   "input": "0.00E-3",
	   "expected": "0.00000"
	},
	{
	   "description": "[basx136] Numbers with E",
	   "input": "0.00E-4",
	   "expected": "0.000000"
	},
	{
	   "description": "[basx674] Zeros",
	   "input": "0.00E-4",
	   "expected": "0.000000"
	},
	{
	   "description": "[basx634] Zeros",
	   "input": "0.00E+4",
	   "expected": "0E+2"
	},
	{
	   "description": "[basx137] Numbers with E",
	   "input": "0.00E-5",
	   "expected": "0E-7"
	},
	{
	   "description": "[basx635] Zeros",
	   "input": "0.00E+5",
	   "expected": "0E+3"
	},
	{
	   "description": "[basx675] Zeros",
	   "input": "0.00E-5",
	   "expected": "0E-7"
	},
	{
	   "description": "[basx636] Zeros",
	   "input": "0.00E+6",
	   "expected": "0E+4"
	},
	{
	   "description": "[basx676] Zeros",
	   "input": "0.00E-6",
	   "expected": "0E-8"
	},
	{
	   "description": "[basx637] Zeros",
	   "input": "0.00E+7",
	   "expected": "0E+5"
	},
	{
	   "description": "[basx677] Zeros",
	   "input": "0.00E-7",
	   "expected": "0E-9"
	},
	{
	   "description": "[basx638] Zeros",
	   "input": "0.00E+8",
	   "expected": "0E+6"
	},
	{
	   "description": "[basx678] Zeros",
	   "input": "0.00E-8",
	   "expected": "0E-10"
	},
	{
	   "description": "[basx149] Numbers with E",
	   "input": "000E+9",
	   "expected": "0E+9"
	},
	{
	   "description": "[basx639] Zeros",
	   "input": "0.00E+9",
	   "expected": "0E+7"
	},
	{
	   "description": "[basx679] Zeros",
	   "input": "0.00E-9",
	   "expected": "0E-11"
	},
	{
	   "description": "[basx063] strings without E cannot generate E in result",
	   "input": "+00345678.5432",
	   "expected": "345678.5432"
	},
	{
	   "description": "[basx018] conform to rules and exponent will be in permitted range).",
	   "input": "-0.0"
	},
	{
	   "description": "[basx609] Zeros",
	   "input": "0.0"
	},
	{
	   "description": "[basx614] Zeros",
	   "input": "-0.0"
	},
	{
	   "description": "[basx684] Zeros",
	   "input": "00.",
	   "expected": "0"
	},
	{
	   "description": "[basx640] Zeros",
	   "input": "0.0E+0",
	   "expected": "0.0"
	},
	{
	   "description": "[basx660] Zeros",
	   "input": "0.0E-0",
	   "expected": "0.0"
	},
	{
	   "description": "[basx641] Zeros",
	   "input": "0.0E+1",
	   "expected": "0"
	},
	{
	   "description": "[basx661] Zeros",
	   "input": "0.0E-1",
	   "expected": "0.00"
	},
	{
	   "description": "[basx296] some more negative zeros [systematic tests below]",
	   "input": "-0.0E-2",
	   "expected": "-0.000"
	},
	{
	   "description": "[basx642] Zeros",
	   "input": "0.0E+2",
	   "expected": "0E+1"
	},
	{
	   "description": "[basx662] Zeros",
	   "input": "0.0E-2",
	   "expected": "0.000"
	},
	{
	   "description": "[basx297] some more negative zeros [systematic tests below]",
	   "input": "-0.0E-3",
	   "expected": "-0.0000"
	},
	{
	   "description": "[basx643] Zeros",
	   "input": "0.0E+3",
	   "expected": "0E+2"
	},
	{
	   "description": "[basx663] Zeros",
	   "input": "0.0E-3",
	   "expected": "0.0000"
	},
	{
	   "description": "[basx644] Zeros",
	   "input": "0.0E+4",
	   "expected": "0E+3"
	},
	{
	   "description": "[basx664] Zeros",
	   "input": "0.0E-4",
	   "expected": "0.00000"
	},
	{
	   "description": "[basx645] Zeros",
	   "input": "0.0E+5",
	   "expected": "0E+4"
	},
	{
	   "description": "[basx665] Zeros",
	   "input": "0.0E-5",
	   "expected": "0.000000"
	},
	{
	   "description": "[basx646] Zeros",
	   "input": "0.0E+6",
	   "expected": "0E+5"
	},
	{
	   "description": "[basx666] Zeros",
	   "input": "0.0E-6",
	   "expected": "0E-7"
	},
	{
	   "description": "[basx647] Zeros",
	   "input": "0.0E+7",
	   "expected": "0E+6"
	},
	{
	   "description": "[basx667] Zeros",
	   "input": "0.0E-7",
	   "expected": "0E-8"
	},
	{
	   "description": "[basx648] Zeros",
	   "input": "0.0E+8",
	   "expected": "0E+7"
	},
	{
	   "description": "[basx668] Zeros",
	   "input": "0.0E-8",
	   "expected": "0E-9"
	},
	{
	   "description": "[basx160] Numbers with E",
	   "input": "00E+9",
	   "expected": "0E+9"
	},
	{
	   "description": "[basx161] Numbers with E",
	   "input": "00E-9",
	   "expected": "0E-9"
	},
	{
	   "description": "[basx649] Zeros",
	   "input": "0.0E+9",
	   "expected": "0E+8"
	},
	{
	   "description": "[basx669] Zeros",
	   "input": "0.0E-9",
	   "expected": "0E-10"
	},
	{
	   "description": "[basx062] strings without E cannot generate E in result",
	   "input": "+0345678.5432",
	   "expected": "345678.5432"
	},
	{
	   "description": "[basx001] conform to rules and exponent will be in permitted range).",
	   "input": "0"
	},
	{
	   "description": "[basx017] conform to rules and exponent will be in permitted range).",
	   "input": "-0"
	},
	{
	   "description": "[basx611] Zeros",
	   "input": "0.",
	   "expected": "0"
	},
	{
	   "description": "[basx613] Zeros",
	   "input": "-0.",
	   "expected": "-0"
	},
	{
	   "description": "[basx685] Zeros",
	   "input": "0.",
	   "expected": "0"
	},
	{
	   "description": "[basx688] Zeros",
	   "input": "+0.",
	   "expected": "0"
	},
	{
	   "description": "[basx689] Zeros",
	   "input": "-0.",
	   "expected": "-0"
	},
	{
	   "description": "[basx650] Zeros",
	   "input": "0E+0",
	   "expected": "0"
	},
	{
	   "description": "[basx651] Zeros",
	   "input": "0E+1"
	},
	{
	   "description": "[basx298] some more negative zeros [systematic tests below]",
	   "input": "-0E-2",
	   "expected": "-0.00"
	},
	{
	   "description": "[basx652] Zeros",
	   "input": "0E+2"
	},
	{
	   "description": "[basx299] some more negative zeros [systematic tests below]",
	   "input": "-0E-3",
	   "expected": "-0.000"
	},
	{
	   "description": "[basx653] Zeros",
	   "input": "0E+3"
	},
	{
	   "description": "[basx654] Zeros",
	   "input": "0E+4"
	},
	{
	   "description": "[basx655] Zeros",
	   "input": "0E+5"
	},
	{
	   "description": "[basx656] Zeros",
	   "input": "0E+6"
	},
	{
	   "description": "[basx657] Zeros",
	   "input": "0E+7"
	},
	{
	   "description": "[basx658] Zeros",
	   "input": "0E+8"
	},
	{
	   "description": "[basx138] Numbers with E",
	   "input": "+0E+9",
	   "expected": "0E+9"
	},
	{
	   "description": "[basx139] Numbers with E",
	   "input": "-0E+9"
	},
	{
	   "description": "[basx144] Numbers with E",
	   "input": "0E+9"
	},
	{
	   "description": "[basx154] Numbers with E",
	   "input": "0E9",
	   "expected": "0E+9"
	},
	{
	   "description": "[basx659] Zeros",
	   "input": "0E+9"
	},
	{
	   "description": "[basx042] strings without E cannot generate E in result",
	   "input": "+12.76",
	   "expected": "12.76"
	},
	{
	   "description": "[basx143] Numbers with E",
	   "input": "+1E+009",
	   "expected": "1E+9"
	},
	{
	   "description": "[basx061] strings without E cannot generate E in result",
	   "input": "+345678.5432",
	   "expected": "345678.5432"
	},
	{
	   "description": "[basx036] conform to rules and exponent will be in permitted range).",
	   "input": "0.0000000123456789",
	   "expected": "1.23456789E-8"
	},
	{
	   "description": "[basx035] conform to rules and exponent will be in permitted range).",
	   "input": "0.000000123456789",
	   "expected": "1.23456789E-7"
	},
	{
	   "description": "[basx034] conform to rules and exponent will be in permitted range).",
	   "input": "0.00000123456789"
	},
	{
	   "description": "[basx053] strings without E cannot generate E in result",
	   "input": "0.0000050"
	},
	{
	   "description": "[basx033] conform to rules and exponent will be in permitted range).",
	   "input": "0.0000123456789"
	},
	{
	   "description": "[basx016] conform to rules and exponent will be in permitted range).",
	   "input": "0.012"
	},
	{
	   "description": "[basx015] conform to rules and exponent will be in permitted range).",
	   "input": "0.123"
	},
	{
	   "description": "[basx037] conform to rules and exponent will be in permitted range).",
	   "input": "0.123456789012344"
	},
	{
	   "description": "[basx038] conform to rules and exponent will be in permitted range).",
	   "input": "0.123456789012345"
	},
	{
	   "description": "[basx250] Numbers with E",
	   "input": "0.1265"
	},
	{
	   "description": "[basx257] Numbers with E",
	   "input": "0.1265E-0",
	   "expected": "0.1265"
	},
	{
	   "description": "[basx256] Numbers with E",
	   "input": "0.1265E-1",
	   "expected": "0.01265"
	},
	{
	   "description": "[basx258] Numbers with E",
	   "input": "0.1265E+1",
	   "expected": "1.265"
	},
	{
	   "description": "[basx251] Numbers with E",
	   "input": "0.1265E-20",
	   "expected": "1.265E-21"
	},
	{
	   "description": "[basx263] Numbers with E",
	   "input": "0.1265E+20",
	   "expected": "1.265E+19"
	},
	{
	   "description": "[basx255] Numbers with E",
	   "input": "0.1265E-2",
	   "expected": "0.001265"
	},
	{
	   "description": "[basx259] Numbers with E",
	   "input": "0.1265E+2",
	   "expected": "12.65"
	},
	{
	   "description": "[basx254] Numbers with E",
	   "input": "0.1265E-3",
	   "expected": "0.0001265"
	},
	{
	   "description": "[basx260] Numbers with E",
	   "input": "0.1265E+3",
	   "expected": "126.5"
	},
	{
	   "description": "[basx253] Numbers with E",
	   "input": "0.1265E-4",
	   "expected": "0.00001265"
	},
	{
	   "description": "[basx261] Numbers with E",
	   "input": "0.1265E+4",
	   "expected": "1265"
	},
	{
	   "description": "[basx252] Numbers with E",
	   "input": "0.1265E-8",
	   "expected": "1.265E-9"
	},
	{
	   "description": "[basx262] Numbers with E",
	   "input": "0.1265E+8",
	   "expected": "1.265E+7"
	},
	{
	   "description": "[basx159] Numbers with E",
	   "input": "0.73e-7",
	   "expected": "7.3E-8"
	},
	{
	   "description": "[basx004] conform to rules and exponent will be in permitted range).",
	   "input": "1.00"
	},
	{
	   "description": "[basx003] conform to rules and exponent will be in permitted range).",
	   "input": "1.0"
	},
	{
	   "description": "[basx002] conform to rules and exponent will be in permitted range).",
	   "input": "1"
	},
	{
	   "description": "[basx148] Numbers with E",
	   "input": "1E+009",
	   "expected": "1E+9"
	},
	{
	   "description": "[basx153] Numbers with E",
	   "input": "1E009",
	   "expected": "1E+9"
	},
	{
	   "description": "[basx141] Numbers with E",
	   "input": "1e+09",
	   "expected": "1E+9"
	},
	{
	   "description": "[basx146] Numbers with E",
	   "input": "1E+09",
	   "expected": "1E+9"
	},
	{
	   "description": "[basx151] Numbers with E",
	   "input": "1e09",
	   "expected": "1E+9"
	},
	{
	   "description": "[basx142] Numbers with E",
	   "input": "1E+90"
	},
	{
	   "description": "[basx147] Numbers with E",
	   "input": "1e+90",
	   "expected": "1E+90"
	},
	{
	   "description": "[basx152] Numbers with E",
	   "input": "1E90",
	   "expected": "1E+90"
	},
	{
	   "description": "[basx140] Numbers with E",
	   "input": "1E+9"
	},
	{
	   "description": "[basx150] Numbers with E",
	   "input": "1E9",
	   "expected": "1E+9"
	},
	{
	   "description": "[basx014] conform to rules and exponent will be in permitted range).",
	   "input": "1.234"
	},
	{
	   "description": "[basx170] Numbers with E",
	   "input": "1.265"
	},
	{
	   "description": "[basx177] Numbers with E",
	   "input": "1.265E-0",
	   "expected": "1.265"
	},
	{
	   "description": "[basx176] Numbers with E",
	   "input": "1.265E-1",
	   "expected": "0.1265"
	},
	{
	   "description": "[basx178] Numbers with E",
	   "input": "1.265E+1",
	   "expected": "12.65"
	},
	{
	   "description": "[basx171] Numbers with E",
	   "input": "1.265E-20"
	},
	{
	   "description": "[basx183] Numbers with E",
	   "input": "1.265E+20"
	},
	{
	   "description": "[basx175] Numbers with E",
	   "input": "1.265E-2",
	   "expected": "0.01265"
	},
	{
	   "description": "[basx179] Numbers with E",
	   "input": "1.265E+2",
	   "expected": "126.5"
	},
	{
	   "description": "[basx174] Numbers with E",
	   "input": "1.265E-3",
	   "expected": "0.001265"
	},
	{
	   "description": "[basx180] Numbers with E",
	   "input": "1.265E+3",
	   "expected": "1265"
	},
	{
	   "description": "[basx173] Numbers with E",
	   "input": "1.265E-4",
	   "expected": "0.0001265"
	},
	{
	   "description": "[basx181] Numbers with E",
	   "input": "1.265E+4"
	},
	{
	   "description": "[basx172] Numbers with E",
	   "input": "1.265E-8"
	},
	{
	   "description": "[basx182] Numbers with E",
	   "input": "1.265E+8"
	},
	{
	   "description": "[basx157] Numbers with E",
	   "input": "4E+9"
	},
	{
	   "description": "[basx067] examples",
	   "input": "5E-6",
	   "expected": "0.000005"
	},
	{
	   "description": "[basx069] examples",
	   "input": "5E-7"
	},
	{
	   "description": "[basx385] Engineering notation tests",
	   "input": "7E0",
	   "expected": "7"
	},
	{
	   "description": "[basx365] Engineering notation tests",
	   "input": "7E10",
	   "expected": "7E+10"
	},
	{
	   "description": "[basx405] Engineering notation tests",
	   "input": "7E-10"
	},
	{
	   "description": "[basx363] Engineering notation tests",
	   "input": "7E11",
	   "expected": "7E+11"
	},
	{
	   "description": "[basx407] Engineering notation tests",
	   "input": "7E-11"
	},
	{
	   "description": "[basx361] Engineering notation tests",
	   "input": "7E12",
	   "expected": "7E+12"
	},
	{
	   "description": "[basx409] Engineering notation tests",
	   "input": "7E-12"
	},
	{
	   "description": "[basx411] Engineering notation tests",
	   "input": "7E-13"
	},
	{
	   "description": "[basx383] Engineering notation tests",
	   "input": "7E1",
	   "expected": "7E+1"
	},
	{
	   "description": "[basx387] Engineering notation tests",
	   "input": "7E-1",
	   "expected": "0.7"
	},
	{
	   "description": "[basx381] Engineering notation tests",
	   "input": "7E2",
	   "expected": "7E+2"
	},
	{
	   "description": "[basx389] Engineering notation tests",
	   "input": "7E-2",
	   "expected": "0.07"
	},
	{
	   "description": "[basx379] Engineering notation tests",
	   "input": "7E3",
	   "expected": "7E+3"
	},
	{
	   "description": "[basx391] Engineering notation tests",
	   "input": "7E-3",
	   "expected": "0.007"
	},
	{
	   "description": "[basx377] Engineering notation tests",
	   "input": "7E4",
	   "expected": "7E+4"
	},
	{
	   "description": "[basx393] Engineering notation tests",
	   "input": "7E-4",
	   "expected": "0.0007"
	},
	{
	   "description": "[basx375] Engineering notation tests",
	   "input": "7E5",
	   "expected": "7E+5"
	},
	{
	   "description": "[basx395] Engineering notation tests",
	   "input": "7E-5",
	   "expected": "0.00007"
	},
	{
	   "description": "[basx373] Engineering notation tests",
	   "input": "7E6",
	   "expected": "7E+6"
	},
	{
	   "description": "[basx397] Engineering notation tests",
	   "input": "7E-6",
	   "expected": "0.000007"
	},
	{
	   "description": "[basx371] Engineering notation tests",
	   "input": "7E7",
	   "expected": "7E+7"
	},
	{
	   "description": "[basx399] Engineering notation tests",
	   "input": "7E-7"
	},
	{
	   "description": "[basx369] Engineering notation tests",
	   "input": "7E8",
	   "expected": "7E+8"
	},
	{
	   "description": "[basx401] Engineering notation tests",
	   "input": "7E-8"
	},
	{
	   "description": "[basx367] Engineering notation tests",
	   "input": "7E9",
	   "expected": "7E+9"
	},
	{
	   "description": "[basx403] Engineering notation tests",
	   "input": "7E-9"
	},
	{
	   "description": "[basx007] conform to rules and exponent will be in permitted range).",
	   "input": "10.0"
	},
	{
	   "description": "[basx005] conform to rules and exponent will be in permitted range).",
	   "input": "10"
	},
	{
	   "description": "[basx165] Numbers with E",
	   "input": "10E+009",
	   "expected": "1.0E+10"
	},
	{
	   "description": "[basx163] Numbers with E",
	   "input": "10E+09",
	   "expected": "1.0E+10"
	},
	{
	   "description": "[basx325] Engineering notation tests",
	   "input": "10e0",
	   "expected": "10"
	},
	{
	   "description": "[basx305] Engineering notation tests",
	   "input": "10e10",
	   "expected": "1.0E+11"
	},
	{
	   "description": "[basx345] Engineering notation tests",
	   "input": "10e-10",
	   "expected": "1.0E-9"
	},
	{
	   "description": "[basx303] Engineering notation tests",
	   "input": "10e11",
	   "expected": "1.0E+12"
	},
	{
	   "description": "[basx347] Engineering notation tests",
	   "input": "10e-11",
	   "expected": "1.0E-10"
	},
	{
	   "description": "[basx301] Engineering notation tests",
	   "input": "10e12",
	   "expected": "1.0E+13"
	},
	{
	   "description": "[basx349] Engineering notation tests",
	   "input": "10e-12",
	   "expected": "1.0E-11"
	},
	{
	   "description": "[basx351] Engineering notation tests",
	   "input": "10e-13",
	   "expected": "1.0E-12"
	},
	{
	   "description": "[basx323] Engineering notation tests",
	   "input": "10e1",
	   "expected": "1.0E+2"
	},
	{
	   "description": "[basx327] Engineering notation tests",
	   "input": "10e-1",
	   "expected": "1.0"
	},
	{
	   "description": "[basx321] Engineering notation tests",
	   "input": "10e2",
	   "expected": "1.0E+3"
	},
	{
	   "description": "[basx329] Engineering notation tests",
	   "input": "10e-2",
	   "expected": "0.10"
	},
	{
	   "description": "[basx319] Engineering notation tests",
	   "input": "10e3",
	   "expected": "1.0E+4"
	},
	{
	   "description": "[basx331] Engineering notation tests",
	   "input": "10e-3",
	   "expected": "0.010"
	},
	{
	   "description": "[basx317] Engineering notation tests",
	   "input": "10e4",
	   "expected": "1.0E+5"
	},
	{
	   "description": "[basx333] Engineering notation tests",
	   "input": "10e-4",
	   "expected": "0.0010"
	},
	{
	   "description": "[basx315] Engineering notation tests",
	   "input": "10e5",
	   "expected": "1.0E+6"
	},
	{
	   "description": "[basx335] Engineering notation tests",
	   "input": "10e-5",
	   "expected": "0.00010"
	},
	{
	   "description": "[basx313] Engineering notation tests",
	   "input": "10e6",
	   "expected": "1.0E+7"
	},
	{
	   "description": "[basx337] Engineering notation tests",
	   "input": "10e-6",
	   "expected": "0.000010"
	},
	{
	   "description": "[basx311] Engineering notation tests",
	   "input": "10e7",
	   "expected": "1.0E+8"
	},
	{
	   "description": "[basx339] Engineering notation tests",
	   "input": "10e-7",
	   "expected": "0.0000010"
	},
	{
	   "description": "[basx309] Engineering notation tests",
	   "input": "10e8",
	   "expected": "1.0E+9"
	},
	{
	   "description": "[basx341] Engineering notation tests",
	   "input": "10e-8",
	   "expected": "1.0E-7"
	},
	{
	   "description": "[basx164] Numbers with E",
	   "input": "10e+90",
	   "expected": "1.0E+91"
	},
	{
	   "description": "[basx162] Numbers with E",
	   "input": "10E+9",
	   "expected": "1.0E+10"
	},
	{
	   "description": "[basx307] Engineering notation tests",
	   "input": "10e9",
	   "expected": "1.0E+10"
	},
	{
	   "description": "[basx343] Engineering notation tests",
	   "input": "10e-9",
	   "expected": "1.0E-8"
	},
	{
	   "description": "[basx008] conform to rules and exponent will be in permitted range).",
	   "input": "10.1"
	},
	{
	   "description": "[basx009] conform to rules and exponent will be in permitted range).",
	   "input": "10.4"
	},
	{
	   "description": "[basx010] conform to rules and exponent will be in permitted range).",
	   "input": "10.5"
	},
	{
	   "description": "[basx011] conform to rules and exponent will be in permitted range).",
	   "input": "10.6"
	},
	{
	   "description": "[basx012] conform to rules and exponent will be in permitted range).",
	   "input": "10.9"
	},
	{
	   "description": "[basx013] conform to rules and exponent will be in permitted range).",
	   "input": "11.0"
	},
	{
	   "description": "[basx040] strings without E cannot generate E in result",
	   "input": "12"
	},
	{
	   "description": "[basx190] Numbers with E",
	   "input": "12.65"
	},
	{
	   "description": "[basx197] Numbers with E",
	   "input": "12.65E-0",
	   "expected": "12.65"
	},
	{
	   "description": "[basx196] Numbers with E",
	   "input": "12.65E-1",
	   "expected": "1.265"
	},
	{
	   "description": "[basx198] Numbers with E",
	   "input": "12.65E+1",
	   "expected": "126.5"
	},
	{
	   "description": "[basx191] Numbers with E",
	   "input": "12.65E-20",
	   "expected": "1.265E-19"
	},
	{
	   "description": "[basx203] Numbers with E",
	   "input": "12.65E+20",
	   "expected": "1.265E+21"
	},
	{
	   "description": "[basx195] Numbers with E",
	   "input": "12.65E-2",
	   "expected": "0.1265"
	},
	{
	   "description": "[basx199] Numbers with E",
	   "input": "12.65E+2",
	   "expected": "1265"
	},
	{
	   "description": "[basx194] Numbers with E",
	   "input": "12.65E-3",
	   "expected": "0.01265"
	},
	{
	   "description": "[basx200] Numbers with E",
	   "input": "12.65E+3",
	   "expected": "1.265E+4"
	},
	{
	   "description": "[basx193] Numbers with E",
	   "input": "12.65E-4",
	   "expected": "0.001265"
	},
	{
	   "description": "[basx201] Numbers with E",
	   "input": "12.65E+4",
	   "expected": "1.265E+5"
	},
	{
	   "description": "[basx192] Numbers with E",
	   "input": "12.65E-8",
	   "expected": "1.265E-7"
	},
	{
	   "description": "[basx202] Numbers with E",
	   "input": "12.65E+8",
	   "expected": "1.265E+9"
	},
	{
	   "description": "[basx044] strings without E cannot generate E in result",
	   "input": "012.76",
	   "expected": "12.76"
	},
	{
	   "description": "[basx042] strings without E cannot generate E in result",
	   "input": "12.76"
	},
	{
	   "description": "[basx046] strings without E cannot generate E in result",
	   "input": "17.",
	   "expected": "17"
	},
	{
	   "description": "[basx049] strings without E cannot generate E in result",
	   "input": "0044",
	   "expected": "44"
	},
	{
	   "description": "[basx048] strings without E cannot generate E in result",
	   "input": "044",
	   "expected": "44"
	},
	{
	   "description": "[basx158] Numbers with E",
	   "input": "44E+9",
	   "expected": "4.4E+10"
	},
	{
	   "description": "[basx068] examples",
	   "input": "50E-7",
	   "expected": "0.0000050"
	},
	{
	   "description": "[basx169] Numbers with E",
	   "input": "100e+009",
	   "expected": "1.00E+11"
	},
	{
	   "description": "[basx167] Numbers with E",
	   "input": "100e+09",
	   "expected": "1.00E+11"
	},
	{
	   "description": "[basx168] Numbers with E",
	   "input": "100E+90",
	   "expected": "1.00E+92"
	},
	{
	   "description": "[basx166] Numbers with E",
	   "input": "100e+9",
	   "expected": "1.00E+11"
	},
	{
	   "description": "[basx210] Numbers with E",
	   "input": "126.5"
	},
	{
	   "description": "[basx217] Numbers with E",
	   "input": "126.5E-0",
	   "expected": "126.5"
	},
	{
	   "description": "[basx216] Numbers with E",
	   "input": "126.5E-1",
	   "expected": "12.65"
	},
	{
	   "description": "[basx218] Numbers with E",
	   "input": "126.5E+1",
	   "expected": "1265"
	},
	{
	   "description": "[basx211] Numbers with E",
	   "input": "126.5E-20",
	   "expected": "1.265E-18"
	},
	{
	   "description": "[basx223] Numbers with E",
	   "input": "126.5E+20",
	   "expected": "1.265E+22"
	},
	{
	   "description": "[basx215] Numbers with E",
	   "input": "126.5E-2",
	   "expected": "1.265"
	},
	{
	   "description": "[basx219] Numbers with E",
	   "input": "126.5E+2",
	   "expected": "1.265E+4"
	},
	{
	   "description": "[basx214] Numbers with E",
	   "input": "126.5E-3",
	   "expected": "0.1265"
	},
	{
	   "description": "[basx220] Numbers with E",
	   "input": "126.5E+3",
	   "expected": "1.265E+5"
	},
	{
	   "description": "[basx213] Numbers with E",
	   "input": "126.5E-4",
	   "expected": "0.01265"
	},
	{
	   "description": "[basx221] Numbers with E",
	   "input": "126.5E+4",
	   "expected": "1.265E+6"
	},
	{
	   "description": "[basx212] Numbers with E",
	   "input": "126.5E-8",
	   "expected": "0.000001265"
	},
	{
	   "description": "[basx222] Numbers with E",
	   "input": "126.5E+8",
	   "expected": "1.265E+10"
	},
	{
	   "description": "[basx006] conform to rules and exponent will be in permitted range).",
	   "input": "1000"
	},
	{
	   "description": "[basx230] Numbers with E",
	   "input": "1265"
	},
	{
	   "description": "[basx237] Numbers with E",
	   "input": "1265E-0",
	   "expected": "1265"
	},
	{
	   "description": "[basx236] Numbers with E",
	   "input": "1265E-1",
	   "expected": "126.5"
	},
	{
	   "description": "[basx238] Numbers with E",
	   "input": "1265E+1",
	   "expected": "1.265E+4"
	},
	{
	   "description": "[basx231] Numbers with E",
	   "input": "1265E-20",
	   "expected": "1.265E-17"
	},
	{
	   "description": "[basx243] Numbers with E",
	   "input": "1265E+20",
	   "expected": "1.265E+23"
	},
	{
	   "description": "[basx235] Numbers with E",
	   "input": "1265E-2",
	   "expected": "12.65"
	},
	{
	   "description": "[basx239] Numbers with E",
	   "input": "1265E+2",
	   "expected": "1.265E+5"
	},
	{
	   "description": "[basx234] Numbers with E",
	   "input": "1265E-3",
	   "expected": "1.265"
	},
	{
	   "description": "[basx240] Numbers with E",
	   "input": "1265E+3",
	   "expected": "1.265E+6"
	},
	{
	   "description": "[basx233] Numbers with E",
	   "input": "1265E-4",
	   "expected": "0.1265"
	},
	{
	   "description": "[basx241] Numbers with E",
	   "input": "1265E+4",
	   "expected": "1.265E+7"
	},
	{
	   "description": "[basx232] Numbers with E",
	   "input": "1265E-8",
	   "expected": "0.00001265"
	},
	{
	   "description": "[basx242] Numbers with E",
	   "input": "1265E+8",
	   "expected": "1.265E+11"
	},
	{
	   "description": "[basx060] strings without E cannot generate E in result",
	   "input": "345678.5432"
	},
	{
	   "description": "[basx059] strings without E cannot generate E in result",
	   "input": "0345678.54321",
	   "expected": "345678.54321"
	},
	{
	   "description": "[basx058] strings without E cannot generate E in result",
	   "input": "345678.543210"
	},
	{
	   "description": "[basx057] strings without E cannot generate E in result",
	   "input": "2345678.543210"
	},
	{
	   "description": "[basx056] strings without E cannot generate E in result",
	   "input": "12345678.543210"
	},
	{
	   "description": "[basx031] conform to rules and exponent will be in permitted range).",
	   "input": "123456789.000000"
	},
	{
	   "description": "[basx030] conform to rules and exponent will be in permitted range).",
	   "input": "123456789.123456"
	},
	{
	   "description": "[basx032] conform to rules and exponent will be in permitted range).",
	   "input": "123456789123456"
	}

	
]