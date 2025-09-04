export function checkScore(lines) {
    
    const n = Number(lines);

    switch (n) {
        case 0: return 0;
        case 1: return 100;
        case 2: return 300;
        case 3: return 500;
        case 4: return 800;
        default:
            throw new Error("Invalid number of lines");
    }
}
