export interface Passenger {
  name: string;
  children?: string[];
}

const passenger1: Passenger = {
  name: "Jaime",
};

const passenger2: Passenger = {
  name: "Jackelin",
  children: ["Camila", "Ariana"],
};

const printChildren = (passenger: Passenger) => {
  const howManyChildren = passenger.children?.length || 0;

  console.log(passenger.name, howManyChildren);
};

printChildren(passenger1);
