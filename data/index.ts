import data from '../public/PubChemElements.json'

export interface Element {
  atomicNumber: number,
  symbol: string,
  name: string,
  atomicMass: number,
  CPKHexColor: string,
  electronConfiguration: string,
  electronegativity: number,
  atomicRadius: number,
  ionizationEnergy: number,
  electronAffinity: number,
  oxidationStates: string,
  standardState: string,
  meltingPoint: number,
  boilingPoint: number,
  density: number,
  groupBlock: string,
  yearDiscovered: number
}

function parseElements(): Element[] {
  return data.Table.Row.map(y => {
    const x = y.Cell
    return {
      atomicNumber: parseInt(x[0]),
      symbol: x[1],
      name: x[2],
      atomicMass: parseFloat(x[3]),
      CPKHexColor: x[4],
      electronConfiguration: x[5],
      electronegativity: parseInt(x[6]),
      atomicRadius: parseInt(x[7]),
      ionizationEnergy: parseFloat(x[8]),
      electronAffinity: parseFloat(x[9]),
      oxidationStates: x[10],
      standardState: x[11],
      meltingPoint: parseFloat(x[12]),
      boilingPoint: parseFloat(x[13]),
      density: parseFloat(x[14]),
      groupBlock: x[15],
      yearDiscovered: parseInt(x[16])
    }
  })
}

export function fetchElements(): (Element | null)[][] {
  const array: (Element | null)[][] = []
  const allElements = parseElements();
  let elementIndex = 0;
  let currentRowIndex = 0;
  for (let row = 0; row < 7; row++) {
    for (let col = 0; col < 18; col++) {
      let element = allElements[elementIndex++];
      const currentRow = array[currentRowIndex] ?? [];
      currentRow.push(element);
    }
  }
  return array;
}

