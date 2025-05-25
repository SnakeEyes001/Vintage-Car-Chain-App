# 📱 vintage-car-chain-client

**vintage-car-chain-client** is a React Native mobile app that enables car owners and collectors to manage the lifecycle of their vintage vehicles using blockchain technology. It interacts with a backend API that connects to a Hyperledger Fabric network composed of Org1 and Org2.

---

## 🚀 Features

- 🚘 Register vintage cars with VIN, brand, model, and year
- 🔐 Transfer ownership to another wallet (via public key or user ID)
- 📜 View full ownership history for any car
- 🔍 Search and list owned vehicles
- 🔗 Fully synced with Hyperledger Fabric (via backend API)
- 📱 Offline-friendly interface with local data cache

---

## 🛠 Tech Stack

- React Native (TypeScript, Expo or CLI)
- Axios for API communication
- React Navigation (v6)
- AsyncStorage (data caching)
- NativeBase or React Native Paper for UI
- QR Code Scanner (optional)

---

## ⚙️ Backend Integration

The app connects to the [vintage-car-chain-api](https://github.com/your-org/vintage-car-chain-api), which uses:

- Hyperledger Fabric SDK
- Chaincode: `vintagecarcc`
- Channel: `vintagechannel`
- Org1 & Org2 as peers
- MongoDB for off-chain data

---

## 📦 Installation

```bash
git clone https://github.com/your-org/vintage-car-chain-client.git
cd vintage-car-chain-client
npm install
npm start
