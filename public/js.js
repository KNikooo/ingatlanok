$(function() {
	const ajax = new AjaxHivas();
	let ingatlanok = '/api/ingatlanok';
	let kategoriak = '/api/kategoriak';
	ajax.getAjax(ingatlanok, ingatlanLista);
	ajax.getAjax(kategoriak, kategoriakFeltolt);

	function kategoriakFeltolt(tomb) {
		/* console.log(tomb); */
		$('.kategoriaSelect').append(`<option>Kérem válasszon</option>`);
		tomb.forEach((element) => {
			$('.kategoriaSelect').append(`<option value='${element.id}'>${element.nev}</option>`);
		});
	}

	$('#uj').on('click', function() {
		console.log('uj');
		let kat = $('.kategoriaSelect').val();
		let leiras = $('#leiras').val();
		let hirD = $('#hirdetesDatuma').val();
		let url = $('#kepURL').val();
		let tehermentes = 0;
		if ($('#tehermentes').is(':checked')) {
			tehermentes = 1;
			console.log('igen');
		} else {
			tehermentes = 0;
			console.log('nem');
		}

		let adat = {
			kategoria: kat,
			leiras: leiras,
			hirdetesDatuma: hirD,
			tehermentes: tehermentes,
			kepURL: url
		};

		console.log(adat);
		ajax.postAjax(ingatlanok, adat);
		location.reload();
	});

	$(window).on('erdekel', (event) => {
        let szoveg="";
        if(event.detail.tehermentes == 1){
            szoveg="igen";
        } else {
            szoveg="nem";
        }

        let ar="";
        if(event.detail.ar == null){
            ar="nincs megadva";
        }else{
            ar=event.detail.ar + " Ft";
        }
		alert('Kategoria: ' + event.detail.kategoriak.nev + '\nLeírás: ' + event.detail.leiras+ '\nHirdetés dátuma: ' + event.detail.hirdetesDatuma+ '\nTerhelesmentes: ' + szoveg+ '\nAr: ' + ar);
	});
});
