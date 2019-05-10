import axios from "axios";

const ETH_BASE = "http://localhost:8000/";
const LIST_BLOCKS_URL = `${ETH_BASE}api/block/`;
const LIST_TRANSACTIONS_URL = `${ETH_BASE}api/transaction/`;

export const getBlocks = async () => {
  const {
    data: { results }
  } = await axios(LIST_BLOCKS_URL, {
    params: {}
  });
  return results;
};

export const getBlock = async blockNumber => {
  const { data } = await axios(LIST_BLOCKS_URL + blockNumber, {
    params: {}
  });
  return data;
};

export const getTransactions = async () => {
  const {
    data: { results }
  } = await axios(LIST_TRANSACTIONS_URL, {
    params: {}
  });
  return results;
};
