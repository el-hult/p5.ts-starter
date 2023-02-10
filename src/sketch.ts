import p5 from 'p5';
import {foo} from './lib';

const sketch = (p: p5): void => {

  let pg: p5.Graphics | undefined;
  p.setup = ():void => {
    p.createCanvas(400, 400);
    pg = p.createGraphics(400,400);
  };

  p.draw = ():void => {
    p.background('#3178c6');
    const my_p_tag = p.createP(foo());
    my_p_tag.position(200, 100);

    p.fill(0,12)
    p.fill(0, 12);
    p.rect(0, 0, p.width, p.height);
    p.fill(255);
    p.noStroke();
    p.ellipse(p.mouseX, p.mouseY, 60, 60);
    if (pg) {
      pg.background(51);
      pg.noFill();
      pg.stroke(255);
      pg.ellipse(p.mouseX - 150, p.mouseY - 75, 60, 60);
    
      //Draw the offscreen buffer to the screen with image()
      p.image(pg!, 150, 75);
    }
  };
};

new p5(sketch);