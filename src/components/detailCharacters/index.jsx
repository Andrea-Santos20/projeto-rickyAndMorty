/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styles from "./DetailCharacters.module.css";


export default function DetailCharacters({ personagens }) {

  return (

    <section className={styles.container}>
      
      <div className={styles.name}>
        <h1>{personagens?.name}</h1>
      </div>

      <main className={styles.imgInfo}>
      <div className={styles.img}>
        <img src={personagens.image} alt="" />
      </div>
     
      <div className={styles.information}>
          
          <p>{personagens.status}</p>
          <p>{personagens.species}</p>
          <p>{personagens.gender}</p>            
          <p>{personagens.type }</p>
          <p>{personagens.origin?.name}</p>
          <p>{personagens.location?.name}</p>

      </div>
      </main>
      
    </section>
  );
}