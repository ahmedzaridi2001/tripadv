import Link from "next/link"
import { Separator } from "@/components/ui/separator"

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-moroccan-dark font-['Amiri']">Conditions d'Utilisation</h1>

        <div className="prose prose-slate max-w-none">
          <p className="text-muted-foreground">Dernière mise à jour: 15 Mars 2023</p>

          <p className="text-muted-foreground">
            Bienvenue sur MaghrebVoyage. Veuillez lire attentivement ces conditions d'utilisation avant d'utiliser notre
            site web.
          </p>

          <Separator className="my-6" />

          <h2 className="text-xl font-semibold mt-8 mb-4 text-moroccan-dark">1. Acceptation des Conditions</h2>
          <p className="text-muted-foreground mb-4">
            En accédant à ou en utilisant MaghrebVoyage, vous acceptez d'être lié par ces Conditions d'Utilisation. Si
            vous n'acceptez pas ces conditions, veuillez ne pas utiliser notre site.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4 text-moroccan-dark">2. Modifications des Conditions</h2>
          <p className="text-muted-foreground mb-4">
            Nous nous réservons le droit de modifier ces conditions à tout moment. Les modifications entrent en vigueur
            dès leur publication sur le site. Votre utilisation continue du site après la publication des modifications
            constitue votre acceptation de ces modifications.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4 text-moroccan-dark">3. Utilisation du Site</h2>
          <p className="text-muted-foreground mb-4">
            Vous acceptez d'utiliser le site uniquement à des fins légales et d'une manière qui ne porte pas atteinte
            aux droits d'autrui, n'entrave pas leur utilisation et leur jouissance du site, ou ne cause pas de dommages
            au site ou à ses utilisateurs.
          </p>
          <p className="text-muted-foreground mb-4">Vous acceptez de ne pas:</p>
          <ul className="list-disc pl-6 mb-4 text-muted-foreground">
            <li>Utiliser le site d'une manière qui pourrait désactiver, surcharger ou endommager le site</li>
            <li>Utiliser des robots, des araignées ou d'autres dispositifs automatiques pour accéder au site</li>
            <li>Introduire des virus, des chevaux de Troie ou d'autres matériels nuisibles</li>
            <li>Tenter d'accéder sans autorisation à des parties sécurisées du site</li>
            <li>Interférer avec la sécurité du site ou identifier d'autres utilisateurs</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-4 text-moroccan-dark">4. Comptes Utilisateurs</h2>
          <p className="text-muted-foreground mb-4">
            Lorsque vous créez un compte sur notre site, vous devez fournir des informations exactes, complètes et à
            jour. Vous êtes responsable de la confidentialité de votre compte et de votre mot de passe, et de toutes les
            activités qui se produisent sous votre compte.
          </p>
          <p className="text-muted-foreground mb-4">
            Vous acceptez de nous informer immédiatement de toute utilisation non autorisée de votre compte ou de toute
            autre violation de la sécurité.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4 text-moroccan-dark">5. Contenu Utilisateur</h2>
          <p className="text-muted-foreground mb-4">
            Notre site permet aux utilisateurs de publier, de lier, de stocker, de partager et de mettre à disposition
            certaines informations, textes, graphiques, vidéos ou autres matériels ("Contenu Utilisateur").
          </p>
          <p className="text-muted-foreground mb-4">
            Vous êtes responsable du Contenu Utilisateur que vous publiez sur notre site, y compris sa légalité, sa
            fiabilité et son caractère approprié.
          </p>
          <p className="text-muted-foreground mb-4">
            En publiant du Contenu Utilisateur sur notre site, vous nous accordez le droit d'utiliser, de modifier,
            d'exécuter publiquement, d'afficher publiquement, de reproduire et de distribuer ce contenu sur et à travers
            le site.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4 text-moroccan-dark">6. Propriété Intellectuelle</h2>
          <p className="text-muted-foreground mb-4">
            Le site et son contenu original, ses fonctionnalités et sa fonctionnalité sont et resteront la propriété
            exclusive de MaghrebVoyage et de ses concédants de licence.
          </p>
          <p className="text-muted-foreground mb-4">
            Le site est protégé par le droit d'auteur, les marques de commerce et d'autres lois du Maroc et des pays
            étrangers. Nos marques de commerce et notre habillage commercial ne peuvent pas être utilisés en relation
            avec un produit ou un service sans notre consentement écrit préalable.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4 text-moroccan-dark">7. Liens vers d'Autres Sites Web</h2>
          <p className="text-muted-foreground mb-4">
            Notre site peut contenir des liens vers des sites web tiers qui ne sont ni détenus ni contrôlés par
            MaghrebVoyage.
          </p>
          <p className="text-muted-foreground mb-4">
            MaghrebVoyage n'a aucun contrôle sur le contenu, les politiques de confidentialité ou les pratiques des
            sites web tiers et n'assume aucune responsabilité pour ceux-ci. Nous vous conseillons de lire les conditions
            d'utilisation et la politique de confidentialité de chaque site web que vous visitez.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4 text-moroccan-dark">8. Résiliation</h2>
          <p className="text-muted-foreground mb-4">
            Nous pouvons résilier ou suspendre votre compte et votre accès au service immédiatement, sans préavis ni
            responsabilité, pour quelque raison que ce soit, y compris, sans limitation, si vous violez les Conditions
            d'Utilisation.
          </p>
          <p className="text-muted-foreground mb-4">
            En cas de résiliation, votre droit d'utiliser le service cessera immédiatement. Si vous souhaitez résilier
            votre compte, vous pouvez simplement cesser d'utiliser le service.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4 text-moroccan-dark">9. Limitation de Responsabilité</h2>
          <p className="text-muted-foreground mb-4">
            En aucun cas, MaghrebVoyage, ses administrateurs, employés, partenaires, agents, fournisseurs ou affiliés ne
            seront responsables de tout dommage indirect, accessoire, spécial, consécutif ou punitif, y compris, sans
            limitation, la perte de profits, de données, d'utilisation, de bonne volonté, ou d'autres pertes
            intangibles, résultant de:
          </p>
          <ul className="list-disc pl-6 mb-4 text-muted-foreground">
            <li>Votre accès ou utilisation ou incapacité d'accéder ou d'utiliser le service</li>
            <li>Toute conduite ou contenu d'un tiers sur le service</li>
            <li>Tout contenu obtenu à partir du service</li>
            <li>Accès non autorisé, utilisation ou altération de vos transmissions ou contenu</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-4 text-moroccan-dark">10. Loi Applicable</h2>
          <p className="text-muted-foreground mb-4">
            Ces conditions sont régies et interprétées conformément aux lois du Maroc, sans égard à ses dispositions en
            matière de conflit de lois.
          </p>
          <p className="text-muted-foreground mb-4">
            Notre incapacité à faire respecter un droit ou une disposition de ces conditions ne sera pas considérée
            comme une renonciation à ces droits. Si une disposition de ces conditions est jugée invalide ou inapplicable
            par un tribunal, les dispositions restantes de ces conditions resteront en vigueur.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4 text-moroccan-dark">11. Nous Contacter</h2>
          <p className="text-muted-foreground mb-4">
            Si vous avez des questions concernant ces Conditions d'Utilisation, veuillez nous contacter:
          </p>
          <ul className="list-disc pl-6 mb-4 text-muted-foreground">
            <li>Par email: legal@maghrebvoyage.com</li>
            <li>Par courrier: 123 Avenue Mohammed V, Rabat, 10000, Maroc</li>
          </ul>

          <Separator className="my-8" />

          <p className="text-muted-foreground mb-4">
            En utilisant notre site, vous reconnaissez avoir lu et compris nos{" "}
            <Link href="/privacy" className="text-moroccan-primary hover:underline">
              Politique de Confidentialité
            </Link>{" "}
            et acceptez d'être lié par nos Conditions d'Utilisation.
          </p>
        </div>
      </div>
    </div>
  )
}

