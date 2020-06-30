// ENUM
enum Level { Elementary, Intermediate, Advanced }

enum Types {
  Empty, Force, Moment, Distload, Fixed, Simple, Hinge, Material
}

// INTERFACE
interface Unit {
  readonly id: string;
  type: Types;
  x: number | number[];
  value?: number | number[];
}

// MATH FUNCTIONS
function randomInteger(a: number, b: number): number {
  let rand: number = a - 0.5 + Math.random() * (b - a + 1);
  return Math.round(rand);
}

// CONSTANT FUNCTIONS
function getCountByLevel(level: Level): number {
  switch (level) {
    case Level.Elementary:
      return randomInteger(2, 5);
    case Level.Intermediate:
      return randomInteger(3, 8);
    case Level.Advanced:
      return randomInteger(5, 10);
  }
}

// MAIN FUNCTIONS
function initialSettings(level: Level, count: number, length: number): [number, number] {
  const init: [number, number] = [count, length];

  if (count < 2) {
    init[0] = getCountByLevel(level);
  }

  if (length < 0.01) {
    init[1] = randomInteger(1, 5) * 10;
  }

  return init;
}

function createUnits(count: number, length: number): Unit[] {
  const units: Unit[] = [];
  return units;
}

// GENERATE
function Generate(level: Level = Level.Elementary, count: number = 0, length: number = 0) {

  [count, length] = initialSettings(level, count, length)

  const units: Unit[] = createUnits(count, length);

  console.log(level, count, length)
}

Generate()
Generate(Level.Elementary)
Generate(Level.Intermediate)
Generate(Level.Advanced)

Generate(Level.Elementary, 5, 32)
Generate(Level.Elementary, 5, 0)
Generate(Level.Elementary, 0, 5)