//Name of the File : image-resize-sharp.js
const sharp = require('sharp');
const fs = require('fs');
const isImage = require('is-image');

var path = require('path')

let input = 'G:/A mettre sur le site/Photos/'; /*"C:/wamp64/www/nodeJs/images/a_faire/";*/
let output = 'C:/wamp64/www/nodeJs/images/output2/';

let largeSizeDir = '600/';
let largeSize = '_l';

let smallSizeDir = '125/';
let smallSize = '_s';

let verySmallSizeDir = '80/';
let verySmallSize = '_vs';


const vs = output + verySmallSizeDir;
const s = output + smallSizeDir;
const l = output + largeSizeDir;
const finalDir = "final/";

fs.readdirSync(input).forEach(file => {

	if (isImage(file)){

		let name = file.split(/\D[^-[1-9]]?/)
		
		if (name !== undefined || name.length > 0) {
			
			name = name[0]
			//Devoir prendre en compte le nom des fichier avec des -1 -2 (faire un regex pour le nom)
			let image = sharp(input + file);
			
			
			image.metadata().then((response) => {
			
					let width = response.width
					let height = response.height
					
					let type1 = "height"
					let type2 = "width"
				
					if (width >= height){
						type1 = "width"
						type2 = "height"
					}
					
					image
						.resize({ 
							[type1]: 80, 
							[type2]: 80, 
							fit: sharp.fit.contain,
							background: {
								r: 0, g: 0, b: 0, alpha: 0
							} 
						})
						.toFormat(sharp.format.png)
						.toFile(output + verySmallSizeDir + name + verySmallSize  + '.png')								

					image
						.resize({ 
							[type1]: 125, 
							[type2]: 125, 
							fit: sharp.fit.contain,
							background: {
								r: 0, g: 0, b: 0, alpha: 0
							} 
						})
						.toFormat(sharp.format.png)
						.toFile(output + smallSizeDir + name + smallSize  + '.png')		

					image
						.resize({ 
							[type1]: 600, 
							[type2]: 600, 
							fit: sharp.fit.contain,
							background: {
								r: 0, g: 0, b: 0, alpha: 0
							} 
						})
						.toFormat(sharp.format.png)
						.toFile(output + largeSizeDir + name + largeSize  +'.png')
					
					
			//console.log(name + ' fini')		
			});
		
		}
	}		
	
})






	

	