async function friend(code) {
    const lines = code.split("\n");
    let i = 0;

    while (i < lines.length) {
        const com = lines[i].split(" ");
        const ele = com.slice(1).join(" ");
        if (com[0] === "Log") {
            console.log(ele);
        }
        if (com[0] === "Open") {
            window.open(ele);
        }
        if (com[0] === "Knock") {
            document.querySelector(ele).click();
        }
        if (com[0] === "Wait") {
            await wait(ele);
        }
        if (com[0] === "If") {
            const target = document.querySelector(ele);
            if (!target) {
                continue;
            }
        }
        if (com[0] === "Loop") {
            const box = [];
            const count = Number(ele);

            i++;

            while (lines[i] !== "Finish") {
                box.push(lines[i]);
                i++;
            }

            for (let j = 0; j < count; j++) {
                await friend(box.join("\n"));
            }
        }

        i++;
    }
}

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}