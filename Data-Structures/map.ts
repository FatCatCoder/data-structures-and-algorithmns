namespace DataStructures.Map
{
    class Map {
        private keys: any = {};

        add(key:any, value: any){
            if(!this.keys.has(key))
            this.keys[key] = value;
        }

        remove(key: any){
            if(this.keys.has(key))
            delete this.keys[key]
        }

        get(key: any){
            return this.keys[key] ?? null;
        }

        getKeys(){
            return [...Object.keys(this.keys)]
        }
        getValues(){
            return [...Object.values(this.keys)]
        }

        size(){
            return Object.entries(this.keys).length
        }
    }
}

