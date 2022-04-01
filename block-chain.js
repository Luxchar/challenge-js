function blockChain(data,prev = {index:0, hash:'0'}) {
    let block = {
        data,
        prev
    }
    block.index = block.prev.index + 1
    block.hash = hashCode(block.index + block.prev.hash + JSON.stringify(data))
    block.chain = (data) => blockChain(data,block)
    return block;
}