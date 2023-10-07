function user() {
	const respuesta = prompt(
		"Ingresa alguno de estos nombres: Dilan , Lilian , Shirley, Marlyn, Emerson"
	);

	if (respuesta === "Dilan" || respuesta === "dilan") {
		alert("Tu apodo sera: nucita");
	} else if (respuesta === "Lilian" || respuesta === "lilian") {
		alert(" Tu apodo sera: enana castrosa");
	} else if (respuesta === "Shirley" || respuesta === "shirley") {
		alert("foto corpiño?");
	} else if (respuesta === "Marlyn" || respuesta === "marlyn") {
		alert("sebitass Guapo :)");
	} else if (respuesta === "Emerson" || respuesta === "emerson") {
		alert("mañana sin camisa de botones :)");
	} else {
		alert("Este nombre no es valido, preciona el boton nuevamente");
	}
}
