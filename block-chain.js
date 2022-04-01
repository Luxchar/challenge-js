function blockChain(data,prev = {index:0, hash:'0'}) {
    let block = {
        index,
        hash
    }
    block.index = prev.index + 1
    block.hash = hash(prev.hash + JSON.stringify(data))
    return block;
}