import Web3 from "web3";

// Replace with your Hyperledger Besu node URL
const web3 = new Web3("http://localhost:8545");

// ABI and contract address (replace with your actual values)
const contractABI = [
  /* Your contract ABI here */
];
const contractAddress =
  "0xfdfe66f224a0a627d86812ded09f6d7ee5ae99393e25c3908db882ce1889c02b";

const contract = new web3.eth.Contract(contractABI, contractAddress);

// Fetch purchase history
export const fetchPurchaseHistory = async (account) => {
  const purchaseHistory = await contract.methods
    .getPurchaseHistory(account)
    .call();
  return purchaseHistory.map((purchase) => ({
    id: purchase.id,
    title: purchase.title,
    price: purchase.price,
    date: purchase.date,
    rating: purchase.rating,
    images: [purchase.imageUrl],
  }));
};

// Add a new purchase
export const addPurchase = async (account, purchase) => {
  await contract.methods
    .addPurchase(
      purchase.id,
      purchase.title,
      purchase.price,
      purchase.date,
      purchase.rating,
      purchase.imageUrl
    )
    .send({ from: account });
};

// Send money from one account to another
export const sendMoney = async (fromAccount, toAccount, amount) => {
  const transaction = {
    from: fromAccount,
    to: toAccount,
    value: web3.utils.toWei(amount, "ether"),
    gas: 21000, // You might need to adjust the gas limit
  };

  await web3.eth.sendTransaction(transaction);
};
