// class Lightning {
//   constructor() {
//     this.center = { x: width / 2, y: 20 }
//     this.minSeg = 5;
//     this.groundHeight = height - 20;
//     this.color = '#FFFFFF'
//     this.roughness = 2;
//     this.maxDiff = height / 5;

//     this.lightning = [];
//     this.drawLightning();
//   }

//   drawLightning() {
//     let startY = this.groundHeight + (Math.random() - 0.9) * 50;
//     let segHeight = startY - this.center.y;

//     let start = { x: this.center.x, y: this.center.y }
//     this.lightning.push(start)
//     let end = { x: Math.random() * (width - 100) + 50, y: startY }
//     this.lightning.push(end);

//     let currDiff = this.maxDiff;
//     while (segHeight > this.minSeg) {
//       let newSegs = [];

//       for (let i = 0; i < this.lightning.length - 1; i++) {
//         let start = this.lightning[i];
//         let end = this.lightning[i + 1];
//         let midPtX = (start.x + end.x) / 2;
//         let newX = midPtX + (Math.random() * 2 - 1) * currDiff;
//         newSegs.push(start, { x: newX, y: (start.y + end.y) / 2 })
//       }
//       newSegs.push(this.lightning.pop());
//       this.lightning = newSegs;
//       currDiff /= this.roughness;
//       segHeight /= 2;
//     }
//   }

//   display() {
//     stroke(this.color)
//     strokeWeight(1)

//     for (let i = 0; i < this.lightning.length - 1; i++) {
//       let seg = this.lightning[i];
//       let nextSeg = this.lightning[i + 1];
//       line(seg.x, seg.y, nextSeg.y, nextSeg.x);
//     }

//   }
// }

// function setup() {
//   createCanvas(500, 500);
// }

// function draw() {
//   background('gray')
//   let lightning = new Lightning();
//   lightning.display()
// }