export class Task {
  public name: string;
  public descrition: string;
  public minTime: number;
  public maxTime: number;
  public type: string;

  constructor(
    name: string,
    desc: string,
    minTime: number,
    maxTime: number,
    type: string
  ) {
    this.name = name;
    this.descrition = desc;
    this.minTime = minTime;
    this.maxTime = maxTime;
    this.type = type;
  }
}
