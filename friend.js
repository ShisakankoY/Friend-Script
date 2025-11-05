const code = `
set x = 5;
set word = "hello";
Go x;
If x > 3 Go x;
If word == "hello" Go word;
set i = 0;
loop i < 3 If i == 1 Go i;
`

//変数保存
const vars = {};

//行分け
const lines = code.trim().split("\n");

for (const line of lines) {
    //単体分け
    const tokens = line.trim().split(" ");
    const command = tokens[0];

    //set(変数)
    if (command === "set") {
        const name = tokens[1];
        let value = tokens[3].replace(";", "");
        if (value.startsWith('"') && value.endsWith('"')) {
            value = value.slice(1, -1);
        } else {
            value = Number(value);
        }
        vars[name] = value;
    }

    //コンソール出力
    if (command === "Go") {
        const name = tokens[1].replace(";", "");
        console.log(vars[name]);
    }

    //if文
    if (command === "If") {
        const varName = tokens[1];
        const op = tokens[2];
        let value = tokens[3].replace(";", "");
        if (value.startsWith('"') && value.endsWith('"')) {
            value = value.slice(1, -1); //""を削る
        } else {
            value = Number(value);
        }

        const action = tokens[4];
        const arg = tokens[5].replace(";", "");

        //条件判定
        let ok = false;
        if (op === ">") {
            ok = vars[varName] > value;
        }
        if (op === "<") {
            ok = vars[varName] < value;
        }
        if (op === "==") {
            ok = vars[varName] == value;
        }

        if (ok && action === "Go") {
            console.log(vars[arg]);
        }
    }

    //loop(forループ)
    if (command === "loop") {
        const varName = tokens[1];
        const op = tokens[2];
        let endValue = Number(tokens[3].replace(";", ""));
        const innerCommand = tokens.slice(4);

        let step = (op === "<") ? 1 : -1;

        while (true) {
            let ok = false;
            if (op === "<") {
                ok = vars[varName] < endValue;
            }
            if (op === ">") {
                ok = vars[varName] > endValue;
            }
            if (!ok) {
                break;
            }

            if (innerCommand[0] === "Go") {
                console.log(vars[innerCommand[1].replace(";", "")]);
            }

            if (innerCommand[0] === "If") {
                const ivar = innerCommand[1];
                const iop = innerCommand[2];
                let ivalue = innerCommand[3].replace(";", "");
                if (ivalue.startsWith('"') && ivalue.endsWith('"')) {
                    ivalue = ivalue.slice(1, -1);
                } else {
                    ivalue = Number(ivalue);
                }

                const iaction = innerCommand[4];
                const iarg = innerCommand[5].replace(";", "");

                let iok = false;
                if (iop === ">") {
                    iok = vars[ivar] > ivalue;
                }
                if (iop === "<") {
                    iok = vars[ivar] < ivalue;
                }
                if (iop === "==") {
                    iok = vars[ivar] == ivalue;
                }

                if (iok && iaction === "Go") {
                    console.log(vars[iarg]);
                }
            }

            vars[varName] += step;
        }
    }
}

