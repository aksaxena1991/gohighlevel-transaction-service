interface Config{
    port: number;
    mongodbUri:string;
}

class Config implements Config {
    constructor(){}
    private getConfig() {
        return {
            
        }
    }
}