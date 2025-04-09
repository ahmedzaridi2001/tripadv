import Link from "next/link"
import { Separator } from "@/components/ui/separator"

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-moroccan-dark font-['Amiri']">Politique de Confidentialité</h1>

        <div className="prose prose-slate max-w-none">
          <p className="text-muted-foreground">Dernière mise à jour: 15 Mars 2023</p>

          <p className="text-muted-foreground">
            Chez MaghrebVoyage, nous accordons une grande importance à la protection de vos données personnelles. Cette
            politique de confidentialité explique comment nous collectons, utilisons, partageons et protégeons vos
            informations lorsque vous utilisez notre site web.
          </p>

          <Separator className="my-6" />

          <h2 className="text-xl font-semibold mt-8 mb-4 text-moroccan-dark">1. Informations que Nous Collectons</h2>
          <p className="text-muted-foreground mb-4">
            Nous collectons plusieurs types d'informations vous concernant, notamment:
          </p>
          <ul className="list-disc pl-6 mb-4 text-muted-foreground">
            <li>
              <strong>Informations personnelles:</strong> Nom, adresse email, numéro de téléphone, nationalité, âge, et
              autres informations que vous nous fournissez lors de votre inscription ou de l'utilisation de nos
              services.
            </li>
            <li>
              <strong>Informations de profil:</strong> Vos préférences de voyage, vos avis, vos photos, et autres
              contenus que vous publiez sur notre plateforme.
            </li>
            <li>
              <strong>Informations d'utilisation:</strong> Comment vous interagissez avec notre site, les pages que vous
              visitez, les fonctionnalités que vous utilisez, et le temps que vous passez sur notre plateforme.
            </li>
            <li>
              <strong>Informations de l'appareil:</strong> Type d'appareil, système d'exploitation, navigateur, adresse
              IP, et autres informations techniques.
            </li>
            <li>
              <strong>Informations de localisation:</strong> Avec votre consentement, nous pouvons collecter des
              informations sur votre localisation précise pour vous fournir des recommandations pertinentes.
            </li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-4 text-moroccan-dark">
            2. Comment Nous Utilisons Vos Informations
          </h2>
          <p className="text-muted-foreground mb-4">Nous utilisons les informations que nous collectons pour:</p>
          <ul className="list-disc pl-6 mb-4 text-muted-foreground">
            <li>Fournir, maintenir et améliorer notre plateforme</li>
            <li>Personnaliser votre expérience et vous offrir des recommandations adaptées</li>
            <li>Traiter vos transactions et gérer votre compte</li>
            <li>
              Communiquer avec vous, notamment pour vous envoyer des mises à jour, des alertes de sécurité et des
              messages administratifs
            </li>
            <li>Répondre à vos commentaires, questions et demandes</li>
            <li>Surveiller et analyser les tendances, l'utilisation et les activités liées à notre plateforme</li>
            <li>Détecter, prévenir et résoudre les problèmes techniques et de sécurité</li>
            <li>Se conformer aux obligations légales</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-4 text-moroccan-dark">3. Partage de Vos Informations</h2>
          <p className="text-muted-foreground mb-4">
            Nous pouvons partager vos informations dans les circonstances suivantes:
          </p>
          <ul className="list-disc pl-6 mb-4 text-muted-foreground">
            <li>
              <strong>Avec votre consentement:</strong> Nous partagerons vos informations personnelles lorsque vous nous
              avez donné votre consentement pour le faire.
            </li>
            <li>
              <strong>Avec nos fournisseurs de services:</strong> Nous partag eons des informations avec des
              fournisseurs de services tiers qui traitent des données en notre nom.
            </li>
            <li>
              <strong>Pour des raisons légales:</strong> Nous pouvons partager des informations si nous pensons de bonne
              foi que la divulgation est nécessaire pour se conformer à la loi, protéger nos droits ou la sécurité de
              nos utilisateurs.
            </li>
            <li>
              <strong>En cas de transfert d'entreprise:</strong> Si nous sommes impliqués dans une fusion, acquisition
              ou vente d'actifs, vos informations peuvent être transférées dans le cadre de cette transaction.
            </li>
            <li>
              <strong>Données agrégées ou anonymisées:</strong> Nous pouvons partager des informations agrégées ou
              anonymisées qui ne peuvent pas raisonnablement être utilisées pour vous identifier.
            </li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-4 text-moroccan-dark">4. Vos Choix et Droits</h2>
          <p className="text-muted-foreground mb-4">Vous avez certains droits concernant vos données personnelles:</p>
          <ul className="list-disc pl-6 mb-4 text-muted-foreground">
            <li>
              <strong>Accès et mise à jour:</strong> Vous pouvez accéder et mettre à jour vos informations via les
              paramètres de votre compte.
            </li>
            <li>
              <strong>Suppression:</strong> Vous pouvez demander la suppression de votre compte et de vos données
              personnelles.
            </li>
            <li>
              <strong>Opposition:</strong> Vous pouvez vous opposer au traitement de vos données dans certaines
              circonstances.
            </li>
            <li>
              <strong>Restriction:</strong> Vous pouvez demander la limitation du traitement de vos données.
            </li>
            <li>
              <strong>Portabilité:</strong> Vous pouvez demander une copie de vos données dans un format structuré,
              couramment utilisé et lisible par machine.
            </li>
            <li>
              <strong>Retrait du consentement:</strong> Vous pouvez retirer votre consentement à tout moment lorsque
              nous traitons vos données sur la base de votre consentement.
            </li>
          </ul>
          <p className="text-muted-foreground mb-4">
            Pour exercer ces droits, veuillez nous contacter à privacy@maghrebvoyage.com.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4 text-moroccan-dark">5. Sécurité des Données</h2>
          <p className="text-muted-foreground mb-4">
            Nous prenons des mesures raisonnables pour protéger vos informations contre la perte, le vol, l'utilisation
            abusive et l'accès non autorisé, la divulgation, l'altération et la destruction. Cependant, aucune méthode
            de transmission sur Internet ou de stockage électronique n'est totalement sécurisée.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4 text-moroccan-dark">6. Conservation des Données</h2>
          <p className="text-muted-foreground mb-4">
            Nous conservons vos informations aussi longtemps que nécessaire pour fournir les services que vous avez
            demandés, ou pour d'autres fins essentielles telles que se conformer à nos obligations légales, résoudre les
            litiges et faire respecter nos accords.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4 text-moroccan-dark">7. Transferts Internationaux</h2>
          <p className="text-muted-foreground mb-4">
            Vos informations peuvent être transférées et traitées dans des pays autres que celui dans lequel vous
            résidez. Ces pays peuvent avoir des lois sur la protection des données différentes de celles de votre pays.
          </p>
          <p className="text-muted-foreground mb-4">
            Lorsque nous transférons vos informations à l'extérieur de votre pays, nous prenons des mesures pour assurer
            que vos informations continuent à être protégées.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4 text-moroccan-dark">8. Cookies et Technologies Similaires</h2>
          <p className="text-muted-foreground mb-4">
            Nous utilisons des cookies et des technologies similaires pour collecter des informations sur votre
            activité, votre navigateur et votre appareil. Vous pouvez configurer votre navigateur pour refuser tous les
            cookies ou pour indiquer quand un cookie est envoyé. Cependant, certaines fonctionnalités de notre site
            peuvent ne pas fonctionner correctement sans cookies.
          </p>
          <p className="text-muted-foreground mb-4">
            Pour plus d'informations sur notre utilisation des cookies, veuillez consulter notre{" "}
            <Link href="/cookies" className="text-moroccan-primary hover:underline">
              Politique de Cookies
            </Link>
            .
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4 text-moroccan-dark">9. Modifications de cette Politique</h2>
          <p className="text-muted-foreground mb-4">
            Nous pouvons modifier cette politique de confidentialité de temps à autre. Si nous apportons des
            modifications importantes, nous vous en informerons par email ou par un avis sur notre site avant que les
            modifications ne prennent effet.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4 text-moroccan-dark">10. Nous Contacter</h2>
          <p className="text-muted-foreground mb-4">
            Si vous avez des questions concernant cette politique de confidentialité, veuillez nous contacter:
          </p>
          <ul className="list-disc pl-6 mb-4 text-muted-foreground">
            <li>Par email: privacy@maghrebvoyage.com</li>
            <li>Par courrier: 123 Avenue Mohammed V, Rabat, 10000, Maroc</li>
          </ul>

          <Separator className="my-8" />

          <p className="text-muted-foreground mb-4">
            En utilisant notre site, vous reconnaissez avoir lu et compris notre Politique de Confidentialité et
            acceptez d'être lié par nos{" "}
            <Link href="/terms" className="text-moroccan-primary hover:underline">
              Conditions d'Utilisation
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  )
}

