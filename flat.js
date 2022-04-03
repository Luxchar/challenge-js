function flat(items, depth = 1) {
    const arr = [];
  
    items.forEach(item => {
      if (Array.isArray(item) && depth > 0) {
        arr.push(...flat(item, depth - 1));
      } else {
        arr.push(item);
      }
    });
  
    return arr;
  }
