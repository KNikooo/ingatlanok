function ingatlanLista(tomb) {
    const szuloElem = $("#adatok");
    const sablonElem = $("#sablon .adat");

    tomb.forEach(function (adat) {
        let ujElem = sablonElem.clone().appendTo(szuloElem);
        const ujIngatlan = new Ingatlan(ujElem, adat);
        /* console.log(ujIngatlan); */
    });
    sablonElem.remove();
}