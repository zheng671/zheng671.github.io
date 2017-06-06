import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  @ViewChild('canvas') canvasRef: ElementRef;

  ngOnInit() {

    let canvas = this.canvasRef.nativeElement;
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.width  = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    let ctx: CanvasRenderingContext2D = canvas.getContext('2d');
    ctx.globalCompositeOperation = 'overlay';
    
    // var colors = ['rgb(214, 144, 239)', 'rgb(119, 197, 219)']
    let colors = ['rgb(240,240,240)', 'rgb(235,235,235)', 'rgb(230,230,230)', 'rgb(225,225,225)'];

    // will make a feasable amount of triangles to fit the screen
    let amount = Math.floor((canvas.width * canvas.height) / 25000);

    // Draw the clip path that will mask everything else
    for (var i = 0; i < amount; i++) {
      this.makeTriangle(canvas, ctx, colors[this.randomInt(0, colors.length - 1)]);
    }
  }

  makeTriangle(canvas, ctx, fillColor) {
    var coordinates = this.getStart(canvas);
    ctx.fillStyle = fillColor;
    ctx.beginPath();
    this.drawLines(canvas, ctx, coordinates);
    ctx.closePath();
    ctx.fill();
  }

  getStart(canvas) {
    var startArray = {};
    startArray["x"] = Math.floor((Math.random() * canvas.width) + 1);
    startArray["y"] = Math.floor((Math.random() * canvas.height) + 1);
    return startArray
  }

  drawLines(canvas, ctx, coordinates) {
    let step = Math.floor(canvas.width / 4);

    ctx.moveTo(coordinates.x, coordinates.y);
    ctx.lineTo(coordinates.x + this.randomInt(-step, step), coordinates.y + this.randomInt(-step, step));
    ctx.lineTo(coordinates.x + this.randomInt(-step, step), coordinates.y + this.randomInt(-step, step));
    ctx.lineTo(coordinates.x, coordinates.y);
  }

  randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
