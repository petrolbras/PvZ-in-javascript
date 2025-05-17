const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const interval = 1000 / 60;
const sunInterval = 1000

let img = new Image();
img.src = "imgs/sol.png";
let sois = [];

sois.push({ x: 650, y: 0, velx: 0, vely: 3, id: 1, bateuNoChao: false },
{ x: 650, y: 0, velx: 0, vely: 6, id: 2, bateuNoChao: false  });

setInterval(() => {
	ctx.fillStyle = "green";
	ctx.fillRect(0, 0, 1500, 1000);

	for (var i = 0; i < sois.length; i++) {
		ctx.drawImage(img, sois[i].x, sois[i].y, 100, 100);
		sois[i].x = sois[i].x + sois[i].velx;
		sois[i].y = sois[i].y + sois[i].vely;

		if (sois[i].y >= 900) {
			sois[i].vely = 0;

            if (sois[i].bateuNoChao) {

            } else {
                let idASerDeletado = sois[i].id
                setTimeout(() => {
                    sois.splice(
                        sois.findIndex((sol) => {
                            return sol.id == idASerDeletado
                        }), 1)

                }, sunInterval)  
            }
            sois[i].bateuNoChao = true
		}


	}
}, interval);
