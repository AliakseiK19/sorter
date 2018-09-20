class Sorter {
  constructor() {
    // your implementation
    
    this.arr = new Array();
  }

  add(element) {
    // your implementation
    this.arr.push(element);
  }

  at(index) {
    // your implementation
    return this.arr[index];

  }

  get length() {
    // your implementation
   let ln = this.arr.length;
    return ln;

  }

  toArray() {
    {
       return this.arr;
    }    
  }

  sort(indices) {
     if(this.arr.length <= 1){return this.arr;}
    else if(indices.length==2){
     if(this.arr[indices[indices.length-1]]<this.arr[indices[indices.length-2]]) {      
      if(this.arr[0]<this.arr[1]){return this.arr;}
      let tmp = this.arr[indices[indices.length-1]];
      this.arr[indices[indices.length-1]] = this.arr[indices[indices.length-2]];
      this.arr[indices[indices.length-2]] = tmp;
    }
    else{return this.arr;}
  }
 else
 {
   for (let i = 0; i< indices.length-1; i++)
   {
     for(let j = indices.length-1; j>i; j--)
     {
         if(this.arr[indices[j]]<this.arr[indices[j-1]])
         {
           let tmp = this.arr[indices[j-1]];
           this.arr[indices[j-1]] = this.arr[indices[j]];
           this.arr[indices[j]] = tmp;
         }
     }
   }
 }
}

  setComparator(compareFunction) {
    // your implementation  
  }
}

module.exports = Sorter;