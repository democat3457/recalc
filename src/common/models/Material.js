import Model from "common/models/Model";
import keyBy from "lodash/keyBy";

import Measurement from "./Measurement";

export default class Material extends Model {
  constructor(name) {
    super(name, materialMap);
  }

  toDict() {
    return {
      name: this.name,
    };
  }

  static fromDict(dict) {
    return new Material(dict.name);
  }

  getSafeMaterialStrength() {
    return this.tensileStrength.div(3);
  }

  static Steel4140Annealed() {
    return new Material("4140 Steel");
  }

  static Aluminum7075_T6() {
    return new Material("4140 Steel");
  }

  static getAllMaterials() {
    return Object.keys(materialMap).map((m) => new Material(m));
  }
}

class MechanicalProperties {
  constructor({
    hardness,
    tensileModulus,
    tensileStrengthUltimate,
    tensileStrengthYield,
    elongationAtBreak,
    fatigueStrength,
    poissonsRatio,
    shearModulus,
    shearStrength,
    density,
    flexuralModulus,
    flexuralStrength,
    impactNotchedIzod,
  } = {}) {
    this.hardness = hardness;
    this.tensileModulus = tensileModulus;
    this.tensileStrengthUltimate = tensileStrengthUltimate;
    this.tensileStrengthYield = tensileStrengthYield;
    this.elongationAtBreak = elongationAtBreak;
    this.fatigueStrength = fatigueStrength;
    this.poissonsRatio = poissonsRatio;
    this.shearModulus = shearModulus;
    this.shearStrength = shearStrength;
    this.density = density;
    this.flexuralModulus = flexuralModulus;
    this.flexuralStrength = flexuralStrength;
    this.impactNotchedIzod = impactNotchedIzod;
  }
}

class ThermalProperties {
  constructor({
    latentHeatOfFusion,
    maximumTemperatureMechanical,
    meltingCompletion,
    meltingOnset,
    specificHeatCapacity,
    thermalConductivity,
    thermalExpansion,
    heatDeflectionAt66Psi,
    glassTransitionTemperature,
  } = {}) {
    this.latentHeatOfFusion = latentHeatOfFusion;
    this.maximumTemperatureMechanical = maximumTemperatureMechanical;
    this.meltingCompletion = meltingCompletion;
    this.meltingOnset = meltingOnset;
    this.specificHeatCapacity = specificHeatCapacity;
    this.thermalConductivity = thermalConductivity;
    this.thermalExpansion = thermalExpansion;
    this.heatDeflectionAt66Psi = heatDeflectionAt66Psi;
    this.glassTransitionTemperature = glassTransitionTemperature;
  }
}

const GPa = (n) => new Measurement(n, "GPa");
const MPa = (n) => new Measurement(n, "MPa");
const gcm3 = (n) => new Measurement(n, "g/cm3");
const Jg = (n) => new Measurement(n, "J/g");
const C = (n) => new Measurement(n, "celsius");
const JkgK = (n) =>
  new Measurement(n, "J ").div(new Measurement(1, "kg * degK"));
const WmK = (n) => new Measurement(n, "W").div(new Measurement(1, "m * degK"));
const ummK = (n) =>
  new Measurement(n, "micrometers").div(new Measurement(1, "m * degK"));
const Jm = (n) => new Measurement(n, "J/m");

export const materialMap = keyBy(
  [
    // { name: "1020 Steel", tensileStrength: psi(65000) },
    // { name: "1040 Steel", tensileStrength: psi(90000) },
    // { name: "1080 Steel", tensileStrength: psi(140000) },
    // { name: "12L14 Steel", tensileStrength: psi(60000) },
    // { name: "4130 Steel", tensileStrength: psi(97000) },
    // { name: "4140 Steel Annealed", tensileStrength: psi(98000) },
    // { name: "4140 Steel Hardened", tensileStrength: psi(156000) },
    // { name: "Titanium 6AL4V", tensileStrength: psi(130000) },
    // { name: "303 Stainless Steel", tensileStrength: psi(90000) },
    // { name: "5052-H32 Aluminum", tensileStrength: psi(33000) },
    // { name: "6061-T6 Aluminum", tensileStrength: psi(45000) },
    // { name: "2024-T361 Aluminum", tensileStrength: psi(72000) },
    // { name: "7075-T6 Aluminum", tensileStrength: psi(76000) },
    // { name: "Yellow Brass", tensileStrength: psi(71000) },
    // { name: "Polycarbonate", tensileStrength: psi(10500) },
    // { name: "Delrin", tensileStrength: psi(10000) },
    // { name: "Nylon", tensileStrength: psi(11500) },
    // { name: "PVC", tensileStrength: psi(7000) },
    // { name: "UHMW", tensileStrength: psi(4000) },
    {
      material: "Steel",
      name: "4140 Steel",
      mechanical: new MechanicalProperties({
        hardness: 310,
        tensileModulus: GPa(190),
        elongationAtBreak: 16,
        fatigueStrength: MPa(650),
        poissonsRatio: 0.29,
        shearModulus: GPa(73),
        shearStrength: MPa(660),
        tensileStrengthUltimate: MPa(1080),
        tensileStrengthYield: MPa(990),
        density: gcm3(7.8),
      }),
      thermal: new ThermalProperties({
        latentHeatOfFusion: Jg(250),
        maximumTemperatureMechanical: C(420),
        meltingCompletion: C(1460),
        meltingOnset: C(1420),
        specificHeatCapacity: JkgK(470),
        thermalConductivity: WmK(43),
        thermalExpansion: ummK(13),
      }),
    },
    {
      material: "Steel",
      name: "4130 Steel",
      mechanical: new MechanicalProperties({
        hardness: 300,
        tensileModulus: GPa(190),
        elongationAtBreak: 18,
        fatigueStrength: MPa(660),
        poissonsRatio: 0.29,
        shearModulus: GPa(73),
        shearStrength: MPa(640),
        tensileStrengthUltimate: MPa(1040),
        tensileStrengthYield: MPa(980),
        density: gcm3(7.8),
      }),
      thermal: new ThermalProperties({
        latentHeatOfFusion: Jg(250),
        maximumTemperatureMechanical: C(420),
        meltingCompletion: C(1460),
        meltingOnset: C(1420),
        specificHeatCapacity: JkgK(470),
        thermalConductivity: WmK(43),
        thermalExpansion: ummK(13),
      }),
    },
    {
      material: "Aluminum",
      name: "6061-T6 Aluminum",
      mechanical: new MechanicalProperties({
        hardness: 93,
        tensileModulus: GPa(69),
        elongationAtBreak: 10,
        fatigueStrength: MPa(96),
        poissonsRatio: 0.33,
        shearModulus: GPa(26),
        shearStrength: MPa(210),
        tensileStrengthUltimate: MPa(310),
        tensileStrengthYield: MPa(270),
        density: gcm3(2.7),
      }),
      thermal: new ThermalProperties({
        latentHeatOfFusion: Jg(400),
        maximumTemperatureMechanical: C(170),
        meltingCompletion: C(650),
        meltingOnset: C(580),
        specificHeatCapacity: JkgK(900),
        thermalConductivity: WmK(170),
        thermalExpansion: ummK(24),
      }),
    },
    {
      material: "Aluminum",
      name: "7075-T6 Aluminum",
      mechanical: new MechanicalProperties({
        hardness: 150,
        tensileModulus: GPa(70),
        elongationAtBreak: 7.9,
        fatigueStrength: MPa(160),
        poissonsRatio: 0.32,
        shearModulus: GPa(26),
        shearStrength: MPa(330),
        tensileStrengthUltimate: MPa(560),
        tensileStrengthYield: MPa(480),
        density: gcm3(3),
      }),
      thermal: new ThermalProperties({
        latentHeatOfFusion: Jg(380),
        maximumTemperatureMechanical: C(200),
        meltingCompletion: C(640),
        meltingOnset: C(480),
        specificHeatCapacity: JkgK(870),
        thermalConductivity: WmK(130),
        thermalExpansion: ummK(23),
      }),
    },
    {
      material: "PLA",
      name: "Generic PLA",
      mechanical: new MechanicalProperties({
        density: gcm3(1.3),
        tensileModulus: GPa(3.5),
        elongationAtBreak: 6.0,
        flexuralModulus: GPa(4.0),
        flexuralStrength: MPa(80),
        shearModulus: GPa(2.4),
        tensileStrengthUltimate: MPa(50),
      }),
      thermal: new ThermalProperties({
        specificHeatCapacity: JkgK(1800),
        thermalConductivity: WmK(0.13),
        maximumTemperatureMechanical: C(50),
        meltingOnset: C(160),
        heatDeflectionAt66Psi: C(65),
        glassTransitionTemperature: C(60),
      }),
    },
    {
      material: "ABS",
      name: "Generic ABS",
      mechanical: new MechanicalProperties({
        tensileModulus: GPa(2.0),
        elongationAtBreak: 20,
        flexuralModulus: GPa(2.1),
        flexuralStrength: MPa(97),
        impactNotchedIzod: Jm(320),
        poissonsRatio: 0.41,
        tensileStrengthUltimate: MPa(41),
        density: gcm3(1.1),
      }),
      thermal: new ThermalProperties({
        glassTransitionTemperature: C(100),
        heatDeflectionAt66Psi: C(100),
        maximumTemperatureMechanical: C(80),
        specificHeatCapacity: JkgK(1400),
        thermalConductivity: WmK(0.23),
        thermalExpansion: ummK(95),
      }),
    },
  ],
  "name"
);
