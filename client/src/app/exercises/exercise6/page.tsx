'use client';

import { useState, useEffect } from 'react';
import Web3 from 'web3';
import Image from 'next/image';
import Link from 'next/link';

interface ContractNetwork {
    [key: string]: {
        address: string;
    };
}

interface ContractData {
    abi: any;
    networks: ContractNetwork;
}

export default function Exercise6Page() {
    const [inputNumber, setInputNumber] = useState('');
    const [result, setResult] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const [blockchainInfo, setBlockchainInfo] = useState<{
        networkId?: number;
        networkUrl?: string;
        contractAddress?: string;
        account?: string;
        latestBlock?: any;
    }>({});

    const [transactionInfo, setTransactionInfo] = useState<any>(null);
    const [contractInstance, setContractInstance] = useState<any>(null);

    const web3 = new Web3(Web3.givenProvider || 'http://localhost:7545');

    useEffect(() => {
        const fetchBlockchainInfo = async () => {
            try {
                const contractData = (await import('../../contracts/Exercise6.json')) as ContractData;
                const networkId = await web3.eth.net.getId();
                const deployedNetwork = contractData.networks[networkId];

                if (!deployedNetwork) throw new Error('Contrat non déployé sur ce réseau');

                const accounts = await web3.eth.getAccounts();
                const latestBlock = await web3.eth.getBlock('latest');

                const contract = new web3.eth.Contract(contractData.abi, deployedNetwork.address);
                setContractInstance(contract);

                setBlockchainInfo({
                    networkId,
                    networkUrl: 'http://127.0.0.1:7545',
                    contractAddress: deployedNetwork.address,
                    account: accounts[0],
                    latestBlock,
                });
            } catch (err) {
                console.error("Erreur lors de la récupération des infos blockchain :", err);
            }
        };

        fetchBlockchainInfo();
    }, []);

    const handleAddNumber = async () => {
        try {
            setLoading(true);
            setError(null);

            const value = web3.utils.toBN(inputNumber);
            const gasEstimate = await contractInstance.methods.ajouterNombre(value).estimateGas({ from: blockchainInfo.account });
            const tx = await contractInstance.methods.ajouterNombre(value).send({ from: blockchainInfo.account, gas: gasEstimate });

            const txDetails = await web3.eth.getTransaction(tx.transactionHash);
            setTransactionInfo(txDetails);
            setResult(`✅ Le nombre ${inputNumber} a été ajouté à la liste.`);
        } catch (err) {
            setError(err instanceof Error ? err.message : "Erreur lors de l'appel au contrat");
        } finally {
            setLoading(false);
        }
    };

    const handleCalculateSum = async () => {
        try {
            setLoading(true);
            setError(null);
            const sum = await contractInstance.methods.calculerSomme().call();
            setResult(`🔢 Somme des nombres : ${sum}`);
        } catch (err) {
            setError(err instanceof Error ? err.message : "Erreur lors du calcul de la somme");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 sm:p-20 bg-gray-50">
            <main className="flex flex-col gap-10 row-start-2 items-center text-center w-full max-w-2xl">
                <Image className="dark:invert" src="/logo.png" alt="Logo" width={180} height={38} />

                <Link href="/" className="inline-flex items-center gap-2 self-start bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                    ← Retour à l’accueil
                </Link>

                <div className="w-full bg-white dark:bg-[#111] p-8 rounded-2xl shadow-md space-y-6 text-left max-w-4xl">
                    <h1 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-100">Ajouter & Calculer la Somme</h1>

                    <div className="space-y-4">
                        <input type="number" placeholder="Saisir un nombre à ajouter" value={inputNumber} onChange={e => setInputNumber(e.target.value)} className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-500" disabled={loading} />
                        <div className="flex gap-4 flex-col sm:flex-row">
                            <button onClick={handleAddNumber} disabled={loading} className="w-full sm:w-1/2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors disabled:bg-gray-400">
                                {loading ? 'Traitement...' : 'Ajouter le nombre'}
                            </button>
                            <button onClick={handleCalculateSum} disabled={loading} className="w-full sm:w-1/2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md transition-colors disabled:bg-gray-400">
                                {loading ? 'Traitement...' : 'Calculer la somme'}
                            </button>
                        </div>
                        {error && <div className="p-3 text-red-700 bg-red-100 rounded-md">{error}</div>}
                        {result && <div className="p-4 text-green-700 bg-green-100 rounded-md">{result}</div>}
                    </div>
                </div>

                {blockchainInfo.latestBlock && (
                    <div className="w-full bg-white dark:bg-[#111] p-8 rounded-2xl shadow-md space-y-8 text-left max-w-4xl">
                        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white">Informations sur la Blockchain</h2>

                        <div className="bg-gray-50 dark:bg-[#1e1e1e] p-6 rounded-xl space-y-4 border border-gray-200 dark:border-gray-700">
                            <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400 border-b border-blue-400 dark:border-blue-600 pb-2">Blockchain</h3>
                            <p><strong>URL du réseau :</strong> {blockchainInfo.networkUrl}</p>
                            <p><strong>ID du réseau :</strong> {blockchainInfo.networkId}</p>
                            <p><strong>Compte :</strong> {blockchainInfo.account}</p>
                            <p><strong>Adresse du contrat :</strong> {blockchainInfo.contractAddress}</p>
                            <p><strong>Numéro du bloc :</strong> #{blockchainInfo.latestBlock.number}</p>
                        </div>

                        <div className="bg-gray-50 dark:bg-[#1e1e1e] p-6 rounded-xl space-y-4 border border-gray-200 dark:border-gray-700">
                            <h3 className="text-lg font-semibold text-purple-700 dark:text-purple-400 border-b border-purple-400 dark:border-purple-600 pb-2">Détails du dernier bloc</h3>
                            <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                                <p><strong>Numéro :</strong> {blockchainInfo.latestBlock.number}</p>
                                <p><strong>Hash :</strong> {blockchainInfo.latestBlock.hash}</p>
                                <p><strong>Hash parent :</strong> {blockchainInfo.latestBlock.parentHash}</p>
                                <p><strong>Horodatage :</strong> {new Date(blockchainInfo.latestBlock.timestamp * 1000).toLocaleString()}</p>
                                <p><strong>Mineur :</strong> {blockchainInfo.latestBlock.miner}</p>
                                <p><strong>Gaz utilisé :</strong> {blockchainInfo.latestBlock.gasUsed}</p>
                                <p><strong>Limite de gaz :</strong> {blockchainInfo.latestBlock.gasLimit}</p>
                                <p><strong>Taille :</strong> {blockchainInfo.latestBlock.size} octets</p>
                                <p><strong>Transactions :</strong> {blockchainInfo.latestBlock.transactions.length}</p>
                                {blockchainInfo.latestBlock.baseFeePerGas && (
                                    <p><strong>Frais de base par gaz :</strong> {parseInt(blockchainInfo.latestBlock.baseFeePerGas, 10)} wei</p>
                                )}
                            </div>
                        </div>

                        {transactionInfo && (
                            <div className="bg-gray-100 dark:bg-[#222] p-6 rounded-xl space-y-4 border border-gray-300 dark:border-gray-700">
                                <h3 className="text-lg font-semibold text-green-700 dark:text-green-400 border-b border-green-400 dark:border-green-600 pb-2">Transaction</h3>
                                <p><strong>De :</strong> {transactionInfo.from}</p>
                                <p><strong>À :</strong> {transactionInfo.to}</p>
                                <p><strong>Hash :</strong> {transactionInfo.hash}</p>
                                <p><strong>Nonce :</strong> {transactionInfo.nonce}</p>
                                <p><strong>Gaz :</strong> {transactionInfo.gas}</p>
                                <p><strong>Bloc n° :</strong> {transactionInfo.blockNumber}</p>
                                <p><strong>Valeur :</strong> {web3.utils.fromWei(transactionInfo.value, 'ether')} ETH</p>
                            </div>
                        )}
                    </div>
                )}
            </main>

            <footer className="row-start-3 text-sm text-gray-500 dark:text-gray-400 mt-8">
                © 2025 Exercices Blockchain
            </footer>
        </div>
    );
}
