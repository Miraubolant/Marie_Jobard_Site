# Images pour les Services

## État actuel

✅ **Les images fonctionnent déjà !** Les services utilisent actuellement des images temporaires depuis Unsplash, hébergées en ligne. Aucune configuration supplémentaire n'est nécessaire pour voir les images.

### Images actuelles (depuis Unsplash)

Les 6 services affichent des images professionnelles:
1. **Consultation à domicile** - Bébé avec parents
2. **Atelier portage** - Parent portant bébé
3. **Accompagnement allaitement** - Allaitement maternel
4. **Consultation sommeil** - Bébé endormi
5. **Préparation retour maternité** - Équipement bébé
6. **Massage bébé** - Massage de bébé

## Remplacer par vos propres images

Pour personnaliser avec vos photos professionnelles :

### Méthode 1 : Via l'interface admin (Recommandé) ⭐

1. Connectez-vous à [http://localhost:30369/admin/login](http://localhost:30369/admin/login)
2. Allez dans la section **Services**
3. Cliquez sur **Modifier** pour chaque service
4. Uploadez votre propre image
5. Cliquez sur **Enregistrer**

Les images seront automatiquement stockées dans `public/uploads/services/`

### Méthode 2 : Modification manuelle

Si vous préférez ajouter les images manuellement :

1. Placez vos images dans `public/uploads/`
2. Via l'admin, modifiez chaque service pour pointer vers `/uploads/votre-image.jpg`

## Spécifications recommandées

- **Format :** JPG, PNG ou WebP
- **Dimensions :** 800x600px minimum (ratio 4:3)
- **Poids :** < 500KB (optimisé pour le web)
- **Qualité :** Professionnelle, lumineuse, bienveillante

## Suggestions de contenu par service

### 1. Consultation à domicile
- Scène chaleureuse de consultation
- Puéricultrice avec parents et bébé
- Environnement rassurant

### 2. Atelier portage
- Parent portant bébé en écharpe
- Lien parent-enfant visible
- Écharpe ergonomique

### 3. Accompagnement allaitement
- Moment serein d'allaitement
- Ambiance respectueuse
- Cadre intime et confortable

### 4. Consultation sommeil
- Bébé endormi paisiblement
- Lit ou berceau douillet
- Lumière douce

### 5. Préparation retour maternité
- Chambre de bébé accueillante
- Matériel organisé
- Ambiance cocooning

### 6. Massage bébé
- Massage doux d'un bébé
- Bébé détendu
- Mains bienveillantes

## Sources d'images professionnelles

### Gratuites
- [Unsplash](https://unsplash.com) - Photos libres haute qualité
- [Pexels](https://pexels.com) - Banque d'images gratuites
- [Pixabay](https://pixabay.com) - Images libres de droits

### Payantes (pour usage professionnel)
- [Adobe Stock](https://stock.adobe.com)
- [iStock](https://www.istockphoto.com)
- [Shutterstock](https://www.shutterstock.com)

### Photographe professionnel
Pour un rendu unique, envisagez un photographe spécialisé petite enfance.

## Optimisation des images

Outils en ligne gratuits :
- [TinyPNG](https://tinypng.com) - Compression sans perte de qualité
- [Squoosh](https://squoosh.app) - Optimiseur d'images Google

## Note légale

⚠️ **Important :** Les images Unsplash actuelles sont gratuites mais pour un site professionnel commercial, il est recommandé de :
- Utiliser vos propres photos professionnelles
- Acheter des licences commerciales
- Faire créer des visuels personnalisés

Cela garantit l'unicité de votre identité visuelle et évite tout problème de droits d'auteur.
