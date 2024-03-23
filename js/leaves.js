var stop, staticx;
var img = new Image();
img.src = "data:image/png;base64,data:image/png;base64,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";

function Sakura(x, y, s, r, fn) {
    this.x = x;
    this.y = y;
    this.s = s;
    this.r = r;
    this.fn = fn;
}
Sakura.prototype.draw = function (cxt) {
    cxt.save();
    var xc = 40 * this.s / 4;
    cxt.translate(this.x, this.y);
    cxt.rotate(this.r);
    cxt.drawImage(img, 0, 0, 40 * this.s, 40 * this.s)
    cxt.restore();
}
Sakura.prototype.update = function () {
    this.x = this.fn.x(this.x, this.y);
    this.y = this.fn.y(this.y, this.y);
    this.r = this.fn.r(this.r);
    if (this.x > window.innerWidth || this.x < 0 || this.y > window.innerHeight || this.y < 0) {
        this.r = getRandom('fnr');
        if (Math.random() > 0.4) {
            this.x = getRandom('x');
            this.y = 0;
            this.s = getRandom('s');
            this.r = getRandom('r');
        } else {
            this.x = window.innerWidth;
            this.y = getRandom('y');
            this.s = getRandom('s');
            this.r = getRandom('r');
        }
    }
}
SakuraList = function () {
    this.list = [];
}
SakuraList.prototype.push = function (sakura) {
    this.list.push(sakura);
}
SakuraList.prototype.update = function () {
    for (var i = 0, len = this.list.length; i < len; i++) {
        this.list[i].update();
    }
}
SakuraList.prototype.draw = function (cxt) {
    for (var i = 0, len = this.list.length; i < len; i++) {
        this.list[i].draw(cxt);
    }
}
SakuraList.prototype.get = function (i) {
    return this.list[i];
}
SakuraList.prototype.size = function () {
    return this.list.length;
}

function getRandom(option) {
    var ret, random;
    switch (option) {
        case 'x':
            ret = Math.random() * window.innerWidth;
            break;
        case 'y':
            ret = Math.random() * window.innerHeight;
            break;
        case 's':
            ret = Math.random();
            break;
        case 'r':
            ret = Math.random() * 6;
            break;
        case 'fnx':
            random = -0.5 + Math.random() * 1;
            ret = function (x, y) {
                return x + 0.5 * random - 1.7;
            };
            break;
        case 'fny':
            random = 1.5 + Math.random() * 0.7
            ret = function (x, y) {
                return y + random;
            };
            break;
        case 'fnr':
            random = Math.random() * 0.03;
            ret = function (r) {
                return r + random;
            };
            break;
    }
    return ret;
}

function startSakura() {
    requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame;
    var canvas = document.createElement('canvas'),
        cxt;
    staticx = true;
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    canvas.setAttribute('style', 'position: fixed;left: 0;top: 0;pointer-events: none;');
    canvas.setAttribute('id', 'canvas_sakura');
    document.getElementsByTagName('body')[0].appendChild(canvas);
    cxt = canvas.getContext('2d');
    var sakuraList = new SakuraList();
    for (var i = 0; i < 50; i++) {
        var sakura, randomX, randomY, randomS, randomR, randomFnx, randomFny;
        randomX = getRandom('x');
        randomY = getRandom('y');
        randomR = getRandom('r');
        randomS = getRandom('s');
        randomFnx = getRandom('fnx');
        randomFny = getRandom('fny');
        randomFnR = getRandom('fnr');
        sakura = new Sakura(randomX, randomY, randomS, randomR, {
            x: randomFnx,
            y: randomFny,
            r: randomFnR
        });
        sakura.draw(cxt);
        sakuraList.push(sakura);
    }
    stop = requestAnimationFrame(function () {
        cxt.clearRect(0, 0, canvas.width, canvas.height);
        sakuraList.update();
        sakuraList.draw(cxt);
        stop = requestAnimationFrame(arguments.callee);
    })
}
window.onresize = function () {
    var canvasSnow = document.getElementById('canvas_snow');
}
img.onload = function () {
    startSakura();
}

function stopp() {
    if (staticx) {
        var child = document.getElementById("canvas_sakura");
        child.parentNode.removeChild(child);
        window.cancelAnimationFrame(stop);
        staticx = false;
    } else {
        startSakura();
    }
}
