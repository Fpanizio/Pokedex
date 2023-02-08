export class test {
    // static parseListToJSON(TestPokemons: any) {
    //     const json = JSON.stringify(TestPokemons)
    //     console.log(json)
    //     return json;
    // }


    static leadingzero(str: string | number, size = 3): string {
        let s = String(str);
    
        while (s.length < (size || 2)) {
          s = '0' + s;
        }
        return s;
    }
}