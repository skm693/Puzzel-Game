let ele;
let p;
let q;
let r;
function fun_lev_1(a) {
    p = "level_" + a;
    r = "level_" + (a - (-1));
    q = "pop_up_" + a;
    document.getElementById(p).style.display = "block";
    document.getElementById('home').style.display = "none";
    ele = document.getElementById(p).innerHTML;
}
function back(a) {
    let x = "level_" + a;
    document.getElementById(x).style.display = "none";
    document.getElementById('home').style.display = "block";
    rest();
}
function work(a) {
    let x = "b" + a;
    let ch = 0;
    let ch2 = 0;
    let i = 1;
    let y = "b" + i;
    for (i = 1; i <= 16; i++) {
        y = "b" + i;
        if (document.getElementById(y).style.backgroundColor == "red") {
            if (
                ((y == "b1") && ((x == "b2") || (x == "b5") || (x == "b1"))) ||
                ((y == "b2") && ((x == "b1") || (x == "b3") || (x == "b6") || (x == "b2"))) ||
                ((y == "b3") && (x == "b2" || x == "b3" || x == "b4" || x == "b7")) ||
                ((y == "b4") && (x == "b3" || x == "b4" || x == "b8")) ||
                ((y == "b5") && (x == "b1" || x == "b5" || x == "b9" || x == "b6")) ||
                ((y == "b6") && (x == "b2" || x == "b5" || x == "b7" || x == "b10" || x == "b6")) ||
                ((y == "b7") && (x == "b3" || x == "b6" || x == "b7" || x == "b8" || x == "b11")) ||
                ((y == "b8") && (x == "b4" || x == "b8" || x == "b7" || x == "b12")) ||
                ((y == "b9") && (x == "b9" || x == "b5" || x == "b13" || x == "b10")) ||
                ((y == "b10") && (x == "b9" || x == "b10" || x == "b11" || x == "b6" || x == "b14")) ||
                ((y == "b11") && (x == "b10" || x == "b11" || x == "b12" || x == "b7" || x == "b15")) ||
                ((y == "b12") && (x == "b12" || x == "b8" || x == "b16" || x == "b11")) ||
                ((y == "b13") && (x == "b13" || x == "b14" || x == "b9")) ||
                ((y == "b14") && (x == "b14" || x == "b13" || x == "b15" || x == "b10")) ||
                ((y == "b15") && (x == "b15" || x == "b14" || x == "b16" || x == "b11")) ||
                ((y == "b16") && (x == "b15" || x == "b16" || x == "b12"))

            ) {
                let z = document.getElementById(x).innerHTML;
                document.getElementById(x).innerHTML = document.getElementById(y).innerHTML;
                document.getElementById(y).innerHTML = z;
                ch = 1;
                ch2 = 1;
                break;
            }
            else {
                document.getElementById(x).style.backgroundColor = "rgb(212, 232, 124)";
                ch2 = 2;
                break;
            }

        }
        else {
            ch = 0;
            ch2 = 0;
        }
    }
    if (ch == 0 && ch2 == 0)
        document.getElementById(x).style.backgroundColor = "red";
    else if (ch == 1) {
        document.getElementById(x).style.backgroundColor = "rgb(212, 232, 124)";
        document.getElementById(y).style.backgroundColor = "rgb(212, 232, 124)";
    }


    let c = 0;
    for (i = 1; i <= 16; i++) {
        y = "b" + i;
        if (document.getElementById(y).innerHTML == i) {
            c = 1;
        }
        else {
            c = 0;
            break;
        }
    }
    if (c == 1) {
        document.getElementById(p).style.display = 'none';
        document.getElementById(q).style.display = 'flex';
    }
}


function lv_1_home(a) {
    let x = "pop_up_" + a;
    document.getElementById('home').style.display = "block";
    document.getElementById(x).style.display = "none";
    rest();
}

function rest() {
    document.getElementById(p).innerHTML = ele;
}
function restart() {
    document.getElementById(p).style.display = "block";
    document.getElementById(q).style.display = 'none';
    rest();
}

function work2(a) {
    let x = "c" + a;
    let ch = 0;
    let ch2 = 0;
    let i = 1;
    let y = "c" + i;
    for (i = 1; i <= 16; i++) {
        y = "c" + i;
        if (document.getElementById(y).style.backgroundColor == "red") {
            if (
                ((y == "c1") && ((x == "c2") || (x == "c5") || (x == "c1"))) ||
                ((y == "c2") && ((x == "c1") || (x == "c3") || (x == "c6") || (x == "c2"))) ||
                ((y == "c3") && (x == "c2" || x == "c3" || x == "c4" || x == "c7")) ||
                ((y == "c4") && (x == "c3" || x == "c4" || x == "c8")) ||
                ((y == "c5") && (x == "c1" || x == "c5" || x == "c9" || x == "c6")) ||
                ((y == "c6") && (x == "c2" || x == "c5" || x == "c7" || x == "c10" || x == "c6")) ||
                ((y == "c7") && (x == "c3" || x == "c6" || x == "c7" || x == "c8" || x == "c11")) ||
                ((y == "c8") && (x == "c4" || x == "c8" || x == "c7" || x == "c12")) ||
                ((y == "c9") && (x == "c9" || x == "c5" || x == "c13" || x == "c10")) ||
                ((y == "c10") && (x == "c9" || x == "c10" || x == "c11" || x == "c6" || x == "c14")) ||
                ((y == "c11") && (x == "c10" || x == "c11" || x == "c12" || x == "c7" || x == "c15")) ||
                ((y == "c12") && (x == "c12" || x == "c8" || x == "c16" || x == "c11")) ||
                ((y == "c13") && (x == "c13" || x == "c14" || x == "c9")) ||
                ((y == "c14") && (x == "c14" || x == "c13" || x == "c15" || x == "c10")) ||
                ((y == "c15") && (x == "c15" || x == "c14" || x == "c16" || x == "c11")) ||
                ((y == "c16") && (x == "c15" || x == "c16" || x == "c12"))

            ) {
                let z = document.getElementById(x).innerHTML;
                document.getElementById(x).innerHTML = document.getElementById(y).innerHTML;
                document.getElementById(y).innerHTML = z;
                ch = 1;
                ch2 = 1;
                break;
            }
            else {
                document.getElementById(x).style.backgroundColor = "rgb(212, 232, 124)";
                ch2 = 2;
                break;
            }

        }
        else {
            ch = 0;
            ch2 = 0;
        }
    }
    if (ch == 0 && ch2 == 0)
        document.getElementById(x).style.backgroundColor = "red";
    else if (ch == 1) {
        document.getElementById(x).style.backgroundColor = "rgb(212, 232, 124)";
        document.getElementById(y).style.backgroundColor = "rgb(212, 232, 124)";
    }


    let c = 0;
    for (i = 1; i <= 16; i++) {
        y = "c" + i;
        if (document.getElementById(y).innerHTML == i) {
            c = 1;
        }
        else {
            c = 0;
            break;
        }
    }
    if (c == 1) {
        document.getElementById(p).style.display = 'none';
        document.getElementById(q).style.display = 'flex';
    }
}

function lv_1_next() {
    document.getElementById(r).style.display = 'block';
    document.getElementById(q).style.display = 'none';
    rest();
}


function work3(a) {
    let x = "d" + a;
    let ch = 0;
    let ch2 = 0;
    let i = 1;
    let y = "d" + i;
    for (i = 1; i <= 16; i++) {
        y = "d" + i;
        if (document.getElementById(y).style.backgroundColor == "red") {
            if (
                ((y == "d1") && ((x == "d2") || (x == "d5") || (x == "d1"))) ||
                ((y == "d2") && ((x == "d1") || (x == "d3") || (x == "d6") || (x == "d2"))) ||
                ((y == "d3") && (x == "d2" || x == "d3" || x == "d4" || x == "d7")) ||
                ((y == "d4") && (x == "d3" || x == "d4" || x == "d8")) ||
                ((y == "d5") && (x == "d1" || x == "d5" || x == "d9" || x == "d6")) ||
                ((y == "d6") && (x == "d2" || x == "d5" || x == "d7" || x == "d10" || x == "d6")) ||
                ((y == "d7") && (x == "d3" || x == "d6" || x == "d7" || x == "d8" || x == "d11")) ||
                ((y == "d8") && (x == "d4" || x == "d8" || x == "d7" || x == "d12")) ||
                ((y == "d9") && (x == "d9" || x == "d5" || x == "d13" || x == "d10")) ||
                ((y == "d10") && (x == "d9" || x == "d10" || x == "d11" || x == "d6" || x == "d14")) ||
                ((y == "d11") && (x == "d10" || x == "d11" || x == "d12" || x == "d7" || x == "d15")) ||
                ((y == "d12") && (x == "d12" || x == "d8" || x == "d16" || x == "d11")) ||
                ((y == "d13") && (x == "d13" || x == "d14" || x == "d9")) ||
                ((y == "d14") && (x == "d14" || x == "d13" || x == "d15" || x == "d10")) ||
                ((y == "d15") && (x == "d15" || x == "d14" || x == "d16" || x == "d11")) ||
                ((y == "d16") && (x == "d15" || x == "d16" || x == "d12"))

            ) {
                let z = document.getElementById(x).innerHTML;
                document.getElementById(x).innerHTML = document.getElementById(y).innerHTML;
                document.getElementById(y).innerHTML = z;
                ch = 1;
                ch2 = 1;
                break;
            }
            else {
                document.getElementById(x).style.backgroundColor = "rgb(212, 232, 124)";
                ch2 = 2;
                break;
            }

        }
        else {
            ch = 0;
            ch2 = 0;
        }
    }
    if (ch == 0 && ch2 == 0)
        document.getElementById(x).style.backgroundColor = "red";
    else if (ch == 1) {
        document.getElementById(x).style.backgroundColor = "rgb(212, 232, 124)";
        document.getElementById(y).style.backgroundColor = "rgb(212, 232, 124)";
    }


    let c = 0;
    for (i = 1; i <= 16; i++) {
        y = "d" + i;
        if (document.getElementById(y).innerHTML == i) {
            c = 1;
        }
        else {
            c = 0;
            break;
        }
    }
    if (c == 1) {
        document.getElementById(p).style.display = 'none';
        document.getElementById(q).style.display = 'flex';
    }
}


function work4(a) {
    let x = "e" + a;
    let ch = 0;
    let ch2 = 0;
    let i = 1;
    let y = "e" + i;
    for (i = 1; i <= 16; i++) {
        y = "e" + i;
        if (document.getElementById(y).style.backgroundColor == "red") {
            if (
                ((y == "e1") && ((x == "e2") || (x == "e5") || (x == "e1"))) ||
                ((y == "e2") && ((x == "e1") || (x == "e3") || (x == "e6") || (x == "e2"))) ||
                ((y == "e3") && (x == "e2" || x == "e3" || x == "e4" || x == "e7")) ||
                ((y == "e4") && (x == "e3" || x == "e4" || x == "e8")) ||
                ((y == "e5") && (x == "e1" || x == "e5" || x == "e9" || x == "e6")) ||
                ((y == "e6") && (x == "e2" || x == "e5" || x == "e7" || x == "e10" || x == "e6")) ||
                ((y == "e7") && (x == "e3" || x == "e6" || x == "e7" || x == "e8" || x == "e11")) ||
                ((y == "e8") && (x == "e4" || x == "e8" || x == "e7" || x == "e12")) ||
                ((y == "e9") && (x == "e9" || x == "e5" || x == "e13" || x == "e10")) ||
                ((y == "e10") && (x == "e9" || x == "e10" || x == "e11" || x == "e6" || x == "e14")) ||
                ((y == "e11") && (x == "e10" || x == "e11" || x == "e12" || x == "e7" || x == "e15")) ||
                ((y == "e12") && (x == "e12" || x == "e8" || x == "e16" || x == "e11")) ||
                ((y == "e13") && (x == "e13" || x == "e14" || x == "e9")) ||
                ((y == "e14") && (x == "e14" || x == "e13" || x == "e15" || x == "e10")) ||
                ((y == "e15") && (x == "e15" || x == "e14" || x == "e16" || x == "e11")) ||
                ((y == "e16") && (x == "e15" || x == "e16" || x == "e12"))


            ) {
                let z = document.getElementById(x).innerHTML;
                document.getElementById(x).innerHTML = document.getElementById(y).innerHTML;
                document.getElementById(y).innerHTML = z;
                ch = 1;
                ch2 = 1;
                break;
            }
            else {
                document.getElementById(x).style.backgroundColor = "rgb(212, 232, 124)";
                ch2 = 2;
                break;
            }

        }
        else {
            ch = 0;
            ch2 = 0;
        }
    }
    if (ch == 0 && ch2 == 0)
        document.getElementById(x).style.backgroundColor = "red";
    else if (ch == 1) {
        document.getElementById(x).style.backgroundColor = "rgb(212, 232, 124)";
        document.getElementById(y).style.backgroundColor = "rgb(212, 232, 124)";
    }


    let c = 0;
    for (i = 1; i <= 16; i++) {
        y = "e" + i;
        if (document.getElementById(y).innerHTML == i) {
            c = 1;
        }
        else {
            c = 0;
            break;
        }
    }
    if (c == 1) {
        document.getElementById(p).style.display = 'none';
        document.getElementById(q).style.display = 'flex';
    }
}




function work5(a) {
    let x = "f" + a;
    let ch = 0;
    let ch2 = 0;
    let i = 1;
    let y = "f" + i;
    for (i = 1; i <= 16; i++) {
        y = "f" + i;
        if (document.getElementById(y).style.backgroundColor == "red") {
            if (
                ((y == "f1") && ((x == "f2") || (x == "f5") || (x == "f1"))) ||
                ((y == "f2") && ((x == "f1") || (x == "f3") || (x == "f6") || (x == "f2"))) ||
                ((y == "f3") && (x == "f2" || x == "f3" || x == "f4" || x == "f7")) ||
                ((y == "f4") && (x == "f3" || x == "f4" || x == "f8")) ||
                ((y == "f5") && (x == "f1" || x == "f5" || x == "f9" || x == "f6")) ||
                ((y == "f6") && (x == "f2" || x == "f5" || x == "f7" || x == "f10" || x == "f6")) ||
                ((y == "f7") && (x == "f3" || x == "f6" || x == "f7" || x == "f8" || x == "f11")) ||
                ((y == "f8") && (x == "f4" || x == "f8" || x == "f7" || x == "f12")) ||
                ((y == "f9") && (x == "f9" || x == "f5" || x == "f13" || x == "f10")) ||
                ((y == "f10") && (x == "f9" || x == "f10" || x == "f11" || x == "f6" || x == "f14")) ||
                ((y == "f11") && (x == "f10" || x == "f11" || x == "f12" || x == "f7" || x == "f15")) ||
                ((y == "f12") && (x == "f12" || x == "f8" || x == "f16" || x == "f11")) ||
                ((y == "f13") && (x == "f13" || x == "f14" || x == "f9")) ||
                ((y == "f14") && (x == "f14" || x == "f13" || x == "f15" || x == "f10")) ||
                ((y == "f15") && (x == "f15" || x == "f14" || x == "f16" || x == "f11")) ||
                ((y == "f16") && (x == "f15" || x == "f16" || x == "f12"))


            ) {
                let z = document.getElementById(x).innerHTML;
                document.getElementById(x).innerHTML = document.getElementById(y).innerHTML;
                document.getElementById(y).innerHTML = z;
                ch = 1;
                ch2 = 1;
                break;
            }
            else {
                document.getElementById(x).style.backgroundColor = "rgb(212, 232, 124)";
                ch2 = 2;
                break;
            }

        }
        else {
            ch = 0;
            ch2 = 0;
        }
    }
    if (ch == 0 && ch2 == 0)
        document.getElementById(x).style.backgroundColor = "red";
    else if (ch == 1) {
        document.getElementById(x).style.backgroundColor = "rgb(212, 232, 124)";
        document.getElementById(y).style.backgroundColor = "rgb(212, 232, 124)";
    }


    let c = 0;
    for (i = 1; i <= 16; i++) {
        y = "f" + i;
        if (document.getElementById(y).innerHTML == i) {
            c = 1;
        }
        else {
            c = 0;
            break;
        }
    }
    if (c == 1) {
        document.getElementById(p).style.display = 'none';
        document.getElementById(q).style.display = 'flex';
    }
}



function work6(a) {
    let x = "g" + a;
    let ch = 0;
    let ch2 = 0;
    let i = 1;
    let y = "g" + i;
    for (i = 1; i <= 16; i++) {
        y = "g" + i;
        if (document.getElementById(y).style.backgroundColor == "red") {
            if (
                ((y == "g1") && ((x == "g2") || (x == "g5") || (x == "g1"))) ||
                ((y == "g2") && ((x == "g1") || (x == "g3") || (x == "g6") || (x == "g2"))) ||
                ((y == "g3") && (x == "g2" || x == "g3" || x == "g4" || x == "g7")) ||
                ((y == "g4") && (x == "g3" || x == "g4" || x == "g8")) ||
                ((y == "g5") && (x == "g1" || x == "g5" || x == "g9" || x == "g6")) ||
                ((y == "g6") && (x == "g2" || x == "g5" || x == "g7" || x == "g10" || x == "g6")) ||
                ((y == "g7") && (x == "g3" || x == "g6" || x == "g7" || x == "g8" || x == "g11")) ||
                ((y == "g8") && (x == "g4" || x == "g8" || x == "g7" || x == "g12")) ||
                ((y == "g9") && (x == "g9" || x == "g5" || x == "g13" || x == "g10")) ||
                ((y == "g10") && (x == "g9" || x == "g10" || x == "g11" || x == "g6" || x == "g14")) ||
                ((y == "g11") && (x == "g10" || x == "g11" || x == "g12" || x == "g7" || x == "g15")) ||
                ((y == "g12") && (x == "g12" || x == "g8" || x == "g16" || x == "g11")) ||
                ((y == "g13") && (x == "g13" || x == "g14" || x == "g9")) ||
                ((y == "g14") && (x == "g14" || x == "g13" || x == "g15" || x == "g10")) ||
                ((y == "g15") && (x == "g15" || x == "g14" || x == "g16" || x == "g11")) ||
                ((y == "g16") && (x == "g15" || x == "g16" || x == "g12"))


            ) {
                let z = document.getElementById(x).innerHTML;
                document.getElementById(x).innerHTML = document.getElementById(y).innerHTML;
                document.getElementById(y).innerHTML = z;
                ch = 1;
                ch2 = 1;
                break;
            }
            else {
                document.getElementById(x).style.backgroundColor = "rgb(212, 232, 124)";
                ch2 = 2;
                break;
            }

        }
        else {
            ch = 0;
            ch2 = 0;
        }
    }
    if (ch == 0 && ch2 == 0)
        document.getElementById(x).style.backgroundColor = "red";
    else if (ch == 1) {
        document.getElementById(x).style.backgroundColor = "rgb(212, 232, 124)";
        document.getElementById(y).style.backgroundColor = "rgb(212, 232, 124)";
    }


    let c = 0;
    for (i = 1; i <= 16; i++) {
        y = "g" + i;
        if (document.getElementById(y).innerHTML == i) {
            c = 1;
        }
        else {
            c = 0;
            break;
        }
    }
    if (c == 1) {
        document.getElementById(p).style.display = 'none';
        document.getElementById(q).style.display = 'flex';
    }
}






function work7(a) {
    let x = "h" + a;
    let ch = 0;
    let ch2 = 0;
    let i = 1;
    let y = "h" + i;
    for (i = 1; i <= 16; i++) {
        y = "h" + i;
        if (document.getElementById(y).style.backgroundColor == "red") {
            if (
                ((y == "h1") && ((x == "h2") || (x == "h5") || (x == "h1"))) ||
                ((y == "h2") && ((x == "h1") || (x == "h3") || (x == "h6") || (x == "h2"))) ||
                ((y == "h3") && (x == "h2" || x == "h3" || x == "h4" || x == "h7")) ||
                ((y == "h4") && (x == "h3" || x == "h4" || x == "h8")) ||
                ((y == "h5") && (x == "h1" || x == "h5" || x == "h9" || x == "h6")) ||
                ((y == "h6") && (x == "h2" || x == "h5" || x == "h7" || x == "h10" || x == "h6")) ||
                ((y == "h7") && (x == "h3" || x == "h6" || x == "h7" || x == "h8" || x == "h11")) ||
                ((y == "h8") && (x == "h4" || x == "h8" || x == "h7" || x == "h12")) ||
                ((y == "h9") && (x == "h9" || x == "h5" || x == "h13" || x == "h10")) ||
                ((y == "h10") && (x == "h9" || x == "h10" || x == "h11" || x == "h6" || x == "h14")) ||
                ((y == "h11") && (x == "h10" || x == "h11" || x == "h12" || x == "h7" || x == "h15")) ||
                ((y == "h12") && (x == "h12" || x == "h8" || x == "h16" || x == "h11")) ||
                ((y == "h13") && (x == "h13" || x == "h14" || x == "h9")) ||
                ((y == "h14") && (x == "h14" || x == "h13" || x == "h15" || x == "h10")) ||
                ((y == "h15") && (x == "h15" || x == "h14" || x == "h16" || x == "h11")) ||
                ((y == "h16") && (x == "h15" || x == "h16" || x == "h12"))


            ) {
                let z = document.getElementById(x).innerHTML;
                document.getElementById(x).innerHTML = document.getElementById(y).innerHTML;
                document.getElementById(y).innerHTML = z;
                ch = 1;
                ch2 = 1;
                break;
            }
            else {
                document.getElementById(x).style.backgroundColor = "rgb(212, 232, 124)";
                ch2 = 2;
                break;
            }

        }
        else {
            ch = 0;
            ch2 = 0;
        }
    }
    if (ch == 0 && ch2 == 0)
        document.getElementById(x).style.backgroundColor = "red";
    else if (ch == 1) {
        document.getElementById(x).style.backgroundColor = "rgb(212, 232, 124)";
        document.getElementById(y).style.backgroundColor = "rgb(212, 232, 124)";
    }


    let c = 0;
    for (i = 1; i <= 16; i++) {
        y = "h" + i;
        if (document.getElementById(y).innerHTML == i) {
            c = 1;
        }
        else {
            c = 0;
            break;
        }
    }
    if (c == 1) {
        document.getElementById(p).style.display = 'none';
        document.getElementById(q).style.display = 'flex';
    }
}





function work8(a) {
    let x = "i" + a;
    let ch = 0;
    let ch2 = 0;
    let i = 1;
    let y = "i" + i;
    for (i = 1; i <= 16; i++) {
        y = "i" + i;
        if (document.getElementById(y).style.backgroundColor == "red") {
            if (
                ((y == "i1") && ((x == "i2") || (x == "i5") || (x == "i1"))) ||
                ((y == "i2") && ((x == "i1") || (x == "i3") || (x == "i6") || (x == "i2"))) ||
                ((y == "i3") && (x == "i2" || x == "i3" || x == "i4" || x == "i7")) ||
                ((y == "i4") && (x == "i3" || x == "i4" || x == "i8")) ||
                ((y == "i5") && (x == "i1" || x == "i5" || x == "i9" || x == "i6")) ||
                ((y == "i6") && (x == "i2" || x == "i5" || x == "i7" || x == "i10" || x == "i6")) ||
                ((y == "i7") && (x == "i3" || x == "i6" || x == "i7" || x == "i8" || x == "i11")) ||
                ((y == "i8") && (x == "i4" || x == "i8" || x == "i7" || x == "i12")) ||
                ((y == "i9") && (x == "i9" || x == "i5" || x == "i13" || x == "i10")) ||
                ((y == "i10") && (x == "i9" || x == "i10" || x == "i11" || x == "i6" || x == "i14")) ||
                ((y == "i11") && (x == "i10" || x == "i11" || x == "i12" || x == "i7" || x == "i15")) ||
                ((y == "i12") && (x == "i12" || x == "i8" || x == "i16" || x == "i11")) ||
                ((y == "i13") && (x == "i13" || x == "i14" || x == "i9")) ||
                ((y == "i14") && (x == "i14" || x == "i13" || x == "i15" || x == "i10")) ||
                ((y == "i15") && (x == "i15" || x == "i14" || x == "i16" || x == "i11")) ||
                ((y == "i16") && (x == "i15" || x == "i16" || x == "i12"))

            ) {
                let z = document.getElementById(x).innerHTML;
                document.getElementById(x).innerHTML = document.getElementById(y).innerHTML;
                document.getElementById(y).innerHTML = z;
                ch = 1;
                ch2 = 1;
                break;
            }
            else {
                document.getElementById(x).style.backgroundColor = "rgb(212, 232, 124)";
                ch2 = 2;
                break;
            }

        }
        else {
            ch = 0;
            ch2 = 0;
        }
    }
    if (ch == 0 && ch2 == 0)
        document.getElementById(x).style.backgroundColor = "red";
    else if (ch == 1) {
        document.getElementById(x).style.backgroundColor = "rgb(212, 232, 124)";
        document.getElementById(y).style.backgroundColor = "rgb(212, 232, 124)";
    }


    let c = 0;
    for (i = 1; i <= 16; i++) {
        y = "i" + i;
        if (document.getElementById(y).innerHTML == i) {
            c = 1;
        }
        else {
            c = 0;
            break;
        }
    }
    if (c == 1) {
        document.getElementById(p).style.display = 'none';
        document.getElementById(q).style.display = 'flex';
    }
}





function work9(a) {
    let x = "j" + a;
    let ch = 0;
    let ch2 = 0;
    let i = 1;
    let y = "j" + i;
    for (i = 1; i <= 16; i++) {
        y = "j" + i;
        if (document.getElementById(y).style.backgroundColor == "red") {
            if (
                ((y == "j1") && ((x == "j2") || (x == "j5") || (x == "j1"))) ||
                ((y == "j2") && ((x == "j1") || (x == "j3") || (x == "j6") || (x == "j2"))) ||
                ((y == "j3") && (x == "j2" || x == "j3" || x == "j4" || x == "j7")) ||
                ((y == "j4") && (x == "j3" || x == "j4" || x == "j8")) ||
                ((y == "j5") && (x == "j1" || x == "j5" || x == "j9" || x == "j6")) ||
                ((y == "j6") && (x == "j2" || x == "j5" || x == "j7" || x == "j10" || x == "j6")) ||
                ((y == "j7") && (x == "j3" || x == "j6" || x == "j7" || x == "j8" || x == "j11")) ||
                ((y == "j8") && (x == "j4" || x == "j8" || x == "j7" || x == "j12")) ||
                ((y == "j9") && (x == "j9" || x == "j5" || x == "j13" || x == "j10")) ||
                ((y == "j10") && (x == "j9" || x == "j10" || x == "j11" || x == "j6" || x == "j14")) ||
                ((y == "j11") && (x == "j10" || x == "j11" || x == "j12" || x == "j7" || x == "j15")) ||
                ((y == "j12") && (x == "j12" || x == "j8" || x == "j16" || x == "j11")) ||
                ((y == "j13") && (x == "j13" || x == "j14" || x == "j9")) ||
                ((y == "j14") && (x == "j14" || x == "j13" || x == "j15" || x == "j10")) ||
                ((y == "j15") && (x == "j15" || x == "j14" || x == "j16" || x == "j11")) ||
                ((y == "j16") && (x == "j15" || x == "j16" || x == "j12"))


            ) {
                let z = document.getElementById(x).innerHTML;
                document.getElementById(x).innerHTML = document.getElementById(y).innerHTML;
                document.getElementById(y).innerHTML = z;
                ch = 1;
                ch2 = 1;
                break;
            }
            else {
                document.getElementById(x).style.backgroundColor = "rgb(212, 232, 124)";
                ch2 = 2;
                break;
            }

        }
        else {
            ch = 0;
            ch2 = 0;
        }
    }
    if (ch == 0 && ch2 == 0)
        document.getElementById(x).style.backgroundColor = "red";
    else if (ch == 1) {
        document.getElementById(x).style.backgroundColor = "rgb(212, 232, 124)";
        document.getElementById(y).style.backgroundColor = "rgb(212, 232, 124)";
    }


    let c = 0;
    for (i = 1; i <= 16; i++) {
        y = "j" + i;
        if (document.getElementById(y).innerHTML == i) {
            c = 1;
        }
        else {
            c = 0;
            break;
        }
    }
    if (c == 1) {
        document.getElementById(p).style.display = 'none';
        document.getElementById(q).style.display = 'flex';
    }
}






function work10(a) {
    let x = "k" + a;
    let ch = 0;
    let ch2 = 0;
    let i = 1;
    let y = "k" + i;
    for (i = 1; i <= 16; i++) {
        y = "k" + i;
        if (document.getElementById(y).style.backgroundColor == "red") {
            if (
                ((y == "k1") && ((x == "k2") || (x == "k5") || (x == "k1"))) ||
                ((y == "k2") && ((x == "k1") || (x == "k3") || (x == "k6") || (x == "k2"))) ||
                ((y == "k3") && (x == "k2" || x == "k3" || x == "k4" || x == "k7")) ||
                ((y == "k4") && (x == "k3" || x == "k4" || x == "k8")) ||
                ((y == "k5") && (x == "k1" || x == "k5" || x == "k9" || x == "k6")) ||
                ((y == "k6") && (x == "k2" || x == "k5" || x == "k7" || x == "k10" || x == "k6")) ||
                ((y == "k7") && (x == "k3" || x == "k6" || x == "k7" || x == "k8" || x == "k11")) ||
                ((y == "k8") && (x == "k4" || x == "k8" || x == "k7" || x == "k12")) ||
                ((y == "k9") && (x == "k9" || x == "k5" || x == "k13" || x == "k10")) ||
                ((y == "k10") && (x == "k9" || x == "k10" || x == "k11" || x == "k6" || x == "k14")) ||
                ((y == "k11") && (x == "k10" || x == "k11" || x == "k12" || x == "k7" || x == "k15")) ||
                ((y == "k12") && (x == "k12" || x == "k8" || x == "k16" || x == "k11")) ||
                ((y == "k13") && (x == "k13" || x == "k14" || x == "k9")) ||
                ((y == "k14") && (x == "k14" || x == "k13" || x == "k15" || x == "k10")) ||
                ((y == "k15") && (x == "k15" || x == "k14" || x == "k16" || x == "k11")) ||
                ((y == "k16") && (x == "k15" || x == "k16" || x == "k12"))


            ) {
                let z = document.getElementById(x).innerHTML;
                document.getElementById(x).innerHTML = document.getElementById(y).innerHTML;
                document.getElementById(y).innerHTML = z;
                ch = 1;
                ch2 = 1;
                break;
            }
            else {
                document.getElementById(x).style.backgroundColor = "rgb(212, 232, 124)";
                ch2 = 2;
                break;
            }

        }
        else {
            ch = 0;
            ch2 = 0;
        }
    }
    if (ch == 0 && ch2 == 0)
        document.getElementById(x).style.backgroundColor = "red";
    else if (ch == 1) {
        document.getElementById(x).style.backgroundColor = "rgb(212, 232, 124)";
        document.getElementById(y).style.backgroundColor = "rgb(212, 232, 124)";
    }


    let c = 0;
    for (i = 1; i <= 16; i++) {
        y = "k" + i;
        if (document.getElementById(y).innerHTML == i) {
            c = 1;
        }
        else {
            c = 0;
            break;
        }
    }
    if (c == 1) {
        document.getElementById(p).style.display = 'none';
        document.getElementById(q).style.display = 'flex';
    }
}
