import { AlgorandClient } from '@algorandfoundation/algokit-utils/types/algorand-client';

// Instantiate the Algorand client (replace with your algod node details)
const algorand = new AlgorandClient({
  algod: {
    server: 'https://testnet-api.algonode.cloud', // Example endpoint
    port: '',
    token: '', // If required
  },
  indexer: undefined, // Optional, not needed for asset creation
});

// Replace these with your actual addresses and signer
const CREATORADDRESS = 'CREATORADDRESS';
const MANAGERADDRESS = 'MANAGERADDRESS';
const RESERVEADDRESS = 'RESERVEADDRESS';
const FREEZEADDRESS = 'FREEZEADDRESS';
const CLAWBACKADDRESS = 'CLAWBACKADDRESS';
// const transactionSigner = ... // Set up your transaction signer if needed

async function createAsset() {
  const result = await algorand.send.assetCreate({
    sender: CREATORADDRESS,
    total: 100n,
    decimals: 2,
    assetName: 'asset',
    unitName: 'unit',
    url: 'url',
    metadataHash: 'metadataHash',
    defaultFrozen: false,
    manager: MANAGERADDRESS,
    reserve: RESERVEADDRESS,
    freeze: FREEZEADDRESS,
    clawback: CLAWBACKADDRESS,
    // signer: transactionSigner, // Uncomment and provide if required
  });
  console.log('Created asset with ID:', result.assetId);
}

createAsset().catch(console.error);
