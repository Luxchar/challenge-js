function flat(items, depth = 1) {
    const arr = [];
  
    items.forEach(item => {
      if (Array.isArray(item)) {
        arr.push(...flat(item, depth--));
      } else {
        arr.push(item);
      }
    });
  
    return arr;
  }