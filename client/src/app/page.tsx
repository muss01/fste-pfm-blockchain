import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-10 row-start-2 items-center text-center">
          <Image
              src="/logo.png"
              alt="Logo Next.js"
              width={180}
              height={38}
              priority
          />

          <div>
            <h1 className="text-3xl font-bold mb-2">Projet de Fin de Module</h1>
            <p className="text-gray-600 dark:text-gray-300 text-base max-w-xl">
              Développement d’une App pour le TP 3 (Solidity, Truffle et ReactJS)
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl">
            {/* Exercice 1 */}
            <Link
                href="/exercises/exercise1"
                className="block rounded-lg bg-white dark:bg-[#111] shadow hover:bg-gray-100 dark:hover:bg-[#1a1a1a] px-6 py-4 transition border border-gray-200 dark:border-gray-700"
            >
              <h2 className="text-lg font-semibold mb-1">➕ L’Addition</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">Additionner deux nombres simples.</p>
            </Link>

            {/* Exercice 2 */}
            <Link
                href="/exercises/exercise2"
                className="block rounded-lg bg-white dark:bg-[#111] shadow hover:bg-gray-100 dark:hover:bg-[#1a1a1a] px-6 py-4 transition border border-gray-200 dark:border-gray-700"
            >
              <h2 className="text-lg font-semibold mb-1">🔄 Convertisseur Ether ↔ Wei</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">Convertir Ether en Wei et vice versa.</p>
            </Link>

            {/* Exercice 3 */}
            <Link
                href="/exercises/exercise3"
                className="block rounded-lg bg-white dark:bg-[#111] shadow hover:bg-gray-100 dark:hover:bg-[#1a1a1a] px-6 py-4 transition border border-gray-200 dark:border-gray-700"
            >
              <h2 className="text-lg font-semibold mb-1">🔤 Gestion des Chaînes</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">Manipuler des chaînes de caractères avec Solidity.</p>
            </Link>

            {/* Exercice 4 */}
            <Link
                href="/exercises/exercise4"
                className="block rounded-lg bg-white dark:bg-[#111] shadow hover:bg-gray-100 dark:hover:bg-[#1a1a1a] px-6 py-4 transition border border-gray-200 dark:border-gray-700"
            >
              <h2 className="text-lg font-semibold mb-1">✅ Vérification de Positivité</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">Vérifier si un nombre est positif.</p>
            </Link>

            {/* Exercice 5 */}
            <Link
                href="/exercises/exercise5"
                className="block rounded-lg bg-white dark:bg-[#111] shadow hover:bg-gray-100 dark:hover:bg-[#1a1a1a] px-6 py-4 transition border border-gray-200 dark:border-gray-700"
            >
              <h2 className="text-lg font-semibold mb-1">🔢 Vérificateur de Parité</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">Vérifier si un nombre est pair ou impair.</p>
            </Link>

            {/* Exercice 6 */}
            <Link
                href="/exercises/exercise6"
                className="block rounded-lg bg-white dark:bg-[#111] shadow hover:bg-gray-100 dark:hover:bg-[#1a1a1a] px-6 py-4 transition border border-gray-200 dark:border-gray-700"
            >
              <h2 className="text-lg font-semibold mb-1">📊 Somme d’un Tableau</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">Enregistrer et additionner une liste de nombres sur la blockchain.</p>
            </Link>

            {/* Exercice 7 */}
            <Link
                href="/exercises/exercise7"
                className="block rounded-lg bg-white dark:bg-[#111] shadow hover:bg-gray-100 dark:hover:bg-[#1a1a1a] px-6 py-4 transition border border-gray-200 dark:border-gray-700"
            >
              <h2 className="text-lg font-semibold mb-1">🧱 POO : Rectangle & Forme</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">Pratiquer l’héritage et l’abstraction en Solidity.</p>
            </Link>

            {/* Exercice 8 */}
            <Link
                href="/exercises/exercise_8"
                className="block rounded-lg bg-white dark:bg-[#111] shadow hover:bg-gray-100 dark:hover:bg-[#1a1a1a] px-6 py-4 transition border border-gray-200 dark:border-gray-700"
            >
              <h2 className="text-lg font-semibold mb-1">💸 Contrat de Paiement</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">Envoyer, recevoir et retirer des Ethers en toute sécurité.</p>
            </Link>
          </div>

        </main>

        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center text-sm text-gray-500 dark:text-gray-400">
          <span>© 2024/2025 MUS IIIA, S2 | Sécurité et Technologies Blockchain</span>
        </footer>
      </div>
  );
}
