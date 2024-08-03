export type Continent = {
  name: string,
  code: string,
  gold: number,
  bronze: number,
  silver: number,
  total: number,
}

export const continents = [
  {
    "name": "Europe",
    "code": "EU",
    "gold": 47,
    "silver": 48,
    "bronze": 57,
    "total": 152
  },
  {
    "name": "Asia",
    "code": "AS",
    "gold": 33,
    "silver": 25,
    "bronze": 32,
    "total": 90
  },
  {
    "name": "America",
    "code": "AM",
    "gold": 16,
    "silver": 25,
    "bronze": 26,
    "total": 67
  },
  {
    "name": "Oceania",
    "code": "OC",
    "gold": 12,
    "silver": 10,
    "bronze": 6,
    "total": 28
  },
  {
    "name": "Africa",
    "code": "AF",
    "gold": 1,
    "silver": 2,
    "bronze": 3,
    "total": 6
  }
]
