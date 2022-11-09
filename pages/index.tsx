import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import data from '../public/data.json'

// Data from
// https://pubchem.ncbi.nlm.nih.gov/periodic-table/#property=GroupBlock

export default function Home() {

  let i = 3;
  let j = 3;

  return (
    <div className={styles.container}>
      {data.map(e => {
        let col = e.Group
        let row = e.Period
        let background = 'white'
        if (e.Group === "" && e.Period === "6") {
          col = (i++).toString()
          row = "10"
        }
        if (e.Group === "" && e.Period === "7") {
          col = (j++).toString()
          row = "11";
        }
        return (
          <div key={e.Symbol} style={{ gridColumn: col, gridRow: row }} className={styles.elementContainer}>
            <div className={styles.elSymbol}>{e.Symbol}</div>
            <div className={styles.elAtomicNum}>{e.AtomicNumber}</div>
          </div>)
      })}
    </div >
  )
}
