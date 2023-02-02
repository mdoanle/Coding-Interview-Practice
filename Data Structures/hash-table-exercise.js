class HashTable {
  constructor(size){
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i =0; i < key.length; i++){
        hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash;
  }

  set(key, value) {
    let address = this._hash(key);
    if(!this.data[address]) {
      this.data[address] = []
    }
    this.data[address].push([key,value])
    return this.data;
  }

  get(key) {
    let address = this._hash(key);
    let bucket = this.data[address];
    for(let i = 0; i < bucket.length; i++) {
      if(bucket[i][0] === key) {
        return bucket[i][1];
      }
    }
    return undefined;
  }

  keys() {
    const keysArray = [];
    for(let i = 0; i < this.data.length; i++) {
      if(this.data[i]) {
        keysArray.push(this.data[i][0][0]);
      }
    }
    return keysArray;
  }

  values() {
    const valueArray = [];
    for(let i = 0; i < this.data.length; i++) {
      if(this.data[i]) {
        valueArray.push(this.data[i][0][1])
      }
    }
  return valueArray;
  }
  
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000)
myHashTable.set('apples', 9)
myHashTable.get('grapes')
myHashTable.get('apples')
console.log(myHashTable.keys());
console.log(myHashTable.values());