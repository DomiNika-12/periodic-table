import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
// import data from '../public/data.json'
import { fetchElements, parseElements, Element } from '../data';
import data from '../public/data.json'

// Data from
// https://pubchem.ncbi.nlm.nih.gov/periodic-table/#property=GroupBlock

export default function Home() {

  let i = 3;
  let j = 3;

  //const arr: Element[] = parseElements()

  return (
    <div className={styles.container}>
      {data.elements.map(e => {
        let col = ''
        let row = e.period.toString()
        if (row === "6") {
          col = (i++).toString()
          row = "9"
        }
        else if (row === "7") {
          col = (j++).toString()
          row = "10";
        }

        // let background = 'white'
        // if (e.Type === 'Nonmetal') {
        //   background = '#937666'
        // }
        // else if (e.Type === 'Noble Gas') {
        //   background = '#E3DFFF'
        // }
        // else if (e.Type === 'Alkali Metal') {
        //   background = 'lightblue'
        // }
        // else if (e.Type === 'Alkaline Earth Metal') {
        //   background = 'brown'
        // }
        // else if (e.Type === 'Metalloid') {
        //   background = 'blue'
        // }
        // else if (e.Type === 'Halogen') {
        //   background = '#D3C0CD'
        // }
        // else if (e.Type === 'Metal') {
        //   background = 'red'
        // }
        // else if (e.Type === 'Metalloid') {
        //   background = 'yellow'
        // }
        // else if (e.Type === 'Transition Metal') {
        //   background = '#F92A82'
        // }

        return (
          <div key={e.symbol} style={{ gridRow: e.ypos, gridColumn: e.xpos, backgroundColor: '#' + e['cpk-hex']?.toString() }} className={styles.elementContainer}>
            <div className={styles.elSymbol}>{e.symbol}</div>
            <div style={{ fontSize: '10px' }}>{e.name}</div>
            <div className={styles.elAtomicNum}>{e.number}</div>
          </div>)
      })}
    </div >
  )
}
