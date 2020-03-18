function newtonDois(){
	let x0 = Number(document.getElementById("x0").value);
	let x1 = Number(document.getElementById("x1").value);
	let fx0 = Number(document.getElementById("fx0").value);
	let fx1 = Number(document.getElementById("fx1").value);
	let ponto = Number(document.getElementById("ponto").value);
	
    let k1 = (fx1 - fx0) / (x1 - x0)
    	
	let px = fx0 + (ponto - x0)  * k1

	return px;
}

function newtonTres(){
	let x0 = Number(document.getElementById("x0").value);
    let x1 = Number(document.getElementById("x1").value);
    let x2 = Number(document.getElementById("x2").value);
	let fx0 = Number(document.getElementById("fx0").value);
    let fx1 = Number(document.getElementById("fx1").value);
    let fx2 = Number(document.getElementById("fx2").value);
	let ponto = Number(document.getElementById("ponto").value);
	
    let k1 = (fx1 - fx0) / (x1 - x0)
    let k11 = (fx2 - fx1) / (x2 - x1)
    let k2 = (k11 - k1) / (x2 - x0)
	let px = (fx0 + (ponto - x0) * k1) + ((ponto - x0) * (ponto - x1) * k2)

	return px;
}

function newtonQuatro(){
	let x0 = Number(document.getElementById("x0").value);
    let x1 = Number(document.getElementById("x1").value);
    let x2 = Number(document.getElementById("x2").value);
    let x3 = Number(document.getElementById("x3").value);
	let fx0 = Number(document.getElementById("fx0").value);
    let fx1 = Number(document.getElementById("fx1").value);
    let fx2 = Number(document.getElementById("fx2").value);
    let fx3 = Number(document.getElementById("fx2").value);
	let ponto = Number(document.getElementById("ponto").value);
    
    //k1
    let k1 = (fx1 - fx0) / (x1 - x0)
    let k11 = (fx2 - fx1) / (x2 - x1)
    let k12 = (fx3 - fx2) / (x3 - x2)

    //k2
    let k2 = (k11 - k1) / (x2 - x0)
    let k21 = (k12 - k11) / (x3 - x1)

    //k3
    let k3 = (k21 - k2) / (x3 - x0)

	let px = (fx0 + (ponto - x0) * k1) + ((ponto - x0) * (ponto - x1) * k2) + ((ponto - x0) * (ponto - x1) * (ponto - x2) * k3)

	return px;
}


function newtonCinco(){
	let x0 = Number(document.getElementById("x0").value);
    let x1 = Number(document.getElementById("x1").value);
    let x2 = Number(document.getElementById("x2").value);
    let x3 = Number(document.getElementById("x3").value);
    let x4 = Number(document.getElementById("x3").value);
	let fx0 = Number(document.getElementById("fx0").value);
    let fx1 = Number(document.getElementById("fx1").value);
    let fx2 = Number(document.getElementById("fx2").value);
    let fx3 = Number(document.getElementById("fx2").value);
    let fx4 = Number(document.getElementById("fx2").value);
	let ponto = Number(document.getElementById("ponto").value);
    
    //k1
    let k1 = (fx1 - fx0) / (x1 - x0)
    let k11 = (fx2 - fx1) / (x2 - x1)
    let k12 = (fx3 - fx2) / (x3 - x2)
    let k13 = (fx4 - fx3) / (x4 - x3)

    //k2
    let k2 = (k11 - k1) / (x2 - x0)
    let k21 = (k12 - k11) / (x3 - x1)
    let k22 = (k13 - k12) / (x4 - x2)

    //k3
    let k3 = (k21 - k2) / (x3 - x0)
    let k31 = (k22 - k21) / (x4 -x1)

    //k4
    let k4 = (k31 - k3) / (x4 - x0)

    let px = (fx0 + (ponto - x0) * k1) + ((ponto - x0) * (ponto - x1) * k2) + ((ponto - x0) * (ponto - x1) * (ponto - x2) * k3) + ((ponto - x0) * (ponto - x1) * (ponto - x2) * (ponto - x3) * k4)

	return px;
}