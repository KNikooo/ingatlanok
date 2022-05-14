class Ingatlan {
	constructor(elem, adat) {
		this.elem = elem;
		this.adat = adat;

        this.gombErdekel = elem.children('.erdekel');

		this.kat = elem.children('.kategoria');
		this.ar = elem.children('.ar');
		this.lei = elem.children('.leiras');
		this.hirD = elem.children('.hirdetesDatuma');
		this.ter = elem.children('.tehermentes');
		this.kep = elem.children('.kepURL').children('img');

		this.setAdatok(this.adat);

        this.gombErdekel.on('click', () => {
			console.log('erdekel');
			this.kattintasTrigger('erdekel');
		});
	}

	setAdatok(ertekek) {
		this.kat.html(ertekek.kategoriak.nev);
		this.ar.html(ertekek.ar);
		this.lei.html(ertekek.leiras);
        if(ertekek.tehermentes == 1){
            this.ter.html('igen');
        } else {
            this.ter.html('nem');
        }
		this.hirD.html(ertekek.hirdetesDatuma);
		this.kep.attr('src',ertekek.kepURL);
	}

    kattintasTrigger(esemenyneve) {
		let esemeny = new CustomEvent(esemenyneve, {detail: this.adat });
		window.dispatchEvent(esemeny);
	} 
}