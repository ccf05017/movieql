import { getBlocks, getBlock, getTransactions } from "./db";

const resolvers = {
  Query: {
    blocks: () => getBlocks(),
    getBlock: (parent, { blockNumber }) => getBlock(blockNumber),
    transactions: () => getTransactions()
  }
};

export default resolvers;
