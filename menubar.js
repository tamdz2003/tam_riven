onresize = onload = function() {
  let menutab_size = (document.body.clientWidth - 5 * 2 * 4) / 4;

  menutab_size = menutab_size + "px";
	console.log(menutab_size);
	
	for (let i = 1; i <= 4; ++i) {
		document.getElementById("menutab" + i).style.width = menutab_size;
	}
};
