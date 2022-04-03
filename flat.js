function flat(items) {
    const arr = [];
  
    items.forEach(item => {
      if (Array.isArray(item)) {
        arr.push(...flat(item));
      } else {
        arr.push(item);
      }
    });
  
    return arr;
  }
  