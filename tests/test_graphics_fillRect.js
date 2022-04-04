var g = Graphics.createArrayBuffer(32,32,8);
g.dump = _=>{
  var s = "";
  var b = new Uint8Array(g.buffer);
  var n = 0;
  for (var y=0;y<g.getHeight();y++) {
    s+="\n";
    for (var x=0;x<g.getWidth();x++) 
      s+=".#XO+"[b[n++]];
  }
  return s;
}
g.print = _=>{
  print("`"+g.dump()+"`");
}
var ok = true;
function SHOULD_BE(a) {
  var b = g.dump();
  if (a!=b) {
    console.log("GOT :"+b+"\nSHOULD BE:"+a+"\n================");
    ok = false;
  }
}

g.clear();
g.setColor(1);
g.fillRect(6,4,27,20);
SHOULD_BE(`
................................
................................
................................
................................
......######################....
......######################....
......######################....
......######################....
......######################....
......######################....
......######################....
......######################....
......######################....
......######################....
......######################....
......######################....
......######################....
......######################....
......######################....
......######################....
......######################....
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................`);

g.clear();
g.setColor(1);
g.fillRect({x:6,y:4,x2:27,y2:20});
SHOULD_BE(`
................................
................................
................................
................................
......######################....
......######################....
......######################....
......######################....
......######################....
......######################....
......######################....
......######################....
......######################....
......######################....
......######################....
......######################....
......######################....
......######################....
......######################....
......######################....
......######################....
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................`);

g.clear();
g.setColor(1);
g.fillRect({x:6,y:4,w:21,h:16});
SHOULD_BE(`
................................
................................
................................
................................
......######################....
......######################....
......######################....
......######################....
......######################....
......######################....
......######################....
......######################....
......######################....
......######################....
......######################....
......######################....
......######################....
......######################....
......######################....
......######################....
......######################....
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................`);

g.clear();
g.setColor(1);
g.fillRect({x:6,y:4,x2:27,y2:20,r:3});
SHOULD_BE(`
................................
................................
................................
................................
.......####################.....
......######################....
......######################....
......######################....
......######################....
......######################....
......######################....
......######################....
......######################....
......######################....
......######################....
......######################....
......######################....
......######################....
......######################....
......######################....
.......####################.....
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................`);


g.clear();
g.setColor(1);
g.fillRect({x:6,y:4,x2:27,y2:20,r:8});
SHOULD_BE(`
................................
................................
................................
................................
...........############.........
.........################.......
........##################......
.......####################.....
.......####################.....
......######################....
......######################....
......######################....
......######################....
......######################....
......######################....
......######################....
.......####################.....
.......####################.....
........##################......
.........################.......
...........############.........
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................`);

result = ok;
