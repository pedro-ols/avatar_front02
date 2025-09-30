import styles from './characterCard.module.css';
import Image from 'next/image';

export default function CharacterCard({ character }) {
  const getAffiliationClass = (affiliation) => {
    if (!affiliation) return styles.neutral;
    
    const affiliationLower = affiliation.toLowerCase();
    
    if (affiliationLower.includes('fire') || affiliationLower.includes('nation')) {
      return styles.fireNation;
    } else if (affiliationLower.includes('water') || affiliationLower.includes('tribe')) {
      return styles.waterTribe;
    } else if (affiliationLower.includes('earth') || affiliationLower.includes('kingdom')) {
      return styles.earthKingdom;
    } else if (affiliationLower.includes('air') || affiliationLower.includes('nomad')) {
      return styles.airNomads;
    }

    return styles.neutral;
  };

  return (
    <div className={`${styles.card} ${getAffiliationClass(character.affiliation)}`}>
      <div className={styles.imageContainer}>
        <Image
          src={
            character.photoUrl
              ? character.photoUrl
              : "https://via.placeholder.com/500x300?text=No+Image"
          }
          alt={character.name}
          width={500}
          height={300}
          className={styles.characterImage}
        />
      </div>

      <h2 className={styles.characterInfo}>{character.name}</h2>
      <h3 className={`${styles.subtitle} ${styles.characterInfo}`}>
        <h4 className={styles.affiliationText}>Aliados:</h4>
        {character.allies.map((ally, index) => (
          <p key={index} className={styles.allyText}>
          {ally.charAt(0).toUpperCase() + ally.slice(1).toLowerCase()}
        </p>
        ))}
      </h3>
    </div>
  );
}